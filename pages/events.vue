<template>
  <Header/>
  <section
    class="page-title"
  >
    <div class="auto-container">
      <h1>Events</h1>
      <ul class="bread-crumb clearfix">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li class="active">Events</li>
      </ul>
    </div>
  </section>

  <!--Events Section-->
  <section class="events-section">
    <div class="outer-container">
      <div class="lined-title"><h2>Find Events near you</h2></div>

      <div class="auto-container">
        <!--Filters Box-->
        <div class="filters-box">
          <div class="row clearfix">
            <div class="form-group col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <select name="sel-cat">
                <option>Category</option>
                <option>Donation</option>
                <option>Food</option>
                <option>Health</option>
              </select>
            </div>
            <div class="form-group col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <input
                type="text"
                name="datepick"
                class="datepicker"
                value="Date"
                placeholder=""
              />
            </div>

            <div class="form-group col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <select name="sel-location">
                <option>Location</option>
                <option>Asia</option>
                <option>Africa</option>
                <option>Indonesia</option>
              </select>
            </div>

            <div class="form-group col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <button type="button" class="theme-btn">Search</button>
            </div>
          </div>
        </div>

        <!--Default Event Box-->
        <div
          class="default-event-box wow fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div class="inner-box clearfix">
            <div class="image-column">
              <figure class="image-box">
                <a href="#"
                  ><img src="@/assets/images/resource/event-image-4.jpg" alt=""
                /></a>
              </figure>
            </div>
            <div class="content-column">
              <div class="row clearfix">
                <!--Content-->
                <div class="content col-md-7 col-sm-12 col-xs-12">
                  <h2><a href="#">World Humanitarian Summit</a></h2>
                  <div class="text">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
                <!--Info-->
                <div class="info col-md-5 col-sm-12 col-xs-12">
                  <ul class="info-list">
                    <li class="clearfix">
                      <strong>Time</strong>
                      <div class="info-text">11 am - 3 pm</div>
                    </li>
                    <li class="clearfix">
                      <strong>Location</strong>
                      <div class="info-text">South side auditorium, NJ</div>
                    </li>
                    <li class="clearfix">
                      <strong>Date</strong>
                      <div class="info-text">19 Feb, 2016</div>
                    </li>
                  </ul>

                  <div class="padd-left-30">
                    <a href="#" class="theme-btn btn-style-two light"
                      >Register
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Default Event Box-->
        <div
          class="default-event-box wow fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div class="inner-box clearfix">
            <div class="image-column">
              <figure class="image-box">
                <a href="#"
                  ><img src="@/assets/images/resource/event-image-5.jpg" alt=""
                /></a>
              </figure>
            </div>
            <div class="content-column">
              <div class="row clearfix">
                <!--Content-->
                <div class="content col-md-7 col-sm-12 col-xs-12">
                  <h2><a href="#">Charity Challenges Events</a></h2>
                  <div class="text">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
                <!--Info-->
                <div class="info col-md-5 col-sm-12 col-xs-12">
                  <ul class="info-list">
                    <li class="clearfix">
                      <strong>Time</strong>
                      <div class="info-text">11 am - 3 pm</div>
                    </li>
                    <li class="clearfix">
                      <strong>Location</strong>
                      <div class="info-text">South side auditorium, NJ</div>
                    </li>
                    <li class="clearfix">
                      <strong>Date</strong>
                      <div class="info-text">19 Feb, 2016</div>
                    </li>
                  </ul>

                  <div class="padd-left-30">
                    <a href="#" class="theme-btn btn-style-two light"
                      >Register
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Default Event Box-->
        <div
          class="default-event-box wow fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div class="inner-box clearfix">
            <div class="image-column">
              <figure class="image-box">
                <a href="#"
                  ><img src="@/assets/images/resource/event-image-6.jpg" alt=""
                /></a>
              </figure>
            </div>
            <div class="content-column">
              <div class="row clearfix">
                <!--Content-->
                <div class="content col-md-7 col-sm-12 col-xs-12">
                  <h2>
                    <a href="#">Make The World <br />Better</a>
                  </h2>
                  <div class="text">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
                <!--Info-->
                <div class="info col-md-5 col-sm-12 col-xs-12">
                  <ul class="info-list">
                    <li class="clearfix">
                      <strong>Time</strong>
                      <div class="info-text">11 am - 3 pm</div>
                    </li>
                    <li class="clearfix">
                      <strong>Location</strong>
                      <div class="info-text">South side auditorium, NJ</div>
                    </li>
                    <li class="clearfix">
                      <strong>Date</strong>
                      <div class="info-text">19 Feb, 2016</div>
                    </li>
                  </ul>

                  <div class="padd-left-30">
                    <a href="#" class="theme-btn btn-style-two light"
                      >Register
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Default Event Box-->
        <div
          class="default-event-box wow fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div class="inner-box clearfix">
            <div class="image-column">
              <figure class="image-box">
                <a href="#"
                  ><img src="@/assets/images/resource/event-image-7.jpg" alt=""
                /></a>
              </figure>
            </div>
            <div class="content-column">
              <div class="row clearfix">
                <!--Content-->
                <div class="content col-md-7 col-sm-12 col-xs-12">
                  <h2>
                    <a href="#">Impact of Child <br />Labour</a>
                  </h2>
                  <div class="text">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
                <!--Info-->
                <div class="info col-md-5 col-sm-12 col-xs-12">
                  <ul class="info-list">
                    <li class="clearfix">
                      <strong>Time</strong>
                      <div class="info-text">11 am - 3 pm</div>
                    </li>
                    <li class="clearfix">
                      <strong>Location</strong>
                      <div class="info-text">South side auditorium, NJ</div>
                    </li>
                    <li class="clearfix">
                      <strong>Date</strong>
                      <div class="info-text">19 Feb, 2016</div>
                    </li>
                  </ul>

                  <div class="padd-left-30">
                    <a href="#" class="theme-btn btn-style-two light"
                      >Register
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center view-more padd-top-60">
        <a href="causes-1.html" class="theme-btn btn-style-two light"
          >Load More
          <span class="sep-icon"><i class="fa fa-angle-right"></i></span
        ></a>
      </div>
    </div>
  </section>

  <Newsletter />
  <Sponser />
  <Footer/>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Events - Moving Forward Together",
      meta: [
        {
          name: "description",
          content: "This is the events page for Moving Forward Together",
        },
        
      ],

    });
  },
};
</script>

<style></style>
