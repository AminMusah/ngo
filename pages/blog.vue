<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader"></div> -->

    <!-- Main Header-->
    <Header />
    <!--End Main Header -->

    <!-- Hidden Navigation Bar -->
    <section class="hidden-bar right-align">
      <div class="hidden-bar-closer">
        <button class="btn"><i class="fa fa-close"></i></button>
      </div>

      <!-- Hidden Bar Wrapper -->
      <div class="hidden-bar-wrapper">
        <!-- .logo -->
        <div class="logo text-center">
          <a href="index.html"
            ><img src="@/assets/images/logo-2.png" alt=""
          /></a>
        </div>
        <!-- /.logo -->

        <!-- .Side-menu -->
        <div class="side-menu">
          <!-- .navigation -->
          <ul class="navigation clearfix">
            <li class="dropdown">
              <a href="#">Home</a>
              <ul class="submenu">
                <li><a href="index.html">Homepage One</a></li>
                <li><a href="index-2.html">Homepage Two</a></li>
                <li><a href="index-3.html">Homepage Three</a></li>
                <li><a href="index-4.html">Homepage Four</a></li>
                <li><a href="index-5.html">Homepage Five</a></li>
                <li><a href="index-6.html">Homepage Six</a></li>
              </ul>
            </li>
            <li><a href="about-us.html">About Us</a></li>
            <li class="dropdown">
              <a href="#">Pages</a>
              <ul class="submenu">
                <li><a href="donation.html">Donation</a></li>
                <li class="dropdown">
                  <a href="#">Events</a>
                  <ul class="submenu">
                    <li><a href="events.html">Events</a></li>
                    <li><a href="events-single.html">Single Event</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Causes</a>
                  <ul class="submenu">
                    <li><a href="#">Causees Style One</a></li>
                    <li><a href="causes-2.html">Causees Style Two</a></li>
                  </ul>
                </li>
                <li><a href="gallery-1.html">Gallery Style One</a></li>
                <li><a href="gallery-2.html">Gallery Style Two</a></li>
                <li><a href="error-page.html">404 Page</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#">Shop</a>
              <ul class="submenu">
                <li><a href="shop.html">Shop</a></li>
                <li><a href="shop-single.html">Shop Single</a></li>
              </ul>
            </li>
            <li class="dropdown current">
              <a href="#">Blog</a>
              <ul class="submenu">
                <li><a href="blog.html">Our Blog</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <!-- /.Side-menu -->

        <div class="social-icons">
          <ul>
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-google-plus"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- / Hidden Bar Wrapper -->
    </section>
    <!-- / Hidden Bar -->

    <!--Page Title-->
    <section class="page-title">
      <div class="auto-container">
        <h1>Our Blog</h1>
        <ul class="bread-crumb clearfix">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li class="active">Our Blog</li>
        </ul>
      </div>
    </section>

    <!--Sidebar Page-->
    <div class="sidebar-page-container">
      <div class="blog-container">
        <div class="row clearfix">
          <!--Content Side-->
          <div class="content-side col-lg-9 col-md-8 col-sm-12 col-xs-12">
            <!--Blog Section-->
            <section
              class="blog-section no-padd-bottom no-padd-top padd-right-20"
            >
              <!--Blog Post-->
              <article
                class="blog-post default-blog-post wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <div class="post-info">
                    <h3>
                      <a href="blog-single.html">Child Labor and Ghana</a>
                    </h3>
                    <div class="meta">
                      <img
                        class="author-thumb img-circle"
                        src="@/assets/images/resource/blog-thumb-1.jpg"
                        alt=""
                      />Hasib Sharif . Tuesday, Feb 19, 2016
                    </div>
                  </div>
                  <figure class="image-box">
                    <a href="blog-single.html"
                      ><img
                        src="@/assets/images/resource/blog-image-3.jpg"
                        alt=""
                    /></a>
                  </figure>
                  <div class="content-box">
                    <div class="post-text">
                      A wild misconception of social media experts is that we
                      spend most of our time sitting around watching YouTube
                      videos. However, my friends, I’m sorry to .break this to
                      you, you’ve been fooled! In a way, we’re more like
                      experience designers. If you take a look at some creative
                      agency structures the roles are pretty defined; you’ve got
                      your strategists, designers, creative teams etc.
                    </div>
                    <a
                      href="blog-single.html"
                      class="theme-btn btn-style-two light"
                      >Read More
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a>
                  </div>
                </div>
              </article>

              <!--Blog Post-->
              <article
                class="blog-post default-blog-post wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <div class="post-info">
                    <h3>
                      <a href="blog-single.html">Techniques for Blog Design</a>
                    </h3>
                    <div class="meta">
                      <img
                        class="author-thumb img-circle"
                        src="@/assets/images/resource/blog-thumb-1.jpg"
                        alt=""
                      />Hasib Sharif . Tuesday, Feb 19, 2016
                    </div>
                  </div>
                  <figure class="image-box">
                    <a href="blog-single.html"
                      ><img
                        src="@/assets/images/resource/blog-image-4.jpg"
                        alt=""
                    /></a>
                  </figure>
                  <div class="content-box">
                    <div class="post-text">
                      A wild misconception of social media experts is that we
                      spend most of our time sitting around watching YouTube
                      videos. However, my friends, I’m sorry to .break this to
                      you, you’ve been fooled! In a way, we’re more like
                      experience designers. If you take a look at some creative
                      agency structures the roles are pretty defined; you’ve got
                      your strategists, designers, creative teams etc.
                    </div>
                    <a
                      href="blog-single.html"
                      class="theme-btn btn-style-two light"
                      >Read More
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a>
                  </div>
                </div>
              </article>

              <!--Blog Post-->
              <article
                class="blog-post default-blog-post wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <div class="post-info">
                    <h3>
                      <a href="blog-single.html"
                        >Child Labor and Supply Chains</a
                      >
                    </h3>
                    <div class="meta">
                      <img
                        class="author-thumb img-circle"
                        src="@/assets/images/resource/blog-thumb-1.jpg"
                        alt=""
                      />Hasib Sharif . Tuesday, Feb 19, 2016
                    </div>
                  </div>
                  <figure class="image-box">
                    <img
                      src="@/assets/images/resource/blog-image-5.jpg"
                      alt=""
                    /><a
                      class="lightbox-image video-link"
                      href="http://www.youtube.com/watch?v=opj24KnzrWo"
                      ><span class="icon flaticon-play-button"></span
                    ></a>
                  </figure>
                  <div class="content-box">
                    <div class="post-text">
                      A wild misconception of social media experts is that we
                      spend most of our time sitting around watching YouTube
                      videos. However, my friends, I’m sorry to .break this to
                      you, you’ve been fooled! In a way, we’re more like
                      experience designers. If you take a look at some creative
                      agency structures the roles are pretty defined; you’ve got
                      your strategists, designers, creative teams etc.
                    </div>
                    <a
                      href="blog-single.html"
                      class="theme-btn btn-style-two light"
                      >Read More
                      <span class="sep-icon"
                        ><i class="fa fa-angle-right"></i></span
                    ></a>
                  </div>
                </div>
              </article>

              <!-- Styled Pagination -->
              <div class="styled-pagination text-center padd-top-20">
                <ul>
                  <li><a href="#" class="active">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li>
                    <a class="next" href="#"
                      >Next&ensp;<span class="fa fa-angle-double-right"></span
                    ></a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <!--Content Side-->

          <!--Sidebar-->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <aside class="sidebar">
              <!-- Recent Articles -->
              <div
                class="sidebar-widget boxed-widget links-widget wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="widget-title"><h2>CATEGORY</h2></div>

                <ul class="list">
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">Food</span>
                        <span class="pull-right">(10)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">Water</span>
                        <span class="pull-right">(08)</span>
                      </div></a
                    >
                  </li>
                  <li class="current">
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">Education</span>
                        <span class="pull-right">(02)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">Africa</span>
                        <span class="pull-right">(03)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">India</span>
                        <span class="pull-right">(08)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">Event</span>
                        <span class="pull-right">(08)</span>
                      </div></a
                    >
                  </li>
                </ul>
              </div>

              <!-- Popular Posts -->
              <div
                class="sidebar-widget boxed-widget popular-posts wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="widget-title"><h2>RECENT POST</h2></div>

                <!-- <article class="post">
                                   <figure class="post-thumb"><a href="#"><img src="images/resource/post-thumb-3.jpg" alt=""></a></figure>
                                   <h4><a href="#">Micenas Placerat Nibh Loreming</a></h4>
                                   <div class="post-info">SEP 29, 2015</div>
                               </article> -->

                <article class="post">
                  <figure class="post-thumb">
                    <a href="#"
                      ><img
                        src="@/assets/images/resource/post-thumb-2.jpg"
                        alt=""
                    /></a>
                  </figure>
                  <h4><a href="#">Integer Suscipit Sit Amet</a></h4>
                  <div class="post-info">SEP 29, 2015</div>
                </article>

                <!-- <article class="post">
                                   <figure class="post-thumb"><a href="#"><img src="@/assets/images/resource/post-thumb-3.jpg" alt=""></a></figure>
                                   <h4><a href="#">Praeent Vehicula Neget Tempus</a></h4>
                                   <div class="post-info">SEP 29, 2015</div>
                               </article> -->
              </div>

              <!-- Post Archives -->
              <div
                class="sidebar-widget boxed-widget archives-widget wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="widget-title"><h2>Archives</h2></div>

                <ul class="list">
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">April 2016</span>
                        <span class="pull-right">(10)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">March 2016</span>
                        <span class="pull-right">(08)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">February 2016</span>
                        <span class="pull-right">(10)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">January 2016</span>
                        <span class="pull-right">(08)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">December 2015</span>
                        <span class="pull-right">(02)</span>
                      </div></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><div class="clearfix">
                        <span class="pull-left">November 2015</span>
                        <span class="pull-right">(03)</span>
                      </div></a
                    >
                  </li>
                </ul>
              </div>

              <!-- Tags -->
              <div
                class="sidebar-widget boxed-widget popular-tags wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="widget-title"><h2>Tags</h2></div>

                <div class="links-outer">
                  <a href="#">Team</a>
                  <a href="#">Charity</a>
                  <a href="#">Volunteer</a>
                  <a href="#">Web</a>
                  <a href="#">Human</a>
                  <a href="#">Education</a>
                  <a href="#">UI</a>
                  <a href="#">Speech</a>
                  <a href="#">News</a>
                  <a href="#">2016</a>
                  <a href="#">Welfare</a>
                  <a href="#">Design</a>
                  <a href="#">Event</a>
                </div>
              </div>

              <!-- Instagram -->
              <div
                class="sidebar-widget boxed-widget insta-feeds wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="widget-title"><h2>Instagram</h2></div>

                <div class="thumbs-outer clearfix">
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-7.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-1.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-8.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-2.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-9.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-3.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-10.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-4.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-11.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-5.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-12.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-6.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-13.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-7.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-14.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-8.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                  <figure class="image-thumb">
                    <img
                      src="@/assets/images/gallery/image-thumb-15.jpg"
                      alt=""
                    /><a
                      class="lightbox-image"
                      href="images/resource/products/image-9.jpg"
                      title="Image title here"
                      ><span class="icon flaticon-cross"></span
                    ></a>
                  </figure>
                </div>
              </div>
            </aside>
          </div>
          <!--Sidebar-->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Our Blog - Moving Forward Together",
      meta: [
        {
          name: "description",
          content: "This is the Blog Page for Moving Forward Together",
        },
      ],
    });
  },
};
</script>

<style></style>
