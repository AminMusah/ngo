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
                  It is a long established fact that a reader will be distracted
                  by the readable content. Lorem ipsum dolor sit amet,
                  consecttur adipiscing egestas rhoncus Praesent Nunc pretium.
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
                  <strong>Address:</strong> 250 East Avenue, Pilgrim <br />road,
                  NJ 5618
                </li>
                <li><strong>Phone:</strong> +192 9934 876 581</li>
                <li><strong>Email:</strong> info@mftcommunity.org</li>
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
                    src="@/assets/images/gallery/image-thumb-1.jpg"
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
                    src="@/assets/images/gallery/image-thumb-2.jpg"
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
                    src="@/assets/images/gallery/image-thumb-3.jpg"
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
                    src="@/assets/images/gallery/image-thumb-4.jpg"
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
                    src="@/assets/images/gallery/image-thumb-5.jpg"
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
                    src="@/assets/images/gallery/image-thumb-6.jpg"
                    alt=""
                  /><a
                    class="lightbox-image"
                    href="images/resource/products/image-6.jpg"
                    title="Image title here"
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
