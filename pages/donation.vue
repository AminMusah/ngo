<template>
  <Header />
  <!--Page Title-->
  <section class="donate-page-title">
    <div class="auto-container">
      <h1>Donation</h1>
      <ul class="bread-crumb clearfix">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li class="active">Donation</li>
      </ul>
    </div>
  </section>

  <!--Donate Now Section-->
  <section class="donate-now">
    <div class="outer-container">
      <div class="centered-title">
        <h2>Donate Now</h2>
        <div class="desc-text">
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto.
        </div>
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
          <div class="amount-options">
            <div class="radio-box">
              <input type="radio" name="don-payment" id="amount-1" /><label
                for="amount-1"
                ><span class="icon flaticon-tick-inside-circle"></span> $
                100</label
              >
            </div>
            <div class="radio-box">
              <input type="radio" name="don-payment" id="amount-2" /><label
                for="amount-2"
                ><span class="icon flaticon-tick-inside-circle"></span> $
                200</label
              >
            </div>
            <div class="radio-box">
              <input type="radio" name="don-payment" id="amount-3" /><label
                for="amount-3"
                ><span class="icon flaticon-tick-inside-circle"></span> $
                500</label
              >
            </div>
            <div class="radio-box">
              <input type="radio" name="don-payment" id="amount-4" /><label
                for="amount-4"
                ><span class="icon flaticon-tick-inside-circle"></span> $
                1000</label
              >
            </div>

            <div class="or">OR</div>

            <div class="other-amount">
              <input
                type="text"
                name="other-amount"
                value=""
                placeholder="- Enter Amount -"
              />
            </div>

            <button type="button" class="theme-btn btn-style-two light">
              Donate
              <span class="sep-icon"><i class="fa fa-angle-right"></i></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!--Reason to Donate-->
  <section class="reason-to-donate">
    <div class="auto-container">
      <div class="title-text">
        To verify please complete the submission form below
      </div>

      <!--Form-->
      <div
        class="form wow fadeIn"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <form
          method="post"
          action="https://html.themexriver.com/helping-hands/helping-hands/index.html"
        >
          <div class="row clearfix">
            <div class="form-group col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="fname"
                value=""
                placeholder="First Name"
              />
            </div>
            <div class="form-group col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="lname"
                value=""
                placeholder="Last Name"
              />
            </div>
            <div class="form-group col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <input type="email" name="email" value="" placeholder="Email" />
            </div>
            <div class="form-group col-lg-12 col-md-6 col-sm-6 col-xs-12">
              <select name="cause">
                <option>Cause</option>
                <option>Education</option>
                <option>Food</option>
                <option>African Children</option>
              </select>
            </div>
            <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <textarea
                name="message"
                placeholder="Why you want to help.."
              ></textarea>
            </div>

            <div
              class="form-group text-center col-lg-12 col-md-6 col-sm-6 col-xs-12"
            >
              <button type="button" class="theme-btn btn-style-two light">
                Submit
                <span class="sep-icon"><i class="fa fa-angle-right"></i></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!--Team Section-->
  <!-- <section class="team-section">
    	<div class="outer-container">
        	<div class="lined-title"><h2>Featured Donors</h2></div>
    	</div>
       	
        <div class="carousel-outer">
        	<div class="outer-container"> -->
  <!--Team Carousel-->
  <!-- <div class="team-carousel"> -->

  <!--Team Member-->
  <!-- <div class="team-member">
                        <div class="inner-box">
                            <div class="image-box">
                                <figure class="image"><img src="@/assets/images/resource/team-image-1.png" alt=""></figure>
                                <div class="content">
                                    <div class="member-title">
                                        <h3>Hasib Sharif</h3>
                                        <div class="designation">Donated  $1200</div>
                                    </div>
                                    <div class="social-links">
                                        <a href="#"><span class="fa fa-facebook-f"></span></a>
                                        <a href="#"><span class="fa fa-twitter"></span></a>
                                        <a href="#"><span class="fa fa-google-plus"></span></a>
                                        <a href="#"><span class="fa fa-linkedin"></span></a>
                                        <a href="#"><span class="fa fa-instagram"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->

  <!--Team Member-->
  <!-- <div class="team-member">
                        <div class="inner-box">
                            <div class="image-box">
                                <figure class="image"><img src="@/assets/images/resource/team-image-2.png" alt=""></figure>
                                <div class="content">
                                    <div class="member-title">
                                        <h3>Hasib Sharif</h3>
                                        <div class="designation">Donated  $1200</div>
                                    </div>
                                    <div class="social-links">
                                        <a href="#"><span class="fa fa-facebook-f"></span></a>
                                        <a href="#"><span class="fa fa-twitter"></span></a>
                                        <a href="#"><span class="fa fa-google-plus"></span></a>
                                        <a href="#"><span class="fa fa-linkedin"></span></a>
                                        <a href="#"><span class="fa fa-instagram"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->

  <!--Team Member-->
  <!-- <div class="team-member">
                        <div class="inner-box">
                            <div class="image-box">
                                <figure class="image"><img src="@/assets/images/resource/team-image-3.png" alt=""></figure>
                                <div class="content">
                                    <div class="member-title">
                                        <h3>Hasib Sharif</h3>
                                        <div class="designation">Donated  $1200</div>
                                    </div>
                                    <div class="social-links">
                                        <a href="#"><span class="fa fa-facebook-f"></span></a>
                                        <a href="#"><span class="fa fa-twitter"></span></a>
                                        <a href="#"><span class="fa fa-google-plus"></span></a>
                                        <a href="#"><span class="fa fa-linkedin"></span></a>
                                        <a href="#"><span class="fa fa-instagram"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> -->
  <!-- </section> -->

  <Sponser />
  <Footer />
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Donation - Moving Forward Together",
      meta: [
        {
          name: "description",
          content: "This is the donation for Moving Forward Together",
        },
      ],
    });
  },
};
</script>

<style></style>
