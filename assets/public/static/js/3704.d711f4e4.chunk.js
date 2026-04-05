"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [3704],
  {
    3492: (e, t, s) => {
      s.d(t, { A: () => b });
      var i = s(9379),
        a = s(5043),
        l = s(6580),
        o = s(6148),
        r = s(5244),
        n = s(2782),
        c = s(3752),
        d = s(9506),
        m = s(1100),
        g = s(7680),
        u = s(2432),
        x = s(3344),
        h = s(7947),
        f = s(5412),
        p = s(579);
      const b = (e) => {
        const {
            t: t,
            listName: s,
            logined: b,
            list: v,
            title: j,
            link: k,
            smImgSize: w,
            setting: A,
            cols: N,
            comicTags: _,
            comicMark: y,
            comicCheck: S,
            cardPadding: C,
            editFolder: L,
            setEditFolder: F,
            showSnackbar: O,
            setDialogOpen: z,
            dialogOpen: T,
            isWeekly: E,
          } = e,
          I = (0, o.j)(),
          { favoriteList: M } = (0, o.G)((e) => e.member),
          P = (0, a.useRef)(null),
          D = (0, a.useRef)(!1),
          W = JSON.parse(localStorage.getItem("likedItems") || "[]"),
          [R, B] = (0, a.useState)(!1),
          [J, G] = (0, a.useState)(() => {
            const e = localStorage.getItem("likedItems");
            return { like: e ? JSON.parse(e) : [], mark: [] };
          }),
          U = (e) => {
            window.location.pathname.includes("member") &&
              "watchList" === s &&
              ((D.current = !1),
              (P.current = setTimeout(() => {
                F(
                  (0, i.A)(
                    (0, i.A)({}, L),
                    {},
                    {
                      edit: !0,
                      type: "del_watch_history",
                      alert: !0,
                      message: t("snack.confirm_delete"),
                      aid: e,
                    },
                  ),
                );
              }, 500)));
          },
          Z = () => {
            P.current && clearTimeout(P.current);
          },
          Y = () => {
            ((D.current = !0), clearTimeout(P.current));
          },
          H = async (e, s) => {
            if ("like" === e) {
              if (W.includes(s))
                return void O(t("snack.already_rated"), "success");
              localStorage.setItem("likedItems", JSON.stringify([...W, s]));
              const e = await I((0, m.c1)({ id: s })).unwrap(),
                { code: i, msg: a, status: l } = e.data;
              200 === i && O(a, "success" !== l ? "error" : "success");
            }
            if ("mark" === e)
              if (b) {
                (B(!0),
                  q(),
                  ((e, t) => {
                    G((s) => {
                      const a = s[e] || [],
                        l = a.includes(t)
                          ? a.filter((e) => e !== t)
                          : [...a, t];
                      return (0, i.A)((0, i.A)({}, s), {}, { [e]: l });
                    });
                  })("mark", s));
                const e = await I((0, m.df)(s)).unwrap(),
                  { code: t, data: a } = e,
                  l = "ok" !== a.status ? "error" : "success";
                if ("ok" === a.status)
                  switch (a.type) {
                    case "add":
                    case "edit":
                    case "move":
                      (F((e) =>
                        (0, i.A)((0, i.A)({}, e), {}, { aid: s, alert: !1 }),
                      ),
                        z((0, i.A)((0, i.A)({}, T), {}, { folder: !0 })));
                      break;
                    case "remove":
                      F((e) => (0, i.A)((0, i.A)({}, e), h.x));
                  }
                O(a.msg, l);
              } else
                (O(t("login.please_login"), "error"),
                  z((0, i.A)((0, i.A)({}, T), {}, { login: !0 })));
          },
          q = () => {
            I((0, g.a9)("favoriteList"));
            const { folder_id: e, o: t } = L;
            I((0, m.an)({ page: 1, folder_id: e, o: t }));
          },
          K = async (e) => {
            (B(!0),
              "del" === e && z((0, i.A)((0, i.A)({}, T), {}, { alert: !0 })));
            const { folder_id: s, folder_name: a, aid: l } = L;
            if ("" !== a) {
              const t = await I(
                  (0, m.Je)({ type: e, folder_id: s, folder_name: a, aid: l }),
                ).unwrap(),
                { status: i, msg: o } = t.data;
              i && o && O(o, "ok" !== i ? "error" : "success");
            } else O(t("comic.added_to_favorites_success"), "success");
            F((e) => (0, i.A)((0, i.A)({}, e), h.x));
          };
        return (0, p.jsxs)(p.Fragment, {
          children: [
            Array.isArray(v) &&
              v.length > 0 &&
              (null === v || void 0 === v
                ? void 0
                : v
                    .reduce(
                      (e, t, s) => (
                        s % (N || 3) === 0 && e.push([]),
                        e[e.length - 1].push(t),
                        e
                      ),
                      [],
                    )
                    .map((e, s) =>
                      (0, p.jsx)(
                        "div",
                        {
                          className:
                            "grid grid-cols-3 bg-white gap-2 my-3 p-2 relative dark:bg-nbk dark:text-white",
                          style: { paddingTop: C || "" },
                          children: e.map((e, a) => {
                            var o, m, g;
                            return (0, p.jsxs)(
                              "div",
                              {
                                children: [
                                  "new" === j &&
                                    0 === s &&
                                    (0, p.jsx)("div", {
                                      className:
                                        "left-1 top-1 w-full h-6 rounded-sm mb-3",
                                      children:
                                        0 === a
                                          ? t("comic.latest_uploads")
                                          : "",
                                    }),
                                  (0, p.jsxs)("div", {
                                    className: "relative mt-3",
                                    onMouseDown: () => U(e.id),
                                    onMouseUp: Z,
                                    onMouseLeave: Z,
                                    onTouchStart: () => U(e.id),
                                    onTouchEnd: Z,
                                    onTouchMove: Y,
                                    children: [
                                      (0, p.jsx)(l.N_, {
                                        to: k
                                          ? "/comic/detail?id=".concat(e.id)
                                          : "#",
                                        children: (0, p.jsx)("img", {
                                          src:
                                            (null === A || void 0 === A
                                              ? void 0
                                              : A.img_host) &&
                                            A.img_host +
                                              "/media/albums/" +
                                              e.id +
                                              "_3x4.jpg?v=" +
                                              e.update_at,
                                          alt: e.id,
                                          loading: "lazy",
                                          onLoad: (e) => {},
                                          onError: (e) => {
                                            e.target.src =
                                              "/images/cover_default.jpg";
                                          },
                                          className:
                                            "animation-click-item object-cover rounded-md\n                          "
                                              .concat(
                                                w
                                                  ? "h-[150px] w-[130px]"
                                                  : "w-[128px] h-[171px]",
                                                " \n                         ",
                                              )
                                              .concat(
                                                L.edit &&
                                                  null !== (o = L.aid) &&
                                                  void 0 !== o &&
                                                  o
                                                    .split(",")
                                                    .includes(e.id.toString())
                                                  ? "opacity-75"
                                                  : "",
                                                "\n                         ",
                                              ),
                                          style: {},
                                        }),
                                      }),
                                      L.edit &&
                                        S &&
                                        (0, p.jsx)("div", {
                                          className:
                                            "absolute left-2 top-2 rounded text-white px-[0.2rem]",
                                          onClick: () => {
                                            var t;
                                            const s =
                                                (null === (t = L.aid) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.split(",")) || [],
                                              a = s.includes(e.id)
                                                ? s.filter((t) => t !== e.id)
                                                : [...s, e.id];
                                            F((e) =>
                                              (0, i.A)(
                                                (0, i.A)({}, e),
                                                {},
                                                {
                                                  aid: a
                                                    .join(",")
                                                    .replace(/^,/, ""),
                                                },
                                              ),
                                            );
                                          },
                                          children: (0, p.jsx)("p", {
                                            className:
                                              "border-2 border-solid border-og w-6 h-6 flex",
                                            children:
                                              (null === (m = L.aid) ||
                                              void 0 === m
                                                ? void 0
                                                : m
                                                    .split(",")
                                                    .includes(e.id)) &&
                                              (0, p.jsx)(
                                                d.A,
                                                {
                                                  sx: {
                                                    fontSize: 14,
                                                    color: "#ff6f00",
                                                    stroke: "#ff6f00",
                                                    strokeWidth: 2,
                                                  },
                                                },
                                                e.id,
                                              ),
                                          }),
                                        }),
                                      E &&
                                        (0, f._2)(Number(e.update_at)) <= 3 &&
                                        (0, p.jsx)("span", {
                                          className:
                                            "absolute left-2 top-2 rounded bg-red-600 text-white px-[0.1rem]",
                                          children: t("library.update"),
                                        }),
                                      _ &&
                                        (0, p.jsx)("div", {
                                          className:
                                            "absolute right-2 top-2 rounded bg-og text-white px-[0.2rem]",
                                          children:
                                            null === (g = e.category) ||
                                            void 0 === g
                                              ? void 0
                                              : g.title,
                                        }),
                                      y &&
                                        (0, p.jsxs)(p.Fragment, {
                                          children: [
                                            (0, p.jsx)("div", {
                                              className:
                                                "bg-[rgb(117,117,117,0.6)] absolute left-2 bottom-3 rounded p-[0.1rem]",
                                              onClick: () => H("like", e.id),
                                              children: (0, p.jsx)(r.A, {
                                                className: "".concat(
                                                  e.liked || W.includes(e.id)
                                                    ? "text-red-600"
                                                    : "text-og",
                                                ),
                                              }),
                                            }),
                                            (0, p.jsx)("div", {
                                              className:
                                                "bg-[rgb(117,117,117,0.6)] absolute right-2 bottom-3 rounded p-[0.1rem]",
                                              onClick: () => H("mark", e.id),
                                              children:
                                                e.is_favorite ||
                                                J.mark.includes(e.id)
                                                  ? (0, p.jsx)(c.A, {
                                                      className: "text-og",
                                                    })
                                                  : (0, p.jsx)(n.A, {
                                                      className:
                                                        "text-2xl text-white",
                                                    }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, p.jsxs)(l.N_, {
                                    to: k
                                      ? "/comic/detail?id=".concat(e.id)
                                      : "#",
                                    children: [
                                      (0, p.jsx)("p", {
                                        className: "truncate py-2",
                                        children: e.name,
                                      }),
                                      (0, p.jsx)("p", {
                                        className:
                                          "truncate text-gy text-t08 dark:text-lgy",
                                        children: e.author,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        },
                        s,
                      ),
                    )),
            "mainList" !== s &&
              "watchList" !== s &&
              T.folder &&
              (0, p.jsx)(x.A, {
                folderList: M.folder_list,
                dialogOpen: T,
                setDialogOpen: z,
                editFolder: L,
                setEditFolder: F,
                handleEditFolder: K,
                tagsList: [],
              }),
            L.alert &&
              (0, p.jsx)(u.Fc, {
                setEdit: F,
                edit: L,
                handleEdit: K,
                handleAction: H,
                handleDelWatchComic: async () => {
                  if ("del_watch_history" === L.type && "" !== L.aid) {
                    const e = await I((0, m.Zx)(L.aid)).unwrap(),
                      { status: t, msg: s } = e;
                    (O(s, 1 !== t ? "error" : "success"),
                      F((e) => (0, i.A)((0, i.A)({}, e), h.x)),
                      I((0, m.gW)(1)));
                  }
                },
                showSnackbar: O,
              }),
          ],
        });
      };
    },
    9144: (e, t, s) => {
      s.d(t, { A: () => p });
      var i = s(9379),
        a = s(5043),
        l = s(6580),
        o = s(7421),
        r = s(6687),
        n = s(7225),
        c = s(9484),
        d = s(7044),
        m = s(3944),
        g = s(7883),
        u = s(5090),
        x = s(4117),
        h = s(4694),
        f = s(579);
      const p = (e) => {
        var t, s;
        const {
            setTabChange: p,
            filter: b,
            setFilter: v,
            currentPage: j,
            catList: k,
            subList: w,
            mode: A,
            setMode: N,
          } = e,
          { config: _ } = (0, m.H)(),
          { setting: y } = _,
          { t: S } = (0, x.Bd)(),
          [C, L] = (0, a.useState)({ catMore: !1, imageSource: !1 }),
          F = { fontSize: 20, stroke: "white", strokeWidth: 1 },
          O = (0, u.hz)(),
          z = [
            {
              icon: (0, f.jsx)(o.A, { sx: (0, i.A)({}, F) }),
              onClick: () =>
                L((0, i.A)((0, i.A)({}, C), {}, { imageSource: !0 })),
            },
            { icon: (0, f.jsx)(r.A, { sx: (0, i.A)({}, F) }), link: "/blogs" },
            { icon: (0, f.jsx)(n.A, { sx: (0, i.A)({}, F) }), link: "/week" },
            { icon: (0, f.jsx)(c.A, { sx: (0, i.A)({}, F) }), link: "/search" },
          ];
        return (0, f.jsxs)("header", {
          className: "sticky top-safe w-full bg-bbk text-white z-30",
          children: [
            (0, f.jsxs)("div", {
              className: "h-14 flex items-center",
              children: [
                (0, f.jsx)("div", {
                  className: "flex w-6/12 pl-3",
                  children: (0, f.jsx)(l.N_, {
                    to: "/",
                    children: (0, f.jsx)("img", {
                      src: "/images/new_logo.webp",
                      alt: "logo",
                      width: "100px",
                      height: "20px",
                      className: "animation-click-item",
                    }),
                  }),
                }),
                (0, f.jsx)("div", {
                  className:
                    "text-white top-bar-icon flex w-6/12 justify-around",
                  children: z.map((e, t) =>
                    (0, f.jsx)(
                      l.N_,
                      {
                        to: e.link || "#",
                        onClick: e.onClick,
                        children: (0, f.jsx)("button", {
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
              (null === (t = k.cat) || void 0 === t ? void 0 : t.length) > 0 &&
              (0, f.jsxs)("div", {
                className: "text-tgy relative bg-nbk",
                children: [
                  (0, f.jsxs)("div", {
                    className:
                      "h-10 w-11/12 flex items-center overflow-x-auto whitespace-nowrap pr-8",
                    style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                    children: [
                      k.cat.map((e, t) =>
                        (0, f.jsxs)(
                          "div",
                          {
                            children: [
                              (0, f.jsx)("span", {
                                title: e.name,
                                className: "pl-4 ".concat(
                                  b.slug === e.slug ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (v(
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
                                    p(!0));
                                },
                                children: e.name,
                              }),
                              0 === t &&
                                (0, f.jsx)(l.N_, {
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
                      (0, f.jsx)("div", {
                        className: "bg-bbk p-1 absolute top-0 right-0",
                        children: (0, f.jsx)(g.A, {
                          sx: {
                            fontSize: 28,
                            stroke: "#ff6f00",
                            strokeWidth: 1,
                            color: "#ff6f00",
                          },
                          onClick: () =>
                            L((0, i.A)((0, i.A)({}, C), {}, { catMore: !0 })),
                        }),
                      }),
                    ],
                  }),
                  (0, f.jsx)("div", {
                    className: "h-10 flex items-center",
                    children:
                      null ===
                        (s =
                          "" === b.slug
                            ? null === k || void 0 === k
                              ? void 0
                              : k.ranking
                            : null === k || void 0 === k
                              ? void 0
                              : k.ranking.slice(0, -1)) || void 0 === s
                        ? void 0
                        : s.map((e) =>
                            (0, f.jsx)(
                              "span",
                              {
                                className: "pl-4 cursor-pointer ".concat(
                                  b.sort === e.key ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (v(
                                    (0, i.A)(
                                      (0, i.A)({}, b),
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
                  w.length > 0 &&
                    (0, f.jsx)("div", {
                      className: "h-10 flex items-center",
                      children: w.map((e) =>
                        (0, f.jsx)(
                          "span",
                          {
                            className: "pl-4 ".concat(
                              b.sub_slug === e.slug ? "text-og" : "",
                            ),
                            onClick: () => {
                              (p(!0),
                                v(
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
              (0, f.jsx)("div", {
                className:
                  "h-20 w-full text-tgy flex items-end py-2 bg-nbk z-50",
                children: O.map((e) =>
                  (0, f.jsxs)(
                    "div",
                    {
                      className: "relative px-4 text-lg cursor-pointer",
                      onClick: () => {
                        (p(!0), N(e.mode));
                      },
                      children: [
                        (0, f.jsx)("p", {
                          className: "transition-colors duration-300 ".concat(
                            A === e.mode ? "text-og pb-2" : "pb-3",
                          ),
                          children: e.tabName,
                        }),
                        A === e.mode &&
                          (0, f.jsx)(h.P.div, {
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
              (0, f.jsx)(d.A, { setDialogOpen: L, dialogOpen: C, setting: y }),
            C.catMore &&
              (0, f.jsx)(d.A, {
                setDialogOpen: L,
                dialogOpen: C,
                catList: C.catMore ? k : {},
                setFilter: v,
                filter: b,
              }),
          ],
        });
      };
    },
    2028: (e, t, s) => {
      s.d(t, { A: () => o });
      var i = s(5043),
        a = s(2101),
        l = s(579);
      const o = () => {
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
      var i = s(5043),
        a = s(6580),
        l = s(6148),
        o = s(9275),
        r = s(1500),
        n = s(6671),
        c = s(9354),
        d = s(8390),
        m = s(4149),
        g = s(4117),
        u = s(8038),
        x = s(1100),
        h = s(3944),
        f = s(579);
      const p = (e) => {
        const { currentPage: t } = e,
          {
            config: { logined: s, ads: p },
          } = (0, h.H)(),
          { t: b } = (0, g.Bd)(),
          v = (0, l.j)(),
          { unread: j, notifResult: k } = (0, l.G)((e) => e.member),
          w = sessionStorage.getItem("catTab") || "";
        (0, i.useEffect)(() => {
          s && 0 === Object.keys(j).length && v((0, x.Zg)());
        }, [s, k]);
        const A = [
            {
              icon: (0, f.jsx)(o.A, { className: "text-3xl" }),
              nav: "main",
              label: b("nav.home"),
              link: "/",
            },
            {
              icon: (0, f.jsx)(r.A, { className: "text-3xl" }),
              nav: "categories",
              label: b("nav.categories"),
              link: "/categories?slug=".concat(w),
            },
            {
              icon: (0, f.jsx)(c.A, { className: "text-3xl" }),
              nav: "movies",
              label: b("nav.movie"),
              link: "/movies",
            },
            {
              icon: (0, f.jsx)(d.A, { className: "text-3xl" }),
              nav: "forum",
              label: b("nav.forum"),
              link: "/forum",
            },
            {
              icon: (0, f.jsx)(m.A, { className: "text-3xl" }),
              nav: "member",
              label: b("nav.member"),
              link: "/member",
            },
          ],
          [N, _] = (0, i.useState)(!1),
          y = (0, i.useRef)(null),
          S = {
            main: "app_bottom_bar_jm3",
            categories: "app_categories_bottom_jm3",
            movies: "app_movies_fixed_bottom_jm3",
            member: "board1",
          }[t];
        return (0, f.jsxs)(f.Fragment, {
          children: [
            "forum" !== t &&
              (0, f.jsx)("div", {
                ref: y,
                className:
                  "fixed left-0 right-0 flex justify-center transition-all duration-300 ease-in-out ".concat(
                    N ? "bottom-[3rem]" : "bottom-[4.5em]",
                  ),
                children:
                  S &&
                  (0, f.jsx)(u.A, {
                    adKey: S,
                    closeBtn: !0,
                    handleAdResize: () => {
                      _(!0);
                    },
                  }),
              }),
            (0, f.jsx)("div", {
              className: "fixed bottom-0 left-0 right-0 w-full z-30",
              children: (0, f.jsx)("div", {
                className:
                  "flex justify-around items-start bg-bbk text-gy z-50 min-h-[6rem] pt-3 overflow-hidden",
                children: A.map((e, i) =>
                  (0, f.jsxs)(
                    a.N_,
                    {
                      to: e.link,
                      className:
                        "animation-click-item flex flex-col items-center relative ".concat(
                          e.nav === t ? "text-og" : "",
                        ),
                      children: [
                        (0, f.jsxs)("div", {
                          className: "relative",
                          children: [
                            e.icon,
                            s &&
                              5 === i &&
                              j.comic_follow + j.site_notice > 0 &&
                              (0, f.jsx)("span", {
                                className:
                                  "absolute -top-1 -right-5 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center",
                                children: j.comic_follow + j.site_notice,
                              }),
                          ],
                        }),
                        (0, f.jsx)("span", {
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
    3344: (e, t, s) => {
      s.d(t, { A: () => k });
      var i = s(9379),
        a = s(5043),
        l = s(3438),
        o = s(7392),
        r = s(1906),
        n = s(35),
        c = s(4219),
        d = s(5316),
        m = s(9347),
        g = s(4836),
        u = s(6990),
        x = s(5954),
        h = s(6258),
        f = s(688),
        p = s(9506),
        b = s(4117),
        v = s(579);
      const j = a.forwardRef(function (e, t) {
          return (0, v.jsx)(g.A, (0, i.A)({ direction: "up", ref: t }, e));
        }),
        k = (e) => {
          const {
              dialogOpen: t,
              setDialogOpen: s,
              editFolder: g,
              setEditFolder: k,
              handleEditFolder: w,
              folderList: A,
              tagsList: N,
            } = e,
            [_, y] = (0, a.useState)(null),
            S = Boolean(_),
            { t: C } = (0, b.Bd)(),
            L =
              (null === N || void 0 === N ? void 0 : N.length) > 0 &&
              g.tags_select === N.toString(),
            F = (e, a) => {
              "backdropClick" !== a &&
                s((0, i.A)((0, i.A)({}, t), {}, { folder: !1 }));
            };
          return (0, v.jsx)(v.Fragment, {
            children:
              t.folder &&
              (0, v.jsxs)(n.A, {
                onClose: F,
                "aria-labelledby": "customized-dialog-title",
                open: t.folder,
                TransitionComponent: j,
                className: "text-white",
                slotProps: {
                  backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.3)" } },
                },
                sx: () => ({
                  "& .MuiPaper-root": { paddingY: "1rem", width: "90%" },
                }),
                children: [
                  (0, v.jsx)(o.A, {
                    "aria-label": "close",
                    onClick: F,
                    sx: (e) => ({
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: e.palette.grey[700],
                      stroke: e.palette.grey[700],
                      strokeWidth: 2,
                    }),
                    children: (0, v.jsx)(l.A, {}),
                  }),
                  "add" === g.type &&
                    (0, v.jsx)(c.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: C("member.add_folder"),
                    }),
                  "edit" === g.type &&
                    (0, v.jsx)(c.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: C("member.rename_folder"),
                    }),
                  "move" === g.type &&
                    (0, v.jsx)(c.A, {
                      id: "customized-dialog-title",
                      children: C("member.Select_favorite_folder"),
                    }),
                  (0, v.jsxs)(d.A, {
                    className: "",
                    children: [
                      ("add" === g.type || "edit" === g.type) &&
                        (0, v.jsx)("input", {
                          type: "text",
                          placeholder: C("member.enter_folder_name"),
                          className:
                            "w-11/12 h-10 p-4 border border-solid border-gy",
                          onChange: (e) =>
                            k(
                              (0, i.A)(
                                (0, i.A)({}, g),
                                {},
                                { folder_name: e.target.value },
                              ),
                            ),
                        }),
                      "move" === g.type &&
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsxs)(r.A, {
                              id: "fade-button",
                              "aria-controls": S ? "fade-menu" : void 0,
                              "aria-haspopup": "true",
                              "aria-expanded": S ? "true" : void 0,
                              onClick: (e) => y(e.currentTarget),
                              className:
                                "flex justify-between p-0 w-8/12 text-[#aaa] text-lg",
                              children: [
                                (0, v.jsx)("span", {
                                  className: "pr-10",
                                  children:
                                    g.folder_name || C("member.select_folder"),
                                }),
                                (0, v.jsx)(x.A, {
                                  sx: { color: "#ff6f00", fontSize: 24 },
                                }),
                              ],
                            }),
                            (0, v.jsx)(f.A, {
                              id: "fade-menu",
                              MenuListProps: {
                                "aria-labelledby": "fade-button",
                              },
                              anchorEl: _,
                              open: S,
                              onClose: () => y(null),
                              TransitionComponent: h.A,
                              sx: (e) => ({
                                "& .MuiPaper-root": {
                                  marginTop: e.spacing(0),
                                  marginLeft: e.spacing(-2),
                                  width: "50%",
                                  color: "#757575",
                                },
                              }),
                              children:
                                (null === A || void 0 === A
                                  ? void 0
                                  : A.length) > 0 &&
                                A.map((e, t) =>
                                  (0, v.jsx)(
                                    u.A,
                                    {
                                      onClick: () => {
                                        (y(null),
                                          k(
                                            (0, i.A)(
                                              (0, i.A)({}, g),
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
                      (null === N || void 0 === N ? void 0 : N.length) > 0 &&
                        (0, v.jsxs)(v.Fragment, {
                          children: [
                            (0, v.jsx)("hr", {
                              className: "border-2 border-tgy my-4",
                            }),
                            (0, v.jsxs)("div", {
                              className: "text-left",
                              children: [
                                (0, v.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, v.jsx)("p", {
                                      className:
                                        "border-2 border-solid border-og w-5 h-5 flex justify-center items-center overflow-hidden mr-2",
                                      onClick: () => {
                                        const e = L ? "" : N.toString();
                                        k((t) =>
                                          (0, i.A)(
                                            (0, i.A)({}, t),
                                            {},
                                            { tags_select: e },
                                          ),
                                        );
                                      },
                                      children:
                                        L &&
                                        (0, v.jsx)(p.A, {
                                          sx: {
                                            fontSize: 14,
                                            color: "#ff6f00",
                                            stroke: "#ff6f00",
                                            strokeWidth: 2,
                                          },
                                        }),
                                    }),
                                    (0, v.jsx)("span", {
                                      children: C("detail.favorite_all_tags"),
                                    }),
                                  ],
                                }),
                                (0, v.jsx)("div", {
                                  className:
                                    "flex flex-wrap items-center text-gy mt-4 dark:text-gy",
                                  children: N.map((e) => {
                                    var t;
                                    return (0, v.jsx)(
                                      "span",
                                      {
                                        className:
                                          "border-[1px] border-solid border-gy rounded-md p-1 m-1\n                         ".concat(
                                            null !== (t = g.tags_select) &&
                                              void 0 !== t &&
                                              t.split(",").includes(e)
                                              ? "bg-og text-white border-og"
                                              : "",
                                          ),
                                        onClick: () => {
                                          var t;
                                          const s =
                                              (null === (t = g.tags_select) ||
                                              void 0 === t
                                                ? void 0
                                                : t.split(",")) || [],
                                            a = s.includes(e)
                                              ? s.filter((t) => t !== e)
                                              : [...s, e];
                                          k((e) =>
                                            (0, i.A)(
                                              (0, i.A)({}, e),
                                              {},
                                              {
                                                tags_select: a
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
                  (0, v.jsx)(m.A, {
                    className: "flex justify-center",
                    children: (0, v.jsx)(r.A, {
                      className:
                        "bg-og text-white rounded border-solid border-2 border-og w-8/12",
                      onClick: (e) => {
                        (F(),
                          "add" === g.type && w("add"),
                          "edit" === g.type && w("edit"),
                          "move" === g.type && w("move"));
                      },
                      children: C("member.confirm"),
                    }),
                  }),
                ],
              }),
          });
        };
    },
    3704: (e, t, s) => {
      (s.r(t), s.d(t, { default: () => F }));
      var i = s(9379),
        a = s(5043),
        l = s(6580),
        o = s(3944),
        r = s(6148),
        n = s(319),
        c = s(5843),
        d = s(4117),
        m = s(4694),
        g = s(1637),
        u = s(5954),
        x = s(8843),
        h = s(9144),
        f = s(787),
        p = s(3492),
        b = s(5411),
        v = s(2028),
        j = s(7738),
        k = s(1674),
        w = s(1100),
        A = s(7374),
        N = s(7658),
        _ = s(5412),
        y = s(5090),
        S = s(7947),
        C = s(1299),
        L = s(579);
      const F = () => {
        var e, t, s, F, O, z, T;
        const { config: E, setConfig: I } = (0, o.H)(),
          { setting: M, logined: P } = E,
          { t: D } = (0, d.Bd)(),
          W = (0, l.zy)(),
          R = (0, l.Zp)(),
          B = (0, r.j)(),
          { snackbars: J, setSnackbars: G, showSnackbar: U } = (0, C.q)(),
          {
            cateFilterList: Z,
            categoriesList: Y,
            isLoading: H,
            isRefreshing: q,
          } = (0, r.G)((e) => e.categories),
          { tagsList: K } = (0, r.G)((e) => e.member),
          { hotTagsList: Q } = (0, r.G)((e) => e.search),
          [V, X] = (0, a.useState)(S.Z),
          [$, ee] = (0, a.useState)(S.x),
          [te, se] = (0, a.useState)({ login: !1, signUp: !1, forgot: !1 }),
          ie = new URLSearchParams(W.search),
          ae = (0, y.nu)(),
          le = ie.get("slug") || "",
          oe = ie.get("sort") || "",
          re = sessionStorage.getItem("catTab") || "",
          ne = sessionStorage.getItem("fromPage") || "",
          ce = new URLSearchParams(ne.split("?")[1] || ""),
          de = ce.get("slug") || "",
          me = ce.get("sort") || "",
          [ge, ue] = (0, a.useState)({
            slug: le || de,
            sub_slug: "",
            sort: oe || me,
          }),
          [xe, he] = (0, a.useState)(!1),
          fe = (ge.slug || "") + (ge.sub_slug ? "_".concat(ge.sub_slug) : ""),
          [pe, be] = (0, a.useState)(() => {
            const e = sessionStorage.getItem("markOpen");
            return null === e || JSON.parse(e);
          }),
          ve = (0, a.useRef)({
            cat: [],
            blocks: [],
            marks: [],
            tags: [],
            ranking: ae,
          }),
          je =
            (null === (e = ve.current.cat) ||
            void 0 === e ||
            null === (t = e.find((e) => e.slug === ge.slug)) ||
            void 0 === t
              ? void 0
              : t.sub_categories) || [],
          [ke, we] = (0, a.useState)(1),
          { ref: Ae, inView: Ne } = (0, c.Wx)(),
          _e =
            ke <=
            (null !== (s = Z.list) && void 0 !== s && s.length
              ? Math.ceil(Z.total / 80)
              : 10);
        (0, a.useEffect)(() => {
          (sessionStorage.setItem(
            "fromPage",
            ""
              .concat(W.pathname, "?slug=")
              .concat(ge.slug, "&sort=")
              .concat(ge.sort),
          ),
            R(
              ""
                .concat(W.pathname, "?slug=")
                .concat(ge.slug, "&sort=")
                .concat(ge.sort),
            ));
        }, [ge.slug, ge.sort, W.pathname]);
        const ye = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1,
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : ge.sort,
            l =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : fe;
          (t &&
            (we(0),
            sessionStorage.setItem("catLoadMore", "0"),
            B((0, N.Yx)("cateFilterList"))),
            B((0, N.JZ)({ isLoading: !0, isLoadMore: e, isRefreshing: t })),
            setTimeout(() => {
              B((0, k.l)({ page: i, o: a, c: l }));
            }, s),
            sessionStorage.setItem("catLoadMore", String(i)),
            he(!1));
        };
        ((0, a.useEffect)(() => {
          var e;
          (ge.slug !== re ||
            xe ||
            0 ===
              (null === (e = Z.list) || void 0 === e ? void 0 : e.length)) &&
            (ye(), sessionStorage.setItem("catTab", ge.slug));
        }, [
          ge.slug,
          xe,
          null === (F = Z.list) || void 0 === F ? void 0 : F.length,
        ]),
          (0, a.useEffect)(() => {
            var e;
            (P &&
              0 ===
                (null === (e = K.list) || void 0 === e ? void 0 : e.length) &&
              B((0, w.s3)()),
              0 === Object.keys(Y).length &&
                0 === Q.length &&
                (B((0, k.I)()), B((0, A.QY)())));
          }, [B, P, Object.keys(Y).length, Q.length]),
          (0, a.useEffect)(() => {
            const e = ve.current,
              { blocks: t, categories: s } = Y;
            Object.assign(e, {
              marks: K.list || [],
              blocks: t,
              cat: s,
              tags: Q,
            });
          }, [Y, Q, K]));
        const Se = (0, a.useCallback)(() => {
          if (_e && Ne && _e) {
            const e = sessionStorage.getItem("catLoadMore"),
              t = Number(e) + 1;
            (we(t), ye(!0, !1, 1e3, t));
          }
        }, [Ne, _e]);
        (0, a.useEffect)(() => {
          Se();
        }, [Se]);
        const Ce = () => {
          (be(!pe), sessionStorage.setItem("markOpen", String(!pe)));
        };
        return (0, L.jsxs)(L.Fragment, {
          children: [
            H && (0, L.jsx)(b.A, {}),
            (0, L.jsxs)("div", {
              className: "border-none h-full dark:bg-bk",
              children: [
                (0, L.jsxs)("div", {
                  className: "sticky top-0 z-50 bg-white dark:bg-bk",
                  children: [
                    (0, L.jsx)(h.A, {
                      currentPage: "categories",
                      catList: ve.current,
                      subList: je,
                      setTabChange: he,
                      filter: ge,
                      setFilter: ue,
                    }),
                    (0, L.jsxs)("div", {
                      className:
                        "w-full top-safe bg-defaultBg flex items-center p-3 my-2  dark:bg-nbk",
                      children: [
                        (0, L.jsx)("span", {
                          className: "text-lg w-20",
                          children: D("comic.popular_tags"),
                        }),
                        (0, L.jsx)("div", {
                          className: "flex overflow-x-auto whitespace-nowrap",
                          style: {
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                          },
                          children:
                            (null === (O = Z.tags) || void 0 === O
                              ? void 0
                              : O.length) > 0 &&
                            Z.tags.map((e, t) =>
                              (0, L.jsx)(
                                l.N_,
                                {
                                  to: "/search?filter=".concat(e),
                                  children: (0, L.jsx)("p", {
                                    className:
                                      "bg-white rounded-md border border-solid border-bk ml-3 px-2 py-1 dark:bg-nbk dark:border-white",
                                    children: e,
                                  }),
                                },
                                e + t,
                              ),
                            ),
                        }),
                      ],
                    }),
                    (0, L.jsxs)("div", {
                      className:
                        "bg-defaultBg p-4 border-none outline-none  dark:bg-nbk",
                      children: [
                        (0, L.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, L.jsx)("span", {
                              className: "text-lg",
                              children: D("comic.my_favorites"),
                            }),
                            pe
                              ? (0, L.jsx)(u.A, {
                                  sx: {
                                    fontSize: 26,
                                    stroke: "#ff6f00",
                                    strokeWidth: 1,
                                    color: "#ff6f00",
                                  },
                                  onClick: Ce,
                                })
                              : (0, L.jsx)(x.A, {
                                  sx: {
                                    fontSize: 26,
                                    stroke: "#ff6f00",
                                    strokeWidth: 1,
                                    color: "#ff6f00",
                                  },
                                  onClick: Ce,
                                }),
                          ],
                        }),
                        (0, L.jsx)(m.P.div, {
                          initial: { opacity: 1, height: "auto" },
                          animate: {
                            opacity: pe ? 1 : 0,
                            height: pe ? "auto" : 0,
                          },
                          exit: { opacity: 0, height: 0 },
                          transition: { duration: 0.3 },
                          className: "overflow-hidden",
                          children: P
                            ? (0, L.jsx)("div", {
                                className:
                                  "w-full grid grid-cols-4 place-items-start mt-2",
                                children:
                                  (null === (z = ve.current.marks) ||
                                  void 0 === z
                                    ? void 0
                                    : z.length) > 0 &&
                                  ve.current.marks.map((e, t) =>
                                    (0, L.jsxs)(
                                      l.N_,
                                      {
                                        to: "/search?filter=".concat(e.tag),
                                        className: "flex items-center flex-col",
                                        children: [
                                          (0, L.jsxs)("p", {
                                            className:
                                              "bg-white text-center w-24 text-wrap border border-solid border-bk rounded-md mb-1 p-1 dark:bg-nbk dark:border-white",
                                            children: ["#", e.tag],
                                          }),
                                          (0, L.jsx)("p", {
                                            className: "text-sm text-gy",
                                            children: e.updated_at,
                                          }),
                                        ],
                                      },
                                      e.tag + t,
                                    ),
                                  ),
                              })
                            : (0, L.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, L.jsx)("button", {
                                  className:
                                    "px-4 py-2 rounded-md border-2 border-solid border-stone-600 bg-og text-white",
                                  onClick: () =>
                                    se(
                                      (0, i.A)(
                                        (0, i.A)({}, te),
                                        {},
                                        { login: !0 },
                                      ),
                                    ),
                                  children: D("login.login_register"),
                                }),
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, L.jsx)(n.u, {
                  completeDelay: 1e3,
                  refreshing: q,
                  onRefresh: () => {
                    ye(!1, !0);
                  },
                  renderText: _.S5,
                  className: "overflow-y-visible",
                  children:
                    (null === (T = Z.list) || void 0 === T
                      ? void 0
                      : T.length) > 0 &&
                    (0, L.jsxs)(L.Fragment, {
                      children: [
                        (0, L.jsx)("div", {
                          className: "bg-white dark:bg-nbk",
                          children: (0, L.jsx)(p.A, {
                            t: D,
                            link: !0,
                            listName: "cateFilterList",
                            list: Z.list,
                            logined: P,
                            setting: M,
                            comicTags: !0,
                            comicMark: !0,
                            comicCheck: !1,
                            editFolder: $,
                            setEditFolder: ee,
                            setDialogOpen: se,
                            dialogOpen: te,
                            showSnackbar: U,
                          }),
                        }),
                        (0, L.jsx)("button", {
                          ref: Ae,
                          onClick: Se,
                          className: "w-full flex justify-center pb-40",
                          children: _e
                            ? (0, L.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, L.jsx)(g.A, {
                                    color: "inherit",
                                    size: 12,
                                  }),
                                  (0, L.jsx)("p", {
                                    className: "ml-2",
                                    children: D("comic.pull_to_load"),
                                  }),
                                ],
                              })
                            : (0, L.jsx)("p", {
                                className: "text-center",
                                children: D("comic.no_more"),
                              }),
                        }),
                      ],
                    }),
                }),
              ],
            }),
            (0, L.jsx)(f.A, { currentPage: "categories" }),
            (0, L.jsx)(v.A, {}),
            (te.login || te.signUp || te.forgot) &&
              !P &&
              (0, L.jsx)(j.A, {
                setFormData: X,
                formData: V,
                setConfig: I,
                logined: P,
                isLoading: H,
                setDialogOpen: se,
                dialogOpen: te,
                showSnackbar: U,
              }),
            (0, L.jsx)(C.A, { snackbars: J, setSnackbars: G }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=3704.d711f4e4.chunk.js.map
