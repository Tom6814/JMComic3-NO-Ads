"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [3542],
  {
    2028: (e, t, s) => {
      s.d(t, { A: () => n });
      var l = s(5043),
        a = s(2101),
        r = s(579);
      const n = () => {
        const [e, t] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          const e = () => {
            window.scrollY > 500 ? t(!0) : t(!1);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        return (0, r.jsx)(r.Fragment, {
          children:
            e &&
            (0, r.jsx)("button", {
              onClick: () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className:
                "w-14 h-14 rounded-full fixed bottom-[10rem] right-3 bg-og text-white z-50",
              children: (0, r.jsx)(a.A, {}),
            }),
        });
      };
    },
    3344: (e, t, s) => {
      s.d(t, { A: () => y });
      var l = s(9379),
        a = s(5043),
        r = s(3438),
        n = s(7392),
        o = s(1906),
        i = s(35),
        d = s(4219),
        c = s(5316),
        m = s(9347),
        x = s(4836),
        h = s(6990),
        g = s(5954),
        p = s(6258),
        u = s(688),
        b = s(9506),
        j = s(4117),
        f = s(579);
      const v = a.forwardRef(function (e, t) {
          return (0, f.jsx)(x.A, (0, l.A)({ direction: "up", ref: t }, e));
        }),
        y = (e) => {
          const {
              dialogOpen: t,
              setDialogOpen: s,
              editFolder: x,
              setEditFolder: y,
              handleEditFolder: A,
              folderList: N,
              tagsList: k,
            } = e,
            [w, _] = (0, a.useState)(null),
            C = Boolean(w),
            { t: L } = (0, j.Bd)(),
            S =
              (null === k || void 0 === k ? void 0 : k.length) > 0 &&
              x.tags_select === k.toString(),
            z = (e, a) => {
              "backdropClick" !== a &&
                s((0, l.A)((0, l.A)({}, t), {}, { folder: !1 }));
            };
          return (0, f.jsx)(f.Fragment, {
            children:
              t.folder &&
              (0, f.jsxs)(i.A, {
                onClose: z,
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
                  (0, f.jsx)(n.A, {
                    "aria-label": "close",
                    onClick: z,
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
                      children: L("member.add_folder"),
                    }),
                  "edit" === x.type &&
                    (0, f.jsx)(d.A, {
                      className: "text-center",
                      id: "customized-dialog-title",
                      children: L("member.rename_folder"),
                    }),
                  "move" === x.type &&
                    (0, f.jsx)(d.A, {
                      id: "customized-dialog-title",
                      children: L("member.Select_favorite_folder"),
                    }),
                  (0, f.jsxs)(c.A, {
                    className: "",
                    children: [
                      ("add" === x.type || "edit" === x.type) &&
                        (0, f.jsx)("input", {
                          type: "text",
                          placeholder: L("member.enter_folder_name"),
                          className:
                            "w-11/12 h-10 p-4 border border-solid border-gy",
                          onChange: (e) =>
                            y(
                              (0, l.A)(
                                (0, l.A)({}, x),
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
                                    x.folder_name || L("member.select_folder"),
                                }),
                                (0, f.jsx)(g.A, {
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
                              TransitionComponent: p.A,
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
                                  (0, f.jsx)(
                                    h.A,
                                    {
                                      onClick: () => {
                                        (_(null),
                                          y(
                                            (0, l.A)(
                                              (0, l.A)({}, x),
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
                      (null === k || void 0 === k ? void 0 : k.length) > 0 &&
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
                                        const e = S ? "" : k.toString();
                                        y((t) =>
                                          (0, l.A)(
                                            (0, l.A)({}, t),
                                            {},
                                            { tags_select: e },
                                          ),
                                        );
                                      },
                                      children:
                                        S &&
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
                                      children: L("detail.favorite_all_tags"),
                                    }),
                                  ],
                                }),
                                (0, f.jsx)("div", {
                                  className:
                                    "flex flex-wrap items-center text-gy mt-4 dark:text-gy",
                                  children: k.map((e) => {
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
                                            a = s.includes(e)
                                              ? s.filter((t) => t !== e)
                                              : [...s, e];
                                          y((e) =>
                                            (0, l.A)(
                                              (0, l.A)({}, e),
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
                  (0, f.jsx)(m.A, {
                    className: "flex justify-center",
                    children: (0, f.jsx)(o.A, {
                      className:
                        "bg-og text-white rounded border-solid border-2 border-og w-8/12",
                      onClick: (e) => {
                        (z(),
                          "add" === x.type && A("add"),
                          "edit" === x.type && A("edit"),
                          "move" === x.type && A("move"));
                      },
                      children: L("member.confirm"),
                    }),
                  }),
                ],
              }),
          });
        };
    },
    5073: (e, t, s) => {
      s.d(t, { A: () => m });
      var l = s(9379),
        a = s(8911),
        r = s(7353),
        n = s(802),
        o = s(2110),
        i = s(6494),
        d = s(7392),
        c = s(579);
      const m = (e) => {
        const {
          t: t,
          aid: s,
          ncid: m,
          comment_id: x,
          responds: h,
          setResponds: g,
          problem: p,
          userAnswer: u,
          setUserAnswer: b,
          handleRegenerateProblem: j,
          checkAnswer: f,
        } = e;
        return (
          console.log(h),
          (0, c.jsx)(o.A, {
            className: "dark:bg-nbk dark:text-tgy",
            children: (0, c.jsxs)(i.A, {
              className: "",
              children: [
                (0, c.jsxs)(r.A, {
                  className: "w-full flex justify-end ml-auto pt-0",
                  children: [
                    (0, c.jsx)("label", { htmlFor: "reply" }),
                    (0, c.jsx)(n.A, {
                      value: h.reply,
                      id: "reply",
                      "aria-label": "reply textarea",
                      minRows: 3,
                      maxLength: 200,
                      placeholder: "\u5206\u4eab\u4f60\u7684\u60f3\u6cd5\u5427",
                      className:
                        "border-2 border-tgy text-base text-lgy w-full rounded-md p-1 focus:border-gray-500 focus:outline-none dark:bg-bbk",
                      onChange: (e) =>
                        g((t) =>
                          (0, l.A)(
                            (0, l.A)({}, t),
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
                p.problem
                  ? (0, c.jsxs)(r.A, {
                      className:
                        "flex justify-center items-center text-base pt-4",
                      children: [
                        (0, c.jsxs)("p", {
                          className: "text-2xl",
                          children: [p.problem, " ="],
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
                          children: (0, c.jsx)(a.A, { className: "text-2xl" }),
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
    9295: (e, t, s) => {
      s.d(t, { A: () => V });
      var l = s(9379),
        a = s(45),
        r = s(5043),
        n = s(6580),
        o = s(5244),
        i = s(3752),
        d = s(2782),
        c = s(3392),
        m = s(1637),
        x = s(7353),
        h = s(1020),
        g = s(4975),
        p = s(50),
        u = s(5090),
        b = s(8293),
        j = s(2108),
        f = s(2110),
        v = s(9958),
        y = s(6494),
        A = s(7600),
        N = s(279),
        k = s(1045),
        w = s(7392),
        _ = s(4496),
        C = s(2432),
        L = s(5412),
        S = s(5843),
        z = s(6148),
        E = s(5858),
        F = s(5073),
        M = s(579);
      const P = ["expand"],
        R = (0, j.Ay)((e) => {
          const { expand: t } = e,
            s = (0, a.A)(e, P);
          return (0, M.jsx)(w.A, (0, l.A)({}, s));
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
        V = (e) => {
          var t, s, a, j;
          const {
              t: P,
              config: V,
              nid: T,
              filter: I,
              showSnackbar: B,
              tab: D,
              setTab: O,
              relatedList: H,
              loadForumList: U,
              setDialogOpen: G,
              dialogOpen: W,
              favoriteSave: Y,
              handleEngagementAction: Z,
            } = e,
            { setting: q, logined: K } = V,
            J = (0, u.zk)(),
            Q = (0, z.j)(),
            X = (0, n.Zp)(),
            { forumList: $, isLoadMore: ee } = (0, z.G)((e) => e.forum),
            te = J[2].text_section[0].content,
            [se, le] = (0, r.useState)({}),
            [ae, re] = (0, r.useState)(null),
            [ne, oe] = (0, r.useState)((0, L.hb)()),
            [ie, de] = (0, r.useState)(""),
            [ce, me] = (0, r.useState)(null),
            [xe, he] = (0, r.useState)(!0),
            { ref: ge, inView: pe } = (0, S.Wx)(),
            [ue, be] = (0, r.useState)(1),
            je = $.total ? Math.ceil(Number($.total) / 5) : 0,
            fe = ue <= je,
            [ve, ye] = (0, r.useState)({
              comment: "",
              comment_id: "",
              ncid: "",
            }),
            { items: Ae } = (0, L.g9)(H, 1),
            Ne = (0, r.useCallback)(() => {
              if (pe && ue < je) {
                const e = ue + 1;
                (U(!0, !1, 1e3, e), be(e));
              }
            }, [pe]);
          (0, r.useEffect)(() => {
            Ne();
          }, [Ne]);
          const ke = () => {
              const e = (0, L.hb)();
              (oe(e), de(""), me(null));
            },
            we = () => {
              ie === ne.answer
                ? (me(!0),
                  (async () => {
                    const { comment: e, comment_id: t, ncid: s } = ve,
                      l = await Q(
                        (0, E.RR)({
                          nid: T,
                          comment: e,
                          comment_id: t,
                          ncid: s,
                        }),
                      ).unwrap(),
                      { msg: a, status: r } = l;
                    (B(a, "ok" !== r ? "error" : "success"),
                      ye({ comment: "", comment_id: "", ncid: "" }));
                  })(),
                  de(""))
                : (me(!1), de(""));
            },
            _e = (e, t) => {
              le((s) =>
                (0, l.A)((0, l.A)({}, s), {}, { [e]: !s[e], replyArea: t }),
              );
            },
            Ce = () => {
              B("".concat(P("novel.report"), "\u6210\u529f"), "success");
            };
          return (0, M.jsxs)(M.Fragment, {
            children: [
              (0, M.jsxs)("div", {
                className: "m-5",
                children: [
                  (0, M.jsxs)("div", {
                    className: "flex border-b my-4",
                    children: [
                      (0, M.jsx)("button", {
                        className: "w-28 rounded-t-lg p-2 ".concat(
                          1 === D
                            ? "bg-og text-white"
                            : "text-gy dark:text-tgy",
                        ),
                        onClick: () => O(1),
                        children: P("novel.related_novels"),
                      }),
                      (0, M.jsxs)("button", {
                        className:
                          "w-28 flex justify-center items-center rounded-t-lg p-2 ".concat(
                            2 === D
                              ? "bg-og text-white"
                              : "text-gy dark:text-tgy",
                          ),
                        onClick: () => O(2),
                        children: [
                          (0, M.jsx)("p", {
                            className: "pr-1",
                            children: P("detail.comments"),
                          }),
                          (null === (t = $.list) || void 0 === t
                            ? void 0
                            : t.length) > 0 &&
                            (0, M.jsx)("span", {
                              className:
                                "rounded-full w-6 h-6 text-sm font-bold flex items-center justify-center ".concat(
                                  2 === D
                                    ? "bg-white text-og"
                                    : "bg-og text-white",
                                ),
                              children: $.total,
                            }),
                        ],
                      }),
                    ],
                  }),
                  1 === D &&
                    (0, M.jsxs)("div", {
                      children: [
                        (0, M.jsx)(g.RC, {
                          slidesPerView: 2,
                          centeredSlides: !1,
                          spaceBetween: 10,
                          slidesPerGroupSkip: 2,
                          grabCursor: !0,
                          keyboard: { enabled: !0 },
                          breakpoints: {
                            769: { slidesPerView: 4, slidesPerGroup: 4 },
                          },
                          scrollbar: !0,
                          modules: [p.s3, p.Ze, p.dK],
                          className: "mySwiper2",
                          children: H.map((e, t) =>
                            (0, M.jsxs)(
                              g.qr,
                              {
                                children: [
                                  (0, M.jsxs)("div", {
                                    className: "relative flex justify-center",
                                    children: [
                                      (0, M.jsx)(n.N_, {
                                        to: "/novels/detail?nid="
                                          .concat(e.id, "&filter=")
                                          .concat(I),
                                        children: (0, M.jsx)("img", {
                                          src:
                                            (null === q || void 0 === q
                                              ? void 0
                                              : q.img_host) +
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.image) ||
                                            "/images/cover_default.jpg",
                                          alt: e.id,
                                          loading: "lazy",
                                          onLoad: (e) => {
                                            e.target.style.opacity = "1";
                                          },
                                          onError: (e) => {
                                            e.target.src =
                                              "/images/cover_default.jpg";
                                          },
                                          className: "object-cover rounded-md",
                                          style: {
                                            opacity: "0",
                                            transition:
                                              "opacity 0.5s ease-in-out",
                                          },
                                        }),
                                      }),
                                      (0, M.jsx)("div", {
                                        className:
                                          "bg-[rgb(117,117,117,0.6)] absolute left-2 bottom-2 rounded p-[0.1rem]",
                                        onClick: () => Z("like", e.id),
                                        children: (0, M.jsx)(o.A, {
                                          className: "".concat(
                                            Y.like.includes(e.id)
                                              ? "text-red-600"
                                              : "text-og",
                                          ),
                                        }),
                                      }),
                                      (0, M.jsx)("div", {
                                        className:
                                          "bg-[rgb(117,117,117,0.6)] absolute right-2 bottom-2 rounded p-[0.1rem]",
                                        onClick: () => Z("mark", e.id),
                                        children: Y.mark.includes(e.id)
                                          ? (0, M.jsx)(i.A, {
                                              className: "text-og",
                                            })
                                          : (0, M.jsx)(d.A, {
                                              className: "text-2xl text-white",
                                            }),
                                      }),
                                    ],
                                  }),
                                  (0, M.jsx)("p", {
                                    className: "truncate",
                                    children: e.name,
                                  }),
                                  (0, M.jsx)("p", {
                                    className: "truncate text-og",
                                    children: e.author,
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                        (0, M.jsxs)("div", {
                          className: "flex justify-center gap-4 my-4",
                          children: [
                            (0, M.jsx)("button", {
                              className:
                                "border border-og text-og p-2 px-3 rounded-md",
                              onClick: () =>
                                X("/novels/detail?nid=".concat(Ae[0].NID)),
                              children: P("novel.random_browse"),
                            }),
                            (0, M.jsx)("button", {
                              className: "bg-og text-white p-2 px-3 rounded-md",
                              onClick: () => X("/novels?filter="),
                              children: P("novel.view_more"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  2 === D &&
                    (0, M.jsxs)("div", {
                      className: "min-h-[200px] text-base",
                      children: [
                        (0, M.jsxs)("p", {
                          className: "py-2",
                          children: [
                            J[2].text_section[0].content[0].slice(0, 3),
                            (0, M.jsx)("span", {
                              children: (0, M.jsx)("button", {
                                onClick: (e) => re(e.currentTarget),
                                className: "text-og font-bold p-0 ml-1",
                                children: J[2].text_section[0].content[0].slice(
                                  3,
                                  9,
                                ),
                              }),
                            }),
                            J[2].text_section[0].content[0].slice(9, 30),
                          ],
                        }),
                        K
                          ? (0, M.jsx)(F.A, {
                              t: P,
                              aid: "",
                              ncid: "",
                              comment_id: "",
                              responds: ve,
                              setResponds: ye,
                              problem: ne,
                              userAnswer: ie,
                              setUserAnswer: de,
                              handleRegenerateProblem: ke,
                              checkAnswer: we,
                            })
                          : (0, M.jsx)("div", {
                              className: "flex justify-center py-2",
                              children: (0, M.jsx)("button", {
                                className:
                                  "bg-og text-base text-white py-2 px-4 rounded-md shadow-lg",
                                onClick: () =>
                                  G(
                                    (0, l.A)(
                                      (0, l.A)({}, W),
                                      {},
                                      { login: !0 },
                                    ),
                                  ),
                                children: P("novel.login_prompt"),
                              }),
                            }),
                        (0, M.jsxs)("div", {
                          children: [
                            (0, M.jsxs)("p", {
                              className: "mt-2",
                              children: [
                                P("novel.show"),
                                null === (s = $.list) || void 0 === s
                                  ? void 0
                                  : s.length,
                                P("detail.comments"),
                              ],
                            }),
                            (null === (a = $.list) || void 0 === a
                              ? void 0
                              : a.length) > 0
                              ? $.list.map((e, t) => {
                                  var s, l, a;
                                  return (0, M.jsx)(
                                    "div",
                                    {
                                      children: (0, M.jsxs)(f.A, {
                                        className:
                                          "dark:bg-nbk dark:text-tgy my-3",
                                        children: [
                                          (0, M.jsx)(v.A, {
                                            className:
                                              "flex justify-center items-start pb-0",
                                            avatar: (0, M.jsxs)(x.A, {
                                              className:
                                                "flex flex-col items-center",
                                              children: [
                                                (0, M.jsx)(k.A, {
                                                  "aria-label": "recipe",
                                                  sx: { width: 45, height: 45 },
                                                  children: (0, M.jsx)("img", {
                                                    src: ""
                                                      .concat(
                                                        null === q ||
                                                          void 0 === q
                                                          ? void 0
                                                          : q.img_host,
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
                                                (0, M.jsxs)(_.A, {
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
                                            action: (0, M.jsxs)(w.A, {
                                              "aria-label": "settings",
                                              className: "text-og text-sm",
                                              onClick: Ce,
                                              children: [
                                                (0, M.jsx)(c.A, {
                                                  className: "text-base",
                                                }),
                                                P("novel.report"),
                                              ],
                                            }),
                                            title: (0, M.jsxs)(x.A, {
                                              className:
                                                "flex items-center text-base",
                                              children: [
                                                (0, M.jsx)("p", {
                                                  className:
                                                    "text-og font-bold",
                                                  children: e.nickname,
                                                }),
                                                (0, M.jsxs)("span", {
                                                  className:
                                                    "text-lgy dark:text-tgy",
                                                  children: [
                                                    "\xa0\xb7\xa0",
                                                    e.expinfo.level_name,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            subheader: (0, M.jsxs)(x.A, {
                                              children: [
                                                (0, M.jsx)("p", {
                                                  className: "dark:text-tgy",
                                                  children: e.addtime,
                                                }),
                                                (0, M.jsx)(x.A, {
                                                  className:
                                                    "mt-2 flex items-center",
                                                  children:
                                                    null ===
                                                      (s = e.expinfo.badges) ||
                                                    void 0 === s
                                                      ? void 0
                                                      : s.map((e, t) =>
                                                          (0, M.jsx)(
                                                            "img",
                                                            {
                                                              src:
                                                                (null === q ||
                                                                void 0 === q
                                                                  ? void 0
                                                                  : q.img_host) +
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
                                          (0, M.jsx)(y.A, {
                                            className:
                                              "w-[82%] text-gy text-lg flex justify-start ml-auto py-0 dark:text-tgy",
                                            children: (0, M.jsx)("div", {
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
                                          (0, M.jsxs)(_.A, {
                                            className:
                                              "text-gy text-sm flex justify-end ml-auto pr-5 dark:text-tgy",
                                            children: ["NVL", e.NID],
                                          }),
                                          (0, M.jsxs)(A.A, {
                                            disableSpacing: !0,
                                            className: "pl-20",
                                            children: [
                                              (0, M.jsx)(w.A, {
                                                "aria-label": "add reply",
                                                className:
                                                  "text-base dark:text-og",
                                                onClick: () => _e(t, !0),
                                                children: P("novel.reply"),
                                              }),
                                              (null === (l = e.replys) ||
                                              void 0 === l
                                                ? void 0
                                                : l.length) > 0 &&
                                                (0, M.jsxs)(M.Fragment, {
                                                  children: [
                                                    (0, M.jsx)(w.A, {
                                                      "aria-label":
                                                        "more reply",
                                                      className:
                                                        "text-base dark:text-og",
                                                      onClick: () => _e(t, !1),
                                                      children:
                                                        P("novel.more_replies"),
                                                    }),
                                                    (0, M.jsx)(R, {
                                                      expand: se[t],
                                                      onClick: () => _e(t, !1),
                                                      "aria-expanded": se[t],
                                                      "aria-label": "show more",
                                                      children: (0, M.jsx)(
                                                        b.A,
                                                        {
                                                          className:
                                                            "dark:text-og",
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (0, M.jsxs)(N.A, {
                                            in: se[t],
                                            timeout: "auto",
                                            unmountOnExit: !0,
                                            children: [
                                              se[t] &&
                                                se.replyArea &&
                                                (0, M.jsx)(F.A, {
                                                  t: P,
                                                  aid: "",
                                                  ncid: "",
                                                  comment_id: e.CID,
                                                  responds: ve,
                                                  setResponds: ye,
                                                  problem: ne,
                                                  userAnswer: ie,
                                                  setUserAnswer: de,
                                                  handleRegenerateProblem: ke,
                                                  checkAnswer: we,
                                                }),
                                              (null === (a = e.replys) ||
                                              void 0 === a
                                                ? void 0
                                                : a.length) > 0 &&
                                                se[t] &&
                                                !se.replyArea &&
                                                e.replys.map((e, t) => {
                                                  var s;
                                                  return (0, M.jsxs)(
                                                    f.A,
                                                    {
                                                      className:
                                                        "w-[95%] ml-auto shadow-none dark:bg-nbk dark:text-tgy",
                                                      children: [
                                                        (0, M.jsx)(v.A, {
                                                          className:
                                                            "flex justify-center items-start pb-0",
                                                          avatar: (0, M.jsxs)(
                                                            x.A,
                                                            {
                                                              className:
                                                                "flex flex-col items-center",
                                                              children: [
                                                                (0, M.jsx)(
                                                                  k.A,
                                                                  {
                                                                    "aria-label":
                                                                      "recipe",
                                                                    sx: {
                                                                      width: 35,
                                                                      height: 35,
                                                                    },
                                                                    children:
                                                                      (0,
                                                                      M.jsx)(
                                                                        "img",
                                                                        {
                                                                          src: ""
                                                                            .concat(
                                                                              null ===
                                                                                q ||
                                                                                void 0 ===
                                                                                  q
                                                                                ? void 0
                                                                                : q.img_host,
                                                                              "/media/users/",
                                                                            )
                                                                            .concat(
                                                                              e.photo,
                                                                            ),
                                                                          alt: e.nickname,
                                                                          onError:
                                                                            (
                                                                              e,
                                                                            ) => {
                                                                              e.target.src =
                                                                                "/images/ic_head.png";
                                                                            },
                                                                          width:
                                                                            "100%",
                                                                          height:
                                                                            "100%",
                                                                          className:
                                                                            "bg-gy",
                                                                        },
                                                                      ),
                                                                  },
                                                                ),
                                                                (0, M.jsxs)(
                                                                  _.A,
                                                                  {
                                                                    variant:
                                                                      "body2",
                                                                    className:
                                                                      "mt-1 text-sm text-lgy dark:text-tgy",
                                                                    children: [
                                                                      "Lv.",
                                                                      e.expinfo
                                                                        .level,
                                                                    ],
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          action: (0, M.jsxs)(
                                                            w.A,
                                                            {
                                                              "aria-label":
                                                                "settings",
                                                              className:
                                                                "text-og text-sm pt-1",
                                                              onClick: Ce,
                                                              children: [
                                                                (0, M.jsx)(
                                                                  c.A,
                                                                  {
                                                                    className:
                                                                      "text-base",
                                                                  },
                                                                ),
                                                                P(
                                                                  "novel.report",
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          title: (0, M.jsxs)(
                                                            x.A,
                                                            {
                                                              className:
                                                                "flex items-center",
                                                              children: [
                                                                (0, M.jsx)(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "text-og",
                                                                    children:
                                                                      e.nickname,
                                                                  },
                                                                ),
                                                                (0, M.jsxs)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-lgy dark:text-tgy",
                                                                    children: [
                                                                      "\xa0\xb7\xa0",
                                                                      e.expinfo
                                                                        .level_name,
                                                                    ],
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          subheader: (0,
                                                          M.jsxs)(x.A, {
                                                            children: [
                                                              (0, M.jsx)("p", {
                                                                className:
                                                                  "dark:text-tgy",
                                                                children:
                                                                  e.addtime,
                                                              }),
                                                              (0, M.jsx)(x.A, {
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
                                                                        (
                                                                          e,
                                                                          t,
                                                                        ) =>
                                                                          (0,
                                                                          M.jsx)(
                                                                            "img",
                                                                            {
                                                                              src:
                                                                                (null ===
                                                                                  q ||
                                                                                void 0 ===
                                                                                  q
                                                                                  ? void 0
                                                                                  : q.img_host) +
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
                                                        (0, M.jsx)(y.A, {
                                                          className:
                                                            "w-[82%] text-gy text-lg flex justify-start ml-auto dark:text-tgy pt-0",
                                                          children: (0, M.jsx)(
                                                            "div",
                                                            {
                                                              className:
                                                                "w-[80%] break-words whitespace-pre-wrap",
                                                              dangerouslySetInnerHTML:
                                                                {
                                                                  __html:
                                                                    e.content,
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
                                  );
                                })
                              : (0, M.jsx)("p", {
                                  className:
                                    "text-center text-tgy py-10 dark:bg-nbk",
                                  children: P("forum.no_comments_yet"),
                                }),
                          ],
                        }),
                        (0, M.jsx)("button", {
                          ref: ge,
                          onClick: Ne,
                          className: "w-full flex justify-center pt-4",
                          children:
                            (null === (j = $.list) || void 0 === j
                              ? void 0
                              : j.length) > 0 &&
                            (fe && ee
                              ? (0, M.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, M.jsx)(m.A, {
                                      color: "inherit",
                                      size: 12,
                                    }),
                                    (0, M.jsx)("p", {
                                      className: "ml-2",
                                      children: P("comic.pull_to_load"),
                                    }),
                                  ],
                                })
                              : (0, M.jsx)("p", {
                                  className: "text-center",
                                  children: P("comic.no_more"),
                                })),
                        }),
                        (0, M.jsx)(h.Ay, {
                          open: Boolean(ae),
                          anchorEl: ae,
                          onClose: () => re(null),
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "center",
                          },
                          children: (0, M.jsxs)("div", {
                            className:
                              "p-3 text-gy dark:text-[#bbb] dark:bg-nbk",
                            children: [
                              (0, M.jsxs)("p", {
                                className: "border-b py-2",
                                children: [
                                  " ",
                                  J[3].text_section[0].content[0].slice(3, 9),
                                ],
                              }),
                              (0, M.jsx)("div", {
                                className: "py-2",
                                children: te
                                  .slice(1, 10)
                                  .map((e) =>
                                    (0, M.jsx)("p", { children: e }, e),
                                  ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              (!xe || (!ce && null !== ce)) &&
                (0, M.jsx)(C.Fe, {
                  isLogined: xe,
                  setIsLogined: he,
                  isCorrect: ce,
                  setIsCorrect: me,
                  setUserAnswer: de,
                }),
            ],
          });
        };
    },
    3752: (e, t, s) => {
      s.d(t, { A: () => r });
      var l = s(9662),
        a = s(579);
      const r = (0, l.A)(
        (0, a.jsx)("path", {
          d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2",
        }),
        "Bookmark",
      );
    },
    2782: (e, t, s) => {
      s.d(t, { A: () => r });
      var l = s(9662),
        a = s(579);
      const r = (0, l.A)(
        (0, a.jsx)("path", {
          d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z",
        }),
        "BookmarkBorder",
      );
    },
    9506: (e, t, s) => {
      s.d(t, { A: () => r });
      var l = s(9662),
        a = s(579);
      const r = (0, l.A)(
        (0, a.jsx)("path", {
          d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
        }),
        "Check",
      );
    },
    8390: (e, t, s) => {
      s.d(t, { A: () => r });
      var l = s(9662),
        a = s(579);
      const r = (0, l.A)(
        (0, a.jsx)("path", {
          d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z",
        }),
        "Textsms",
      );
    },
  },
]);
//# sourceMappingURL=3542.244db5c4.chunk.js.map
