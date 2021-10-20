<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

      <g-image
        class="block h-24 w-auto mt-6 md:mx-auto"
        alt="willclareweb's Logo"
        src="~/assets/img/wcw-logo.svg"
      />
      <h1 class="font-maintitle font-bold text-5xl leading-none text-fgbrown md:text-center">willclareweb</h1>
      <h2 class="italic text-base mt-0 mb-6 md:text-center">This website is under construction</h2>

      <p class="md:text-center">Branding // Websites // Graphic Design // Art // Music</p>
      <p class="md:text-center"><strong>willclareweb is all about bringing businesses into the <i>now.</i></strong></p>
      <p class="md:text-center">We make your business stand out as much as your product does. Our specialties are developing <i>awesome branding</i> and building <i>lightning-fast websites</i> to bring your project to the front of its field.</p>

      <div class="md:text-center">
        <a class="inline-block px-4 py-2 border-double border-black border-4 text-black" href="mailto:yo@willclareweb.com?subject=Query from willclareweb.com">Contact Me</a>
      </div>

  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "willclareweb // Under Construction"
  }
};
</script>
