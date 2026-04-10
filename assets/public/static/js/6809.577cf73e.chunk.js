"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [6809],
  {
    1299: (e, t, s) => {
      s.d(t, { A: () => m, q: () => c });
      var i = s(9379),
        a = s(5043),
        l = s(4836),
        o = s(5691),
        n = s(3773),
        r = s(579);
      function d(e) {
        return (0, r.jsx)(
          l.A,
          (0, i.A)((0, i.A)({}, e), {}, { direction: "down" }),
        );
      }
      const c = () => {
        const [e, t] = (0, a.useState)([]);
        return {
          snackbars: e,
          setSnackbars: t,
          showSnackbar: function (e) {
            let s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "info",
              i = arguments.length > 2 ? arguments[2] : void 0;
            const a = {
              key: Date.now() + Math.random(),
              msg: e,
              type: s,
              marginTop: i,
            };
            t((e) => {
              const t = [...e, a];
              return (t.length > 3 && t.shift(), t);
            });
          },
        };
      };
      function m(e) {
        let { snackbars: t, setSnackbars: s } = e;
        const a = (e) => {
          switch (e) {
            case "success":
              return { backgroundColor: "#1f7a1f", color: "#fff" };
            case "error":
              return { backgroundColor: "#c4201d", color: "#fff" };
            case "warning":
              return { backgroundColor: "#fffde8", color: "#000" };
            default:
              return { backgroundColor: "#868686", color: "#fff" };
          }
        };
        return (0, r.jsx)(r.Fragment, {
          children: [...t].reverse().map((e, t) => {
            const l = e.marginTop
              ? "calc(".concat(e.marginTop, " + ").concat(70 * t, "px)")
              : "".concat(70 * t, "px");
            return (0, r.jsx)(
              o.A,
              {
                open: !0,
                autoHideDuration: 5e3,
                onClose: (t, i) => {
                  var a;
                  "clickaway" !== i &&
                    ((a = e.key), s((e) => e.filter((e) => e.key !== a)));
                },
                TransitionComponent: d,
                anchorOrigin: { vertical: "top", horizontal: "center" },
                sx: {
                  top: l,
                  "&.MuiSnackbar-root": { maxWidth: "40%", margin: "0 auto" },
                },
                children: (0, r.jsx)(n.A, {
                  elevation: 1,
                  message: e.msg,
                  sx: (0, i.A)(
                    (0, i.A)({}, a(e.type)),
                    {},
                    {
                      borderRadius: "4px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    },
                  ),
                }),
              },
              e.key,
            );
          }),
        });
      }
    },
    3492: (e, t, s) => {
      s.d(t, { A: () => j });
      var i = s(9379),
        a = s(5043),
        l = s(6580),
        o = s(6148),
        n = s(5244),
        r = s(2782),
        d = s(3752),
        c = s(9506),
        m = s(1100),
        x = s(7680),
        g = s(2432),
        u = s(3344),
        h = s(7947),
        p = s(5412),
        f = s(579);
      const j = (e) => {
        const {
            t: t,
            listName: s,
            logined: j,
            list: b,
            title: v,
            link: k,
            smImgSize: w,
            setting: N,
            cols: y,
            comicTags: _,
            comicMark: A,
            comicCheck: S,
            cardPadding: C,
            editFolder: L,
            setEditFolder: I,
            showSnackbar: z,
            setDialogOpen: F,
            dialogOpen: O,
            isWeekly: T,
          } = e,
          E = (0, o.j)(),
          { favoriteList: M } = (0, o.G)((e) => e.member),
          D = (0, a.useRef)(null),
          P = (0, a.useRef)(!1),
          R = JSON.parse(localStorage.getItem("likedItems") || "[]"),
          [J, W] = (0, a.useState)(!1),
          [B, K] = (0, a.useState)(() => {
            const e = localStorage.getItem("likedItems");
            return { like: e ? JSON.parse(e) : [], mark: [] };
          }),
          U = (e) => {
            window.location.pathname.includes("member") &&
              "watchList" === s &&
              ((P.current = !1),
              (D.current = setTimeout(() => {
                I(
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
          G = () => {
            D.current && clearTimeout(D.current);
          },
          H = () => {
            ((P.current = !0), clearTimeout(D.current));
          },
          q = async (e, s) => {
            if ("like" === e) {
              if (R.includes(s))
                return void z(t("snack.already_rated"), "success");
              localStorage.setItem("likedItems", JSON.stringify([...R, s]));
              const e = await E((0, m.c1)({ id: s })).unwrap(),
                { code: i, msg: a, status: l } = e.data;
              200 === i && z(a, "success" !== l ? "error" : "success");
            }
            if ("mark" === e)
              if (j) {
                (W(!0),
                  V(),
                  ((e, t) => {
                    K((s) => {
                      const a = s[e] || [],
                        l = a.includes(t)
                          ? a.filter((e) => e !== t)
                          : [...a, t];
                      return (0, i.A)((0, i.A)({}, s), {}, { [e]: l });
                    });
                  })("mark", s));
                const e = await E((0, m.df)(s)).unwrap(),
                  { code: t, data: a } = e,
                  l = "ok" !== a.status ? "error" : "success";
                if ("ok" === a.status)
                  switch (a.type) {
                    case "add":
                    case "edit":
                    case "move":
                      (I((e) =>
                        (0, i.A)((0, i.A)({}, e), {}, { aid: s, alert: !1 }),
                      ),
                        F((0, i.A)((0, i.A)({}, O), {}, { folder: !0 })));
                      break;
                    case "remove":
                      I((e) => (0, i.A)((0, i.A)({}, e), h.x));
                  }
                z(a.msg, l);
              } else
                (z(t("login.please_login"), "error"),
                  F((0, i.A)((0, i.A)({}, O), {}, { login: !0 })));
          },
          V = () => {
            E((0, x.a9)("favoriteList"));
            const { folder_id: e, o: t } = L;
            E((0, m.an)({ page: 1, folder_id: e, o: t }));
          },
          Z = async (e) => {
            (W(!0),
              "del" === e && F((0, i.A)((0, i.A)({}, O), {}, { alert: !0 })));
            const { folder_id: s, folder_name: a, aid: l } = L;
            if ("" !== a) {
              const t = await E(
                  (0, m.Je)({ type: e, folder_id: s, folder_name: a, aid: l }),
                ).unwrap(),
                { status: i, msg: o } = t.data;
              i && o && z(o, "ok" !== i ? "error" : "success");
            } else z(t("comic.added_to_favorites_success"), "success");
            I((e) => (0, i.A)((0, i.A)({}, e), h.x));
          };
        return (0, f.jsxs)(f.Fragment, {
          children: [
            Array.isArray(b) &&
              b.length > 0 &&
              (null === b || void 0 === b
                ? void 0
                : b
                    .reduce(
                      (e, t, s) => (
                        s % (y || 3) === 0 && e.push([]),
                        e[e.length - 1].push(t),
                        e
                      ),
                      [],
                    )
                    .map((e, s) =>
                      (0, f.jsx)(
                        "div",
                        {
                          className:
                            "grid grid-cols-3 gap-3 my-4 p-3 relative",
                          style: { paddingTop: C || "" },
                          children: e.map((e, a) => {
                            var o, m, x;
                            return (0, f.jsxs)(
                              "div",
                              {
                                children: [
                                  "new" === v &&
                                    0 === s &&
                                    (0, f.jsx)("div", {
                                      className:
                                        "left-1 top-1 w-full h-6 rounded-sm mb-3",
                                      children:
                                        0 === a
                                          ? t("comic.latest_uploads")
                                          : "",
                                    }),
                                  (0, f.jsxs)("div", {
                                    className: "relative mt-3",
                                    onMouseDown: () => U(e.id),
                                    onMouseUp: G,
                                    onMouseLeave: G,
                                    onTouchStart: () => U(e.id),
                                    onTouchEnd: G,
                                    onTouchMove: H,
                                    children: [
                                      (0, f.jsx)(l.N_, {
                                        to: k
                                          ? "/comic/detail?id=".concat(e.id)
                                          : "#",
                                        children: (0, f.jsx)("img", {
                                          src:
                                            (null === N || void 0 === N
                                              ? void 0
                                              : N.img_host) &&
                                            N.img_host +
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
                                        (0, f.jsx)("div", {
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
                                            I((e) =>
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
                                          children: (0, f.jsx)("p", {
                                            className:
                                              "border-2 border-solid border-og w-6 h-6 flex",
                                            children:
                                              (null === (m = L.aid) ||
                                              void 0 === m
                                                ? void 0
                                                : m
                                                    .split(",")
                                                    .includes(e.id)) &&
                                              (0, f.jsx)(
                                                c.A,
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
                                      T &&
                                        (0, p._2)(Number(e.update_at)) <= 3 &&
                                        (0, f.jsx)("span", {
                                          className:
                                            "absolute left-2 top-2 rounded bg-red-600 text-white px-[0.1rem]",
                                          children: t("library.update"),
                                        }),
                                      _ &&
                                        (0, f.jsx)("div", {
                                          className:
                                            "absolute right-2 top-2 rounded bg-og text-white px-[0.2rem]",
                                          children:
                                            null === (x = e.category) ||
                                            void 0 === x
                                              ? void 0
                                              : x.title,
                                        }),
                                      A &&
                                        (0, f.jsxs)(f.Fragment, {
                                          children: [
                                            (0, f.jsx)("div", {
                                              className:
                                                "bg-[rgb(117,117,117,0.6)] absolute left-2 bottom-3 rounded p-[0.1rem]",
                                              onClick: () => q("like", e.id),
                                              children: (0, f.jsx)(n.A, {
                                                className: "".concat(
                                                  e.liked || R.includes(e.id)
                                                    ? "text-red-600"
                                                    : "text-og",
                                                ),
                                              }),
                                            }),
                                            (0, f.jsx)("div", {
                                              className:
                                                "bg-[rgb(117,117,117,0.6)] absolute right-2 bottom-3 rounded p-[0.1rem]",
                                              onClick: () => q("mark", e.id),
                                              children:
                                                e.is_favorite ||
                                                B.mark.includes(e.id)
                                                  ? (0, f.jsx)(d.A, {
                                                      className: "text-og",
                                                    })
                                                  : (0, f.jsx)(r.A, {
                                                      className:
                                                        "text-2xl text-white",
                                                    }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, f.jsxs)(l.N_, {
                                    to: k
                                      ? "/comic/detail?id=".concat(e.id)
                                      : "#",
                                    children: [
                                      (0, f.jsx)("p", {
                                        className: "truncate font-bold text-sm mt-2 text-gray-800 dark:text-gray-200",
                                        children: e.name,
                                      }),
                                      (0, f.jsx)("p", {
                                        className:
                                          "truncate text-gray-500 text-xs mt-1 dark:text-gray-400",
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
              O.folder &&
              (0, f.jsx)(u.A, {
                folderList: M.folder_list,
                dialogOpen: O,
                setDialogOpen: F,
                editFolder: L,
                setEditFolder: I,
                handleEditFolder: Z,
                tagsList: [],
              }),
            L.alert &&
              (0, f.jsx)(g.Fc, {
                setEdit: I,
                edit: L,
                handleEdit: Z,
                handleAction: q,
                handleDelWatchComic: async () => {
                  if ("del_watch_history" === L.type && "" !== L.aid) {
                    const e = await E((0, m.Zx)(L.aid)).unwrap(),
                      { status: t, msg: s } = e;
                    (z(s, 1 !== t ? "error" : "success"),
                      I((e) => (0, i.A)((0, i.A)({}, e), h.x)),
                      E((0, m.gW)(1)));
                  }
                },
                showSnackbar: z,
              }),
          ],
        });
      };
    },
    9144: (e, t, s) => {
      s.d(t, { A: () => f });
      var i = s(9379),
        a = s(5043),
        l = s(6580),
        o = s(7421),
        n = s(6687),
        r = s(7225),
        d = s(9484),
        c = s(7044),
        m = s(3944),
        x = s(7883),
        g = s(5090),
        u = s(4117),
        h = s(4694),
        p = s(579);
      const f = (e) => {
        var t, s;
        const {
            setTabChange: f,
            filter: j,
            setFilter: b,
            currentPage: v,
            catList: k,
            subList: w,
            mode: N,
            setMode: y,
          } = e,
          { config: _ } = (0, m.H)(),
          { setting: A } = _,
          { t: S } = (0, u.Bd)(),
          [C, L] = (0, a.useState)({ catMore: !1, imageSource: !1 }),
          I = { fontSize: 20, stroke: "white", strokeWidth: 1 },
          z = (0, g.hz)(),
          F = [
            {
              icon: (0, p.jsx)(o.A, { sx: (0, i.A)({}, I) }),
              onClick: () =>
                L((0, i.A)((0, i.A)({}, C), {}, { imageSource: !0 })),
            },
            { icon: (0, p.jsx)(n.A, { sx: (0, i.A)({}, I) }), link: "/blogs" },
            { icon: (0, p.jsx)(r.A, { sx: (0, i.A)({}, I) }), link: "/week" },
            { icon: (0, p.jsx)(d.A, { sx: (0, i.A)({}, I) }), link: "/search" },
          ];
        return (0, p.jsxs)("header", {
          className: "sticky top-safe w-full bg-bbk text-white z-30",
          children: [
            (0, p.jsxs)("div", {
              className: "h-14 flex items-center",
              children: [
                (0, p.jsx)("div", {
                  className: "flex w-6/12 pl-3",
                  children: (0, p.jsx)(l.N_, {
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
                  children: F.map((e, t) =>
                    (0, p.jsx)(
                      l.N_,
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
            "categories" === v &&
              (null === (t = k.cat) || void 0 === t ? void 0 : t.length) > 0 &&
              (0, p.jsxs)("div", {
                className: "text-tgy relative bg-nbk",
                children: [
                  (0, p.jsxs)("div", {
                    className:
                      "h-10 w-11/12 flex items-center overflow-x-auto whitespace-nowrap pr-8",
                    style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                    children: [
                      k.cat.map((e, t) =>
                        (0, p.jsxs)(
                          "div",
                          {
                            children: [
                              (0, p.jsx)("span", {
                                title: e.name,
                                className: "pl-4 ".concat(
                                  j.slug === e.slug ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (b(
                                    (0, i.A)(
                                      (0, i.A)({}, j),
                                      {},
                                      {
                                        tabChange: !0,
                                        slug: e.slug,
                                        sub_slug: "",
                                        sort: "",
                                      },
                                    ),
                                  ),
                                    f(!0));
                                },
                                children: e.name,
                              }),
                              0 === t &&
                                (0, p.jsx)(l.N_, {
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
                            L((0, i.A)((0, i.A)({}, C), {}, { catMore: !0 })),
                        }),
                      }),
                    ],
                  }),
                  (0, p.jsx)("div", {
                    className: "h-10 flex items-center",
                    children:
                      null ===
                        (s =
                          "" === j.slug
                            ? null === k || void 0 === k
                              ? void 0
                              : k.ranking
                            : null === k || void 0 === k
                              ? void 0
                              : k.ranking.slice(0, -1)) || void 0 === s
                        ? void 0
                        : s.map((e) =>
                            (0, p.jsx)(
                              "span",
                              {
                                className: "pl-4 cursor-pointer ".concat(
                                  j.sort === e.key ? "text-og" : "",
                                ),
                                onClick: () => {
                                  (b(
                                    (0, i.A)(
                                      (0, i.A)({}, j),
                                      {},
                                      { sort: e.key },
                                    ),
                                  ),
                                    f(!0));
                                },
                                children: e.title,
                              },
                              e.key,
                            ),
                          ),
                  }),
                  w.length > 0 &&
                    (0, p.jsx)("div", {
                      className: "h-10 flex items-center",
                      children: w.map((e) =>
                        (0, p.jsx)(
                          "span",
                          {
                            className: "pl-4 ".concat(
                              j.sub_slug === e.slug ? "text-og" : "",
                            ),
                            onClick: () => {
                              (f(!0),
                                b(
                                  (0, i.A)(
                                    (0, i.A)({}, j),
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
            "forum" === v &&
              (0, p.jsx)("div", {
                className:
                  "h-20 w-full text-tgy flex items-end py-2 bg-nbk z-50",
                children: z.map((e) =>
                  (0, p.jsxs)(
                    "div",
                    {
                      className: "relative px-4 text-lg cursor-pointer",
                      onClick: () => {
                        (f(!0), y(e.mode));
                      },
                      children: [
                        (0, p.jsx)("p", {
                          className: "transition-colors duration-300 ".concat(
                            N === e.mode ? "text-og pb-2" : "pb-3",
                          ),
                          children: e.tabName,
                        }),
                        N === e.mode &&
                          (0, p.jsx)(h.P.div, {
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
            C.imageSource &&
              (0, p.jsx)(c.A, { setDialogOpen: L, dialogOpen: C, setting: A }),
            C.catMore &&
              (0, p.jsx)(c.A, {
                setDialogOpen: L,
                dialogOpen: C,
                catList: C.catMore ? k : {},
                setFilter: b,
                filter: j,
              }),
          ],
        });
      };
    },
    787: (e, t, s) => {
      s.d(t, { A: () => f });
      var i = s(5043),
        a = s(6580),
        l = s(6148),
        o = s(9275),
        n = s(1500),
        r = s(6671),
        d = s(9354),
        c = s(8390),
        m = s(4149),
        x = s(4117),
        g = s(8038),
        u = s(1100),
        h = s(3944),
        p = s(579);
      const f = (e) => {
        const { currentPage: t } = e,
          {
            config: { logined: s, ads: f },
          } = (0, h.H)(),
          { t: j } = (0, x.Bd)(),
          b = (0, l.j)(),
          { unread: v, notifResult: k } = (0, l.G)((e) => e.member),
          w = sessionStorage.getItem("catTab") || "";
        (0, i.useEffect)(() => {
          s && 0 === Object.keys(v).length && b((0, u.Zg)());
        }, [s, k]);
        const N = [
            {
              icon: (0, p.jsx)(o.A, { className: "text-3xl" }),
              nav: "main",
              label: j("nav.home"),
              link: "/",
            },
            {
              icon: (0, p.jsx)(n.A, { className: "text-3xl" }),
              nav: "categories",
              label: j("nav.categories"),
              link: "/categories?slug=".concat(w),
            },
            {
              icon: (0, p.jsx)(d.A, { className: "text-3xl" }),
              nav: "movies",
              label: j("nav.movie"),
              link: "/movies",
            },
            {
              icon: (0, p.jsx)(c.A, { className: "text-3xl" }),
              nav: "forum",
              label: j("nav.forum"),
              link: "/forum",
            },
            {
              icon: (0, p.jsx)(m.A, { className: "text-3xl" }),
              nav: "member",
              label: j("nav.member"),
              link: "/member",
            },
          ],
          [y, _] = (0, i.useState)(!1),
          A = (0, i.useRef)(null),
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
                ref: A,
                className:
                  "fixed left-0 right-0 flex justify-center transition-all duration-300 ease-in-out ".concat(
                    y ? "bottom-[3rem]" : "bottom-[4.5em]",
                  ),
                children:
                  S &&
                  (0, p.jsx)(g.A, {
                    adKey: S,
                    closeBtn: !0,
                    handleAdResize: () => {
                      _(!0);
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
                    a.N_,
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
                              v.comic_follow + v.site_notice > 0 &&
                              (0, p.jsx)("span", {
                                className:
                                  "absolute -top-1 -right-5 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center",
                                children: v.comic_follow + v.site_notice,
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
    3344: (e, t, s) => {
      s.d(t, { A: () => k });
      var i = s(9379),
        a = s(5043),
        l = s(3438),
        o = s(7392),
        n = s(1906),
        r = s(35),
        d = s(4219),
        c = s(5316),
        m = s(9347),
        x = s(4836),
        g = s(6990),
        u = s(5954),
        h = s(6258),
        p = s(688),
        f = s(9506),
        j = s(4117),
        b = s(579);
      const v = a.forwardRef(function (e, t) {
          return (0, b.jsx)(x.A, (0, i.A)({ direction: "up", ref: t }, e));
        }),
        k = (e) => {
          const {
              dialogOpen: t,
              setDialogOpen: s,
              editFolder: x,
              setEditFolder: k,
              handleEditFolder: w,
              folderList: N,
              tagsList: y,
            } = e,
            [_, A] = (0, a.useState)(null),
            S = Boolean(_),
            { t: C } = (0, j.Bd)(),
            L =
              (null === y || void 0 === y ? void 0 : y.length) > 0 &&
              x.tags_select === y.toString(),
            I = (e, a) => {
              "backdropClick" !== a &&
                s((0, i.A)((0, i.A)({}, t), {}, { folder: !1 }));
            };
          return (0, b.jsx)(b.Fragment, {
            children:
              t.folder &&
              (0, b.jsxs)(r.A, {
                onClose: I,
                "aria-labelledby": "customized-dialog-title",
                open: t.folder,
                TransitionComponent: v,
                className: "text-white",
                slotProps: {
                  backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.3)" } },
                },
                sx: () => ({
                  "& .MuiPaper-root": { paddingY: "1rem", width: "90%" },
                }),
                children: [
                  (0, b.jsx)(o.A, {
                    "aria-label": "close",
                    onClick: I,
                    sx: (e) => ({
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: e.palette.grey[700],
                      stroke: e.palette.grey[700],
                      strokeWidth: 2,
                    }),
                    children: (0, b.jsx)(l.A, {}),
                  }),
                  "add" === x.type &&
                    (0, b.jsx)(d.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: C("member.add_folder"),
                    }),
                  "edit" === x.type &&
                    (0, b.jsx)(d.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: C("member.rename_folder"),
                    }),
                  "move" === x.type &&
                    (0, b.jsx)(d.A, {
                      id: "customized-dialog-title",
                      children: C("member.Select_favorite_folder"),
                    }),
                  (0, b.jsxs)(c.A, {
                    className: "",
                    children: [
                      ("add" === x.type || "edit" === x.type) &&
                        (0, b.jsx)("input", {
                          type: "text",
                          placeholder: C("member.enter_folder_name"),
                          className:
                            "w-11/12 h-10 p-4 border border-solid border-gy",
                          onChange: (e) =>
                            k(
                              (0, i.A)(
                                (0, i.A)({}, x),
                                {},
                                { folder_name: e.target.value },
                              ),
                            ),
                        }),
                      "move" === x.type &&
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsxs)(n.A, {
                              id: "fade-button",
                              "aria-controls": S ? "fade-menu" : void 0,
                              "aria-haspopup": "true",
                              "aria-expanded": S ? "true" : void 0,
                              onClick: (e) => A(e.currentTarget),
                              className:
                                "flex justify-between p-0 w-8/12 text-[#aaa] text-lg",
                              children: [
                                (0, b.jsx)("span", {
                                  className: "pr-10",
                                  children:
                                    x.folder_name || C("member.select_folder"),
                                }),
                                (0, b.jsx)(u.A, {
                                  sx: { color: "#ff6f00", fontSize: 24 },
                                }),
                              ],
                            }),
                            (0, b.jsx)(p.A, {
                              id: "fade-menu",
                              MenuListProps: {
                                "aria-labelledby": "fade-button",
                              },
                              anchorEl: _,
                              open: S,
                              onClose: () => A(null),
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
                                (null === N || void 0 === N
                                  ? void 0
                                  : N.length) > 0 &&
                                N.map((e, t) =>
                                  (0, b.jsx)(
                                    g.A,
                                    {
                                      onClick: () => {
                                        (A(null),
                                          k(
                                            (0, i.A)(
                                              (0, i.A)({}, x),
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
                      (null === y || void 0 === y ? void 0 : y.length) > 0 &&
                        (0, b.jsxs)(b.Fragment, {
                          children: [
                            (0, b.jsx)("hr", {
                              className: "border-2 border-tgy my-4",
                            }),
                            (0, b.jsxs)("div", {
                              className: "text-left",
                              children: [
                                (0, b.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, b.jsx)("p", {
                                      className:
                                        "border-2 border-solid border-og w-5 h-5 flex justify-center items-center overflow-hidden mr-2",
                                      onClick: () => {
                                        const e = L ? "" : y.toString();
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
                                        (0, b.jsx)(f.A, {
                                          sx: {
                                            fontSize: 14,
                                            color: "#ff6f00",
                                            stroke: "#ff6f00",
                                            strokeWidth: 2,
                                          },
                                        }),
                                    }),
                                    (0, b.jsx)("span", {
                                      children: C("detail.favorite_all_tags"),
                                    }),
                                  ],
                                }),
                                (0, b.jsx)("div", {
                                  className:
                                    "flex flex-wrap items-center text-gy mt-4 dark:text-gy",
                                  children: y.map((e) => {
                                    var t;
                                    return (0, b.jsx)(
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
                  (0, b.jsx)(m.A, {
                    className: "flex justify-center",
                    children: (0, b.jsx)(n.A, {
                      className:
                        "bg-og text-white rounded border-solid border-2 border-og w-8/12",
                      onClick: (e) => {
                        (I(),
                          "add" === x.type && w("add"),
                          "edit" === x.type && w("edit"),
                          "move" === x.type && w("move"));
                      },
                      children: C("member.confirm"),
                    }),
                  }),
                ],
              }),
          });
        };
    },
    6809: (e, t, s) => {
      (s.r(t), s.d(t, { default: () => le }));
      var i = s(5043),
        a = s(6580),
        l = s(3944),
        o = s(6148),
        n = s(319),
        r = s(5843),
        d = s(4117),
        c = s(1637),
        m = s(5874),
        x = s(990),
        g = s(6671),
        u = s(9354),
        h = s(8660),
        p = s(8970),
        f = s(6950),
        j = s(4975),
        b = s(50),
        v = s(8038),
        k = (s(7658), s(746)),
        w = s(5412),
        N = s(579);
      const y = (e) => {
        const { dispatch: t, bannerList: s } = e,
          { t: l } = (0, d.Bd)(),
          [o, n] = (0, i.useState)(!1),
          r = sessionStorage.getItem("novelSearchQuery") || "",
          c = (0, i.useMemo)(
            () =>
              (0, w.g9)(s, null === s || void 0 === s ? void 0 : s.length)
                .indexes,
            [s],
          ),
          y = [
            {
              icon: (0, N.jsx)(m.A, { className: "text-orange-500" }),
              label: l("banner.latest"),
              link: "/categories",
            },
            {
              icon: (0, N.jsx)(x.A, { className: "text-red-500" }),
              label: l("banner.hot_ranking"),
              link: "/categories?slug=doujin&sort=mv",
            },
            {
              icon: (0, N.jsx)(k.A, { className: "text-indigo-500" }),
              label: l("banner.hanman"),
              link: "/categories?slug=hanman",
            },
            {
              icon: (0, N.jsx)(h.A, { className: "text-teal-500" }),
              label: l("banner.single_book"),
              link: "/categories?slug=single",
            },
            {
              icon: (0, N.jsx)(f.A, { className: "text-orange-600" }),
              label: "\u5c0f\u8aaa",
              link: "/novels?filter=".concat(r),
            },
            {
              icon: (0, N.jsx)(u.A, { className: "text-neutral-500" }),
              label: l("banner.movies"),
              link: "/movies",
            },
            {
              icon: (0, N.jsx)(p.A, { className: "text-red-700" }),
              label: l("banner.library"),
              link: "/library",
            },
          ];
        return (0, N.jsxs)("div", {
          className: "bg-white dark:bg-nbk text-white",
          children: [
            (0, N.jsx)(j.RC, {
              spaceBetween: 30,
              autoplay: { delay: 5e3 },
              pagination: { clickable: !0 },
              modules: [b.Ij, b.dK],
              onTouchStart: () => n(!0),
              onTouchEnd: () => setTimeout(() => n(!1), 100),
              className: "mySwiper h-[250px]",
              children: [0, 1, 2, 3].map((e) =>
                  (0, N.jsx)(
                    j.qr,
                    {
                      children: (0, N.jsxs)("div", {
                        className: "relative w-full h-[250px]",
                        children: [
                          (0, N.jsx)("div", {
                            className: "absolute inset-0 z-10",
                            style: {
                              touchAction: "pan-y",
                              pointerEvents: o ? "none" : "auto",
                              backgroundColor: "transparent",
                            },
                          }),
                          (0, N.jsx)("img", {
                            src: ["/images/hero1.jpg", "/images/hero2.png", "/images/hero3.jpg", "/images/hero4.jpg"][e],
                            className: "w-full h-full object-cover",
                            alt: "hero banner",
                          }),
                        ],
                      }),
                    },
                    e,
                  ),
                ),
            }),
            (0, N.jsxs)("div", {
              className: "text-black dark:text-white",
              children: [
                (0, N.jsx)("div", {
                  className:
                    "w-11/12 flex justify-around p-2 my-2 shadow-lg m-auto rounded-2xl dark:bg-bbk",
                  children: y.map((e, t) =>
                    (0, N.jsxs)(
                      a.N_,
                      {
                        to: e.link,
                        state: { from: "/" },
                        className: "flex flex-col items-center pt-2",
                        children: [
                          e.icon,
                          (0, N.jsx)("span", {
                            className: "",
                            children: e.label,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, N.jsx)("div", {
                  className: "w-full pt-3 dark:bg-black",
                  children: (0, N.jsx)(a.N_, {
                    to: "/week",
                    children: (0, N.jsx)("img", {
                      className: "w-full h-full object-contain",
                      src: "/images/week.gif",
                      alt: "img-link",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var _ = s(9379),
        A = s(5244),
        S = s(2782),
        C = s(3752),
        L = s(1100),
        I = s(7680),
        z = s(3344),
        F = s(7947),
        O = s(2513);
      const T = (e) => {
        const {
            t: t,
            listName: s,
            list: l,
            setting: n,
            logined: r,
            editFolder: d,
            setEditFolder: c,
            showSnackbar: m,
            setDialogOpen: x,
            dialogOpen: g,
          } = e,
          u = (0, a.zy)(),
          h = t("comic.weekDays", { returnObjects: !0 }),
          { today: p } = (0, w.Hq)(h),
          f = new URLSearchParams(u.search).get("creatorId"),
          v = (0, o.j)(),
          { favoriteList: k } = (0, o.G)((e) => e.member),
          y = JSON.parse(localStorage.getItem("likedItems") || "[]"),
          [T, E] = (0, i.useState)({ like: [], mark: [] }),
          M = async (e, s) => {
            if ("like" === e) {
              if (y.includes(s))
                return void m(t("snack.already_rated"), "success");
              localStorage.setItem("likedItems", JSON.stringify([...y, s]));
              const e = await v((0, L.c1)({ id: s })).unwrap(),
                { code: i, msg: a, status: l } = e.data;
              if (200 === i) {
                m(a, "success" !== l ? "error" : "success");
              }
            }
            if ("mark" === e)
              if (r) {
                (v((0, O.ov)({ isLoading: !0 })),
                  D(),
                  ((e, t) => {
                    E((s) => {
                      const i = s[e] || [],
                        a = i.includes(t)
                          ? i.filter((e) => e !== t)
                          : [...i, t];
                      return (0, _.A)((0, _.A)({}, s), {}, { [e]: a });
                    });
                  })("mark", s),
                  c((0, _.A)((0, _.A)({}, d), {}, { aid: s })));
                const e = await v((0, L.df)(s)).unwrap(),
                  { code: t, data: i } = e;
                if (200 === e.code) {
                  const e = "ok" !== i.status ? "error" : "success";
                  m(i.msg, e);
                }
                ("ok" === i.status &&
                  "add" === i.type &&
                  x((0, _.A)((0, _.A)({}, g), {}, { folder: !0 })),
                  v((0, O.ov)({ isLoading: !1 })));
              } else m(t("login.please_login"), "error");
          },
          D = (e, t) => {
            (v((0, I.a9)("favoriteList")),
              v((0, L.an)({ page: 1, folder_id: e || "", o: t || "mr" })));
          };
        return (0, N.jsxs)(N.Fragment, {
          children: [
            Array.isArray(l) &&
              (null === l || void 0 === l
                ? void 0
                : l.map((e) => {
                    var s;
                    return (0, N.jsxs)(
                      "div",
                      {
                        className: "bg-white dark:bg-nbk dark:text-white",
                        children: [
                          (0, N.jsxs)("div", {
                            className: "flex justify-between mt-3 p-2",
                            children: [
                              (0, N.jsx)("p", {
                                children:
                                  "26" === e.id
                                    ? p + t("comic.seriesUpdate")
                                    : e.title,
                              }),
                              (0, N.jsxs)("p", {
                                className: "text-og",
                                children: [
                                  "novels" === e.type &&
                                    (0, N.jsx)(a.N_, {
                                      to: "/novels",
                                      children: t("comic.see_more"),
                                    }),
                                  "library" === e.type &&
                                    (0, N.jsx)(a.N_, {
                                      to: "/library",
                                      children: t("comic.see_more"),
                                    }),
                                  "promote" === e.type &&
                                    (0, N.jsx)(a.N_, {
                                      to: "/comic?id="
                                        .concat(e.id, "&title=")
                                        .concat(encodeURIComponent(e.title)),
                                      children: t("comic.see_more"),
                                    }),
                                  (null === (s = e.type) || void 0 === s
                                    ? void 0
                                    : s.includes("category_id")) &&
                                    (0, N.jsx)(a.N_, {
                                      to: "/categories?slug=".concat(e.slug),
                                      children: t("comic.see_more"),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, N.jsx)(j.RC, {
                            slidesPerView: 3,
                            centeredSlides: !1,
                            slidesPerGroupSkip: 3,
                            grabCursor: !0,
                            keyboard: { enabled: !0 },
                            scrollbar: !0,
                            modules: [b.s3, b.Ze, b.dK],
                            className: "mySwiper2",
                            children: e.content.map((s) => {
                              var i;
                              return (0, N.jsxs)(
                                j.qr,
                                {
                                  className: "p-2",
                                  children: [
                                    (0, N.jsx)("div", {
                                      className: "relative",
                                      children:
                                        "library" !== e.type
                                          ? (0, N.jsxs)(N.Fragment, {
                                              children: [
                                                (0, N.jsx)(a.N_, {
                                                  to:
                                                    "novels" === e.type
                                                      ? "/novels/detail?nid=".concat(
                                                          s.id,
                                                          "&filter=",
                                                        )
                                                      : "/comic/detail?id=".concat(
                                                          s.id,
                                                        ),
                                                  children: (0, N.jsx)("img", {
                                                    src:
                                                      "novels" === e.type
                                                        ? (null === n ||
                                                          void 0 === n
                                                            ? void 0
                                                            : n.img_host) +
                                                          s.image
                                                        : (null === n ||
                                                          void 0 === n
                                                            ? void 0
                                                            : n.img_host) +
                                                          "/media/albums/" +
                                                          s.id +
                                                          "_3x4.jpg?v=" +
                                                          s.update_at,
                                                    alt: s.id,
                                                    onLoad: (e) => {},
                                                    onError: (e) => {
                                                      e.target.src =
                                                        "/images/cover_default.jpg";
                                                    },
                                                    width: "100%",
                                                    height: "auto",
                                                    className:
                                                      "animation-click-item object-cover rounded-md w-[128px] h-[171px]",
                                                  }),
                                                }),
                                                "26" === e.id &&
                                                  (0, w._2)(
                                                    Number(s.update_at),
                                                  ) <= 3 &&
                                                  (0, N.jsx)("span", {
                                                    className:
                                                      "absolute left-2 top-2 rounded bg-red-600 text-white px-[0.1rem]",
                                                    children:
                                                      t("library.update"),
                                                  }),
                                                (0, N.jsx)("div", {
                                                  className:
                                                    "absolute right-2 top-2 rounded bg-og text-white px-[0.1rem]",
                                                  children:
                                                    null === s ||
                                                    void 0 === s ||
                                                    null === (i = s.category) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i.title,
                                                }),
                                                (0, N.jsx)("div", {
                                                  className:
                                                    "bg-[rgb(117,117,117,0.6)] absolute left-2 bottom-2 rounded p-[0.1rem]",
                                                  onClick: () =>
                                                    M("like", s.id),
                                                  children: (0, N.jsx)(A.A, {
                                                    className: "".concat(
                                                      s.liked ||
                                                        y.includes(s.id)
                                                        ? "text-red-600"
                                                        : "text-og",
                                                    ),
                                                  }),
                                                }),
                                                (0, N.jsx)("div", {
                                                  className:
                                                    "bg-[rgb(117,117,117,0.6)] absolute right-2 bottom-2 rounded p-[0.1rem]",
                                                  onClick: () =>
                                                    M("mark", s.id),
                                                  children:
                                                    s.is_favorite ||
                                                    T.mark.includes(s.id)
                                                      ? (0, N.jsx)(C.A, {
                                                          className: "text-og",
                                                        })
                                                      : (0, N.jsx)(S.A, {
                                                          className:
                                                            "text-2xl text-white",
                                                        }),
                                                }),
                                              ],
                                            })
                                          : (0, N.jsx)(a.N_, {
                                              to: "/library/list/detail?creatorId="
                                                .concat(f, "&id=")
                                                .concat(s.id),
                                              children: (0, N.jsx)("img", {
                                                src:
                                                  (null === n || void 0 === n
                                                    ? void 0
                                                    : n.img_host) +
                                                  "/media/albums/" +
                                                  s.id +
                                                  "_3x4.jpg?v=" +
                                                  s.update_at,
                                                alt: s.id,
                                                loading: "lazy",
                                                onLoad: (e) => {
                                                  e.target.style.opacity = "1";
                                                },
                                                onError: (e) => {
                                                  e.target.src =
                                                    "/images/cover_default.jpg";
                                                },
                                                className:
                                                  "animation-click-item object-cover rounded-md w-[130px] h-[130px]",
                                                style: {
                                                  opacity: "0",
                                                  transition:
                                                    "opacity 0.5s ease-in-out",
                                                },
                                              }),
                                            }),
                                    }),
                                    (0, N.jsx)("p", {
                                      className: "truncate font-bold text-sm mt-2 text-gray-800 dark:text-gray-200",
                                      children: s.name,
                                    }),
                                    (0, N.jsx)("p", {
                                      className:
                                          "truncate text-gray-500 text-xs mt-1 dark:text-gray-400",
                                        children: s.author,
                                    }),
                                  ],
                                },
                                s.id,
                              );
                            }),
                          }),
                        ],
                      },
                      e.id,
                    );
                  })),
            "mainList" === s &&
              g.folder &&
              (0, N.jsx)(z.A, {
                folderList: k.folder_list,
                dialogOpen: g,
                setDialogOpen: x,
                editFolder: d,
                setEditFolder: c,
                handleEditFolder: async (e) => {
                  v((0, O.ov)({ isLoading: !0 }));
                  const { folder_id: s, folder_name: i, aid: a } = d;
                  if ("" !== s) {
                    const t = await v(
                        (0, L.Je)({
                          type: e,
                          folder_id: s,
                          folder_name: i,
                          aid: a,
                        }),
                      ).unwrap(),
                      { msg: l, status: o } = t.data;
                    if ("ok" === o) {
                      m(l, "ok" !== o ? "error" : "success");
                    }
                  } else m(t("comic.added_to_favorites_success"), "success");
                  (v((0, O.ov)({ isLoading: !1 })),
                    c((e) => (0, _.A)((0, _.A)({}, e), F.x)));
                },
                tagsList: [],
              }),
          ],
        });
      };
      var E = s(787),
        M = s(2101),
        D = s(6715),
        P = s(9480),
        R = s(7225),
        J = s(9011);
      const W = (e) => {
        var t;
        const { setting: s, randomItem: l } = e,
          o = (0, J.bs)(),
          [n, r] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            const e = () => {
              window.scrollY > 100 ? r(!0) : r(!1);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)("div", {
                className: "w-14 h-14 fixed bottom-[22rem] right-3 z-40",
                children: (0, N.jsx)(v.A, {
                  adKey: "app_home_float",
                  adTag: !1,
                }),
              }),
              n
                ? (0, N.jsxs)(N.Fragment, {
                    children: [
                      (0, N.jsx)("button", {
                        onClick: o,
                        className:
                          "w-14 h-14 rounded-full fixed bottom-[18rem] right-3 bg-nbk text-white z-40",
                        children: (0, N.jsx)(M.A, {}),
                      }),
                      (0, N.jsx)(a.N_, {
                        to: "/comic/detail?id=".concat(
                          null === (t = l[0]) || void 0 === t ? void 0 : t.id,
                        ),
                        children: (0, N.jsx)("button", {
                          className:
                            "w-14 h-14 rounded-full fixed bottom-[14rem] right-3 bg-nbk text-white z-40",
                          children: (0, N.jsx)(D.A, {}),
                        }),
                      }),
                    ],
                  })
                : (0, N.jsxs)(N.Fragment, {
                    children: [
                      (0, N.jsx)("button", {
                        className:
                          "w-14 h-14 rounded-full fixed bottom-[18rem] right-3 bg-og text-white z-40",
                        children: (0, N.jsx)("a", {
                          href: s.donate_url,
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, N.jsx)(P.A, {}),
                        }),
                      }),
                      (0, N.jsx)(a.N_, {
                        to: "/daily",
                        state: { from: "/" },
                        children: (0, N.jsx)("button", {
                          className:
                            "w-14 h-14 rounded-full fixed bottom-[14rem] right-3 bg-og text-white z-40",
                          children: (0, N.jsx)(R.A, {}),
                        }),
                      }),
                    ],
                  }),
            ],
          })
        );
      };
      var B = s(3492),
        K = s(7044),
        U = s(7152),
        G = s(3865);
      const H = (e) => {
        var t;
        const { config: s, setConfig: a, onNext: l, ads: o } = e,
          { t: n } = (0, d.Bd)(),
          [r, m] = (0, i.useState)({ line: "", lineKey: 1, lineIndex: 0 }),
          { indexes: x } = (0, w.g9)(
            null === (t = o.app_route) || void 0 === t ? void 0 : t.advs,
          ),
          [g, u] = (0, i.useState)(!0),
          h = G.A.hostServer,
          p = (0, i.useMemo)(
            () =>
              (0, w.g9)(h, null === h || void 0 === h ? void 0 : h.length)
                .items,
            [h],
          );
        return (
          (0, i.useEffect)(() => {
            if (s.hostReady) {
              const e = setTimeout(() => {
                u(!1);
              }, 500);
              return () => clearTimeout(e);
            }
          }, [s.hostReady]),
          (0, N.jsx)(N.Fragment, {
            children: (0, N.jsx)("div", {
              className:
                "w-full h-full bg-[#545454] absolute left-0 top-0 z-50 pb-20",
              children: (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)("div", {
                    className:
                      "flex justify-center items-center mx-auto mt-24 overflow-hidden",
                    children: (0, N.jsx)("div", {
                      className: "h-[250px]",
                      children: (0, N.jsx)("img", {
                        src: "/images/custom_ad.png",
                        alt: "Custom Image",
                        className: "rounded-lg shadow-md",
                        style: { width: "250px", height: "250px", objectFit: "cover" },
                      }),
                    }),
                  }),
                  (0, N.jsxs)("div", {
                    className: "m-auto text-center",
                    children: [
                      (0, N.jsxs)("div", {
                        className: "text-white my-8",
                        children: [
                          (0, N.jsx)("p", {
                            className: "text-lg mb-3",
                            children: n("modal.please_select_network"),
                          }),
                          (0, N.jsx)("p", {
                            className: "",
                            children: n("modal.network_troubleshooting_hint"),
                          }),
                        ],
                      }),
                      (0, N.jsx)("div", {
                        className: "text-og flex flex-col items-center",
                        children: g
                          ? (0, N.jsxs)("div", {
                              className: "w-full text-white mt-10",
                              children: [
                                (0, N.jsx)(c.A, { color: "inherit", size: 30 }),
                                (0, N.jsx)("p", {
                                  className: "text-lg my-4",
                                  children: n("modal.loading_network"),
                                }),
                              ],
                            })
                          : (0, N.jsx)(N.Fragment, {
                              children:
                                (null === p || void 0 === p
                                  ? void 0
                                  : p.length) > 0 &&
                                p.map((e, t) =>
                                  (0, N.jsxs)(
                                    "button",
                                    {
                                      className:
                                        "border-2 border-og rounded-full w-2/5 p-3 mb-5 flex justify-center items-center\n                    ".concat(
                                          r.lineKey === t + 1
                                            ? "bg-og text-white"
                                            : "",
                                        ),
                                      onClick: () =>
                                        ((e, t) => {
                                          m(
                                            (0, _.A)(
                                              (0, _.A)({}, r),
                                              {},
                                              {
                                                line: e,
                                                lineKey: t,
                                                lineIndex: t,
                                              },
                                            ),
                                          );
                                          const s = "https://"
                                            .concat(e)
                                            .concat(window.location.pathname);
                                          (G.A.updateApiUrl(s),
                                            a((e) =>
                                              (0, _.A)(
                                                (0, _.A)({}, e),
                                                {},
                                                { host: s },
                                              ),
                                            ));
                                          const i = setTimeout(() => {
                                            ((0, U.q0)(a), l());
                                          }, 500);
                                          return () => clearTimeout(i);
                                        })(e[0], t + 1),
                                      children: [
                                        (0, N.jsx)("span", {
                                          className: "ml-4",
                                          children: e[1],
                                        }),
                                        (0, N.jsx)("div", {
                                          className:
                                            "bg-green-600 w-2 h-2 rounded-full ml-4",
                                        }),
                                        (0, N.jsx)("span", {
                                          className: "ml-1 text-t08",
                                          children: n("modal.smooth"),
                                        }),
                                        (0, N.jsx)("div", {
                                          className: "text-white ml-4",
                                          children:
                                            r.lineIndex === t + 1 &&
                                            (0, N.jsx)(c.A, {
                                              color: "inherit",
                                              size: 10,
                                            }),
                                        }),
                                      ],
                                    },
                                    e,
                                  ),
                                ),
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      var q = s(3438),
        V = s(5807);
      const Z = (e) => {
          const { setting: t, onNext: s, ads: a } = e,
            l = (0, o.j)(),
            { t: n } = (0, d.Bd)(),
            r = (0, J.S0)(3e3),
            c = localStorage.getItem("adsContent"),
            m = localStorage.getItem("oldAdsCache") || "";
          return (
            (0, i.useEffect)(() => {
              if ((t.ipcountry && !c) || t.ad_cache_version !== Number(m)) {
                const e = t.ipcountry,
                  s = 0 === t.is_cn ? "TW" : "CN";
                (l((0, O.ov)({ isLoading: !0 })),
                  l(
                    (0, V.pC)({ lang: s, ipcountry: e, v: t.ad_cache_version }),
                  ),
                  localStorage.setItem("oldAdsCache", t.ad_cache_version));
              }
            }, [t.ipcountry, t.ad_cache_version]),
            (0, i.useEffect)(() => { s(); }, [s]),
            null
          );
        },
        Y = (e) => {
          var t, s;
          const { onNext: a, config: l } = e,
            { t: n } = (0, d.Bd)(),
            [r, m] = (0, i.useState)(!1),
            { coverAds: x, isLoading: g } = (0, o.G)((e) => e.main),
            [u, h] = (0, i.useState)(!0),
            p = localStorage.getItem("adsContent"),
            f = p ? JSON.parse(p) : Object.keys(x || {}).length > 0 ? x : {},
            v =
              null === (t = f.link) || void 0 === t ? void 0 : t.exchange_link,
            k = f.img,
            y = v
              ? v.show_max -
                (null === (s = v.first_links) || void 0 === s
                  ? void 0
                  : s.length)
              : 1,
            { items: _ } = (0, w.g9)(
              null === v || void 0 === v ? void 0 : v.second_links,
              y,
            ),
            A = [
              ...((null === v || void 0 === v ? void 0 : v.first_links) || []),
              ..._,
            ],
            S = localStorage.getItem("fetchHost");
          return (
            (0, i.useEffect)(() => {
              p && h(!1);
            }, []),
            (0, i.useEffect)(() => {
              document.body.classList.add("fade");
              sessionStorage.setItem("state", JSON.stringify(!0));
              a();
            }, [a]),
            null
          );
        };
      var Q = s(5411),
        X = s(1299),
        $ = s(9144),
        ee = s(3553),
        te = s(611),
        se = s(4496),
        ie = s(7353);
      const ae = (e) => {
          const { config: t, visible: s } = e,
            [a, l] = (0, i.useState)(!0),
            {
              jm3_version_info: n,
              jm3_download_url: r,
              app_landing_page: d,
            } = t.setting,
            m = localStorage.getItem("newVersion") || "",
            x = (0, o.j)(),
            { hotUpdateModalProgress: g, newVersion: u } = (0, o.G)(
              (e) => e.hotUpdate,
            );
          (0, i.useEffect)(() => {
            Object.keys(t.setting).length > 0 &&
              setTimeout(() => {
                l(!1);
              }, 500);
          }, [t.setting]);
          function h(e) {
            return (0, N.jsxs)(ie.A, {
              sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 2,
              },
              children: [
                (0, N.jsx)(ie.A, {
                  sx: {
                    width: "100%",
                    bgcolor: "#fff3e0",
                    borderRadius: 1,
                    px: 0.25,
                    py: 0.25,
                  },
                  children: (0, N.jsx)(
                    te.A,
                    (0, _.A)(
                      (0, _.A)({ variant: "determinate" }, e),
                      {},
                      {
                        sx: {
                          height: 6,
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#ff7b00",
                          },
                        },
                      },
                    ),
                  ),
                }),
                (0, N.jsx)(ie.A, {
                  sx: { minWidth: 35, color: "white" },
                  children: (0, N.jsx)(se.A, {
                    children: "".concat(Math.round(e.value), "%"),
                  }),
                }),
              ],
            });
          }
          return (0, N.jsx)(N.Fragment, {
            children:
              s &&
              (0, N.jsx)("div", {
                className:
                  "w-full min-h-screen bg-[#545454] text-white absolute left-0 top-0 flex flex-col justify-center items-center z-50",
                children: (0, N.jsx)("div", {
                  children: a
                    ? (0, N.jsx)(c.A, { color: "inherit", size: 30 })
                    : (0, N.jsxs)(N.Fragment, {
                        children: [
                          (0, N.jsxs)("h1", {
                            className: "text-xl",
                            children: [
                              "\u76ee\u524d\u6700\u65b0\u7248\u672c\u70bav",
                              m,
                            ],
                          }),
                          (0, N.jsx)("p", {
                            children: "\u672c\u6b21\u66f4\u65b0\u5167\u5bb9",
                          }),
                          (0, N.jsx)("br", {}),
                          (0, N.jsx)("div", {
                            className: "min-h-[200px]",
                            dangerouslySetInnerHTML: {
                              __html:
                                null === n || void 0 === n
                                  ? void 0
                                  : n.replace(/\n/g, "<br />"),
                            },
                          }),
                          (0, N.jsxs)("div", {
                            className: "my-10",
                            children: [
                              (0, N.jsx)("button", {
                                className:
                                  "w-full bg-blue-500 p-2 shadow-lg rounded shadow-stone-700/50",
                                onClick: () => {
                                  (0, ee.iy)(x, {
                                    hotUpdate: { newVersion: u },
                                  });
                                },
                                children: "\u6578\u64da\u5305\u66f4\u65b0",
                              }),
                              (0, N.jsx)(ie.A, {
                                sx: { width: "100%" },
                                children: (0, N.jsx)(h, { value: g }),
                              }),
                              (0, N.jsx)("p", {
                                className: "my-2",
                                children:
                                  "\u7121\u6cd5\u66f4\u65b0\uff1f\u8acb\u9ede\u9078\u4e0b\u65b9 apk \u8f09\u9ede",
                              }),
                              (0, N.jsx)("a", {
                                href: r,
                                children: (0, N.jsx)("button", {
                                  className:
                                    "w-full bg-og p-2 shadow-lg rounded shadow-stone-700/50 mb-3",
                                  children: "\u4e0b\u8f09\u9ede1",
                                }),
                              }),
                              (0, N.jsx)("a", {
                                href: d,
                                children: (0, N.jsx)("button", {
                                  className:
                                    "w-full bg-og p-2 shadow-lg rounded shadow-stone-700/50",
                                  children: "\u4e0b\u8f09\u9ede2",
                                }),
                              }),
                            ],
                          }),
                          (0, N.jsx)("img", {
                            src: "/images/updateversionbn.png",
                            alt: "memberbn",
                            width: "300px",
                            height: "auto",
                            className: "rounded-2xl",
                          }),
                          (0, N.jsxs)("div", {
                            className: "flex justify-between mt-10 mb-2",
                            children: [
                              (0, N.jsx)("span", {
                                children:
                                  "\xa9 2008-2025 \u7981\u6f2b\u5929\u5802",
                              }),
                              (0, N.jsxs)("span", {
                                children: ["JM v", t.version],
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
              }),
          });
        },
        le = () => {
          var e, t, s;
          const { config: m, setConfig: x } = (0, l.H)(),
            { setting: g, logined: u, ads: h } = m,
            { t: p } = (0, d.Bd)(),
            f = (0, a.zy)(),
            j = (0, o.j)(),
            { snackbars: b, setSnackbars: v, showSnackbar: k } = (0, X.q)(),
            [_, A] = (0, i.useState)(0),
            [S, C] = (0, i.useState)({ imageSource: !1, folder: !1 }),
            {
              mainList: L,
              latestList: I,
              isLoading: z,
              isRefreshing: M,
            } = (0, o.G)((e) => e.main),
            { items: D } = (0, w.g9)(
              null === (e = L[0]) || void 0 === e ? void 0 : e.content,
            ),
            [P, R] = (0, i.useState)(0),
            { ref: J, inView: U } = (0, r.Wx)(),
            G =
              P <=
              (null !== I && void 0 !== I && I.length
                ? Math.ceil(I.length / 30)
                : 30),
            [q, ee] = (0, i.useState)(F.x);
          sessionStorage.setItem("fromPage", f.pathname);
          const te =
              (null === L || void 0 === L ? void 0 : L.length) &&
              (null === (t = L.find((e) => "26" === e.id)) || void 0 === t
                ? void 0
                : t.content.map((e) => e.id)),
            se = sessionStorage.getItem("state"),
            ie = se ? JSON.parse(se) : null,
            { showHotUpdateModal: le } = (0, o.G)((e) => e.hotUpdate),
            oe = () => {
              _ < 5 && A(_ + 1);
            };
          (0, i.useEffect)(() => {
            A(le ? 1 : ie ? 5 : 2);
          }, [le, ie]);
          const ne = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0;
            !e || t
              ? (j(
                  (0, O.ov)({ isLoading: !0, isLoadMore: !1, isRefreshing: t }),
                ),
                R(0),
                sessionStorage.setItem("mainLoadMore", "-1"),
                j((0, O.JP)("mainList")),
                j((0, O.JP)("latestList")),
                setTimeout(() => {
                  j((0, V.Ys)());
                }, s))
              : e &&
                (j(
                  (0, O._r)({
                    isLastLoading: !0,
                    isLastLoadMore: e,
                    isLastLoadMoreLoading: !1,
                    isRefreshing: t,
                  }),
                ),
                setTimeout(() => {
                  j((0, V.or)(i));
                }, s),
                sessionStorage.setItem("mainLoadMore", String(i)));
          };
          (0, i.useEffect)(() => {
            (localStorage.setItem("trackList", JSON.stringify(te)),
              _ >= 3 && 0 === L.length && !M && ne(!1, !1, 1e3, 0));
          }, [j, L.length, _]);
          const re = (0, i.useCallback)(() => {
            if (G && U && G) {
              const e = sessionStorage.getItem("mainLoadMore"),
                t = Number(e) + 1;
              (R(t), ne(!0, !1, 1e3, t));
            }
          }, [U, G]);
          return (
            (0, i.useEffect)(() => {
              re();
            }, [re]),
            (0, N.jsxs)("div", {
              className: "h-full dark:bg-bk",
              children: [
                1 === _ &&
                  (0, N.jsx)(ae, { config: m, visible: le, onNext: oe }),
                2 === _ &&
                  (0, N.jsx)(H, {
                    config: m,
                    setConfig: x,
                    ads: h,
                    onNext: oe,
                  }),
                3 === _ && (0, N.jsx)(Z, { setting: g, ads: h, onNext: oe }),
                4 === _ && (0, N.jsx)(Y, { config: m, onNext: oe }),
                (0 === _ || z) && (0, N.jsx)(Q.A, {}),
                (0 === _ || 5 === _) &&
                  (0, N.jsxs)(n.u, {
                    completeDelay: 1e3,
                    refreshing: M,
                    onRefresh: () => {
                      ne(!1, !0);
                    },
                    renderText: w.S5,
                    className: "overflow-y-visible",
                    children: [
                      (0, N.jsx)($.A, { currentPage: "main" }),
                      (0, N.jsx)(y, {
                        dispatch: j,
                        bannerList:
                          null === (s = h.app_home_top) || void 0 === s
                            ? void 0
                            : s.advs,
                      }),
                      (null === L || void 0 === L ? void 0 : L.length) > 0 &&
                        (0, N.jsxs)(N.Fragment, {
                          children: [
                            (0, N.jsx)(T, {
                              t: p,
                              listName: "mainList",
                              list: L,
                              setting: g,
                              logined: u,
                              editFolder: q,
                              setEditFolder: ee,
                              setDialogOpen: C,
                              dialogOpen: S,
                              showSnackbar: k,
                            }),
                            (0, N.jsx)(B.A, {
                              title: "new",
                              t: p,
                              listName: "latestList",
                              link: !0,
                              list: I,
                              logined: u,
                              setting: g,
                              comicTags: !0,
                              comicMark: !0,
                              comicCheck: !1,
                              editFolder: q,
                              setEditFolder: ee,
                              setDialogOpen: C,
                              dialogOpen: S,
                              showSnackbar: k,
                            }),
                            (0, N.jsx)("button", {
                              ref: J,
                              onClick: re,
                              className:
                                "w-full flex justify-center pt-4 pb-40",
                              children: G
                                ? (0, N.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                      (0, N.jsx)(c.A, {
                                        color: "inherit",
                                        size: 12,
                                      }),
                                      (0, N.jsx)("p", {
                                        className: "ml-2",
                                        children: p("comic.pull_to_load"),
                                      }),
                                    ],
                                  })
                                : (0, N.jsx)("p", {
                                    className: "text-center",
                                    children: p("comic.no_more"),
                                  }),
                            }),
                          ],
                        }),
                    ],
                  }),
                (0, N.jsx)(E.A, { currentPage: "main" }),
                (0, N.jsx)(W, { setting: g, randomItem: D }),
                (0, N.jsx)(X.A, { snackbars: b, setSnackbars: v }),
                S.imageSource &&
                  (0, N.jsx)(K.A, { setDialogOpen: C, dialogOpen: S }),
              ],
            })
          );
        };
    },
    7947: (e, t, s) => {
      s.d(t, { Z: () => i, x: () => a });
      const i = {
          login: { username: "", password: "" },
          signUp: {
            username: "",
            password: "",
            password_confirm: "",
            email: "",
            gender: "",
            adult: !1,
            PrivacyPolicy: !1,
          },
          forgot: { email: "" },
        },
        a = {
          edit: !1,
          type: "move",
          folder_id: "",
          folder_name: "",
          aid: "",
          o: "mr",
          select: "",
          alert: !1,
          confirm: !1,
          message: "",
          tags_select: "",
        };
    },
  },
]);
//# sourceMappingURL=6809.577cf73e.chunk.js.map
