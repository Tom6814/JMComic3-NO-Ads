"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [383],
  {
    9011: (e, t, s) => {
      s.d(t, { S0: () => n, a_: () => d, bs: () => l, ee: () => c });
      var i = s(5043),
        a = s(6580),
        r = s(7332),
        o = s(579);
      function n() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500;
        const [t, s] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            const t = setTimeout(() => {
              s(!0);
            }, e);
            return () => {
              clearTimeout(t);
            };
          }, [e]),
          t
        );
      }
      const l = () =>
        (0, i.useCallback)(() => {
          try {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } catch (e) {
            window.scrollTo(0, 0);
          }
          ((document.body.scrollTop = 0),
            (document.documentElement.scrollTop = 0));
        }, []);
      const c = (e) => {
          let { back: t, state: s } = e;
          const i = (0, a.Zp)();
          return (0, o.jsx)(a.N_, {
            to: "#",
            onClick: (e) => {
              (e.preventDefault(),
                "number" === typeof t ? i(t) : i(t, { state: s }));
            },
            children: (0, o.jsx)(r.A, {
              sx: {
                color: "white",
                fontSize: 28,
                stroke: "white",
                strokeWidth: 1,
              },
            }),
          });
        },
        d = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 1e3;
          const [t, s] = (0, i.useState)(0);
          return (
            (0, i.useEffect)(() => {
              const t = setInterval(() => {
                s((e) => (0 === e ? 1 : 0));
              }, e);
              return () => clearInterval(t);
            }, [e]),
            t
          );
        };
    },
    2028: (e, t, s) => {
      s.d(t, { A: () => o });
      var i = s(5043),
        a = s(2101),
        r = s(579);
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
    597: (e, t, s) => {
      s.d(t, { A: () => n });
      var i = s(9379),
        a = s(6580),
        r = s(5412),
        o = s(579);
      const n = (e) => {
        const { creatorId: t, list: s, title: n, setting: l } = e;
        return (0, o.jsx)("div", {
          children:
            Array.isArray(s) &&
            s.length > 0 &&
            (null === s || void 0 === s
              ? void 0
              : s
                  .reduce(
                    (e, t, s) => (
                      s % 2 === 0 && e.push([]),
                      e[e.length - 1].push(t),
                      e
                    ),
                    [],
                  )
                  .map((e, s) =>
                    (0, o.jsx)(
                      "div",
                      {
                        className: "grid-cols-2 grid gap-2 px-2",
                        children: e.map((e, s) =>
                          (0, o.jsxs)(
                            "div",
                            {
                              className:
                                "bg-white relative my-2 mx-1 dark:bg-nbk",
                              children: [
                                (0, o.jsxs)(a.N_, {
                                  to: "/library/list/detail?creatorId="
                                    .concat(e.author_id || t, "&id=")
                                    .concat(e.id),
                                  onClick: () => {
                                    sessionStorage.removeItem("libListSource");
                                  },
                                  children: [
                                    (0, o.jsx)("img", {
                                      src:
                                        (null === l || void 0 === l
                                          ? void 0
                                          : l.img_host) + e.work_image,
                                      alt: e.id,
                                      loading: "lazy",
                                      onLoad: (e) => {
                                        e.target.style.opacity = "1";
                                      },
                                      onError: (e) => {
                                        e.target.src =
                                          "/images/cover_default.jpg";
                                      },
                                      width: "100%",
                                      height: "auto",
                                      className: "object-cover h-56 bg-gy",
                                      style: {
                                        opacity: "0",
                                        transition: "opacity 0.5s ease-in-out",
                                      },
                                    }),
                                    (0, o.jsx)("div", {
                                      className:
                                        "absolute right-2 top-2 rounded-lg text-white p-[0.2rem]",
                                      style: (0, i.A)(
                                        {},
                                        (0, r.bT)(e.platform_name),
                                      ),
                                      children: e.platform_name,
                                    }),
                                  ],
                                }),
                                n
                                  ? (0, o.jsxs)("div", {
                                      className: "px-2 text-gy dark:text-tgy",
                                      children: [
                                        (0, o.jsx)("p", {
                                          className: "truncate py-3",
                                          children: e.work_title,
                                        }),
                                        (0, o.jsx)("p", {
                                          className:
                                            "truncate text-gy py-1 float-right",
                                          children: e.work_date,
                                        }),
                                      ],
                                    })
                                  : (0, o.jsxs)("div", {
                                      className: "px-2",
                                      children: [
                                        (0, o.jsx)("p", {
                                          className: "truncate py-3 font-bold",
                                          children: e.work_title,
                                        }),
                                        (0, o.jsx)(a.N_, {
                                          to: "/library/list?lib=".concat(
                                            e.author_id,
                                          ),
                                          children: (0, o.jsx)("p", {
                                            className:
                                              "truncate text-og py-2 underline",
                                            children: e.author_name,
                                          }),
                                        }),
                                      ],
                                    }),
                              ],
                            },
                            s,
                          ),
                        ),
                      },
                      s,
                    ),
                  )),
        });
      };
    },
    2072: (e, t, s) => {
      s.d(t, { A: () => d });
      var i = s(9379),
        a = s(5043),
        r = s(1906),
        o = s(688),
        n = s(6990),
        l = s(5954),
        c = s(579);
      const d = (e) => {
        const { t: t, title: s, filtersList: d, filter: u, setFilter: g } = e,
          [m, h] = (0, a.useState)({}),
          [x, p] = (0, a.useState)(null),
          v = (e) => {
            (h((t) => (0, i.A)((0, i.A)({}, t), {}, { [e]: !1 })), p(null));
          };
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)("div", {
            className: "flex justify-start py-4 ".concat(s && "text-white"),
            children: [{ id: "language" }, { id: "source" }].map((e) => {
              var s, a;
              return (0, c.jsxs)(
                "div",
                {
                  className: "w-1/2 pl-2 flex justify-between items-center",
                  children: [
                    (0, c.jsxs)("div", {
                      className: "w-full z-20",
                      children: [
                        (0, c.jsxs)("span", {
                          className: "font-bold",
                          children: [
                            "language" === e.id
                              ? t("library.language")
                              : t("library.source"),
                            "\uff1a",
                          ],
                        }),
                        (0, c.jsx)(r.A, {
                          className:
                            "w-9/12 bg-transparent text-lg text-[#918987] py-4",
                          id: "demo-customized-button-".concat(e.id),
                          "aria-controls": m[e.id]
                            ? "demo-customized-menu-".concat(e.id)
                            : void 0,
                          "aria-haspopup": "true",
                          "aria-expanded": m[e.id] ? "true" : void 0,
                          variant: "contained",
                          disableElevation: !0,
                          onClick: (t) => {
                            return (
                              (s = t),
                              (a = e.id),
                              p(s.currentTarget),
                              void h((e) =>
                                (0, i.A)((0, i.A)({}, e), {}, { [a]: !0 }),
                              )
                            );
                            var s, a;
                          },
                          endIcon: (0, c.jsx)(l.A, {
                            className:
                              "absolute top-0 right-0 text-og text-3xl",
                          }),
                          children: (0, c.jsx)("div", {
                            className: "absolute left-2 top-0",
                            children: "" === u[e.id] ? "All" : u[e.id],
                          }),
                        }),
                      ],
                    }),
                    (0, c.jsx)(o.A, {
                      id: "demo-customized-menu-".concat(e.id),
                      anchorEl: x,
                      open: m[e.id] || !1,
                      onClose: () => v(e.id),
                      sx: (e) => ({
                        "& .MuiPaper-root": {
                          marginTop: e.spacing(-3),
                          marginLeft: e.spacing(2),
                          width: "30%",
                          padding: "0",
                          position: "absolute",
                          color: "#757575",
                        },
                      }),
                      children:
                        Array.isArray(d[e.id] || []) &&
                        (null === (s = d[e.id]) || void 0 === s
                          ? void 0
                          : s.length) > 0
                          ? null === (a = d[e.id]) || void 0 === a
                            ? void 0
                            : a.map((t) =>
                                (0, c.jsx)(
                                  n.A,
                                  {
                                    onClick: () => {
                                      (v(e.id),
                                        g(
                                          (0, i.A)(
                                            (0, i.A)({}, u),
                                            {},
                                            {
                                              start: !0,
                                              [e.id]:
                                                t.service ||
                                                ("All" !== t ? t : ""),
                                            },
                                          ),
                                        ));
                                    },
                                    children: t.name || t,
                                  },
                                  t.service || t,
                                ),
                              )
                          : (0, c.jsx)(n.A, {
                              onClick: () => {
                                v(e.id);
                              },
                              children: "ALL",
                            }),
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
        });
      };
    },
    98: (e, t, s) => {
      (s.r(t), s.d(t, { default: () => b }));
      var i = s(9379),
        a = s(5043),
        r = s(6580),
        o = s(3944),
        n = s(6148),
        l = s(4117),
        c = s(3438),
        d = s(2028),
        u = s(9484),
        g = s(5411),
        m = s(2072),
        h = s(597),
        x = s(5208),
        p = s(2012),
        v = s(9011),
        y = s(579);
      const b = () => {
        var e, t, s, b, f, j;
        const { config: A } = (0, o.H)(),
          { setting: w } = A,
          { t: N } = (0, l.Bd)(),
          k = (0, n.j)(),
          E = (0, r.Zp)(),
          _ = sessionStorage.getItem("libQuery") || "",
          S = sessionStorage.getItem("lib"),
          L = sessionStorage.getItem("libSource") || "",
          C = { start: !1, query: _, tab: Number(S) || 1, page: 1 },
          [I, z] = (0, a.useState)(C),
          [T, q] = (0, a.useState)({ start: !1, language: "", source: L }),
          {
            creatorAuthorList: M,
            creatorWorkList: F,
            isLoading: R,
            isLoadMore: H,
          } = (0, n.G)((e) => e.creator),
          D = 1 === I.tab ? M : F,
          Q =
            null !== (e = D.list) && void 0 !== e && e.length
              ? Math.ceil(D.total / 30)
              : 0,
          P = I.page <= Q && Q > 1,
          W = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : I.page,
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : I.query,
              r =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : I.tab,
              o =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 1e3;
            (t &&
              (sessionStorage.setItem("catLoadMore", "1"),
              z(
                (0, i.A)(
                  (0, i.A)({}, I),
                  {},
                  { start: !1, query: a, tab: r, page: 1 },
                ),
              ),
              k((0, p.w)("creatorAuthorList"))),
              k((0, p.zm)({ isLoading: !0, isLoadMore: e, isRefreshing: t })),
              setTimeout(() => {
                (k(
                  1 === r
                    ? (0, x.vh)({ page: s, search_query: a })
                    : (0, x.xN)({
                        page: s,
                        search_value: a,
                        lang: T.language,
                        source: T.source,
                      }),
                ),
                  a
                    ? (sessionStorage.setItem("libQuery", a),
                      E("/library?filter=".concat(encodeURIComponent(a))))
                    : (sessionStorage.removeItem("libQuery"),
                      z(
                        (0, i.A)(
                          (0, i.A)({}, I),
                          {},
                          { start: !1, query: "", tab: r, page: s },
                        ),
                      ),
                      E("/library")),
                  sessionStorage.setItem("libLoadMore", String(s)),
                  sessionStorage.setItem("libSource", T.source),
                  q((0, i.A)((0, i.A)({}, T), {}, { start: !1 })));
              }, o));
          };
        ((0, a.useEffect)(() => {
          var e, t;
          ((1 === I.tab &&
            0 ===
              (null === (e = M.list) || void 0 === e ? void 0 : e.length)) ||
            (2 === I.tab &&
              0 ===
                (null === (t = F.list) || void 0 === t ? void 0 : t.length))) &&
            W();
        }, [
          null === (t = M.list) || void 0 === t ? void 0 : t.length,
          null === (s = F.list) || void 0 === s ? void 0 : s.length,
        ]),
          (0, a.useEffect)(() => {
            T.start && W();
          }, [T.start]));
        return (0, y.jsxs)(y.Fragment, {
          children: [
            R && (0, y.jsx)(g.A, {}),
            (0, y.jsxs)("div", {
              className:
                "sticky top-safe h-16 bg-bbk text-white flex items-end p-2 py-3 z-50",
              children: [
                (0, y.jsx)(v.ee, {
                  back: sessionStorage.getItem("fromPage") || "/",
                }),
                (0, y.jsx)("p", {
                  className: "ml-4 text-2xl text-og",
                  children: N("library.forbidden_comic_library"),
                }),
              ],
            }),
            (0, y.jsxs)("div", {
              className: "relative w-full flex justify-cneter my-4",
              children: [
                (0, y.jsx)("input", {
                  type: "text",
                  className:
                    "relative m-auto w-11/12 h-12 border-none outline-none rounded-full text-gy px-9 dark:bg-nbk",
                  placeholder: N("search.search_keyword"),
                  value: I.query,
                  onChange: (e) =>
                    z((t) =>
                      (0, i.A)((0, i.A)({}, t), {}, { query: e.target.value }),
                    ),
                  onKeyDown: (e) => {
                    "Enter" === e.key && W(!1, !1, 1, e.target.value);
                  },
                }),
                (0, y.jsx)(u.A, {
                  className:
                    "absolute left-7 top-1/2 transform -translate-y-1/2 text-[#aaa] text-2xl stroke-gray-400",
                }),
                I.query &&
                  (0, y.jsx)(c.A, {
                    className:
                      "absolute right-8 top-1/2 transform -translate-y-1/2 text-[#aaa] text-xl stroke-gray-400",
                    onClick: () => W(!1, !1, 1, ""),
                  }),
              ],
            }),
            (0, y.jsx)("div", {
              className:
                "w-full flex justify-around text-center text-lg text-gy",
              children: ["\u5275\u4f5c\u8005", "\u4f5c\u54c1"].map((e, t) =>
                (0, y.jsx)(
                  "p",
                  {
                    className: "w-1/2 py-4 ".concat(
                      I.tab === t + 1
                        ? "bg-white text-og font-bold border-b-4 border-og dark:bg-nbk"
                        : "",
                    ),
                    onClick: () => {
                      return (
                        W(!1, !1, 1, "", (e = t + 1)),
                        sessionStorage.setItem("lib", String(e)),
                        void z((0, i.A)((0, i.A)({}, I), {}, { tab: e }))
                      );
                      var e;
                    },
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            1 === I.tab
              ? (0, y.jsx)(y.Fragment, {
                  children:
                    (null === (b = M.list) || void 0 === b
                      ? void 0
                      : b.length) > 0 &&
                    M.list.map((e, t) =>
                      (0, y.jsx)(
                        r.N_,
                        {
                          to: "/library/list?creatorId=".concat(e.id),
                          children: (0, y.jsxs)("div", {
                            className:
                              "relative bg-cover bg-center overflow-hidden px-4 py-2 my-2",
                            style: {
                              backgroundImage: "url(".concat(
                                (null === w || void 0 === w
                                  ? void 0
                                  : w.img_host) + e.background_image,
                                ")",
                              ),
                            },
                            children: [
                              (0, y.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gray-900 bg-opacity-60",
                              }),
                              (0, y.jsxs)("div", {
                                className: "flex items-center relative z-10",
                                children: [
                                  (0, y.jsx)("div", {
                                    className: "w-2/6",
                                    children: (0, y.jsx)("img", {
                                      src:
                                        (null === w || void 0 === w
                                          ? void 0
                                          : w.img_host) + e.author_avatar,
                                      alt: e.id,
                                      loading: "lazy",
                                      onLoad: (e) => {
                                        e.target.style.opacity = "1";
                                      },
                                      onError: (e) => {
                                        e.target.src =
                                          "/images/title-circle.webp";
                                      },
                                      className: "w-32 object-cover rounded-xl",
                                      style: {
                                        opacity: "0",
                                        transition: "opacity 0.5s ease-in-out",
                                      },
                                    }),
                                  }),
                                  (0, y.jsxs)("div", {
                                    className: "w-4/6",
                                    children: [
                                      (0, y.jsx)("p", {
                                        className:
                                          "text-og text-2xl font-bold p-3",
                                        children: e.author_name,
                                      }),
                                      (0, y.jsxs)("span", {
                                        className: "text-tgy p-3",
                                        children: [
                                          e.update_date,
                                          N("library.update"),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t,
                      ),
                    ),
                })
              : (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(m.A, {
                      t: N,
                      filtersList: F.filters,
                      filter: T,
                      setFilter: q,
                    }),
                    (0, y.jsx)(h.A, { list: F.list, setting: w }),
                  ],
                }),
            (0, y.jsxs)("div", {
              className:
                "flex flex-col justify-center items-center my-10 pb-40",
              children: [
                (null === (f = D.list) || void 0 === f ? void 0 : f.length) >
                  0 &&
                  R &&
                  (0, y.jsx)("img", {
                    src: "/images/loading.gif",
                    alt: "loading",
                    width: "80px",
                  }),
                (null === (j = D.list) || void 0 === j ? void 0 : j.length) >
                  0 &&
                  (P
                    ? (0, y.jsx)("button", {
                        onClick: () =>
                          (() => {
                            if (!P) return;
                            const e = sessionStorage.getItem("libLoadMore"),
                              t = Number(e) + 1;
                            (z((0, i.A)((0, i.A)({}, I), {}, { page: t })),
                              W(!0, !1, t));
                          })(),
                        className:
                          "w-4/12 rounded-sm text-white p-2 bg-og shadow-lg shadow-stone-700/50",
                        children: N("comic.load_more"),
                      })
                    : (0, y.jsx)("p", {
                        className: "text-center mt-10",
                        children: N("comic.no_more"),
                      })),
              ],
            }),
            (0, y.jsx)(d.A, {}),
          ],
        });
      };
    },
    3438: (e, t, s) => {
      s.d(t, { A: () => r });
      var i = s(9662),
        a = s(579);
      const r = (0, i.A)(
        (0, a.jsx)("path", {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        }),
        "Close",
      );
    },
    2101: (e, t, s) => {
      s.d(t, { A: () => r });
      var i = s(9662),
        a = s(579);
      const r = (0, i.A)(
        (0, a.jsx)("path", {
          d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
        }),
        "ExpandLess",
      );
    },
    9484: (e, t, s) => {
      s.d(t, { A: () => r });
      var i = s(9662),
        a = s(579);
      const r = (0, i.A)(
        (0, a.jsx)("path", {
          d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
        }),
        "Search",
      );
    },
    6328: (e, t, s) => {
      s.d(t, { A: () => b });
      var i = s(9379),
        a = s(45),
        r = s(5043),
        o = s(3593),
        n = s(3198),
        l = s(9998),
        c = s(6240),
        d = s(653),
        u = s(5849),
        g = s(579);
      const m = [
          "addEndListener",
          "appear",
          "children",
          "easing",
          "in",
          "onEnter",
          "onEntered",
          "onEntering",
          "onExit",
          "onExited",
          "onExiting",
          "style",
          "timeout",
          "TransitionComponent",
        ],
        h = ["ownerState"];
      function x(e) {
        return "scale(".concat(e, ", ").concat(e ** 2, ")");
      }
      const p = {
          entering: { opacity: 1, transform: x(1) },
          entered: { opacity: 1, transform: "none" },
        },
        v =
          "undefined" !== typeof navigator &&
          /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
          /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
        y = r.forwardRef(function (e, t) {
          const {
              addEndListener: s,
              appear: y = !0,
              children: b,
              easing: f,
              in: j,
              onEnter: A,
              onEntered: w,
              onEntering: N,
              onExit: k,
              onExited: E,
              onExiting: _,
              style: S,
              timeout: L = "auto",
              TransitionComponent: C = l.Ay,
            } = e,
            I = (0, a.A)(e, m),
            z = (0, o.A)(),
            T = r.useRef(),
            q = (0, c.A)(),
            M = r.useRef(null),
            F = (0, u.A)(M, (0, n.A)(b), t),
            R = (e) => (t) => {
              if (e) {
                const s = M.current;
                void 0 === t ? e(s) : e(s, t);
              }
            },
            H = R(N),
            D = R((e, t) => {
              (0, d.q)(e);
              const {
                duration: s,
                delay: i,
                easing: a,
              } = (0, d.c)(
                { style: S, timeout: L, easing: f },
                { mode: "enter" },
              );
              let r;
              ("auto" === L
                ? ((r = q.transitions.getAutoHeightDuration(e.clientHeight)),
                  (T.current = r))
                : (r = s),
                (e.style.transition = [
                  q.transitions.create("opacity", { duration: r, delay: i }),
                  q.transitions.create("transform", {
                    duration: v ? r : 0.666 * r,
                    delay: i,
                    easing: a,
                  }),
                ].join(",")),
                A && A(e, t));
            }),
            Q = R(w),
            P = R(_),
            W = R((e) => {
              const {
                duration: t,
                delay: s,
                easing: i,
              } = (0, d.c)(
                { style: S, timeout: L, easing: f },
                { mode: "exit" },
              );
              let a;
              ("auto" === L
                ? ((a = q.transitions.getAutoHeightDuration(e.clientHeight)),
                  (T.current = a))
                : (a = t),
                (e.style.transition = [
                  q.transitions.create("opacity", { duration: a, delay: s }),
                  q.transitions.create("transform", {
                    duration: v ? a : 0.666 * a,
                    delay: v ? s : s || 0.333 * a,
                    easing: i,
                  }),
                ].join(",")),
                (e.style.opacity = 0),
                (e.style.transform = x(0.75)),
                k && k(e));
            }),
            Z = R(E);
          return (0, g.jsx)(
            C,
            (0, i.A)(
              (0, i.A)(
                {
                  appear: y,
                  in: j,
                  nodeRef: M,
                  onEnter: D,
                  onEntered: Q,
                  onEntering: H,
                  onExit: W,
                  onExited: Z,
                  onExiting: P,
                  addEndListener: (e) => {
                    ("auto" === L && z.start(T.current || 0, e),
                      s && s(M.current, e));
                  },
                  timeout: "auto" === L ? null : L,
                },
                I,
              ),
              {},
              {
                children: (e, t) => {
                  let { ownerState: s } = t,
                    o = (0, a.A)(t, h);
                  return r.cloneElement(
                    b,
                    (0, i.A)(
                      {
                        style: (0, i.A)(
                          (0, i.A)(
                            (0, i.A)(
                              {
                                opacity: 0,
                                transform: x(0.75),
                                visibility:
                                  "exited" !== e || j ? void 0 : "hidden",
                              },
                              p[e],
                            ),
                            S,
                          ),
                          b.props.style,
                        ),
                        ref: F,
                      },
                      o,
                    ),
                  );
                },
              },
            ),
          );
        });
      y && (y.muiSupportAuto = !0);
      const b = y;
    },
  },
]);
//# sourceMappingURL=383.1ec6476c.chunk.js.map
