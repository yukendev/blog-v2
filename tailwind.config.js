const { DEFAULT_THEME } = require("@mantine/core");
const mantineColorsForTailwind = {};
for (const [name, colors] of Object.entries(DEFAULT_THEME.colors)) {
  mantineColorsForTailwind[name] = colors.reduce((obj, color, index) => {
    obj[index] = color;
    return obj;
  }, {});
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Mantine UIのprimary colorをパレットに追加
        "primary-0": "var(--mantine-primary-color-0)",
        "primary-1": "var(--mantine-primary-color-1)",
        "primary-2": "var(--mantine-primary-color-2)",
        "primary-3": "var(--mantine-primary-color-3)",
        "primary-4": "var(--mantine-primary-color-4)",
        "primary-5": "var(--mantine-primary-color-5)",
        "primary-6": "var(--mantine-primary-color-6)",
        "primary-7": "var(--mantine-primary-color-7)",
        "primary-8": "var(--mantine-primary-color-8)",
        "primary-9": "var(--mantine-primary-color-9)",

        // Mantine UIのその他の色をパレットに追加
        ...mantineColorsForTailwind,

        "category-tech": "var(--mantine-color-p-navy-9)",
        "category-book": "var(--mantine-color-p-yellow-5)",
        "category-note": "var(--mantine-color-p-green-9)",
      },
      // メディアクエリのブレイクポイントをMantine UIと合わせる
      // https://mantine.dev/styles/responsive/
      screens: {
        sm: "30em",
        md: "48em",
        lg: "64em",
        xl: "74em",
        "2xl": "90em",
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Mantine UIのベーススタイルと競合するため、TailwindのベーススタイルはOFFにしておく
    // https://tailwindcss.com/docs/preflight#disabling-preflight
    preflight: false,
  },
};
