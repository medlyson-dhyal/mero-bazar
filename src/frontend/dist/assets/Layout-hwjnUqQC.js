import { b as useRouterState, r as reactExports, R as React, j as jsxRuntimeExports, L as Link } from "./index-phpTyq3V.js";
function useLocation(opts) {
  return useRouterState({
    select: (state) => state.location
  });
}
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    React.useCallback(() => selector(api.getState()), [api, selector]),
    React.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, void 0);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(name, JSON.stringify(newValue, void 0)),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
const persistImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => window.localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  let hydrationVersion = 0;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    return setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      return setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage) return;
    const currentVersion = ++hydrationVersion;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            const migration = options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
            if (migration instanceof Promise) {
              return migration.then((result) => [true, result]);
            }
            return [true, migration];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a2;
      if (currentVersion !== hydrationVersion) {
        return;
      }
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      if (currentVersion !== hydrationVersion) {
        return;
      }
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(get(), void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      if (currentVersion !== hydrationVersion) {
        return;
      }
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persist = persistImpl;
const CATEGORIES = [
  { id: "electronics", name: "Electronics", emoji: "📱", color: "#e0f0ff" },
  { id: "fashion", name: "Fashion", emoji: "👗", color: "#ffe0f0" },
  { id: "home", name: "Home & Living", emoji: "🏠", color: "#e0ffe8" },
  { id: "sports", name: "Sports", emoji: "⚽", color: "#fff8e0" },
  { id: "beauty", name: "Beauty", emoji: "💄", color: "#f0e0ff" },
  { id: "toys", name: "Toys & Games", emoji: "🎮", color: "#fff0e0" },
  { id: "books", name: "Books", emoji: "📚", color: "#e0e8ff" },
  { id: "grocery", name: "Grocery", emoji: "🛒", color: "#edffd9" }
];
const PRODUCTS = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    description: "Industry-leading noise canceling with Auto NC Optimizer. Crystal clear hands-free calling with 4 beamforming microphones. Up to 30-hour battery life with quick charging.",
    price: 27999,
    originalPrice: 34999,
    discountPercent: 20,
    rating: 47,
    reviewCount: 3842,
    images: [
      "https://picsum.photos/seed/prod1/400/400",
      "https://picsum.photos/seed/prod1b/400/400",
      "https://picsum.photos/seed/prod1c/400/400"
    ],
    category: "electronics",
    sellerId: "sony-official",
    inStock: true,
    specs: [
      ["Battery", "30 hours"],
      ["Driver", "30mm"],
      ["Weight", "250g"],
      ["Connectivity", "Bluetooth 5.2"]
    ],
    tags: ["noise-cancelling", "wireless", "premium", "hot"]
  },
  {
    id: 2,
    title: "Apple AirPods Pro 2nd Generation",
    description: "Active Noise Cancellation that blocks out the world. Transparency mode lets you hear and stay connected. Adaptive EQ automatically tunes music to your ears.",
    price: 18999,
    originalPrice: 24999,
    discountPercent: 24,
    rating: 48,
    reviewCount: 12650,
    images: [
      "https://picsum.photos/seed/prod2/400/400",
      "https://picsum.photos/seed/prod2b/400/400",
      "https://picsum.photos/seed/prod2c/400/400"
    ],
    category: "electronics",
    sellerId: "apple-authorized",
    inStock: true,
    specs: [
      ["Battery", "6+30 hours"],
      ["Chip", "H2"],
      ["Water Resistance", "IPX4"],
      ["Connectivity", "Bluetooth 5.3"]
    ],
    tags: ["apple", "wireless", "anc", "new"]
  },
  {
    id: 3,
    title: "Samsung Galaxy Watch 6 Classic 47mm",
    description: "Track your health with advanced sensors. Physical rotating bezel for intuitive navigation. Sapphire crystal glass and premium stainless steel design.",
    price: 24999,
    originalPrice: 31999,
    discountPercent: 22,
    rating: 45,
    reviewCount: 2187,
    images: [
      "https://picsum.photos/seed/prod3/400/400",
      "https://picsum.photos/seed/prod3b/400/400",
      "https://picsum.photos/seed/prod3c/400/400"
    ],
    category: "electronics",
    sellerId: "samsung-store",
    inStock: true,
    specs: [
      ["Display", "1.5 inch Super AMOLED"],
      ["Battery", "425mAh"],
      ["Water Resistance", "5ATM"],
      ["OS", "Wear OS 4"]
    ],
    tags: ["smartwatch", "samsung", "premium"]
  },
  {
    id: 4,
    title: "JBL Flip 6 Portable Waterproof Bluetooth Speaker",
    description: "Powerful JBL Original Pro Sound. 12 hours playtime. IP67 waterproof and dustproof. PartyBoost for multi-speaker connection.",
    price: 8999,
    originalPrice: 12999,
    discountPercent: 31,
    rating: 46,
    reviewCount: 5634,
    images: [
      "https://picsum.photos/seed/prod4/400/400",
      "https://picsum.photos/seed/prod4b/400/400",
      "https://picsum.photos/seed/prod4c/400/400"
    ],
    category: "electronics",
    sellerId: "jbl-official",
    inStock: true,
    specs: [
      ["Battery", "12 hours"],
      ["Power", "30W"],
      ["Water Resistance", "IP67"],
      ["Weight", "550g"]
    ],
    tags: ["portable", "waterproof", "bluetooth", "hot"]
  },
  {
    id: 5,
    title: "Logitech MX Master 3S Wireless Mouse",
    description: "8K DPI any-surface tracking. Ultra-fast MagSpeed scrolling. Multi-device control with Easy-Switch button. Ergonomic sculpted shape.",
    price: 7999,
    originalPrice: 9999,
    discountPercent: 20,
    rating: 49,
    reviewCount: 8921,
    images: [
      "https://picsum.photos/seed/prod5/400/400",
      "https://picsum.photos/seed/prod5b/400/400",
      "https://picsum.photos/seed/prod5c/400/400"
    ],
    category: "electronics",
    sellerId: "logitech-store",
    inStock: true,
    specs: [
      ["DPI", "200-8000"],
      ["Battery", "70 days"],
      ["Connectivity", "USB-C/Bluetooth"],
      ["Buttons", "7"]
    ],
    tags: ["productivity", "wireless", "ergonomic"]
  },
  {
    id: 6,
    title: "iPad Air 5th Generation 256GB WiFi",
    description: "Supercharged by M1 chip. Liquid Retina display with True Tone. Work, learn, and create like never before. All-day battery life.",
    price: 69999,
    originalPrice: 74999,
    discountPercent: 7,
    rating: 48,
    reviewCount: 4215,
    images: [
      "https://picsum.photos/seed/prod6/400/400",
      "https://picsum.photos/seed/prod6b/400/400",
      "https://picsum.photos/seed/prod6c/400/400"
    ],
    category: "electronics",
    sellerId: "apple-authorized",
    inStock: true,
    specs: [
      ["Chip", "Apple M1"],
      ["Display", "10.9 inch Liquid Retina"],
      ["Storage", "256GB"],
      ["Battery", "10 hours"]
    ],
    tags: ["apple", "tablet", "premium", "new"]
  },
  {
    id: 7,
    title: "Nike Air Max 270 Running Shoes",
    description: "Max Air unit in the heel for superior cushioning. Breathable upper mesh for all-day comfort. Iconic 270 design that turns heads everywhere you go.",
    price: 8499,
    originalPrice: 12999,
    discountPercent: 35,
    rating: 44,
    reviewCount: 7823,
    images: [
      "https://picsum.photos/seed/prod7/400/400",
      "https://picsum.photos/seed/prod7b/400/400",
      "https://picsum.photos/seed/prod7c/400/400"
    ],
    category: "fashion",
    sellerId: "nike-official",
    inStock: true,
    specs: [
      ["Material", "Mesh + Synthetic"],
      ["Sole", "Rubber"],
      ["Closure", "Lace-up"],
      ["Type", "Running"]
    ],
    tags: ["nike", "running", "comfortable", "hot"]
  },
  {
    id: 8,
    title: "Levi's 511 Slim Fit Jeans",
    description: "Slim through the hip and thigh, straight leg opening. Stretch fabric for all-day comfort and movement. Classic 5-pocket styling.",
    price: 3499,
    originalPrice: 4999,
    discountPercent: 30,
    rating: 43,
    reviewCount: 15432,
    images: [
      "https://picsum.photos/seed/prod8/400/400",
      "https://picsum.photos/seed/prod8b/400/400",
      "https://picsum.photos/seed/prod8c/400/400"
    ],
    category: "fashion",
    sellerId: "levis-store",
    inStock: true,
    specs: [
      ["Fit", "Slim"],
      ["Material", "99% Cotton, 1% Elastane"],
      ["Rise", "Mid"],
      ["Closure", "Zip fly"]
    ],
    tags: ["denim", "casual", "classic"]
  },
  {
    id: 9,
    title: "Adidas Ultraboost 23 Running Shoes",
    description: "Responsive BOOST midsole returns energy with every step. Primeknit+ upper wraps your foot in adaptive support. Continental rubber outsole.",
    price: 11999,
    originalPrice: 17999,
    discountPercent: 33,
    rating: 47,
    reviewCount: 6234,
    images: [
      "https://picsum.photos/seed/prod9/400/400",
      "https://picsum.photos/seed/prod9b/400/400",
      "https://picsum.photos/seed/prod9c/400/400"
    ],
    category: "fashion",
    sellerId: "adidas-official",
    inStock: true,
    specs: [
      ["Upper", "Primeknit+"],
      ["Midsole", "BOOST"],
      ["Outsole", "Continental Rubber"],
      ["Drop", "10mm"]
    ],
    tags: ["adidas", "running", "premium"]
  },
  {
    id: 10,
    title: "Dyson V15 Detect Absolute Vacuum",
    description: "Laser reveals invisible dust. Automatically adapts suction power. Intelligently optimizes cleaning for the task. Up to 60 minutes of fade-free power.",
    price: 54999,
    originalPrice: 64999,
    discountPercent: 15,
    rating: 48,
    reviewCount: 3921,
    images: [
      "https://picsum.photos/seed/prod10/400/400",
      "https://picsum.photos/seed/prod10b/400/400",
      "https://picsum.photos/seed/prod10c/400/400"
    ],
    category: "home",
    sellerId: "dyson-official",
    inStock: true,
    specs: [
      ["Battery", "60 minutes"],
      ["Bin Volume", "0.77L"],
      ["Weight", "3.1kg"],
      ["Suction", "230AW"]
    ],
    tags: ["dyson", "vacuum", "premium", "new"]
  },
  {
    id: 11,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker 6Qt",
    description: "7 appliances in 1: pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker and warmer. 13 customizable programs.",
    price: 6999,
    originalPrice: 9999,
    discountPercent: 30,
    rating: 47,
    reviewCount: 28456,
    images: [
      "https://picsum.photos/seed/prod11/400/400",
      "https://picsum.photos/seed/prod11b/400/400",
      "https://picsum.photos/seed/prod11c/400/400"
    ],
    category: "home",
    sellerId: "instant-pot",
    inStock: true,
    specs: [
      ["Capacity", "6 Quart"],
      ["Programs", "13"],
      ["Safety", "10 mechanisms"],
      ["Voltage", "110V"]
    ],
    tags: ["kitchen", "appliance", "cooking", "hot"]
  },
  {
    id: 12,
    title: "Philips Hue Smart Bulb Starter Kit (4 bulbs)",
    description: "Control with your voice using Alexa, Google, or Siri. 16 million colors and warm-to-cool white. Schedule lights and create automations.",
    price: 9499,
    originalPrice: 13999,
    discountPercent: 32,
    rating: 45,
    reviewCount: 11234,
    images: [
      "https://picsum.photos/seed/prod12/400/400",
      "https://picsum.photos/seed/prod12b/400/400",
      "https://picsum.photos/seed/prod12c/400/400"
    ],
    category: "home",
    sellerId: "philips-store",
    inStock: true,
    specs: [
      ["Colors", "16 million"],
      ["Connectivity", "Zigbee/Bluetooth"],
      ["Lumens", "800lm each"],
      ["Lifespan", "25,000 hours"]
    ],
    tags: ["smart-home", "lighting", "alexa"]
  },
  {
    id: 13,
    title: "Yoga Mat Premium Non-Slip 6mm Thick",
    description: "Extra thick 6mm for superior cushioning. Non-slip surface for stability in any pose. Eco-friendly TPE material. Comes with carrying strap.",
    price: 1999,
    originalPrice: 3499,
    discountPercent: 43,
    rating: 44,
    reviewCount: 9876,
    images: [
      "https://picsum.photos/seed/prod13/400/400",
      "https://picsum.photos/seed/prod13b/400/400",
      "https://picsum.photos/seed/prod13c/400/400"
    ],
    category: "sports",
    sellerId: "sporty-gear",
    inStock: true,
    specs: [
      ["Thickness", "6mm"],
      ["Material", "TPE"],
      ["Size", "183cm x 61cm"],
      ["Weight", "1.2kg"]
    ],
    tags: ["yoga", "fitness", "eco-friendly"]
  },
  {
    id: 14,
    title: "Resistance Bands Set 11-Piece Exercise Kit",
    description: "5 resistance levels from 10-50 lbs. Includes door anchor, ankle straps, and handles. Perfect for home workouts, physical therapy, and strength training.",
    price: 1499,
    originalPrice: 2499,
    discountPercent: 40,
    rating: 43,
    reviewCount: 17832,
    images: [
      "https://picsum.photos/seed/prod14/400/400",
      "https://picsum.photos/seed/prod14b/400/400",
      "https://picsum.photos/seed/prod14c/400/400"
    ],
    category: "sports",
    sellerId: "fit-zone",
    inStock: true,
    specs: [
      ["Resistance", "10-50 lbs"],
      ["Pieces", "11"],
      ["Material", "Natural Latex"],
      ["Usage", "Home/Gym"]
    ],
    tags: ["fitness", "home-workout", "beginner"]
  },
  {
    id: 15,
    title: "L'Oreal Paris Revitalift Triple Power Anti-Aging Serum",
    description: "Visibly reduces wrinkles in just 4 weeks. Pro-Retinol, Vitamin C & Hyaluronic Acid triple action formula. Dermatologist tested.",
    price: 2899,
    originalPrice: 4299,
    discountPercent: 33,
    rating: 44,
    reviewCount: 6543,
    images: [
      "https://picsum.photos/seed/prod15/400/400",
      "https://picsum.photos/seed/prod15b/400/400",
      "https://picsum.photos/seed/prod15c/400/400"
    ],
    category: "beauty",
    sellerId: "loreal-official",
    inStock: true,
    specs: [
      ["Volume", "30ml"],
      ["Skin Type", "All"],
      ["Key Ingredients", "Retinol, Vit C, Hyaluronic"],
      ["Usage", "Morning/Night"]
    ],
    tags: ["skincare", "anti-aging", "serum"]
  },
  {
    id: 16,
    title: "Nintendo Switch OLED Model with Neon Blue and Red Joy-Con",
    description: "Vivid 7-inch OLED screen. Enhanced audio. 64GB internal storage. Wide adjustable stand. Play at home on TV or take it on the go.",
    price: 34999,
    originalPrice: 39999,
    discountPercent: 13,
    rating: 48,
    reviewCount: 21456,
    images: [
      "https://picsum.photos/seed/prod16/400/400",
      "https://picsum.photos/seed/prod16b/400/400",
      "https://picsum.photos/seed/prod16c/400/400"
    ],
    category: "toys",
    sellerId: "nintendo-store",
    inStock: true,
    specs: [
      ["Display", "7-inch OLED"],
      ["Storage", "64GB"],
      ["Battery", "4.5-9 hours"],
      ["Players", "Up to 8 online"]
    ],
    tags: ["gaming", "nintendo", "portable", "hot"]
  },
  {
    id: 17,
    title: "LEGO Technic Lamborghini Huracán Tecnica 806 Pieces",
    description: "An authentic LEGO replica of the Lamborghini Huracán Tecnica. Features V10 engine with moving pistons, aerodynamic body and working steering.",
    price: 5999,
    originalPrice: 7499,
    discountPercent: 20,
    rating: 47,
    reviewCount: 3421,
    images: [
      "https://picsum.photos/seed/prod17/400/400",
      "https://picsum.photos/seed/prod17b/400/400",
      "https://picsum.photos/seed/prod17c/400/400"
    ],
    category: "toys",
    sellerId: "lego-store",
    inStock: true,
    specs: [
      ["Pieces", "806"],
      ["Age", "18+"],
      ["Length", "12 inches"],
      ["Theme", "Technic"]
    ],
    tags: ["lego", "collector", "premium"]
  },
  {
    id: 18,
    title: "Atomic Habits by James Clear — Hardcover",
    description: "Tiny Changes, Remarkable Results. The #1 New York Times bestseller. Over 15 million copies sold. Transform your life with habits that stick.",
    price: 899,
    originalPrice: 1499,
    discountPercent: 40,
    rating: 49,
    reviewCount: 89234,
    images: [
      "https://picsum.photos/seed/prod18/400/400",
      "https://picsum.photos/seed/prod18b/400/400",
      "https://picsum.photos/seed/prod18c/400/400"
    ],
    category: "books",
    sellerId: "books-corner",
    inStock: true,
    specs: [
      ["Pages", "320"],
      ["Language", "English"],
      ["Publisher", "Penguin Random House"],
      ["Format", "Hardcover"]
    ],
    tags: ["self-help", "bestseller", "habits"]
  },
  {
    id: 19,
    title: "Anker 65W Nano II Fast Charger with USB-C Cable",
    description: "PowerIQ 3.0 Gen2 enables 65W fast charging. ActiveShield safety features. Compact size fits anywhere. Compatible with MacBook, iPhone, Android.",
    price: 2499,
    originalPrice: 3999,
    discountPercent: 38,
    rating: 47,
    reviewCount: 14567,
    images: [
      "https://picsum.photos/seed/prod19/400/400",
      "https://picsum.photos/seed/prod19b/400/400",
      "https://picsum.photos/seed/prod19c/400/400"
    ],
    category: "electronics",
    sellerId: "anker-store",
    inStock: true,
    specs: [
      ["Output", "65W"],
      ["Port", "USB-C"],
      ["Cable Length", "6ft"],
      ["Compatibility", "Universal USB-C"]
    ],
    tags: ["charger", "fast-charging", "anker"]
  },
  {
    id: 20,
    title: "Beats Fit Pro True Wireless Earbuds",
    description: "Active Noise Cancelling blocks external noise. Transparency mode lets you hear the world around you. Flexible, secure-fit wingtips stay in place.",
    price: 15999,
    originalPrice: 19999,
    discountPercent: 20,
    rating: 46,
    reviewCount: 7823,
    images: [
      "https://picsum.photos/seed/prod20/400/400",
      "https://picsum.photos/seed/prod20b/400/400",
      "https://picsum.photos/seed/prod20c/400/400"
    ],
    category: "electronics",
    sellerId: "beats-store",
    inStock: true,
    specs: [
      ["Battery", "6+18 hours"],
      ["Chip", "Apple H1"],
      ["Water Resistance", "IPX4"],
      ["Connectivity", "Bluetooth 5.0"]
    ],
    tags: ["beats", "wireless", "anc", "fitness"]
  },
  {
    id: 21,
    title: "Under Armour HOVR Phantom 3 Running Shoes",
    description: "UA HOVR technology provides 'zero gravity feel' to maintain energy return. Connected running app tracks your run metrics in real time.",
    price: 9499,
    originalPrice: 14999,
    discountPercent: 37,
    rating: 45,
    reviewCount: 4231,
    images: [
      "https://picsum.photos/seed/prod21/400/400",
      "https://picsum.photos/seed/prod21b/400/400",
      "https://picsum.photos/seed/prod21c/400/400"
    ],
    category: "sports",
    sellerId: "under-armour",
    inStock: true,
    specs: [
      ["Technology", "UA HOVR"],
      ["Upper", "Engineered Mesh"],
      ["Connectivity", "MapMyRun"],
      ["Drop", "8mm"]
    ],
    tags: ["running", "smart", "connected"]
  },
  {
    id: 22,
    title: "Maybelline Fit Me Matte + Poreless Foundation",
    description: "Natural coverage that blurs pores and controls shine. Lightweight formula that looks and feels like your skin. Available in 40+ shades.",
    price: 799,
    originalPrice: 1299,
    discountPercent: 38,
    rating: 43,
    reviewCount: 23456,
    images: [
      "https://picsum.photos/seed/prod22/400/400",
      "https://picsum.photos/seed/prod22b/400/400",
      "https://picsum.photos/seed/prod22c/400/400"
    ],
    category: "beauty",
    sellerId: "maybelline-official",
    inStock: true,
    specs: [
      ["Volume", "30ml"],
      ["Coverage", "Medium-Full"],
      ["Finish", "Matte"],
      ["SPF", "No SPF"]
    ],
    tags: ["makeup", "foundation", "affordable"]
  },
  {
    id: 23,
    title: "Xiaomi Redmi Note 13 Pro 5G 256GB",
    description: "200MP OIS flagship camera. 5000mAh battery with 67W HyperCharge. 6.67 inch AMOLED 120Hz display. Snapdragon 7s Gen 2 processor.",
    price: 24999,
    originalPrice: 29999,
    discountPercent: 17,
    rating: 44,
    reviewCount: 6789,
    images: [
      "https://picsum.photos/seed/prod23/400/400",
      "https://picsum.photos/seed/prod23b/400/400",
      "https://picsum.photos/seed/prod23c/400/400"
    ],
    category: "electronics",
    sellerId: "xiaomi-store",
    inStock: true,
    specs: [
      ["Camera", "200MP OIS"],
      ["Battery", "5000mAh + 67W"],
      ["Display", '6.67" 120Hz AMOLED'],
      ["Storage", "256GB"]
    ],
    tags: ["smartphone", "5g", "camera", "new"]
  },
  {
    id: 24,
    title: "Nespresso Vertuo Next Coffee Machine",
    description: "5 cup sizes from Espresso to Alto. Centrifusion extraction for perfect crema. Bluetooth connected for personalized coffee experiences. Eco-friendly design.",
    price: 13999,
    originalPrice: 18999,
    discountPercent: 26,
    rating: 46,
    reviewCount: 8934,
    images: [
      "https://picsum.photos/seed/prod24/400/400",
      "https://picsum.photos/seed/prod24b/400/400",
      "https://picsum.photos/seed/prod24c/400/400"
    ],
    category: "home",
    sellerId: "nespresso-store",
    inStock: true,
    specs: [
      ["Cup Sizes", "5 (40ml-414ml)"],
      ["Heat Up", "30 seconds"],
      ["Water Tank", "1.1L"],
      ["Connectivity", "Bluetooth"]
    ],
    tags: ["coffee", "kitchen", "smart", "premium"]
  },
  {
    id: 25,
    title: "Garmin Forerunner 255 GPS Running Watch",
    description: "Advanced running dynamics with new physiological metrics. Up to 14 days battery life in smartwatch mode. Multi-band GPS for accuracy.",
    price: 22999,
    originalPrice: 27999,
    discountPercent: 18,
    rating: 47,
    reviewCount: 3124,
    images: [
      "https://picsum.photos/seed/prod25/400/400",
      "https://picsum.photos/seed/prod25b/400/400",
      "https://picsum.photos/seed/prod25c/400/400"
    ],
    category: "sports",
    sellerId: "garmin-official",
    inStock: true,
    specs: [
      ["Battery", "14 days"],
      ["GPS", "Multi-band"],
      ["Water Resistance", "5ATM"],
      ["Display", "1.3 inch MIP"]
    ],
    tags: ["running", "gps", "garmin", "fitness"]
  }
];
const BANNER_SLIDES = [
  {
    id: 1,
    title: "Featured Promotions",
    subtitle: "Up to 40% off premium electronics",
    cta: "Shop Now",
    image: "/assets/generated/hero-banner.dim_800x400.jpg",
    tag: "HOT DEALS"
  },
  {
    id: 2,
    title: "Fashion Flash Sale",
    subtitle: "Top brands at unbeatable prices",
    cta: "Explore",
    image: "/assets/generated/hero-banner.dim_800x400.jpg",
    tag: "LIMITED TIME"
  },
  {
    id: 3,
    title: "New Arrivals This Week",
    subtitle: "Discover the latest trends",
    cta: "Browse",
    image: "/assets/generated/hero-banner.dim_800x400.jpg",
    tag: "NEW"
  }
];
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}
function getProductsByCategory(category) {
  return PRODUCTS.filter((p) => p.category === category);
}
function getFeaturedProducts() {
  return PRODUCTS.filter(
    (p) => p.tags.includes("hot") || p.tags.includes("new")
  ).slice(0, 8);
}
function getDiscountedProducts() {
  return [...PRODUCTS].sort((a, b) => b.discountPercent - a.discountPercent).slice(0, 12);
}
const useCartStore = create()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (productId) => {
        set((state) => {
          const existing = state.items.find((i) => i.productId === productId);
          if (existing) {
            return {
              items: state.items.map(
                (i) => i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
              )
            };
          }
          return { items: [...state.items, { productId, quantity: 1 }] };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map(
            (i) => i.productId === productId ? { ...i, quantity } : i
          )
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
      getTotalPrice: () => {
        return get().items.reduce((sum, item) => {
          const product = getProductById(item.productId);
          return sum + (product ? product.price * item.quantity : 0);
        }, 0);
      },
      getItemsWithProducts: () => {
        return get().items.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return { ...item, product };
        }).filter((item) => item !== null);
      }
    }),
    {
      name: "daraz-cart"
    }
  )
);
const NAV_ITEMS = [
  { to: "/", icon: House, label: "Home", ocid: "nav.home_tab" },
  {
    to: "/categories",
    icon: Grid3x3,
    label: "Categories",
    ocid: "nav.categories_tab"
  },
  { to: "/search", icon: Search, label: "Search", ocid: "nav.search_tab" },
  { to: "/cart", icon: ShoppingCart, label: "Cart", ocid: "nav.cart_tab" },
  { to: "/account", icon: User, label: "Account", ocid: "nav.account_tab" }
];
function BottomNav() {
  const location = useLocation();
  const totalCount = useCartStore((s) => s.getTotalCount());
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-area-pb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto flex items-center", children: NAV_ITEMS.map(({ to, icon: Icon2, label, ocid }) => {
    const isActive = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
    const isCart = to === "/cart";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to,
        "data-ocid": ocid,
        className: `flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-smooth
                ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { size: 22, strokeWidth: isActive ? 2.5 : 2 }),
            isCart && totalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-2 min-w-[16px] h-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center px-0.5", children: totalCount > 99 ? "99+" : totalCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-[10px] font-medium leading-none ${isActive ? "font-bold" : ""}`,
              children: label
            }
          ),
          isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-8 h-0.5 bg-primary rounded-full" })
        ]
      },
      to
    );
  }) }) });
}
function Header({
  title,
  showSearch = true,
  showBack = false
}) {
  const totalCount = useCartStore((s) => s.getTotalCount());
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 bg-card border-b border-border shadow-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto px-4 h-14 flex items-center gap-3", children: [
    showBack ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => window.history.back(),
        className: "p-1.5 -ml-1.5 rounded-lg text-foreground hover:bg-muted transition-smooth",
        "aria-label": "Go back",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 18l-6-6 6-6" })
          }
        )
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex items-center gap-1.5 flex-shrink-0",
        "data-ocid": "header.logo_link",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-display font-black text-sm", children: "M" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-foreground leading-none", children: "Mero Bazar" })
        ]
      }
    ),
    title && !showBack ? null : title ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 font-display font-bold text-base text-foreground truncate", children: title }) : null,
    showSearch && !title && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/search",
        "data-ocid": "header.search_button",
        className: "flex-1 flex items-center gap-2 bg-muted rounded-full px-3 py-2 text-muted-foreground hover:bg-muted/80 transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Search products..." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth",
          "aria-label": "Notifications",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/cart",
          "data-ocid": "header.cart_button",
          className: "relative p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18 }),
            totalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0.5 right-0.5 min-w-[16px] h-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center px-0.5", children: totalCount > 99 ? "99+" : totalCount })
          ]
        }
      )
    ] })
  ] }) });
}
function Layout({
  children,
  headerTitle,
  showSearch = true,
  showBack = false,
  hideHeader = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    !hideHeader && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Header,
      {
        title: headerTitle,
        showSearch,
        showBack
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pb-20 max-w-md mx-auto w-full", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, {})
  ] });
}
export {
  BANNER_SLIDES as B,
  CATEGORIES as C,
  Layout as L,
  PRODUCTS as P,
  Search as S,
  User as U,
  getDiscountedProducts as a,
  Bell as b,
  createLucideIcon as c,
  getProductById as d,
  ShoppingCart as e,
  getProductsByCategory as f,
  getFeaturedProducts as g,
  useCartStore as u
};
