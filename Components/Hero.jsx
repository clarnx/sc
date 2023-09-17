import React, { useState } from "react";
import { useRouter } from "next/router";

import { ICON, Arrow } from "../Components/index";
import { checkIfImage } from "../utils";

const Hero = ({ titleData, createCampaign }) => {
  const router = useRouter();
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();

    checkIfImage(campaign.image, async (exists) => {
      if (exists) {
        // setIsLoading(true);
        try {
          const data = await createCampaign(campaign);
          router.reload();
        } catch (error) {
          console.log(error);
        }
        // setIsLoading(false);
      } else {
        alert("Provide valid image URL");
        setCampaign({ ...campaign, image: "" });
      }
    });
  };

  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260
"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 backgroundMain">
        <ICON />
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h1 className="max-w-lg mb-10 text-3xl font-extrabold tracking-wide text-white sm:text-6xl sm:leading-none">
                <span className="-mb-10 block">Global</span>
                <br className="md:block" />
                <span className="-mb-10  block">Crowdfunding</span>
                <br className="md:block" />
                <span className="block">Platform</span>
              </h1>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Find help for your next project or become a part of other
                people's success stories.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200"
              >
                Learn more <Arrow />
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Create a campaign
                </h3>
                <form onSubmit={createNewCampaign}>
                  <div className="mb-1 sm:mb-3">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Title *
                    </label>
                    <input
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        });
                      }}
                      placeholder="Title"
                      required
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Description *
                    </label>
                    <textarea
                      rows="2"
                      type="text"
                      className="flex-grow w-full px-4 py-3 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        });
                      }}
                      placeholder="Description"
                      required
                    />
                  </div>

                  <div className="flex flex-wrap gap-[20px]">
                    <div className="mb-1 sm:mb-3 flex-1 w-full flex flex-col">
                      <label
                        htmlFor="Target"
                        className="inline-block mb-1 font-medium"
                      >
                        Target *
                      </label>
                      <input
                        type="number"
                        className="flex-grow w-full h-12 px-4 mb-2 number-font-1 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="target"
                        name="target"
                        onChange={(e) => {
                          setCampaign({
                            ...campaign,
                            target: e.target.value,
                          });
                        }}
                        placeholder="ETH 0.1"
                        step="0.01"
                        required
                      />
                    </div>
                    <div className="mb-1 sm:mb-3 flex-1 w-full flex flex-col ">
                      <label
                        htmlFor="Deadline"
                        className="inline-block mb-1 font-medium"
                      >
                        End Date *
                      </label>
                      <input
                        type="date"
                        className="flex-grow w-full h-12 px-4 number-font-1 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="deadline"
                        name="deadline"
                        onChange={(e) => {
                          setCampaign({
                            ...campaign,
                            deadline: e.target.value,
                          });
                        }}
                        placeholder="End date"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-1 sm:mb-3">
                    <label
                      htmlFor="campaign_image"
                      className="inline-block mb-1 font-medium"
                    >
                      Campaign image *
                    </label>
                    <input
                      type="url"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="campaign_image"
                      name="campaign_image"
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          image: e.target.value,
                        });
                      }}
                      placeholder="Image url"
                      required
                    />
                  </div>

                  {/* <div className="mb-1 sm:mb-3">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Your email *
                    </label>
                    <input
                      type="url"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          image: e.target.value,
                        });
                      }}
                      placeholder="Email"
                      required
                    />
                  </div> */}
                  <div className="mb-1 sm:mb-3">
                    <button
                      // onClick={(e) => {
                      //   createNewCampaign(e);
                      // }}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 mt-2 font-medium tracking-wide text-white transition duration-200 rounded-full background focus:shadow-outline focus:outline-none"
                    >
                      Create Campaign
                    </button>
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="text-ts text-gray-600 sm:text-sm">
                      Create your campaign to raise funds
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
