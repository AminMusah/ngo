<template>
  <Header />
  <!--Contact Section-->
  <section class="contact-section">
    <div class="auth-container">
      <!--Form Container-->
      <div
        class="form-container wow fadeInDown"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <div class="title-text">Sign In</div>

        <!--Form-->
        <div class="form">
          <form
            id="contact-form"
            method="post"
            action=""
            @submit.prevent="signIn"
          >
            <div class="row clearfix">
              <div class="form-group col-lg-12 col-sm-6 col-xs-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  v-model="email"
                  required
                />
              </div>
              <div class="form-group col-lg-12 col-sm-6 col-xs-12">
                <input
                  type="password"
                  name="password"
                  v-model="password"
                  placeholder="Password"
                  required
                />
              </div>

              <div
                class="form-group text-center margin-top-30 col-lg-12 col-md-6 col-sm-6 col-xs-12"
              >
                <button type="submit" class="theme-btn col-md-4" v-if="loading">
                  <MiniLoader />
                </button>
                <button type="submit" class="theme-btn" v-else>Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
      loading: false,
      isLoggedIn: false,
    };
  },
  methods: {
    async signIn() {
      this.loading = true;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.isLoggedIn = true;
          this.$router.push("/admin");
          localStorage.setItem("user", JSON.stringify(user.uid));
          localStorage.setItem("accessToken", JSON.stringify(user.accessToken));
          localStorage.setItem("isLoggedIn", JSON.stringify(this.isLoggedIn));
          this.loading = false;
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          // ...
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          this.error = errorMessage.slice(10, 50);
          this.isLoggedIn = false;
          this.loading = false;
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: this.error || "An error occurred, try again.",
          });
        });
    },
  },
  mounted() {},
};
</script>

<style></style>
