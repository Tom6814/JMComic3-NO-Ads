"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [6757],
  {
    30: (e, s, t) => {
      t.d(s, { A: () => n });
      var a = t(6910),
        l = t(2220),
        r = t(519),
        i = t(579);
      const n = (e) => {
        const {
            setting: s,
            queryId: t,
            share: n,
            setShare: o,
            showSnackbar: d,
            type: c,
          } = e,
          m = "http://"
            .concat(s.main_web_host, "/")
            .concat(c || "album", "/")
            .concat(t),
          x = "\u5206\u4eab\u8fd9\u7bc7\u6f2b\u756b\uff01";
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(l.A, {
            sx: (e) => ({ color: "#fff", zIndex: e.zIndex.drawer + 1 }),
            open: n,
            onClick: () => o(!n),
            children: (0, i.jsx)("div", {
              className:
                "text-gy rounded-t-3xl w-full bg-[#fafafa] fixed bottom-0 z-[1401] overflow-y-auto transition-all duration-700 h-[50vh] ".concat(
                  n ? "animate-move-up" : "animate-move-down",
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
                                o(!1);
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
    5360: (e, s, t) => {
      t.d(s, { A: () => I });
      var a = t(9379),
        l = t(45),
        r = t(5043),
        i = t(6580),
        n = t(8038),
        o = t(3392),
        d = t(1637),
        c = t(7353),
        m = t(8293),
        x = t(2108),
        h = t(2110),
        g = t(9958),
        u = t(6494),
        p = t(7600),
        b = t(279),
        j = t(1045),
        f = t(7392),
        v = t(4496),
        y = t(2432),
        N = t(5412),
        k = t(2873),
        A = t(5843),
        w = t(6148),
        _ = t(5073),
        S = t(579);
      const L = ["expand"],
        C = (0, x.Ay)((e) => {
          const { expand: s } = e,
            t = (0, l.A)(e, L);
          return (0, S.jsx)(f.A, (0, a.A)({}, t));
        })((e) => {
          let { theme: s } = e;
          return {
            marginLeft: "auto",
            transition: s.transitions.create("transform", {
              duration: s.transitions.duration.shortest,
            }),
            variants: [
              {
                props: (e) => {
                  let { expand: s } = e;
                  return !s;
                },
                style: { transform: "rotate(0deg)" },
              },
              {
                props: (e) => {
                  let { expand: s } = e;
                  return !!s;
                },
                style: { transform: "rotate(180deg)" },
              },
            ],
          };
        }),
        I = (e) => {
          var s, t;
          const {
              t: l,
              setting: x,
              list: L,
              isLoading: I,
              responds: T,
              setResponds: R,
              page: z,
              setPage: M,
              loadList: P,
              showSnackbar: O,
              section: E,
            } = e,
            K = (0, i.Zp)(),
            q = (0, i.zy)(),
            F = (0, w.j)(),
            D = new URLSearchParams(q.search).get("id") || "",
            U =
              null !== (s = q.pathname) && void 0 !== s && s.includes("detail")
                ? D
                : "",
            [G, V] = (0, r.useState)({}),
            [Z, B] = (0, r.useState)((0, N.hb)()),
            [H, J] = (0, r.useState)(""),
            [W, X] = (0, r.useState)(null),
            [Y, $] = (0, r.useState)(!0),
            { ref: Q, inView: ee } = (0, A.Wx)(),
            { forumList: se, isLoadMore: te } = (0, w.G)((e) => e.forum),
            ae = se.total ? Math.ceil(Number(se.total) / 10) : 0,
            le = z <= ae,
            re = () => {
              const e = (0, N.hb)();
              (B(e), J(""), X(null));
            },
            ie = () => {
              H === Z.answer
                ? (X(!0),
                  (async () => {
                    const { comment: e, comment_id: s, aid: t } = T;
                    if ("" !== e && "" !== s) {
                      const l = await F(
                        (0, k.T)({ comment: e, aid: t, comment_id: s }),
                      ).unwrap();
                      if (200 === l.code) {
                        const { msg: e, status: s } = l.data;
                        (O(e, "ok" !== s ? "error" : "success"),
                          R((e) =>
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
                : (X(!1), J(""));
            },
            ne = (e, s) => {
              V((t) =>
                (0, a.A)((0, a.A)({}, t), {}, { [e]: !t[e], replyArea: s }),
              );
            },
            oe = () => {
              O("".concat(l("novel.report"), "\u6210\u529f"), "success");
            },
            de = (0, r.useCallback)(() => {
              if (!ee || !le) return;
              const e = z + 1;
              (M(e), P(!0, !1, 1e3, "all", e));
            }, [ee, le]);
          return (
            (0, r.useEffect)(() => {
              de();
            }, [ee]),
            (0, S.jsxs)("div", {
              children: [
                (null === L || void 0 === L ? void 0 : L.length) > 0
                  ? L.map((e, s) => {
                      var t, a, r;
                      return (0, S.jsxs)(
                        "div",
                        {
                          className: "text-base mx-2 mt-3",
                          children: [
                            s > 0 &&
                              s % 7 === 0 &&
                              (0, S.jsxs)(h.A, {
                                className: "dark:bg-nbk dark:text-tgy my-3",
                                children: [
                                  (0, S.jsx)(g.A, {
                                    className:
                                      "flex justify-center items-start pb-0",
                                    avatar: (0, S.jsx)(j.A, {
                                      "aria-label": "recipe",
                                      sx: { width: 45, height: 45 },
                                      children: (0, S.jsx)("img", {
                                        src: "".concat(
                                          null === x || void 0 === x
                                            ? void 0
                                            : x.img_host,
                                          "/media/users/nopic-Male.gif",
                                        ),
                                        alt: "avatar" + s,
                                      }),
                                    }),
                                    title: (0, S.jsx)(c.A, {
                                      className: "text-base text-og",
                                      children: l("forum.sponsor_JM"),
                                    }),
                                    subheader: (0, S.jsx)(c.A, {
                                      className: "mt-1 text-base dark:text-tgy",
                                      children: l(
                                        "forum.LV100_click_to_save_forbidden_comics",
                                      ),
                                    }),
                                  }),
                                  (0, S.jsx)("div", {
                                    className: "bg-white py-4 p-2 dark:bg-nbk",
                                    children: (0, S.jsx)("div", {
                                      className:
                                        "w-full flex justify-center flex-row",
                                      children: (0, S.jsx)(n.A, {
                                        adKey: "app_forum_middle",
                                        comicId: U,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            (0, S.jsx)("div", {
                              children: (0, S.jsx)(
                                "div",
                                {
                                  children: (0, S.jsxs)(h.A, {
                                    className: "dark:bg-nbk dark:text-tgy my-3",
                                    children: [
                                      (0, S.jsx)(g.A, {
                                        className:
                                          "flex justify-center items-start pb-0",
                                        avatar: (0, S.jsxs)(c.A, {
                                          className:
                                            "flex flex-col items-center",
                                          children: [
                                            (0, S.jsx)(j.A, {
                                              "aria-label": "recipe",
                                              sx: { width: 45, height: 45 },
                                              children: (0, S.jsx)("img", {
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
                                            (0, S.jsxs)(v.A, {
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
                                        action: (0, S.jsxs)(f.A, {
                                          "aria-label": "settings",
                                          className: "text-og text-sm",
                                          onClick: oe,
                                          children: [
                                            (0, S.jsx)(o.A, {
                                              className: "text-base",
                                            }),
                                            l("novel.report"),
                                          ],
                                        }),
                                        title: (0, S.jsxs)(c.A, {
                                          className:
                                            "flex items-center text-base",
                                          children: [
                                            (0, S.jsx)("p", {
                                              className: "text-og font-bold",
                                              children: e.nickname,
                                            }),
                                            (0, S.jsxs)("span", {
                                              className:
                                                "text-lgy dark:text-tgy",
                                              children: [
                                                "\xa0\xb7\xa0",
                                                e.expinfo.level_name,
                                              ],
                                            }),
                                          ],
                                        }),
                                        subheader: (0, S.jsxs)(c.A, {
                                          children: [
                                            (0, S.jsx)("p", {
                                              className: "dark:text-tgy",
                                              children: e.addtime,
                                            }),
                                            (0, S.jsx)(c.A, {
                                              className:
                                                "mt-2 flex items-center",
                                              children:
                                                null ===
                                                  (t = e.expinfo.badges) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.map((e, s) =>
                                                      (0, S.jsx)(
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
                                                        s,
                                                      ),
                                                    ),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, S.jsx)(u.A, {
                                        className:
                                          "w-[82%] text-gy text-lg flex justify-start ml-auto py-0 dark:text-tgy",
                                        children: (0, S.jsx)("div", {
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
                                      (0, S.jsx)("button", {
                                        className:
                                          "text-gy text-sm flex justify-end ml-auto pr-5 dark:text-tgy",
                                        onClick: () =>
                                          ((e) => {
                                            const s = e.split("JM")[1];
                                            D !== s &&
                                              K("/comic/detail?id=".concat(s));
                                          })(e.name),
                                        children: e.name,
                                      }),
                                      (0, S.jsxs)(p.A, {
                                        disableSpacing: !0,
                                        className: "pl-20",
                                        children: [
                                          (0, S.jsx)(f.A, {
                                            "aria-label": "add reply",
                                            className: "text-base dark:text-og",
                                            onClick: () => ne(s, !0),
                                            children: l("novel.reply"),
                                          }),
                                          (null === (a = e.replys) ||
                                          void 0 === a
                                            ? void 0
                                            : a.length) > 0 &&
                                            (0, S.jsxs)(S.Fragment, {
                                              children: [
                                                (0, S.jsx)(f.A, {
                                                  "aria-label": "more reply",
                                                  className:
                                                    "text-base dark:text-og",
                                                  onClick: () => ne(s, !1),
                                                  children:
                                                    l("novel.more_replies"),
                                                }),
                                                (0, S.jsx)(C, {
                                                  expand: G[s],
                                                  onClick: () => ne(s, !1),
                                                  "aria-expanded": G[s],
                                                  "aria-label": "show more",
                                                  children: (0, S.jsx)(m.A, {
                                                    className: "dark:text-og",
                                                  }),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, S.jsxs)(b.A, {
                                        in: G[s],
                                        timeout: "auto",
                                        unmountOnExit: !0,
                                        children: [
                                          G[s] &&
                                            G.replyArea &&
                                            (0, S.jsx)(_.A, {
                                              t: l,
                                              ncid: "",
                                              aid: e.AID,
                                              comment_id: e.CID,
                                              responds: T,
                                              setResponds: R,
                                              problem: Z,
                                              userAnswer: H,
                                              setUserAnswer: J,
                                              handleRegenerateProblem: re,
                                              checkAnswer: ie,
                                            }),
                                          (null === (r = e.replys) ||
                                          void 0 === r
                                            ? void 0
                                            : r.length) > 0 &&
                                            G[s] &&
                                            !G.replyArea &&
                                            e.replys.map((e, s) => {
                                              var t;
                                              return (0, S.jsxs)(
                                                h.A,
                                                {
                                                  className:
                                                    "w-[95%] ml-auto shadow-none dark:bg-nbk dark:text-tgy",
                                                  children: [
                                                    (0, S.jsx)(g.A, {
                                                      className:
                                                        "flex justify-center items-start pb-0",
                                                      avatar: (0, S.jsxs)(c.A, {
                                                        className:
                                                          "flex flex-col items-center",
                                                        children: [
                                                          (0, S.jsx)(j.A, {
                                                            "aria-label":
                                                              "recipe",
                                                            sx: {
                                                              width: 35,
                                                              height: 35,
                                                            },
                                                            children: (0,
                                                            S.jsx)("img", {
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
                                                          (0, S.jsxs)(v.A, {
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
                                                      action: (0, S.jsxs)(f.A, {
                                                        "aria-label":
                                                          "settings",
                                                        className:
                                                          "text-og text-sm pt-1",
                                                        onClick: oe,
                                                        children: [
                                                          (0, S.jsx)(o.A, {
                                                            className:
                                                              "text-base",
                                                          }),
                                                          l("novel.report"),
                                                        ],
                                                      }),
                                                      title: (0, S.jsxs)(c.A, {
                                                        className:
                                                          "flex items-center",
                                                        children: [
                                                          (0, S.jsx)("p", {
                                                            className:
                                                              "text-og",
                                                            children:
                                                              e.nickname,
                                                          }),
                                                          (0, S.jsxs)("span", {
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
                                                      subheader: (0, S.jsxs)(
                                                        c.A,
                                                        {
                                                          children: [
                                                            (0, S.jsx)("p", {
                                                              className:
                                                                "dark:text-tgy",
                                                              children:
                                                                e.addtime,
                                                            }),
                                                            (0, S.jsx)(c.A, {
                                                              className:
                                                                "mt-2 flex items-center",
                                                              children:
                                                                null ===
                                                                  (t =
                                                                    e.expinfo
                                                                      .badges) ||
                                                                void 0 === t
                                                                  ? void 0
                                                                  : t.map(
                                                                      (e, s) =>
                                                                        (0,
                                                                        S.jsx)(
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
                                                                          s,
                                                                        ),
                                                                    ),
                                                            }),
                                                          ],
                                                        },
                                                      ),
                                                    }),
                                                    (0, S.jsx)(u.A, {
                                                      className:
                                                        "w-[82%] text-gy text-lg flex justify-start ml-auto dark:text-tgy pt-0",
                                                      children: (0, S.jsx)(
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
                                                s,
                                              );
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                e.nickname + s,
                              ),
                            }),
                          ],
                        },
                        e.nickname + s,
                      );
                    })
                  : !I &&
                    (0, S.jsx)("p", {
                      className: "text-center my-10",
                      children: l("forum.no_comments_yet"),
                    }),
                "member_comments" !== E &&
                  (0, S.jsx)("button", {
                    ref: Q,
                    onClick: de,
                    className: "w-full flex justify-center py-4",
                    children:
                      (null === (t = se.list) || void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                      (le && te
                        ? (0, S.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              (0, S.jsx)(d.A, { color: "inherit", size: 12 }),
                              (0, S.jsx)("p", {
                                className: "ml-2",
                                children: l("comic.pull_to_load"),
                              }),
                            ],
                          })
                        : (0, S.jsx)("p", {
                            className: "text-center",
                            children: l("comic.no_more"),
                          })),
                  }),
                (!Y || (!W && null !== W)) &&
                  (0, S.jsx)(y.Fe, {
                    isLogined: Y,
                    setIsLogined: $,
                    isCorrect: W,
                    setIsCorrect: X,
                    setUserAnswer: J,
                  }),
              ],
            })
          );
        };
    },
    5073: (e, s, t) => {
      t.d(s, { A: () => m });
      var a = t(9379),
        l = t(8911),
        r = t(7353),
        i = t(802),
        n = t(2110),
        o = t(6494),
        d = t(7392),
        c = t(579);
      const m = (e) => {
        const {
          t: s,
          aid: t,
          ncid: m,
          comment_id: x,
          responds: h,
          setResponds: g,
          problem: u,
          userAnswer: p,
          setUserAnswer: b,
          handleRegenerateProblem: j,
          checkAnswer: f,
        } = e;
        return (
          console.log(h),
          (0, c.jsx)(n.A, {
            className: "dark:bg-nbk dark:text-tgy",
            children: (0, c.jsxs)(o.A, {
              className: "",
              children: [
                (0, c.jsxs)(r.A, {
                  className: "w-full flex justify-end ml-auto pt-0",
                  children: [
                    (0, c.jsx)("label", { htmlFor: "reply" }),
                    (0, c.jsx)(i.A, {
                      value: h.reply,
                      id: "reply",
                      "aria-label": "reply textarea",
                      minRows: 3,
                      maxLength: 200,
                      placeholder: "\u5206\u4eab\u4f60\u7684\u60f3\u6cd5\u5427",
                      className:
                        "border-2 border-tgy text-base text-lgy w-full rounded-md p-1 focus:border-gray-500 focus:outline-none dark:bg-bbk",
                      onChange: (e) =>
                        g((s) =>
                          (0, a.A)(
                            (0, a.A)({}, s),
                            {},
                            {
                              comment: e.target.value,
                              comment_id: x,
                              ncid: m,
                              aid: t,
                            },
                          ),
                        ),
                    }),
                  ],
                }),
                u.problem
                  ? (0, c.jsxs)(r.A, {
                      className:
                        "flex justify-center items-center text-base pt-4",
                      children: [
                        (0, c.jsxs)("p", {
                          className: "text-2xl",
                          children: [u.problem, " ="],
                        }),
                        (0, c.jsx)("input", {
                          type: "text",
                          id: "captcha-answer",
                          value: p,
                          maxLength: 10,
                          onChange: (e) => b(e.target.value),
                          placeholder: s("detail.enter_answer"),
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
                          children: s("detail.responds"),
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
    7135: (e, s, t) => {
      (t.r(s), t.d(s, { default: () => R }));
      var a = t(9379),
        l = t(5043),
        r = t(6580),
        i = t(4117),
        n = t(3944),
        o = t(6148),
        d = t(7883),
        c = t(5874),
        m = t(5411),
        x = t(4975),
        h = t(50),
        g = t(579);
      const u = (e) => {
        const { t: s, queryTab: t, related_list: a, setting: l } = e;
        return (0, g.jsx)(x.RC, {
          slidesPerView: 1.5,
          centeredSlides: !1,
          slidesPerGroupSkip: 3,
          grabCursor: !0,
          keyboard: { enabled: !0 },
          scrollbar: !0,
          modules: [h.s3, h.Ze, h.dK],
          className: "mySwiper2",
          children:
            Array.isArray(a) &&
            a.map((e) =>
              (0, g.jsxs)(
                x.qr,
                {
                  className: "p-1",
                  children: [
                    (0, g.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, g.jsxs)("div", {
                          className:
                            "w-full flex items-center overflow-hidden mb-2 ml-2",
                          children: [
                            (0, g.jsx)("img", {
                              src:
                                "" !== e.user_photo
                                  ? ""
                                      .concat(
                                        null === l || void 0 === l
                                          ? void 0
                                          : l.img_host,
                                        "/media/users/",
                                      )
                                      .concat(e.user_photo)
                                  : "".concat(
                                      null === l || void 0 === l
                                        ? void 0
                                        : l.img_host,
                                      "/media/users/nopic-Male.gif",
                                    ),
                              alt: e.id,
                              onError: (e) => {
                                e.target.src = "/images/ic_head.png";
                              },
                              className:
                                "rounded-full object-cover w-10 h-10 m-0",
                            }),
                            (0, g.jsx)("p", {
                              className: "ml-4",
                              children: e.title,
                            }),
                          ],
                        }),
                        (0, g.jsx)(r.N_, {
                          to: "/blogs/detail?tab="
                            .concat(t, "&id=")
                            .concat(e.id),
                          children: (0, g.jsx)("img", {
                            src:
                              (null === l || void 0 === l
                                ? void 0
                                : l.img_host) + decodeURIComponent(e.photo),
                            alt: e.id,
                            loading: "lazy",
                            onLoad: (e) => {
                              e.target.style.opacity = "1";
                            },
                            onError: (e) => {
                              e.target.src = "/images/cover_default.jpg";
                            },
                            width: "100%",
                            height: "auto",
                            className: "object-cover rounded-md h-48",
                            style: {
                              opacity: "0",
                              transition: "opacity 0.5s ease-in-out",
                            },
                          }),
                        }),
                      ],
                    }),
                    (0, g.jsxs)("div", {
                      className: "flex justify-between text-gy text-sm p-2",
                      children: [
                        (0, g.jsxs)("div", {
                          className: "flex",
                          children: [
                            (0, g.jsxs)("p", {
                              className: "",
                              children: [e.total_likes, s("detail.like")],
                            }),
                            (0, g.jsxs)("p", {
                              className: "ml-2",
                              children: [e.total_comments, s("detail.message")],
                            }),
                          ],
                        }),
                        (0, g.jsx)("p", { className: "", children: e.date }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
        });
      };
      var p = t(5244),
        b = t(2782);
      const j = (e) => {
        const { related_comics: s, setting: t } = e;
        return (0, g.jsx)(g.Fragment, {
          children: (0, g.jsx)("div", {
            className: "",
            children: (0, g.jsx)(x.RC, {
              slidesPerView: 3,
              centeredSlides: !1,
              slidesPerGroupSkip: 3,
              grabCursor: !0,
              keyboard: { enabled: !0 },
              scrollbar: !0,
              modules: [h.s3, h.Ze, h.dK],
              className: "mySwiper2",
              children:
                Array.isArray(s) &&
                s.map((e) => {
                  var s;
                  return (0, g.jsxs)(
                    x.qr,
                    {
                      className: "p-2",
                      children: [
                        (0, g.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, g.jsx)(r.N_, {
                              to: "/comic/detail?id=".concat(e.id),
                              children: (0, g.jsx)("img", {
                                src:
                                  (null === t || void 0 === t
                                    ? void 0
                                    : t.img_host) +
                                  "/media/albums/" +
                                  e.id +
                                  "_3x4.jpg?v=" +
                                  e.update_at,
                                alt: e.id,
                                loading: "lazy",
                                onLoad: (e) => {
                                  e.target.style.opacity = "1";
                                },
                                onError: (e) => {
                                  e.target.src = "/images/cover_default.jpg";
                                },
                                width: "100%",
                                height: "auto",
                                className: "object-cover rounded-md",
                                style: {
                                  opacity: "0",
                                  transition: "opacity 0.5s ease-in-out",
                                },
                              }),
                            }),
                            (0, g.jsx)("div", {
                              className:
                                "absolute right-2 top-2 rounded bg-og text-white px-[0.1rem]",
                              children:
                                null === e ||
                                void 0 === e ||
                                null === (s = e.category) ||
                                void 0 === s
                                  ? void 0
                                  : s.title,
                            }),
                            (0, g.jsx)("div", {
                              className:
                                "bg-[rgb(117,117,117,0.6)] absolute left-2 bottom-2 rounded p-[0.1rem]",
                              children: (0, g.jsx)(p.A, {
                                className: "mr-0 text-og",
                              }),
                            }),
                            (0, g.jsx)("div", {
                              className:
                                "bg-[rgb(117,117,117,0.6)] absolute right-2 bottom-2 rounded p-[0.1rem]",
                              children: (0, g.jsx)(b.A, {
                                className: "mr-0 text-white",
                              }),
                            }),
                          ],
                        }),
                        (0, g.jsx)("p", {
                          className: "truncate py-2",
                          children: e.name,
                        }),
                        (0, g.jsx)("p", {
                          className: "truncate text-gy text-t08",
                          children: e.author,
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
            }),
          }),
        });
      };
      var f = t(5360),
        v = t(30),
        y = t(7044),
        N = t(7738),
        k = t(1299),
        A = t(2873),
        w = t(1100),
        _ = t(5745),
        S = t(223),
        L = t(7947),
        C = t(9011),
        I = t(8038),
        T = t(1047);
      const R = () => {
        var e, s, t, x, h, p;
        const { config: b, setConfig: R } = (0, n.H)(),
          { setting: z, logined: M } = b,
          { t: P } = (0, i.Bd)(),
          { snackbars: O, setSnackbars: E, showSnackbar: K } = (0, k.q)(),
          q = (0, o.j)(),
          { blogsInfo: F, isBlogLoading: D } = (0, o.G)((e) => e.blogs),
          { forumList: U, isLoading: G } = (0, o.G)((e) => e.forum),
          [V, Z] = (0, l.useState)({
            login: !1,
            signUp: !1,
            forgot: !1,
            newTopic: !1,
          }),
          [B, H] = (0, l.useState)(1),
          [J, W] = (0, l.useState)(!1),
          X = (0, r.zy)(),
          Y = new URLSearchParams(X.search),
          $ = Y.get("id"),
          Q = Y.get("tab"),
          ee = (0, l.useRef)(null),
          [se, te] = (0, l.useState)({
            newTopic: "",
            spoilers: !1,
            reply: "",
            activeIndex: null,
          }),
          [ae, le] = (0, l.useState)(L.Z),
          re =
            null !== (e = U.list) && void 0 !== e && e.length
              ? Math.ceil(U.total / 5)
              : 0,
          ie = B < re && re > 1,
          ne = JSON.parse(localStorage.getItem("blogLikedItems") || "[]"),
          oe = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              l =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : $,
              r =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : "blog";
            (q((0, S.Ah)({ isLoading: !0, isLoadMore: e, isRefreshing: s })),
              e || (H(1), q((0, S.f9)("forumList"))),
              setTimeout(() => {
                q((0, A.e)({ mode: r, page: a, bid: l }));
              }, t));
          };
        (0, l.useEffect)(() => {
          $ &&
            (window.scrollTo({ top: 0, behavior: "smooth" }),
            oe(),
            Q && (q((0, T.$N)("blogsInfo")), q((0, _.XX)($))));
        }, [q, $, Q]);
        (0, l.useEffect)(() => {
          var e;
          if (
            null === F ||
            void 0 === F ||
            null === (e = F.info) ||
            void 0 === e ||
            !e.content
          )
            return;
          const s = document.querySelector(".blog-content");
          if (!s) return;
          s.querySelectorAll("img").forEach((e) => {
            (e.src.includes("blogs") || e.src.includes("cdn-msp")) &&
              (e.removeAttribute("style"),
              (e.style.width = "100%"),
              (e.style.height = "auto"),
              (e.style.display = "block"),
              (e.style.margin = "0 auto"));
          });
        }, [F]);
        const de = async (e, s, t) => {
          let l = {};
          if (
            (V.newTopic && "" !== se.newTopic
              ? (l = await q((0, A.T)({ comment: e, aid: s })))
              : "" !== se.reply &&
                "" !== t &&
                (l = await q((0, A.T)({ comment: e, aid: s, comment_id: t }))),
            te((e) =>
              (0, a.A)((0, a.A)({}, e), {}, { reply: "", newTopic: "" }),
            ),
            200 === l.code)
          ) {
            const { msg: e, status: s } = l.data;
            K(e, "ok" !== s ? "error" : "success");
          }
        };
        return (0, g.jsxs)("div", {
          children: [
            D && (0, g.jsx)(m.A, {}),
            (0, g.jsxs)("div", {
              className: "pb-40",
              children: [
                (0, g.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 right-0 bg-defaultBg z-50 dark:bg-nbk",
                  children: [
                    (0, g.jsxs)("div", {
                      className:
                        " w-full h-16 bg-bbk text-tgy flex justify-between items-center px-3",
                      children: [
                        (0, g.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, g.jsx)(C.ee, { back: "/blogs" }),
                            (0, g.jsx)("p", {
                              className: "ml-4 w-80 truncate",
                              children:
                                null === F ||
                                void 0 === F ||
                                null === (s = F.info) ||
                                void 0 === s
                                  ? void 0
                                  : s.title,
                            }),
                          ],
                        }),
                        (0, g.jsx)(d.A, {
                          sx: {
                            fontSize: 28,
                            stroke: "white",
                            strokeWidth: 1,
                            color: "white",
                          },
                          onClick: () => W(!0),
                        }),
                      ],
                    }),
                    Object.keys(F).length > 0 &&
                      (0, g.jsxs)("div", {
                        className: "bg-white mt-2 dark:bg-nbk",
                        children: [
                          (0, g.jsxs)("div", {
                            className: "p-3",
                            children: [
                              (0, g.jsx)("p", {
                                children:
                                  null === (t = F.info) || void 0 === t
                                    ? void 0
                                    : t.title,
                              }),
                              (0, g.jsxs)("div", {
                                className: "mt-4 mb-2",
                                children: [
                                  (0, g.jsx)("span", {
                                    className: "bg-og text-tgy rounded p-2",
                                    children: P(
                                      "1" === Q
                                        ? "blogs.night_bistro"
                                        : "blogs.game_library",
                                    ),
                                  }),
                                  F.info.tags[0]
                                    .split(",")
                                    .map((e) =>
                                      (0, g.jsx)(
                                        "span",
                                        {
                                          className:
                                            "bg-tgy text-gy rounded p-2 ml-2",
                                          children: e,
                                        },
                                        e,
                                      ),
                                    ),
                                ],
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className:
                              "grid grid-cols-3 gap-0 text-gy text-center",
                            children: [
                              (0, g.jsxs)("button", {
                                className: "p-2 border border-solid border-tgy",
                                children: [
                                  F.info.total_likes,
                                  P("blogs.likes_count"),
                                ],
                              }),
                              (0, g.jsxs)("button", {
                                className: "p-2 border border-solid border-tgy",
                                onClick: () => {
                                  ee.current &&
                                    ee.current.scrollIntoView({
                                      behavior: "smooth",
                                      block: "start",
                                    });
                                },
                                children: [U.total, P("blogs.reply_count")],
                              }),
                              (0, g.jsx)("button", {
                                className:
                                  "p-2 border border-solid border-tgy\n                   ".concat(
                                    F.info.is_liked ? " text-og" : "",
                                  ),
                                onClick: () =>
                                  (async (e) => {
                                    if (ne.includes(e))
                                      return void K(
                                        P("snack.already_rated"),
                                        "success",
                                      );
                                    localStorage.setItem(
                                      "blogLikedItems",
                                      JSON.stringify([...ne, e]),
                                    );
                                    const s = await q(
                                        (0, w.c1)({ id: e, like_type: "blog" }),
                                      ).unwrap(),
                                      { code: t, msg: a, status: l } = s.data;
                                    200 === t &&
                                      K(
                                        a,
                                        "success" !== l ? "error" : "success",
                                      );
                                  })($),
                                children:
                                  F.info.is_liked || ne.includes($)
                                    ? P("blogs.liked")
                                    : P("blogs.give_like"),
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                Object.keys(F).length > 0 &&
                  (0, g.jsxs)(g.Fragment, {
                    children: [
                      (0, g.jsx)("div", {
                        className:
                          "min-h-[100vh] bg-white my-6 pt-60 dark:bg-nbk",
                        children: (0, g.jsx)("div", {
                          className: "p-8",
                          children: (0, g.jsx)("div", {
                            className: "blog-content text-bbk dark:text-tgy",
                            dangerouslySetInnerHTML: {
                              __html:
                                null === (x = F.info) || void 0 === x
                                  ? void 0
                                  : x.content,
                            },
                          }),
                        }),
                      }),
                      (null === (h = F.related_blogs) || void 0 === h
                        ? void 0
                        : h.length) > 0 &&
                        (0, g.jsxs)("div", {
                          ref: ee,
                          className: "bg-white mt-2 p-2 dark:bg-nbk",
                          children: [
                            (0, g.jsx)("p", {
                              className: "m-2",
                              children: P("blogs.related_articles"),
                            }),
                            (0, g.jsx)(u, {
                              t: P,
                              queryTab: Q,
                              related_list: F.related_blogs,
                              setting: z,
                            }),
                          ],
                        }),
                      (null === (p = F.related_comics) || void 0 === p
                        ? void 0
                        : p.length) > 0 &&
                        (0, g.jsxs)("div", {
                          className: "bg-white mt-4 p-2 dark:bg-nbk",
                          children: [
                            (0, g.jsx)("p", {
                              className: "m-2",
                              children: P("blogs.recommended_comics"),
                            }),
                            (0, g.jsx)(j, {
                              related_comics: F.related_comics,
                              setting: z,
                            }),
                          ],
                        }),
                      (0, g.jsxs)("div", {
                        className: "mt-4",
                        children: [
                          (0, g.jsx)(f.A, {
                            t: P,
                            logined: M,
                            setting: z,
                            list: U.list,
                            isLoading: G,
                            dialogOpen: V,
                            setDialogOpen: Z,
                            responds: se,
                            setResponds: te,
                            handleSendRespond: de,
                            showReplySection: !0,
                            hasNextPage: ie,
                          }),
                          (0, g.jsxs)("div", {
                            className:
                              "bg-bbk h-20 flex items-center justify-center mt-2",
                            children: [
                              (0, g.jsx)("input", {
                                type: "text",
                                placeholder: P("forum.start_new_topic"),
                                className:
                                  "w-10/12 h-10 rounded p-2 outline-none dark:bg-bk",
                                onClick: () =>
                                  Z(
                                    M
                                      ? (0, a.A)(
                                          (0, a.A)({}, V),
                                          {},
                                          { newTopic: !0 },
                                        )
                                      : (0, a.A)(
                                          (0, a.A)({}, V),
                                          {},
                                          { login: !0 },
                                        ),
                                  ),
                              }),
                              (0, g.jsx)("button", {
                                className: "rounded-full bg-og p-2 ml-2",
                                children: (0, g.jsx)(c.A, {
                                  sx: {
                                    color: "white",
                                    fontSize: 16,
                                    stroke: "white",
                                    strokeWidth: 1,
                                  },
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsx)("div", {
                            className: "flex justify-center mt-2",
                            children:
                              ie &&
                              (0, g.jsx)("button", {
                                onClick: () => {
                                  return (
                                    (e = B + 1),
                                    void (ie && (H(e), oe(!0, !1, 1e3, e)))
                                  );
                                  var e;
                                },
                                className:
                                  "w-4/12 rounded-sm text-white p-2 my-4 bg-og shadow-lg shadow-stone-700/50",
                                children: P("comic.click_to_load"),
                              }),
                          }),
                          (0, g.jsxs)("div", {
                            className: "mt-2",
                            children: [
                              (0, g.jsxs)("div", {
                                className: "grid grid-cols-2 h-full",
                                children: [
                                  (0, g.jsx)(I.A, {
                                    adKey: "app_blog_bottom_left_1",
                                  }),
                                  (0, g.jsx)(I.A, {
                                    adKey: "app_blog_bottom_right_1",
                                  }),
                                ],
                              }),
                              (0, g.jsx)(I.A, {
                                adKey: "app_blog_bottom_center_jm3",
                              }),
                              (0, g.jsxs)("div", {
                                className: "grid grid-cols-2 h-full",
                                children: [
                                  (0, g.jsx)(I.A, {
                                    adKey: "app_blog_bottom_left_2",
                                  }),
                                  (0, g.jsx)(I.A, {
                                    adKey: "app_blog_bottom_right_2",
                                  }),
                                ],
                              }),
                              (0, g.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, g.jsx)(I.A, {
                                  adKey: "app_blog_bottom",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            (0, g.jsx)("div", {
              className: "fixed bottom-0 left-0 right-0 z-20",
              children: (0, g.jsx)(I.A, {
                adKey: "app_blog_fixed_bottom_jm3",
                closeBtn: !0,
              }),
            }),
            (0, g.jsx)(k.A, { setSnackbars: E, snackbars: O }),
            J &&
              (0, g.jsx)(v.A, {
                share: J,
                setShare: W,
                setting: z,
                queryId: $,
                type: "blog",
              }),
            V.newTopic &&
              (0, g.jsx)(y.A, {
                queryId: $,
                setDialogOpen: Z,
                dialogOpen: V,
                responds: se,
                setResponds: te,
                handleSendRespond: de,
              }),
            (V.login || V.signUp || V.forgot) &&
              !M &&
              (0, g.jsx)(N.A, {
                setFormData: le,
                formData: ae,
                setConfig: R,
                logined: M,
                isLoading: D,
                setDialogOpen: Z,
                dialogOpen: V,
                showSnackbar: K,
              }),
          ],
        });
      };
    },
    7883: (e, s, t) => {
      t.d(s, { A: () => r });
      var a = t(9662),
        l = t(579);
      const r = (0, a.A)(
        (0, l.jsx)("path", {
          d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2",
        }),
        "MoreHoriz",
      );
    },
    5721: (e, s, t) => {
      t.d(s, { A: () => b });
      var a = t(9379),
        l = t(45),
        r = t(5043),
        i = t(8387),
        n = t(8610),
        o = t(2108),
        d = t(6431),
        c = t(1347),
        m = t(2532),
        x = t(2372);
      function h(e) {
        return (0, x.Ay)("MuiList", e);
      }
      (0, m.A)("MuiList", ["root", "padding", "dense", "subheader"]);
      var g = t(579);
      const u = [
          "children",
          "className",
          "component",
          "dense",
          "disablePadding",
          "subheader",
        ],
        p = (0, o.Ay)("ul", {
          name: "MuiList",
          slot: "Root",
          overridesResolver: (e, s) => {
            const { ownerState: t } = e;
            return [
              s.root,
              !t.disablePadding && s.padding,
              t.dense && s.dense,
              t.subheader && s.subheader,
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
                let { ownerState: s } = e;
                return !s.disablePadding;
              },
              style: { paddingTop: 8, paddingBottom: 8 },
            },
            {
              props: (e) => {
                let { ownerState: s } = e;
                return s.subheader;
              },
              style: { paddingTop: 0 },
            },
          ],
        }),
        b = r.forwardRef(function (e, s) {
          const t = (0, d.b)({ props: e, name: "MuiList" }),
            {
              children: o,
              className: m,
              component: x = "ul",
              dense: b = !1,
              disablePadding: j = !1,
              subheader: f,
            } = t,
            v = (0, l.A)(t, u),
            y = r.useMemo(() => ({ dense: b }), [b]),
            N = (0, a.A)(
              (0, a.A)({}, t),
              {},
              { component: x, dense: b, disablePadding: j },
            ),
            k = ((e) => {
              const {
                  classes: s,
                  disablePadding: t,
                  dense: a,
                  subheader: l,
                } = e,
                r = {
                  root: [
                    "root",
                    !t && "padding",
                    a && "dense",
                    l && "subheader",
                  ],
                };
              return (0, n.A)(r, h, s);
            })(N);
          return (0, g.jsx)(c.A.Provider, {
            value: y,
            children: (0, g.jsxs)(
              p,
              (0, a.A)(
                (0, a.A)(
                  {
                    as: x,
                    className: (0, i.A)(k.root, m),
                    ref: s,
                    ownerState: N,
                  },
                  v,
                ),
                {},
                { children: [f, o] },
              ),
            ),
          });
        });
    },
    1347: (e, s, t) => {
      t.d(s, { A: () => a });
      const a = t(5043).createContext({});
    },
    5671: (e, s, t) => {
      t.d(s, { A: () => i, b: () => r });
      var a = t(2532),
        l = t(2372);
      function r(e) {
        return (0, l.Ay)("MuiListItemText", e);
      }
      const i = (0, a.A)("MuiListItemText", [
        "root",
        "multiline",
        "dense",
        "inset",
        "primary",
        "secondary",
      ]);
    },
    3700: (e, s, t) => {
      t.d(s, { A: () => a });
      const a = function (e) {
        return "string" === typeof e;
      };
    },
    875: (e, s, t) => {
      t.d(s, { I: () => r });
      var a = t(5043);
      t(579);
      const l = a.createContext();
      const r = () => {
        const e = a.useContext(l);
        return null !== e && void 0 !== e && e;
      };
    },
  },
]);
//# sourceMappingURL=6757.7fad00ad.chunk.js.map
