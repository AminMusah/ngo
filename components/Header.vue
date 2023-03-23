<template>
   <header class="main-header site-header">
           
           <!-- Main Box -->
           <div class="main-box">
               <div class="outer-container clearfix">
                   <!--Logo Box-->
                   <div class="logo-box">
                       <div class="logo"><a href="index.html"><img src="@/assets/images/movingforwardtogether.png" alt=""></a></div>
                   </div>
                   
                   <!--Nav Outer-->
                   <div class="nav-outer clearfix">
                       <!-- Main Menu -->
                       <nav class="main-menu">
                           <div class="navbar-header">
                               <!-- Toggle Button -->    	
                               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                               <span class="icon-bar"></span>
                               <span class="icon-bar"></span>
                               <span class="icon-bar"></span>
                               </button>
                           </div>
                           
                           <div class="navbar-collapse collapse clearfix">
                               <ul class="navigation clearfix">
                                   <li class="dropdown"><NuxtLink to="/">Home</NuxtLink>
                                   </li>
                                  
                                   <li  class="dropdown"><NuxtLink to="about">About Us</NuxtLink></li>
                                   <li class="dropdown"><NuxtLink to="events">Events</NuxtLink></li>
                                    <li  class="dropdown"><NuxtLink to="donation">Donation</NuxtLink></li>
                                
                                   <li class="dropdown current"><NuxtLink to="blog">Blog</NuxtLink>
                                   </li>
                                   <li  class="dropdown"><NuxtLink to="contact">Contact</NuxtLink></li>
                               </ul>
                           </div>
                       </nav><!-- Main Menu End-->
                       
                       <!--Follow Us-->
                       <div class="follow-us">
                           <span class="text">Follow us</span> <a href="#"><span class="fa fa-facebook-f"></span></a> <a href="#"><span class="fa fa-twitter"></span></a>
                       </div>
                       
                   </div><!--Nav Outer End-->
                   
                   <!-- Hidden Nav Toggler -->
                   <div class="nav-toggler">
                   <button class="hidden-bar-opener"><span class="icon fa fa-bars"></span></button>
                   </div><!-- / Hidden Nav Toggler -->
                   
                   <!--Search Btn-->
                   <div class="search-box-btn"><span class="icon fa fa-search"></span></div>
                   
                   <!--Cart Btn-->
                   <a href="#" class="cart-btn"><span class="icon flaticon-business"></span><span class="count">2</span></a>
                   
               </div>
           </div>
       
       </header>
</template>

<script>
export default {};
</script>

<style></style>
