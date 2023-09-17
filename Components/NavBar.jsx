import React, { useContext, useState } from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Logo, Menu, Close } from "../Components/index";

const NavBar = () => {
  const { currentAccount, connectWallet, truncate } =
    useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = ["All campaigns", "Your campaigns"];

  return (
    <div className="backgroundMain">
      <div className="px-4 py-5 mc-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* //---Desktop navigation */}
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Solve"
              title="Solve"
              className="inline-flex items-center mr-8"
            >
              <Logo color="text-white" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Solve
              </span>
            </a>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {!currentAccount ? (
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={() => connectWallet()}
                  className="inline-flex items-center justify-center h-21 px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  className="inline-flex number-font-1 items-center justify-center h-21 px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background"
                  aria-label="Connected"
                  title="Connected"
                >
                  {truncate(currentAccount, 4, 4, 11)}
                </button>
              </li>
            </ul>
          )}
          {/* Mobile navigation */}
          <div className="lg:hidden z-40">
            <button
              aria-label="Open menu"
              title="Open menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Solve"
                        title="Solve"
                        className="inline-flex items-center"
                      >
                        <Logo color="text-black" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Solve
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close menu"
                        title="Close menu"
                        className="p-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Close />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menuList.map((el, i) => (
                        <li key={i + 1}>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {el}
                          </a>
                        </li>
                      ))}

                      {!currentAccount ? (
                        <li>
                          <button
                            onClick={() => connectWallet()}
                            className="inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Connect Wallet
                          </button>
                        </li>
                      ) : (
                        <li>
                          <button
                            className="inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                            aria-label="Connected"
                            title="Connected"
                          >
                            {truncate(currentAccount, 4, 4, 11)}
                          </button>
                        </li>
                      )}
                      {/* <a
                          href="/"
                          class="inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Connect"
                        ></a> */}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
