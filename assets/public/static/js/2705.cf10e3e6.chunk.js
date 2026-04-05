"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [2705],
  {
    1299: (t, e, n) => {
      n.d(e, { A: () => u, q: () => d });
      var r = n(9379),
        o = n(5043),
        s = n(4836),
        i = n(5691),
        a = n(3773),
        c = n(579);
      function l(t) {
        return (0, c.jsx)(
          s.A,
          (0, r.A)((0, r.A)({}, t), {}, { direction: "down" }),
        );
      }
      const d = () => {
        const [t, e] = (0, o.useState)([]);
        return {
          snackbars: t,
          setSnackbars: e,
          showSnackbar: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "info",
              r = arguments.length > 2 ? arguments[2] : void 0;
            const o = {
              key: Date.now() + Math.random(),
              msg: t,
              type: n,
              marginTop: r,
            };
            e((t) => {
              const e = [...t, o];
              return (e.length > 3 && e.shift(), e);
            });
          },
        };
      };
      function u(t) {
        let { snackbars: e, setSnackbars: n } = t;
        const o = (t) => {
          switch (t) {
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
        return (0, c.jsx)(c.Fragment, {
          children: [...e].reverse().map((t, e) => {
            const s = t.marginTop
              ? "calc(".concat(t.marginTop, " + ").concat(70 * e, "px)")
              : "".concat(70 * e, "px");
            return (0, c.jsx)(
              i.A,
              {
                open: !0,
                autoHideDuration: 5e3,
                onClose: (e, r) => {
                  var o;
                  "clickaway" !== r &&
                    ((o = t.key), n((t) => t.filter((t) => t.key !== o)));
                },
                TransitionComponent: l,
                anchorOrigin: { vertical: "top", horizontal: "center" },
                sx: {
                  top: s,
                  "&.MuiSnackbar-root": { maxWidth: "40%", margin: "0 auto" },
                },
                children: (0, c.jsx)(a.A, {
                  elevation: 1,
                  message: t.msg,
                  sx: (0, r.A)(
                    (0, r.A)({}, o(t.type)),
                    {},
                    {
                      borderRadius: "4px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    },
                  ),
                }),
              },
              t.key,
            );
          }),
        });
      }
    },
    870: (t, e, n) => {
      (n.r(e), n.d(e, { default: () => c }));
      var r = n(5043),
        o = n(8038),
        s = n(3944),
        i = n(1299),
        a = n(579);
      const c = () => {
        const { config: t } = (0, s.H)(),
          { snackbars: e, setSnackbars: n, showSnackbar: c } = (0, i.q)(),
          [l, d] = (0, r.useState)({});
        return (0, a.jsxs)(a.Fragment, {
          children: [
            Object.entries(l)
              .filter((t) => {
                let [e] = t;
                return null === e || void 0 === e ? void 0 : e.includes("jm3");
              })
              .map((t) => {
                let [e, n] = t;
                return (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "mt-5",
                      onClick: () => {
                        return (
                          (t = e),
                          void navigator.clipboard.writeText(t).then(() => {
                            c("copied");
                          })
                        );
                        var t;
                      },
                      children: [
                        "keyName: ",
                        (0, a.jsx)("span", { className: "ml-2", children: e }),
                        " ",
                        (0, a.jsxs)("p", {
                          className: "text-og",
                          children: [n.adv_desc, "\xa0\xa0", n.adv_group_name],
                        }),
                        "type:",
                        (0, a.jsx)("span", {
                          className: "ml-2",
                          children: n.advs ? n.advs[0].adv_type : "",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "w-full flex justify-center",
                      children: (0, a.jsx)(o.A, { adKey: e }),
                    }),
                  ],
                });
              }),
            (0, a.jsx)(i.A, { snackbars: e, setSnackbars: n }),
          ],
        });
      };
    },
    3438: (t, e, n) => {
      n.d(e, { A: () => s });
      var r = n(9662),
        o = n(579);
      const s = (0, r.A)(
        (0, o.jsx)("path", {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        }),
        "Close",
      );
    },
    4836: (t, e, n) => {
      n.d(e, { A: () => h });
      var r = n(9379),
        o = n(45),
        s = n(5043),
        i = n(9998),
        a = n(3198),
        c = n(950),
        l = n(5849),
        d = n(6240),
        u = n(653),
        f = n(6078),
        p = n(579);
      const g = [
          "addEndListener",
          "appear",
          "children",
          "container",
          "direction",
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
        m = ["ownerState"];
      function x(t, e, n) {
        var r;
        const o = (function (t, e, n) {
          const r = e.getBoundingClientRect(),
            o = n && n.getBoundingClientRect(),
            s = (0, f.A)(e);
          let i;
          if (e.fakeTransform) i = e.fakeTransform;
          else {
            const t = s.getComputedStyle(e);
            i =
              t.getPropertyValue("-webkit-transform") ||
              t.getPropertyValue("transform");
          }
          let a = 0,
            c = 0;
          if (i && "none" !== i && "string" === typeof i) {
            const t = i.split("(")[1].split(")")[0].split(",");
            ((a = parseInt(t[4], 10)), (c = parseInt(t[5], 10)));
          }
          return "left" === t
            ? "translateX(".concat(
                o ? o.right + a - r.left : s.innerWidth + a - r.left,
                "px)",
              )
            : "right" === t
              ? "translateX(-".concat(
                  o ? r.right - o.left - a : r.left + r.width - a,
                  "px)",
                )
              : "up" === t
                ? "translateY(".concat(
                    o ? o.bottom + c - r.top : s.innerHeight + c - r.top,
                    "px)",
                  )
                : "translateY(-".concat(
                    o ? r.top - o.top + r.height - c : r.top + r.height - c,
                    "px)",
                  );
        })(t, e, "function" === typeof (r = n) ? r() : r);
        o && ((e.style.webkitTransform = o), (e.style.transform = o));
      }
      const h = s.forwardRef(function (t, e) {
        const n = (0, d.A)(),
          h = {
            enter: n.transitions.easing.easeOut,
            exit: n.transitions.easing.sharp,
          },
          k = {
            enter: n.transitions.duration.enteringScreen,
            exit: n.transitions.duration.leavingScreen,
          },
          {
            addEndListener: y,
            appear: b = !0,
            children: v,
            container: A,
            direction: w = "down",
            easing: E = h,
            in: j,
            onEnter: C,
            onEntered: S,
            onEntering: T,
            onExit: _,
            onExited: N,
            onExiting: R,
            style: L,
            timeout: z = k,
            TransitionComponent: q = i.Ay,
          } = t,
          H = (0, o.A)(t, g),
          M = s.useRef(null),
          O = (0, l.A)((0, a.A)(v), M, e),
          B = (t) => (e) => {
            t && (void 0 === e ? t(M.current) : t(M.current, e));
          },
          D = B((t, e) => {
            (x(w, t, A), (0, u.q)(t), C && C(t, e));
          }),
          F = B((t, e) => {
            const o = (0, u.c)(
              { timeout: z, style: L, easing: E },
              { mode: "enter" },
            );
            ((t.style.webkitTransition = n.transitions.create(
              "-webkit-transform",
              (0, r.A)({}, o),
            )),
              (t.style.transition = n.transitions.create(
                "transform",
                (0, r.A)({}, o),
              )),
              (t.style.webkitTransform = "none"),
              (t.style.transform = "none"),
              T && T(t, e));
          }),
          I = B(S),
          P = B(R),
          V = B((t) => {
            const e = (0, u.c)(
              { timeout: z, style: L, easing: E },
              { mode: "exit" },
            );
            ((t.style.webkitTransition = n.transitions.create(
              "-webkit-transform",
              e,
            )),
              (t.style.transition = n.transitions.create("transform", e)),
              x(w, t, A),
              _ && _(t));
          }),
          W = B((t) => {
            ((t.style.webkitTransition = ""),
              (t.style.transition = ""),
              N && N(t));
          }),
          X = s.useCallback(() => {
            M.current && x(w, M.current, A);
          }, [w, A]);
        return (
          s.useEffect(() => {
            if (j || "down" === w || "right" === w) return;
            const t = (0, c.A)(() => {
                M.current && x(w, M.current, A);
              }),
              e = (0, f.A)(M.current);
            return (
              e.addEventListener("resize", t),
              () => {
                (t.clear(), e.removeEventListener("resize", t));
              }
            );
          }, [w, j, A]),
          s.useEffect(() => {
            j || X();
          }, [j, X]),
          (0, p.jsx)(
            q,
            (0, r.A)(
              (0, r.A)(
                {
                  nodeRef: M,
                  onEnter: D,
                  onEntered: I,
                  onEntering: F,
                  onExit: V,
                  onExited: W,
                  onExiting: P,
                  addEndListener: (t) => {
                    y && y(M.current, t);
                  },
                  appear: b,
                  in: j,
                  timeout: z,
                },
                H,
              ),
              {},
              {
                children: (t, e) => {
                  let { ownerState: n } = e,
                    i = (0, o.A)(e, m);
                  return s.cloneElement(
                    v,
                    (0, r.A)(
                      {
                        ref: O,
                        style: (0, r.A)(
                          (0, r.A)(
                            {
                              visibility:
                                "exited" !== t || j ? void 0 : "hidden",
                            },
                            L,
                          ),
                          v.props.style,
                        ),
                      },
                      i,
                    ),
                  );
                },
              },
            ),
          )
        );
      });
    },
  },
]);
//# sourceMappingURL=2705.cf10e3e6.chunk.js.map
