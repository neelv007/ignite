module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    // PurgeCSS - Remove unused CSS in production
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './src/pages/**/*.{js,jsx,ts,tsx}',
                './src/components/**/*.{js,jsx,ts,tsx}',
              ],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: {
                // Keep Bootstrap grid and utility classes
                standard: [
                  /^col-/,
                  /^row/,
                  /^container/,
                  /^d-/,
                  /^flex-/,
                  /^justify-/,
                  /^align-/,
                  /^text-/,
                  /^bg-/,
                  /^p[trblxy]?-/,
                  /^m[trblxy]?-/,
                  /^w-/,
                  /^h-/,
                  /^position-/,
                  /^btn/,
                  /^nav/,
                  /^navbar/,
                  /^dropdown/,
                  /^modal/,
                  /^fade/,
                  /^show/,
                  /^collapse/,
                  /^collapsing/,
                  /^active/,
                  /^disabled/,
                  /^visually-hidden/,
                  /^sr-only/,
                  // Custom classes
                  /^highlight/,
                  /^buttonBlue/,
                  /^buttonSkyBlue/,
                  /^nodecoration/,
                  /^sticky-demo-button/,
                  /^lenis/,
                  /^is-/,
                  /^fade-in/,
                ],
                deep: [/modal/, /dropdown/, /tooltip/, /popover/],
                greedy: [/^nav/, /^btn/, /^form/],
              },
            },
          ],
        ]
      : []),
  ],
};
