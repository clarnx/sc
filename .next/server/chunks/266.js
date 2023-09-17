"use strict";
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Eh": () => (/* reexport */ Components_Arrow),
  "oy": () => (/* reexport */ Components_Cards),
  "x8": () => (/* reexport */ Components_Close),
  "$_": () => (/* reexport */ Components_Footer),
  "VM": () => (/* reexport */ Components_Hero),
  "Wm": () => (/* reexport */ Components_ICON),
  "TR": () => (/* reexport */ Components_Logo),
  "v2": () => (/* reexport */ Components_menu),
  "l2": () => (/* reexport */ Components_NavBar),
  "N4": () => (/* reexport */ Components_PopUp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./Components/Footer.jsx


const Footer = ()=>{
    const productList = [
        "Market",
        "ERC20 Token",
        "Donations"
    ];
    const contactList = [
        "efeativie@gmail.com",
        "contact@creativeferry.com",
        "Contact us"
    ];
    const usefulLinks = [
        "Home",
        "About Us",
        "Company Bio"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-center text-white backgroundMain lg:text-left mt-16",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-6 py-10 text-center md:text-left",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-4 flex items-center justify-center font-semibold uppercase md:justify-start",
                                        children: "Solve"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Help make a difference in this world by partnering financially with those with world-changing ideas and sincere needs."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-4 flex items-center justify-center font-semibold uppercase md:justify-start",
                                        children: "Products"
                                    }),
                                    productList.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#!",
                                                children: el
                                            })
                                        }, i + 1))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-4 flex items-center justify-center font-semibold uppercase md:justify-start",
                                        children: "Useful Links"
                                    }),
                                    usefulLinks.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#!",
                                                children: el
                                            })
                                        }, i + 1))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-4 flex items-center justify-center font-semibold uppercase md:justify-start",
                                        children: "Contact"
                                    }),
                                    contactList.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#!",
                                                children: el
                                            })
                                        }, i + 1))
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "backgroundMain p-6 text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "\xa9️ 2023 Copyright: "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:efeativie@gmail.com",
                            children: "Solve"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Components_Footer = (Footer);

// EXTERNAL MODULE: ./Context/CrowdFunding.js + 2 modules
var CrowdFunding = __webpack_require__(754);
;// CONCATENATED MODULE: ./Components/NavBar.jsx




const NavBar = ()=>{
    const { currentAccount , connectWallet , truncate  } = (0,external_react_.useContext)(CrowdFunding/* CrowdFundingContext */.b);
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const menuList = [
        "All campaigns",
        "Your campaigns"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "backgroundMain",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "px-4 py-5 mc-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "/",
                                "aria-label": "Solve",
                                title: "Solve",
                                className: "inline-flex items-center mr-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Components_Logo, {
                                        color: "text-white"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase",
                                        children: "Solve"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "flex items-center hidden space-x-8 lg:flex",
                                children: menuList.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            "aria-label": "Our product",
                                            title: "Our product",
                                            className: "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400",
                                            children: el
                                        })
                                    }, i + 1))
                            })
                        ]
                    }),
                    !currentAccount ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex items-center hidden space-x-8 lg:flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>connectWallet(),
                                className: "inline-flex items-center justify-center h-21 px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background",
                                "aria-label": "Sign up",
                                title: "Sign up",
                                children: "Connect Wallet"
                            })
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex items-center hidden space-x-8 lg:flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "inline-flex number-font-1 items-center justify-center h-21 px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background",
                                "aria-label": "Connected",
                                title: "Connected",
                                children: truncate(currentAccount, 4, 4, 11)
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:hidden z-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "aria-label": "Open menu",
                                title: "Open menu",
                                className: "p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline",
                                onClick: ()=>setIsMenuOpen(true),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Components_menu, {})
                            }),
                            isMenuOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute top-0 left-0 w-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-5 bg-white border rounded shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "/",
                                                        "aria-label": "Solve",
                                                        title: "Solve",
                                                        className: "inline-flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Components_Logo, {
                                                                color: "text-black"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase",
                                                                children: "Solve"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        "aria-label": "Close menu",
                                                        title: "Close menu",
                                                        className: "p-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                                                        onClick: ()=>setIsMenuOpen(false),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Components_Close, {})
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "space-y-4",
                                                children: [
                                                    menuList.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/",
                                                                "aria-label": "Our product",
                                                                title: "Our product",
                                                                className: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
                                                                children: el
                                                            })
                                                        }, i + 1)),
                                                    !currentAccount ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            onClick: ()=>connectWallet(),
                                                            className: "inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none",
                                                            "aria-label": "Sign up",
                                                            title: "Sign up",
                                                            children: "Connect Wallet"
                                                        })
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none",
                                                            "aria-label": "Connected",
                                                            title: "Connected",
                                                            children: truncate(currentAccount, 4, 4, 11)
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_NavBar = (NavBar);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./utils/index.js
const daysLeft = (deadline)=>{
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const difference = deadline - currentTimestamp;
    const remainingDays = difference / (3600 * 24);
    return remainingDays.toFixed(0);
};
const calculateBarPercentage = (goal, raisedAmount)=>{
    const percentage = Math.round(raisedAmount * 100 / goal);
    return percentage;
};
const checkIfImage = (url, callback)=>{
    const img = new Image();
    img.src = url;
    if (img.complete) callback(true);
    img.onload = ()=>callback(true);
    img.onerror = ()=>callback(false);
};

;// CONCATENATED MODULE: ./Components/Hero.jsx





const Hero = ({ titleData , createCampaign  })=>{
    const router = (0,router_.useRouter)();
    const [campaign, setCampaign] = (0,external_react_.useState)({
        title: "",
        description: "",
        target: "",
        deadline: "",
        image: ""
    });
    const createNewCampaign = async (e)=>{
        e.preventDefault();
        checkIfImage(campaign.image, async (exists)=>{
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
                setCampaign({
                    ...campaign,
                    image: ""
                });
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "coverLine"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 ",
                className: "absolute inset-0 object-cover w-full h-full",
                alt: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative bg-opacity-75 backgroundMain",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Components_ICON, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center justify-between xl:flex-row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "max-w-lg mb-10 text-3xl font-extrabold tracking-wide text-white sm:text-6xl sm:leading-none",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "-mb-10 block",
                                                    children: "Global"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    className: "md:block"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "-mb-10  block",
                                                    children: "Crowdfunding"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    className: "md:block"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "block",
                                                    children: "Platform"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "max-w-xl mb-4 text-base text-gray-200 md:text-lg",
                                            children: "Find help for your next project or become a part of other people's success stories."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "/",
                                            "aria-label": "",
                                            className: "inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200",
                                            children: [
                                                "Learn more ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(Components_Arrow, {})
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full max-w-xl xl:px-8 xl:w-5/12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "bg-white rounded-3xl shadow-2xl p-7 sm:p-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl",
                                                children: "Create a campaign"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                onSubmit: createNewCampaign,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mb-1 sm:mb-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                htmlFor: "firstName",
                                                                className: "inline-block mb-1 font-medium",
                                                                children: "Title *"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                className: "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                                                id: "firstName",
                                                                name: "firstName",
                                                                onChange: (e)=>{
                                                                    setCampaign({
                                                                        ...campaign,
                                                                        title: e.target.value
                                                                    });
                                                                },
                                                                placeholder: "Title",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mb-1 sm:mb-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                htmlFor: "lastName",
                                                                className: "inline-block mb-1 font-medium",
                                                                children: "Description *"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                rows: "2",
                                                                type: "text",
                                                                className: "flex-grow w-full px-4 py-3 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                                                id: "lastName",
                                                                name: "lastName",
                                                                onChange: (e)=>{
                                                                    setCampaign({
                                                                        ...campaign,
                                                                        description: e.target.value
                                                                    });
                                                                },
                                                                placeholder: "Description",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex flex-wrap gap-[20px]",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "mb-1 sm:mb-3 flex-1 w-full flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                        htmlFor: "Target",
                                                                        className: "inline-block mb-1 font-medium",
                                                                        children: "Target *"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "number",
                                                                        className: "flex-grow w-full h-12 px-4 mb-2 number-font-1 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                                                        id: "target",
                                                                        name: "target",
                                                                        onChange: (e)=>{
                                                                            setCampaign({
                                                                                ...campaign,
                                                                                target: e.target.value
                                                                            });
                                                                        },
                                                                        placeholder: "ETH 0.1",
                                                                        step: "0.01",
                                                                        required: true
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "mb-1 sm:mb-3 flex-1 w-full flex flex-col ",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                        htmlFor: "Deadline",
                                                                        className: "inline-block mb-1 font-medium",
                                                                        children: "End Date *"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "date",
                                                                        className: "flex-grow w-full h-12 px-4 number-font-1 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                                                        id: "deadline",
                                                                        name: "deadline",
                                                                        onChange: (e)=>{
                                                                            setCampaign({
                                                                                ...campaign,
                                                                                deadline: e.target.value
                                                                            });
                                                                        },
                                                                        placeholder: "End date",
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mb-1 sm:mb-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                htmlFor: "campaign_image",
                                                                className: "inline-block mb-1 font-medium",
                                                                children: "Campaign image *"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "url",
                                                                className: "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                                                id: "campaign_image",
                                                                name: "campaign_image",
                                                                onChange: (e)=>{
                                                                    setCampaign({
                                                                        ...campaign,
                                                                        image: e.target.value
                                                                    });
                                                                },
                                                                placeholder: "Image url",
                                                                required: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mb-1 sm:mb-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            // onClick={(e) => {
                                                            //   createNewCampaign(e);
                                                            // }}
                                                            type: "submit",
                                                            className: "inline-flex items-center justify-center w-full h-12 px-6 mt-2 font-medium tracking-wide text-white transition duration-200 rounded-full background focus:shadow-outline focus:outline-none",
                                                            children: "Create Campaign"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex justify-center mt-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-ts text-gray-600 sm:text-sm",
                                                            children: "Create your campaign to raise funds"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Components_Hero = (Hero);

;// CONCATENATED MODULE: ./Components/PopUp.jsx



const PopUp = ({ setOpenModal , donate , donateFunction , getCampaignDonations  })=>{
    console.log("From modal :", donate);
    const [amount, setAmount] = (0,external_react_.useState)("");
    const [allDonationData, setAllDonationData] = (0,external_react_.useState)();
    const { truncate  } = (0,external_react_.useContext)(CrowdFunding/* CrowdFundingContext */.b);
    const createDonation = async ()=>{
        try {
            const data = await donateFunction(donate.pId, amount);
            setOpenModal(false);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    (0,external_react_.useEffect)(()=>{
        console.log("From popup :", donate.pId);
        const donationsListData = getCampaignDonations(donate.pId);
        return async ()=>{
            const donationData = await donationsListData;
            setAllDonationData(donationData);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-auto my-6 mx-auto sm:max-w-3xl sm:min-w-[700px] max-w-[95%]",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t-xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "md:text-3xl text-xl mt-1 font-semibold",
                                        children: donate.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-1 ml-auto bg-transparent border-0 text-black opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                        onClick: ()=>setOpenModal(false),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none",
                                            children: "X"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative p-6 flex-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "my-4 text-black text-lg leading-relaxed",
                                        children: donate.description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number",
                                        name: "firstName",
                                        id: "firstName",
                                        required: true,
                                        className: "flex-grow w-full h-12 px-4 mb-2 transition border duration-200 bg-white border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
                                        placeholder: "ETH 0.1",
                                        step: "0.01",
                                        onChange: (e)=>setAmount(e.target.value)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-semibold mt-4 text-lg",
                                        children: "Donations"
                                    }),
                                    allDonationData?.map((donationData, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "my-4 text-black text-lg leading-relaxed",
                                            children: [
                                                i + 1,
                                                ": ",
                                                donationData.donation,
                                                " ETH ",
                                                "from ",
                                                truncate(donationData.donator, 4, 4, 11)
                                            ]
                                        }, i + 1))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setOpenModal(false);
                                        },
                                        className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                        children: "Close"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            createDonation();
                                        },
                                        className: "text-white background rounded-full font-bold shadow hover:shadow-lg uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 active:bg-emerald-600",
                                        children: "Donate"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-25 fixed inset-0 z-40 bg-black"
            })
        ]
    });
};
/* harmony default export */ const Components_PopUp = (PopUp);

;// CONCATENATED MODULE: ./Components/Cards.jsx



const Cards = ({ allCampaigns , setOpenModal , setDonate , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "pt-4 pb-10 text-3xl font-bold leading-5",
                children: title
            }),
            allCampaigns && allCampaigns.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "No campaigns yet."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full",
                children: allCampaigns?.map((campaign, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "cursor-pointer mb-4 border overflow-hidden transition-shadow duration-300 bg-white rounded-2xl",
                        onClick: ()=>{
                            setDonate(campaign);
                            setOpenModal(true);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: campaign.image,
                                alt: campaign.title,
                                className: "object-cover w-full h-64"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "py-5 pl-4 pr-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-4 text-xs font-semibold text-gray-600 uppercase",
                                        children: [
                                            "Days Left: ",
                                            daysLeft(campaign.deadline)
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-xl mb-4 font-bold leading-5 text-black",
                                        children: campaign.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: " mb-4 truncate text-black",
                                        children: campaign.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex space-x-4 pt-3 border-t border-solid border-slate-200 text-black",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "font-semibold",
                                                children: [
                                                    "Target: ",
                                                    campaign.target,
                                                    " ETH"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "font-semibold",
                                                children: [
                                                    "Raised: ",
                                                    campaign.amountCollected,
                                                    " ETH"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, i + 1))
            })
        ]
    });
};
/* harmony default export */ const Components_Cards = (Cards);

;// CONCATENATED MODULE: ./Components/Logo.jsx


const Logo = ({ color  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: `w-8 ${color} text-teal-accent-400`,
        viewBox: "0 0 24 24",
        strokeLinejoin: "round",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        stroke: "currentColor",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "3",
                y: "1",
                width: "7",
                height: "12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "3",
                y: "17",
                width: "7",
                height: "6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "14",
                y: "1",
                width: "7",
                height: "6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "14",
                y: "11",
                width: "7",
                height: "12"
            })
        ]
    });
};
/* harmony default export */ const Components_Logo = (Logo);

;// CONCATENATED MODULE: ./Components/menu.jsx


const menu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: "w-5 text-white",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            })
        ]
    });
};
/* harmony default export */ const Components_menu = (menu);

;// CONCATENATED MODULE: ./Components/ICON.jsx


const ICON = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "absolute inset-x-0 bottom-0 text-white",
        viewBox: "0 0 1160 163",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        })
    });
};
/* harmony default export */ const Components_ICON = (ICON);

;// CONCATENATED MODULE: ./Components/Close.jsx


const Close = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "w-5 text-gray-600",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            d: "M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
        })
    });
};
/* harmony default export */ const Components_Close = (Close);

;// CONCATENATED MODULE: ./Components/Arrow.jsx


const Arrow = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "inline-block w-3 ml-2",
        fill: "currentColor",
        viewBox: "0 0 12 12",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
        })
    });
};
/* harmony default export */ const Components_Arrow = (Arrow);

;// CONCATENATED MODULE: ./Components/index.js













/***/ }),

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ CrowdFundingContext),
  "K": () => (/* binding */ CrowdFundingProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(840);
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(982);
;// CONCATENATED MODULE: ./Context/CrowdFunding.json
const CrowdFunding_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"campaigns","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountCollected","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"string","name":"_image","type":"string"}],"name":"createCampaign","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"donateToCampaign","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getCampaigns","outputs":[{"components":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountCollected","type":"uint256"},{"internalType":"address[]","name":"donators","type":"address[]"},{"internalType":"uint256[]","name":"donations","type":"uint256[]"}],"internalType":"struct CrowdFunding.Campaign[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getDonators","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfCampaigns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}');
;// CONCATENATED MODULE: ./Context/contants.js

const CrowdFundingAddress = "0x6Ce24da0aC8ab805Af2c7C205122d27567666B43";
const CrowdFundingABI = CrowdFunding_namespaceObject.Mt;

;// CONCATENATED MODULE: ./Context/CrowdFunding.js





const providerUrl = "https://polygon-mumbai.g.alchemy.com/v2/4anJnw7wfV4t2gmTNMapSOCB7eaT_ZHh";
//---Fetching Smart Contract
const fetchContract = (signerOrProvider)=>new external_ethers_.ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);
const CrowdFundingContext = /*#__PURE__*/ external_react_default().createContext();
const CrowdFundingProvider = ({ children  })=>{
    const titleData = "Crowdfunding Contract";
    const [currentAccount, setCurrentAccount] = (0,external_react_.useState)("");
    const [usersFetchCampaigns, setUsersFetchCampaigns] = (0,external_react_.useState)("");
    const contract = ()=>{
        const provider = new external_ethers_.ethers.providers.JsonRpcProvider(providerUrl);
        const data1 = fetchContract(provider);
        return data1;
    };
    const updateAccount = async ()=>{
        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        });
        setCurrentAccount(accounts[0]);
    };
    const createCampaign = async (campaign)=>{
        const { title , description , target , deadline , image  } = campaign;
        const web3Modal = new (external_web3modal_default())();
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        // console.log(currentAccount);
        // console.log(Math.floor(new Date(deadline).getTime() / 1000));
        try {
            const transaction = await contract.createCampaign(currentAccount, title, description, external_ethers_.ethers.utils.parseUnits(target, 18), Math.floor(new Date(deadline).getTime() / 1000), image);
            await transaction.wait();
            console.log("Contract call success", transaction);
        } catch (error) {
            console.log("Contract call failure", error);
        }
    };
    const getCampaigns = async ()=>{
        const provider = new external_ethers_.ethers.providers.JsonRpcProvider(providerUrl);
        const contract = fetchContract(provider);
        const campaigns = await contract.getCampaigns();
        const parsedCampaigns = await campaigns.map((campaign, i)=>({
                owner: campaign.owner,
                title: campaign.title,
                description: campaign.description,
                target: external_ethers_.ethers.utils.formatEther(campaign.target.toString()),
                deadline: campaign.deadline.toNumber(),
                amountCollected: external_ethers_.ethers.utils.formatEther(campaign.amountCollected.toString()),
                image: campaign.image,
                pId: i
            }));
        return parsedCampaigns;
    };
    const getUserCampaigns = async ()=>{
        const Data = await getCampaigns();
        if (Data) {
            const filteredCampaigns1 = Data.filter((campaign)=>campaign.owner.toLowerCase() === currentAccount.toLowerCase());
            setUsersFetchCampaigns(filteredCampaigns1);
            return filteredCampaigns1;
        } else {
            console.log("From else :", filteredCampaigns);
        }
    };
    const donate = async (pId, amount)=>{
        const web3Modal = new (external_web3modal_default())();
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        try {
            const campaignData = await contract.donateToCampaign(pId, {
                value: external_ethers_.ethers.utils.parseEther(amount)
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
    const getCampaignDonations = async (pId)=>{
        const provider = new external_ethers_.ethers.providers.JsonRpcProvider(providerUrl);
        const contract = fetchContract(provider);
        const donations = await contract.getDonators(pId);
        const numberOfDonations = donations[0].length;
        const parsedDonations = [];
        for(let i = 0; i < numberOfDonations; i++){
            parsedDonations.push({
                donator: donations[0][i],
                donation: external_ethers_.ethers.utils.formatEther(donations[1][i].toString())
            });
        }
        return parsedDonations;
    };
    //---Check if wallet is connected
    const checkIfWalletIsConnected = async ()=>{
        try {
            if (!window.ethereum) return setOpenError(true), setError("Install MetaMask");
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
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
    (0,external_react_.useEffect)(()=>{
        checkIfWalletIsConnected();
    }, []);
    //---Rerender campaigns when switch wallet accounts
    (0,external_react_.useEffect)(()=>{
        window.ethereum.on("accountsChanged", updateAccount);
        // Cleanup function to remove the listener when the component unmounts
        return ()=>window.ethereum.removeListener("accountsChanged", updateAccount);
    }, []);
    //---Connect wallet function
    const connectWallet = async ()=>{
        try {
            if (!window.ethereum) return alert("Install Metamask");
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log("Error while connecting to wallet.");
        }
    };
    const truncate = (text, startChars, endChars, maxLength)=>{
        if (text.length > maxLength) {
            var start = text.substring(0, startChars);
            var end = text.substring(text.length - endChars, text.length);
            while(start.length + end.length < maxLength){
                start = start + ".";
            }
            return start + end;
        }
        return text;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(CrowdFundingContext.Provider, {
        value: {
            contract,
            titleData,
            currentAccount,
            createCampaign,
            getCampaigns,
            getUserCampaigns,
            donate,
            getCampaignDonations,
            connectWallet,
            truncate
        },
        children: children
    });
};


/***/ })

};
;