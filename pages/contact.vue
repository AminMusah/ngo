<template>
  <Header />
  <!--Page Title-->
  <section class="page-title">
    <div class="auto-container">
      <h1>Get In Touch</h1>
      <ul class="bread-crumb clearfix">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li class="active">Contact Us</li>
      </ul>
    </div>
  </section>

  <!--Contact Section-->
  <section class="contact-section">
    <div class="auto-container">
      <!--Form Container-->
      <div
        class="form-container wow fadeInDown"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <div class="title-text">Contact Info</div>

        <!--Form-->
        <div class="form" @submit.prevent="">
          <form id="contact-form" method="post" action="">
            <div class="row clearfix">
              <div class="form-group col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="username"
                  value=""
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="email"
                  name="email"
                  value=""
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="tel"
                  name="phone"
                  value=""
                  placeholder="Phone"
                  required
                />
              </div>
              <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="location"
                  value=""
                  placeholder="Location"
                  required
                />
              </div>
              <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <select
                  name="Service"
                  required
                  style="background: transparent !important"
                >
                  <option value="Membership">Membership</option>
                  <option value="Partnership/Collaborations ">
                    Partnership/Collaborations
                  </option>
                  <option value="Real Estate Brokage">Donations</option>
                  <option value="Program and Events ">
                    Program and Events
                  </option>
                  <option value="Enquiry">Other</option>
                </select>
              </div>

              <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <textarea
                  name="message"
                  placeholder="Message.."
                  required
                ></textarea>
              </div>

              <div
                class="form-group text-center margin-top-30 col-lg-12 col-md-6 col-sm-6 col-xs-12"
              >
                <button type="submit" class="theme-btn">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content-column">
        <div class="lined-title">
          <h2>We look forward to connecting with you!</h2>
        </div>
        <div class="lead">
          Please feel free to email us at info@mftcommunity.org for additional
          questions, collaborations, philanthropic opportunities, etc.
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Contact Us - Moving Forward Together",
      meta: [
        {
          name: "description",
          content: "This is the Contact for Moving Forward Together",
        },
      ],
    });
  },
};
</script>

<style></style>
