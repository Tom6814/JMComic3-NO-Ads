"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [2669],
  {
    9144: (e, t, s) => {
      s.d(t, { A: () => u });
      var a = s(9379),
        r = s(5043),
        o = s(6580),
        i = s(7421),
        l = s(6687),
        n = s(7225),
        c = s(9484),
        d = s(7044),
        m = s(3944),
        x = s(7883),
        h = s(5090),
        g = s(4117),
        v = s(4694),
        p = s(579);
      const u = (e) => {
        var t, s;
        const {
            setTabChange: u,
            filter: f,
            setFilter: A,
            currentPage: b,
            catList: j,
            subList: k,
            mode: y,
            setMode: w,
          } = e,
          { config: N } = (0, m.H)(),
          { setting: _ } = N,
          { t: S } = (0, g.Bd)(),
          [C, z] = (0, r.useState)({ catMore: !1, imageSource: !1 }),
          M = { fontSize: 20, stroke: "white", strokeWidth: 1 },
          L = (0, h.hz)(),
          H = [
            {
              icon: (0, p.jsx)(i.A, { sx: (0, a.A)({}, M) }),
              onClick: () =>
                z((0, a.A)((0, a.A)({}, C), {}, { imageSource: !0 })),
            },
            { icon: (0, p.jsx)(l.A, { sx: (0, a.A)({}, M) }), link: "/blogs" },
            { icon: (0, p.jsx)(n.A, { sx: (0, a.A)({}, M) }), link: "/week" },
            { icon: (0, p.jsx)(c.A, { sx: (0, a.A)({}, M) }), link: "/search" },
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
                  children: H.map((e, t) =>
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
            "categories" === b &&
              (null === (t = j.cat) || void 0 === t ? void 0 : t.length) > 0 &&
              (0, p.jsxs)("div", {
                className: "text-tgy relative bg-nbk",
                children: [
                  (0, p.jsxs)("div", {
                    className:
                      "h-10 w-11/12 flex items-center overflow-x-auto whitespace-nowrap pr-8",
                    style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                    children: [
                      j.cat.map((e, t) =>
                        (0, p.jsxs)(
                          "div",
                          {
                            children: [
                              (0, p.jsx)("span", {
                                title: e.name,
                                className: "pl-4 ".concat(
                                  f.slug === e.slug ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (A(
                                    (0, a.A)(
                                      (0, a.A)({}, f),
                                      {},
                                      {
                                        tabChange: !0,
                                        slug: e.slug,
                                        sub_slug: "",
                                        sort: "",
                                      },
                                    ),
                                  ),
                                    u(!0));
                                },
                                children: e.name,
                              }),
                              0 === t &&
                                (0, p.jsx)(o.N_, {
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
                      (0, p.jsx)("div", {
                        className: "bg-bbk p-1 absolute top-0 right-0",
                        children: (0, p.jsx)(x.A, {
                          sx: {
                            fontSize: 28,
                            stroke: "#ff6f00",
                            strokeWidth: 1,
                            color: "#ff6f00",
                          },
                          onClick: () =>
                            z((0, a.A)((0, a.A)({}, C), {}, { catMore: !0 })),
                        }),
                      }),
                    ],
                  }),
                  (0, p.jsx)("div", {
                    className: "h-10 flex items-center",
                    children:
                      null ===
                        (s =
                          "" === f.slug
                            ? null === j || void 0 === j
                              ? void 0
                              : j.ranking
                            : null === j || void 0 === j
                              ? void 0
                              : j.ranking.slice(0, -1)) || void 0 === s
                        ? void 0
                        : s.map((e) =>
                            (0, p.jsx)(
                              "span",
                              {
                                className: "pl-4 cursor-pointer ".concat(
                                  f.sort === e.key ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (A(
                                    (0, a.A)(
                                      (0, a.A)({}, f),
                                      {},
                                      { sort: e.key },
                                    ),
                                  ),
                                    u(!0));
                                },
                                children: e.title,
                              },
                              e.key,
                            ),
                          ),
                  }),
                  k.length > 0 &&
                    (0, p.jsx)("div", {
                      className: "h-10 flex items-center",
                      children: k.map((e) =>
                        (0, p.jsx)(
                          "span",
                          {
                            className: "pl-4 ".concat(
                              f.sub_slug === e.slug ? "text-og" : "",
                            ),
                            onClick: () => {
                              (u(!0),
                                A(
                                  (0, a.A)(
                                    (0, a.A)({}, f),
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
              (0, p.jsx)("div", {
                className:
                  "h-20 w-full text-tgy flex items-end py-2 bg-nbk z-50",
                children: L.map((e) =>
                  (0, p.jsxs)(
                    "div",
                    {
                      className: "relative px-4 text-lg cursor-pointer",
                      onClick: () => {
                        (u(!0), w(e.mode));
                      },
                      children: [
                        (0, p.jsx)("p", {
                          className: "transition-colors duration-300 ".concat(
                            y === e.mode ? "text-og pb-2" : "pb-3",
                          ),
                          children: e.tabName,
                        }),
                        y === e.mode &&
                          (0, p.jsx)(v.P.div, {
                            className: "h-1 bg-og rounded",
                            animate: { width: y === e.mode ? "100%" : "0%" },
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
              (0, p.jsx)(d.A, { setDialogOpen: z, dialogOpen: C, setting: _ }),
            C.catMore &&
              (0, p.jsx)(d.A, {
                setDialogOpen: z,
                dialogOpen: C,
                catList: C.catMore ? j : {},
                setFilter: A,
                filter: f,
              }),
          ],
        });
      };
    },
    2028: (e, t, s) => {
      s.d(t, { A: () => i });
      var a = s(5043),
        r = s(2101),
        o = s(579);
      const i = () => {
        const [e, t] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
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
              children: (0, o.jsx)(r.A, {}),
            }),
        });
      };
    },
    787: (e, t, s) => {
      s.d(t, { A: () => u });
      var a = s(5043),
        r = s(6580),
        o = s(6148),
        i = s(9275),
        l = s(1500),
        n = s(6671),
        c = s(9354),
        d = s(8390),
        m = s(4149),
        x = s(4117),
        h = s(8038),
        g = s(1100),
        v = s(3944),
        p = s(579);
      const u = (e) => {
        const { currentPage: t } = e,
          {
            config: { logined: s, ads: u },
          } = (0, v.H)(),
          { t: f } = (0, x.Bd)(),
          A = (0, o.j)(),
          { unread: b, notifResult: j } = (0, o.G)((e) => e.member),
          k = sessionStorage.getItem("catTab") || "";
        (0, a.useEffect)(() => {
          s && 0 === Object.keys(b).length && A((0, g.Zg)());
        }, [s, j]);
        const y = [
            {
              icon: (0, p.jsx)(i.A, { className: "text-3xl" }),
              nav: "main",
              label: f("nav.home"),
              link: "/",
            },
            {
              icon: (0, p.jsx)(l.A, { className: "text-3xl" }),
              nav: "categories",
              label: f("nav.categories"),
              link: "/categories?slug=".concat(k),
            },
            {
              icon: (0, p.jsx)(c.A, { className: "text-3xl" }),
              nav: "movies",
              label: f("nav.movie"),
              link: "/movies",
            },
            {
              icon: (0, p.jsx)(d.A, { className: "text-3xl" }),
              nav: "forum",
              label: f("nav.forum"),
              link: "/forum",
            },
            {
              icon: (0, p.jsx)(m.A, { className: "text-3xl" }),
              nav: "member",
              label: f("nav.member"),
              link: "/member",
            },
          ],
          [w, N] = (0, a.useState)(!1),
          _ = (0, a.useRef)(null),
          S = {
            main: "app_bottom_bar_jm3",
            categories: "app_categories_bottom_jm3",
            movies: "app_movies_fixed_bottom_jm3",
            member: "board1",
          }[t];
        return (0, p.jsxs)(p.Fragment, {
          children: [
            "forum" !== t &&
              (0, p.jsx)("div", {
                ref: _,
                className:
                  "fixed left-0 right-0 flex justify-center transition-all duration-300 ease-in-out ".concat(
                    w ? "bottom-[3rem]" : "bottom-[4.5em]",
                  ),
                children:
                  S &&
                  (0, p.jsx)(h.A, {
                    adKey: S,
                    closeBtn: !0,
                    handleAdResize: () => {
                      N(!0);
                    },
                  }),
              }),
            (0, p.jsx)("div", {
              className: "fixed bottom-0 left-0 right-0 w-full z-30",
              children: (0, p.jsx)("div", {
                className:
                  "flex justify-around items-start bg-bbk text-gy z-50 min-h-[6rem] pt-3 overflow-hidden",
                children: y.map((e, a) =>
                  (0, p.jsxs)(
                    r.N_,
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
                              5 === a &&
                              b.comic_follow + b.site_notice > 0 &&
                              (0, p.jsx)("span", {
                                className:
                                  "absolute -top-1 -right-5 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center",
                                children: b.comic_follow + b.site_notice,
                              }),
                          ],
                        }),
                        (0, p.jsx)("span", {
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
    3344: (e, t, s) => {
      s.d(t, { A: () => j });
      var a = s(9379),
        r = s(5043),
        o = s(3438),
        i = s(7392),
        l = s(1906),
        n = s(35),
        c = s(4219),
        d = s(5316),
        m = s(9347),
        x = s(4836),
        h = s(6990),
        g = s(5954),
        v = s(6258),
        p = s(688),
        u = s(9506),
        f = s(4117),
        A = s(579);
      const b = r.forwardRef(function (e, t) {
          return (0, A.jsx)(x.A, (0, a.A)({ direction: "up", ref: t }, e));
        }),
        j = (e) => {
          const {
              dialogOpen: t,
              setDialogOpen: s,
              editFolder: x,
              setEditFolder: j,
              handleEditFolder: k,
              folderList: y,
              tagsList: w,
            } = e,
            [N, _] = (0, r.useState)(null),
            S = Boolean(N),
            { t: C } = (0, f.Bd)(),
            z =
              (null === w || void 0 === w ? void 0 : w.length) > 0 &&
              x.tags_select === w.toString(),
            M = (e, r) => {
              "backdropClick" !== r &&
                s((0, a.A)((0, a.A)({}, t), {}, { folder: !1 }));
            };
          return (0, A.jsx)(A.Fragment, {
            children:
              t.folder &&
              (0, A.jsxs)(n.A, {
                onClose: M,
                "aria-labelledby": "customized-dialog-title",
                open: t.folder,
                TransitionComponent: b,
                className: "text-white",
                slotProps: {
                  backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.3)" } },
                },
                sx: () => ({
                  "& .MuiPaper-root": { paddingY: "1rem", width: "90%" },
                }),
                children: [
                  (0, A.jsx)(i.A, {
                    "aria-label": "close",
                    onClick: M,
                    sx: (e) => ({
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: e.palette.grey[700],
                      stroke: e.palette.grey[700],
                      strokeWidth: 2,
                    }),
                    children: (0, A.jsx)(o.A, {}),
                  }),
                  "add" === x.type &&
                    (0, A.jsx)(c.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: C("member.add_folder"),
                    }),
                  "edit" === x.type &&
                    (0, A.jsx)(c.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: C("member.rename_folder"),
                    }),
                  "move" === x.type &&
                    (0, A.jsx)(c.A, {
                      id: "customized-dialog-title",
                      children: C("member.Select_favorite_folder"),
                    }),
                  (0, A.jsxs)(d.A, {
                    className: "",
                    children: [
                      ("add" === x.type || "edit" === x.type) &&
                        (0, A.jsx)("input", {
                          type: "text",
                          placeholder: C("member.enter_folder_name"),
                          className:
                            "w-11/12 h-10 p-4 border border-solid border-gy",
                          onChange: (e) =>
                            j(
                              (0, a.A)(
                                (0, a.A)({}, x),
                                {},
                                { folder_name: e.target.value },
                              ),
                            ),
                        }),
                      "move" === x.type &&
                        (0, A.jsxs)("div", {
                          children: [
                            (0, A.jsxs)(l.A, {
                              id: "fade-button",
                              "aria-controls": S ? "fade-menu" : void 0,
                              "aria-haspopup": "true",
                              "aria-expanded": S ? "true" : void 0,
                              onClick: (e) => _(e.currentTarget),
                              className:
                                "flex justify-between p-0 w-8/12 text-[#aaa] text-lg",
                              children: [
                                (0, A.jsx)("span", {
                                  className: "pr-10",
                                  children:
                                    x.folder_name || C("member.select_folder"),
                                }),
                                (0, A.jsx)(g.A, {
                                  sx: { color: "#ff6f00", fontSize: 24 },
                                }),
                              ],
                            }),
                            (0, A.jsx)(p.A, {
                              id: "fade-menu",
                              MenuListProps: {
                                "aria-labelledby": "fade-button",
                              },
                              anchorEl: N,
                              open: S,
                              onClose: () => _(null),
                              TransitionComponent: v.A,
                              sx: (e) => ({
                                "& .MuiPaper-root": {
                                  marginTop: e.spacing(0),
                                  marginLeft: e.spacing(-2),
                                  width: "50%",
                                  color: "#757575",
                                },
                              }),
                              children:
                                (null === y || void 0 === y
                                  ? void 0
                                  : y.length) > 0 &&
                                y.map((e, t) =>
                                  (0, A.jsx)(
                                    h.A,
                                    {
                                      onClick: () => {
                                        (_(null),
                                          j(
                                            (0, a.A)(
                                              (0, a.A)({}, x),
                                              {},
                                              {
                                                folder_name: e.name,
                                                folder_id: e.FID,
                                              },
                                            ),
                                          ));
                                      },
                                      children: e.name,
                                    },
                                    e.FID,
                                  ),
                                ),
                            }),
                          ],
                        }),
                      (null === w || void 0 === w ? void 0 : w.length) > 0 &&
                        (0, A.jsxs)(A.Fragment, {
                          children: [
                            (0, A.jsx)("hr", {
                              className: "border-2 border-tgy my-4",
                            }),
                            (0, A.jsxs)("div", {
                              className: "text-left",
                              children: [
                                (0, A.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, A.jsx)("p", {
                                      className:
                                        "border-2 border-solid border-og w-5 h-5 flex justify-center items-center overflow-hidden mr-2",
                                      onClick: () => {
                                        const e = z ? "" : w.toString();
                                        j((t) =>
                                          (0, a.A)(
                                            (0, a.A)({}, t),
                                            {},
                                            { tags_select: e },
                                          ),
                                        );
                                      },
                                      children:
                                        z &&
                                        (0, A.jsx)(u.A, {
                                          sx: {
                                            fontSize: 14,
                                            color: "#ff6f00",
                                            stroke: "#ff6f00",
                                            strokeWidth: 2,
                                          },
                                        }),
                                    }),
                                    (0, A.jsx)("span", {
                                      children: C("detail.favorite_all_tags"),
                                    }),
                                  ],
                                }),
                                (0, A.jsx)("div", {
                                  className:
                                    "flex flex-wrap items-center text-gy mt-4 dark:text-gy",
                                  children: w.map((e) => {
                                    var t;
                                    return (0, A.jsx)(
                                      "span",
                                      {
                                        className:
                                          "border-[1px] border-solid border-gy rounded-md p-1 m-1\n                         ".concat(
                                            null !== (t = x.tags_select) &&
                                              void 0 !== t &&
                                              t.split(",").includes(e)
                                              ? "bg-og text-white border-og"
                                              : "",
                                          ),
                                        onClick: () => {
                                          var t;
                                          const s =
                                              (null === (t = x.tags_select) ||
                                              void 0 === t
                                                ? void 0
                                                : t.split(",")) || [],
                                            r = s.includes(e)
                                              ? s.filter((t) => t !== e)
                                              : [...s, e];
                                          j((e) =>
                                            (0, a.A)(
                                              (0, a.A)({}, e),
                                              {},
                                              {
                                                tags_select: r
                                                  .join(",")
                                                  .replace(/^,/, ""),
                                              },
                                            ),
                                          );
                                        },
                                        children: "#" + e,
                                      },
                                      e,
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, A.jsx)(m.A, {
                    className: "flex justify-center",
                    children: (0, A.jsx)(l.A, {
                      className:
                        "bg-og text-white rounded border-solid border-2 border-og w-8/12",
                      onClick: (e) => {
                        (M(),
                          "add" === x.type && k("add"),
                          "edit" === x.type && k("edit"),
                          "move" === x.type && k("move"));
                      },
                      children: C("member.confirm"),
                    }),
                  }),
                ],
              }),
          });
        };
    },
    4338: (e, t, s) => {
      (s.r(t), s.d(t, { default: () => H }));
      var a = s(9379),
        r = s(5043),
        o = s(6580),
        i = s(4117),
        l = s(6148),
        n = s(3944),
        c = s(1906),
        d = s(688),
        m = s(6990),
        x = s(5954),
        h = s(3438),
        g = s(9484),
        v = s(5411),
        p = s(2028),
        u = s(9011),
        f = s(7947),
        A = s(1299),
        b = s(787),
        j = s(5858),
        k = s(9144),
        y = s(3344),
        w = s(2226),
        N = s(7738),
        _ = s(5244),
        S = s(2782),
        C = s(3752),
        z = s(8038),
        M = s(579);
      const L = (e) => {
          var t, s;
          const {
            novelList: a,
            isLoading: i,
            handleSearchClick: l,
            handleEngagementAction: n,
            favoriteSave: c,
            t: d,
            filter: m,
          } = e;
          return (0, M.jsxs)("div", {
            className: "grid grid-cols-2 gap-2 p-2 justify-items-center pb-40",
            children: [
              (null === (t = a.list) || void 0 === t ? void 0 : t.length) > 0
                ? a.list.map((e, t) => {
                    const s = (t + 1) % 10 === 0;
                    return (0, M.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          (0, M.jsxs)(
                            "div",
                            {
                              className:
                                "relative w-[95%] bg-white rounded p-2 my-1.5 dark:bg-bbk",
                              children: [
                                (0, M.jsx)(o.N_, {
                                  to: "/novels/detail?nid="
                                    .concat(e.id, "&filter=")
                                    .concat(m),
                                  children: (0, M.jsx)("div", {
                                    className: "w-full h-auto overflow-hidden",
                                    children: (0, M.jsx)("img", {
                                      src: e.image,
                                      alt: e.id,
                                      loading: "lazy",
                                      onLoad: (e) => {
                                        e.target.style.opacity = "1";
                                      },
                                      onError: (e) => {
                                        e.target.src =
                                          "/images/cover_default.jpg";
                                      },
                                      className:
                                        "animation-click-item object-cover rounded-md w-[170px] h-[230px]",
                                      style: {
                                        opacity: "0",
                                        transition: "opacity 0.5s ease-in-out",
                                      },
                                    }),
                                  }),
                                }),
                                (0, M.jsx)("p", {
                                  className:
                                    "text-gy truncate mt-1 dark:text-white",
                                  children: e.name,
                                }),
                                (0, M.jsx)("p", {
                                  className: "text-gy truncate dark:text-lgy",
                                  children: e.last_chapter_title,
                                }),
                                (0, M.jsx)("button", {
                                  className: "text-og text-t08",
                                  onClick: () => l(e.author),
                                  children: e.author,
                                }),
                                (0, M.jsx)("div", {
                                  className:
                                    "bg-[rgba(117,117,117,0.6)] absolute left-3 bottom-24 rounded p-[0.1rem]",
                                  onClick: () => n("like", e.id),
                                  children: (0, M.jsx)(_.A, {
                                    className: "".concat(
                                      c.like.includes(e.id)
                                        ? "text-red-600"
                                        : "text-og",
                                    ),
                                  }),
                                }),
                                (0, M.jsx)("div", {
                                  className:
                                    "bg-[rgba(117,117,117,0.6)] absolute right-3 bottom-24 rounded p-[0.1rem]",
                                  onClick: () => n("mark", e.id),
                                  children: c.mark.includes(e.id)
                                    ? (0, M.jsx)(C.A, { className: "text-og" })
                                    : (0, M.jsx)(S.A, {
                                        className: "text-2xl text-white",
                                      }),
                                }),
                              ],
                            },
                            "novel-card-".concat(e.id),
                          ),
                          s &&
                            (0, M.jsxs)("div", {
                              className: "col-span-2 grid grid-cols-2 gap-2",
                              children: [
                                (0, M.jsx)("div", {
                                  className: "max-h-[140px] overflow-hidden",
                                  children: (0, M.jsx)(z.A, {
                                    adKey: "app-novels_list_mid_1",
                                  }),
                                }),
                                (0, M.jsx)("div", {
                                  className: "max-h-[140px] overflow-hidden",
                                  children: (0, M.jsx)(z.A, {
                                    adKey: "app-novels_list_mid_2",
                                  }),
                                }),
                                (0, M.jsx)("div", {
                                  className: "max-h-[140px] overflow-hidden",
                                  children: (0, M.jsx)(z.A, {
                                    adKey: "app-novels_list_mid_3",
                                  }),
                                }),
                                (0, M.jsx)("div", {
                                  className: "max-h-[140px] overflow-hidden",
                                  children: (0, M.jsx)(z.A, {
                                    adKey: "app-novels_list_mid_4",
                                  }),
                                }),
                              ],
                            }),
                        ],
                      },
                      e.id,
                    );
                  })
                : !i &&
                  0 ===
                    (null === (s = a.list) || void 0 === s
                      ? void 0
                      : s.length) &&
                  (0, M.jsx)("p", {
                    className: "col-span-2 text-center text-gy mt-10",
                    children: d("search.no_data_found"),
                  }),
              (0, M.jsx)(z.A, { adKey: "app-novels_list_bottom_1" }),
              (0, M.jsx)(z.A, { adKey: "app-novels_list_bottom_2" }),
              (0, M.jsx)(z.A, { adKey: "app-novels_list_bottom_3" }),
              (0, M.jsx)(z.A, { adKey: "app-novels_list_bottom_4" }),
            ],
          });
        },
        H = () => {
          var e, t;
          const { config: s, setConfig: _ } = (0, n.H)(),
            { setting: S, logined: C, darkMode: z, ads: H } = s,
            V = (0, o.zy)(),
            F = (0, o.Zp)(),
            { t: D } = (0, i.Bd)(),
            E = (0, u.bs)(),
            O = (0, l.j)(),
            { snackbars: P, setSnackbars: I, showSnackbar: B } = (0, A.q)(),
            {
              novelList: R,
              novelSearchList: K,
              novelFavoritesList: T,
              isLoading: q,
            } = (0, l.G)((e) => e.novel),
            W =
              null !== (e = new URLSearchParams(V.search).get("filter")) &&
              void 0 !== e
                ? e
                : "",
            [Q, U] = (0, r.useState)({ start: !1, query: "", o: "mr", t: "a" }),
            [J, Z] = (0, r.useState)(f.x),
            [G, X] = (0, r.useState)(null),
            [Y, $] = (0, r.useState)(!1),
            ee = sessionStorage.getItem("novelSearchQuery") || "",
            [te, se] = (0, r.useState)(() => ({
              like: JSON.parse(localStorage.getItem("novelLikeItems") || "[]"),
              mark: JSON.parse(localStorage.getItem("novelMarkItems") || "[]"),
            })),
            [ae, re] = (0, r.useState)(f.Z),
            [oe, ie] = (0, r.useState)({
              login: !1,
              signUp: !1,
              forgot: !1,
              folder: !1,
              textFields: !1,
              alert: !1,
            }),
            le = [
              { title: "\u5168\u90e8", key: "", date: "a" },
              { title: "\u6642\u9593 \u4eca\u5929", key: "", date: "t" },
              { title: "\u6642\u9593 \u9019\u9031", key: "", date: "w" },
              { title: "\u6642\u9593 \u672c\u6708", key: "", date: "m" },
              { title: "\u6700\u65b0", key: "mr", date: "" },
              { title: "\u6700\u591a\u9ede\u95b1", key: "mv", date: "" },
              { title: "\u6700\u591a\u7ae0\u7bc0", key: "mp", date: "" },
              { title: "\u6700\u591a\u611b\u5fc3", key: "tf", date: "" },
            ],
            ne = async function () {
              let e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Q.o,
                s =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : Q.t;
              (e && O((0, j.ek)({ o: t, t: s })),
                U((e) =>
                  (0, a.A)(
                    (0, a.A)({}, e),
                    {},
                    { o: t, t: s, start: !1, query: "" },
                  ),
                ),
                F("/novels?filter="),
                sessionStorage.setItem("novelSearchQuery", ""));
            };
          ((0, r.useEffect)(() => {
            var e;
            0 === (null === (e = R.list) || void 0 === e ? void 0 : e.length) &&
              (E(), ne());
          }, [null === (t = R.list) || void 0 === t ? void 0 : t.length]),
            (0, r.useEffect)(() => {
              W !== ee
                ? ce(W)
                : "" !== W &&
                  U((e) =>
                    (0, a.A)((0, a.A)({}, e), {}, { query: W, start: !0 }),
                  );
            }, []));
          const ce = (e) => {
              (U((t) => (0, a.A)((0, a.A)({}, t), {}, { query: e, start: !0 })),
                O((0, w.rX)({ isLoading: !0 })),
                O((0, j._I)({ search_query: e })),
                F("/novels?filter=".concat(e)),
                sessionStorage.setItem("novelSearchQuery", e));
            },
            de = (e, t) => {
              se((s) => {
                let r;
                return (
                  (r =
                    "mark" === t
                      ? s[t].includes(e)
                        ? s[t].filter((t) => t !== e)
                        : [...s[t], e]
                      : s[t].includes(e)
                        ? s[t]
                        : [...s[t], e]),
                  localStorage.setItem(
                    "novel".concat(
                      t.charAt(0).toUpperCase() + t.slice(1),
                      "Items",
                    ),
                    JSON.stringify(r),
                  ),
                  (0, a.A)((0, a.A)({}, s), {}, { [t]: r })
                );
              });
            };
          return (0, M.jsxs)("div", {
            className: "h-full dark:bg-bbk pb-40",
            children: [
              q && (0, M.jsx)(v.A, {}),
              (0, M.jsx)(k.A, {}),
              (0, M.jsxs)("div", {
                className:
                  "flex justify-between items-center bg-defaultBg py-1 px-2 mt-4 dark:bg-bbk",
                children: [
                  (0, M.jsx)("p", {
                    className: "text-2xl",
                    children: Q.start
                      ? "\u641c\u5c0b\u7d50\u679c"
                      : "\u5c0f\u8aaa",
                  }),
                  (0, M.jsx)(c.A, {
                    className:
                      "w-2/6 flex justify-center items-center bg-[#ddd] text-base text-gy dark:bg-nbk",
                    id: "demo-customized-button",
                    "aria-controls": Boolean(G)
                      ? "demo-customized-menu"
                      : void 0,
                    "aria-haspopup": "true",
                    "aria-expanded": Boolean(G) ? "true" : void 0,
                    variant: "contained",
                    disableElevation: !0,
                    onClick: (e) => X(e.currentTarget),
                    endIcon: (0, M.jsx)(x.A, { className: "text-og text-3xl" }),
                    children: D("cat_sort.sort_by"),
                  }),
                  (0, M.jsxs)(d.A, {
                    id: "demo-customized-menu",
                    anchorEl: G,
                    open: Boolean(G),
                    onClose: () => X(null),
                    sx: (e) => ({
                      "& .MuiPaper-root": {
                        marginTop: e.spacing(0),
                        marginLeft: e.spacing(1),
                        width: "40%",
                        color: z ? "white" : "#757575",
                        backgroundColor: z ? "#323232" : "white",
                      },
                    }),
                    children: [
                      le.slice(0, 4).map((e) =>
                        (0, M.jsx)(
                          m.A,
                          {
                            onClick: () => {
                              (X(null), ne(!0, Q.o, e.date));
                            },
                            className: "".concat(
                              Q.t === e.date ? "bg-og text-white" : "",
                            ),
                            children: e.title,
                          },
                          e.date,
                        ),
                      ),
                      (0, M.jsx)("hr", {}),
                      le.slice(4, 8).map((e) =>
                        (0, M.jsx)(
                          m.A,
                          {
                            onClick: () => {
                              (X(null), ne(!0, e.key, Q.t));
                            },
                            className: " ".concat(
                              Q.o === e.key ? "bg-og text-white" : "",
                            ),
                            children: e.title,
                          },
                          e.key,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              (0, M.jsx)("div", {
                className:
                  "h-10 bg-white rounded-md flex items-center border-2 m-2 px-2 dark:bg-nbk",
                children: (0, M.jsxs)("div", {
                  className: "relative w-full",
                  children: [
                    (0, M.jsx)("input", {
                      type: "text",
                      className:
                        "w-full border-none outline-none text-base rounded-sm px-8 dark:bg-nbk",
                      placeholder: D("search.search_keyword"),
                      value: Q.query,
                      onChange: (e) =>
                        U((t) =>
                          (0, a.A)(
                            (0, a.A)({}, t),
                            {},
                            { query: e.target.value },
                          ),
                        ),
                      onKeyDown: (e) => {
                        "Enter" === e.key && ce(e.target.value);
                      },
                    }),
                    Q.query &&
                      (0, M.jsx)(h.A, {
                        sx: { stroke: "#757575", strokeWidth: 2 },
                        className:
                          "absolute right-2 top-1/2 transform -translate-y-1/2 text-[#aaa] text-xl stroke-gray-400",
                        onClick: () => ne(!1),
                      }),
                    (0, M.jsx)(g.A, {
                      className:
                        "absolute left-0 top-1/2 transform -translate-y-1/2 text-[#aaa] text-3xl cursor-pointer",
                    }),
                  ],
                }),
              }),
              (0, M.jsx)("div", {
                className:
                  "bg-white text-gy rounded-md m-2 dark:bg-nbk dark:text-white",
                children: (0, M.jsxs)("p", {
                  className: "p-3",
                  children: [
                    D("novel.show"),
                    "\xa0",
                    (0, M.jsx)("span", {
                      className: "dark:text-og",
                      children: (Q.start ? K.total : R.total) >= 1 ? 1 : 0,
                    }),
                    "\xa0\u5230\xa0",
                    (0, M.jsx)("span", {
                      className: "dark:text-og",
                      children: Q.start ? K.total : R.total,
                    }),
                    "\xa0\u4e2d\u7684\xa0",
                    (0, M.jsx)("span", {
                      className: "dark:text-og",
                      children: Q.start ? K.total : R.total,
                    }),
                    "\xa0",
                    D("novel.novel"),
                  ],
                }),
              }),
              (0, M.jsx)(L, {
                t: D,
                novelList: Q.start ? K : R,
                isLoading: q,
                handleSearchClick: ce,
                handleEngagementAction: async (e, t) => {
                  if ("like" === e) {
                    if (te.like.includes(t))
                      return void B(D("snack.already_rated"), "success");
                    de(t, "like");
                    const e = await O((0, j.DQ)({ id: t })).unwrap(),
                      { code: s, msg: a, status: r } = e;
                    200 === s && B(a, "success" !== r ? "error" : "success");
                  }
                  if ("mark" === e)
                    if (C) {
                      ($(!0),
                        (async () => {
                          (O((0, w.kX)("novelFavoritesList")),
                            await O(
                              (0, j.EK)({ page: 1, folder_id: "", o: "" }),
                            ).unwrap());
                        })(),
                        de(t, "mark"));
                      const e = await O((0, j.vA)({ nid: t })).unwrap(),
                        { status: s, msg: r, type: o } = e,
                        i = "ok" !== s ? "error" : "success";
                      if ("ok" === s)
                        switch (o) {
                          case "add":
                          case "edit":
                          case "move":
                            (Z((e) =>
                              (0, a.A)(
                                (0, a.A)({}, e),
                                {},
                                { aid: t, alert: !1 },
                              ),
                            ),
                              ie(
                                (0, a.A)((0, a.A)({}, oe), {}, { folder: !0 }),
                              ));
                            break;
                          case "remove":
                            Z((e) => (0, a.A)((0, a.A)({}, e), f.x));
                        }
                      B(r, i);
                    } else
                      (B(D("login.please_login"), "error"),
                        ie((0, a.A)((0, a.A)({}, oe), {}, { login: !0 })));
                },
                favoriteSave: te,
                filter: W,
              }),
              (oe.login || oe.signUp || oe.forgot) &&
                !C &&
                (0, M.jsx)(N.A, {
                  setFormData: re,
                  formData: ae,
                  setConfig: _,
                  logined: C,
                  isLoading: q,
                  setDialogOpen: ie,
                  dialogOpen: oe,
                  showSnackbar: B,
                }),
              oe.folder &&
                (0, M.jsx)(y.A, {
                  folderList: T.folder_list,
                  dialogOpen: oe,
                  setDialogOpen: ie,
                  editFolder: J,
                  setEditFolder: Z,
                  handleEditFolder: async (e) => {
                    ($(!0),
                      "del" === e &&
                        ie((0, a.A)((0, a.A)({}, oe), {}, { alert: !0 })));
                    const { folder_id: t, folder_name: s, aid: r } = J;
                    if ("" !== s) {
                      const a = await O(
                          (0, j.iC)({
                            type: e,
                            folder_id: t,
                            folder_name: s,
                            nid: r,
                          }),
                        ).unwrap(),
                        { status: o, msg: i } = a;
                      o && i && B(i, "ok" !== o ? "error" : "success");
                    } else B(D("comic.added_to_favorites_success"), "success");
                    Z((e) => (0, a.A)((0, a.A)({}, e), f.x));
                  },
                  tagsList: [],
                }),
              (0, M.jsx)(b.A, {}),
              (0, M.jsx)(p.A, {}),
              (0, M.jsx)(A.A, { snackbars: P, setSnackbars: I }),
            ],
          });
        };
    },
    4149: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20",
        }),
        "AccountCircle",
      );
    },
    8994: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
        }),
        "ArrowForward",
      );
    },
    3752: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2",
        }),
        "Bookmark",
      );
    },
    2782: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z",
        }),
        "BookmarkBorder",
      );
    },
    7225: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z",
        }),
        "CalendarToday",
      );
    },
    9506: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
        }),
        "Check",
      );
    },
    8293: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
        }),
        "ExpandMore",
      );
    },
    7421: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", { d: "M7 2v11h3v9l7-12h-4l4-8z" }),
        "FlashOn",
      );
    },
    9275: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }),
        "Home",
      );
    },
    7883: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2",
        }),
        "MoreHoriz",
      );
    },
    8911: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8",
        }),
        "Replay",
      );
    },
    6687: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4",
        }),
        "Restaurant",
      );
    },
    9484: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
        }),
        "Search",
      );
    },
    8390: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z",
        }),
        "Textsms",
      );
    },
    9354: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z",
        }),
        "Videocam",
      );
    },
    6671: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-10 7H8v3H6v-3H3v-2h3V8h2v3h3zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5",
        }),
        "VideogameAsset",
      );
    },
    1500: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(9662),
        r = s(579);
      const o = (0, a.A)(
        (0, r.jsx)("path", {
          d: "M11 11V3H5c-1.1 0-2 .9-2 2v6zm2 0h8V5c0-1.1-.9-2-2-2h-6zm-2 2H3v6c0 1.1.9 2 2 2h6zm2 0v8h6c1.1 0 2-.9 2-2v-6z",
        }),
        "Window",
      );
    },
    1637: (e, t, s) => {
      s.d(t, { A: () => H });
      var a = s(9379),
        r = s(45),
        o = s(7528),
        i = s(5043),
        l = s(8387),
        n = s(8610),
        c = s(3290),
        d = s(2108),
        m = s(6262),
        x = s(6431),
        h = s(6803),
        g = s(2445),
        v = s(2532),
        p = s(2372);
      function u(e) {
        return (0, p.Ay)("MuiCircularProgress", e);
      }
      (0, v.A)("MuiCircularProgress", [
        "root",
        "determinate",
        "indeterminate",
        "colorPrimary",
        "colorSecondary",
        "svg",
        "circle",
        "circleDeterminate",
        "circleIndeterminate",
        "circleDisableShrink",
      ]);
      var f = s(579);
      const A = [
        "className",
        "color",
        "disableShrink",
        "size",
        "style",
        "thickness",
        "value",
        "variant",
      ];
      var b, j, k, y;
      const w = 44,
        N = (0, c.i7)(
          b ||
            (b = (0, o.A)([
              "\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n",
            ])),
        ),
        _ = (0, c.i7)(
          j ||
            (j = (0, o.A)([
              "\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n",
            ])),
        ),
        S =
          "string" !== typeof N
            ? (0, c.AH)(
                k ||
                  (k = (0, o.A)([
                    "\n        animation: ",
                    " 1.4s linear infinite;\n      ",
                  ])),
                N,
              )
            : null,
        C =
          "string" !== typeof _
            ? (0, c.AH)(
                y ||
                  (y = (0, o.A)([
                    "\n        animation: ",
                    " 1.4s ease-in-out infinite;\n      ",
                  ])),
                _,
              )
            : null,
        z = (0, d.Ay)("span", {
          name: "MuiCircularProgress",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: s } = e;
            return [t.root, t[s.variant], t["color".concat((0, h.A)(s.color))]];
          },
        })(
          (0, m.A)((e) => {
            let { theme: t } = e;
            return {
              display: "inline-block",
              variants: [
                {
                  props: { variant: "determinate" },
                  style: { transition: t.transitions.create("transform") },
                },
                {
                  props: { variant: "indeterminate" },
                  style: S || {
                    animation: "".concat(N, " 1.4s linear infinite"),
                  },
                },
                ...Object.entries(t.palette)
                  .filter((0, g.A)())
                  .map((e) => {
                    let [s] = e;
                    return {
                      props: { color: s },
                      style: { color: (t.vars || t).palette[s].main },
                    };
                  }),
              ],
            };
          }),
        ),
        M = (0, d.Ay)("svg", {
          name: "MuiCircularProgress",
          slot: "Svg",
          overridesResolver: (e, t) => t.svg,
        })({ display: "block" }),
        L = (0, d.Ay)("circle", {
          name: "MuiCircularProgress",
          slot: "Circle",
          overridesResolver: (e, t) => {
            const { ownerState: s } = e;
            return [
              t.circle,
              t["circle".concat((0, h.A)(s.variant))],
              s.disableShrink && t.circleDisableShrink,
            ];
          },
        })(
          (0, m.A)((e) => {
            let { theme: t } = e;
            return {
              stroke: "currentColor",
              variants: [
                {
                  props: { variant: "determinate" },
                  style: {
                    transition: t.transitions.create("stroke-dashoffset"),
                  },
                },
                {
                  props: { variant: "indeterminate" },
                  style: {
                    strokeDasharray: "80px, 200px",
                    strokeDashoffset: 0,
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return "indeterminate" === t.variant && !t.disableShrink;
                  },
                  style: C || {
                    animation: "".concat(_, " 1.4s ease-in-out infinite"),
                  },
                },
              ],
            };
          }),
        ),
        H = i.forwardRef(function (e, t) {
          const s = (0, x.b)({ props: e, name: "MuiCircularProgress" }),
            {
              className: o,
              color: i = "primary",
              disableShrink: c = !1,
              size: d = 40,
              style: m,
              thickness: g = 3.6,
              value: v = 0,
              variant: p = "indeterminate",
            } = s,
            b = (0, r.A)(s, A),
            j = (0, a.A)(
              (0, a.A)({}, s),
              {},
              {
                color: i,
                disableShrink: c,
                size: d,
                thickness: g,
                value: v,
                variant: p,
              },
            ),
            k = ((e) => {
              const { classes: t, variant: s, color: a, disableShrink: r } = e,
                o = {
                  root: ["root", s, "color".concat((0, h.A)(a))],
                  svg: ["svg"],
                  circle: [
                    "circle",
                    "circle".concat((0, h.A)(s)),
                    r && "circleDisableShrink",
                  ],
                };
              return (0, n.A)(o, u, t);
            })(j),
            y = {},
            N = {},
            _ = {};
          if ("determinate" === p) {
            const e = 2 * Math.PI * ((w - g) / 2);
            ((y.strokeDasharray = e.toFixed(3)),
              (_["aria-valuenow"] = Math.round(v)),
              (y.strokeDashoffset = "".concat(
                (((100 - v) / 100) * e).toFixed(3),
                "px",
              )),
              (N.transform = "rotate(-90deg)"));
          }
          return (0, f.jsx)(
            z,
            (0, a.A)(
              (0, a.A)(
                (0, a.A)(
                  {
                    className: (0, l.A)(k.root, o),
                    style: (0, a.A)((0, a.A)({ width: d, height: d }, N), m),
                    ownerState: j,
                    ref: t,
                    role: "progressbar",
                  },
                  _,
                ),
                b,
              ),
              {},
              {
                children: (0, f.jsx)(M, {
                  className: k.svg,
                  ownerState: j,
                  viewBox: ""
                    .concat(22, " ")
                    .concat(22, " ")
                    .concat(w, " ")
                    .concat(w),
                  children: (0, f.jsx)(L, {
                    className: k.circle,
                    style: y,
                    ownerState: j,
                    cx: w,
                    cy: w,
                    r: (w - g) / 2,
                    fill: "none",
                    strokeWidth: g,
                  }),
                }),
              },
            ),
          );
        });
    },
  },
]);
//# sourceMappingURL=2669.57de1253.chunk.js.map
