<template>
  <Header />
  <!--Page Title-->
  <section class="about-page-title">
    <div class="auto-container">
      <!-- <h1>Membership</h1> -->
    </div>
  </section>

  <!--What We Do Section-->
  <section class="what-we-do">
    <div class="outer-container">
      <div class="content-outer clearfix">
        <!--Content Column-->
        <div class="content-column">
          <div class="lined-title"><h2>Membership</h2></div>
          <div class="default-text">
            Moving Forward Together (MFT) is committed to supporting, uplifting
            and empowering ourselves and our communities! <br />
            Our goal is to work together and forge partnerships with other
            non-profit organizations to provide the necessary tools, resources,
            and education to help our communities improve:
          </div>
          <div class="lined-title"><h2>Benefits of Membership</h2></div>

          <!--List Style One-->
          <ul class="list-style-one">
            <li>
              Ability to improve our communities through community service and
              fundraising
            </li>
            <li>Access to educational workshops and seminars</li>
            <li>Networking and team building activities and events</li>
            <li>
              Platform to promote your small business and support other small
              businesses/entrepreneurs
            </li>
            <li>
              Contact list of members with diverse professional backgrounds
              (i.e., Health care, Financial Literacy, Technology, Real Estate,
              Beauty and Wellness, Travel and more)
            </li>
            <li>Participate in group economic projects</li>
          </ul>
          <div class="lined-title">
            <h2>Membership Committees</h2>
          </div>

          <!--List Style One-->
          <ul class="list-style-one">
            <li>Educational Workshop</li>
            <li>Care and Encouragement</li>
            <li>Volunteer Outreach</li>
            <li>Economics</li>
            <li>Special Events</li>
            <li>Fundraising</li>
            <li>Marketing</li>
          </ul>

          <div class="lined-title">
            <h2>Interested in Membership? Contact Us</h2>
          </div>
          <NuxtLink to="contact" class="theme-btn btn-style-two"
            >Contact Us
            <span class="sep-icon"><i class="fa fa-angle-right"></i></span
          ></NuxtLink>
        </div>

        <!--Image Column-->
        <div
          class="image-column wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <figure class="image-box">
            <img
              src="@/assets/images/295302058_568172274897195_6367048949004839852_n.jpg"
              alt=""
            />
            <!-- <div class="overlay">
                <div class="square-box"></div>
                <h2>This has to be ended <br />right now</h2>
              </div> -->
          </figure>
        </div>
      </div>
    </div>
  </section>

  <Footer />
  <!-- </section> -->
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Membership - Moving Forward Together",
      meta: [
        {
          name: "description",
          content: "This is the Membership Page for Moving Forward Together",
        },
      ],
    });
  },
};
</script>
