module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.svelte'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
      extend: {
        typography: (theme) => ({
          dark: {
            css: {
              color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100')
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.300') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.300') }
              }
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            },
          },
        }),
      },
    },
    variants: {
      typography: ['dark'],
    },
    plugins: [require('@tailwindcss/typography')],
  }