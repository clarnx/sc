import React, { useState, useEffect, useContext } from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding";

const PopUp = ({
  setOpenModal,
  donate,
  donateFunction,
  getCampaignDonations,
}) => {
  console.log("From modal :", donate);
  const [amount, setAmount] = useState("");
  const [allDonationData, setAllDonationData] = useState();
  const { truncate } = useContext(CrowdFundingContext);

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount);
      setOpenModal(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("From popup :", donate.pId);
    const donationsListData = getCampaignDonations(donate.pId);
    return async () => {
      const donationData = await donationsListData;
      setAllDonationData(donationData);
    };
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto sm:max-w-3xl sm:min-w-[700px] max-w-[95%]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t-xl">
              <h3 className="md:text-3xl text-xl mt-1 font-semibold">
                {donate.title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setOpenModal(false)}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-black text-lg leading-relaxed">
                {donate.description}
              </p>

              <input
                type="number"
                name="firstName"
                id="firstName"
                required
                className="flex-grow w-full h-12 px-4 mb-2 transition border duration-200 bg-white border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                placeholder="ETH 0.1"
                step="0.01"
                onChange={(e) => setAmount(e.target.value)}
              />

              <p className="font-semibold mt-4 text-lg">Donations</p>

              {allDonationData?.map((donationData, i) => (
                <p
                  className="my-4 text-black text-lg leading-relaxed"
                  key={i + 1}
                >
                  {i + 1}: {donationData.donation} ETH {"from "}
                  {truncate(donationData.donator, 4, 4, 11)}
                </p>
              ))}
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                type="button"
                onClick={() => {
                  setOpenModal(false);
                }}
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  createDonation();
                }}
                className="text-white background rounded-full font-bold shadow hover:shadow-lg uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 active:bg-emerald-600"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default PopUp;
