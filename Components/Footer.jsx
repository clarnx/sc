import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donations"];
  const contactList = [
    "efeativie@gmail.com",
    "contact@creativeferry.com",
    "Contact us",
  ];
  const usefulLinks = ["Home", "About Us", "Company Bio"];

  return (
    <footer>
      <div className="text-center text-white backgroundMain lg:text-left mt-16">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                Solve
              </h6>
              <p>
                Help make a difference in this world by partnering financially
                with those with world-changing ideas and sincere needs.
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              {productList.map((el, i) => (
                <p className="mb-4" key={i + 1}>
                  <a href="#!">{el}</a>
                </p>
              ))}
            </div>
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                Useful Links
              </h6>
              {usefulLinks.map((el, i) => (
                <p className="mb-4" key={i + 1}>
                  <a href="#!">{el}</a>
                </p>
              ))}
            </div>
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              {contactList.map((el, i) => (
                <p className="mb-4" key={i + 1}>
                  <a href="#!">{el}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="backgroundMain p-6 text-center">
          <span>©️ 2023 Copyright: </span>
          <a href="mailto:efeativie@gmail.com">Solve</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
