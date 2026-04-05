"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [6760],
  {
    8028: (e, t, s) => {
      s.d(t, { A: () => g });
      var a = s(9379),
        l = s(5043),
        r = s(6148),
        i = s(5874),
        o = s(5360),
        n = s(7044),
        d = s(2873),
        c = s(223),
        m = s(5090),
        x = s(1020),
        p = s(579);
      const h = (e) => {
          const {
            t: t,
            logined: s,
            setDialogOpen: l,
            dialogOpen: r,
            responds: o,
          } = e;
          return (0, p.jsxs)("div", {
            className:
              "sticky bottom-0 bg-bbk h-20 flex items-center justify-center",
            children: [
              (0, p.jsx)("input", {
                type: "text",
                maxLength: 200,
                placeholder: t("forum.start_new_topic"),
                className: "w-10/12 h-10 rounded p-2 outline-none dark:bg-bk",
                value: o.newTopic,
                onChange: () =>
                  l(
                    (0, a.A)(
                      (0, a.A)({}, r),
                      {},
                      { [s ? "newTopic" : "login"]: !0 },
                    ),
                  ),
                onClick: () =>
                  l(
                    (0, a.A)(
                      (0, a.A)({}, r),
                      {},
                      { [s ? "newTopic" : "login"]: !0 },
                    ),
                  ),
              }),
              (0, p.jsx)("button", {
                className: "rounded-full bg-og p-2 ml-2",
                children: (0, p.jsx)(i.A, {
                  sx: {
                    color: "white",
                    fontSize: 18,
                    stroke: "white",
                    strokeWidth: 1,
                  },
                }),
              }),
            ],
          });
        },
        g = (e) => {
          const {
              t: t,
              logined: s,
              queryId: i,
              setting: g,
              dialogOpen: u,
              setDialogOpen: b,
              showSnackbar: j,
              bottomTopicInput: f,
              centerTopicInput: A,
            } = e,
            y = (0, m.zk)(),
            v = y[2].text_section[0].content.slice(0, 7),
            { forumList: k, isLoading: N } = (0, r.G)((e) => e.forum),
            w = (0, r.j)(),
            [_, C] = (0, l.useState)(null),
            [S, z] = (0, l.useState)(0),
            [T, L] = (0, l.useState)({
              newTopic: "",
              spoilers: !1,
              activeIndex: null,
              comment: "",
              comment_id: "",
              aid: i,
            }),
            I = function () {
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
                    : "all",
                a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                l =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 1,
                r =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : i;
              (w((0, c.Ah)({ isLoading: !0, isLoadMore: e, isRefreshing: t })),
                e || (w((0, c.f9)("forumList")), z(1)),
                setTimeout(() => {
                  w((0, d.e)({ mode: s, page: l, aid: r }));
                }, a));
            };
          return (
            (0, l.useEffect)(() => {
              i && (I(), sessionStorage.setItem("forumFrom", "detail"));
            }, [i]),
            (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsxs)("div", {
                  className: "text-gy dark:bg-bk dark:text-tgy",
                  children: [
                    (0, p.jsxs)("div", {
                      className:
                        "bg-white flex justify-center text-bbk py-4 dark:text-tgy dark:bg-bbk",
                      children: [
                        y[2].text_section[0].content[0].slice(0, 3),
                        (0, p.jsx)("span", {
                          children: (0, p.jsx)("button", {
                            onClick: (e) => C(e.currentTarget),
                            className: "text-og font-bold p-0 ml-1",
                            children: y[2].text_section[0].content[0].slice(
                              3,
                              9,
                            ),
                          }),
                        }),
                        y[2].text_section[0].content[0].slice(9, 30),
                      ],
                    }),
                    A &&
                      (0, p.jsx)(h, {
                        t: t,
                        logined: s,
                        dialogOpen: u,
                        setDialogOpen: b,
                        responds: T,
                      }),
                    (0, p.jsx)(p.Fragment, {
                      children: (0, p.jsx)(o.A, {
                        t: t,
                        logined: s,
                        setting: g,
                        list: null === k || void 0 === k ? void 0 : k.list,
                        isLoading: N,
                        dialogOpen: u,
                        setDialogOpen: b,
                        responds: T,
                        setResponds: L,
                        page: S,
                        setPage: z,
                        loadList: I,
                        showSnackbar: j,
                      }),
                    }),
                  ],
                }),
                f &&
                  (0, p.jsx)(h, {
                    t: t,
                    logined: s,
                    dialogOpen: u,
                    setDialogOpen: b,
                    responds: T,
                  }),
                (0, p.jsx)(x.Ay, {
                  open: Boolean(_),
                  anchorEl: _,
                  onClose: () => C(null),
                  anchorOrigin: { vertical: "bottom", horizontal: "center" },
                  transformOrigin: { vertical: "top", horizontal: "center" },
                  children: (0, p.jsxs)("div", {
                    className: "p-3 text-gy dark:text-[#bbb] dark:bg-nbk",
                    children: [
                      (0, p.jsxs)("p", {
                        className: "border-b py-2",
                        children: [
                          " ",
                          y[3].text_section[0].content[0].slice(3, 9),
                        ],
                      }),
                      (0, p.jsx)("div", {
                        className: "py-2",
                        children: v
                          .slice(1, 10)
                          .map((e) => (0, p.jsx)("p", { children: e }, e)),
                      }),
                    ],
                  }),
                }),
                u.newTopic &&
                  (0, p.jsx)(n.A, {
                    queryId: i,
                    setDialogOpen: b,
                    dialogOpen: u,
                    responds: T,
                    setResponds: L,
                    handleSendNewTopic: async () => {
                      const { newTopic: e, aid: t } = T;
                      if (u.newTopic && "" !== e) {
                        const s = await w(
                          (0, d.T)({ comment: e, aid: t }),
                        ).unwrap();
                        if (200 === s.code) {
                          const { msg: e, status: t } = s.data;
                          (j(e, "ok" !== t ? "error" : "success"),
                            L((e) =>
                              (0, a.A)(
                                (0, a.A)({}, e),
                                {},
                                { newTopic: "", aid: "" },
                              ),
                            ),
                            b((0, a.A)((0, a.A)({}, u), {}, { newTopic: !1 })));
                        }
                      }
                    },
                  }),
              ],
            })
          );
        };
    },
    1060: (e, t, s) => {
      s.d(t, { A: () => i });
      var a = s(9379),
        l = s(6580),
        r = s(579);
      const i = (e) => {
        const {
          t: t,
          queryId: s,
          seriesGroups: i,
          setSeriesGroups: o,
          msgOpen: n,
          handlerReadStorage: d,
          readHistory: c,
          setDialogOpen: m,
        } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: "p-3 text-gy dark:bg-bk",
            children:
              i.menus.length > 0
                ? i.menus.map((e, x) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        children: [
                          (0, r.jsxs)("p", {
                            className:
                              "flex border-[1px] border-solid border-[#ccc] rounded-md p-3 mb-4 ".concat(
                                i.episode === x
                                  ? "bg-og text-white"
                                  : null !== n &&
                                      void 0 !== n &&
                                      n.detailDownload
                                    ? "bg-defaultBg dark:bg-bbk dark:text-tgy"
                                    : "",
                              ),
                            onClick: () => {
                              o((e) =>
                                (0, a.A)((0, a.A)({}, e), {}, { episode: x }),
                              );
                            },
                            children: [
                              t("detail.episode_prefix"),
                              e[0].sort,
                              t("detail.episode_suffix"),
                              "~",
                              t("detail.episode_prefix"),
                              10 * Math.ceil(e[0].sort / 10),
                              t("detail.episode_suffix"),
                            ],
                          }),
                          i.episode === x &&
                            (0, r.jsx)("div", {
                              className: "grid grid-cols-2 gap-2 my-2 mb-10",
                              children: e.map((e, p) => {
                                var h;
                                return null !== n &&
                                  void 0 !== n &&
                                  n.detailDownload
                                  ? (0, r.jsx)(
                                      l.N_,
                                      {
                                        to: "/comic/detail/download?id=".concat(
                                          e.id,
                                        ),
                                        onClick: () => {
                                          o((t) =>
                                            (0, a.A)(
                                              (0, a.A)({}, t),
                                              {},
                                              {
                                                subEpisode: e.sort,
                                                currentChapterId: e.id,
                                              },
                                            ),
                                          );
                                        },
                                        children: (0, r.jsxs)("p", {
                                          className:
                                            "flex border-[1px] border-solid border-[#bbb] rounded-md p-3 ".concat(
                                              i.subEpisode === e.sort
                                                ? "bg-og text-white"
                                                : "dark:bg-bbk dark:text-tgy",
                                            ),
                                          children: [
                                            t("detail.episode_prefix"),
                                            e.sort,
                                            t("detail.episode_suffix"),
                                            "\xa0",
                                            e.name,
                                          ],
                                        }),
                                      },
                                      p,
                                    )
                                  : (0, r.jsx)(
                                      l.N_,
                                      {
                                        to: "/comic/detail/read?id="
                                          .concat(s, "&readId=")
                                          .concat(e.id, "&episode=")
                                          .concat(x, "&subEpisode=")
                                          .concat(e.sort),
                                        onClick: () => {
                                          (d(s, String(e.id)),
                                            o((t) =>
                                              (0, a.A)(
                                                (0, a.A)({}, t),
                                                {},
                                                {
                                                  subEpisode: e.sort,
                                                  currentChapterId: e.id,
                                                },
                                              ),
                                            ),
                                            m((e) =>
                                              (0, a.A)(
                                                (0, a.A)({}, e),
                                                {},
                                                { series: !1 },
                                              ),
                                            ));
                                        },
                                        children: (0, r.jsxs)("p", {
                                          className:
                                            "flex border-[1px] border-solid border-[#bbb] rounded-md p-3 \n                            ".concat(
                                              i.subEpisode === e.sort
                                                ? "bg-og text-white"
                                                : null !== (h = c[s]) &&
                                                    void 0 !== h &&
                                                    h.includes(e.id)
                                                  ? "bg-white text-og"
                                                  : "",
                                              "\n                                ",
                                            ),
                                          children: [
                                            t("detail.episode_prefix"),
                                            e.sort,
                                            t("detail.episode_suffix"),
                                            "\xa0",
                                            e.name,
                                          ],
                                        }),
                                      },
                                      p,
                                    );
                              }),
                            }),
                        ],
                      },
                      x,
                    ),
                  )
                : (0, r.jsx)("p", {
                    className: "text-center my-8",
                    children: t("detail.no_more_chapters"),
                  }),
          }),
        });
      };
    },
    30: (e, t, s) => {
      s.d(t, { A: () => o });
      var a = s(6910),
        l = s(2220),
        r = s(519),
        i = s(579);
      const o = (e) => {
        const {
            setting: t,
            queryId: s,
            share: o,
            setShare: n,
            showSnackbar: d,
            type: c,
          } = e,
          m = "http://"
            .concat(t.main_web_host, "/")
            .concat(c || "album", "/")
            .concat(s),
          x = "\u5206\u4eab\u8fd9\u7bc7\u6f2b\u756b\uff01";
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(l.A, {
            sx: (e) => ({ color: "#fff", zIndex: e.zIndex.drawer + 1 }),
            open: o,
            onClick: () => n(!o),
            children: (0, i.jsx)("div", {
              className:
                "text-gy rounded-t-3xl w-full bg-[#fafafa] fixed bottom-0 z-[1401] overflow-y-auto transition-all duration-700 h-[50vh] ".concat(
                  o ? "animate-move-up" : "animate-move-down",
                ),
              children: (0, i.jsxs)("div", {
                className: "py-4 z-20",
                children: [
                  (0, i.jsx)("hr", {
                    className: "w-8 border-[1px] border-[#bbb] mx-auto",
                  }),
                  (0, i.jsx)("div", {
                    className: "flex items-center justify-center h-20",
                    children: (0, i.jsx)("p", { children: m }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "w-8/12 flex justify-around items-center mx-auto font-bold text-sm",
                    children: (0, i.jsxs)("button", {
                      className:
                        "border border-solid border-blue-800 rounded-lg px-6 py-1 flex items-center",
                      onClick: () => {
                        navigator.clipboard
                          .writeText(m)
                          .then(() => {
                            (d("copied", "info"),
                              setTimeout(() => {
                                n(!1);
                              }, 1e3));
                          })
                          .catch((e) => {
                            console.error("Failed to copy text: ", e);
                          });
                      },
                      children: [
                        (0, i.jsx)(a.A, {
                          sx: { fontSize: 16, marginRight: 1 },
                        }),
                        (0, i.jsx)("span", { children: "Copy" }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "h-40 flex justify-center items-end",
                    children: (0, i.jsx)("p", {
                      className: "",
                      children: "No recommended people to share with",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "w-full fixed bottom-10 left-0 right-0 flex justify-around",
                    children: [
                      (0, i.jsxs)(r.tD, {
                        url: m,
                        appId: x,
                        className: "flex flex-col items-center",
                        children: [
                          (0, i.jsx)(r.RG, { size: 42, round: !0 }),
                          (0, i.jsx)("span", { children: "Messenger" }),
                        ],
                      }),
                      (0, i.jsxs)(r.Ot, {
                        url: m,
                        subject: x,
                        className: "flex flex-col items-center",
                        children: [
                          (0, i.jsx)(r.aZ, { size: 42, round: !0 }),
                          (0, i.jsx)("span", { children: "Email" }),
                        ],
                      }),
                      (0, i.jsxs)(r.uI, {
                        url: m,
                        title: x,
                        className: "flex flex-col items-center",
                        children: [
                          (0, i.jsx)(r.ik, { size: 42, round: !0 }),
                          (0, i.jsx)("span", { children: "Facebook" }),
                        ],
                      }),
                      (0, i.jsxs)(r.VI, {
                        url: m,
                        title: x,
                        className: "flex flex-col items-center",
                        children: [
                          (0, i.jsx)(r.hZ, { size: 42, round: !0 }),
                          (0, i.jsx)("span", { children: "Telegram" }),
                        ],
                      }),
                      (0, i.jsxs)(r.Kz, {
                        url: m,
                        title: x,
                        className: "flex flex-col items-center",
                        children: [
                          (0, i.jsx)(r.Y4, { size: 42, round: !0 }),
                          (0, i.jsx)("span", { children: "Whatsapp" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    5360: (e, t, s) => {
      s.d(t, { A: () => T });
      var a = s(9379),
        l = s(45),
        r = s(5043),
        i = s(6580),
        o = s(8038),
        n = s(3392),
        d = s(1637),
        c = s(7353),
        m = s(8293),
        x = s(2108),
        p = s(2110),
        h = s(9958),
        g = s(6494),
        u = s(7600),
        b = s(279),
        j = s(1045),
        f = s(7392),
        A = s(4496),
        y = s(2432),
        v = s(5412),
        k = s(2873),
        N = s(5843),
        w = s(6148),
        _ = s(5073),
        C = s(579);
      const S = ["expand"],
        z = (0, x.Ay)((e) => {
          const { expand: t } = e,
            s = (0, l.A)(e, S);
          return (0, C.jsx)(f.A, (0, a.A)({}, s));
        })((e) => {
          let { theme: t } = e;
          return {
            marginLeft: "auto",
            transition: t.transitions.create("transform", {
              duration: t.transitions.duration.shortest,
            }),
            variants: [
              {
                props: (e) => {
                  let { expand: t } = e;
                  return !t;
                },
                style: { transform: "rotate(0deg)" },
              },
              {
                props: (e) => {
                  let { expand: t } = e;
                  return !!t;
                },
                style: { transform: "rotate(180deg)" },
              },
            ],
          };
        }),
        T = (e) => {
          var t, s;
          const {
              t: l,
              setting: x,
              list: S,
              isLoading: T,
              responds: L,
              setResponds: I,
              page: M,
              setPage: O,
              loadList: F,
              showSnackbar: D,
              section: E,
            } = e,
            R = (0, i.Zp)(),
            P = (0, i.zy)(),
            q = (0, w.j)(),
            G = new URLSearchParams(P.search).get("id") || "",
            V =
              null !== (t = P.pathname) && void 0 !== t && t.includes("detail")
                ? G
                : "",
            [H, W] = (0, r.useState)({}),
            [Y, B] = (0, r.useState)((0, v.hb)()),
            [U, J] = (0, r.useState)(""),
            [Z, K] = (0, r.useState)(null),
            [Q, X] = (0, r.useState)(!0),
            { ref: $, inView: ee } = (0, N.Wx)(),
            { forumList: te, isLoadMore: se } = (0, w.G)((e) => e.forum),
            ae = te.total ? Math.ceil(Number(te.total) / 10) : 0,
            le = M <= ae,
            re = () => {
              const e = (0, v.hb)();
              (B(e), J(""), K(null));
            },
            ie = () => {
              U === Y.answer
                ? (K(!0),
                  (async () => {
                    const { comment: e, comment_id: t, aid: s } = L;
                    if ("" !== e && "" !== t) {
                      const l = await q(
                        (0, k.T)({ comment: e, aid: s, comment_id: t }),
                      ).unwrap();
                      if (200 === l.code) {
                        const { msg: e, status: t } = l.data;
                        (D(e, "ok" !== t ? "error" : "success"),
                          I((e) =>
                            (0, a.A)(
                              (0, a.A)({}, e),
                              {},
                              { comment: "", comment_id: "", aid: "" },
                            ),
                          ));
                      }
                    }
                  })(),
                  J(""))
                : (K(!1), J(""));
            },
            oe = (e, t) => {
              W((s) =>
                (0, a.A)((0, a.A)({}, s), {}, { [e]: !s[e], replyArea: t }),
              );
            },
            ne = () => {
              D("".concat(l("novel.report"), "\u6210\u529f"), "success");
            },
            de = (0, r.useCallback)(() => {
              if (!ee || !le) return;
              const e = M + 1;
              (O(e), F(!0, !1, 1e3, "all", e));
            }, [ee, le]);
          return (
            (0, r.useEffect)(() => {
              de();
            }, [ee]),
            (0, C.jsxs)("div", {
              children: [
                (null === S || void 0 === S ? void 0 : S.length) > 0
                  ? S.map((e, t) => {
                      var s, a, r;
                      return (0, C.jsxs)(
                        "div",
                        {
                          className: "text-base mx-2 mt-3",
                          children: [
                            t > 0 &&
                              t % 7 === 0 &&
                              (0, C.jsxs)(p.A, {
                                className: "dark:bg-nbk dark:text-tgy my-3",
                                children: [
                                  (0, C.jsx)(h.A, {
                                    className:
                                      "flex justify-center items-start pb-0",
                                    avatar: (0, C.jsx)(j.A, {
                                      "aria-label": "recipe",
                                      sx: { width: 45, height: 45 },
                                      children: (0, C.jsx)("img", {
                                        src: "".concat(
                                          null === x || void 0 === x
                                            ? void 0
                                            : x.img_host,
                                          "/media/users/nopic-Male.gif",
                                        ),
                                        alt: "avatar" + t,
                                      }),
                                    }),
                                    title: (0, C.jsx)(c.A, {
                                      className: "text-base text-og",
                                      children: l("forum.sponsor_JM"),
                                    }),
                                    subheader: (0, C.jsx)(c.A, {
                                      className: "mt-1 text-base dark:text-tgy",
                                      children: l(
                                        "forum.LV100_click_to_save_forbidden_comics",
                                      ),
                                    }),
                                  }),
                                  (0, C.jsx)("div", {
                                    className: "bg-white py-4 p-2 dark:bg-nbk",
                                    children: (0, C.jsx)("div", {
                                      className:
                                        "w-full flex justify-center flex-row",
                                      children: (0, C.jsx)(o.A, {
                                        adKey: "app_forum_middle",
                                        comicId: V,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            (0, C.jsx)("div", {
                              children: (0, C.jsx)(
                                "div",
                                {
                                  children: (0, C.jsxs)(p.A, {
                                    className: "dark:bg-nbk dark:text-tgy my-3",
                                    children: [
                                      (0, C.jsx)(h.A, {
                                        className:
                                          "flex justify-center items-start pb-0",
                                        avatar: (0, C.jsxs)(c.A, {
                                          className:
                                            "flex flex-col items-center",
                                          children: [
                                            (0, C.jsx)(j.A, {
                                              "aria-label": "recipe",
                                              sx: { width: 45, height: 45 },
                                              children: (0, C.jsx)("img", {
                                                src: ""
                                                  .concat(
                                                    null === x || void 0 === x
                                                      ? void 0
                                                      : x.img_host,
                                                    "/media/users/",
                                                  )
                                                  .concat(e.photo),
                                                alt: e.nickname,
                                                onError: (e) => {
                                                  e.target.src =
                                                    "/images/ic_head.png";
                                                },
                                                width: "100%",
                                                height: "100%",
                                                className: "bg-gy",
                                              }),
                                            }),
                                            (0, C.jsxs)(A.A, {
                                              variant: "body2",
                                              className:
                                                "mt-1 text-base text-lgy dark:text-tgy",
                                              children: [
                                                "Lv.",
                                                e.expinfo.level,
                                              ],
                                            }),
                                          ],
                                        }),
                                        action: (0, C.jsxs)(f.A, {
                                          "aria-label": "settings",
                                          className: "text-og text-sm",
                                          onClick: ne,
                                          children: [
                                            (0, C.jsx)(n.A, {
                                              className: "text-base",
                                            }),
                                            l("novel.report"),
                                          ],
                                        }),
                                        title: (0, C.jsxs)(c.A, {
                                          className:
                                            "flex items-center text-base",
                                          children: [
                                            (0, C.jsx)("p", {
                                              className: "text-og font-bold",
                                              children: e.nickname,
                                            }),
                                            (0, C.jsxs)("span", {
                                              className:
                                                "text-lgy dark:text-tgy",
                                              children: [
                                                "\xa0\xb7\xa0",
                                                e.expinfo.level_name,
                                              ],
                                            }),
                                          ],
                                        }),
                                        subheader: (0, C.jsxs)(c.A, {
                                          children: [
                                            (0, C.jsx)("p", {
                                              className: "dark:text-tgy",
                                              children: e.addtime,
                                            }),
                                            (0, C.jsx)(c.A, {
                                              className:
                                                "mt-2 flex items-center",
                                              children:
                                                null ===
                                                  (s = e.expinfo.badges) ||
                                                void 0 === s
                                                  ? void 0
                                                  : s.map((e, t) =>
                                                      (0, C.jsx)(
                                                        "img",
                                                        {
                                                          src:
                                                            (null === x ||
                                                            void 0 === x
                                                              ? void 0
                                                              : x.img_host) +
                                                            e.content,
                                                          alt: e.name,
                                                          className:
                                                            "w-8 h-8 rounded-full mr-1",
                                                        },
                                                        t,
                                                      ),
                                                    ),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, C.jsx)(g.A, {
                                        className:
                                          "w-[82%] text-gy text-lg flex justify-start ml-auto py-0 dark:text-tgy",
                                        children: (0, C.jsx)("div", {
                                          className:
                                            "w-[80%] break-words whitespace-pre-wrap",
                                          dangerouslySetInnerHTML: {
                                            __html:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.content,
                                          },
                                        }),
                                      }),
                                      (0, C.jsx)("button", {
                                        className:
                                          "text-gy text-sm flex justify-end ml-auto pr-5 dark:text-tgy",
                                        onClick: () =>
                                          ((e) => {
                                            const t = e.split("JM")[1];
                                            G !== t &&
                                              R("/comic/detail?id=".concat(t));
                                          })(e.name),
                                        children: e.name,
                                      }),
                                      (0, C.jsxs)(u.A, {
                                        disableSpacing: !0,
                                        className: "pl-20",
                                        children: [
                                          (0, C.jsx)(f.A, {
                                            "aria-label": "add reply",
                                            className: "text-base dark:text-og",
                                            onClick: () => oe(t, !0),
                                            children: l("novel.reply"),
                                          }),
                                          (null === (a = e.replys) ||
                                          void 0 === a
                                            ? void 0
                                            : a.length) > 0 &&
                                            (0, C.jsxs)(C.Fragment, {
                                              children: [
                                                (0, C.jsx)(f.A, {
                                                  "aria-label": "more reply",
                                                  className:
                                                    "text-base dark:text-og",
                                                  onClick: () => oe(t, !1),
                                                  children:
                                                    l("novel.more_replies"),
                                                }),
                                                (0, C.jsx)(z, {
                                                  expand: H[t],
                                                  onClick: () => oe(t, !1),
                                                  "aria-expanded": H[t],
                                                  "aria-label": "show more",
                                                  children: (0, C.jsx)(m.A, {
                                                    className: "dark:text-og",
                                                  }),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, C.jsxs)(b.A, {
                                        in: H[t],
                                        timeout: "auto",
                                        unmountOnExit: !0,
                                        children: [
                                          H[t] &&
                                            H.replyArea &&
                                            (0, C.jsx)(_.A, {
                                              t: l,
                                              ncid: "",
                                              aid: e.AID,
                                              comment_id: e.CID,
                                              responds: L,
                                              setResponds: I,
                                              problem: Y,
                                              userAnswer: U,
                                              setUserAnswer: J,
                                              handleRegenerateProblem: re,
                                              checkAnswer: ie,
                                            }),
                                          (null === (r = e.replys) ||
                                          void 0 === r
                                            ? void 0
                                            : r.length) > 0 &&
                                            H[t] &&
                                            !H.replyArea &&
                                            e.replys.map((e, t) => {
                                              var s;
                                              return (0, C.jsxs)(
                                                p.A,
                                                {
                                                  className:
                                                    "w-[95%] ml-auto shadow-none dark:bg-nbk dark:text-tgy",
                                                  children: [
                                                    (0, C.jsx)(h.A, {
                                                      className:
                                                        "flex justify-center items-start pb-0",
                                                      avatar: (0, C.jsxs)(c.A, {
                                                        className:
                                                          "flex flex-col items-center",
                                                        children: [
                                                          (0, C.jsx)(j.A, {
                                                            "aria-label":
                                                              "recipe",
                                                            sx: {
                                                              width: 35,
                                                              height: 35,
                                                            },
                                                            children: (0,
                                                            C.jsx)("img", {
                                                              src: ""
                                                                .concat(
                                                                  null === x ||
                                                                    void 0 === x
                                                                    ? void 0
                                                                    : x.img_host,
                                                                  "/media/users/",
                                                                )
                                                                .concat(
                                                                  e.photo,
                                                                ),
                                                              alt: e.nickname,
                                                              onError: (e) => {
                                                                e.target.src =
                                                                  "/images/ic_head.png";
                                                              },
                                                              width: "100%",
                                                              height: "100%",
                                                              className:
                                                                "bg-gy",
                                                            }),
                                                          }),
                                                          (0, C.jsxs)(A.A, {
                                                            variant: "body2",
                                                            className:
                                                              "mt-1 text-sm text-lgy dark:text-tgy",
                                                            children: [
                                                              "Lv.",
                                                              e.expinfo.level,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      action: (0, C.jsxs)(f.A, {
                                                        "aria-label":
                                                          "settings",
                                                        className:
                                                          "text-og text-sm pt-1",
                                                        onClick: ne,
                                                        children: [
                                                          (0, C.jsx)(n.A, {
                                                            className:
                                                              "text-base",
                                                          }),
                                                          l("novel.report"),
                                                        ],
                                                      }),
                                                      title: (0, C.jsxs)(c.A, {
                                                        className:
                                                          "flex items-center",
                                                        children: [
                                                          (0, C.jsx)("p", {
                                                            className:
                                                              "text-og",
                                                            children:
                                                              e.nickname,
                                                          }),
                                                          (0, C.jsxs)("span", {
                                                            className:
                                                              "text-lgy dark:text-tgy",
                                                            children: [
                                                              "\xa0\xb7\xa0",
                                                              e.expinfo
                                                                .level_name,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      subheader: (0, C.jsxs)(
                                                        c.A,
                                                        {
                                                          children: [
                                                            (0, C.jsx)("p", {
                                                              className:
                                                                "dark:text-tgy",
                                                              children:
                                                                e.addtime,
                                                            }),
                                                            (0, C.jsx)(c.A, {
                                                              className:
                                                                "mt-2 flex items-center",
                                                              children:
                                                                null ===
                                                                  (s =
                                                                    e.expinfo
                                                                      .badges) ||
                                                                void 0 === s
                                                                  ? void 0
                                                                  : s.map(
                                                                      (e, t) =>
                                                                        (0,
                                                                        C.jsx)(
                                                                          "img",
                                                                          {
                                                                            src:
                                                                              (null ===
                                                                                x ||
                                                                              void 0 ===
                                                                                x
                                                                                ? void 0
                                                                                : x.img_host) +
                                                                              e.content,
                                                                            alt: e.name,
                                                                            className:
                                                                              "w-8 h-8 rounded-full mr-1",
                                                                          },
                                                                          t,
                                                                        ),
                                                                    ),
                                                            }),
                                                          ],
                                                        },
                                                      ),
                                                    }),
                                                    (0, C.jsx)(g.A, {
                                                      className:
                                                        "w-[82%] text-gy text-lg flex justify-start ml-auto dark:text-tgy pt-0",
                                                      children: (0, C.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "w-[80%] break-words whitespace-pre-wrap",
                                                          dangerouslySetInnerHTML:
                                                            {
                                                              __html: e.content,
                                                            },
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                },
                                                t,
                                              );
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                e.nickname + t,
                              ),
                            }),
                          ],
                        },
                        e.nickname + t,
                      );
                    })
                  : !T &&
                    (0, C.jsx)("p", {
                      className: "text-center my-10",
                      children: l("forum.no_comments_yet"),
                    }),
                "member_comments" !== E &&
                  (0, C.jsx)("button", {
                    ref: $,
                    onClick: de,
                    className: "w-full flex justify-center py-4",
                    children:
                      (null === (s = te.list) || void 0 === s
                        ? void 0
                        : s.length) > 0 &&
                      (le && se
                        ? (0, C.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              (0, C.jsx)(d.A, { color: "inherit", size: 12 }),
                              (0, C.jsx)("p", {
                                className: "ml-2",
                                children: l("comic.pull_to_load"),
                              }),
                            ],
                          })
                        : (0, C.jsx)("p", {
                            className: "text-center",
                            children: l("comic.no_more"),
                          })),
                  }),
                (!Q || (!Z && null !== Z)) &&
                  (0, C.jsx)(y.Fe, {
                    isLogined: Q,
                    setIsLogined: X,
                    isCorrect: Z,
                    setIsCorrect: K,
                    setUserAnswer: J,
                  }),
              ],
            })
          );
        };
    },
    3344: (e, t, s) => {
      s.d(t, { A: () => y });
      var a = s(9379),
        l = s(5043),
        r = s(3438),
        i = s(7392),
        o = s(1906),
        n = s(35),
        d = s(4219),
        c = s(5316),
        m = s(9347),
        x = s(4836),
        p = s(6990),
        h = s(5954),
        g = s(6258),
        u = s(688),
        b = s(9506),
        j = s(4117),
        f = s(579);
      const A = l.forwardRef(function (e, t) {
          return (0, f.jsx)(x.A, (0, a.A)({ direction: "up", ref: t }, e));
        }),
        y = (e) => {
          const {
              dialogOpen: t,
              setDialogOpen: s,
              editFolder: x,
              setEditFolder: y,
              handleEditFolder: v,
              folderList: k,
              tagsList: N,
            } = e,
            [w, _] = (0, l.useState)(null),
            C = Boolean(w),
            { t: S } = (0, j.Bd)(),
            z =
              (null === N || void 0 === N ? void 0 : N.length) > 0 &&
              x.tags_select === N.toString(),
            T = (e, l) => {
              "backdropClick" !== l &&
                s((0, a.A)((0, a.A)({}, t), {}, { folder: !1 }));
            };
          return (0, f.jsx)(f.Fragment, {
            children:
              t.folder &&
              (0, f.jsxs)(n.A, {
                onClose: T,
                "aria-labelledby": "customized-dialog-title",
                open: t.folder,
                TransitionComponent: A,
                className: "text-white",
                slotProps: {
                  backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.3)" } },
                },
                sx: () => ({
                  "& .MuiPaper-root": { paddingY: "1rem", width: "90%" },
                }),
                children: [
                  (0, f.jsx)(i.A, {
                    "aria-label": "close",
                    onClick: T,
                    sx: (e) => ({
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: e.palette.grey[700],
                      stroke: e.palette.grey[700],
                      strokeWidth: 2,
                    }),
                    children: (0, f.jsx)(r.A, {}),
                  }),
                  "add" === x.type &&
                    (0, f.jsx)(d.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: S("member.add_folder"),
                    }),
                  "edit" === x.type &&
                    (0, f.jsx)(d.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: S("member.rename_folder"),
                    }),
                  "move" === x.type &&
                    (0, f.jsx)(d.A, {
                      id: "customized-dialog-title",
                      children: S("member.Select_favorite_folder"),
                    }),
                  (0, f.jsxs)(c.A, {
                    className: "",
                    children: [
                      ("add" === x.type || "edit" === x.type) &&
                        (0, f.jsx)("input", {
                          type: "text",
                          placeholder: S("member.enter_folder_name"),
                          className:
                            "w-11/12 h-10 p-4 border border-solid border-gy",
                          onChange: (e) =>
                            y(
                              (0, a.A)(
                                (0, a.A)({}, x),
                                {},
                                { folder_name: e.target.value },
                              ),
                            ),
                        }),
                      "move" === x.type &&
                        (0, f.jsxs)("div", {
                          children: [
                            (0, f.jsxs)(o.A, {
                              id: "fade-button",
                              "aria-controls": C ? "fade-menu" : void 0,
                              "aria-haspopup": "true",
                              "aria-expanded": C ? "true" : void 0,
                              onClick: (e) => _(e.currentTarget),
                              className:
                                "flex justify-between p-0 w-8/12 text-[#aaa] text-lg",
                              children: [
                                (0, f.jsx)("span", {
                                  className: "pr-10",
                                  children:
                                    x.folder_name || S("member.select_folder"),
                                }),
                                (0, f.jsx)(h.A, {
                                  sx: { color: "#ff6f00", fontSize: 24 },
                                }),
                              ],
                            }),
                            (0, f.jsx)(u.A, {
                              id: "fade-menu",
                              MenuListProps: {
                                "aria-labelledby": "fade-button",
                              },
                              anchorEl: w,
                              open: C,
                              onClose: () => _(null),
                              TransitionComponent: g.A,
                              sx: (e) => ({
                                "& .MuiPaper-root": {
                                  marginTop: e.spacing(0),
                                  marginLeft: e.spacing(-2),
                                  width: "50%",
                                  color: "#757575",
                                },
                              }),
                              children:
                                (null === k || void 0 === k
                                  ? void 0
                                  : k.length) > 0 &&
                                k.map((e, t) =>
                                  (0, f.jsx)(
                                    p.A,
                                    {
                                      onClick: () => {
                                        (_(null),
                                          y(
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
                      (null === N || void 0 === N ? void 0 : N.length) > 0 &&
                        (0, f.jsxs)(f.Fragment, {
                          children: [
                            (0, f.jsx)("hr", {
                              className: "border-2 border-tgy my-4",
                            }),
                            (0, f.jsxs)("div", {
                              className: "text-left",
                              children: [
                                (0, f.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, f.jsx)("p", {
                                      className:
                                        "border-2 border-solid border-og w-5 h-5 flex justify-center items-center overflow-hidden mr-2",
                                      onClick: () => {
                                        const e = z ? "" : N.toString();
                                        y((t) =>
                                          (0, a.A)(
                                            (0, a.A)({}, t),
                                            {},
                                            { tags_select: e },
                                          ),
                                        );
                                      },
                                      children:
                                        z &&
                                        (0, f.jsx)(b.A, {
                                          sx: {
                                            fontSize: 14,
                                            color: "#ff6f00",
                                            stroke: "#ff6f00",
                                            strokeWidth: 2,
                                          },
                                        }),
                                    }),
                                    (0, f.jsx)("span", {
                                      children: S("detail.favorite_all_tags"),
                                    }),
                                  ],
                                }),
                                (0, f.jsx)("div", {
                                  className:
                                    "flex flex-wrap items-center text-gy mt-4 dark:text-gy",
                                  children: N.map((e) => {
                                    var t;
                                    return (0, f.jsx)(
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
                                            l = s.includes(e)
                                              ? s.filter((t) => t !== e)
                                              : [...s, e];
                                          y((e) =>
                                            (0, a.A)(
                                              (0, a.A)({}, e),
                                              {},
                                              {
                                                tags_select: l
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
                  (0, f.jsx)(m.A, {
                    className: "flex justify-center",
                    children: (0, f.jsx)(o.A, {
                      className:
                        "bg-og text-white rounded border-solid border-2 border-og w-8/12",
                      onClick: (e) => {
                        (T(),
                          "add" === x.type && v("add"),
                          "edit" === x.type && v("edit"),
                          "move" === x.type && v("move"));
                      },
                      children: S("member.confirm"),
                    }),
                  }),
                ],
              }),
          });
        };
    },
    6733: (e, t, s) => {
      s.d(t, { A: () => f });
      var a = s(9379),
        l = s(5043),
        r = s(3438),
        i = s(2101),
        o = s(8293),
        n = s(7392),
        d = s(1906),
        c = s(35),
        m = s(4219),
        x = s(5316),
        p = s(9347),
        h = s(4836),
        g = s(1060),
        u = s(3944),
        b = s(579);
      const j = l.forwardRef(function (e, t) {
          return (0, b.jsx)(h.A, (0, a.A)({ direction: "up", ref: t }, e));
        }),
        f = (e) => {
          const {
              t: t,
              logined: s,
              queryId: h,
              detailList: f,
              setSeriesGroups: A,
              seriesGroups: y,
              content: v,
              msgOpen: k,
              setMsgOpen: N,
              handleTracking: w,
              handleSetDontShow: _,
            } = e,
            { config: C } = (0, u.H)(),
            { darkMode: S } = C,
            [z, T] = (0, l.useState)(null),
            L = (e, t) => {
              "backdropClick" !== t &&
                N(
                  (0, a.A)(
                    (0, a.A)({}, k),
                    {},
                    {
                      search: !1,
                      detail: !1,
                      detailDownload: !1,
                      member: !1,
                      readTrack: !1,
                    },
                  ),
                );
            };
          return (0, b.jsxs)(b.Fragment, {
            children: [
              k.search &&
                (0, b.jsxs)(c.A, {
                  onClose: L,
                  "aria-labelledby": "customized-dialog-title",
                  open: k.search,
                  TransitionComponent: j,
                  className: "text-white",
                  sx: () => ({
                    "& .MuiPaper-root": {
                      paddingY: "1rem",
                      width: "90%",
                      background: S ? "#323232" : "",
                      color: S ? "#d1d1d1" : "#323232",
                    },
                  }),
                  children: [
                    (0, b.jsxs)(m.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: [
                        v.title,
                        (0, b.jsx)("hr", {
                          className: "w-9/12 border-[#aaa] m-auto",
                        }),
                      ],
                    }),
                    (0, b.jsxs)(x.A, {
                      className: "text-center py-0",
                      children: [
                        (0, b.jsx)("img", {
                          src: v.image ? v.image : "/images/help_cover.png",
                          alt: "help_cover",
                          className: "w-10/12 m-auto",
                        }),
                        v.text_sections.map((e, t) =>
                          (0, b.jsxs)(
                            "div",
                            {
                              children: [
                                (0, b.jsx)("p", {
                                  className: "font-black mt-3",
                                  children: e.title,
                                }),
                                (0, b.jsx)("span", { children: e.content }),
                                (0, b.jsx)("span", { children: e.example }),
                              ],
                            },
                            t,
                          ),
                        ),
                      ],
                    }),
                    (0, b.jsx)(p.A, {
                      className: "flex justify-center",
                      children: (0, b.jsx)(d.A, {
                        className:
                          "bg-og text-white rounded border-solid border-2 border-og w-8/12",
                        onClick: L,
                        children: v.btn_text,
                      }),
                    }),
                  ],
                }),
              k.detail &&
                (0, b.jsxs)(c.A, {
                  onClose: L,
                  "aria-labelledby": "customized-dialog-title",
                  open: k.detail,
                  TransitionComponent: j,
                  sx: () => ({
                    "& .MuiPaper-root": {
                      paddingY: "1rem",
                      width: "90%",
                      background: S ? "#323232" : "",
                      color: S ? "#d1d1d1" : "#323232",
                    },
                  }),
                  children: [
                    (0, b.jsxs)(m.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: [
                        v.title,
                        (0, b.jsx)("hr", {
                          className: "w-9/12 border-[#aaa] m-auto",
                        }),
                      ],
                    }),
                    (0, b.jsxs)(x.A, {
                      children: [
                        (0, b.jsx)("img", {
                          src: v.image,
                          alt: "help_cover",
                          className: "w-8/12 m-auto",
                        }),
                        (0, b.jsx)("div", {
                          children: v.text_sections.map((e, t) =>
                            (0, b.jsxs)(
                              "div",
                              {
                                className: "mt-2",
                                children: [
                                  (0, b.jsx)("p", {
                                    className: "font-black",
                                    children: e.title,
                                  }),
                                  (0, b.jsx)("span", { children: e.content }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, b.jsx)(p.A, {
                      className: "flex justify-center",
                      children: (0, b.jsx)(d.A, {
                        className:
                          "bg-og text-white rounded border-solid border-2 border-og w-8/12 text-base",
                        onClick: L,
                        children: v.btn_text,
                      }),
                    }),
                  ],
                }),
              k.detailDownload &&
                (0, b.jsxs)(c.A, {
                  onClose: L,
                  "aria-labelledby": "customized-dialog-title",
                  open: k.detailDownload,
                  TransitionComponent: j,
                  sx: () => ({
                    "& .MuiPaper-root": {
                      width: "90%",
                      height: "60%",
                      color: S ? "#d1d1d1" : "",
                      backgroundColor: S ? "#323232" : "",
                    },
                    "& .MuiDialogContent-root": { padding: 0 },
                  }),
                  children: [
                    (0, b.jsx)(m.A, {
                      id: "customized-dialog-title",
                      children: t("detail.select_episode_to_download"),
                    }),
                    (0, b.jsx)(n.A, {
                      "aria-label": "close",
                      onClick: L,
                      sx: (e) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: S ? "#d1d1d1" : e.palette.grey[900],
                      }),
                      children: (0, b.jsx)(r.A, {}),
                    }),
                    (0, b.jsx)(x.A, {
                      children: (0, b.jsx)(g.A, {
                        t: t,
                        queryId: h,
                        detailList: f,
                        seriesGroups: y,
                        setSeriesGroups: A,
                        msgOpen: k,
                      }),
                    }),
                  ],
                }),
              k.member &&
                (0, b.jsxs)(c.A, {
                  onClose: L,
                  "aria-labelledby": "customized-dialog-title",
                  open: k.member,
                  TransitionComponent: j,
                  className: "text-white",
                  sx: () => ({
                    "& .MuiPaper-root": {
                      paddingY: "1rem",
                      width: "90%",
                      margin: "1rem",
                    },
                  }),
                  children: [
                    (0, b.jsx)(m.A, {
                      className: "text-center text-4xl text-og",
                      id: "customized-dialog-title",
                      children: v[0].title,
                    }),
                    (0, b.jsx)(n.A, {
                      "aria-label": "close",
                      onClick: L,
                      sx: (e) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: e.palette.grey[700],
                        stroke: e.palette.grey[700],
                        strokeWidth: 2,
                      }),
                      children: (0, b.jsx)(r.A, {}),
                    }),
                    (0, b.jsx)(x.A, {
                      sx: { paddingTop: 0 },
                      children: (0, b.jsx)("div", {
                        children: v[0].text_section.map((e, s) =>
                          (0, b.jsxs)(
                            "div",
                            {
                              className: "mt-3",
                              children: [
                                (0, b.jsxs)("div", {
                                  className:
                                    "bg-og border-1 border-solid border-og text-white text-xl flex justify-between rounded-t-lg p-4",
                                  onClick: () => T(z === s ? null : s),
                                  children: [
                                    (0, b.jsx)("p", {
                                      className: "flex",
                                      children:
                                        Array.isArray(e.FAQ) &&
                                        e.FAQ.map((e, s) =>
                                          (0, b.jsxs)(
                                            l.Fragment,
                                            {
                                              children: [
                                                e,
                                                e.includes(
                                                  t("common_q.jJar"),
                                                ) &&
                                                  (0, b.jsx)("img", {
                                                    src: v[0].list[0].img,
                                                    alt: "jJar",
                                                  }),
                                                e.includes(
                                                  t("common_q.jCharge"),
                                                ) &&
                                                  (0, b.jsx)("img", {
                                                    src: v[0].list[1].img,
                                                    alt: "jCharge",
                                                  }),
                                              ],
                                            },
                                            s,
                                          ),
                                        ),
                                    }),
                                    z === s
                                      ? (0, b.jsx)(i.A, {})
                                      : (0, b.jsx)(o.A, {}),
                                  ],
                                }),
                                z === s
                                  ? (0, b.jsx)("p", {
                                      className:
                                        "text-lg border border-solid border-gy border-t-og p-3",
                                      children: e.content.map((e) =>
                                        (0, b.jsx)(
                                          "span",
                                          {
                                            className: "block ".concat(
                                              1 === s ? "text-center" : "",
                                            ),
                                            children: e,
                                          },
                                          e,
                                        ),
                                      ),
                                    })
                                  : null,
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
              k.readTrack &&
                (0, b.jsxs)(c.A, {
                  onClose: L,
                  "aria-labelledby": "customized-dialog-title",
                  open: k.readTrack,
                  TransitionComponent: j,
                  className: "text-white",
                  sx: (e) => ({
                    "& .MuiPaper-root": {
                      paddingY: "1rem",
                      width: "90%",
                      background: S ? "#323232" : "",
                      color: S ? "#d1d1d1" : e.palette.grey[500],
                    },
                  }),
                  children: [
                    (0, b.jsx)(m.A, {
                      id: "customized-dialog-title",
                      children: t("common_q.finalChapter"),
                    }),
                    (0, b.jsx)(n.A, {
                      "aria-label": "close",
                      onClick: L,
                      sx: (e) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: e.palette.grey[500],
                      }),
                      children: (0, b.jsx)(r.A, {}),
                    }),
                    (0, b.jsx)(x.A, {
                      dividers: !0,
                      className: "py-10",
                      children: t("common_q.stayUpdated"),
                    }),
                    (0, b.jsxs)(p.A, {
                      className: "flex justify-between items-center px-6",
                      children: [
                        (0, b.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, b.jsx)("input", {
                              type: "checkbox",
                              id: "dontShow",
                              name: "dontShow",
                              className: "mr-1",
                              onChange: (e) => _(e),
                            }),
                            (0, b.jsx)("label", {
                              htmlFor: "dontShow",
                              children: t("common_q.dontShow"),
                            }),
                          ],
                        }),
                        (0, b.jsx)(d.A, {
                          className:
                            "bg-og text-white rounded border-solid border-2 border-og w-32",
                          onClick: (e) => {
                            (w(h), s && L());
                          },
                          children: t("common_q.followSeries"),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        };
    },
    5073: (e, t, s) => {
      s.d(t, { A: () => m });
      var a = s(9379),
        l = s(8911),
        r = s(7353),
        i = s(802),
        o = s(2110),
        n = s(6494),
        d = s(7392),
        c = s(579);
      const m = (e) => {
        const {
          t: t,
          aid: s,
          ncid: m,
          comment_id: x,
          responds: p,
          setResponds: h,
          problem: g,
          userAnswer: u,
          setUserAnswer: b,
          handleRegenerateProblem: j,
          checkAnswer: f,
        } = e;
        return (
          console.log(p),
          (0, c.jsx)(o.A, {
            className: "dark:bg-nbk dark:text-tgy",
            children: (0, c.jsxs)(n.A, {
              className: "",
              children: [
                (0, c.jsxs)(r.A, {
                  className: "w-full flex justify-end ml-auto pt-0",
                  children: [
                    (0, c.jsx)("label", { htmlFor: "reply" }),
                    (0, c.jsx)(i.A, {
                      value: p.reply,
                      id: "reply",
                      "aria-label": "reply textarea",
                      minRows: 3,
                      maxLength: 200,
                      placeholder: "\u5206\u4eab\u4f60\u7684\u60f3\u6cd5\u5427",
                      className:
                        "border-2 border-tgy text-base text-lgy w-full rounded-md p-1 focus:border-gray-500 focus:outline-none dark:bg-bbk",
                      onChange: (e) =>
                        h((t) =>
                          (0, a.A)(
                            (0, a.A)({}, t),
                            {},
                            {
                              comment: e.target.value,
                              comment_id: x,
                              ncid: m,
                              aid: s,
                            },
                          ),
                        ),
                    }),
                  ],
                }),
                g.problem
                  ? (0, c.jsxs)(r.A, {
                      className:
                        "flex justify-center items-center text-base pt-4",
                      children: [
                        (0, c.jsxs)("p", {
                          className: "text-2xl",
                          children: [g.problem, " ="],
                        }),
                        (0, c.jsx)("input", {
                          type: "text",
                          id: "captcha-answer",
                          value: u,
                          maxLength: 10,
                          onChange: (e) => b(e.target.value),
                          placeholder: t("detail.enter_answer"),
                          className:
                            "w-28 h-12 text-lgy text-base border-2 border-tgy rounded-md px-2 ml-2 dark:bg-bbk",
                        }),
                        (0, c.jsx)(d.A, {
                          "aria-label": "reset",
                          className: "rounded-full bg-gray-200 ml-2 p-1",
                          onClick: j,
                          children: (0, c.jsx)(l.A, { className: "text-2xl" }),
                        }),
                        (0, c.jsx)("button", {
                          className:
                            "bg-og rounded-md text-white ml-8 py-2 px-5",
                          onClick: () => f(),
                          children: t("detail.responds"),
                        }),
                      ],
                    })
                  : (0, c.jsx)("div", {
                      className: "text-center py-6 text-gray-500",
                      children: "Loading captcha...",
                    }),
              ],
            }),
          })
        );
      };
    },
    3752: (e, t, s) => {
      s.d(t, { A: () => r });
      var a = s(9662),
        l = s(579);
      const r = (0, a.A)(
        (0, l.jsx)("path", {
          d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2",
        }),
        "Bookmark",
      );
    },
    9506: (e, t, s) => {
      s.d(t, { A: () => r });
      var a = s(9662),
        l = s(579);
      const r = (0, a.A)(
        (0, l.jsx)("path", {
          d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
        }),
        "Check",
      );
    },
    3817: (e, t, s) => {
      s.d(t, { A: () => r });
      var a = s(9662),
        l = s(579);
      const r = (0, a.A)(
        (0, l.jsx)("path", {
          d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92",
        }),
        "Share",
      );
    },
    8390: (e, t, s) => {
      s.d(t, { A: () => r });
      var a = s(9662),
        l = s(579);
      const r = (0, a.A)(
        (0, l.jsx)("path", {
          d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z",
        }),
        "Textsms",
      );
    },
  },
]);
//# sourceMappingURL=6760.3fb7d1a5.chunk.js.map
