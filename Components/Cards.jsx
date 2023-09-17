import React from "react";
import { daysLeft } from "../utils";

const Cards = ({ allCampaigns, setOpenModal, setDonate, title }) => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <h1 className="pt-4 pb-10 text-3xl font-bold leading-5">{title}</h1>

      {allCampaigns && allCampaigns.length === 0 && <p>No campaigns yet.</p>}

      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {allCampaigns?.map((campaign, i) => (
          <div
            className="cursor-pointer mb-4 border overflow-hidden transition-shadow duration-300 bg-white rounded-2xl"
            onClick={() => {
              setDonate(campaign);
              setOpenModal(true);
            }}
            key={i + 1}
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="object-cover w-full h-64"
            />
            <div className="py-5 pl-4 pr-4">
              <p className="mb-4 text-xs font-semibold text-gray-600 uppercase">
                Days Left: {daysLeft(campaign.deadline)}
              </p>

              <h3 className="text-xl mb-4 font-bold leading-5 text-black">
                {campaign.title}
              </h3>

              <p className=" mb-4 truncate text-black">
                {campaign.description}
              </p>
              {/* flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b */}
              <div className="flex space-x-4 pt-3 border-t border-solid border-slate-200 text-black">
                <p className="font-semibold">Target: {campaign.target} ETH</p>
                <p className="font-semibold">
                  Raised: {campaign.amountCollected} ETH
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
