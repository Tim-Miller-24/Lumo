// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: {
  //   enabled: true,
  // },
  nitro: {
    compressPublicAssets: true,
    vercel: {
      functions: {
        maxDuration: 300,
      }
    }
  },


  css: [
    '@/assets/styles/_reset.css',
    '@/assets/styles/_fonts.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_global.scss";
            @import "@/assets/styles/index.scss";
          `,
        },
      },
    },
    plugins: [
      // Inspector({
      //   toggleButtonVisibility: 'always',
      // }),
    ],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Lumo',
      meta: [
        {
          name: 'description',
          content: '',
        },
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
       },
      ],

      // script: [
      //   {
      //     key: 'ymap',
      //     type: 'text/javascript',
      //     async: true,
      //     // src: `https://api-maps.yandex.ru/2.1/?apikey=d6cd6610-1c47-469b-a0a8-d3837c41887f&lang=ru_RU&load=Map,Placemark,GeoObject&coordorder=longlat`,
      //     src: `https://api-maps.yandex.ru/2.1/?apikey=${process.env.YMAPS_KEY}&lang=ru_RU&coordorder=longlat`,
      //   },
      // ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-lazy-load',
    ['@nuxtjs/robots', { configPath: "~/server/robots.config" }],
    "@nuxtjs/sitemap"
  ],

  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 365 , // Время жизни куки в секундах (сейчас стоит год)
      path: '/',    // Путь для куки
      sameSite: 'lax', // Политика безопасности
    },
  },

  // sitemap: {
  //   excludeAppSources: true,
  //   gzip: true,
  //   "debug": true,
  //   sources: ['/api/sitemap'],
  // },

  pinia: {
    storesDirs: ['./store/**'],
  },

  // routeRules: {
  //   '/api/wp-json/**': {
  //     proxy: {
  //       to: `${process.env.BASE_URL}/wp-json/**`,
  //     },
  //   },
  //   '/api/wp-content/**': {
  //     proxy: {
  //       to: `${process.env.BASE_URL}/wp-content/**`,
  //     },
  //   },
  // },

  lazyLoad: {
    images: false,
    videos: false,
    audios: false,
    iframes: false,
    native: false,
    directiveOnly: true,
    defaultImage: '/images/default-load.gif',
  },

  // runtimeConfig: {
  //   public: {
  //     BASE_URL: process.env.BASE_URL,
  //     YMAPS_KEY: process.env.YMAPS_KEY,
  //     CONSUMER_KEY: process.env.CONSUMER_KEY,
  //     CONSUMER_SECRET: process.env.CONSUMER_SECRET,
  //   },
  // },
  router: {
    mode: 'history',
    options: {}
  },

  compatibilityDate: '2024-07-24',
})