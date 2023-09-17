"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Context/CrowdFunding.js":
/*!*********************************!*\
  !*** ./Context/CrowdFunding.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CrowdFundingContext\": function() { return /* binding */ CrowdFundingContext; },\n/* harmony export */   \"CrowdFundingProvider\": function() { return /* binding */ CrowdFundingProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contants */ \"./Context/contants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst providerUrl = \"https://polygon-mumbai.g.alchemy.com/v2/4anJnw7wfV4t2gmTNMapSOCB7eaT_ZHh\";\n//---Fetching Smart Contract\nconst fetchContract = (signerOrProvider)=>new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_contants__WEBPACK_IMPORTED_MODULE_3__.CrowdFundingAddress, _contants__WEBPACK_IMPORTED_MODULE_3__.CrowdFundingABI, signerOrProvider);\nconst CrowdFundingContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst CrowdFundingProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const titleData = \"Crowdfunding Contract\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [usersFetchCampaigns, setUsersFetchCampaigns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const contract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(providerUrl);\n        const data1 = fetchContract(provider);\n        return data1;\n    };\n    const updateAccount = async ()=>{\n        const accounts = await window.ethereum.request({\n            method: \"eth_accounts\"\n        });\n        setCurrentAccount(accounts[0]);\n    };\n    const createCampaign = async (campaign)=>{\n        const { title , description , target , deadline , image  } = campaign;\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        const contract = fetchContract(signer);\n        // console.log(currentAccount);\n        // console.log(Math.floor(new Date(deadline).getTime() / 1000));\n        try {\n            const transaction = await contract.createCampaign(currentAccount, title, description, ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseUnits(target, 18), Math.floor(new Date(deadline).getTime() / 1000), image);\n            await transaction.wait();\n            console.log(\"Contract call success\", transaction);\n        } catch (error) {\n            console.log(\"Contract call failure\", error);\n        }\n    };\n    const getCampaigns = async ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(providerUrl);\n        const contract = fetchContract(provider);\n        const campaigns = await contract.getCampaigns();\n        const parsedCampaigns = await campaigns.map((campaign, i)=>({\n                owner: campaign.owner,\n                title: campaign.title,\n                description: campaign.description,\n                target: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(campaign.target.toString()),\n                deadline: campaign.deadline.toNumber(),\n                amountCollected: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(campaign.amountCollected.toString()),\n                image: campaign.image,\n                pId: i\n            }));\n        return parsedCampaigns;\n    };\n    const getUserCampaigns = async ()=>{\n        const Data = await getCampaigns();\n        if (Data) {\n            const filteredCampaigns1 = Data.filter((campaign)=>campaign.owner.toLowerCase() === currentAccount.toLowerCase());\n            setUsersFetchCampaigns(filteredCampaigns1);\n            return filteredCampaigns1;\n        } else {\n            console.log(\"From else :\", filteredCampaigns);\n        }\n    };\n    const donate = async (pId, amount)=>{\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        const contract = fetchContract(signer);\n        try {\n            const campaignData = await contract.donateToCampaign(pId, {\n                value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount)\n            });\n            await campaignData.wait();\n            alert(\"Donation was successful!\");\n            // location.reload;\n            console.log(\"Donation was successful!\", data);\n            return campaignData;\n        } catch (error) {\n            console.log(\"Donation failed!\", error);\n        }\n    };\n    const getCampaignDonations = async (pId)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(providerUrl);\n        const contract = fetchContract(provider);\n        const donations = await contract.getDonators(pId);\n        const numberOfDonations = donations[0].length;\n        const parsedDonations = [];\n        for(let i = 0; i < numberOfDonations; i++){\n            parsedDonations.push({\n                donator: donations[0][i],\n                donation: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(donations[1][i].toString())\n            });\n        }\n        return parsedDonations;\n    };\n    //---Check if wallet is connected\n    const checkIfWalletIsConnected = async ()=>{\n        try {\n            if (!window.ethereum) return setOpenError(true), setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0]);\n            } else {\n                console.log(\"No account found.\");\n            }\n        } catch (error) {\n            console.log(\"Something went wrong while connecting to wallet\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUserCampaigns();\n    }, [\n        usersFetchCampaigns\n    ]);\n    //---Rerender campaigns when switch wallet accounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.ethereum.on(\"accountsChanged\", updateAccount);\n        // Cleanup function to remove the listener when the component unmounts\n        return ()=>window.ethereum.removeListener(\"accountsChanged\", updateAccount);\n    }, []);\n    //---Connect wallet function\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) return alert(\"Install Metamask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(\"Error while connecting to wallet.\");\n        }\n    };\n    const truncate = (text, startChars, endChars, maxLength)=>{\n        if (text.length > maxLength) {\n            var start = text.substring(0, startChars);\n            var end = text.substring(text.length - endChars, text.length);\n            while(start.length + end.length < maxLength){\n                start = start + \".\";\n            }\n            return start + end;\n        }\n        return text;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CrowdFundingContext.Provider, {\n        value: {\n            contract,\n            titleData,\n            currentAccount,\n            createCampaign,\n            getCampaigns,\n            getUserCampaigns,\n            donate,\n            getCampaignDonations,\n            connectWallet,\n            truncate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\_projects\\\\Sandbox\\\\solve\\\\Context\\\\CrowdFunding.js\",\n        lineNumber: 202,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrowdFundingProvider, \"cQmRiYGtemfmxhqvQ9YRy1Hpq0I=\");\n_c = CrowdFundingProvider;\nvar _c;\n$RefreshReg$(_c, \"CrowdFundingProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxNQUFNd0MsV0FBVyxDQUFDQyxNQUFNQyxZQUFZQyxVQUFVQyxZQUFjO1FBQzFELElBQUlILEtBQUtaLE1BQU0sR0FBR2UsV0FBVztZQUMzQixJQUFJQyxRQUFRSixLQUFLSyxTQUFTLENBQUMsR0FBR0o7WUFDOUIsSUFBSUssTUFBTU4sS0FBS0ssU0FBUyxDQUFDTCxLQUFLWixNQUFNLEdBQUdjLFVBQVVGLEtBQUtaLE1BQU07WUFDNUQsTUFBT2dCLE1BQU1oQixNQUFNLEdBQUdrQixJQUFJbEIsTUFBTSxHQUFHZSxVQUFXO2dCQUM1Q0MsUUFBUUEsUUFBUTtZQUNsQjtZQUNBLE9BQU9BLFFBQVFFO1FBQ2pCLENBQUM7UUFDRCxPQUFPTjtJQUNUO0lBRUEscUJBQ0UsOERBQUNuRixvQkFBb0IwRixRQUFRO1FBQzNCMUIsT0FBTztZQUNMdkQ7WUFDQUw7WUFDQUM7WUFDQWU7WUFDQXdCO1lBQ0FXO1lBQ0FLO1lBQ0FPO1lBQ0FjO1lBQ0FDO1FBQ0Y7a0JBRUMvRTs7Ozs7O0FBR1AsRUFBRTtHQTNNV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29udGV4dC9Dcm93ZEZ1bmRpbmcuanM/NWRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuaW1wb3J0IHsgQ3Jvd2RGdW5kaW5nQUJJLCBDcm93ZEZ1bmRpbmdBZGRyZXNzIH0gZnJvbSBcIi4vY29udGFudHNcIjtcclxuXHJcbmNvbnN0IHByb3ZpZGVyVXJsID1cclxuICBcImh0dHBzOi8vcG9seWdvbi1tdW1iYWkuZy5hbGNoZW15LmNvbS92Mi80YW5Kbnc3d2ZWNHQyZ21UTk1hcFNPQ0I3ZWFUX1pIaFwiO1xyXG5cclxuLy8tLS1GZXRjaGluZyBTbWFydCBDb250cmFjdFxyXG5jb25zdCBmZXRjaENvbnRyYWN0ID0gKHNpZ25lck9yUHJvdmlkZXIpID0+XHJcbiAgbmV3IGV0aGVycy5Db250cmFjdChDcm93ZEZ1bmRpbmdBZGRyZXNzLCBDcm93ZEZ1bmRpbmdBQkksIHNpZ25lck9yUHJvdmlkZXIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENyb3dkRnVuZGluZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ3Jvd2RGdW5kaW5nUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgdGl0bGVEYXRhID0gXCJDcm93ZGZ1bmRpbmcgQ29udHJhY3RcIjtcclxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2Vyc0ZldGNoQ2FtcGFpZ25zLCBzZXRVc2Vyc0ZldGNoQ2FtcGFpZ25zXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBjb250cmFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKHByb3ZpZGVyVXJsKTtcclxuICAgIGNvbnN0IGRhdGEgPSBmZXRjaENvbnRyYWN0KHByb3ZpZGVyKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUFjY291bnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xyXG4gICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUNhbXBhaWduID0gYXN5bmMgKGNhbXBhaWduKSA9PiB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFyZ2V0LCBkZWFkbGluZSwgaW1hZ2UgfSA9IGNhbXBhaWduO1xyXG4gICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHNpZ25lcik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudEFjY291bnQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coTWF0aC5mbG9vcihuZXcgRGF0ZShkZWFkbGluZSkuZ2V0VGltZSgpIC8gMTAwMCkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQ2FtcGFpZ24oXHJcbiAgICAgICAgY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHModGFyZ2V0LCAxOCksXHJcbiAgICAgICAgTWF0aC5mbG9vcihuZXcgRGF0ZShkZWFkbGluZSkuZ2V0VGltZSgpIC8gMTAwMCksXHJcbiAgICAgICAgaW1hZ2VcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29udHJhY3QgY2FsbCBzdWNjZXNzXCIsIHRyYW5zYWN0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29udHJhY3QgY2FsbCBmYWlsdXJlXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDYW1wYWlnbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcihwcm92aWRlclVybCk7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IGZldGNoQ29udHJhY3QocHJvdmlkZXIpO1xyXG5cclxuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGNvbnRyYWN0LmdldENhbXBhaWducygpO1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZENhbXBhaWducyA9IGF3YWl0IGNhbXBhaWducy5tYXAoKGNhbXBhaWduLCBpKSA9PiAoe1xyXG4gICAgICBvd25lcjogY2FtcGFpZ24ub3duZXIsXHJcbiAgICAgIHRpdGxlOiBjYW1wYWlnbi50aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb246IGNhbXBhaWduLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0YXJnZXQ6IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihjYW1wYWlnbi50YXJnZXQudG9TdHJpbmcoKSksXHJcbiAgICAgIGRlYWRsaW5lOiBjYW1wYWlnbi5kZWFkbGluZS50b051bWJlcigpLFxyXG4gICAgICBhbW91bnRDb2xsZWN0ZWQ6IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihcclxuICAgICAgICBjYW1wYWlnbi5hbW91bnRDb2xsZWN0ZWQudG9TdHJpbmcoKVxyXG4gICAgICApLFxyXG4gICAgICBpbWFnZTogY2FtcGFpZ24uaW1hZ2UsXHJcbiAgICAgIHBJZDogaSxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4gcGFyc2VkQ2FtcGFpZ25zO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFVzZXJDYW1wYWlnbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBEYXRhID0gYXdhaXQgZ2V0Q2FtcGFpZ25zKCk7XHJcblxyXG4gICAgaWYgKERhdGEpIHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRDYW1wYWlnbnMgPSBEYXRhLmZpbHRlcihcclxuICAgICAgICAoY2FtcGFpZ24pID0+XHJcbiAgICAgICAgICBjYW1wYWlnbi5vd25lci50b0xvd2VyQ2FzZSgpID09PSBjdXJyZW50QWNjb3VudC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFVzZXJzRmV0Y2hDYW1wYWlnbnMoZmlsdGVyZWRDYW1wYWlnbnMpO1xyXG4gICAgICByZXR1cm4gZmlsdGVyZWRDYW1wYWlnbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZyb20gZWxzZSA6XCIsIGZpbHRlcmVkQ2FtcGFpZ25zKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkb25hdGUgPSBhc3luYyAocElkLCBhbW91bnQpID0+IHtcclxuICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gZmV0Y2hDb250cmFjdChzaWduZXIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNhbXBhaWduRGF0YSA9IGF3YWl0IGNvbnRyYWN0LmRvbmF0ZVRvQ2FtcGFpZ24ocElkLCB7XHJcbiAgICAgICAgdmFsdWU6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKGFtb3VudCksXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCBjYW1wYWlnbkRhdGEud2FpdCgpO1xyXG4gICAgICBhbGVydChcIkRvbmF0aW9uIHdhcyBzdWNjZXNzZnVsIVwiKTtcclxuICAgICAgLy8gbG9jYXRpb24ucmVsb2FkO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRvbmF0aW9uIHdhcyBzdWNjZXNzZnVsIVwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGNhbXBhaWduRGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRG9uYXRpb24gZmFpbGVkIVwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2FtcGFpZ25Eb25hdGlvbnMgPSBhc3luYyAocElkKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcihwcm92aWRlclVybCk7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IGZldGNoQ29udHJhY3QocHJvdmlkZXIpO1xyXG5cclxuICAgIGNvbnN0IGRvbmF0aW9ucyA9IGF3YWl0IGNvbnRyYWN0LmdldERvbmF0b3JzKHBJZCk7XHJcbiAgICBjb25zdCBudW1iZXJPZkRvbmF0aW9ucyA9IGRvbmF0aW9uc1swXS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgcGFyc2VkRG9uYXRpb25zID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkRvbmF0aW9uczsgaSsrKSB7XHJcbiAgICAgIHBhcnNlZERvbmF0aW9ucy5wdXNoKHtcclxuICAgICAgICBkb25hdG9yOiBkb25hdGlvbnNbMF1baV0sXHJcbiAgICAgICAgZG9uYXRpb246IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihkb25hdGlvbnNbMV1baV0udG9TdHJpbmcoKSksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJzZWREb25hdGlvbnM7XHJcbiAgfTtcclxuXHJcbiAgLy8tLS1DaGVjayBpZiB3YWxsZXQgaXMgY29ubmVjdGVkXHJcbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pXHJcbiAgICAgICAgcmV0dXJuIHNldE9wZW5FcnJvcih0cnVlKSwgc2V0RXJyb3IoXCJJbnN0YWxsIE1ldGFNYXNrXCIpO1xyXG5cclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGgpIHtcclxuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBhY2NvdW50IGZvdW5kLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBjb25uZWN0aW5nIHRvIHdhbGxldFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VXNlckNhbXBhaWducygpO1xyXG4gIH0sIFt1c2Vyc0ZldGNoQ2FtcGFpZ25zXSk7XHJcblxyXG4gIC8vLS0tUmVyZW5kZXIgY2FtcGFpZ25zIHdoZW4gc3dpdGNoIHdhbGxldCBhY2NvdW50c1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgdXBkYXRlQWNjb3VudCk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgcmV0dXJuICgpID0+XHJcbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcihcImFjY291bnRzQ2hhbmdlZFwiLCB1cGRhdGVBY2NvdW50KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vLS0tQ29ubmVjdCB3YWxsZXQgZnVuY3Rpb25cclxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBhbGVydChcIkluc3RhbGwgTWV0YW1hc2tcIik7XHJcblxyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBjb25uZWN0aW5nIHRvIHdhbGxldC5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHJ1bmNhdGUgPSAodGV4dCwgc3RhcnRDaGFycywgZW5kQ2hhcnMsIG1heExlbmd0aCkgPT4ge1xyXG4gICAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICAgIHZhciBzdGFydCA9IHRleHQuc3Vic3RyaW5nKDAsIHN0YXJ0Q2hhcnMpO1xyXG4gICAgICB2YXIgZW5kID0gdGV4dC5zdWJzdHJpbmcodGV4dC5sZW5ndGggLSBlbmRDaGFycywgdGV4dC5sZW5ndGgpO1xyXG4gICAgICB3aGlsZSAoc3RhcnQubGVuZ3RoICsgZW5kLmxlbmd0aCA8IG1heExlbmd0aCkge1xyXG4gICAgICAgIHN0YXJ0ID0gc3RhcnQgKyBcIi5cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RhcnQgKyBlbmQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENyb3dkRnVuZGluZ0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBjb250cmFjdCxcclxuICAgICAgICB0aXRsZURhdGEsXHJcbiAgICAgICAgY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgY3JlYXRlQ2FtcGFpZ24sXHJcbiAgICAgICAgZ2V0Q2FtcGFpZ25zLFxyXG4gICAgICAgIGdldFVzZXJDYW1wYWlnbnMsXHJcbiAgICAgICAgZG9uYXRlLFxyXG4gICAgICAgIGdldENhbXBhaWduRG9uYXRpb25zLFxyXG4gICAgICAgIGNvbm5lY3RXYWxsZXQsXHJcbiAgICAgICAgdHJ1bmNhdGUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ3Jvd2RGdW5kaW5nQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldlYjNNb2RhbCIsImV0aGVycyIsIkNyb3dkRnVuZGluZ0FCSSIsIkNyb3dkRnVuZGluZ0FkZHJlc3MiLCJwcm92aWRlclVybCIsImZldGNoQ29udHJhY3QiLCJzaWduZXJPclByb3ZpZGVyIiwiQ29udHJhY3QiLCJDcm93ZEZ1bmRpbmdDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNyb3dkRnVuZGluZ1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aXRsZURhdGEiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwidXNlcnNGZXRjaENhbXBhaWducyIsInNldFVzZXJzRmV0Y2hDYW1wYWlnbnMiLCJjb250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwiZGF0YSIsInVwZGF0ZUFjY291bnQiLCJhY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImNyZWF0ZUNhbXBhaWduIiwiY2FtcGFpZ24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwiZGVhZGxpbmUiLCJpbWFnZSIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNhY3Rpb24iLCJ1dGlscyIsInBhcnNlVW5pdHMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZ2V0VGltZSIsIndhaXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJnZXRDYW1wYWlnbnMiLCJjYW1wYWlnbnMiLCJwYXJzZWRDYW1wYWlnbnMiLCJtYXAiLCJpIiwib3duZXIiLCJmb3JtYXRFdGhlciIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJhbW91bnRDb2xsZWN0ZWQiLCJwSWQiLCJnZXRVc2VyQ2FtcGFpZ25zIiwiRGF0YSIsImZpbHRlcmVkQ2FtcGFpZ25zIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJkb25hdGUiLCJhbW91bnQiLCJjYW1wYWlnbkRhdGEiLCJkb25hdGVUb0NhbXBhaWduIiwidmFsdWUiLCJwYXJzZUV0aGVyIiwiYWxlcnQiLCJnZXRDYW1wYWlnbkRvbmF0aW9ucyIsImRvbmF0aW9ucyIsImdldERvbmF0b3JzIiwibnVtYmVyT2ZEb25hdGlvbnMiLCJsZW5ndGgiLCJwYXJzZWREb25hdGlvbnMiLCJwdXNoIiwiZG9uYXRvciIsImRvbmF0aW9uIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwic2V0T3BlbkVycm9yIiwic2V0RXJyb3IiLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwiY29ubmVjdFdhbGxldCIsInRydW5jYXRlIiwidGV4dCIsInN0YXJ0Q2hhcnMiLCJlbmRDaGFycyIsIm1heExlbmd0aCIsInN0YXJ0Iiwic3Vic3RyaW5nIiwiZW5kIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Context/CrowdFunding.js\n"));

/***/ })

});