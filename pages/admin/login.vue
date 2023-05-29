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
                <button type="submit" class="theme-btn">Sign In</button>
              </div>
            </div>
          </form>
          <p v-if="error" class="error">{{ error }}</p>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem("user", JSON.stringify(user.uid));
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.error = errorMessage.slice(10, 50);
        });
    },
  },
  mounted() {},
};
</script>

<style></style>
