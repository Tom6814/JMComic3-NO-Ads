"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [1791],
  {
    787: (e, s, t) => {
      t.d(s, { A: () => p });
      var a = t(5043),
        l = t(6580),
        n = t(6148),
        r = t(9275),
        i = t(1500),
        c = t(6671),
        o = t(9354),
        d = t(8390),
        m = t(4149),
        g = t(4117),
        x = t(8038),
        b = t(1100),
        h = t(3944),
        u = t(579);
      const p = (e) => {
        const { currentPage: s } = e,
          {
            config: { logined: t, ads: p },
          } = (0, h.H)(),
          { t: f } = (0, g.Bd)(),
          j = (0, n.j)(),
          { unread: v, notifResult: y } = (0, n.G)((e) => e.member),
          w = sessionStorage.getItem("catTab") || "";
        (0, a.useEffect)(() => {
          t && 0 === Object.keys(v).length && j((0, b.Zg)());
        }, [t, y]);
        const N = [
            {
              icon: (0, u.jsx)(r.A, { className: "text-3xl" }),
              nav: "main",
              label: f("nav.home"),
              link: "/",
            },
            {
              icon: (0, u.jsx)(i.A, { className: "text-3xl" }),
              nav: "categories",
              label: f("nav.categories"),
              link: "/categories?slug=".concat(w),
            },
            {
              icon: (0, u.jsx)(o.A, { className: "text-3xl" }),
              nav: "movies",
              label: f("nav.movie"),
              link: "/movies",
            },
            {
              icon: (0, u.jsx)(d.A, { className: "text-3xl" }),
              nav: "forum",
              label: f("nav.forum"),
              link: "/forum",
            },
            {
              icon: (0, u.jsx)(m.A, { className: "text-3xl" }),
              nav: "member",
              label: f("nav.member"),
              link: "/member",
            },
          ],
          [_, k] = (0, a.useState)(!1),
          A = (0, a.useRef)(null),
          S = {
            main: "app_bottom_bar_jm3",
            categories: "app_categories_bottom_jm3",
            movies: "app_movies_fixed_bottom_jm3",
            member: "board1",
          }[s];
        return (0, u.jsxs)(u.Fragment, {
          children: [
            "forum" !== s &&
              (0, u.jsx)("div", {
                ref: A,
                className:
                  "fixed left-0 right-0 flex justify-center transition-all duration-300 ease-in-out ".concat(
                    _ ? "bottom-[3rem]" : "bottom-[4.5em]",
                  ),
                children:
                  S &&
                  (0, u.jsx)(x.A, {
                    adKey: S,
                    closeBtn: !0,
                    handleAdResize: () => {
                      k(!0);
                    },
                  }),
              }),
            (0, u.jsx)("div", {
              className: "fixed bottom-0 left-0 right-0 w-full z-30",
              children: (0, u.jsx)("div", {
                className:
                  "flex justify-around items-start bg-bbk text-gy z-50 min-h-[6rem] pt-3 overflow-hidden",
                children: N.map((e, a) =>
                  (0, u.jsxs)(
                    l.N_,
                    {
                      to: e.link,
                      className:
                        "animation-click-item flex flex-col items-center relative ".concat(
                          e.nav === s ? "text-og" : "",
                        ),
                      children: [
                        (0, u.jsxs)("div", {
                          className: "relative",
                          children: [
                            e.icon,
                            t &&
                              5 === a &&
                              v.comic_follow + v.site_notice > 0 &&
                              (0, u.jsx)("span", {
                                className:
                                  "absolute -top-1 -right-5 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center",
                                children: v.comic_follow + v.site_notice,
                              }),
                          ],
                        }),
                        (0, u.jsx)("span", {
                          className: "text-center",
                          children: e.label,
                        }),
                      ],
                    },
                    a,
                  ),
                ),
              }),
            }),
          ],
        });
      };
    },
    1791: (e, s, t) => {
      (t.r(s), t.d(s, { default: () => f }));
      var a = t(9379),
        l = t(5043),
        n = t(6580),
        r = t(4117),
        i = t(3944),
        c = t(6148),
        o = t(8139),
        d = t.n(o),
        m = t(787),
        g = t(5411),
        x = t(7738),
        b = t(1100),
        h = t(7947),
        u = t(1299),
        p = t(579);
      const f = () => {
        var e, s;
        const { config: t, setConfig: o } = (0, i.H)(),
          { setting: f, logined: j } = t,
          v = (0, n.Zp)(),
          y = (0, n.zy)(),
          { t: w } = (0, r.Bd)(),
          { snackbars: N, setSnackbars: _, showSnackbar: k } = (0, u.q)(),
          A = JSON.parse(localStorage.getItem("memberInfo")),
          S = (0, c.j)(),
          {
            dailyList: L,
            memberResult: C,
            isLoading: I,
          } = (0, c.G)((e) => e.member),
          z = (new Date().getMonth() + 1).toString(),
          [D, O] = (0, l.useState)(!0),
          [R, B] = (0, l.useState)(h.Z),
          [F, P] = (0, l.useState)({ login: !1, signUp: !1, forgot: !1 });
        (0, l.useEffect)(() => {
          j && A && S((0, b.Ln)(null === A || void 0 === A ? void 0 : A.uid));
        }, [j, C]);
        const Z =
            (null === (e = L.record) || void 0 === e ? void 0 : e.length) > 0 &&
            L.record.every((e) => e.every((e) => !0 === e.signed)),
          E = {
            class:
              "w-[25px] h-[25px] border-2 border-dashed border-[#bbb] bg-[#ebebeb] p-1 rounded-[8px] text-[#bbb] flex justify-center items-center",
            style: {},
          },
          G = {
            class:
              "w-[25px] h-[25px] border-2 border-dashed border-[#943234] rounded-[8px] p-1 bg-[#943234] bg-cover bg-center bg-no-repeat flex justify-center items-center shadow-md shadow-stone-500/50",
            style: { backgroundImage: "url('/images/signList/done-icon.png')" },
          },
          H = {
            class:
              "w-[25px] h-[25px] border-2 border-dashed border-[#f23f57] rounded-[8px] p-1 bg-[#fab3b1] bg-cover bg-center bg-no-repeat flex justify-center items-center shadow-md shadow-stone-500/50",
            style: {
              backgroundImage: "url('/images/signList/event-heart.png')",
            },
          },
          U = {
            class:
              "w-[25px] h-[25px] border-2 border-solid border-gy bg-[#ffffff] rounded-[8px] p-1 text-gy flex justify-center items-center shadow-md shadow-stone-500/50",
            style: {},
          },
          q = {
            class:
              "w-[25px] h-[25px] border-2 border-dashed border-[#943234] rounded-[8px] p-1 bg-[#943234] bg-cover bg-center bg-no-repeat  flex justify-center items-center shadow-md shadow-stone-500/50",
            style: {
              backgroundImage: "url('/images/signList/event-heart.png')",
            },
          };
        return (0, p.jsxs)(p.Fragment, {
          children: [
            I && (0, p.jsx)(g.A, {}),
            (0, p.jsx)("div", {
              className:
                "w-full min-h-screen bg-cover bg-center overflow-hidden flex justify-center items-center",
              style: {
                backgroundImage: L.background_phone
                  ? "url(".concat(
                      (null === f || void 0 === f ? void 0 : f.img_host) +
                        L.background_phone,
                      ")",
                    )
                  : "url(images/chapter_default.jpg)",
              },
              children: (0, p.jsxs)("div", {
                className:
                  "w-10/12 border border-solid border-bbk rounded text-center",
                children: [
                  (0, p.jsxs)("div", {
                    className:
                      "relative bg-og border border-solid border-bbk text-white p-4 z-20",
                    children: [
                      (0, p.jsxs)("div", {
                        className:
                          "absolute top-[-15px] left-0 w-full flex justify-around",
                        children: [
                          (0, p.jsx)("img", {
                            src: "/images/signList/coil.png",
                            alt: "coil1",
                            width: "15px",
                            height: "15px",
                          }),
                          (0, p.jsx)("img", {
                            src: "/images/signList/coil.png",
                            alt: "coil2",
                            width: "15px",
                            height: "15px",
                          }),
                        ],
                      }),
                      (0, p.jsxs)("div", {
                        className: "absolute top-[-4px] left-[14px]",
                        children: [
                          (0, p.jsx)("img", {
                            src: "/images/signList/month-badge.png",
                            alt: "month-badge",
                            width: "48px",
                            height: "48px",
                            className: "relative",
                          }),
                          (0, p.jsxs)("p", {
                            className:
                              "absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-sm",
                            children: [z, "\u6708"],
                          }),
                        ],
                      }),
                      (0, p.jsx)("p", {
                        className: "text-lg pt-2",
                        children: L.event_name,
                      }),
                    ],
                  }),
                  (0, p.jsxs)("div", {
                    className:
                      "relative border border-solid border-bbk p-6 bg-white z-10",
                    children: [
                      (0, p.jsx)("div", {
                        className:
                          "absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full bg-center bg-no-repeat opacity-50",
                        style: {
                          backgroundImage:
                            "url('/images/signList/main-bg.png')",
                          backgroundSize: "".concat(j ? "80%" : "40%"),
                        },
                      }),
                      (0, p.jsx)("ul", {
                        className: "grid grid-cols-7 gap-3 relative text-white",
                        children:
                          (null === (s = L.record) || void 0 === s
                            ? void 0
                            : s.length) > 0 &&
                          L.record.map((e) =>
                            e.map((e) => {
                              const { signed: s, bonus: t, date: a } = e;
                              let l = "",
                                n = {};
                              return (
                                null === s && t
                                  ? ((l = H.class), (n = H.style))
                                  : s && !t
                                    ? ((l = G.class), (n = G.style))
                                    : null !== s || t
                                      ? s || null === s
                                        ? s &&
                                          t &&
                                          ((l = q.class), (n = q.style))
                                        : ((l = E.class), (n = E.style))
                                      : ((l = U.class), (n = U.style)),
                                (0, p.jsx)(
                                  "li",
                                  { className: d()(l), style: n, children: a },
                                  a,
                                )
                              );
                            }),
                          ),
                      }),
                      (0, p.jsxs)("div", {
                        className:
                          "relative flex justify-between items-center mt-4",
                        children: [
                          (0, p.jsx)("span", {
                            className: "",
                            children: w("daily.consecutive_check_in"),
                          }),
                          (0, p.jsxs)("div", {
                            className: "w-9/12",
                            children: [
                              (0, p.jsxs)("div", {
                                className: "flex text-end px-2",
                                children: [
                                  (0, p.jsx)("span", {
                                    className: "w-1/2",
                                    children: "3\u5929",
                                  }),
                                  (0, p.jsx)("span", {
                                    className: "w-1/2",
                                    children: "7\u5929",
                                  }),
                                ],
                              }),
                              (0, p.jsx)("div", {
                                className:
                                  "w-full bg-white border-2 border-solid border-bbk opacity-100 rounded-full h-4",
                                children: (0, p.jsx)("div", {
                                  className: "bg-og h-full rounded-full",
                                  style: {
                                    width: "".concat(L.currentProgress),
                                  },
                                }),
                              }),
                              (0, p.jsxs)("div", {
                                className: "flex-col items-center px-2",
                                children: [
                                  (0, p.jsxs)("div", {
                                    className: "flex mt-1",
                                    children: [
                                      (0, p.jsxs)("p", {
                                        className:
                                          "w-1/2 flex justify-end items-center",
                                        children: [
                                          (0, p.jsxs)("span", {
                                            children: ["+", L.three_days_coin],
                                          }),
                                          (0, p.jsx)("img", {
                                            src: "/images/coin.png",
                                            alt: "",
                                            width: "15px",
                                            height: "15px",
                                            className: "ml-2",
                                          }),
                                        ],
                                      }),
                                      (0, p.jsxs)("p", {
                                        className:
                                          "w-1/2 flex justify-end items-center",
                                        children: [
                                          (0, p.jsxs)("span", {
                                            children: ["+", L.seven_days_coin],
                                          }),
                                          (0, p.jsx)("img", {
                                            src: "/images/coin.png",
                                            alt: "",
                                            width: "15px",
                                            height: "15px",
                                            className: "ml-2",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, p.jsxs)("div", {
                                    className: "flex mt-1",
                                    children: [
                                      (0, p.jsxs)("p", {
                                        className:
                                          "w-1/2 flex justify-end items-center",
                                        children: [
                                          (0, p.jsxs)("span", {
                                            children: ["+", L.three_days_exp],
                                          }),
                                          (0, p.jsx)("span", {
                                            children: "exp",
                                          }),
                                        ],
                                      }),
                                      (0, p.jsxs)("p", {
                                        className:
                                          "w-1/2 flex justify-end items-center",
                                        children: [
                                          (0, p.jsxs)("span", {
                                            children: ["+", L.seven_days_exp],
                                          }),
                                          (0, p.jsx)("span", {
                                            children: "exp",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, p.jsxs)("div", {
                        className: "relative text-white",
                        children: [
                          (0, p.jsxs)("div", {
                            className: "flex justify-between items-center mt-2",
                            children: [
                              j
                                ? (0, p.jsx)("button", {
                                    className: "bg-og w-32 rounded-lg py-2",
                                    onClick: () =>
                                      D &&
                                      (async () => {
                                        const e = await S(
                                            (0, b.di)({
                                              user_id: A.uid,
                                              daily_id: L.daily_id,
                                            }),
                                          ).unwrap(),
                                          { msg: s } = e.data,
                                          t = s.includes(
                                            "\u5df2\u7d93\u7c3d\u5230\u904e\u4e86",
                                          )
                                            ? "error"
                                            : "success";
                                        k(s, t);
                                      })(),
                                    children: w("daily.check_in_now"),
                                  })
                                : (0, p.jsx)("button", {
                                    className: "bg-og w-32 rounded-lg py-2",
                                    onClick: () =>
                                      P(
                                        (0, a.A)(
                                          (0, a.A)({}, F),
                                          {},
                                          { login: !0 },
                                        ),
                                      ),
                                    children: w("login.login"),
                                  }),
                              (0, p.jsx)("button", {
                                className: "bg-gy w-32 rounded-lg py-2",
                                onClick: () => {
                                  var e;
                                  return v(
                                    (null === (e = y.state) || void 0 === e
                                      ? void 0
                                      : e.from) || "/",
                                  );
                                },
                                children: w("comic.close"),
                              }),
                            ],
                          }),
                          (0, p.jsx)("button", {
                            className:
                              "w-36 border-2 border-dashed border-[#bbb] rounded-lg py-1 my-4 ".concat(
                                Z ? "bg-gy" : "bg-[#ebebeb] text-[#bbb]",
                              ),
                            onClick: () =>
                              Z &&
                              (async () => {
                                const e = await S((0, b.Aw)(z)).unwrap(),
                                  { msg: s, status: t } = e.data,
                                  a = "ok" !== t ? "error" : "success";
                                200 === e.code && (k(s, a), O(!1));
                              })(),
                            children: w("daily.full_check_in_reward"),
                          }),
                          (0, p.jsx)("p", {
                            className: "text-red-600",
                            children: w("daily.monthly_check_in_bonus"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)("div", {
              className: "mt-16",
              children: (0, p.jsx)(m.A, { currentPage: "main" }),
            }),
            (F.login || F.signUp || F.forgot) &&
              !j &&
              (0, p.jsx)(x.A, {
                setFormData: B,
                formData: R,
                setConfig: o,
                logined: j,
                isLoading: I,
                setDialogOpen: P,
                dialogOpen: F,
                showSnackbar: k,
              }),
            (0, p.jsx)(u.A, { setSnackbars: _, snackbars: N }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=1791.79ccca71.chunk.js.map
