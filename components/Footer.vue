<template>
  <!--Main Footer-->
  <footer class="main-footer">
    <!--Footer Upper-->
    <div class="footer-upper">
      <div class="outer-container">
        <div class="row clearfix">
          <!--Footer Column-->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
            <h2>Moving Forward Together</h2>
            <div class="footer-widget about-widget">
              <div class="text">
                <p>
                  A non-profit organization committed to creating networking
                  opportunities where members have a platform to promote their
                  business endeavors, support local businesses, share knowledge,
                  sharpen skill sets and empower underserved communities to
                  achieve self-sufficiency.
                </p>
              </div>
            </div>
          </div>

          <!--Footer Column-->
          <!-- <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
            <div class="footer-widget twitter-widget"> -->
          <!-- <h2>Tweets</h2> -->

          <!-- <ul class="tweets-carousel single-item-carousel"> -->
          <!--Tweet Item-->
          <!-- <li class="slide-item">
                                    <div class="text">“Majority have suffered alteration in some form, by injected humour.”</div>
                                    <div class="info-box">
                                        <div class="author"><span class="fa fa-twitter"></span>Hasib Sharif</div>
                                        <div class="time">20 min Ago</div>
                                    </div>
                                </li> -->

          <!--Tweet Item-->
          <!-- <li class="slide-item">
                                    <div class="text">“Majority have suffered alteration in some form, by injected humour.”</div>
                                    <div class="info-box">
                                        <div class="author"><span class="fa fa-twitter"></span>Hasib Sharif</div>
                                        <div class="time">20 min Ago</div>
                                    </div>
                                </li> -->

          <!--Tweet Item-->
          <!-- <li class="slide-item">
                                    <div class="text">“Majority have suffered alteration in some form, by injected humour.”</div>
                                    <div class="info-box">
                                        <div class="author"><span class="fa fa-twitter"></span>Hasib Sharif</div>
                                        <div class="time">20 min Ago</div>
                                    </div>
                                </li> -->
          <!-- </ul>
            </div>
          </div> -->

          <!--Footer Column-->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
            <h2>Contact Info</h2>
            <div class="footer-widget contact-info">
              <ul>
                <li>
                  <span class="icon fa fa-instagram"></span>
                  <a
                    href="https://www.instagram.com/movingforwardtogether_/"
                    target="_blank"
                  >
                    @movingforwardtogether_</a
                  >
                </li>

                <li>
                  <strong> <span class="icon fa fa-facebook"></span></strong>
                  <a
                    href="https://www.instagram.com/movingforwardtogether_/"
                    target="_blank"
                  >
                    @movingforwardtogether</a
                  >
                </li>
                <li>
                  <span class="icon fa fa-envelope"></span>
                  <a
                    href="mailto:info.movingforwardtogether@gmail.com"
                    target="_blank"
                  >
                    info@mftcommunity.org
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!--Footer Column-->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
            <h2>Instagram</h2>
            <div class="footer-widget instagram-widget">
              <div class="thumbs-outer clearfix">
                <figure class="image-thumb">
                  <img
                    src="@/assets/images/8A750808-86F3-4499-AEB0-75F18BD073BF.jpeg"
                    alt=""
                  /><a
                    href="https://www.instagram.com/movingforwardtogether_/"
                    class="lightbox-image"
                    title="Image title here"
                    target="_blank"
                    ><span class="icon flaticon-cross"></span
                  ></a>
                </figure>
                <figure class="image-thumb">
                  <img
                    src="@/assets/images/8DBDAB68-DE19-4762-870A-56F7A1E099C9.jpeg"
                    alt=""
                  /><a
                    href="https://www.instagram.com/movingforwardtogether_/"
                    class="lightbox-image"
                    title="Image title here"
                    target="_blank"
                    ><span class="icon flaticon-cross"></span
                  ></a>
                </figure>
                <figure class="image-thumb">
                  <img
                    src="@/assets/images/6677CE13-FF6D-45F0-BBB5-830E5A0829A9.jpeg"
                    alt=""
                  /><a
                    href="https://www.instagram.com/movingforwardtogether_/"
                    class="lightbox-image"
                    title="Image title here"
                    target="_blank"
                    ><span class="icon flaticon-cross"></span
                  ></a>
                </figure>
                <figure class="image-thumb">
                  <img
                    src="@/assets/images/323203487_211383608001224_1812429780663511982_n.jpg"
                    alt=""
                  /><a
                    href="https://www.instagram.com/movingforwardtogether_/"
                    class="lightbox-image"
                    title="Image title here"
                    target="_blank"
                    ><span class="icon flaticon-cross"></span
                  ></a>
                </figure>
                <figure class="image-thumb">
                  <img
                    src="@/assets/images/69C38D41-5AC2-4C70-8507-565AF7CEE185.jpeg"
                    alt=""
                  /><a
                    href="https://www.instagram.com/movingforwardtogether_/"
                    class="lightbox-image"
                    title="Image title here"
                    target="_blank"
                    ><span class="icon flaticon-cross"></span
                  ></a>
                </figure>
                <figure class="image-thumb">
                  <img
                    src="@/assets/images/82245ACC-3672-4A0B-94EB-B8661C72DD53.jpeg"
                    alt=""
                  /><a
                    href="https://www.instagram.com/movingforwardtogether_/"
                    class="lightbox-image"
                    title="Image title here"
                    target="_blank"
                    ><span class="icon flaticon-cross"></span
                  ></a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="auto-container clearfix">
        <!--Copyright-->
        <div class="copyright text-center">
          {{ year }} All Rights Reserved &copy; Moving Forward Together
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: "",
    };
  },
  methods: {
    getDate() {
      const date = new Date();
      return (this.year = date.getFullYear());
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style></style>
