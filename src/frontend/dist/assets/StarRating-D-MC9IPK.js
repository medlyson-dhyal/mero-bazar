import { j as jsxRuntimeExports } from "./index-phpTyq3V.js";
import { c as createLucideIcon } from "./Layout-hwjnUqQC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
      key: "2ksp49"
    }
  ]
];
const StarHalf = createLucideIcon("star-half", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function StarRating({
  rating,
  size = "sm",
  showCount = false,
  count
}) {
  const stars = rating / 10;
  const fullStars = Math.floor(stars);
  const hasHalf = stars - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  const iconSize = size === "sm" ? 12 : 16;
  const textClass = size === "sm" ? "text-xs" : "text-sm";
  const fullKeys = ["f1", "f2", "f3", "f4", "f5"].slice(0, fullStars);
  const emptyKeys = ["e1", "e2", "e3", "e4", "e5"].slice(0, emptyStars);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
      fullKeys.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: iconSize, className: "fill-primary text-primary" }, k)),
      hasHalf && /* @__PURE__ */ jsxRuntimeExports.jsx(StarHalf, { size: iconSize, className: "fill-primary text-primary" }),
      emptyKeys.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: iconSize, className: "text-muted-foreground/40" }, k))
    ] }),
    showCount && count !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${textClass} text-muted-foreground`, children: [
      "(",
      count.toLocaleString(),
      ")"
    ] })
  ] });
}
export {
  StarRating as S,
  Star as a
};
