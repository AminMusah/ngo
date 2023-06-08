<template>
  <header class="main-header site-header">
    <!-- Main Box -->
    <div class="main-box">
      <div class="outer-container">
        <!--Logo Box-->
        <div class="logo-box">
          <div class="logo">
            <NuxtLink to="/"
              ><img
                src="@/assets/images/movingforwardtogether.4e3e5217-removebg-preview.png"
                alt=""
            /></NuxtLink>
          </div>
        </div>

        <!--Nav Outer-->
        <div class="nav-outer clearfix">
          <!-- Main Menu -->
          <nav class="main-menu">
            <div class="navbar-collapse collapse clearfix">
              <ul class="navigation clearfix">
                <li class="dropdown"><NuxtLink to="/">Home</NuxtLink></li>

                <li class="dropdown">
                  <NuxtLink to="about">About Us</NuxtLink>
                </li>
                <li class="dropdown">
                  <NuxtLink to="events">Events</NuxtLink>
                </li>

                <li class="dropdown">
                  <NuxtLink to="donation">Donation</NuxtLink>
                </li>
                <li class="dropdown">
                  <NuxtLink to="membership">Membership</NuxtLink>
                </li>
                <li class="dropdown">
                  <NuxtLink to="contact">Contact</NuxtLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <!--Nav Outer End-->

        <!-- Hidden Nav Toggler -->
        <div class="nav-toggler" @click="toggle">
          <button class="hidden-bar-opener">
            <span class="icon fa fa-bars"></span>
          </button>
        </div>
      </div>
    </div>
    <ul class="sm-menu" v-if="open">
      <li class=""><NuxtLink to="/">Home</NuxtLink></li>

      <li class="">
        <NuxtLink to="about">About Us</NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="events">Events</NuxtLink>
      </li>

      <li class="">
        <NuxtLink to="donation">Donation</NuxtLink>
      </li>

      <li class="">
        <NuxtLink to="membership">Membership</NuxtLink>
      </li>

      <li class="">
        <NuxtLink to="contact">Contact</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      console.log("open");
      return (this.open = !this.open);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.sm-menu {
  position: fixed;
  background: #212121;
  top: 60px;
  width: 100%;
  padding: 30px;
  transition: all 2s ease-in-out;
  display: none;
}

.sm-menu li {
  color: #f4cf3e;
  width: 100%;
  padding: 10px;
  font-size: 20px;
}
.sm-menu li a {
  color: #f4cf3e;
}

@media only screen and (max-width: 800px) {
  .sm-menu {
    display: block;
  }
}
</style>
