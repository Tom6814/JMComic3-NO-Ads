"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [7521],
  {
    9144: (e, t, s) => {
      s.d(t, { A: () => g });
      var i = s(9379),
        l = s(5043),
        o = s(6580),
        a = s(7421),
        n = s(6687),
        r = s(7225),
        c = s(9484),
        d = s(7044),
        m = s(3944),
        v = s(7883),
        h = s(5090),
        u = s(4117),
        x = s(4694),
        p = s(579);
      const g = (e) => {
        var t, s;
        const {
            setTabChange: g,
            filter: b,
            setFilter: f,
            currentPage: j,
            catList: w,
            subList: y,
            mode: N,
            setMode: _,
          } = e,
          { config: k } = (0, m.H)(),
          { setting: A } = k,
          { t: C } = (0, u.Bd)(),
          [T, S] = (0, l.useState)({ catMore: !1, imageSource: !1 }),
          z = { fontSize: 20, stroke: "white", strokeWidth: 1 },
          L = (0, h.hz)(),
          I = [
            {
              icon: (0, p.jsx)(a.A, { sx: (0, i.A)({}, z) }),
              onClick: () =>
                S((0, i.A)((0, i.A)({}, T), {}, { imageSource: !0 })),
            },
            { icon: (0, p.jsx)(n.A, { sx: (0, i.A)({}, z) }), link: "/blogs" },
            { icon: (0, p.jsx)(r.A, { sx: (0, i.A)({}, z) }), link: "/week" },
            { icon: (0, p.jsx)(c.A, { sx: (0, i.A)({}, z) }), link: "/search" },
          ];
        return (0, p.jsxs)("header", {
          className: "sticky top-safe w-full bg-bbk text-white z-30",
          children: [
            (0, p.jsxs)("div", {
              className: "h-14 flex items-center",
              children: [
                (0, p.jsx)("div", {
                  className: "flex w-6/12 pl-3",
                  children: (0, p.jsx)(o.N_, {
                    to: "/",
                    children: (0, p.jsx)("img", {
                      src: "/images/new_logo.webp",
                      alt: "logo",
                      width: "100px",
                      height: "20px",
                      className: "animation-click-item",
                    }),
                  }),
                }),
                (0, p.jsx)("div", {
                  className:
                    "text-white top-bar-icon flex w-6/12 justify-around",
                  children: I.map((e, t) =>
                    (0, p.jsx)(
                      o.N_,
                      {
                        to: e.link || "#",
                        onClick: e.onClick,
                        children: (0, p.jsx)("button", {
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
            "categories" === j &&
              (null === (t = w.cat) || void 0 === t ? void 0 : t.length) > 0 &&
              (0, p.jsxs)("div", {
                className: "text-tgy relative bg-nbk",
                children: [
                  (0, p.jsxs)("div", {
                    className:
                      "h-10 w-11/12 flex items-center overflow-x-auto whitespace-nowrap pr-8",
                    style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                    children: [
                      w.cat.map((e, t) =>
                        (0, p.jsxs)(
                          "div",
                          {
                            children: [
                              (0, p.jsx)("span", {
                                title: e.name,
                                className: "pl-4 ".concat(
                                  b.slug === e.slug ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (f(
                                    (0, i.A)(
                                      (0, i.A)({}, b),
                                      {},
                                      {
                                        tabChange: !0,
                                        slug: e.slug,
                                        sub_slug: "",
                                        sort: "",
                                      },
                                    ),
                                  ),
                                    g(!0));
                                },
                                children: e.name,
                              }),
                              0 === t &&
                                (0, p.jsx)(o.N_, {
                                  to: "/library?from=categories",
                                  className: "pl-4",
                                  children: C(
                                    "library.forbidden_comic_library",
                                  ),
                                }),
                            ],
                          },
                          e.slug,
                        ),
                      ),
                      (0, p.jsx)("div", {
                        className: "bg-bbk p-1 absolute top-0 right-0",
                        children: (0, p.jsx)(v.A, {
                          sx: {
                            fontSize: 28,
                            stroke: "#ff6f00",
                            strokeWidth: 1,
                            color: "#ff6f00",
                          },
                          onClick: () =>
                            S((0, i.A)((0, i.A)({}, T), {}, { catMore: !0 })),
                        }),
                      }),
                    ],
                  }),
                  (0, p.jsx)("div", {
                    className: "h-10 flex items-center",
                    children:
                      null ===
                        (s =
                          "" === b.slug
                            ? null === w || void 0 === w
                              ? void 0
                              : w.ranking
                            : null === w || void 0 === w
                              ? void 0
                              : w.ranking.slice(0, -1)) || void 0 === s
                        ? void 0
                        : s.map((e) =>
                            (0, p.jsx)(
                              "span",
                              {
                                className: "pl-4 cursor-pointer ".concat(
                                  b.sort === e.key ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (f(
                                    (0, i.A)(
                                      (0, i.A)({}, b),
                                      {},
                                      { sort: e.key },
                                    ),
                                  ),
                                    g(!0));
                                },
                                children: e.title,
                              },
                              e.key,
                            ),
                          ),
                  }),
                  y.length > 0 &&
                    (0, p.jsx)("div", {
                      className: "h-10 flex items-center",
                      children: y.map((e) =>
                        (0, p.jsx)(
                          "span",
                          {
                            className: "pl-4 ".concat(
                              b.sub_slug === e.slug ? "text-og" : "",
                            ),
                            onClick: () => {
                              (g(!0),
                                f(
                                  (0, i.A)(
                                    (0, i.A)({}, b),
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
            "forum" === j &&
              (0, p.jsx)("div", {
                className:
                  "h-20 w-full text-tgy flex items-end py-2 bg-nbk z-50",
                children: L.map((e) =>
                  (0, p.jsxs)(
                    "div",
                    {
                      className: "relative px-4 text-lg cursor-pointer",
                      onClick: () => {
                        (g(!0), _(e.mode));
                      },
                      children: [
                        (0, p.jsx)("p", {
                          className: "transition-colors duration-300 ".concat(
                            N === e.mode ? "text-og pb-2" : "pb-3",
                          ),
                          children: e.tabName,
                        }),
                        N === e.mode &&
                          (0, p.jsx)(x.P.div, {
                            className: "h-1 bg-og rounded",
                            animate: { width: N === e.mode ? "100%" : "0%" },
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
            T.imageSource &&
              (0, p.jsx)(d.A, { setDialogOpen: S, dialogOpen: T, setting: A }),
            T.catMore &&
              (0, p.jsx)(d.A, {
                setDialogOpen: S,
                dialogOpen: T,
                catList: T.catMore ? w : {},
                setFilter: f,
                filter: b,
              }),
          ],
        });
      };
    },
    2028: (e, t, s) => {
      s.d(t, { A: () => a });
      var i = s(5043),
        l = s(2101),
        o = s(579);
      const a = () => {
        const [e, t] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          const e = () => {
            window.scrollY > 500 ? t(!0) : t(!1);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        return (0, o.jsx)(o.Fragment, {
          children:
            e &&
            (0, o.jsx)("button", {
              onClick: () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className:
                "w-14 h-14 rounded-full fixed bottom-[10rem] right-3 bg-og text-white z-50",
              children: (0, o.jsx)(l.A, {}),
            }),
        });
      };
    },
    787: (e, t, s) => {
      s.d(t, { A: () => g });
      var i = s(5043),
        l = s(6580),
        o = s(6148),
        a = s(9275),
        n = s(1500),
        r = s(6671),
        c = s(9354),
        d = s(8390),
        m = s(4149),
        v = s(4117),
        h = s(8038),
        u = s(1100),
        x = s(3944),
        p = s(579);
      const g = (e) => {
        const { currentPage: t } = e,
          {
            config: { logined: s, ads: g },
          } = (0, x.H)(),
          { t: b } = (0, v.Bd)(),
          f = (0, o.j)(),
          { unread: j, notifResult: w } = (0, o.G)((e) => e.member),
          y = sessionStorage.getItem("catTab") || "";
        (0, i.useEffect)(() => {
          s && 0 === Object.keys(j).length && f((0, u.Zg)());
        }, [s, w]);
        const N = [
            {
              icon: (0, p.jsx)(a.A, { className: "text-3xl" }),
              nav: "main",
              label: b("nav.home"),
              link: "/",
            },
            {
              icon: (0, p.jsx)(n.A, { className: "text-3xl" }),
              nav: "categories",
              label: b("nav.categories"),
              link: "/categories?slug=".concat(y),
            },
            {
              icon: (0, p.jsx)(c.A, { className: "text-3xl" }),
              nav: "movies",
              label: b("nav.movie"),
              link: "/movies",
            },
            {
              icon: (0, p.jsx)(d.A, { className: "text-3xl" }),
              nav: "forum",
              label: b("nav.forum"),
              link: "/forum",
            },
            {
              icon: (0, p.jsx)(m.A, { className: "text-3xl" }),
              nav: "member",
              label: b("nav.member"),
              link: "/member",
            },
          ],
          [_, k] = (0, i.useState)(!1),
          A = (0, i.useRef)(null),
          C = {
            main: "app_bottom_bar_jm3",
            categories: "app_categories_bottom_jm3",
            movies: "app_movies_fixed_bottom_jm3",
            member: "board1",
          }[t];
        return (0, p.jsxs)(p.Fragment, {
          children: [
            "forum" !== t &&
              (0, p.jsx)("div", {
                ref: A,
                className:
                  "fixed left-0 right-0 flex justify-center transition-all duration-300 ease-in-out ".concat(
                    _ ? "bottom-[3rem]" : "bottom-[4.5em]",
                  ),
                children:
                  C &&
                  (0, p.jsx)(h.A, {
                    adKey: C,
                    closeBtn: !0,
                    handleAdResize: () => {
                      k(!0);
                    },
                  }),
              }),
            (0, p.jsx)("div", {
              className: "fixed bottom-0 left-0 right-0 w-full z-30",
              children: (0, p.jsx)("div", {
                className:
                  "flex justify-around items-start bg-bbk text-gy z-50 min-h-[6rem] pt-3 overflow-hidden",
                children: N.map((e, i) =>
                  (0, p.jsxs)(
                    l.N_,
                    {
                      to: e.link,
                      className:
                        "animation-click-item flex flex-col items-center relative ".concat(
                          e.nav === t ? "text-og" : "",
                        ),
                      children: [
                        (0, p.jsxs)("div", {
                          className: "relative",
                          children: [
                            e.icon,
                            s &&
                              5 === i &&
                              j.comic_follow + j.site_notice > 0 &&
                              (0, p.jsx)("span", {
                                className:
                                  "absolute -top-1 -right-5 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center",
                                children: j.comic_follow + j.site_notice,
                              }),
                          ],
                        }),
                        (0, p.jsx)("span", {
                          className: "text-center",
                          children: e.label,
                        }),
                      ],
                    },
                    i,
                  ),
                ),
              }),
            }),
          ],
        });
      };
    },
    7521: (e, t, s) => {
      (s.r(t), s.d(t, { default: () => A }));
      var i = s(5043),
        l = s(6580),
        o = s(6148),
        a = s(2899),
        n = s(8213),
        r = s(787),
        c = s(2028),
        d = s(9634),
        m = s(8038),
        v = s(3865),
        h = s(579);
      const u = v.A.apiUrl || "",
        x = (e) => {
          let { movie: t, memberInfo: s } = e;
          const a = (0, l.Zp)(),
            { selectedVideoType: n, selectedSearchQuery: r } = (0, o.G)(
              (e) => e.movies,
            );
          if (!t || !Array.isArray(t)) return null;
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)("div", {
                className: "grid grid-cols-2 gap-2 p-2 ",
                children: t.map((e, t) =>
                  (0, h.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        false &&
                          (t + 1) % 10 === 1 &&
                          0 !== t &&
                          (0, h.jsx)("div", {
                            className: "col-span-2 flex justify-center",
                            children: (0, h.jsx)("div", {
                              className: "min-h-[70px] w-full bg-white",
                              children: (0, h.jsx)(m.A, {
                                adKey: "app_movies_ten_jm3",
                              }),
                            }),
                          }),
                        (0, h.jsxs)("div", {
                          onClick: () => {
                            return (
                              (t = e.id),
                              void a(
                                "/movies/"
                                  .concat(t, "?videoType=")
                                  .concat(n, "&searchQuery=")
                                  .concat(encodeURIComponent(r)),
                              )
                            );
                            var t;
                          },
                          className:
                            "bg-white dark:bg-nbk rounded overflow-hidden shadow cursor-pointer",
                          children: [
                            "movie" === n
                              ? (0, h.jsx)("div", {
                                  className:
                                    "relative aspect-[2/3] w-full overflow-hidden",
                                  children: (0, h.jsx)(d.LazyLoadImage, {
                                    className:
                                      "absolute inset-0 w-full h-full object-cover",
                                    placeholderSrc: "/images/cover_default.jpg",
                                    src: e.photo_str.startsWith("http")
                                      ? e.photo_str
                                      : "".concat(u).concat(e.photo_str),
                                    alt: e.title,
                                  }),
                                })
                              : (0, h.jsx)("div", {
                                  className:
                                    "relative aspect-[16/9] w-full overflow-hidden",
                                  children: (0, h.jsx)(d.LazyLoadImage, {
                                    className:
                                      "absolute inset-0 w-full h-full object-cover",
                                    placeholderSrc: "/images/title-circle.webp",
                                    src: e.photo.startsWith("http")
                                      ? e.photo
                                      : "".concat(u).concat(e.photo),
                                    alt: e.title,
                                  }),
                                }),
                            (0, h.jsxs)("div", {
                              className: "p-2",
                              children: [
                                (0, h.jsx)("p", {
                                  className:
                                    "line-clamp-2 text-base font-medium dark:text-white leading-6 min-h-[3rem]",
                                  children: e.title,
                                }),
                                (0, h.jsx)("div", {
                                  className:
                                    "text-sm text-og whitespace-nowrap overflow-auto scrollbar-hidden truncate",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id + t,
                  ),
                ),
              }),
              (0, h.jsx)("div", {
                className: "mb-4 flex justify-center w-full",
                children: (0, h.jsx)(m.A, { adKey: "app_movies_bottom" }),
              }),
            ],
          });
        };
      var p = s(4975),
        g = s(50),
        b = s(3944),
        f = s(1637),
        j = s(319),
        w = s(5412),
        y = s(5843),
        N = s(9144),
        _ = s(4117),
        k = s(5411);
      const A = () => {
        var e, t, s, d, v, u, A;
        const C = (0, o.j)(),
          T = (0, l.zy)(),
          S = (0, l.Zp)(),
          [z] = (0, l.ok)(),
          { config: L } = (0, b.H)(),
          { memberInfo: I, ads: R } = L,
          { ref: Q, inView: E } = (0, y.Wx)(),
          [M, F] = (0, i.useState)(1),
          { t: B } = (0, _.Bd)(),
          [K, O] = (0, i.useState)(!1);
        sessionStorage.setItem(
          "fromPage",
          ""
            .concat(T.pathname, "?videoType=")
            .concat(z.get("videoType") || "movie", "&searchQuery=")
            .concat(z.get("searchQuery") || ""),
        );
        const {
            moviesList: P,
            exclusiveList: W,
            latestHanime: q,
            isLoading: U,
            isLoadMore: V,
            isRefreshing: H,
            selectedVideoType: Z,
            selectedSearchQuery: D,
          } = (0, o.G)((e) => e.movies),
          G = [
            {
              label: B("movies.category.adult"),
              videoType: "movie",
              searchQuery: "",
            },
            {
              label: B("movies.category.hanime"),
              videoType: "video",
              searchQuery: "",
            },
            {
              label: B("movies.category.cosplay"),
              videoType: "cos",
              searchQuery: "",
            },
          ],
          Y =
            null !== (e = P.list) && void 0 !== e && e.length
              ? Math.ceil(P.total / 40)
              : 0,
          J = M <= Y && Y > 1,
          X = z.get("videoType") || "movie",
          $ = z.get("searchQuery") || "",
          ee =
            (null === (t = G.find((e) => e.videoType === X)) || void 0 === t
              ? void 0
              : t.label) || B("movies.title"),
          te = (0, i.useCallback)(
            function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                s =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                i =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 1;
              (C((0, n.Al)({ isLoading: !0, isLoadMore: e, isRefreshing: t })),
                e || (F(1), C((0, n.gl)("moviesList"))),
                setTimeout(() => {
                  C((0, a.pk)({ page: i, search_query: $, video_type: Z }));
                }, s));
            },
            [C, Z, $],
          );
        (0, i.useEffect)(() => {
          var e, t;
          (0 === (null === (e = W.list) || void 0 === e ? void 0 : e.length) &&
            (async () => {
              await C(
                (0, a.pk)({
                  page: 1,
                  search_query: "",
                  video_type: "movie_exclude",
                }),
              ).unwrap();
            })(),
            (0 !==
              (null === (t = P.list) || void 0 === t ? void 0 : t.length) &&
              X === Z &&
              $ === D) ||
              te(),
            0 === (null === q || void 0 === q ? void 0 : q.length) &&
              C((0, a.RN)()));
        }, [
          C,
          null === (s = W.list) || void 0 === s ? void 0 : s.length,
          null === q || void 0 === q ? void 0 : q.length,
          Z,
          D,
        ]);
        const se = (0, i.useCallback)(() => {
          if (J && E && J) {
            const e = M + 1;
            (F(e), te(!0, !1, 1e3, e));
          }
        }, [E, J]);
        (0, i.useEffect)(() => {
          se();
        }, [se]);
        const ie = "app_movies_top_banner",
          le = null === (d = R[ie]) || void 0 === d ? void 0 : d.advs,
          oe = (0, i.useMemo)(
            () =>
              (0, w.g9)(le, null === le || void 0 === le ? void 0 : le.length)
                .indexes,
            [le],
          );
        return (0, h.jsxs)("div", {
          className: "dark:bg-bbk transition-all duration-300",
          children: [
            U && (0, h.jsx)(k.A, {}),
            (0, h.jsxs)("div", {
              className: "sticky top-safe w-full bg-[#242424] text-white z-50",
              children: [
                (0, h.jsx)(N.A, {}),
                (0, h.jsx)("div", {
                  className: "flex items-center space-x-6 p-2",
                  children: G.map((e, t) => {
                    let { label: s, videoType: i, searchQuery: l } = e;
                    return (0, h.jsx)(
                      "button",
                      {
                        onClick: () => {
                          !(function (e) {
                            let t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                            (C((0, n.F0)(e)),
                              S(
                                "/movies?videoType="
                                  .concat(e, "&searchQuery=")
                                  .concat(encodeURIComponent(t)),
                              ));
                          })(i, l);
                        },
                        className: "pb-1 ".concat(
                          Z === i
                            ? "text-orange-500 border-b-2 border-orange-500"
                            : "",
                        ),
                        children: s,
                      },
                      s,
                    );
                  }),
                }),
              ],
            }),
            (0, h.jsx)(p.RC, {
              spaceBetween: 30,
              centeredSlides: !0,
              autoplay: { delay: 5e3 },
              pagination: { clickable: !0 },
              modules: [g.Ij, g.dK],
              onTouchStart: () => O(!0),
              onTouchEnd: () => setTimeout(() => O(!1), 100),
              className: "mySwiper h-[250px]",
              children:
                null === oe || void 0 === oe
                  ? void 0
                  : oe.map((e) =>
                      (0, h.jsx)(
                        p.qr,
                        {
                          children: (0, h.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, h.jsx)("div", {
                                className: "absolute inset-0 z-10",
                                style: {
                                  touchAction: "pan-y",
                                  pointerEvents: K ? "none" : "auto",
                                  backgroundColor: "transparent",
                                },
                              }),
                              (0, h.jsx)(m.A, { adKey: ie, adIndex: e }),
                            ],
                          }),
                        },
                        e,
                      ),
                    ),
            }),
            "movie" === Z &&
              (null === (v = W.list) || void 0 === v ? void 0 : v.length) > 0 &&
              (0, h.jsxs)("div", {
                className: "p-2",
                children: [
                  (0, h.jsx)("div", {
                    className: "my-3 dark:text-white",
                    children: B("movies.exclusive"),
                  }),
                  (0, h.jsx)(p.RC, {
                    spaceBetween: 30,
                    centeredSlides: !0,
                    autoplay: { delay: 5e3 },
                    pagination: { clickable: !0 },
                    navigation: !0,
                    modules: [g.Ij, g.dK, g.Vx],
                    onTouchStart: () => O(!0),
                    onTouchEnd: () => setTimeout(() => O(!1), 100),
                    className:
                      "mySwiper h-[280px] [--swiper-navigation-color:white] [--swiper-pagination-color:white] [&_.swiper-button-prev]:w-10 [&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:bg-gray-400/50 [&_.swiper-button-prev]:flex [&_.swiper-button-prev]:items-center [&_.swiper-button-prev]:justify-center [&_.swiper-button-next]:w-10 [&_.swiper-button-next]:h-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:bg-gray-400/50 [&_.swiper-button-next]:flex [&_.swiper-button-next]:items-center [&_.swiper-button-next]:justify-center [&_.swiper-button-prev::after]:text-base [&_.swiper-button-next::after]:text-base",
                    children:
                      null === (u = W.list) || void 0 === u
                        ? void 0
                        : u.map((e, t) =>
                            (0, h.jsx)(
                              p.qr,
                              {
                                children: (0, h.jsx)(l.N_, {
                                  to: "/movies/"
                                    .concat(
                                      e.id,
                                      "?videoType=movie&searchQuery=",
                                    )
                                    .concat(encodeURIComponent(D || "")),
                                  state: { video_type: "video" },
                                  children: (0, h.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      (0, h.jsx)("div", {
                                        className: "absolute inset-0 z-10",
                                        style: {
                                          touchAction: "pan-y",
                                          backgroundColor: "transparent",
                                        },
                                      }),
                                      (0, h.jsx)("img", {
                                        src: e.photo,
                                        alt: "",
                                      }),
                                      (0, h.jsx)("div", {
                                        className:
                                          "bg-gy text-white break-words overflow-hidden text-ellipsis p-1 my-2",
                                        children: e.title,
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              e.id,
                            ),
                          ),
                  }),
                ],
              }),
            (0, h.jsxs)(j.u, {
              completeDelay: 1e3,
              refreshing: H,
              onRefresh: () => {
                te(!1, !0);
              },
              renderText: w.S5,
              className: "overflow-y-visible",
              children: [
                "video" === Z &&
                  q &&
                  (0, h.jsxs)("div", {
                    className: "p-2",
                    children: [
                      (0, h.jsx)("div", {
                        className: "my-3 dark:text-white",
                        children: B("movies.latest_hanime"),
                      }),
                      (0, h.jsx)(p.RC, {
                        modules: [g.s3, g.Ze, g.dK],
                        spaceBetween: 8,
                        slidesPerView: 2.8,
                        grabCursor: !0,
                        children: q.map((e, t) => {
                          let { id: s, photo: i, title: o } = e;
                          return (0, h.jsxs)(
                            p.qr,
                            {
                              children: [
                                (0, h.jsx)(l.N_, {
                                  to: "/movies/"
                                    .concat(s, "?videoType=video&searchQuery=")
                                    .concat(encodeURIComponent(D || "")),
                                  state: { video_type: "video" },
                                  children: (0, h.jsx)("img", {
                                    className:
                                      "w-full h-full object-cover rounded",
                                    src: i,
                                    alt: o,
                                  }),
                                }),
                                (0, h.jsx)("p", {
                                  className: "line-clamp-2 dark:text-white",
                                  children: o,
                                }),
                              ],
                            },
                            t,
                          );
                        }),
                      }),
                    ],
                  }),
                (0, h.jsx)("div", {
                  className: "border-l-4 border-og pl-2 mt-2  dark:text-white",
                  children: ee,
                }),
                (null === P ||
                void 0 === P ||
                null === (A = P.list) ||
                void 0 === A
                  ? void 0
                  : A.length) > 0 &&
                  (0, h.jsxs)(h.Fragment, {
                    children: [
                      (0, h.jsx)(x, {
                        memberInfo: I,
                        movie: P.list,
                        videoType: Z,
                      }),
                      ((e) => {
                        const t =
                            (null === P || void 0 === P ? void 0 : P.total) ||
                            0,
                          s =
                            ((null === P ||
                            void 0 === P ||
                            null === (e = P.list) ||
                            void 0 === e
                              ? void 0
                              : e.length) || 0) < t;
                        return (0, h.jsx)("button", {
                          ref: Q,
                          onClick: se,
                          className: "w-full flex justify-center pb-40",
                          children: s
                            ? (0, h.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, h.jsx)(f.A, {
                                    color: "inherit",
                                    size: 12,
                                  }),
                                  (0, h.jsx)("p", {
                                    className: "ml-2",
                                    children: B("movies.loading"),
                                  }),
                                ],
                              })
                            : (0, h.jsx)("p", {
                                className: "text-center",
                                children: B("movies.no_more_content"),
                              }),
                        });
                      })(),
                    ],
                  }),
              ],
            }),
            (0, h.jsx)(c.A, {}),
            (0, h.jsx)(r.A, { currentPage: "movies" }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=7521.66b7f012.chunk.js.map
