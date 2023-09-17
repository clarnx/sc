import React, { useEffect, useContext, useState } from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Cards, PopUp } from "../Components";

const index = () => {
  const {
    contract,
    currentAccount,
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getCampaignDonations,
  } = useContext(CrowdFundingContext);

  const [allCampaigns, setAllCampaigns] = useState();
  const [userCampaigns, setUserCampaigns] = useState();

  const fetchData = async () => {
    const allData = await getCampaigns();
    const userData = await getUserCampaigns();
    setAllCampaigns(allData);
    setUserCampaigns(userData);
  };

  useEffect(() => {
    if (contract) fetchData();
  }, [currentAccount, contract]);

  const [openModal, setOpenModal] = useState(false);
  const [donateToCampaign, setDonateToCampaign] = useState();

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Cards
        title="All Campaigns"
        allCampaigns={allCampaigns}
        setOpenModal={setOpenModal}
        setDonate={setDonateToCampaign}
      />
      {currentAccount && (
        <Cards
          title="Your Campaigns"
          allCampaigns={userCampaigns}
          setOpenModal={setOpenModal}
          setDonate={setDonateToCampaign}
        />
      )}

      {openModal && (
        <PopUp
          setOpenModal={setOpenModal}
          getCampaignDonations={getCampaignDonations}
          donate={donateToCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default index;
