<template>
  <div>
    <Header />
    <!-- <section class="page-title">
      <div class="auto-container">
        <h1>Moving Forward Together (MFT)</h1>
        <div class="content-style-one">
         
          <NuxtLink to="membership">
            <button type="button" class="theme-btn btn-style-one">
              Join Us
              <span class="sep-icon"><i class="fa fa-angle-right"></i></span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </section> -->

    <!--Main Slider-->
    <section class="main-slider">
      <div class="tp-banner-container">
        <div class="tp-banner">
          <ul>
            <li
              data-transition="slideup"
              data-slotamount="1"
              data-masterspeed="1000"
              data-thumb="images/main-slider/1.jpg"
              data-saveperformance="off"
              data-title="Awesome Title Here"
            >
              <img
                src="@/assets/images/Homepage/Homepage1.jpg"
                alt=""
                data-bgposition="center bottom"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              />

              <!--Transparent layer Right-->
              <!-- <div class="transparent-bg-layer-right"></div> -->

              <div
                class="tp-caption sfb sfr tp-resizeme"
                data-x="center"
                data-hoffset="0"
                data-y="center"
                data-voffset="50"
                data-speed="1500"
                data-start="500"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <!--Content Style One-->
                <div class="content-style-one">
                  <h3 class="dashed-text">
                    Moving Forward <br />Together (MFT)
                  </h3>
                  <div class="text">
                    Moving Forward Together (MFT) is committed to supporting,
                    <br />
                    uplifting and empowering ourselves and our communities!
                  </div>
                  <NuxtLink to="membership">
                    <button type="button" class="theme-btn btn-style-one">
                      Join Us
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i
                      ></span>
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </li>

            <!-- <li
              data-transition="slidedown"
              data-slotamount="1"
              data-masterspeed="1000"
              data-thumb="images/main-slider/2.jpg"
              data-saveperformance="off"
              data-title="Awesome Title Here"
            >
              <img
                src="@/assets/images/main-slider/2.jpg"
                alt=""
                data-bgposition="center bottom"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              /> -->

            <!--Transparent layer Left-->
            <!-- <div class="transparent-bg-layer-left"></div>

              <div
                class="tp-caption sfb sft tp-resizeme"
                data-x="left"
                data-hoffset="180"
                data-y="center"
                data-voffset="0"
                data-speed="1500"
                data-start="500"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              > -->
            <!--Square Box-->
            <!-- <div class="square-box"></div>
              </div> -->

            <!-- <div
                class="tp-caption sfb sfr tp-resizeme"
                data-x="left"
                data-hoffset="15"
                data-y="center"
                data-voffset="30"
                data-speed="1500"
                data-start="1000"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <div class="styled-heading">
                  We can’t do it alone without <br />your
                  <span class="theme_color">support</span>
                </div>
              </div> -->

            <!-- <div
                class="tp-caption sfb sfl tp-resizeme"
                data-x="left"
                data-hoffset="15"
                data-y="center"
                data-voffset="160"
                data-speed="1500"
                data-start="1500"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <a href="#" class="theme-btn btn-style-two"
                  >Join Us
                  <span class="sep-icon"><i class="fa fa-angle-right"></i></span
                ></a>
              </div>
            </li> -->

            <!-- <li
              data-transition="slidedown"
              data-slotamount="1"
              data-masterspeed="1000"
              data-thumb="images/main-slider/3.jpg"
              data-saveperformance="off"
              data-title="Awesome Title Here"
            >
              <img
                src="@/assets/images/main-slider/3.jpg"
                alt=""
                data-bgposition="center bottom"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              /> -->

            <!--Transparent layer Right-->
            <!-- <div class="transparent-bg-layer-right"></div> -->

            <!-- <div
                class="tp-caption sfb sft tp-resizeme"
                data-x="center"
                data-hoffset="0"
                data-y="center"
                data-voffset="-80"
                data-speed="1500"
                data-start="500"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <div class="bigger-heading">
                  <span class="theme_color">Building The</span><br /><strong
                    >World</strong
                  >
                  <span class="theme_color">Around</span> <strong>Us</strong>
                </div>
              </div> -->

            <!-- <div
                class="tp-caption sfb sfb tp-resizeme"
                data-x="center"
                data-hoffset="0"
                data-y="center"
                data-voffset="110"
                data-speed="1500"
                data-start="1000"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <div class="default-text">
                  Still other clients have reserved for capital improvement
                  projects and will<br />work directly with our Design and
                  Engineering team.
                </div>
              </div> -->

            <!-- <div
                class="tp-caption sfb sfb tp-resizeme"
                data-x="center"
                data-hoffset="15"
                data-y="center"
                data-voffset="200"
                data-speed="1500"
                data-start="1500"
                data-easing="easeOutExpo"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.01"
                data-endelementdelay="0.3"
                data-endspeed="1200"
                data-endeasing="Power4.easeIn"
              >
                <a href="#" class="theme-btn btn-style-two"
                  >Join Us
                  <span class="sep-icon"><i class="fa fa-angle-right"></i></span
                ></a>
              </div>
            </li> -->
          </ul>

          <!-- <div class="tp-bannertimer"></div> -->
        </div>
      </div>
    </section>
    <!-- <Slider /> -->

    <!--About Section-->
    <section class="about-section">
      <div class="auto-container">
        <div class="centered-title"><h2>About US</h2></div>

        <div class="content-container">
          <!--Tabs Box-->
          <div class="tabs-box">
            <!--Tab Buttons-->
            <!-- <div class="tab-buttons">
              <a class="tab-btn active-btn" href="#history-tab">History</a>
              <a class="tab-btn" href="#mission-tab">Mission</a>
            </div> -->

            <!--Tabs Content-->
            <div class="tabs-content">
              <!--Tab / Active Tab-->
              <div class="tab active-tab" id="history-tab">
                <div class="row clearfix">
                  <!--Content Column-->
                  <div class="column content-column col-md-6 col-xs-12">
                    <div class="inner">
                      <div class="bold-text">Mission</div>
                      <div class="default-text">
                        Moving Forward Together (MFT) is a non-profit
                        organization committed to creating networking
                        opportunities where members have a platform to promote
                        their business endeavors, support local businesses,
                        share knowledge, sharpen skill sets and empower
                        underserved communities to achieve self-sufficiency.
                      </div>
                    </div>
                  </div>

                  <!--Image Column-->
                  <div class="column image-column col-md-6 col-xs-12">
                    <div class="inner">
                      <figure class="image-box">
                        <img
                          src="@/assets/images/Homepage/HomePage4.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <!--Tab-->
              <div class="tab" id="mission-tab">
                <div class="row clearfix">
                  <!--Content Column-->
                  <div class="column content-column col-md-6 col-xs-12">
                    <div class="inner">
                      <div class="bold-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                      <div class="default-text">
                        Lorem Ipsum has been the industry's stan dard dummy text
                        ever since the 1500s, when an un known printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into ele ctronic typesetting, remaining
                        essentially un changed.
                      </div>
                    </div>
                  </div>

                  <!--Image Column-->
                  <div class="column image-column col-md-6 col-xs-12">
                    <div class="inner">
                      <figure class="image-box">
                        <img
                          src="@/assets/images/resource/featured-image-1.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="donate-now">
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
    </section> -->

    <!--Recent Causes Section-->
    <section class="recent-causes-section dark-layout">
      <div class="outer-container">
        <div class="lined-title"><h2>Donation</h2></div>

        <div class="row clearfix carosel">
          <!--Default Cause Column-->
          <!-- <div
            class="default-cause-column col-md-4 col-sm-6 col-xs-12 wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div class="inner-box hvr-float">
              <figure class="image-box">
                <img
                  src="@/assets/images/8DBDAB68-DE19-4762-870A-56F7A1E099C9.jpeg"
                  alt=""
                /><a href="#" class="overlay"></a>
                <h3>
                  <a href="#">
                    Finding Grants for Small Businesses & Non-Profit
                    Organizations Workshop</a
                  >
                </h3>
              </figure>
              <div class="lower-content">
                <div class="donation-scale">
                  <div class="scale-header clearfix">
                    <div class="pull-left">Raised</div>
                    <div class="pull-right">Goal</div>
                  </div>
                  <div class="progress-box">
                    <div
                      class="bar-fill scroll-able-bar"
                      data-percent="70%"
                    ></div>
                  </div>
                  <div class="scale-footer clearfix">
                    <div class="pull-left">$3,400</div>
                    <div class="pull-right">$5,000</div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="default-text">
                    Please contact us or reach out to member for details
                  </div>
                  <a href="https://gofund.me/341c0bc5" target="_blank">
                    <button type="button" class="theme-btn btn-style-two light">
                      Donate
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i
                      ></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div> -->

          <!--Default Cause Column-->
          <div
            class="default-cause-column col-md-4 col-sm-6 col-xs-12 wow fadeInLeft"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div class="inner-box hvr-float">
              <!--Image Box-->
              <figure class="image-box">
                <img src="@/assets/images/Events/popcorn.jpeg" alt="" /><a
                  href="#"
                  class="overlay"
                ></a>
                <h3><a href="#">Popcorn Fundraiser </a></h3>
              </figure>
              <!--Lower Content-->
              <div class="lower-content">
                <!--Donation Scale-->
                <!-- <div class="donation-scale">
                  <div class="scale-header clearfix">
                    <div class="pull-left">Raised</div>
                    <div class="pull-right">Goal</div>
                  </div>
                  <div class="progress-box">
                    <div
                      class="bar-fill scroll-able-bar"
                      data-percent="70%"
                    ></div>
                  </div>
                  <div class="scale-footer clearfix">
                    <div class="pull-left">$3,400</div>
                    <div class="pull-right">$5,000</div>
                  </div>
                </div> -->
                <div class="text-center">
                  <!--Defult Text-->
                  <div class="default-text">
                    Please contact us or reach out to member for details
                  </div>
                  <a href="https://gofund.me/341c0bc5" target="_blank">
                    <button type="button" class="theme-btn btn-style-two light">
                      Donate
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i
                      ></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!--Default Cause Column-->
          <div
            class="default-cause-column col-md-4 col-sm-6 col-xs-12 wow fadeInLeft"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div class="inner-box hvr-float">
              <!--Image Box-->
              <figure class="image-box">
                <img src="@/assets/images/Events/junteenth.jpeg" alt="" /><a
                  href="#"
                  class="overlay"
                ></a>
                <h3><a href="#">Juneteenth Celebration Workshop</a></h3>
              </figure>
              <!--Lower Content-->
              <div class="lower-content">
                <!--Donation Scale-->
                <!-- <div class="donation-scale">
                  <div class="scale-header clearfix">
                    <div class="pull-left">Raised</div>
                    <div class="pull-right">Goal</div>
                  </div>
                  <div class="progress-box">
                    <div
                      class="bar-fill scroll-able-bar"
                      data-percent="70%"
                    ></div>
                  </div>
                  <div class="scale-footer clearfix">
                    <div class="pull-left">$3,400</div>
                    <div class="pull-right">$5,000</div>
                  </div>
                </div> -->
                <div class="text-center">
                  <!--Defult Text-->
                  <div class="default-text">
                    Please contact us or reach out to member for details
                  </div>
                  <a href="https://gofund.me/341c0bc5" target="_blank">
                    <button type="button" class="theme-btn btn-style-two light">
                      Donate
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i
                      ></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center view-more">
          <NuxtLink to="donation" class="theme-btn btn-style-two light"
            >View All
            <span class="sep-icon"><i class="fa fa-angle-right"></i></span
          ></NuxtLink>
        </div>
      </div>
    </section>
    <!--Latest Events Section-->
    <section class="latest-events-section">
      <div class="outer-container">
        <div class="lined-title"><h2>Latest Events</h2></div>

        <div class="row clearfix">
          <!--Column-->
          <div class="column">
            <!--Event Post Style One-->
            <div
              class="event-post post-style-one wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div class="inner-box clearfix">
                <div class="post-date">
                  <span class="day"> 8th</span><span class="month">June </span>
                </div>
                <figure class="image-box">
                  <img src="@/assets/images/Events/popcorn.jpeg" alt="" />
                </figure>
                <div class="content-box">
                  <h3>
                    <a href="#"> Popcorn fundraiser</a
                    ><span class="line"></span>
                  </h3>
                  <div class="desc-text">
                    Please contact us or reach out to member for details
                  </div>
                  <ul class="info">
                    <!-- <li>
                      <span class="icon flaticon-time"></span> Friday, 9 am - 12
                      pm
                    </li> -->
                    <!-- <li>
                      <span class="icon flaticon-tool-2"></span> Juvenile
                      Auditorium, NJ
                    </li> -->
                  </ul>
                  <div class="link-box">
                    <!-- <a href="#" class="theme-btn btn-style-two"
                      >Register
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a> -->
                  </div>
                </div>
              </div>
            </div>

            <!--Event Post Style One-->
            <div
              class="event-post post-style-one wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div class="inner-box clearfix">
                <div class="post-date">
                  <span class="day">13th</span
                  ><span class="month"> August </span>
                </div>
                <figure class="image-box">
                  <img src="@/assets/images/Events/backtoschool.jpeg" alt="" />
                </figure>
                <div class="content-box">
                  <h3>
                    <a href="#">Back to School BBQ Fundraiser</a
                    ><span class="line"></span>
                  </h3>
                  <div class="desc-text">
                    Please contact us or reach out to member for details
                  </div>
                  <ul class="info">
                    <!-- <li>
                      <span class="icon flaticon-time"></span> Friday, 9 am - 12
                      pm
                    </li>
                    <li>
                      <span class="icon flaticon-tool-2"></span> Juvenile
                      Auditorium, NJ
                    </li> -->
                  </ul>
                  <div class="link-box">
                    <!-- <a href="#" class="theme-btn btn-style-two"
                      >Register
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column">
            <!--Event Post Style Two-->

            <!--Event Post Style One-->
            <div
              class="event-post post-style-one wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div class="inner-box clearfix">
                <div class="post-date">
                  <span class="day">18th</span><span class="month">June </span>
                </div>
                <figure class="image-box">
                  <img src="@/assets/images/Events/junteenth.jpeg" alt="" />
                </figure>
                <div class="content-box">
                  <h3>
                    <a href="#">Juneteenth Celebration Workshop</a
                    ><span class="line"></span>
                  </h3>
                  <ul class="info">
                    <!-- <li>
                      <span class="icon flaticon-time"></span> Friday, 9 am - 12
                      pm
                    </li> -->
                    <!-- <li>
                      <span class="icon flaticon-tool-2"></span> Juvenile
                      Auditorium, NJ
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="event-post post-style-one wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div class="inner-box clearfix">
                <div class="post-date">
                  <span class="day">21st</span><span class="month">July </span>
                </div>
                <figure class="image-box">
                  <img
                    src="@/assets/images/294228277_384900810376146_7284471715113305548_n.jpg"
                    alt=""
                  />
                </figure>
                <div class="content-box">
                  <h3>
                    <a href="#">Paint and Sip Fundraiser </a
                    ><span class="line"></span>
                  </h3>
                  <ul class="info">
                    <!-- <li>
                      <span class="icon flaticon-time"></span> Friday, 9 am - 12
                      pm
                    </li> -->
                    <!-- <li>
                      <span class="icon flaticon-tool-2"></span> Juvenile
                      Auditorium, NJ
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center padd-top-60 more">
          <NuxtLink to="events" class="theme-btn btn-style-two light"
            >More <span class="sep-icon"><i class="fa fa-angle-right"></i></span
          ></NuxtLink>
        </div>
      </div>
    </section>

    <section class="recent-causes-section dark-layout">
      <div class="outer-container">
        <div class="lined-title"><h2>Past events</h2></div>

        <div class="row clearfix carosel">
          <!--Default Cause Column-->
          <div
            class="default-cause-column col-md-4 col-sm-6 col-xs-12 wow fadeInLeft"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div class="inner-box hvr-float">
              <!--Image Box-->
              <figure class="image-box">
                <img
                  src="@/assets/images/Events/PastEventGallery/2021-12.jpeg"
                  alt=""
                /><a href="#" class="overlay"></a>
                <h3></h3>
              </figure>
            </div>
          </div>

          <!--Default Cause Column-->
          <div
            class="default-cause-column col-md-4 col-sm-6 col-xs-12 wow fadeInLeft"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div class="inner-box hvr-float">
              <!--Image Box-->
              <figure class="image-box">
                <img
                  src="@/assets/images/Events/PastEventGallery/2022-0jpeg.png"
                  alt=""
                /><a href="#" class="overlay"></a>
                <h3></h3>
              </figure>
              <!--Lower Content-->
            </div>
          </div>

          <div
            class="default-cause-column col-md-4 col-sm-6 col-xs-12 wow fadeInLeft"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div class="inner-box hvr-float">
              <!--Image Box-->
              <figure class="image-box">
                <img
                  src="@/assets/images/Events/PastEventGallery/202206.jpeg"
                  alt=""
                /><a href="#" class="overlay"></a>
                <h3></h3>
              </figure>
              <!--Lower Content-->
            </div>
          </div>
        </div>

        <div class="text-center view-more">
          <NuxtLink to="events" class="theme-btn btn-style-two light"
            >View All
            <span class="sep-icon"><i class="fa fa-angle-right"></i></span
          ></NuxtLink>
        </div>
      </div>
    </section>

    <!--Testimonials Section-->
    <section class="testimonials-section">
      <div class="slider-outer">
        <div class="testimonial-carousel">
          <!--Slide Item-->
          <div class="slide-item">
            <div class="slide-content">
              <div class="upper-info">
                <figure class="img-circle author-thumb">
                  <img
                    class="img-circle"
                    src="@/assets/images/resource/testimonial-thumb-1.jpg"
                    alt=""
                  />
                </figure>
                <h4>Hasib Sharif</h4>
                <div class="designation">CEO, KBD</div>
              </div>
              <div class="text">
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </div>

              <div class="lower-info">
                <div class="signature">Hasib Sharif</div>
              </div>
            </div>
          </div>

          <!--Slide Item-->
          <div class="slide-item">
            <div class="slide-content">
              <div class="upper-info">
                <figure class="img-circle author-thumb">
                  <img
                    class="img-circle"
                    src="@/assets/images/resource/testimonial-thumb-1.jpg"
                    alt=""
                  />
                </figure>
                <h4>Arsalan</h4>
                <div class="designation">CEO, KBD</div>
              </div>
              <div class="text">
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </div>

              <div class="lower-info">
                <div class="signature">Arsalan</div>
              </div>
            </div>
          </div>

          <!--Slide Item-->
          <div class="slide-item">
            <div class="slide-content">
              <div class="upper-info">
                <figure class="img-circle author-thumb">
                  <img
                    class="img-circle"
                    src="@/assets/images/resource/testimonial-thumb-1.jpg"
                    alt=""
                  />
                </figure>
                <h4>John Flick</h4>
                <div class="designation">SEO, KBD</div>
              </div>
              <div class="text">
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </div>

              <div class="lower-info">
                <div class="signature">John Flick</div>
              </div>
            </div>
          </div>

          <!--Slide Item-->
          <div class="slide-item">
            <div class="slide-content">
              <div class="upper-info">
                <figure class="img-circle author-thumb">
                  <img
                    class="img-circle"
                    src="@/assets/images/resource/testimonial-thumb-1.jpg"
                    alt=""
                  />
                </figure>
                <h4>Hasib Sharif</h4>
                <div class="designation">CEO, KBD</div>
              </div>
              <div class="text">
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </div>

              <div class="lower-info">
                <div class="signature">Hasib</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Gallery Section-->
    <!-- <section class="gallery-section gallery-style-two bg-lightgrey">
      <div class="outer-container">
        <div class="lined-title"><h2>Our Projects</h2></div>
        <div class="outer-box">
          <div class="sortable-masonry"> -->
    <!--Filter-->
    <!-- <div class="filters text-center">
              <ul class="filter-tabs filter-btns clearfix">
                <li class="active filter" data-role="button" data-filter=".all">
                  All Projects
                </li>
                <li class="filter" data-role="button" data-filter=".education">
                  Education
                </li>
                <li class="filter" data-role="button" data-filter=".food">
                  Food
                </li>
                <li class="filter" data-role="button" data-filter=".water">
                  Water
                </li>
                <li class="filter" data-role="button" data-filter=".africa">
                  Africa
                </li>
                <li class="filter" data-role="button" data-filter=".asia">
                  Asia
                </li>
              </ul>
            </div> -->

    <!-- <div class="items-container clearfix"> -->
    <!--Default Portfolio Item-->
    <!-- <div
                class="default-portfolio-item big-item all water asia africa"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="@/assets/images/gallery/9.jpg" alt="" />
                  </figure> -->
    <!--Overlay Box-->
    <!-- <div class="overlay-box">
                    <a
                      href="@/assets/images/gallery/9.jpg"
                      class="lightbox-image image-link"
                      title="Image Caption Here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                    <div class="content">
                      <h3><a href="#">Old Stuffed Ted </a></h3>
                      <div class="subtitle">East coast, Virginia</div>
                    </div>
                  </div>
                </div>
              </div> -->

    <!--Default Portfolio Item-->
    <!-- <div
                class="default-portfolio-item small-item all education food water asia"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="@/assets/images/gallery/10.jpg" alt="" />
                  </figure> -->
    <!--Overlay Box-->
    <!-- <div class="overlay-box">
                    <a
                      href="@/assets/images/gallery/10.jpg"
                      class="lightbox-image image-link"
                      title="Image Caption Here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                    <div class="content">
                      <h3><a href="#">Old Stuffed Ted </a></h3>
                      <div class="subtitle">East coast, Virginia</div>
                    </div>
                  </div>
                </div>
              </div> -->

    <!--Default Portfolio Item-->
    <!-- <div
                class="default-portfolio-item small-item all food water asia africa"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="@/assets/images/gallery/11.jpg" alt="" />
                  </figure> -->
    <!--Overlay Box-->
    <!-- <div class="overlay-box">
                    <a
                      href="@/assets/images/gallery/11.jpg"
                      class="lightbox-image image-link"
                      title="Image Caption Here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                    <div class="content">
                      <h3><a href="#">Old Stuffed Ted </a></h3>
                      <div class="subtitle">East coast, Virginia</div>
                    </div>
                  </div>
                </div>
              </div> -->

    <!--Default Portfolio Item-->
    <!-- <div
                class="default-portfolio-item small-item all education water africa"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="@/assets/images/gallery/12.jpg" alt="" />
                  </figure> -->
    <!--Overlay Box-->
    <!-- <div class="overlay-box">
                    <a
                      href="@/assets/images/gallery/12.jpg"
                      class="lightbox-image image-link"
                      title="Image Caption Here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                    <div class="content">
                      <h3><a href="#">Old Stuffed Ted </a></h3>
                      <div class="subtitle">East coast, Virginia</div>
                    </div>
                  </div>
                </div>
              </div> -->

    <!--Default Portfolio Item-->
    <!-- <div
                class="default-portfolio-item small-item all education food water asia africa"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="@/assets/images/gallery/13.jpg" alt="" />
                  </figure> -->
    <!--Overlay Box-->
    <!-- <div class="overlay-box">
                    <a
                      href="@/assets/images/gallery/13.jpg"
                      class="lightbox-image image-link"
                      title="Image Caption Here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                    <div class="content">
                      <h3><a href="#">Old Stuffed Ted </a></h3>
                      <div class="subtitle">East coast, Virginia</div>
                    </div>
                  </div>
                </div>
              </div> -->

    <!--Default Portfolio Item-->
    <!-- <div class="default-portfolio-item big-item all food asia">
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="@/assets/images/gallery/14.jpg" alt="" />
                  </figure> -->
    <!--Overlay Box-->
    <!-- <div class="overlay-box">
                    <a
                      href="@/assets/images/gallery/14.jpg"
                      class="lightbox-image image-link"
                      title="Image Caption Here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                    <div class="content">
                      <h3><a href="#">Old Stuffed Ted </a></h3>
                      <div class="subtitle">East coast, Virginia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <Newsletter />
    <!-- <Sponser /> -->
    <section class="donate-now">
      <div class="outer-container">
        <div class="centered-title">
          <h2>Contact</h2>
        </div>

        <div
          class="donate-form wow fadeInDown"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <NuxtLink to="contact">
            <button type="button" class="theme-btn btn-style-two light">
              Contact Us
              <span class="sep-icon"><i class="fa fa-angle-right"></i></span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Moving Forward Together",
      meta: [
        {
          name: "description",
          content: "This is the official homepage for Moving Forward Together",
        },
      ],
    });
  },
};
</script>

<style></style>
