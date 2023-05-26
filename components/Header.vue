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
            <div class="navbar-header">
              <!-- Toggle Button -->
              <!-- <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button> -->
            </div>

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
                  <NuxtLink to="giveback">Give Back</NuxtLink>
                </li>
                <li class="dropdown">
                  <NuxtLink to="membership">Membership</NuxtLink>
                </li>
                <li class="dropdown">
                  <NuxtLink to="blog">Blog</NuxtLink>
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
        <div class="nav-toggler">
          <button class="hidden-bar-opener">
            <span class="icon fa fa-bars"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
