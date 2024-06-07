(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        35883: function() {},
        46601: function() {},
        10193: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 13036))
        },
        13036: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ee
                }
            });
            var i = n(57437),
                s = n(7449),
                a = n.n(s),
                l = n(96219),
                r = n(2265),
                o = n(56800),
                d = n.n(o),
                c = n(89005),
                u = n(4654);
            let m = e => {
                    if (!e) return "Unknown";
                    let t = e.length;
                    return e.substring(0, 6) + "..." + e.substring(t - 4, t)
                },
                p = e => {
                    let {
                        className: t,
                        color: n
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: "17",
                        height: "16",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: t,
                        style: {
                            display: "inline-block"
                        },
                        children: (0, i.jsx)("path", {
                            d: "M5.5 4.30957V5.68957H9.83L3.01 12.5096L3.99 13.4896L10.81 6.66957V10.9996H12.19V4.30957H5.5Z",
                            fill: n || "#00C4E5"
                        })
                    })
                },
                _ = e => {
                    let {
                        className: t,
                        color: n
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: "16",
                        height: "12",
                        viewBox: "0 0 16 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: t,
                        children: (0, i.jsx)("path", {
                            d: "M5.55 11.575C5.41667 11.575 5.29167 11.554 5.175 11.512C5.05833 11.4707 4.95 11.4 4.85 11.3L0.550001 7.00002C0.366667 6.81669 0.279001 6.57902 0.287001 6.28702C0.295667 5.99569 0.391667 5.75836 0.575 5.57502C0.758334 5.39169 0.991667 5.30002 1.275 5.30002C1.55833 5.30002 1.79167 5.39169 1.975 5.57502L5.55 9.15002L14.025 0.675025C14.2083 0.491691 14.446 0.400024 14.738 0.400024C15.0293 0.400024 15.2667 0.491691 15.45 0.675025C15.6333 0.858358 15.725 1.09569 15.725 1.38702C15.725 1.67902 15.6333 1.91669 15.45 2.10002L6.25 11.3C6.15 11.4 6.04167 11.4707 5.925 11.512C5.80833 11.554 5.68333 11.575 5.55 11.575Z",
                            fill: n || "#fff"
                        })
                    })
                };
            var h = n(87476),
                x = n.n(h),
                f = e => {
                    let {
                        show: t,
                        header: n,
                        children: s,
                        footer: a,
                        style: l,
                        onClose: r
                    } = e;
                    return t ? (0, i.jsx)("div", {
                        className: d()(x().modal_back, "flex justify-center items-center"),
                        onClick: r,
                        children: (0, i.jsxs)("div", {
                            className: d()(x().modal_container, "flex justify-center items-center flex-col"),
                            onClick: e => e.stopPropagation(),
                            style: l,
                            children: [(0, i.jsx)("div", {
                                className: d()(x().modal_header, "flex justify-center items-center flex-col"),
                                children: n
                            }), (0, i.jsx)("div", {
                                className: d()(x().modal_body, "flex justify-center items-center flex-col"),
                                children: s
                            }), (0, i.jsx)("div", {
                                className: d()(x().modal_footer, "flex justify-center items-center flex-col"),
                                children: a
                            })]
                        })
                    }) : null
                },
                v = e => {
                    let {
                        show: t,
                        onClose: n
                    } = e;
                    return (0, i.jsx)(f, {
                        show: t,
                        header: (0, i.jsx)(i.Fragment, {
                            children: "Airdrop Terms and Conditions"
                        }),
                        footer: (0, i.jsxs)("div", {
                            className: d()(x().modal_condition_footer, "flex justify-center items-center flex-col"),
                            children: [(0, i.jsx)("div", {
                                children: "By using this website, you acknowledge and agree to the Token Airdrop Terms."
                            }), (0, i.jsx)("div", {
                                className: d()(x().submit, "flex items-center justify-center"),
                                onClick: () => {
                                    window.localStorage.setItem("Agree_Util_Condition", "true"), n()
                                },
                                children: (0, i.jsx)("span", {
                                    children: "AGREE TO TERMS"
                                })
                            })]
                        }),
                        children: (0, i.jsxs)("div", {
                            className: d()(x().modal_condition, "flex justify-center items-center flex-col"),
                            children: [(0, i.jsx)("p", {
                                children: "ULTIVERSE AIRDROP TERMS "
                            }), (0, i.jsx)("p", {
                                children: "Last Revised On May 30th, 2024 "
                            }), (0, i.jsx)("div", {
                                children: "The Ultiverse Airdrop Program And All Associated Events And Activities Are Not And Will Not Be Offered In The Following Territories And To The Persons Thereof: "
                            }), (0, i.jsx)("div", {
                                children: "1. The United States [As Defined In Regulation S Promulgated Under The U.S. Securities Act of 1933. As amended). "
                            }), (0, i.jsx)("div", {
                                children: "2. Mainland of the People's Republic of China [As Defined In The PRC Securities Law. As amended), excluding Hong Kong, Macau and Taiwan."
                            }), (0, i.jsx)("p", {
                                children: "3. Iran, North Korea, Syria, Luhansk, Donetsk And Crimea Regions Or Ukraine. "
                            }), (0, i.jsx)("div", {
                                children: "Any Ultiverse Airdrop Program Events Are Subject To All terms And Conditions Set Forth In Connection with such Activities. This Site/APP Is Provided For informational Purposes Only And Do Not Guarantee Anyone Any Right To Participate In or Receive Rewards From The Ultiverse Airdrop Program. Also, We Are Not Rewarded From The Ultiverse Airdrop Program."
                            })]
                        })
                    })
                },
                y = n(61694),
                j = n.n(y);
            let g = "";
            var w = e => {
                    let {} = e, {
                        openLoginModal: t,
                        info: n,
                        logout: s
                    } = (0, r.useContext)(l.St), {
                        address: a
                    } = (0, u.mA)(), [o, _] = (0, r.useState)(!1), [h, x] = (0, r.useState)(!1), f = (0, r.useMemo)(() => {
                        var e, t, i, s, l, r, o, d, u, m, p, _;
                        return n && a ? (null == n ? void 0 : null === (t = n.wallets) || void 0 === t ? void 0 : null === (e = t.gameWallet) || void 0 === e ? void 0 : e.address) ? c.Kn(null == n ? void 0 : null === (s = n.wallets) || void 0 === s ? void 0 : null === (i = s.gameWallet) || void 0 === i ? void 0 : i.address) === c.Kn(a) ? null == n ? void 0 : null === (r = n.wallets) || void 0 === r ? void 0 : null === (l = r.gameWallet) || void 0 === l ? void 0 : l.address : null === (u = n.wallets) || void 0 === u ? void 0 : null === (d = u.assetWallets) || void 0 === d ? void 0 : null === (o = d.find(e => c.Kn(e.address) === c.Kn(a))) || void 0 === o ? void 0 : o.address : null === (_ = n.wallets) || void 0 === _ ? void 0 : null === (p = _.assetWallets) || void 0 === p ? void 0 : null === (m = p.find(e => c.Kn(e.address) === c.Kn(a))) || void 0 === m ? void 0 : m.address : null
                    }, [a, n]), y = e => {
                        "show-wallet" !== e.target.id && x(!1)
                    };
                    return (0, r.useEffect)(() => {
                        a && g && c.Kn(g) !== c.Kn(a) ? (g = "", s()) : g = a || ""
                    }, [a]), (0, r.useEffect)(() => (_(!window.localStorage.getItem("Agree_Util_Condition")), document.addEventListener("click", y), () => {
                        document.removeEventListener("click", y)
                    }), []), (0, i.jsxs)("div", {
                        className: d()(j().banner_wrapper, "flex items-center flex-col"),
                        children: [(0, i.jsx)(v, {
                            show: o,
                            onClose: () => _(!1)
                        }), (0, i.jsxs)("div", {
                            className: d()(j().banner_header, "flex justify-between items-center"),
                            children: [(0, i.jsx)("img", {
                                src: "/images/logo.png",
                                alt: ""
                            }), f ? (0, i.jsxs)("div", {
                                className: "flex items-center relative",
                                children: [(0, i.jsxs)("div", {
                                    className: d()(j().account_button, "flex items-center"),
                                    style: {
                                        background: "none",
                                        cursor: "initial",
                                        opacity: 1,
                                        border: "2px solid rgba(255, 255, 255, 0.2)",
                                        padding: "6px 12px"
                                    },
                                    children: [(0, i.jsx)("img", {
                                        id: "show-wallet",
                                        src: "/images/wallet.svg",
                                        alt: "",
                                        onClick: e => {
                                            e.stopPropagation(), x(!0)
                                        }
                                    }), (0, i.jsx)("span", {
                                        children: m(f)
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: d()(j().account_button, "flex items-center"),
                                    onClick: s,
                                    children: [(0, i.jsx)("img", {
                                        src: "/images/logout.svg",
                                        alt: ""
                                    }), (0, i.jsx)("span", {
                                        children: "Logout"
                                    })]
                                }), h && (0, i.jsxs)("div", {
                                    className: d()(j().account_button, "flex items-center", j().mobile),
                                    style: {
                                        background: "#fff",
                                        borderRadius: "8px",
                                        color: "#000",
                                        cursor: "initial",
                                        opacity: 1,
                                        border: "2px solid rgba(255, 255, 255, 0.2)",
                                        padding: "6px 12px",
                                        position: "absolute",
                                        top: 50,
                                        right: 0,
                                        width: "170px"
                                    },
                                    children: [(0, i.jsx)("img", {
                                        src: "/images/wallet_black.svg",
                                        alt: "",
                                        style: {
                                            marginRight: "8px"
                                        }
                                    }), (0, i.jsx)("span", {
                                        style: {
                                            display: "block"
                                        },
                                        children: m(f)
                                    })]
                                })]
                            }) : (0, i.jsx)("div", {
                                className: "flex items-center",
                                children: (0, i.jsxs)("div", {
                                    className: d()(j().account_button, "flex items-center"),
                                    onClick: t,
                                    children: [(0, i.jsx)("img", {
                                        src: "/images/wallet.svg",
                                        alt: ""
                                    }), (0, i.jsx)("span", {
                                        children: "Connect Wallet"
                                    })]
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: d()(j().banner_content, "flex justify-center items-center flex-col"),
                            children: [(0, i.jsx)("img", {
                                src: "/images/logo.svg",
                                alt: ""
                            }), (0, i.jsxs)("div", {
                                className: j().banner_title_2,
                                children: [(0, i.jsx)("span", {
                                    children: "CLAIM YOUR"
                                }), (0, i.jsx)("span", {
                                    className: j().highlight,
                                    children: " $ULTI "
                                }), (0, i.jsx)("span", {
                                    children: "NOW"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: j().banner_desc,
                                children: [(0, i.jsx)("p", {
                                    className: "mb-[8px]",
                                    children: "Public Claim Phase Coming Soon!"
                                }), (0, i.jsx)("p", {
                                    className: "mb-[8px]",
                                    children: "Claim Time: Before June 6th, 6 PM HKT / 10 AM UTC / 6 AM EST"
                                }), (0, i.jsx)("p", {
                                    children: "1. This claim phase is open to all users."
                                }), (0, i.jsx)("p", {
                                    className: "mb-[8px]",
                                    children: "2. OKX users who missed the last claim phase or filled invalid OKX account information will also be able to claim again in this phase."
                                }), (0, i.jsxs)("p", {
                                    children: [(0, i.jsx)("span", {
                                        children: "Please follow our "
                                    }), (0, i.jsx)("a", {
                                        href: "https://x.com/UltiverseDAO",
                                        target: "_blank",
                                        children: "X Account"
                                    }), (0, i.jsx)("span", {
                                        children: " for the latest updates!"
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: d()(j().account_wrapper, "flex justify-center items-center"),
                                children: f ? (0, i.jsxs)("div", {
                                    className: d()(j().wallet_disconnect, "flex justify-center items-center"),
                                    children: [(0, i.jsx)("span", {
                                        children: "CURRENT WALLET: "
                                    }), (0, i.jsx)("span", {
                                        className: j().current,
                                        children: m(f)
                                    })]
                                }) : (0, i.jsx)("div", {
                                    className: d()(j().wallet_connect, "flex justify-center items-center"),
                                    onClick: t,
                                    children: (0, i.jsx)("span", {
                                        children: "CONNECT WALLET"
                                    })
                                })
                            }), (0, i.jsxs)("div", {
                                className: d()(j().rules, "flex justify-center items-center"),
                                onClick: () => window.open("https://ultiversedao.medium.com/ulti-tge-token-claim-guidelines-5aa772904ef2"),
                                children: [(0, i.jsx)("span", {
                                    children: "RULES"
                                }), (0, i.jsx)(p, {})]
                            })]
                        })]
                    })
                },
                b = n(16463),
                C = n(26686),
                N = n(48469),
                T = n(87807),
                k = n(22554);
            let L = {
                    1: "",
                    56: "0xe5a4F2405f6ac6B74C5162e2ab8B12d7BCFC6bD0",
                    97: "0x7a6c827d9c5Ca23a7E5d421b6d495808FD2ED354"
                },
                A = {
                    1: "",
                    56: "0x253c566a8CD1611736b6d9591faa37A19D17845F",
                    97: "0x22456a489a8CAf38FE25178778dCf0Af8087Fc6c"
                },
                S = {
                    1: "0x009763528e2232D644C50Da15D70A8d15288a90a",
                    11155111: "0xAA39188290143CD03dA6612938112a099D0B60cC"
                },
                U = {
                    1: "0xEB127cFb2972F56093862525023e117CF9dc8C38",
                    11155111: "0x86B8C207520d92F7378B4e1Ba7e4cA060d1490A9"
                },
                I = Number("56"),
                O = Number("1"),
                M = (e, t, n) => {
                    let i = new T.Q(e, "any").getSigner();
                    return new k.CH(t, n, i)
                },
                E = async (e, t) => {
                    let n = M(e, U[O], ["function setApprovalForAll(address operator, bool _approved)", "function isApprovedForAll(address owner, address operator) view returns (bool)"]);
                    if (!await n.isApprovedForAll(t, S[O])) {
                        let e = await n.setApprovalForAll(S[O], !0);
                        return await e.wait()
                    }
                },
                B = e => e.mul(120).div(100);
            var F = n(13777),
                R = n.n(F),
                P = () => (0, i.jsx)("div", {
                    className: "flex items-center justify-center w-[100%]",
                    children: (0, i.jsxs)("div", {
                        className: d()(R().footer_container, "flex items-center justify-between"),
                        children: [(0, i.jsx)("img", {
                            src: "/images/logo.png",
                            alt: "",
                            className: R().logo
                        }), (0, i.jsx)("div", {
                            className: R().p_cp,
                            children: "\xa9 2024 Ultiverse. All Rights Reserved"
                        }), (0, i.jsxs)("div", {
                            className: "flex",
                            children: [(0, i.jsx)("img", {
                                src: "/images/twitter.svg",
                                alt: "",
                                className: R().media,
                                onClick: () => window.open("https://x.com/UltiverseDAO")
                            }), (0, i.jsx)("img", {
                                src: "/images/discord.svg",
                                alt: "",
                                className: R().media,
                                onClick: () => window.open("https://discord.com/invite/ultiverse")
                            }), (0, i.jsx)("img", {
                                src: "/images/youtube.svg",
                                alt: "",
                                className: R().media,
                                onClick: () => window.open("https://www.youtube.com/c/Ultiverse")
                            })]
                        }), (0, i.jsx)("div", {
                            className: R().m_cp,
                            children: "\xa9 2024 Ultiverse. All Rights Reserved"
                        })]
                    })
                }),
                W = n(42710),
                K = n.n(W),
                D = JSON.parse('[{"inputs":[{"internalType":"address","name":"chip_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExceedMaxBatchSize","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"ChipBurned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"size","type":"uint256"}],"name":"MaxBatchSizeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"batchBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"burnedTokenOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chip","outputs":[{"internalType":"contract IERC721Burnable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxBatchSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSize","type":"uint256"}],"name":"setMaxBatchSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userBurnedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),
                Q = e => {
                    let {
                        disabled: t
                    } = e, {
                        getAccessToken: n,
                        info: s
                    } = (0, r.useContext)(l.St), {
                        address: a,
                        connector: o
                    } = (0, u.mA)(), {
                        switchNetworkAsync: m
                    } = (0, u.g0)({
                        chainId: O
                    }), p = (0, N.VY)(), [h, x] = (0, r.useState)(!1), [f, v] = (0, r.useState)([]), [y, j] = (0, r.useState)({}), [g, w] = (0, r.useState)(0), b = (0, r.useMemo)(() => {
                        var e, t, n, i, l, r, o, d, u, m, p, _;
                        return s && a ? (null == s ? void 0 : null === (t = s.wallets) || void 0 === t ? void 0 : null === (e = t.gameWallet) || void 0 === e ? void 0 : e.address) ? c.Kn(null == s ? void 0 : null === (i = s.wallets) || void 0 === i ? void 0 : null === (n = i.gameWallet) || void 0 === n ? void 0 : n.address) === c.Kn(a) ? null == s ? void 0 : null === (r = s.wallets) || void 0 === r ? void 0 : null === (l = r.gameWallet) || void 0 === l ? void 0 : l.address : null === (u = s.wallets) || void 0 === u ? void 0 : null === (d = u.assetWallets) || void 0 === d ? void 0 : null === (o = d.find(e => c.Kn(e.address) === c.Kn(a))) || void 0 === o ? void 0 : o.address : null === (_ = s.wallets) || void 0 === _ ? void 0 : null === (p = _.assetWallets) || void 0 === p ? void 0 : null === (m = p.find(e => c.Kn(e.address) === c.Kn(a))) || void 0 === m ? void 0 : m.address : null
                    }, [a, s]), T = (0, r.useMemo)(() => f.filter(e => !e.burned), [f]), k = (0, r.useMemo)(() => Object.keys(y).filter(e => y[e]).length, [y]), L = async e => {
                        var t;
                        v([]);
                        let i = await fetch("/api/es/chip?wallet=".concat(c.Kn(e)), {
                                method: "POST",
                                headers: {
                                    Ultiverse_Authorization: n() || "",
                                    current_time: Date.now().toString()
                                }
                            }).then(e => e.json()).catch(() => ({
                                success: !1
                            })),
                            [s] = await (0, C.JH)({
                                contracts: [{
                                    address: S[O],
                                    abi: D,
                                    functionName: "userBurnedCount",
                                    args: [e],
                                    chainId: O
                                }]
                            });
                        w(Number((null == s ? void 0 : null === (t = s.result) || void 0 === t ? void 0 : t.toString()) || 0));
                        let a = Array.isArray(i.data) ? i.data : [],
                            l = {},
                            r = 0;
                        a.forEach(e => {
                            !e.burned && r < 50 && (l[e.tokenId] = !0, r++)
                        }), v(a), j(l)
                    }, A = (0, r.useCallback)(async () => {
                        if (!o) {
                            p.error("Connector is undefined, please login again!");
                            return
                        }
                        x(!0);
                        try {
                            let e = await o.getChainId();
                            m && e !== O && await m();
                            let t = Object.keys(y).filter(e => y[e]);
                            if (t.length > 50) {
                                p.error("You can only choose up to 50 chips"), x(!1);
                                return
                            }
                            let n = await o.getProvider(),
                                i = M(n, S[O], D),
                                s = await o.getAccount();
                            await E(n, s);
                            let a = i.estimateGas.batchBurn,
                                l = i.batchBurn,
                                r = await a(t),
                                d = await l(t, {
                                    gasLimit: B(r)
                                });
                            await d.wait(), p.success("Claim successful"), L(s)
                        } catch (e) {
                            console.error(e), p.error("Claim failed"), x(!1)
                        }
                        x(!1)
                    }, [y, o]), U = (0, r.useCallback)(e => {
                        if (Object.keys(y).filter(e => y[e]).length >= 50 && !y[e]) {
                            p.error("You can only choose up to 50 chips each time you burn");
                            return
                        }
                        j({ ...y,
                            [e]: !y[e]
                        })
                    }, [y, j]);
                    return (0, r.useEffect)(() => {
                        b ? L(b) : v([])
                    }, [b]), (0, i.jsxs)("div", {
                        className: d()(K().chip_container),
                        children: [T.length > 0 ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: d()(K().chip_text),
                                children: "Please select chips you want to burn"
                            }), (0, i.jsx)("div", {
                                className: d()(K().chip_list, "flex flex-wrap"),
                                children: T.map(e => (0, i.jsxs)("div", {
                                    className: d()(K().chip_item),
                                    onClick: () => U(e.tokenId),
                                    children: [(0, i.jsx)("img", {
                                        src: e.image,
                                        alt: ""
                                    }), (0, i.jsxs)("div", {
                                        className: d()(K().chip_id),
                                        children: ["#", e.tokenId]
                                    }), y[e.tokenId] && (0, i.jsx)("div", {
                                        className: d()(K().chip_choose, "flex items-center justify-center"),
                                        children: (0, i.jsx)(_, {
                                            color: "rgba(91, 89, 89, 1)"
                                        })
                                    })]
                                }, e.tokenId))
                            }), (0, i.jsxs)("div", {
                                className: d()(K().chip_result, "flex flex-col items-end"),
                                children: [(0, i.jsxs)("div", {
                                    className: d()(K().chip_text),
                                    style: {
                                        marginBottom: 0
                                    },
                                    children: [(0, i.jsx)("span", {
                                        children: "BURN "
                                    }), (0, i.jsx)("span", {
                                        style: {
                                            color: "#fff",
                                            fontWeight: 600
                                        },
                                        children: k
                                    }), (0, i.jsx)("span", {
                                        children: " CHIPS TO CLAIM"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex mt-[8px] mb-[8px] items-center",
                                    children: [(0, i.jsx)("img", {
                                        src: "/images/token.svg",
                                        alt: "",
                                        className: "w-[24px] h-[24px] mr-[8px]"
                                    }), (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("span", {
                                            className: K().list_item_content_count,
                                            children: (5e4 * k).toLocaleString()
                                        }), (0, i.jsx)("span", {
                                            className: K().list_item_content_unit,
                                            children: "ULTI"
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: d()(K().chip_text),
                                    children: [(0, i.jsxs)("span", {
                                        style: {
                                            color: "#fff",
                                            fontWeight: 600
                                        },
                                        children: [(7500 * k).toLocaleString(), " ULTI"]
                                    }), (0, i.jsx)("span", {
                                        children: " will be airdropped to your wallet soon, the remaining will be released linearly over 15 months"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: d()(t ? K().submit_disabled : K().submit, "flex items-center justify-center", h ? K().submit_loading : ""),
                                    onClick: A,
                                    children: [h && (0, i.jsx)(l.Ho, {}), (0, i.jsx)("span", {
                                        children: "BURN"
                                    })]
                                })]
                            })]
                        }) : null, (0, i.jsxs)("div", {
                            className: d()(K().chip_history),
                            style: 0 === T.length ? {
                                borderTop: "none",
                                paddingTop: 0,
                                marginTop: 0
                            } : void 0,
                            children: [(0, i.jsx)("div", {
                                className: d()(K().chip_text),
                                children: "CLAIM HISTORY"
                            }), (0, i.jsxs)("div", {
                                className: d()("flex justify-between items-center"),
                                children: [(0, i.jsxs)("div", {
                                    className: d()(K().chip_text),
                                    style: {
                                        color: "#fff",
                                        marginBottom: 0
                                    },
                                    children: [(0, i.jsx)("span", {
                                        children: "BURNED "
                                    }), (0, i.jsx)("span", {
                                        style: {
                                            fontWeight: 600
                                        },
                                        children: g
                                    }), (0, i.jsx)("span", {
                                        children: " CHIPS"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("span", {
                                            className: K().list_item_content_count,
                                            children: (5e4 * g).toLocaleString()
                                        }), (0, i.jsx)("span", {
                                            className: K().list_item_content_unit,
                                            children: "ULTI"
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: d()("flex justify-between items-center mt-[12px]"),
                                children: [(0, i.jsx)("div", {
                                    className: d()(K().chip_text),
                                    style: {
                                        color: "#fff",
                                        marginBottom: 0
                                    },
                                    children: "TGE UNLOCK"
                                }), (0, i.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("span", {
                                            className: K().list_item_content_count,
                                            children: (5e4 * g * .15).toLocaleString()
                                        }), (0, i.jsx)("span", {
                                            className: K().list_item_content_unit,
                                            children: "ULTI"
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: d()("flex justify-between items-center mt-[12px]"),
                                style: {
                                    color: "rgba(255, 255, 255, 0.2)"
                                },
                                children: [(0, i.jsx)("div", {
                                    className: d()(K().chip_text),
                                    style: {
                                        marginBottom: 0
                                    },
                                    children: "REMAINING"
                                }), (0, i.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("span", {
                                            className: K().list_item_content_count,
                                            children: (5e4 * g * .85).toLocaleString()
                                        }), (0, i.jsx)("span", {
                                            className: K().list_item_content_unit,
                                            children: "ULTI"
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: d()(K().chip_history),
                                children: (0, i.jsx)("div", {
                                    className: d()(K().chip_text),
                                    style: {
                                        marginBottom: 0
                                    },
                                    children: "Tips: 15% ULTI will be airdropped soon. There will be some delay in the distribution of the ULTI token due to the ULTI token and the Gold Chip NFTs being on different blockchains."
                                })
                            })]
                        })]
                    })
                },
                H = JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"address","name":"token_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"ClaimNotAvailable","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[],"name":"UserAlreadyClaimed","type":"error"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"uint128","name":"startTime","type":"uint128"},{"internalType":"uint128","name":"endTime","type":"uint128"}],"indexed":false,"internalType":"struct MerkleAirdrop.AirdropConfig","name":"config","type":"tuple"}],"name":"ConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UserClaimed","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"airdropConfig","outputs":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"uint128","name":"startTime","type":"uint128"},{"internalType":"uint128","name":"endTime","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"uint128","name":"startTime","type":"uint128"},{"internalType":"uint128","name":"endTime","type":"uint128"}],"internalType":"struct MerkleAirdrop.AirdropConfig","name":"config","type":"tuple"}],"name":"setAirdropConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ultiToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userClaimedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                G = e => {
                    let {
                        show: t,
                        uid: n,
                        confirming: s,
                        onConfirm: a,
                        address: r,
                        onClose: o
                    } = e;
                    return (0, i.jsx)(f, {
                        show: t,
                        onClose: o,
                        style: {
                            padding: "24px"
                        },
                        header: (0, i.jsx)(i.Fragment, {
                            children: (0, i.jsx)(i.Fragment, {
                                children: "Claim ULTI"
                            })
                        }),
                        footer: (0, i.jsx)("div", {
                            className: "flex justify-center items-center flex-col w-[100%]",
                            children: (0, i.jsxs)("div", {
                                style: {
                                    marginTop: 0,
                                    width: "100%",
                                    maxWidth: "100%",
                                    height: "42px"
                                },
                                className: d()(n && r ? x().submit : x().submit_disabled, "flex items-center justify-center", s ? x().submit_loading : ""),
                                onClick: a,
                                children: [s && (0, i.jsx)(l.Ho, {}), (0, i.jsx)("span", {
                                    children: "SUBMIT"
                                })]
                            })
                        }),
                        children: (0, i.jsxs)("div", {
                            style: {
                                maxWidth: "480px",
                                textAlign: "center"
                            },
                            className: "flex flex-col justify-center items-center",
                            children: [(0, i.jsx)("span", {
                                children: "You will claim ULTI to your wallet: "
                            }), (0, i.jsx)("span", {
                                style: {
                                    fontWeight: 600,
                                    wordBreak: "break-all"
                                },
                                children: r
                            }), (0, i.jsx)("span", {
                                children: "Please check address again."
                            })]
                        })
                    })
                },
                Y = n(53684),
                z = n.n(Y);
            let X = {
                    "moonlight-holder": "Moonlight (Meta GF)",
                    "metamerge-holder": "Meta Merge Pets - S",
                    "bac-holder": "BAC Genesis Runner",
                    "cyber8ball-holder": "Cyber8Ball Cue NFTs",
                    "cricketfly-holder": "CricketFly Genesis Pass"
                },
                V = {
                    CodeChallengeKey: "Ultiverse_Rewards_Tw_CodeChallengeKey"
                };
            var Z = () => {
                let {
                    getAccessToken: e,
                    info: t
                } = (0, r.useContext)(l.St), {
                    address: n,
                    connector: s
                } = (0, u.mA)(), {
                    switchNetworkAsync: a
                } = (0, u.g0)({
                    chainId: I
                }), o = (0, b.useSearchParams)(), _ = (0, N.VY)(), h = (0, b.useRouter)(), [x, f] = (0, r.useState)(""), [v, y] = (0, r.useState)(""), [j, g] = (0, r.useState)(0), [w, T] = (0, r.useState)(0), [k, S] = (0, r.useState)(0), [U, O] = (0, r.useState)({
                    nftQuantities: 0,
                    tokenQuantities: 0
                }), [E, F] = (0, r.useState)({
                    tokenQuantities: 0,
                    details: []
                }), [R, W] = (0, r.useState)(null), [K, D] = (0, r.useState)({
                    es: !1,
                    soul: !1
                }), [Y, Z] = (0, r.useState)(!1), [q, J] = (0, r.useState)(!1), [$, ee] = (0, r.useState)(!1), [et, en] = (0, r.useState)(!1), [ei, es] = (0, r.useState)(!1), [ea, el] = (0, r.useState)({
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                }), er = (0, r.useMemo)(() => {
                    var e, i, s, a, l, r, o, d, u, m, p, _;
                    return t && n ? (null == t ? void 0 : null === (i = t.wallets) || void 0 === i ? void 0 : null === (e = i.gameWallet) || void 0 === e ? void 0 : e.address) ? c.Kn(null == t ? void 0 : null === (a = t.wallets) || void 0 === a ? void 0 : null === (s = a.gameWallet) || void 0 === s ? void 0 : s.address) === c.Kn(n) ? null == t ? void 0 : null === (r = t.wallets) || void 0 === r ? void 0 : null === (l = r.gameWallet) || void 0 === l ? void 0 : l.address : null === (u = t.wallets) || void 0 === u ? void 0 : null === (d = u.assetWallets) || void 0 === d ? void 0 : null === (o = d.find(e => c.Kn(e.address) === c.Kn(n))) || void 0 === o ? void 0 : o.address : null === (_ = t.wallets) || void 0 === _ ? void 0 : null === (p = _.assetWallets) || void 0 === p ? void 0 : null === (m = p.find(e => c.Kn(e.address) === c.Kn(n))) || void 0 === m ? void 0 : m.address : null
                }, [n, t]), eo = async t => {
                    let n = await fetch("/api/token?wallet=".concat(c.Kn(t)), {
                        method: "POST",
                        headers: {
                            Ultiverse_Authorization: e() || "",
                            current_time: Date.now().toString()
                        }
                    }).then(e => e.json()).catch(() => ({
                        success: !1
                    }));
                    if (Array.isArray(n.data)) {
                        var i, s, a, l, r, o, d, u;
                        let e = (null === (a = n.data.find(e => "soul" === e.type)) || void 0 === a ? void 0 : null === (s = a.details) || void 0 === s ? void 0 : null === (i = s.find(e => "part-1" === e.type)) || void 0 === i ? void 0 : i.soul) || 0,
                            t = (null === (l = n.data.find(e => "okx-activity" === e.type)) || void 0 === l ? void 0 : l.tokenQuantities) || 0,
                            c = (null === (r = n.data.find(e => "safepal-activity" === e.type)) || void 0 === r ? void 0 : r.tokenQuantities) || 0,
                            m = (null === (o = n.data.find(e => "nft" === e.type)) || void 0 === o ? void 0 : o.details) || [],
                            p = n.data.find(e => "es-holder" === e.type) || {
                                nftQuantities: 0,
                                tokenQuantities: 0
                            },
                            _ = (null === (d = n.data.find(e => "nft" === e.type)) || void 0 === d ? void 0 : d.tokenQuantities) || 0,
                            h = (null === (u = n.data.find(e => "es-holder" === e.type)) || void 0 === u ? void 0 : u.esTokens) || [];
                        g(Number(e.toFixed(2))), T(Number(t.toFixed(2))), S(Number(c.toFixed(2))), F({
                            tokenQuantities: _,
                            details: m
                        }), O(p), el({
                            1: h.filter(e => 1 === e.level).length,
                            2: h.filter(e => 2 === e.level).length,
                            3: h.filter(e => 3 === e.level).length,
                            4: h.filter(e => 4 === e.level).length
                        })
                    } else g(0), T(0), S(0), F({
                        tokenQuantities: 0,
                        details: []
                    }), O({
                        nftQuantities: 0,
                        tokenQuantities: 0
                    }), el({
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0
                    })
                }, ed = (0, r.useCallback)(async e => {
                    var t, n;
                    let [i, s] = await (0, C.JH)({
                        contracts: [{
                            address: L[I],
                            abi: H,
                            functionName: "userClaimedAmounts",
                            args: [e],
                            chainId: I
                        }, {
                            address: A[I],
                            abi: H,
                            functionName: "userClaimedAmounts",
                            args: [e],
                            chainId: I
                        }]
                    });
                    D({
                        es: (null === (t = i.result) || void 0 === t ? void 0 : t.toString()) !== "0",
                        soul: (null === (n = s.result) || void 0 === n ? void 0 : n.toString()) !== "0"
                    })
                }, [D]), ec = async t => {
                    W((await fetch("/api/token/status?wallet=".concat(c.Kn(t)), {
                        method: "POST",
                        headers: {
                            Ultiverse_Authorization: e() || "",
                            current_time: Date.now().toString()
                        }
                    }).then(e => e.json()).catch(() => ({
                        success: !1
                    }))).data)
                }, eu = (0, r.useCallback)(async () => {
                    ee(!0), await fetch("/api/twitter/connect?redirect_uri=".concat(location.origin), {
                        method: "POST",
                        headers: {
                            Ultiverse_Authorization: e() || "",
                            current_time: Date.now().toString()
                        }
                    }).then(e => e.json()).then(e => {
                        var t;
                        let n = null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.authUrl;
                        if (n) {
                            let e = new URL(n).searchParams.get("code_challenge");
                            if (e) {
                                localStorage.setItem(V.CodeChallengeKey, e), window.location.href = n;
                                return
                            }
                            _.error("Not found code_challenge")
                        } else _.error("Get auth_url faild")
                    }).catch(e => console.error(e)), ee(!1)
                }, [ee]), em = (0, r.useCallback)(async t => {
                    var n, i, l, r, o, d, u;
                    let m = "es" === t ? J : Z;
                    if (!er) return;
                    if (!s) {
                        _.error("Connector is undefined, please login again!");
                        return
                    }
                    m(!0);
                    let p = await fetch("/api/token/signature/".concat(t, "?wallet=").concat(c.Kn(er)), {
                        method: "POST",
                        headers: {
                            Ultiverse_Authorization: e() || "",
                            current_time: Date.now().toString()
                        }
                    }).then(e => e.json()).catch(() => ({
                        success: !1
                    }));
                    if (!(null == p ? void 0 : null === (n = p.data) || void 0 === n ? void 0 : n.proof)) {
                        _.error((null == p ? void 0 : null === (i = p.data) || void 0 === i ? void 0 : i.message) || "Get proof failed"), m(!1);
                        return
                    }
                    let h = M(await s.getProvider(), ("es" === t ? L : A)[I], H);
                    try {
                        let e = await s.getChainId();
                        a && e !== I && await a();
                        let t = h.estimateGas.claim,
                            n = h.claim,
                            {
                                amount: i,
                                proof: l
                            } = p.data,
                            r = await t(i, l),
                            o = await n(i, l, {
                                gasLimit: B(r)
                            });
                        await o.wait(1), _.success("Claim successful"), await ed(er), en(!1), es(!1)
                    } catch (e) {
                        m(!1), console.error(e);
                        try {
                            let t = (null == e ? void 0 : null === (r = e.error) || void 0 === r ? void 0 : null === (l = r.data) || void 0 === l ? void 0 : l.data) ? null === (o = h.interface.getError(null == e ? void 0 : null === (u = e.error) || void 0 === u ? void 0 : null === (d = u.data) || void 0 === d ? void 0 : d.data)) || void 0 === o ? void 0 : o.name : "Claim failed";
                            _.error(t || "Claim failed")
                        } catch (e) {
                            _.error("Claim failed")
                        }
                    }
                    m(!1)
                }, [er, s, Z, J, en, es, ed]), ep = (0, r.useCallback)(() => {
                    es(!0)
                }, [R, es, eu]), e_ = (0, r.useCallback)(() => {
                    en(!0)
                }, [R, en, eu]);
                return ((0, r.useEffect)(() => {
                    er ? (ec(er), eo(er), ed(er)) : (g(0), T(0), S(0), F({
                        tokenQuantities: 0,
                        details: []
                    }), O({
                        nftQuantities: 0,
                        tokenQuantities: 0
                    }), el({
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0
                    }), W(null), D({
                        es: !1,
                        soul: !1
                    }))
                }, [er]), (0, r.useEffect)(() => {
                    let t = o.get("code");
                    if ("twicnct" === o.get("state") && t && er) {
                        let n = localStorage.getItem(V.CodeChallengeKey);
                        if (!n) {
                            _.error("Not found codeChallenge");
                            return
                        }
                        localStorage.removeItem(V.CodeChallengeKey), ee(!0), fetch("/api/twitter/check?wallet=".concat(c.Kn(er)), {
                            method: "POST",
                            headers: {
                                Ultiverse_Authorization: e() || "",
                                current_time: Date.now().toString()
                            },
                            body: JSON.stringify({
                                code: t,
                                redirect_uri: location.origin,
                                code_challenge: n
                            })
                        }).then(e => e.json()).then(async e => {
                            e.success ? (_.success("Verify X account successful"), ec(er)) : _.error(e.data.err || e.data.message || "Verify X account failed"), h.replace("/"), ee(!1)
                        }).catch(e => {
                            console.error(e), _.error("Verify X account failed"), ee(!1)
                        })
                    }
                }, [o, er]), er) ? (0, i.jsxs)("div", {
                    className: d()(z().list_background),
                    children: [er && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(G, {
                            uid: (null == R ? void 0 : R.okxUid) || "-",
                            address: er || "-",
                            show: et,
                            onClose: () => {
                                en(!1), Z(!1)
                            },
                            onConfirm: () => em("soul"),
                            confirming: Y
                        }), (0, i.jsx)(G, {
                            uid: (null == R ? void 0 : R.okxUid) || "-",
                            address: er || "-",
                            show: ei,
                            onClose: () => {
                                es(!1), J(!1)
                            },
                            onConfirm: () => em("es"),
                            confirming: q
                        })]
                    }), (0, i.jsx)("div", {
                        className: d()(z().list_container, "flex flex-col items-center"),
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: d()(z().list_item, "flex items-start", z().list_es),
                                style: {
                                    marginTop: "32px"
                                },
                                children: [(0, i.jsx)("img", {
                                    src: "/images/Item/es.png",
                                    alt: "",
                                    className: "w-[80px] h-[80px] mr-[24px]"
                                }), (0, i.jsxs)("div", {
                                    className: "flex-1 w-[100%]",
                                    children: [(0, i.jsx)("div", {
                                        className: z().list_item_title,
                                        children: "ELECTRICSHEEP NFT HOLDER"
                                    }), (0, i.jsxs)("div", {
                                        className: z().list_item_desc,
                                        children: [(0, i.jsx)("p", {
                                            children: "Those who hold ES NFT can receive airdrops:"
                                        }), (0, i.jsxs)("p", {
                                            children: [(0, i.jsx)("span", {
                                                children: "- Level 1: 20% TGE unlock, 12-month linear vesting, no cliff. "
                                            }), (0, i.jsxs)("span", {
                                                children: ["Count: ", ea[1]]
                                            })]
                                        }), (0, i.jsxs)("p", {
                                            children: [(0, i.jsx)("span", {
                                                children: "- Level 2: 25% TGE unlock, 10-month linear vesting, no cliff. "
                                            }), (0, i.jsxs)("span", {
                                                children: ["Count: ", ea[2]]
                                            })]
                                        }), (0, i.jsxs)("p", {
                                            children: [(0, i.jsx)("span", {
                                                children: "- Level 3: 30% TGE unlock, 8-month linear vesting, no cliff. "
                                            }), (0, i.jsxs)("span", {
                                                children: ["Count: ", ea[3]]
                                            })]
                                        }), (0, i.jsxs)("p", {
                                            children: [(0, i.jsx)("span", {
                                                children: "- Level 4: 35% TGE unlock, 6-month linear vesting, no cliff. "
                                            }), (0, i.jsxs)("span", {
                                                children: ["Count: ", ea[4]]
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: d()(z().list_item_content_wrapper, "flex flex-col items-center"),
                                        children: (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)("div", {
                                                className: d()(z().list_item_content, "flex items-center justify-center"),
                                                children: [(0, i.jsxs)("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [(0, i.jsx)("div", {
                                                        className: z().list_item_content_title,
                                                        children: "CURRENTLY HOLDING"
                                                    }), (0, i.jsx)("div", {
                                                        className: "flex mt-[8px] items-center",
                                                        children: (0, i.jsxs)("div", {
                                                            children: [(0, i.jsx)("span", {
                                                                className: z().list_item_content_count,
                                                                children: U.nftQuantities.toLocaleString()
                                                            }), (0, i.jsx)("span", {
                                                                className: z().list_item_content_unit,
                                                                children: "ES"
                                                            })]
                                                        })
                                                    })]
                                                }), (0, i.jsx)("img", {
                                                    src: "/images/right_arrow.svg",
                                                    alt: ""
                                                }), (0, i.jsxs)("div", {
                                                    className: "flex-1 flex flex-col items-center",
                                                    children: [(0, i.jsx)("div", {
                                                        className: z().list_item_content_title,
                                                        children: "YOU CAN CLAIM"
                                                    }), (0, i.jsxs)("div", {
                                                        className: "flex mt-[8px] items-center",
                                                        children: [(0, i.jsx)("img", {
                                                            src: "/images/token.svg",
                                                            alt: "",
                                                            className: "w-[24px] h-[24px] mr-[8px]"
                                                        }), (0, i.jsxs)("div", {
                                                            children: [(0, i.jsx)("span", {
                                                                className: z().list_item_content_count,
                                                                children: K.es || (null == R ? void 0 : R.okxWallet) ? 0 : Number(U.tokenQuantities.toFixed(2)).toLocaleString()
                                                            }), (0, i.jsx)("span", {
                                                                className: z().list_item_content_unit,
                                                                children: "ULTI"
                                                            })]
                                                        })]
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: d()(!(U.tokenQuantities > 0) || K.es || (null == R ? void 0 : R.okxWallet) ? z().submit_disabled : z().submit, "flex items-center justify-center mb-[24px]", q || $ ? z().submit_loading : ""),
                                                onClick: U.tokenQuantities > 0 ? ep : void 0,
                                                children: [q || $ && (0, i.jsx)(l.Ho, {}), (0, i.jsx)("span", {
                                                    children: (null == R ? void 0 : R.okxWallet) ? "ALREADY CLAIMED" : U.tokenQuantities > 0 ? "CLAIM" : "NO QUOTA"
                                                })]
                                            }), (null == R ? void 0 : R.okxWallet) && (0, i.jsxs)("div", {
                                                className: d()(z().chip_text, "px-[24px] mt-[-12px]"),
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: [(0, i.jsx)("span", {
                                                    children: "You have already claimed "
                                                }), (0, i.jsxs)("span", {
                                                    style: {
                                                        color: "#fff",
                                                        fontWeight: 600
                                                    },
                                                    children: [Number(U.tokenQuantities.toFixed(2)).toLocaleString(), " ULTI"]
                                                }), (0, i.jsxs)("span", {
                                                    children: [" to your OKX Deposit Address", "(".concat(m(null == R ? void 0 : R.okxWallet), ")"), "."]
                                                })]
                                            }), K.es && (0, i.jsxs)("div", {
                                                className: d()(z().chip_text, "px-[24px] mt-[-12px]"),
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: [(0, i.jsx)("span", {
                                                    children: "You have already claimed "
                                                }), (0, i.jsxs)("span", {
                                                    style: {
                                                        color: "#fff",
                                                        fontWeight: 600
                                                    },
                                                    children: [Number(U.tokenQuantities.toFixed(2)).toLocaleString(), " ULTI"]
                                                }), (0, i.jsx)("span", {
                                                    children: " to your wallet."
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: d()(z().list_item, "flex items-start"),
                                children: [(0, i.jsx)("img", {
                                    src: "/images/Item/chip.png",
                                    alt: "",
                                    className: "w-[60px] h-[60px] mr-[24px]"
                                }), (0, i.jsxs)("div", {
                                    className: "flex-1 w-[100%]",
                                    children: [(0, i.jsx)("div", {
                                        className: z().list_item_title,
                                        children: "GOLD CHIP NFT HOLDER"
                                    }), (0, i.jsxs)("div", {
                                        className: z().list_item_desc,
                                        children: [(0, i.jsx)("p", {
                                            children: "Burned Gold Chip NFT yields ULTI airdrops based on the following vesting terms:"
                                        }), (0, i.jsx)("p", {
                                            children: "- 15% TGE unlock, 15-month linear vesting, no cliff."
                                        }), (0, i.jsx)("p", {
                                            children: "- Gold Chip NFT list may have a delay, please be patient if you find it has not been updated."
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: d()(z().list_item_content_wrapper, "flex flex-col items-center"),
                                        children: (0, i.jsx)(Q, {
                                            disabled: !1
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: d()(z().list_item, "flex items-start"),
                                style: {
                                    borderBottom: "none"
                                },
                                children: [(0, i.jsx)("img", {
                                    src: "/images/Item/nft.png",
                                    alt: "",
                                    className: "w-[60px] h-[60px] mr-[24px]"
                                }), (0, i.jsxs)("div", {
                                    className: "flex-1 w-[100%]",
                                    children: [(0, i.jsx)("div", {
                                        className: z().list_item_title,
                                        children: "OTHERS"
                                    }), (0, i.jsxs)("div", {
                                        className: z().list_item_desc,
                                        children: ["Holders of Ecosystem NFTs, SOUL", "(include Pilot Event)", ", and Eligible Airdrop Campaign Participants."]
                                    }), (0, i.jsx)("div", {
                                        className: d()(z().list_item_content_wrapper, "flex flex-col"),
                                        children: (0, i.jsxs)("div", {
                                            className: d()(z().list_item_content, "flex flex-col"),
                                            children: [(0, i.jsx)("div", {
                                                className: d()(z().list_item_content_title, "mb-[16px]"),
                                                children: "SOUL (50% unlocked at TGE, with the remaining 50% unlocked one month later) "
                                            }), (0, i.jsxs)("div", {
                                                className: "w-[100%]",
                                                children: [(0, i.jsxs)("div", {
                                                    className: d()(z().list_item_nft_wrapper, "flex items-center justify-between"),
                                                    children: [(0, i.jsx)("div", {
                                                        className: z().list_item_nft_title,
                                                        children: "Soul - 1st Batch Distribution"
                                                    }), (0, i.jsx)("div", {
                                                        className: "flex items-end justify-between, flex-col",
                                                        children: (0, i.jsxs)("div", {
                                                            children: [(0, i.jsx)("span", {
                                                                className: z().list_item_content_count,
                                                                children: K.soul || (null == R ? void 0 : R.okxWallet) ? 0 : j.toLocaleString()
                                                            }), (0, i.jsx)("span", {
                                                                className: z().list_item_content_unit,
                                                                children: "ULTI"
                                                            })]
                                                        })
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: d()(z().list_item_nft_wrapper, "flex items-center justify-between"),
                                                    style: {
                                                        color: "rgba(255, 255, 255, 0.2)"
                                                    },
                                                    children: [(0, i.jsx)("div", {
                                                        className: z().list_item_nft_title,
                                                        children: "Soul - 2nd Batch Distribution"
                                                    }), (0, i.jsx)("div", {
                                                        className: "flex items-end justify-between, flex-col",
                                                        children: (0, i.jsxs)("div", {
                                                            children: [(0, i.jsx)("span", {
                                                                className: z().list_item_content_count,
                                                                children: j.toLocaleString()
                                                            }), (0, i.jsx)("span", {
                                                                className: z().list_item_content_unit,
                                                                children: "ULTI"
                                                            })]
                                                        })
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: z().list_line
                                                }), (0, i.jsx)("div", {
                                                    className: d()(z().list_item_content_title, "mb-[16px]"),
                                                    children: "YOUR ECOSYSTEM NFT HOLDINGS"
                                                }), Object.keys(X).map(e => {
                                                    var t;
                                                    return (0, i.jsxs)("div", {
                                                        className: d()(z().list_item_nft_wrapper, "flex items-center justify-between"),
                                                        children: [(0, i.jsx)("div", {
                                                            className: z().list_item_nft_title,
                                                            children: X[e]
                                                        }), (0, i.jsxs)("div", {
                                                            children: [(0, i.jsx)("span", {
                                                                className: z().list_item_content_count,
                                                                children: K.soul || (null == R ? void 0 : R.okxWallet) ? 0 : Number(((null === (t = E.details.find(t => t.type === e)) || void 0 === t ? void 0 : t.tokenQuantities) || 0).toFixed(2)).toLocaleString()
                                                            }), (0, i.jsx)("span", {
                                                                className: z().list_item_content_unit,
                                                                children: "ULTI"
                                                            })]
                                                        })]
                                                    }, e)
                                                }), (0, i.jsx)("div", {
                                                    className: z().list_line
                                                }), (0, i.jsx)("div", {
                                                    className: d()(z().list_item_content_title, "mb-[16px]"),
                                                    children: "OTHER AIRDROP CAMPAIGNS"
                                                }), (0, i.jsxs)("div", {
                                                    className: d()(z().list_item_nft_wrapper, "flex items-center justify-between"),
                                                    children: [(0, i.jsx)("div", {
                                                        className: z().list_item_nft_title,
                                                        children: "OKX Cryptopedia"
                                                    }), (0, i.jsxs)("div", {
                                                        children: [(0, i.jsx)("span", {
                                                            className: z().list_item_content_count,
                                                            children: K.soul || (null == R ? void 0 : R.okxWallet) ? 0 : w.toLocaleString()
                                                        }), (0, i.jsx)("span", {
                                                            className: z().list_item_content_unit,
                                                            children: "ULTI"
                                                        })]
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: d()(z().list_item_nft_wrapper, "flex items-center justify-between"),
                                                    children: [(0, i.jsx)("div", {
                                                        className: z().list_item_nft_title,
                                                        children: "SafePal Event"
                                                    }), (0, i.jsxs)("div", {
                                                        children: [(0, i.jsx)("span", {
                                                            className: z().list_item_content_count,
                                                            children: K.soul || (null == R ? void 0 : R.okxWallet) ? 0 : k.toLocaleString()
                                                        }), (0, i.jsx)("span", {
                                                            className: z().list_item_content_unit,
                                                            children: "ULTI"
                                                        })]
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex flex-col items-end pt-[16px] w-[100%]",
                                                style: {
                                                    borderTop: "1px solid hsla(0, 0%, 100%, .2)"
                                                },
                                                children: [(0, i.jsx)("div", {
                                                    className: d()(z().list_item_content_title),
                                                    children: "TOTAL"
                                                }), (0, i.jsxs)("div", {
                                                    className: "flex mt-[8px] items-center",
                                                    children: [(0, i.jsx)("img", {
                                                        src: "/images/token.svg",
                                                        alt: "",
                                                        className: "w-[24px] h-[24px] mr-[8px]"
                                                    }), (0, i.jsxs)("div", {
                                                        children: [(0, i.jsx)("span", {
                                                            className: z().list_item_content_count,
                                                            children: K.soul || (null == R ? void 0 : R.okxWallet) ? 0 : Number((E.tokenQuantities + j + w + k).toFixed(2)).toLocaleString()
                                                        }), (0, i.jsx)("span", {
                                                            className: z().list_item_content_unit,
                                                            children: "ULTI"
                                                        })]
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: d()(!(E.tokenQuantities + j + w + k > 0) || K.soul || (null == R ? void 0 : R.okxWallet) ? z().submit_disabled : z().submit, "flex items-center justify-center mt-[20px]", Y || $ ? z().submit_loading : ""),
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    onClick: E.tokenQuantities + j + w + k > 0 ? e_ : void 0,
                                                    children: [Y || $ && (0, i.jsx)(l.Ho, {}), (0, i.jsx)("span", {
                                                        children: (null == R ? void 0 : R.okxWallet) ? "ALREADY CLAIMED" : E.tokenQuantities + j + w + k > 0 ? "CLAIM" : "NO QUOTA"
                                                    })]
                                                }), (null == R ? void 0 : R.okxWallet) && (0, i.jsxs)("div", {
                                                    className: d()(z().chip_text, "pt-[12px]"),
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [(0, i.jsx)("span", {
                                                        children: "You have already claimed "
                                                    }), (0, i.jsxs)("span", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: 600
                                                        },
                                                        children: [Number((E.tokenQuantities + j + w + k).toFixed(2)).toLocaleString(), " ULTI"]
                                                    }), (0, i.jsxs)("span", {
                                                        children: [" to your OKX Deposit Address", "(".concat(m(null == R ? void 0 : R.okxWallet), ")"), "."]
                                                    })]
                                                }), K.soul && (0, i.jsxs)("div", {
                                                    className: d()(z().chip_text, "pt-[12px]"),
                                                    style: {
                                                        textAlign: "center",
                                                        marginBottom: "0"
                                                    },
                                                    children: [(0, i.jsx)("span", {
                                                        children: "You have already claimed "
                                                    }), (0, i.jsxs)("span", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: 600
                                                        },
                                                        children: [Number((E.tokenQuantities + j + w + k).toFixed(2)).toLocaleString(), " ULTI"]
                                                    }), (0, i.jsx)("span", {
                                                        children: " to your wallet."
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                children: (0, i.jsxs)("div", {
                                    className: d()(z().ex_text, "flex justify-center items-center"),
                                    style: {
                                        marginRight: 0,
                                        paddingLeft: 0,
                                        borderLeft: "none",
                                        marginBottom: "32px"
                                    },
                                    children: [(0, i.jsx)("span", {
                                        children: "Need help? Contact us:"
                                    }), (0, i.jsxs)("span", {
                                        className: z().ex_hightlight,
                                        onClick: () => window.open("https://discord.com/invite/ultiverse"),
                                        children: [(0, i.jsx)("span", {
                                            children: "Submit a Ticket"
                                        }), (0, i.jsx)(p, {
                                            color: "#fff"
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), (0, i.jsx)(P, {})]
                }) : null
            };
            let q = e => {
                    let {
                        style: t,
                        options: n,
                        message: s
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: "global-alert-box",
                        style: t,
                        children: ["success" === n.type && (0, i.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                                d: "M10.6 13.8L8.425 11.625C8.24167 11.4417 8.01667 11.35 7.75 11.35C7.48333 11.35 7.25 11.45 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.0833 16.0833 10.3167 16.175 10.6 16.175C10.8833 16.175 11.1167 16.0833 11.3 15.9L16.975 10.225C17.1583 10.0417 17.25 9.81667 17.25 9.55C17.25 9.28333 17.15 9.05 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z",
                                fill: "white"
                            })
                        }), "error" === n.type && (0, i.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                                d: "M7.7 16.3C7.88333 16.4833 8.11667 16.575 8.4 16.575C8.68333 16.575 8.91667 16.4833 9.1 16.3L12 13.4L14.925 16.325C15.1083 16.5083 15.3377 16.5957 15.613 16.587C15.8877 16.579 16.1167 16.4833 16.3 16.3C16.4833 16.1167 16.575 15.8833 16.575 15.6C16.575 15.3167 16.4833 15.0833 16.3 14.9L13.4 12L16.325 9.075C16.5083 8.89167 16.5957 8.66233 16.587 8.387C16.579 8.11233 16.4833 7.88333 16.3 7.7C16.1167 7.51667 15.8833 7.425 15.6 7.425C15.3167 7.425 15.0833 7.51667 14.9 7.7L12 10.6L9.075 7.675C8.89167 7.49167 8.66267 7.404 8.388 7.412C8.11267 7.42067 7.88333 7.51667 7.7 7.7C7.51667 7.88333 7.425 8.11667 7.425 8.4C7.425 8.68333 7.51667 8.91667 7.7 9.1L10.6 12L7.675 14.925C7.49167 15.1083 7.40433 15.3373 7.413 15.612C7.421 15.8873 7.51667 16.1167 7.7 16.3ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z",
                                fill: "#D0000D"
                            })
                        }), (0, i.jsx)("span", {
                            children: s
                        })]
                    })
                },
                J = {
                    offset: "12px",
                    timeout: 5e3,
                    position: N.m7.TOP_CENTER
                };
            var $ = n(25566);

            function ee() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a(), {
                        children: [(0, i.jsx)("meta", {
                            name: "description",
                            content: "Claim your Ultiverse rewards now and unlock exclusive benefits and incentives!"
                        }), (0, i.jsx)("link", {
                            rel: "canonical",
                            href: "https://rewards.ultiverse.io/"
                        }), (0, i.jsx)("meta", {
                            property: "og:title",
                            content: "Ultiverse Rewards Claim"
                        }), (0, i.jsx)("meta", {
                            property: "og:site_name",
                            content: "Ultiverse Rewards Claim"
                        }), (0, i.jsx)("meta", {
                            property: "og:description",
                            content: "Claim your Ultiverse rewards now and unlock exclusive benefits and incentives!"
                        }), (0, i.jsx)("meta", {
                            property: "og:image",
                            content: "https://rewards.ultiverse.io/seo/home.png"
                        }), (0, i.jsx)("meta", {
                            property: "og:url",
                            content: "https://rewards.ultiverse.io/"
                        }), (0, i.jsx)("meta", {
                            property: "og:type",
                            content: "article"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:title",
                            content: "Ultiverse Rewards Claim"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:description",
                            content: "Claim your Ultiverse rewards now and unlock exclusive benefits and incentives!"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:image",
                            content: "https://rewards.ultiverse.io/seo/home.png"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:url",
                            content: "https://rewards.ultiverse.io/"
                        }), "\xe5", (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0"
                        }), (0, i.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }), (0, i.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: "anonymous"
                        })]
                    }), (0, i.jsx)("main", {
                        children: (0, i.jsx)(l.iV, {
                            options: {
                                walletConnectProjectId: "7c4dad5f5d0ac285c57f1a0e7fb89b2c",
                                requestUrl: "https://toolkit.ultiverse.io",
                                accountRequestUrl: "https://account-api.ultiverse.io",
                                autoConnect: !0,
                                onlyWallet: !0,
                                apiKey: "Y2xvdWRfZ2FtZUBkV3gwYVhabGNuTmw=",
                                chainId: Number($.env.NEXT_PUBLIC_CHAIN_ID || 1),
                                providerMap: {
                                    mainnet: "https://eth-mainnet.nodereal.io/v1/37b35c74c44e4b49944392b53d770b37"
                                }
                            },
                            children: (0, i.jsx)(l.dr, {
                                children: (0, i.jsxs)(N.zt, {
                                    template: q,
                                    ...J,
                                    children: [(0, i.jsx)(w, {
                                        showES: !1
                                    }), (0, i.jsx)(Z, {})]
                                })
                            })
                        })
                    })]
                })
            }
        },
        61694: function(e) {
            e.exports = {
                banner_wrapper: "Banner_banner_wrapper__CyQgQ",
                banner_header: "Banner_banner_header__8x8pM",
                banner_content: "Banner_banner_content__9w6uW",
                banner_title: "Banner_banner_title__DeifQ",
                banner_title_2: "Banner_banner_title_2__kmyk_",
                highlight: "Banner_highlight__FPTGh",
                banner_desc: "Banner_banner_desc__euVQ0",
                account_wrapper: "Banner_account_wrapper__cHiiz",
                wallet_connect: "Banner_wallet_connect__mgKJh",
                wallet_disconnect: "Banner_wallet_disconnect__mRjL8",
                current: "Banner_current__vBbMN",
                rules: "Banner_rules__iL4iF",
                account_button: "Banner_account_button__U2y1n",
                mobile: "Banner_mobile__bbA9A"
            }
        },
        13777: function(e) {
            e.exports = {
                footer_container: "Footer_footer_container__Yk_0i",
                logo: "Footer_logo__tdzSK",
                media: "Footer_media__mKl_q",
                m_cp: "Footer_m_cp__zKwz8",
                p_cp: "Footer_p_cp__ElL6z"
            }
        },
        42710: function(e) {
            e.exports = {
                chip_container: "chip_chip_container__6qFze",
                chip_text: "chip_chip_text__XCedv",
                chip_list: "chip_chip_list__kJ8sk",
                chip_item: "chip_chip_item__TgqUf",
                chip_id: "chip_chip_id__GBb54",
                chip_choose: "chip_chip_choose__I_QVA",
                list_item_content_count: "chip_list_item_content_count__ZHob2",
                list_item_content_unit: "chip_list_item_content_unit__ETWgu",
                submit: "chip_submit__F6slZ",
                submit_disabled: "chip_submit_disabled__U2itu",
                submit_loading: "chip_submit_loading__LZZl5",
                success: "chip_success__vdSN_",
                chip_history: "chip_chip_history__pljLy"
            }
        },
        53684: function(e) {
            e.exports = {
                list_background: "List_list_background__jPTfi",
                list_container: "List_list_container__flBpQ",
                ex_container: "List_ex_container__syLDq",
                ex_hightlight: "List_ex_hightlight__WmFaH",
                ex_text: "List_ex_text__wouqw",
                wallet_connect: "List_wallet_connect__tuuQ2",
                wallet_disconnect: "List_wallet_disconnect__7P26R",
                current: "List_current__3UQxb",
                list_item: "List_list_item__jVjTC",
                list_item_title: "List_list_item_title__Bqvdl",
                list_item_desc: "List_list_item_desc__UG9ij",
                list_item_content_wrapper: "List_list_item_content_wrapper__t7aUY",
                list_item_content: "List_list_item_content__kJuUU",
                list_item_content_title: "List_list_item_content_title__Hjne9",
                list_item_content_count: "List_list_item_content_count__Xfz4a",
                list_item_content_unit: "List_list_item_content_unit__9BTba",
                list_item_nft_wrapper: "List_list_item_nft_wrapper___Owon",
                list_item_nft_title: "List_list_item_nft_title__39_uu",
                claim_disabled: "List_claim_disabled__QEpQ4",
                to_es: "List_to_es__nh0zg",
                okx_container: "List_okx_container__4qWti",
                okx_title: "List_okx_title__cq4n_",
                okx_info: "List_okx_info__niHxo",
                okx_info_id: "List_okx_info_id__rh1xF",
                okx_info_address: "List_okx_info_address__fEoSX",
                okx_tips: "List_okx_tips__MaIkr",
                okx_submit: "List_okx_submit__txYwr",
                okx_submit_disabled: "List_okx_submit_disabled__MguBC",
                okx_submit_loading: "List_okx_submit_loading__ynOmH",
                okx_success: "List_okx_success__XZJt_",
                chip_text: "List_chip_text__RtLw6",
                submit: "List_submit__HX_WS",
                submit_disabled: "List_submit_disabled__H9eY_",
                submit_loading: "List_submit_loading__FrSh_",
                list_line: "List_list_line__loOu7",
                list_es: "List_list_es__L_Fsj"
            }
        },
        87476: function(e) {
            e.exports = {
                modal_back: "Modal_modal_back__BEq5K",
                modal_container: "Modal_modal_container__fwyQj",
                modal_header: "Modal_modal_header__XHHRp",
                modal_body: "Modal_modal_body__2I1s_",
                modal_footer: "Modal_modal_footer___GHFS",
                modal_condition: "Modal_modal_condition__3PqSd",
                modal_condition_footer: "Modal_modal_condition_footer__m7_hW",
                submit: "Modal_submit__5KuwG",
                submit_disabled: "Modal_submit_disabled__YyJHC",
                submit_loading: "Modal_submit_loading__lGaFU"
            }
        }
    },
    function(e) {
        e.O(0, [9673, 4077, 9472, 6707, 2971, 7023, 1744], function() {
            return e(e.s = 10193)
        }), _N_E = e.O()
    }
]);