// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'
import '@fontsource/georama/latin-700-italic.css'
import '@fontsource/victor-mono/400.css'
import '@fontsource/victor-mono/latin-400-italic.css'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-body font-serif' }

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Will Clare',
  })

  head.meta.push({
    name: 'keywords',
    content: 'willclareweb, Web Development, Website, Graphic Design, Branding',
  })

  head.meta.push({
    name: 'description',
    content: 'willclareweb - Websites // Branding // Graphic Design',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content: 'willclareweb - Websites // Branding // Graphic Design',
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'willclareweb - Websites // Branding // Graphic Design',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content: 'willclareweb - Websites // Branding // Graphic Design',
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'willclareweb - Websites // Branding // Graphic Design',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

}
