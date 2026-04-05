"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [4645],
  {
    9144: (e, t, s) => {
      s.d(t, { A: () => p });
      var n = s(9379),
        a = s(5043),
        l = s(6580),
        r = s(7421),
        c = s(6687),
        o = s(7225),
        i = s(9484),
        d = s(7044),
        m = s(3944),
        u = s(7883),
        h = s(5090),
        x = s(4117),
        f = s(4694),
        g = s(579);
      const p = (e) => {
        var t, s;
        const {
            setTabChange: p,
            filter: v,
            setFilter: j,
            currentPage: b,
            catList: w,
            subList: N,
            mode: A,
            setMode: y,
          } = e,
          { config: k } = (0, m.H)(),
          { setting: _ } = k,
          { t: S } = (0, x.Bd)(),
          [C, z] = (0, a.useState)({ catMore: !1, imageSource: !1 }),
          M = { fontSize: 20, stroke: "white", strokeWidth: 1 },
          H = (0, h.hz)(),
          E = [
            {
              icon: (0, g.jsx)(r.A, { sx: (0, n.A)({}, M) }),
              onClick: () =>
                z((0, n.A)((0, n.A)({}, C), {}, { imageSource: !0 })),
            },
            { icon: (0, g.jsx)(c.A, { sx: (0, n.A)({}, M) }), link: "/blogs" },
            { icon: (0, g.jsx)(o.A, { sx: (0, n.A)({}, M) }), link: "/week" },
            { icon: (0, g.jsx)(i.A, { sx: (0, n.A)({}, M) }), link: "/search" },
          ];
        return (0, g.jsxs)("header", {
          className: "sticky top-safe w-full bg-bbk text-white z-30",
          children: [
            (0, g.jsxs)("div", {
              className: "h-14 flex items-center",
              children: [
                (0, g.jsx)("div", {
                  className: "flex w-6/12 pl-3",
                  children: (0, g.jsx)(l.N_, {
                    to: "/",
                    children: (0, g.jsx)("img", {
                      src: "/images/new_logo.webp",
                      alt: "logo",
                      width: "100px",
                      height: "20px",
                      className: "animation-click-item",
                    }),
                  }),
                }),
                (0, g.jsx)("div", {
                  className:
                    "text-white top-bar-icon flex w-6/12 justify-around",
                  children: E.map((e, t) =>
                    (0, g.jsx)(
                      l.N_,
                      {
                        to: e.link || "#",
                        onClick: e.onClick,
                        children: (0, g.jsx)("button", {
                          className: "animation-click-item",
                          children: e.icon,
                        }),
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            "categories" === b &&
              (null === (t = w.cat) || void 0 === t ? void 0 : t.length) > 0 &&
              (0, g.jsxs)("div", {
                className: "text-tgy relative bg-nbk",
                children: [
                  (0, g.jsxs)("div", {
                    className:
                      "h-10 w-11/12 flex items-center overflow-x-auto whitespace-nowrap pr-8",
                    style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                    children: [
                      w.cat.map((e, t) =>
                        (0, g.jsxs)(
                          "div",
                          {
                            children: [
                              (0, g.jsx)("span", {
                                title: e.name,
                                className: "pl-4 ".concat(
                                  v.slug === e.slug ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (j(
                                    (0, n.A)(
                                      (0, n.A)({}, v),
                                      {},
                                      {
                                        tabChange: !0,
                                        slug: e.slug,
                                        sub_slug: "",
                                        sort: "",
                                      },
                                    ),
                                  ),
                                    p(!0));
                                },
                                children: e.name,
                              }),
                              0 === t &&
                                (0, g.jsx)(l.N_, {
                                  to: "/library?from=categories",
                                  className: "pl-4",
                                  children: S(
                                    "library.forbidden_comic_library",
                                  ),
                                }),
                            ],
                          },
                          e.slug,
                        ),
                      ),
                      (0, g.jsx)("div", {
                        className: "bg-bbk p-1 absolute top-0 right-0",
                        children: (0, g.jsx)(u.A, {
                          sx: {
                            fontSize: 28,
                            stroke: "#ff6f00",
                            strokeWidth: 1,
                            color: "#ff6f00",
                          },
                          onClick: () =>
                            z((0, n.A)((0, n.A)({}, C), {}, { catMore: !0 })),
                        }),
                      }),
                    ],
                  }),
                  (0, g.jsx)("div", {
                    className: "h-10 flex items-center",
                    children:
                      null ===
                        (s =
                          "" === v.slug
                            ? null === w || void 0 === w
                              ? void 0
                              : w.ranking
                            : null === w || void 0 === w
                              ? void 0
                              : w.ranking.slice(0, -1)) || void 0 === s
                        ? void 0
                        : s.map((e) =>
                            (0, g.jsx)(
                              "span",
                              {
                                className: "pl-4 cursor-pointer ".concat(
                                  v.sort === e.key ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (j(
                                    (0, n.A)(
                                      (0, n.A)({}, v),
                                      {},
                                      { sort: e.key },
                                    ),
                                  ),
                                    p(!0));
                                },
                                children: e.title,
                              },
                              e.key,
                            ),
                          ),
                  }),
                  N.length > 0 &&
                    (0, g.jsx)("div", {
                      className: "h-10 flex items-center",
                      children: N.map((e) =>
                        (0, g.jsx)(
                          "span",
                          {
                            className: "pl-4 ".concat(
                              v.sub_slug === e.slug ? "text-og" : "",
                            ),
                            onClick: () => {
                              (p(!0),
                                j(
                                  (0, n.A)(
                                    (0, n.A)({}, v),
                                    {},
                                    { sub_slug: e.slug },
                                  ),
                                ));
                            },
                            children: e.name,
                          },
                          e.slug,
                        ),
                      ),
                    }),
                ],
              }),
            "forum" === b &&
              (0, g.jsx)("div", {
                className:
                  "h-20 w-full text-tgy flex items-end py-2 bg-nbk z-50",
                children: H.map((e) =>
                  (0, g.jsxs)(
                    "div",
                    {
                      className: "relative px-4 text-lg cursor-pointer",
                      onClick: () => {
                        (p(!0), y(e.mode));
                      },
                      children: [
                        (0, g.jsx)("p", {
                          className: "transition-colors duration-300 ".concat(
                            A === e.mode ? "text-og pb-2" : "pb-3",
                          ),
                          children: e.tabName,
                        }),
                        A === e.mode &&
                          (0, g.jsx)(f.P.div, {
                            className: "h-1 bg-og rounded",
                            animate: { width: A === e.mode ? "100%" : "0%" },
                            initial: { width: "0%" },
                            transition: {
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            },
                            style: { transformOrigin: "left" },
                          }),
                      ],
                    },
                    e.mode,
                  ),
                ),
              }),
            C.imageSource &&
              (0, g.jsx)(d.A, { setDialogOpen: z, dialogOpen: C, setting: _ }),
            C.catMore &&
              (0, g.jsx)(d.A, {
                setDialogOpen: z,
                dialogOpen: C,
                catList: C.catMore ? w : {},
                setFilter: j,
                filter: v,
              }),
          ],
        });
      };
    },
    2028: (e, t, s) => {
      s.d(t, { A: () => r });
      var n = s(5043),
        a = s(2101),
        l = s(579);
      const r = () => {
        const [e, t] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          const e = () => {
            window.scrollY > 500 ? t(!0) : t(!1);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        return (0, l.jsx)(l.Fragment, {
          children:
            e &&
            (0, l.jsx)("button", {
              onClick: () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className:
                "w-14 h-14 rounded-full fixed bottom-[10rem] right-3 bg-og text-white z-50",
              children: (0, l.jsx)(a.A, {}),
            }),
        });
      };
    },
    787: (e, t, s) => {
      s.d(t, { A: () => p });
      var n = s(5043),
        a = s(6580),
        l = s(6148),
        r = s(9275),
        c = s(1500),
        o = s(6671),
        i = s(9354),
        d = s(8390),
        m = s(4149),
        u = s(4117),
        h = s(8038),
        x = s(1100),
        f = s(3944),
        g = s(579);
      const p = (e) => {
        const { currentPage: t } = e,
          {
            config: { logined: s, ads: p },
          } = (0, f.H)(),
          { t: v } = (0, u.Bd)(),
          j = (0, l.j)(),
          { unread: b, notifResult: w } = (0, l.G)((e) => e.member),
          N = sessionStorage.getItem("catTab") || "";
        (0, n.useEffect)(() => {
          s && 0 === Object.keys(b).length && j((0, x.Zg)());
        }, [s, w]);
        const A = [
            {
              icon: (0, g.jsx)(r.A, { className: "text-3xl" }),
              nav: "main",
              label: v("nav.home"),
              link: "/",
            },
            {
              icon: (0, g.jsx)(c.A, { className: "text-3xl" }),
              nav: "categories",
              label: v("nav.categories"),
              link: "/categories?slug=".concat(N),
            },
            {
              icon: (0, g.jsx)(i.A, { className: "text-3xl" }),
              nav: "movies",
              label: v("nav.movie"),
              link: "/movies",
            },
            {
              icon: (0, g.jsx)(d.A, { className: "text-3xl" }),
              nav: "forum",
              label: v("nav.forum"),
              link: "/forum",
            },
            {
              icon: (0, g.jsx)(m.A, { className: "text-3xl" }),
              nav: "member",
              label: v("nav.member"),
              link: "/member",
            },
          ],
          [y, k] = (0, n.useState)(!1),
          _ = (0, n.useRef)(null),
          S = {
            main: "app_bottom_bar_jm3",
            categories: "app_categories_bottom_jm3",
            movies: "app_movies_fixed_bottom_jm3",
            member: "board1",
          }[t];
        return (0, g.jsxs)(g.Fragment, {
          children: [
            "forum" !== t &&
              (0, g.jsx)("div", {
                ref: _,
                className:
                  "fixed left-0 right-0 flex justify-center transition-all duration-300 ease-in-out ".concat(
                    y ? "bottom-[3rem]" : "bottom-[4.5em]",
                  ),
                children:
                  S &&
                  (0, g.jsx)(h.A, {
                    adKey: S,
                    closeBtn: !0,
                    handleAdResize: () => {
                      k(!0);
                    },
                  }),
              }),
            (0, g.jsx)("div", {
              className: "fixed bottom-0 left-0 right-0 w-full z-30",
              children: (0, g.jsx)("div", {
                className:
                  "flex justify-around items-start bg-bbk text-gy z-50 min-h-[6rem] pt-3 overflow-hidden",
                children: A.map((e, n) =>
                  (0, g.jsxs)(
                    a.N_,
                    {
                      to: e.link,
                      className:
                        "animation-click-item flex flex-col items-center relative ".concat(
                          e.nav === t ? "text-og" : "",
                        ),
                      children: [
                        (0, g.jsxs)("div", {
                          className: "relative",
                          children: [
                            e.icon,
                            s &&
                              5 === n &&
                              b.comic_follow + b.site_notice > 0 &&
                              (0, g.jsx)("span", {
                                className:
                                  "absolute -top-1 -right-5 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center",
                                children: b.comic_follow + b.site_notice,
                              }),
                          ],
                        }),
                        (0, g.jsx)("span", {
                          className: "text-center",
                          children: e.label,
                        }),
                      ],
                    },
                    n,
                  ),
                ),
              }),
            }),
          ],
        });
      };
    },
    8063: (e, t, s) => {
      (s.r(t), s.d(t, { default: () => y }));
      var n = s(5043),
        a = s(6148),
        l = s(9662),
        r = s(579);
      const c = (0, l.A)(
          (0, r.jsx)("path", {
            d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z",
          }),
          "Computer",
        ),
        o = (0, l.A)(
          (0, r.jsx)("path", {
            d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z",
          }),
          "Apple",
        ),
        i = (0, l.A)(
          (0, r.jsx)("path", {
            d: "m17.6 9.48 1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52M7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25",
          }),
          "Android",
        );
      var d = s(3944),
        m = s(4117);
      const u = (e) => {
        var t;
        let { games: s, hotGames: a } = e;
        const { config: l } = (0, d.H)(),
          { setting: u } = l,
          [h, x] = (0, n.useState)(!1),
          f = a ? a[0] : null,
          { t: g } = (0, m.Bd)(),
          p = () => {
            0 !== window.scrollY || h || (x(!0), v());
          },
          v = () => {
            setTimeout(() => {
              x(!1);
            }, 2e3);
          };
        (0, n.useEffect)(
          () => (
            window.addEventListener("scroll", p),
            () => {
              window.removeEventListener("scroll", p);
            }
          ),
          [h],
        );
        const j = {
          Android: (0, r.jsx)(i, { className: "w-5 h-5 text-gray-400" }),
          iOS: (0, r.jsx)(o, { className: "w-5 h-5 text-gray-400" }),
          PC: (0, r.jsx)(c, { className: "w-5 h-5 text-gray-400" }),
        };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "w-full  dark:bg-bbk",
            children: [
              (0, r.jsx)("p", {
                className: "p-2 text-lg dark:text-white",
                children: g("games.game_rank"),
              }),
              (0, r.jsx)("div", {
                className: "flex flex-wrap ",
                children: (0, r.jsxs)("a", {
                  className: "w-full p-3 relative",
                  href: null === f || void 0 === f ? void 0 : f.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "absolute top-3 left-6 bg-[#ff0000ee] text-white h-8 w-8 z-10 flex items-center justify-center",
                      children: "1",
                    }),
                    (0, r.jsx)("div", {
                      className: "aspect-[2/1] overflow-hidden",
                      children: (0, r.jsx)("img", {
                        src: f
                          ? (null === u || void 0 === u ? void 0 : u.img_host) +
                            f.photo
                          : "/images/title-circle.webp",
                        alt: null === f || void 0 === f ? void 0 : f.title,
                        className: "w-full h-full rounded-lg object-cover",
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        (0, r.jsx)("p", {
                          className: " line-clamp-1 ",
                          children:
                            null === f || void 0 === f ? void 0 : f.title,
                        }),
                        (0, r.jsx)("span", {
                          className: "flex gap-2 ",
                          children:
                            null === f ||
                            void 0 === f ||
                            null === (t = f.type) ||
                            void 0 === t
                              ? void 0
                              : t.map((e, t) =>
                                  (0, r.jsx)("span", { children: j[e] }, t),
                                ),
                        }),
                      ],
                    }),
                    (0, r.jsx)("p", {
                      className: "text-og",
                      children:
                        null === f || void 0 === f ? void 0 : f.categories.name,
                    }),
                    (0, r.jsxs)("p", {
                      className: "line-clamp-1 text-gray-400",
                      children: [
                        " ",
                        null === f || void 0 === f ? void 0 : f.description,
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className: "overflow-x-auto flex gap-7 p-3 scrollbar-hidden",
                children:
                  null === a || void 0 === a
                    ? void 0
                    : a.slice(1, 6).map((e, t) => {
                        var s;
                        return (0, r.jsxs)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "min-w-[60%] relative",
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "absolute top-0 left-3 h-8 w-8 z-10 flex items-center justify-center text-white ".concat(
                                    0 === t
                                      ? "bg-orange-500"
                                      : 1 === t
                                        ? "bg-green-500"
                                        : "bg-gray-700",
                                    " ",
                                  ),
                                children: t + 2,
                              }),
                              (0, r.jsx)("div", {
                                className: "aspect-[2/1] overflow-hidden",
                                children: (0, r.jsx)("img", {
                                  src: e
                                    ? (null === u || void 0 === u
                                        ? void 0
                                        : u.img_host) + e.photo
                                    : "/images/title-circle.webp",
                                  alt: e.title,
                                  className:
                                    "w-full h-full rounded-lg object-cover",
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, r.jsx)("p", {
                                    className: " line-clamp-1 dark:text-white",
                                    children: e.title,
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "flex gap-2 ",
                                    children:
                                      null === e ||
                                      void 0 === e ||
                                      null === (s = e.type) ||
                                      void 0 === s
                                        ? void 0
                                        : s.map((e, t) =>
                                            (0, r.jsx)(
                                              "span",
                                              { children: j[e] },
                                              t,
                                            ),
                                          ),
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-og",
                                children: e.categories.name,
                              }),
                              (0, r.jsxs)("p", {
                                className: "line-clamp-1 text-gray-400",
                                children: [" ", e.description],
                              }),
                            ],
                          },
                          t,
                        );
                      }),
              }),
              (0, r.jsx)("p", {
                className: "p-2 text-lg dark:text-white dark:bg-nbk",
                children: g("games.all_games"),
              }),
              (0, r.jsx)("div", {
                className: "grid grid-cols-1 gap-3 mt-2 px-3 mb-20",
                children:
                  null === s || void 0 === s
                    ? void 0
                    : s.map((e) => {
                        var t;
                        return (0, r.jsxs)(
                          "a",
                          {
                            className: "w-full mb-3",
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                              (0, r.jsx)("div", {
                                className: "aspect-[2/1] overflow-hidden block",
                                children: (0, r.jsx)("img", {
                                  src: e
                                    ? (null === u || void 0 === u
                                        ? void 0
                                        : u.img_host) + e.photo
                                    : "images/title-circle.webp",
                                  alt: e.title,
                                  className:
                                    "w-full h-full rounded-lg object-cover",
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, r.jsx)("p", {
                                    className: " line-clamp-1 dark:text-white",
                                    children: e.title,
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "flex gap-2 ",
                                    children:
                                      null === e ||
                                      void 0 === e ||
                                      null === (t = e.type) ||
                                      void 0 === t
                                        ? void 0
                                        : t.map((e, t) =>
                                            (0, r.jsx)(
                                              "span",
                                              { children: j[e] },
                                              t,
                                            ),
                                          ),
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-og",
                                children: e.categories.name,
                              }),
                              (0, r.jsx)("p", {
                                className: "line-clamp-1 text-gray-400",
                                children: e.description,
                              }),
                            ],
                          },
                          e.gid,
                        );
                      }),
              }),
            ],
          }),
        });
      };
      var h = s(787),
        x = s(2028),
        f = s(9484),
        g = s(7332),
        p = s(3947),
        v = s(381),
        j = s(4975),
        b = s(50),
        w = s(319),
        N = s(5412),
        A = s(9144);
      const y = () => {
        const e = (0, a.j)(),
          { config: t } = (0, d.H)(),
          { setting: s } = t,
          [l, c] = (0, n.useState)(!1),
          {
            games: o,
            hotGames: i,
            categories: y,
            isLoading: k,
            isLoadMore: _,
            hasMore: S,
            bannerList: C,
          } = (0, a.G)((e) => e.games),
          [z, M] = (0, n.useState)([]),
          [H, E] = (0, n.useState)(""),
          [L, R] = (0, n.useState)(""),
          [T, V] = (0, n.useState)(""),
          [Y, O] = (0, n.useState)(!1),
          [P, D] = (0, n.useState)(""),
          [I, F] = (0, n.useState)(""),
          [X, B] = (0, n.useState)(""),
          [W, G] = (0, n.useState)(!1),
          [K, q] = (0, n.useState)(1),
          [Z, J] = (0, n.useState)(!1),
          Q = (0, n.useRef)(!1),
          U = (0, n.useRef)(null),
          $ = (0, n.useRef)(!1),
          { t: ee } = (0, m.Bd)();
        sessionStorage.setItem("fromPage", "".concat(window.location.pathname));
        const te = (0, n.useCallback)(
            function (t) {
              let s =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                a = arguments.length > 3 ? arguments[3] : void 0,
                l = arguments.length > 4 ? arguments[4] : void 0;
              return e(
                (0, p.Rl)({
                  page: t,
                  append: s,
                  search_query: null !== l && void 0 !== l ? l : X,
                  category: null !== n && void 0 !== n ? n : L,
                  sub_category: null !== a && void 0 !== a ? a : P,
                }),
              );
            },
            [e, X, L, P],
          ),
          se = (0, n.useCallback)(
            (t) => {
              (G(!1),
                E(t.name),
                R(t.slug),
                V(""),
                D(""),
                O(!0),
                B(""),
                q(1),
                J(!1),
                e((0, v.z6)()),
                te(1, !1, t.slug, "", "").then(() => J(!0)),
                sessionStorage.setItem("selectedCategory", t.name));
            },
            [e, te],
          ),
          ne = (0, n.useCallback)(
            (t) => {
              (V(t.name),
                D(t.slug),
                q(1),
                J(!1),
                e((0, v.z6)()),
                te(1, !1, L, t.slug).then(() => J(!0)));
            },
            [e, te],
          );
        return (
          (0, n.useEffect)(() => {
            if (Z) {
              const e = new IntersectionObserver((e) => {
                  e[0].isIntersecting &&
                    S &&
                    !_ &&
                    !Q.current &&
                    ((Q.current = !0), q((e) => e + 1));
                }),
                t = U.current;
              return (
                t && e.observe(t),
                () => {
                  (t && e.unobserve(t), e.disconnect());
                }
              );
            }
          }, [Z, S, _]),
          (0, n.useEffect)(() => {
            const e = y.find((e) => e.name === H);
            if (e && e.game_types) {
              const t = Array.isArray(e.game_types)
                ? e.game_types
                : Object.values(e.game_types);
              M(t);
            } else M([]);
          }, [H, y]),
          (0, n.useEffect)(() => {
            y.length > 0 &&
              !H &&
              !$.current &&
              0 === o.length &&
              (($.current = !0), se(y[0]));
          }, [y, H, se, o.length]),
          (0, n.useEffect)(() => {
            if (0 === y.length) e((0, p.tl)());
            else {
              const e =
                sessionStorage.getItem("selectedCategory") || "" || y[0].name;
              E(e);
            }
          }, [e, y.length]),
          (0, n.useEffect)(() => {
            s && C.length;
          }, [e, s, C.length]),
          (0, n.useEffect)(() => {
            K > 1 &&
              te(K, !0).then(() => {
                Q.current = !1;
              });
          }, [K, te]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className:
                  "sticky top-safe w-full text-white z-50 bg-[#242424]",
                children: [
                  (0, r.jsx)(A.A, {}),
                  (0, r.jsx)(j.RC, {
                    spaceBetween: 30,
                    centeredSlides: !0,
                    autoplay: { delay: 5e3, disableOnInteraction: !1 },
                    pagination: { clickable: !0 },
                    modules: [b.Ij, b.dK],
                    className: "mySwiper h-fit mb-3",
                    children:
                      null === C || void 0 === C
                        ? void 0
                        : C.map((e, t) =>
                            (0, r.jsx)(
                              j.qr,
                              {
                                children: (0, r.jsx)("a", {
                                  href: e.link,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: (0, r.jsx)("img", {
                                    src: e
                                      ? e.image
                                      : "/images/title-circle.webp",
                                    alt: "banner-".concat(t),
                                    className: "w-full h-full object-cover",
                                  }),
                                }),
                              },
                              t,
                            ),
                          ),
                  }),
                  (0, r.jsx)("div", {
                    className: "flex items-center space-x-6 p-2 text-white",
                    children: (0, r.jsxs)("div", {
                      className: "w-full",
                      children: [
                        (0, r.jsx)("ul", {
                          className:
                            "flex gap-5 rounded-full bg-white text-black px-4 py-2 items-center justify-between",
                          children: W
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(g.A, {
                                    onClick: () => {
                                      if (
                                        (G(!1),
                                        F(""),
                                        B(""),
                                        V(""),
                                        D(""),
                                        q(1),
                                        J(!1),
                                        e((0, v.z6)()),
                                        y.length > 0)
                                      ) {
                                        const e = y[0];
                                        (E(e.name),
                                          R(e.slug),
                                          te(1, !1, e.slug, "", "").then(() =>
                                            J(!0),
                                          ));
                                      }
                                    },
                                    className: "cursor-pointer",
                                  }),
                                  (0, r.jsx)("input", {
                                    type: "text",
                                    className:
                                      "flex-1 px-3 py-1 outline-none text-black",
                                    value: I,
                                    onChange: (e) => F(e.target.value),
                                    onKeyDown: (t) => {
                                      "Enter" === t.key &&
                                        (G(!0),
                                        E(""),
                                        R(""),
                                        V(""),
                                        D(""),
                                        O(!1),
                                        B(I),
                                        q(1),
                                        J(!1),
                                        e((0, v.z6)()),
                                        te(1, !1, "", "", I).then(() => J(!0)));
                                    },
                                    placeholder: ee("games.search_placeholder"),
                                  }),
                                  (0, r.jsx)(f.A, {
                                    onClick: () => {
                                      (G(!0),
                                        F(""),
                                        B(""),
                                        q(1),
                                        J(!1),
                                        e((0, v.OT)()),
                                        te(1, !1).then(() => {
                                          J(!0);
                                        }));
                                    },
                                    className: "cursor-pointer",
                                  }),
                                ],
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  y.map((e, t) =>
                                    (0, r.jsx)(
                                      "li",
                                      {
                                        onClick: () => {
                                          se(e);
                                        },
                                        className: "".concat(
                                          H === e.name
                                            ? "text-orange-500"
                                            : "text-black",
                                          " cursor-pointer",
                                        ),
                                        children: e.name,
                                      },
                                      t,
                                    ),
                                  ),
                                  (0, r.jsx)("li", {
                                    className:
                                      "ml-auto w-10 h-10 bg-black rounded-full text-white text-center flex items-center justify-center",
                                    children: (0, r.jsx)(f.A, {
                                      onClick: () => {
                                        (G(!0), F(""), B(""));
                                      },
                                      className: "cursor-pointer",
                                    }),
                                  }),
                                ],
                              }),
                        }),
                        !W &&
                          Y &&
                          (0, r.jsx)("div", {
                            className: "p-2 mt-2",
                            children: (0, r.jsx)("ul", {
                              className: "flex gap-5",
                              children: z.map((e, t) =>
                                (0, r.jsx)(
                                  "li",
                                  {
                                    onClick: () => ne(e),
                                    className: "".concat(
                                      T === e.name
                                        ? "text-orange-500 border-orange-500"
                                        : "text-white border-white",
                                      " rounded-full py-1 px-2 border cursor-pointer",
                                    ),
                                    children: e.name,
                                  },
                                  t,
                                ),
                              ),
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
              k
                ? (0, r.jsxs)("div", {
                    className:
                      "w-full h-96 flex justify-center items-center flex-col",
                    children: [
                      (0, r.jsx)("img", {
                        src: "/images/loading.gif",
                        alt: "loading",
                        width: "80px",
                      }),
                      (0, r.jsx)("p", {
                        className: "dark:text-white",
                        children: ee("games.loading"),
                      }),
                    ],
                  })
                : (0, r.jsx)(w.u, {
                    onRefresh: () => (
                      q(1),
                      J(!1),
                      e((0, v.z6)()),
                      c(!0),
                      te(1, !1).then(() => {
                        (J(!0), c(!1));
                      })
                    ),
                    refreshing: l,
                    renderText: N.S5,
                    completeDelay: 1e3,
                    children: (0, r.jsx)(u, {
                      games: o,
                      hotGames: i,
                      selectedCategory: H,
                    }),
                  }),
              S && (0, r.jsx)("div", { ref: U, className: "h-10" }),
              !k &&
                (0, r.jsx)(r.Fragment, {
                  children:
                    0 === o.length
                      ? (0, r.jsx)("div", {
                          className:
                            "w-full h-10 flex justify-center items-center mb-20",
                          children: (0, r.jsx)("p", {
                            className: "text-gray-500 dark:text-white",
                            children: ee("games.no_data_found"),
                          }),
                        })
                      : !S &&
                        (0, r.jsx)("div", {
                          className:
                            "w-full h-10 flex justify-center items-center mb-20",
                          children: (0, r.jsx)("p", {
                            className: "text-gray-400 dark:text-white",
                            children: ee("games.no_more_content"),
                          }),
                        }),
                }),
              (0, r.jsx)(h.A, { currentPage: "games" }),
              (0, r.jsx)(x.A, {}),
            ],
          })
        );
      };
    },
    4149: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20",
        }),
        "AccountCircle",
      );
    },
    7225: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z",
        }),
        "CalendarToday",
      );
    },
    7421: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", { d: "M7 2v11h3v9l7-12h-4l4-8z" }),
        "FlashOn",
      );
    },
    9275: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }),
        "Home",
      );
    },
    7883: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2",
        }),
        "MoreHoriz",
      );
    },
    6687: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4",
        }),
        "Restaurant",
      );
    },
    9484: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
        }),
        "Search",
      );
    },
    8390: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z",
        }),
        "Textsms",
      );
    },
    9354: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z",
        }),
        "Videocam",
      );
    },
    6671: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-10 7H8v3H6v-3H3v-2h3V8h2v3h3zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5",
        }),
        "VideogameAsset",
      );
    },
    1500: (e, t, s) => {
      s.d(t, { A: () => l });
      var n = s(9662),
        a = s(579);
      const l = (0, n.A)(
        (0, a.jsx)("path", {
          d: "M11 11V3H5c-1.1 0-2 .9-2 2v6zm2 0h8V5c0-1.1-.9-2-2-2h-6zm-2 2H3v6c0 1.1.9 2 2 2h6zm2 0v8h6c1.1 0 2-.9 2-2v-6z",
        }),
        "Window",
      );
    },
    5721: (e, t, s) => {
      s.d(t, { A: () => p });
      var n = s(9379),
        a = s(45),
        l = s(5043),
        r = s(8387),
        c = s(8610),
        o = s(2108),
        i = s(6431),
        d = s(1347),
        m = s(2532),
        u = s(2372);
      function h(e) {
        return (0, u.Ay)("MuiList", e);
      }
      (0, m.A)("MuiList", ["root", "padding", "dense", "subheader"]);
      var x = s(579);
      const f = [
          "children",
          "className",
          "component",
          "dense",
          "disablePadding",
          "subheader",
        ],
        g = (0, o.Ay)("ul", {
          name: "MuiList",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: s } = e;
            return [
              t.root,
              !s.disablePadding && t.padding,
              s.dense && t.dense,
              s.subheader && t.subheader,
            ];
          },
        })({
          listStyle: "none",
          margin: 0,
          padding: 0,
          position: "relative",
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disablePadding;
              },
              style: { paddingTop: 8, paddingBottom: 8 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.subheader;
              },
              style: { paddingTop: 0 },
            },
          ],
        }),
        p = l.forwardRef(function (e, t) {
          const s = (0, i.b)({ props: e, name: "MuiList" }),
            {
              children: o,
              className: m,
              component: u = "ul",
              dense: p = !1,
              disablePadding: v = !1,
              subheader: j,
            } = s,
            b = (0, a.A)(s, f),
            w = l.useMemo(() => ({ dense: p }), [p]),
            N = (0, n.A)(
              (0, n.A)({}, s),
              {},
              { component: u, dense: p, disablePadding: v },
            ),
            A = ((e) => {
              const {
                  classes: t,
                  disablePadding: s,
                  dense: n,
                  subheader: a,
                } = e,
                l = {
                  root: [
                    "root",
                    !s && "padding",
                    n && "dense",
                    a && "subheader",
                  ],
                };
              return (0, c.A)(l, h, t);
            })(N);
          return (0, x.jsx)(d.A.Provider, {
            value: w,
            children: (0, x.jsxs)(
              g,
              (0, n.A)(
                (0, n.A)(
                  {
                    as: u,
                    className: (0, r.A)(A.root, m),
                    ref: t,
                    ownerState: N,
                  },
                  b,
                ),
                {},
                { children: [j, o] },
              ),
            ),
          });
        });
    },
    1347: (e, t, s) => {
      s.d(t, { A: () => n });
      const n = s(5043).createContext({});
    },
    5671: (e, t, s) => {
      s.d(t, { A: () => r, b: () => l });
      var n = s(2532),
        a = s(2372);
      function l(e) {
        return (0, a.Ay)("MuiListItemText", e);
      }
      const r = (0, n.A)("MuiListItemText", [
        "root",
        "multiline",
        "dense",
        "inset",
        "primary",
        "secondary",
      ]);
    },
    3700: (e, t, s) => {
      s.d(t, { A: () => n });
      const n = function (e) {
        return "string" === typeof e;
      };
    },
    875: (e, t, s) => {
      s.d(t, { I: () => l });
      var n = s(5043);
      s(579);
      const a = n.createContext();
      const l = () => {
        const e = n.useContext(a);
        return null !== e && void 0 !== e && e;
      };
    },
    319: (e, t, s) => {
      s.d(t, { u: () => x });
      var n = s(9379),
        a = s(579),
        l = s(5043);
      const r = (e) =>
        e === document.documentElement
          ? (document.scrollingElement || document.documentElement).scrollTop
          : e === window
            ? Math.max(
                window.pageYOffset,
                document.documentElement.scrollTop,
                document.body.scrollTop,
              )
            : e.scrollTop;
      let c = !1;
      try {
        const e = Object.defineProperty({}, "passive", {
          get() {
            c = !0;
          },
        });
        window.addEventListener("test", null, e);
      } catch (f) {}
      const o = {
          isSupportsPassive: () => c,
          on(e, t, s) {
            let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : { passive: !1 };
            e.addEventListener(t, s, !!c && n);
          },
          off(e, t, s) {
            let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : { passive: !1 };
            e.removeEventListener(t, s, !!c && n);
          },
        },
        i = () => {
          const e = (0, l.useRef)(),
            t = (0, l.useRef)(0),
            s = (0, l.useRef)(window),
            n = (0, l.useRef)(() => {});
          return (
            (0, l.useEffect)(() => {
              const a = ((e) => {
                for (; e && e.parentNode && e.parentNode !== document.body; ) {
                  const t = window.getComputedStyle(e);
                  if (
                    (["scroll", "auto"].indexOf(t.overflowY) > -1 ||
                      ["scroll", "auto"].indexOf(t.overflow) > -1) &&
                    (parseInt(t.height, 10) > 0 ||
                      parseInt(t.maxHeight, 10) > 0)
                  )
                    return e;
                  e = e.parentNode;
                }
                return window;
              })(e.current);
              a !== s.current &&
                (n.current(),
                (n.current = ((s) => {
                  t.current = 0;
                  const n = (e) => {
                      const s = e.touches[0];
                      t.current = s.pageY;
                    },
                    a = (n) => {
                      var a;
                      n.touches[0].pageY - t.current > 0 &&
                        n.cancelable &&
                        0 === r(s) &&
                        null != (a = e.current) &&
                        a.contains(n.target) &&
                        n.preventDefault();
                    },
                    l = () => {
                      t.current = 0;
                    };
                  return (
                    o.on(s, "touchstart", n),
                    o.on(s, "touchmove", a),
                    o.on(s, "touchend", l),
                    o.on(s, "touchcancel", l),
                    () => {
                      (o.off(s, "touchstart", n),
                        o.off(s, "touchmove", a),
                        o.off(s, "touchend", l),
                        o.off(s, "touchcancel", l));
                    }
                  );
                })(a)),
                (s.current = a));
            }),
            [e, s]
          );
        },
        d = (e, t) => {
          const s = (() => {
            const e = (0, l.useRef)(!0);
            return e.current ? ((e.current = !1), !0) : e.current;
          })();
          (0, l.useEffect)(() => {
            if (!s) return e();
          }, t);
        },
        m = (e) => {
          const t = (0, l.useRef)(e);
          return ((t.current = e), t);
        },
        u = { startX: 0, startY: 0, offsetX: 0, offsetY: 0 };
      function h(e) {
        return e && !("touches" in e);
      }
      const x = (e) => {
        let {
          className: t,
          style: s,
          animationDuration: c = 300,
          completeDelay: x = 500,
          refreshing: f = !1,
          headHeight: g = 50,
          startDistance: p = 30,
          resistance: v = 0.6,
          threshold: j = g,
          onRefresh: b,
          disabled: w = !1,
          prefixCls: N = "pull-to-refreshify",
          renderText: A,
          children: y,
        } = e;
        const [k, _] = i(),
          S = (() => {
            const e = (0, l.useRef)(!1);
            return (
              (0, l.useEffect)(
                () => (
                  (e.current = !1),
                  () => {
                    e.current = !0;
                  }
                ),
                [],
              ),
              e
            );
          })(),
          [[C, z, M], H] = (0, l.useState)(
            f ? [g, c, "refreshing"] : [0, 0, "normal"],
          ),
          E = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            switch (e) {
              case "pulling":
              case "canRelease":
                H([t, 0, e]);
                break;
              case "refreshing":
                H([g, c, e]);
                break;
              case "complete":
                if ((H([g, c, e]), S.current)) return;
                setTimeout(() => {
                  E("normal");
                }, x);
                break;
              default:
                H([0, c, e]);
            }
          };
        d(() => {
          E(f ? "refreshing" : "complete");
        }, [f]);
        const L = ((e) => {
          let { onDragStart: t, onDragMove: s, onDragEnd: a } = e;
          const r = (0, l.useRef)(null),
            c = m(t),
            i = m(s),
            d = m(a);
          return (
            (0, l.useEffect)(() => {
              const e = r && r.current;
              if (!e) return;
              let t,
                s = !1;
              const a = () => {
                t = (0, n.A)({}, u);
              };
              a();
              const l = (e) => {
                  var n;
                  if (((s = !0), a(), h(e)))
                    ((t.startX = e.clientX), (t.startY = e.clientY));
                  else {
                    const {
                      touches: [s],
                    } = e;
                    ((t.startX = s.pageX), (t.startY = s.pageY));
                  }
                  null == (n = c.current) || n.call(c, e, t);
                },
                m = (e) => {
                  var a;
                  if (!s) return;
                  let l = 0,
                    r = 0;
                  if (h(e)) ((l = e.clientX), (r = e.clientY));
                  else {
                    const t = e.touches[0];
                    ((l = t.pageX), (r = t.pageY));
                  }
                  const c = l - t.startX,
                    o = r - t.startY,
                    d = (0, n.A)(
                      (0, n.A)({}, t),
                      {},
                      { offsetX: c, offsetY: o },
                    );
                  null != (a = i.current) && a.call(i, e, d) && (t = d);
                },
                x = (e) => {
                  var n;
                  ((s = !1), null == (n = d.current) || n.call(d, e, t), a());
                };
              return (
                o.on(e, "touchstart", l),
                o.on(e, "touchmove", m),
                o.on(e, "touchend", x),
                o.on(e, "touchcancel", x),
                o.on(e, "mousedown", l),
                o.on(e, "mousemove", m),
                o.on(e, "mouseup", x),
                () => {
                  (o.off(e, "touchstart", l),
                    o.off(e, "touchmove", m),
                    o.off(e, "touchend", x),
                    o.off(e, "touchcancel", x),
                    o.off(e, "mousedown", l),
                    o.off(e, "mousemove", m),
                    o.off(e, "mouseup", x));
                }
              );
            }, []),
            r
          );
        })({
          onDragMove: (e, t) => {
            let { offsetY: s } = t;
            if (
              !b ||
              s <= 0 ||
              (s > 0 && r(_.current) > 0) ||
              ["refreshing", "complete"].includes(M) ||
              w
            )
              return !1;
            o.isSupportsPassive() || e.preventDefault();
            const n = s * (1 - s / window.screen.height) * v;
            return (E(n - p < j ? "pulling" : "canRelease", n), !0);
          },
          onDragEnd: (e, t) => {
            let { offsetY: s } = t;
            if (s) {
              if ("pulling" === M) return void E("normal");
              "function" == typeof b && b();
            }
          },
        });
        let R = 0;
        return (
          C >= p && (R = (100 * (C - p < j ? C - p : j)) / j),
          (0, a.jsx)("div", {
            ref: L,
            className: t ? "".concat(N, " ").concat(t) : N,
            style: (0, n.A)(
              { minHeight: g, overflowY: "hidden", touchAction: "pan-y" },
              s,
            ),
            children: (0, a.jsxs)("div", {
              ref: k,
              className: "".concat(N, "__content"),
              style: {
                willChange: "transform",
                WebkitTransition: "all ".concat(z, "ms"),
                transition: "all ".concat(z, "ms"),
                WebkitTransform: "translate3d(0, ".concat(C, "px, 0)"),
                transform: "translate3d(0, ".concat(C, "px, 0)"),
              },
              children: [
                (0, a.jsx)(
                  "div",
                  {
                    className: "".concat(N, "__refresh"),
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#909090",
                      fontSize: "14px",
                      marginTop: -g,
                      height: g,
                    },
                    children: A(M, R),
                  },
                  C.toFixed(0),
                ),
                (0, a.jsx)("div", {
                  className: "".concat(N, "__body"),
                  children: y,
                }),
              ],
            }),
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=4645.e6f45017.chunk.js.map
