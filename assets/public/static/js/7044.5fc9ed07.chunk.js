"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [7044],
  {
    7044: (e, t, s) => {
      s.d(t, { A: () => I });
      var r = s(9379),
        l = s(5043),
        i = s(6580),
        o = s(3438),
        a = s(7332),
        n = s(7241),
        c = s(9899),
        d = s(7466),
        x = s(5244),
        m = s(8734),
        g = s(1322),
        h = s(5721),
        p = s(2314),
        u = s(5263),
        b = s(4836),
        j = s(35),
        f = s(4219),
        A = s(7392),
        y = s(5316),
        k = s(4496),
        N = s(9347),
        w = s(1906),
        C = s(3217),
        v = s(7353),
        _ = s(9070),
        S = s(3147),
        T = s(3944),
        M = s(4117),
        z = s(9011),
        F = s(8038),
        D = s(579);
      const P = l.forwardRef(function (e, t) {
          return (0, D.jsx)(b.A, (0, r.A)({ direction: "up", ref: t }, e));
        }),
        I = (e) => {
          var t;
          const {
              nid: s,
              content: l,
              dialogOpen: b,
              setDialogOpen: I,
              searchConfig: R,
              setSearchConfig: J,
              catList: B,
              setFilter: K,
              filter: L,
              responds: Y,
              setResponds: E,
              handleSendNewTopic: V,
              handlerSearch: O,
              dailyImgs: W,
              handleDecensored: H,
              readImgSource: q,
              textFieldsSettings: G,
              setTextFieldsSettings: Q,
              handleChangeTextSettings: U,
              handleEngagementAction: X,
              favoriteSave: Z,
            } = e,
            { setConfig: $, config: ee } = (0, T.H)(),
            { setting: te, logined: se, memberInfo: re } = ee,
            { t: le } = (0, M.Bd)(),
            ie = le("cat_sort.more_cat", { returnObjects: !0 }),
            oe = localStorage.getItem("imageSource"),
            ae = (0, z.S0)(3e3),
            ne = (e) => {
              ($(
                "0" === e
                  ? (t) =>
                      (0, r.A)(
                        (0, r.A)({}, t),
                        {},
                        { express: "on", app_img_shunt: e },
                      )
                  : (t) => (0, r.A)((0, r.A)({}, t), {}, { app_img_shunt: e }),
              ),
                localStorage.setItem("imageSource", e));
            },
            ce = (e, t) => {
              (e.preventDefault(),
                "backdropClick" !== t &&
                  I(
                    (0, r.A)(
                      (0, r.A)({}, b),
                      {},
                      {
                        imageSource: !1,
                        search: !1,
                        readSource: !1,
                        catMore: !1,
                        newTopic: !1,
                        notifAds: !1,
                        dailyImg: !1,
                        buyComic: !1,
                        watchAds: !1,
                        textFields: !1,
                        moreElse: !1,
                        buyNovel: !1,
                      },
                    ),
                  ));
            },
            de = [
              { value: 0, label: "\u6975\u5c0f" },
              { value: 25, label: "\u5c0f" },
              { value: 50, label: "\u4e00\u822c" },
              { value: 75, label: "\u5927" },
              { value: 100, label: "\u8d85\u5927" },
            ];
          return (0, D.jsxs)(D.Fragment, {
            children: [
              (b.imageSource || b.readSource) &&
                (0, D.jsxs)(j.A, {
                  onClose: ce,
                  "aria-labelledby": "customized-dialog-title",
                  open: b.imageSource || b.readSource,
                  TransitionComponent: P,
                  sx: (e) => ({
                    "& .MuiPaper-root": {
                      width: "90%",
                      backgroundColor: e.palette.grey[900],
                      borderRadius: b.readSource ? "2rem" : "",
                      background: b.readSource ? "#3f3f3f" : "",
                    },
                  }),
                  children: [
                    (0, D.jsxs)(f.A, {
                      sx: { m: 0, p: 2 },
                      className: "text-white text-center",
                      id: "customized-dialog-title",
                      children: [
                        b.imageSource && le("modal.enhance_experience"),
                        b.readSource && le("setting.switch_image_source"),
                      ],
                    }),
                    (0, D.jsx)(A.A, {
                      "aria-label": "close",
                      onClick: ce,
                      sx: (e) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: e.palette.grey[100],
                      }),
                      children: (0, D.jsx)(o.A, {}),
                    }),
                    b.imageSource &&
                      (0, D.jsxs)(D.Fragment, {
                        children: [
                          (0, D.jsx)(y.A, {
                            dividers: !0,
                            children: (0, D.jsx)(k.A, {
                              gutterBottom: !0,
                              className:
                                "grid grid-cols-4 gap-4 p-2 text-white text-center",
                              children:
                                Array.isArray(te.app_shunts) &&
                                te.app_shunts.map((e) =>
                                  (0, D.jsx)(
                                    "span",
                                    {
                                      className:
                                        "border-[1px] border-og py-3 rounded \n                    ".concat(
                                          (Number(oe) || 1) === e.key
                                            ? "bg-og"
                                            : "",
                                        ),
                                      onClick: (t) => {
                                        (ne(e.key.toString()), ce(t));
                                      },
                                      children: e.title,
                                    },
                                    e.key,
                                  ),
                                ),
                            }),
                          }),
                          (0, D.jsx)(N.A, {
                            className: "flex justify-center mb-4",
                            children: (0, D.jsx)(w.A, {
                              className:
                                "bg-og text-white rounded border-solid border-2 border-og px-6",
                              onClick: ce,
                              children: le("modal.i_feel_fast_now"),
                            }),
                          }),
                        ],
                      }),
                    b.readSource &&
                      (0, D.jsxs)(y.A, {
                        children: [
                          (0, D.jsx)(F.A, { adKey: "app_speed" }),
                          Array.isArray(q) &&
                            q.map((e) =>
                              (0, D.jsx)(
                                w.A,
                                {
                                  className:
                                    "w-full text-white rounded border-solid border-2 border-og mt-4 \n                   ".concat(
                                      (Number(oe) || 1) === e.key
                                        ? "bg-og"
                                        : "",
                                    ),
                                  onClick: (t) => {
                                    (ne(e.key.toString()), ce(t));
                                  },
                                  children: e.title,
                                },
                                e.key,
                              ),
                            ),
                        ],
                      }),
                  ],
                }),
              b.search &&
                (0, D.jsxs)(j.A, {
                  onClose: ce,
                  "aria-labelledby": "customized-dialog-title",
                  open: b.search,
                  TransitionComponent: P,
                  sx: (e) => ({
                    "& .MuiPaper-root": {
                      width: "90%",
                      backgroundColor: e.palette.grey[900],
                    },
                  }),
                  children: [
                    (0, D.jsx)(f.A, {
                      sx: { m: 0, p: 2 },
                      className: "text-white text-center",
                      id: "customized-dialog-title",
                      children: le("cat_sort.sort_by"),
                    }),
                    (0, D.jsx)(A.A, {
                      "aria-label": "close",
                      onClick: ce,
                      sx: (e) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: e.palette.grey[100],
                      }),
                      children: (0, D.jsx)(o.A, {}),
                    }),
                    (0, D.jsx)(y.A, {
                      dividers: !0,
                      children: (0, D.jsx)(k.A, {
                        gutterBottom: !0,
                        className:
                          "grid grid-cols-4 gap-4 p-2 text-white text-center",
                        children: l.map((e, t) =>
                          (0, D.jsx)(
                            "span",
                            {
                              className:
                                "border-[1px] border-og py-3 rounded ".concat(
                                  R.sort.title === e.title ? "bg-og" : "",
                                ),
                              onClick: (t) => {
                                (J((t) =>
                                  (0, r.A)(
                                    (0, r.A)({}, t),
                                    {},
                                    { start: !0, sort: e },
                                  ),
                                ),
                                  O(R.query, e.key),
                                  ce(t),
                                  sessionStorage.setItem(
                                    "searchSort",
                                    e.title,
                                  ));
                              },
                              children: e.title,
                            },
                            t,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
              b.catMore &&
                (0, D.jsxs)(j.A, {
                  fullScreen: !0,
                  open: b.catMore,
                  onClose: ce,
                  sx: () => ({ "& .MuiPaper-root": { background: "#ededed" } }),
                  children: [
                    (0, D.jsx)(p.A, {
                      className: "relative",
                      children: (0, D.jsx)(u.A, {
                        className: "bg-nbk flex items-center",
                        children: (0, D.jsxs)(A.A, {
                          edge: "start",
                          color: "inherit",
                          onClick: ce,
                          "aria-label": "close",
                          children: [
                            (0, D.jsx)(a.A, {
                              sx: {
                                color: "white",
                                fontSize: 24,
                                stroke: "white",
                                strokeWidth: 1,
                                marginRight: 2,
                              },
                            }),
                            (0, D.jsx)(k.A, {
                              className: "ml-2 text-lg",
                              children: le("cat_sort.more_categories"),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, D.jsxs)(h.A, {
                      className: "mt-4",
                      children: [
                        (0, D.jsxs)("div", {
                          className: "bg-white pt-3 my-3",
                          children: [
                            (0, D.jsx)(k.A, {
                              className: "ml-4 text-lg",
                              children: le("search.popular_adult_topics"),
                            }),
                            (0, D.jsx)(g.Ay, {
                              className: "grid grid-cols-4 gap-x-2",
                              children: B.tags.map((e) =>
                                (0, D.jsx)(
                                  i.N_,
                                  {
                                    to: "/search?filter=".concat(e),
                                    onClick: (e) => {
                                      setTimeout(() => {
                                        ce(e, "clickaway");
                                      }, 0);
                                    },
                                    children: (0, D.jsx)(m.A, {
                                      primary: e,
                                      slotProps: {
                                        primary: {
                                          className:
                                            "truncate text-center overflow-hidden text-ellipsis whitespace-nowrap border border-tgy p-2",
                                        },
                                      },
                                    }),
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                        Array.isArray(ie) &&
                          ie.map((e, t) => {
                            var s;
                            return (0, D.jsxs)(
                              "div",
                              {
                                className: "bg-white pt-3 my-3",
                                children: [
                                  (0, D.jsx)(k.A, {
                                    className: "ml-4 text-lg",
                                    children: e,
                                  }),
                                  (0, D.jsx)(g.Ay, {
                                    className: "grid grid-cols-4 gap-x-2",
                                    children:
                                      0 === t
                                        ? (null === (s = B.cat) || void 0 === s
                                            ? void 0
                                            : s.length) > 0 &&
                                          B.cat.map((e) =>
                                            (0, D.jsx)(
                                              "div",
                                              {
                                                onClick: (t) => {
                                                  (K(
                                                    (0, r.A)(
                                                      (0, r.A)({}, L),
                                                      {},
                                                      { slug: e.slug },
                                                    ),
                                                  ),
                                                    setTimeout(() => {
                                                      ce(t, "escapeKeyDown");
                                                    }, 0));
                                                },
                                                children: (0, D.jsx)(m.A, {
                                                  primary: e.name,
                                                  className:
                                                    "text-center border-[1px] border-solid border-tgy p-2",
                                                }),
                                              },
                                              e.slug,
                                            ),
                                          )
                                        : B.ranking.map((e) =>
                                            (0, D.jsx)(
                                              "div",
                                              {
                                                onClick: (t) => {
                                                  (K(
                                                    (0, r.A)(
                                                      (0, r.A)({}, L),
                                                      {},
                                                      { sort: e.key },
                                                    ),
                                                  ),
                                                    setTimeout(() => {
                                                      ce(t, "clickaway");
                                                    }, 0));
                                                },
                                                children: (0, D.jsx)(m.A, {
                                                  primary: e.title,
                                                  className:
                                                    "text-center border-[1px] border-solid border-tgy p-2",
                                                }),
                                              },
                                              e.key,
                                            ),
                                          ),
                                  }),
                                ],
                              },
                              e,
                            );
                          }),
                        (null === (t = B.blocks) || void 0 === t
                          ? void 0
                          : t.length) > 0 &&
                          B.blocks.map((e) =>
                            (0, D.jsxs)(
                              "div",
                              {
                                className: "bg-white pt-3 my-3",
                                children: [
                                  (0, D.jsx)(k.A, {
                                    className: "ml-4 text-lg",
                                    children: e.title,
                                  }),
                                  (0, D.jsx)(g.Ay, {
                                    className: "grid grid-cols-4 gap-x-2",
                                    children: e.content.map((e) =>
                                      (0, D.jsx)(
                                        i.N_,
                                        {
                                          to: "/search?filter=".concat(e),
                                          onClick: (e) => {
                                            setTimeout(() => {
                                              ce(e, "clickaway");
                                            }, 0);
                                          },
                                          children: (0, D.jsx)(m.A, {
                                            primary: e,
                                            className:
                                              "text-center border-[1px] border-solid border-tgy p-2",
                                          }),
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                ],
                              },
                              e.title,
                            ),
                          ),
                      ],
                    }),
                  ],
                }),
              b.newTopic &&
                (0, D.jsxs)(j.A, {
                  fullScreen: !0,
                  open: b.newTopic,
                  onClose: ce,
                  TransitionComponent: P,
                  sx: { "& .MuiPaper-root": { background: "#ededed" } },
                  children: [
                    (0, D.jsx)(p.A, {
                      position: "sticky",
                      className: "pt-safe",
                      children: (0, D.jsxs)(u.A, {
                        className:
                          "min-h-20 bg-nbk flex justify-between items-center",
                        children: [
                          (0, D.jsxs)(A.A, {
                            edge: "start",
                            color: "inherit",
                            onClick: ce,
                            "aria-label": "close",
                            children: [
                              (0, D.jsx)(a.A, {
                                sx: {
                                  color: "white",
                                  fontSize: 24,
                                  stroke: "white",
                                  strokeWidth: 1,
                                  marginRight: 2,
                                },
                              }),
                              (0, D.jsx)(k.A, {
                                className: "text-lg",
                                children: le("forum.start_new_topic"),
                              }),
                            ],
                          }),
                          (0, D.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-5/12",
                            children: [
                              (0, D.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, D.jsx)(C.A, {
                                    inputProps: {
                                      "aria-label": "spoilers checkbox",
                                    },
                                    checked: Y.spoilers,
                                    sx: {
                                      color: S.A.white,
                                      "&.Mui-checked": { color: S.A.white },
                                      "& .MuiSvgIcon-root": { fontSize: 22 },
                                    },
                                    onClick: () =>
                                      E(
                                        (0, r.A)(
                                          (0, r.A)({}, Y),
                                          {},
                                          { spoilers: !Y.spoilers },
                                        ),
                                      ),
                                  }),
                                  (0, D.jsx)(k.A, {
                                    className: "text-lg",
                                    children: le("forum.spoiler_alert"),
                                  }),
                                ],
                              }),
                              (0, D.jsx)(w.A, {
                                className: "text-lg ".concat(
                                  "" !== Y.newTopic ? "text-og" : "text-white",
                                ),
                                disabled: "" === Y.newTopic,
                                onClick: () => V(),
                                children: le("forum.publish"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, D.jsx)(h.A, {
                      className: "text-gy",
                      children: (0, D.jsx)(g.Ay, {
                        className: "",
                        children: (0, D.jsx)("textarea", {
                          className:
                            "bg-defaultBg text-lg w-full h-screen outline-none py-3",
                          placeholder: le("forum.saySomething"),
                          maxLength: 200,
                          value: Y.newTopic,
                          onChange: (e) =>
                            E(
                              (0, r.A)(
                                (0, r.A)({}, Y),
                                {},
                                { newTopic: e.target.value },
                              ),
                            ),
                        }),
                      }),
                    }),
                    (0, D.jsx)("div", {
                      className: "fixed bottom-14 left-0 right-0",
                      children: (0, D.jsx)(F.A, {
                        adKey: "app_forum_new_theme_bottom",
                      }),
                    }),
                  ],
                }),
              b.notifAds &&
                (0, D.jsxs)(j.A, {
                  onClose: ce,
                  "aria-labelledby": "customized-dialog-title",
                  open: b.notifAds,
                  TransitionComponent: P,
                  sx: {
                    "& .MuiPaper-root": {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    },
                    "& .MuiDialogContent-root": {
                      backgroundColor: "transparent",
                      padding: 0,
                    },
                    "& .MuiDialogActions-root": {
                      backgroundColor: "transparent",
                    },
                  },
                  children: [
                    (0, D.jsx)(y.A, {
                      children: (0, D.jsx)(F.A, { adKey: "app_user_notice" }),
                    }),
                    (0, D.jsx)(N.A, {
                      className: "flex justify-center mb-4",
                      children: ae
                        ? (0, D.jsx)(w.A, {
                            className:
                              "bg-og text-white rounded border-solid border-2 border-og px-6",
                            onClick: ce,
                            children: "\u95dc\u9589\u5ee3\u544a",
                          })
                        : (0, D.jsx)(w.A, {
                            disabled: !0,
                            className:
                              "bg-gy text-white rounded border-solid border-2 border-tgy px-6",
                            onClick: ce,
                            children: "\u8acb\u7a0d\u5019..",
                          }),
                    }),
                  ],
                }),
              b.dailyImg &&
                (0, D.jsxs)(j.A, {
                  "aria-labelledby": "customized-dialog-title",
                  open: b.dailyImg,
                  TransitionComponent: P,
                  slotProps: {
                    backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.6)" } },
                  },
                  sx: {
                    "& .MuiDialogContent-root": {
                      backgroundColor: "transparent",
                      padding: 0,
                    },
                  },
                  children: [
                    (0, D.jsx)(A.A, {
                      "aria-label": "close",
                      onClick: ce,
                      sx: (e) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: e.palette.grey[100],
                      }),
                      children: (0, D.jsx)(o.A, {}),
                    }),
                    (0, D.jsx)(y.A, {
                      onClick: ce,
                      children:
                        null !== W &&
                        (0, D.jsx)("img", {
                          src: W,
                          alt: "dailyImgs",
                          width: "100%",
                          height: "auto",
                        }),
                    }),
                  ],
                }),
              b.buyComic &&
                (0, D.jsxs)(j.A, {
                  onClose: ce,
                  "aria-labelledby": "customized-dialog-title",
                  open: b.buyComic,
                  TransitionComponent: P,
                  className: "text-white",
                  sx: () => ({
                    "& .MuiPaper-root": {
                      paddingY: "1rem",
                      width: "90%",
                      margin: "1rem",
                    },
                  }),
                  children: [
                    (0, D.jsx)(f.A, {
                      id: "customized-dialog-title",
                      className: "flex justify-center items-end",
                      children: (0, D.jsxs)("p", {
                        className: "text-3xl text-og font-bold",
                        children: ["JCoin", le("detail.exchange")],
                      }),
                    }),
                    (0, D.jsx)(y.A, {
                      sx: { paddingY: 0 },
                      children: (0, D.jsxs)("div", {
                        className: "flex flex-col justify-center items-center",
                        children: [
                          (0, D.jsxs)("div", {
                            className: "flex justify-center items-center",
                            children: [
                              (0, D.jsx)("img", {
                                src: "/images/coin.png",
                                alt: "coin",
                                width: 16,
                              }),
                              (0, D.jsx)("p", {
                                className: "ml-2",
                                children: "100 Jcoin ",
                              }),
                            ],
                          }),
                          (0, D.jsx)("p", {
                            className: "my-2 font-bold",
                            children: le("detail.exchange_uncensored"),
                          }),
                          (0, D.jsxs)("p", {
                            className: "ml-2",
                            children: [
                              "(\u73fe\u6709 ",
                              se ? re.coin : "????",
                              " JCoin)",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, D.jsxs)(N.A, {
                      className: "flex flex-col items-center justify-center",
                      children: [
                        (0, D.jsx)(w.A, {
                          className:
                            "bg-og text-white rounded-xl border-solid border-2 border-og text-lg px-6 my-3",
                          onClick: (e) => {
                            (H(), ce(e));
                          },
                          children: le("member_card.confirm_redeem"),
                        }),
                        (0, D.jsx)(w.A, {
                          className:
                            "text-nbk rounded-xl border-solid border-2 border-og text-lg px-6 ml-0",
                          onClick: ce,
                          children: le("detail.consider"),
                        }),
                      ],
                    }),
                  ],
                }),
              b.watchAds &&
                (0, D.jsx)(j.A, {
                  "aria-labelledby": "customized-dialog-title",
                  open: b.watchAds,
                  TransitionComponent: P,
                  slotProps: {
                    backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.6)" } },
                  },
                  sx: {
                    "& .MuiDialogContent-root": {
                      backgroundColor: "transparent",
                      padding: 0,
                    },
                  },
                  children: (0, D.jsx)(y.A, {
                    onClick: ce,
                    children: (0, D.jsx)(F.A, {
                      adKey: "app_user_notice",
                      closeBtn: !0,
                    }),
                  }),
                }),
              b.textFields &&
                (0, D.jsxs)(j.A, {
                  onClose: ce,
                  "aria-labelledby": "customized-dialog-title",
                  open: b.textFields,
                  TransitionComponent: P,
                  className: "text-white",
                  sx: () => ({
                    "& .MuiPaper-root": {
                      paddingY: "1rem",
                      width: "90%",
                      margin: "1rem",
                      fontSize: "1.25rem",
                    },
                    "& .MuiDialogTitle-root+.css-kw13he-MuiDialogContent-root":
                      { paddingTop: 4 },
                  }),
                  children: [
                    (0, D.jsx)(f.A, {
                      id: "customized-dialog-title",
                      className: "flex justify-start items-center pt-0 pb-2",
                      children: (0, D.jsx)("p", {
                        className: "text-xl text-gy font-bold",
                        children: le("setting.font_language"),
                      }),
                    }),
                    (0, D.jsxs)(y.A, {
                      className:
                        "flex flex-col justify-center items-center pt-4 pb-0",
                      dividers: !0,
                      children: [
                        (0, D.jsx)("p", {
                          className: "text-xl",
                          children: le("setting.font_size"),
                        }),
                        (0, D.jsx)(v.A, {
                          className: "w-5/6 mt-4",
                          children: (0, D.jsx)(_.Ay, {
                            "aria-label": "Restricted values",
                            value: G.wordValue,
                            getAriaValueText: (e) => "".concat(e),
                            step: null,
                            valueLabelDisplay: "auto",
                            valueLabelFormat: (e) => {
                              var t;
                              return (
                                (null === (t = de.find((t) => t.value === e)) ||
                                void 0 === t
                                  ? void 0
                                  : t.label) || e
                              );
                            },
                            marks: de,
                            onChange: (e, t) =>
                              Q((e) =>
                                (0, r.A)((0, r.A)({}, e), {}, { wordValue: t }),
                              ),
                            sx: {
                              color: "#757575",
                              "& .MuiSlider-thumb": {
                                backgroundColor: "#ff5722",
                                width: 15,
                                height: 15,
                                transition: "width 0.2s, height 0.2s",
                                position: "relative",
                                "&:hover": { backgroundColor: "#ff7b00" },
                                "&::before": {
                                  content: '""',
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  width: 6,
                                  height: 6,
                                  backgroundColor: "#ffffff",
                                  borderRadius: "50%",
                                  transform: "translate(-50%, -50%)",
                                },
                              },
                              "& .MuiSlider-rail": {
                                backgroundColor: "#e0e0e0",
                              },
                              "& .MuiSlider-markLabel": {
                                fontSize: "1rem",
                                color: (e) => "#757575",
                                transition: "color 0.3s",
                              },
                            },
                          }),
                        }),
                        (0, D.jsxs)(v.A, {
                          className:
                            "flex flex-col justify-center items-center mt-4",
                          children: [
                            (0, D.jsx)("p", {
                              className: "text-xl",
                              children: le("library.language"),
                            }),
                            (0, D.jsxs)("div", {
                              className: "flex text-gy my-4",
                              children: [
                                (0, D.jsxs)("div", {
                                  className: "mx-2 flex items-center",
                                  children: [
                                    (0, D.jsx)("input", {
                                      type: "radio",
                                      name: "lang",
                                      id: "tw",
                                      className: "peer hidden",
                                      value: "tw",
                                      checked: "tw" === G.lang,
                                      onChange: (e) =>
                                        Q((t) =>
                                          (0, r.A)(
                                            (0, r.A)({}, t),
                                            {},
                                            { lang: e.target.value },
                                          ),
                                        ),
                                    }),
                                    (0, D.jsx)("label", {
                                      htmlFor: "tw",
                                      className:
                                        "mx-2 inline-flex items-center justify-center w-4 h-4 border-2 border-gray-400 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white",
                                    }),
                                    (0, D.jsx)("label", {
                                      htmlFor: "tw",
                                      children: le(
                                        "setting.traditional_chinese",
                                      ),
                                    }),
                                  ],
                                }),
                                (0, D.jsxs)("div", {
                                  className: "mx-2 flex items-center",
                                  children: [
                                    (0, D.jsx)("input", {
                                      type: "radio",
                                      name: "lang",
                                      id: "cn",
                                      className: "peer hidden",
                                      value: "cn",
                                      checked: "cn" === G.lang,
                                      onChange: (e) =>
                                        Q((t) =>
                                          (0, r.A)(
                                            (0, r.A)({}, t),
                                            {},
                                            { lang: e.target.value },
                                          ),
                                        ),
                                    }),
                                    (0, D.jsx)("label", {
                                      htmlFor: "cn",
                                      className:
                                        "mx-2 inline-flex items-center justify-center w-4 h-4 border-2 border-gray-400 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:ring-2 peer-checked:ring-white",
                                    }),
                                    (0, D.jsx)("label", {
                                      htmlFor: "cn",
                                      children: le(
                                        "setting.simplified_chinese",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, D.jsxs)(N.A, {
                      className: "flex items-center justify-end pb-0",
                      children: [
                        (0, D.jsx)(w.A, {
                          className: "bg-tgy text-nbk rounded-md text-lg px-4",
                          onClick: ce,
                          children: le("member.cancel"),
                        }),
                        (0, D.jsx)(w.A, {
                          className:
                            "bg-og text-white rounded-md border-2 border-og text-lg px-4",
                          onClick: (e) => {
                            (U(), ce(e));
                          },
                          children: le("member.confirm"),
                        }),
                      ],
                    }),
                  ],
                }),
              b.moreElse &&
                (0, D.jsx)(j.A, {
                  open: b.moreElse,
                  onClose: ce,
                  sx: {
                    "& .MuiDialog-paper": {
                      position: "fixed",
                      bottom: 70,
                      left: 0,
                      right: 0,
                      width: "100%",
                      maxWidth: "100%",
                      margin: 0,
                      borderRadius: "0",
                      backgroundColor: "#232323",
                      color: "#fff",
                      boxShadow: "none",
                    },
                  },
                  children: (0, D.jsxs)(y.A, {
                    onClick: ce,
                    className: "flex justify-start items-center p-1 pt-3",
                    children: [
                      (0, D.jsxs)(w.A, {
                        className: "flex flex-col items-center text-white",
                        onClick: (e) => {
                          (ce(e),
                            window.open("https://discord.com/invite/V74p7HM"));
                        },
                        children: [(0, D.jsx)(n.A, {}), le("novel.community")],
                      }),
                      (0, D.jsxs)(w.A, {
                        className: "flex flex-col items-center text-white",
                        onClick: (e) => {
                          (ce(e),
                            window.open(
                              "https://payment.gcomicloveu.org/payments/order/6aa86c8520484331b19d9e7dfd1078cb",
                            ));
                        },
                        children: [(0, D.jsx)(c.A, {}), le("novel.software")],
                      }),
                      (0, D.jsxs)(w.A, {
                        className: "flex flex-col items-center text-white",
                        onClick: (e) => {
                          (X("like", s), ce(e));
                        },
                        children: [
                          Z.like.includes(s)
                            ? (0, D.jsx)(x.A, { className: "text-red-600" })
                            : (0, D.jsx)(d.A, { className: "text-og" }),
                          le("detail.like"),
                        ],
                      }),
                    ],
                  }),
                }),
              b.buyNovel &&
                (0, D.jsxs)(j.A, {
                  onClose: ce,
                  "aria-labelledby": "customized-dialog-title",
                  open: b.buyNovel,
                  TransitionComponent: P,
                  className: "text-white",
                  sx: () => ({
                    "& .MuiPaper-root": {
                      paddingY: "1rem",
                      width: "90%",
                      margin: "1rem",
                    },
                  }),
                  children: [
                    (0, D.jsx)(f.A, {
                      id: "customized-dialog-title",
                      className: "flex justify-center items-end",
                      children: (0, D.jsxs)("p", {
                        className: "text-3xl text-og font-bold",
                        children: ["JCoin", le("detail.exchange")],
                      }),
                    }),
                    (0, D.jsx)(y.A, {
                      sx: { paddingY: 0 },
                      children: (0, D.jsxs)("div", {
                        className: "flex flex-col justify-center items-center",
                        children: [
                          (0, D.jsxs)("div", {
                            className: "flex justify-center items-center",
                            children: [
                              (0, D.jsx)("img", {
                                src: "/images/coin.png",
                                alt: "coin",
                                width: 16,
                              }),
                              (0, D.jsx)("p", {
                                className: "ml-2",
                                children: "100 Jcoin ",
                              }),
                            ],
                          }),
                          (0, D.jsx)("p", {
                            className: "mt-2 font-bold",
                            children: le("novel.preview_latest_chapter"),
                          }),
                          (0, D.jsx)("p", {
                            className: "mb-2 font-bold",
                            children: le("novel.auto_unlock_info"),
                          }),
                          (0, D.jsxs)("p", {
                            className: "",
                            children: [
                              "(\u73fe\u6709 ",
                              se ? re.coin : "????",
                              " JCoin)",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, D.jsxs)(N.A, {
                      className: "flex flex-col items-center justify-center",
                      children: [
                        (0, D.jsx)(w.A, {
                          className:
                            "bg-og text-white rounded-xl border-solid border-2 border-og text-lg px-6 my-3",
                          onClick: (e) => {
                            (H(), ce(e));
                          },
                          children: le("member_card.confirm_redeem"),
                        }),
                        (0, D.jsx)(w.A, {
                          className:
                            "text-nbk rounded-xl border-solid border-2 border-og text-lg px-6 ml-0",
                          onClick: ce,
                          children: le("detail.consider"),
                        }),
                      ],
                    }),
                    (0, D.jsxs)("p", {
                      className: "flex justify-center items-center",
                      children: [
                        le("novel.free_jcoins"),
                        "JCoins:",
                        (0, D.jsxs)("span", {
                          className: "text-og mx-2",
                          children: ["1.", le("novel.daily_checkin")],
                        }),
                        (0, D.jsxs)("span", {
                          className: "text-og",
                          children: ["2.", le("novel.daily_task")],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=7044.5fc9ed07.chunk.js.map
