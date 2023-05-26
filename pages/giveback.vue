<template>
  <Header />
  <!--Page Title-->
  <section class="donate-page-title">
    <div class="auto-container">
      <h1>Give Back</h1>
      <ul class="bread-crumb clearfix">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li class="active">Give Back</li>
      </ul>
    </div>
  </section>

  <!--Donate Now Section-->
  <section class="donate-now">
    <div class="outer-container">
      <div class="centered-title">
        <h2>Donate Now</h2>
        <div class="desc-text">GOFUND ME</div>
      </div>

      <div
        class="donate-form wow fadeInDown"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <form
          method="post"
          action="https://html.themexriver.com/helping-hands/helping-hands/donation.html"
        >
          <a href="https://gofund.me/341c0bc5" target="_blank">
            <button type="button" class="theme-btn btn-style-two light">
              Donate
              <span class="sep-icon"><i class="fa fa-angle-right"></i></span>
            </button>
          </a>
        </form>
      </div>
    </div>
  </section>

  <Sponser />
  <Footer />
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Give Back - Moving Forward Together",
      meta: [
        {
          name: "description",
          content: "This is the give back for Moving Forward Together",
        },
      ],
    });
  },
};
</script>

<style></style>
