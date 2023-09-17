import React, { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import { CrowdFundingABI, CrowdFundingAddress } from "./contants";

const providerUrl =
  "https://polygon-mumbai.g.alchemy.com/v2/4anJnw7wfV4t2gmTNMapSOCB7eaT_ZHh";

//---Fetching Smart Contract
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
  const titleData = "Crowdfunding Contract";
  const [currentAccount, setCurrentAccount] = useState("");
  const [usersFetchCampaigns, setUsersFetchCampaigns] = useState("");

  const contract = () => {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const data = fetchContract(provider);
    return data;
  };

  const updateAccount = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    setCurrentAccount(accounts[0]);
  };

  const createCampaign = async (campaign) => {
    const { title, description, target, deadline, image } = campaign;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    // console.log(currentAccount);
    // console.log(Math.floor(new Date(deadline).getTime() / 1000));

    try {
      const transaction = await contract.createCampaign(
        currentAccount,
        title,
        description,
        ethers.utils.parseUnits(target, 18),
        Math.floor(new Date(deadline).getTime() / 1000),
        image
      );

      await transaction.wait();

      console.log("Contract call success", transaction);
    } catch (error) {
      console.log("Contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const contract = fetchContract(provider);

    const campaigns = await contract.getCampaigns();

    const parsedCampaigns = await campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
    }));

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const Data = await getCampaigns();

    if (Data) {
      const filteredCampaigns = Data.filter(
        (campaign) =>
          campaign.owner.toLowerCase() === currentAccount.toLowerCase()
      );
      setUsersFetchCampaigns(filteredCampaigns);
      return filteredCampaigns;
    } else {
      console.log("From else :", filteredCampaigns);
    }
  };

  const donate = async (pId, amount) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    try {
      const campaignData = await contract.donateToCampaign(pId, {
        value: ethers.utils.parseEther(amount),
      });
      await campaignData.wait();
      alert("Donation was successful!");
      // location.reload;
      console.log("Donation was successful!", data);
      return campaignData;
    } catch (error) {
      console.log("Donation failed!", error);
    }
  };

  const getCampaignDonations = async (pId) => {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const contract = fetchContract(provider);

    const donations = await contract.getDonators(pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  //---Check if wallet is connected
  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found.");
      }
    } catch (error) {
      console.log("Something went wrong while connecting to wallet");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  //---Rerender campaigns when switch wallet accounts
  useEffect(() => {
    window.ethereum.on("accountsChanged", updateAccount);

    // Cleanup function to remove the listener when the component unmounts
    return () =>
      window.ethereum.removeListener("accountsChanged", updateAccount);
  }, []);

  //---Connect wallet function
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Error while connecting to wallet.");
    }
  };

  const truncate = (text, startChars, endChars, maxLength) => {
    if (text.length > maxLength) {
      var start = text.substring(0, startChars);
      var end = text.substring(text.length - endChars, text.length);
      while (start.length + end.length < maxLength) {
        start = start + ".";
      }
      return start + end;
    }
    return text;
  };

  return (
    <CrowdFundingContext.Provider
      value={{
        contract,
        titleData,
        currentAccount,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getCampaignDonations,
        connectWallet,
        truncate,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};
