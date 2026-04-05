"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [2106],
  {
    2106: (e, t, s) => {
      (s.r(t), s.d(t, { default: () => L }));
      var a = s(9379),
        n = s(5043),
        l = s(6580),
        o = s(9011),
        i = s(8038),
        c = s(6148),
        r = s(5858),
        d = s(5411),
        x = s(7044),
        v = s(4117),
        m = s(3944),
        g = s(7738),
        p = s(7947),
        u = s(2028),
        f = s(1299),
        h = s(9295),
        A = s(2782),
        j = s(3752),
        k = s(9662),
        b = s(579);
      const S = (0, k.A)(
        (0, b.jsx)("path", {
          d: "M2.5 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z",
        }),
        "TextFields",
      );
      var _ = s(501),
        y = s(8390);
      const w = (0, k.A)(
          (0, b.jsx)("path", {
            d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2",
          }),
          "MoreVert",
        ),
        N = (e) => {
          const {
            t: t,
            nid: s,
            ncid: n,
            setTab: l,
            commentRef: o,
            dialogOpen: i,
            setDialogOpen: c,
            favoriteSave: r,
            handleEngagementAction: d,
            handleNextChapter: x,
          } = e;
          return (0, b.jsx)("div", {
            className: "fixed bottom-0 left-0 right-0 w-full z-20",
            children: (0, b.jsx)("div", {
              className:
                "flex justify-around items-start bg-bbk text-white z-50 min-h-[6rem] pt-3 overflow-hidden",
              children: [
                {
                  icon: (0, b.jsx)(S, { className: "text-3xl" }),
                  text: t("setting.font"),
                  click: () =>
                    c((0, a.A)((0, a.A)({}, i), {}, { textFields: !0 })),
                },
                {
                  icon: (0, b.jsx)(_.A, { className: "text-3xl" }),
                  text: t("novel.next_chapter"),
                  click: () => x(),
                },
                {
                  icon: (0, b.jsx)(y.A, { className: "text-3xl" }),
                  text: t("nav.forum"),
                  click: () => {
                    (o.current &&
                      o.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      }),
                      l(2));
                  },
                },
                {
                  icon: r.mark.includes(s)
                    ? (0, b.jsx)(j.A, { className: "text-3xl text-og" })
                    : (0, b.jsx)(A.A, { className: "text-3xl" }),
                  text: t("detail.favorites"),
                  click: () => d("mark", s),
                },
                {
                  icon: (0, b.jsx)(w, { className: "text-3xl" }),
                  text: t("novel.more"),
                  click: () =>
                    c((0, a.A)((0, a.A)({}, i), {}, { moreElse: !i.moreElse })),
                },
              ].map((e, t) =>
                (0, b.jsxs)(
                  "div",
                  {
                    onClick: () => e.click(),
                    className:
                      "flex flex-col items-center justify-between w-full max-w-[20%] text-gy",
                    children: [
                      (0, b.jsx)("div", { children: e.icon }),
                      (0, b.jsx)("span", {
                        className: "text-center text-sm",
                        children: e.text,
                      }),
                    ],
                  },
                  e.text,
                ),
              ),
            }),
          });
        };
      var C = s(2873),
        I = s(223),
        O = s(3344),
        F = s(2226);
      const L = () => {
        var e, t, s, A;
        const { config: j, setConfig: k } = (0, m.H)(),
          { setting: S, logined: _, darkMode: y } = j,
          w = (0, l.zy)(),
          L = (0, l.Zp)(),
          D = (0, c.j)(),
          { t: z, i18n: E } = (0, v.Bd)(),
          K = (0, o.bs)(),
          {
            novelDetail: R,
            novelReadDetail: T,
            novelFavoritesList: M,
            isLoading: V,
          } = (0, c.G)((e) => e.novel),
          { snackbars: J, setSnackbars: U, showSnackbar: H } = (0, f.q)(),
          P = new URLSearchParams(w.search),
          W = P.get("nid"),
          Z = P.get("ncid"),
          q = P.get("title"),
          B = null !== (e = P.get("filter")) && void 0 !== e ? e : "",
          [G, Q] = (0, n.useState)(1),
          [X, Y] = (0, n.useState)(""),
          [$, ee] = (0, n.useState)(p.Z),
          te = (0, n.useRef)(null),
          [se, ae] = (0, n.useState)({
            login: !1,
            signUp: !1,
            forgot: !1,
            folder: !1,
            textFields: !1,
            moreElse: !1,
            alert: !1,
            buyNovel: !1,
          }),
          ne = localStorage.getItem("novelFontSizeClass"),
          [le, oe] = (0, n.useState)({
            wordValue: ne
              ? null === (t = JSON.parse(ne)) || void 0 === t
                ? void 0
                : t.newWordValue
              : 50,
            fontSizeClass: ne
              ? null === (s = JSON.parse(ne)) || void 0 === s
                ? void 0
                : s.newFontSizeClass
              : "text-xl",
            lang: localStorage.getItem("novelLang") || "tw",
            confirm: !1,
          }),
          [ie, ce] = (0, n.useState)(p.x),
          [re, de] = (0, n.useState)(!1),
          [xe, ve] = (0, n.useState)(""),
          [me, ge] = (0, n.useState)(() => ({
            like: JSON.parse(localStorage.getItem("novelLikeItems") || "[]"),
            mark: JSON.parse(localStorage.getItem("novelMarkItems") || "[]"),
          })),
          [pe, ue] = (0, n.useState)(() => {
            const e = localStorage.getItem("novelRead");
            return e ? JSON.parse(e) : {};
          }),
          fe = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1;
            (D((0, I.Ah)({ isLoading: !0, isLoadMore: e, isRefreshing: t })),
              t && D((0, I.f9)("forumList")),
              setTimeout(() => {
                D((0, C.e)({ mode: "novel", nid: W, page: a }));
              }, s));
          };
        ((0, n.useEffect)(() => {
          (K(), Z && (D((0, r.y3)({ ncid: Z, lang: le.lang })), fe()));
        }, [Z]),
          (0, n.useEffect)(() => {
            var e;
            0 ===
              (null === (e = Object.keys(R)) || void 0 === e
                ? void 0
                : e.length) && D((0, r.Pb)({ nid: W }));
          }, [R]));
        const he = (e, t) => {
            ge((s) => {
              let n;
              return (
                (n =
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
                  JSON.stringify(n),
                ),
                (0, a.A)((0, a.A)({}, s), {}, { [t]: n })
              );
            });
          },
          Ae = async (e, t) => {
            if ("like" === e) {
              if (me.like.includes(t))
                return void H(z("snack.already_rated"), "success");
              he(t, "like");
              const e = await D((0, r.DQ)({ id: t })).unwrap(),
                { code: s, msg: a, status: n } = e;
              200 === s && H(a, "success" !== n ? "error" : "success");
            }
            if ("mark" === e)
              if (_) {
                (de(!0),
                  (async () => {
                    (D((0, F.kX)("novelFavoritesList")),
                      await D(
                        (0, r.EK)({ page: 1, folder_id: "", o: "" }),
                      ).unwrap());
                  })(),
                  he(t, "mark"));
                const e = await D((0, r.vA)({ nid: W })).unwrap(),
                  { status: s, msg: n, type: l } = e,
                  o = "ok" !== s ? "error" : "success";
                if ("ok" === s)
                  switch (l) {
                    case "add":
                    case "edit":
                    case "move":
                      (ce((e) =>
                        (0, a.A)((0, a.A)({}, e), {}, { aid: t, alert: !1 }),
                      ),
                        ae((0, a.A)((0, a.A)({}, se), {}, { folder: !0 })));
                      break;
                    case "remove":
                      ce((e) => (0, a.A)((0, a.A)({}, e), p.x));
                  }
                H(n, o);
              } else
                (H(z("login.please_login"), "error"),
                  ae((0, a.A)((0, a.A)({}, se), {}, { login: !0 })));
          },
          je =
            null === T ||
            void 0 === T ||
            null === (A = T.content) ||
            void 0 === A
              ? void 0
              : A.split(/(<\/p>)/g).map((e, t, s) => {
                  const a = t === s.length - 2;
                  return "</p>" === e
                    ? (0, b.jsxs)(
                        n.Fragment,
                        {
                          children: [
                            (0, b.jsx)(
                              "p",
                              { dangerouslySetInnerHTML: { __html: e } },
                              "p-".concat(t),
                            ),
                            !a &&
                              t % 3 === 2 &&
                              (0, b.jsx)(
                                "div",
                                {
                                  className: "flex justify-center",
                                  children: (0, b.jsx)(i.A, {
                                    adKey: "app-novelchap_cmid",
                                  }),
                                },
                                "ad-".concat(t),
                              ),
                          ],
                        },
                        "frag-".concat(t),
                      )
                    : (0, b.jsx)(
                        "p",
                        { dangerouslySetInnerHTML: { __html: e } },
                        "p-".concat(t),
                      );
                });
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsxs)("div", {
              className: "text-gy h-full pb-40 dark:text-tgy dark:bg-bbk",
              children: [
                V && (0, b.jsx)(d.A, {}),
                (0, b.jsxs)("div", {
                  className:
                    "sticky top-safe z-50 h-14 bg-bbk text-white flex items-center p-2 py-3",
                  children: [
                    (0, b.jsx)(o.ee, {
                      back: "/novels/detail?nid="
                        .concat(W, "&ncid=")
                        .concat(Z, "&title=")
                        .concat(q, "&filter=")
                        .concat(B, "&back=true"),
                    }),
                    (0, b.jsx)("p", {
                      className: "w-[85%] ml-auto pr-1 text-og truncate mr-4",
                      children: q,
                    }),
                  ],
                }),
                (0, b.jsx)("p", {
                  className: "bg-white text-2xl mt-4 p-4 dark:bg-gy",
                  children: q,
                }),
                (0, b.jsxs)("div", {
                  className:
                    "max-h-[140px] overflow-hidden flex flex-col-2 gap-4 p-4",
                  children: [
                    (0, b.jsx)(i.A, { adKey: "app-novelchap_cstart_1" }),
                    (0, b.jsx)(i.A, { adKey: "app-novelchap_cstart_2" }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className: "bg-white p-4 text-2xl dark:bg-bbk",
                  children: [
                    (0, b.jsx)("p", {
                      className: "font-blod text-nbk  ".concat(
                        le.fontSizeClass,
                        " py-5 dark:text-tgy",
                      ),
                      children: null === T || void 0 === T ? void 0 : T.name,
                    }),
                    (0, b.jsx)("div", {
                      className: "min-h-[200px] ".concat(le.fontSizeClass),
                      children: je,
                    }),
                    (0, b.jsx)("div", {
                      className: "max-h-[140px]",
                      children: (0, b.jsx)(i.A, { adKey: "app_thewayhome" }),
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "max-h-[140px] overflow-hidden flex flex-col-2 gap-1",
                      children: [
                        (0, b.jsx)(i.A, { adKey: "app-novelchap_clast_1" }),
                        (0, b.jsx)(i.A, { adKey: "app-novelchap_clast_2" }),
                      ],
                    }),
                    (0, b.jsxs)("p", {
                      className: "text-center text-sm",
                      ref: te,
                      children: [
                        z("novel.advertisement_prompt"),
                        " ",
                        ">",
                        "w<",
                      ],
                    }),
                  ],
                }),
                (0, b.jsx)(h.A, {
                  t: z,
                  nid: W,
                  filter: B,
                  config: j,
                  showSnackbar: H,
                  tab: G,
                  setTab: Q,
                  responds: X,
                  setResponds: Y,
                  relatedList:
                    (null === T || void 0 === T ? void 0 : T.related_list) ||
                    [],
                  loadForumList: fe,
                  dialogOpen: se,
                  setDialogOpen: ae,
                  favoriteSave: me,
                  handleEngagementAction: Ae,
                }),
                (0, b.jsxs)("div", {
                  className: "flex flex-col-2 gap-1 p-2",
                  children: [
                    (0, b.jsx)(i.A, { adKey: "app-novelchap_bottom_1" }),
                    (0, b.jsx)(i.A, { adKey: "app-novelchap_bottom_2" }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className: "flex flex-col-2 gap-1 p-2",
                  children: [
                    (0, b.jsx)(i.A, { adKey: "app-novelchap_bottom_3" }),
                    (0, b.jsx)(i.A, { adKey: "app-novelchap_bottom_4" }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)(N, {
              t: z,
              nid: W,
              ncid: Z,
              setTab: Q,
              commentRef: te,
              dialogOpen: se,
              setDialogOpen: ae,
              favoriteSave: me,
              handleEngagementAction: Ae,
              handleNextChapter: () => {
                var e, t;
                const s =
                    null === (e = R.series) || void 0 === e
                      ? void 0
                      : e.findIndex((e) => e.id === Z),
                  n = s < R.series.length - 1 ? R.series[s + 1] : null;
                ve(null === n || void 0 === n ? void 0 : n.NCID);
                const l =
                  null !==
                    (t = null === n || void 0 === n ? void 0 : n.is_buy_ok) &&
                  void 0 !== t
                    ? t
                    : "0";
                var o;
                "1" !==
                  (null === n || void 0 === n ? void 0 : n.is_need_buy_nc) ||
                "0" !== l
                  ? n
                    ? ((o = n.NCID),
                      ue((e) => {
                        const t = e[W] || [];
                        if (!t.includes(o)) {
                          const s = (0, a.A)(
                            (0, a.A)({}, e),
                            {},
                            { [W]: [...t, o] },
                          );
                          return (
                            localStorage.setItem(
                              "novelRead",
                              JSON.stringify(s),
                            ),
                            s
                          );
                        }
                        return e;
                      }),
                      L(
                        "/novels/detail/read?nid="
                          .concat(W, "&ncid=")
                          .concat(n.NCID, "&title=")
                          .concat(
                            encodeURIComponent(
                              null === R || void 0 === R ? void 0 : R.name,
                            ),
                            "&filter=",
                          )
                          .concat(B),
                      ))
                    : H(z("novel.is_last_chapter"), "success")
                  : ae((0, a.A)((0, a.A)({}, se), {}, { buyNovel: !0 }));
              },
            }),
            (se.textFields || se.moreElse || se.buyNovel) &&
              (0, b.jsx)(x.A, {
                nid: W,
                favoriteSave: me,
                setDialogOpen: ae,
                dialogOpen: se,
                textFieldsSettings: le,
                setTextFieldsSettings: oe,
                handleChangeTextSettings: () => {
                  ((() => {
                    const { lang: e } = le;
                    (localStorage.setItem("novelLang", e),
                      D((0, r.y3)({ ncid: Z, lang: e })));
                  })(),
                    oe((e) => {
                      const t = (function (e) {
                        switch (e) {
                          case 0:
                          default:
                            return "text-base";
                          case 25:
                            return "text-lg";
                          case 50:
                            return "text-xl";
                          case 75:
                            return "text-2xl";
                          case 100:
                            return "text-3xl";
                        }
                      })(e.wordValue);
                      return (
                        localStorage.setItem(
                          "novelFontSizeClass",
                          JSON.stringify({
                            newWordValue: le.wordValue,
                            newFontSizeClass: t,
                          }),
                        ),
                        (0, a.A)(
                          (0, a.A)({}, e),
                          {},
                          { confirm: !0, fontSizeClass: t },
                        )
                      );
                    }),
                    setTimeout(() => {
                      oe((e) => (0, a.A)((0, a.A)({}, e), {}, { confirm: !1 }));
                    }, 1e3));
                },
                handleEngagementAction: Ae,
                handleDecensored: async () => {
                  if (!_) return void H(z("login.please_login"), "error");
                  const e = await D((0, r.Cl)({ id: xe })).unwrap(),
                    { status: t, msg: s } = e;
                  if ((H(s, "ok" !== t ? "error" : "success"), "ok" === t)) {
                    const e = await D((0, r.Pb)({ nid: W })).unwrap();
                    if (e) {
                      var a, n;
                      "1" ===
                        (null === e ||
                        void 0 === e ||
                        null === (a = e.series) ||
                        void 0 === a ||
                        null === (n = a.find((e) => e.NCID === xe)) ||
                        void 0 === n
                          ? void 0
                          : n.is_buy_ok) &&
                        L(
                          "/novels/detail/read?nid="
                            .concat(W, "&ncid=")
                            .concat(xe, "&title=")
                            .concat(
                              encodeURIComponent(
                                null === R || void 0 === R ? void 0 : R.name,
                              ),
                              "&filter=",
                            )
                            .concat(B),
                        );
                    }
                  }
                },
              }),
            (se.login || se.signUp || se.forgot) &&
              !_ &&
              (0, b.jsx)(g.A, {
                setFormData: ee,
                formData: $,
                setConfig: k,
                logined: _,
                isLoading: V,
                setDialogOpen: ae,
                dialogOpen: se,
                showSnackbar: H,
              }),
            se.folder &&
              (0, b.jsx)(O.A, {
                folderList: M.folder_list,
                dialogOpen: se,
                setDialogOpen: ae,
                editFolder: ie,
                setEditFolder: ce,
                handleEditFolder: async (e) => {
                  (de(!0),
                    "del" === e &&
                      ae((0, a.A)((0, a.A)({}, se), {}, { alert: !0 })));
                  const { folder_id: t, folder_name: s, aid: n } = ie;
                  if ("" !== s) {
                    const a = await D(
                        (0, r.iC)({
                          type: e,
                          folder_id: t,
                          folder_name: s,
                          nid: n,
                        }),
                      ).unwrap(),
                      { status: l, msg: o } = a;
                    l && o && H(o, "ok" !== l ? "error" : "success");
                  } else H(z("comic.added_to_favorites_success"), "success");
                  ce((e) => (0, a.A)((0, a.A)({}, e), p.x));
                },
                tagsList: [],
              }),
            (0, b.jsx)(u.A, {}),
            (0, b.jsx)(f.A, { snackbars: J, setSnackbars: U }),
          ],
        });
      };
    },
    501: (e, t, s) => {
      s.d(t, { A: () => l });
      var a = s(9662),
        n = s(579);
      const l = (0, a.A)(
        [
          (0, n.jsx)(
            "path",
            { d: "M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" },
            "0",
          ),
          (0, n.jsx)(
            "path",
            { d: "m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" },
            "1",
          ),
        ],
        "KeyboardDoubleArrowRight",
      );
    },
  },
]);
//# sourceMappingURL=2106.671086a3.chunk.js.map
