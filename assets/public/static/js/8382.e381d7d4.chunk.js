"use strict";
(self.webpackChunk_18comic_react = self.webpackChunk_18comic_react || []).push([
  [8382],
  {
    8382: (e, t, c) => {
      (c.r(t), c.d(t, { default: () => s }));
      var a = c(579);
      const s = () =>
        (0, a.jsxs)("div", {
          className:
            "dark:bg-nbk min-h-screen flex flex-col justify-center items-center",
          children: [
            (0, a.jsx)("button", {
              onClick: () => (window.location.href = "/"),
              className: "bg-og text-white rounded-lg p-2 my-4",
              children: "\u56de\u4e0a\u4e00\u9801",
            }),
            (0, a.jsx)("img", {
              src: "/images/cover_default.jpg",
              alt: "cover_default",
              loading: "lazy",
              onLoad: (e) => {
                e.target.style.opacity = "1";
              },
              onError: (e) => {
                e.target.src = "/images/cover_default.jpg";
              },
              className: "object-cover rounded-md w-10/12 h-auto",
              style: { opacity: "0", transition: "opacity 0.5s ease-in-out" },
            }),
            (0, a.jsx)("p", {
              className: "text-center my-14",
              children: "Lost...",
            }),
          ],
        });
    },
  },
]);
//# sourceMappingURL=8382.e381d7d4.chunk.js.map
