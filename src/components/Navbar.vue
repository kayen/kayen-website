<template lang="html">
  <header id="home">
    <nav class="navbar navbar-default" id="main-nav">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                <img src="~@/assets/images/logo-Kayen-white.png" alt="kayen" height="50" class="img-responsive">
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-morki">
              <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse navbar-morki">
              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a href="#">Home</a>
                  <ul class="nav-item">
                    <li><a class="nav-item" href="index-01.html">Home 01</a></li>
                    <li><a class="nav-item" href="index-02.html">Home 02</a></li>
                    <li><a class="nav-item" href="index-03.html">Home 03</a></li>
                    <li><a class="nav-item" href="home-multipage.html">Home Multipage</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li class="dropdown"><a href="#">Gallery</a>
                  <ul class="list-unstyled">
                    <li><a href="gallery-two-column.html">Gallery Two Column</a></li>
                    <li><a href="gallery-three-column.html">Gallery Three Column</a></li>
                    <li><a href="gallery-four-column.html">Gallery Four Column</a></li>
                  </ul>
                </li>
                <li><a href="team.html">Team</a></li>
                <li class="dropdown"><a href="#">Shop</a>
                  <ul class="list-unstyled">
                    <li><a href="shop-full-width.html">Shop Full With</a></li>
                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                    <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                    <li><a href="shop-single.html">Shop Single</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#">Pages</a>
                  <ul class="list-unstyled">
                    <li><a href="coming-soon.html">Coming Soon</a></li>
                    <li><a href="pricing-table.html">Price Table</a></li>
                    <li><a href="team.html">Team</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#">Blog</a>
                  <ul class="list-unstyled">
                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                    <li><a href="blog-full-width.html">Blog Full Width</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
                <li class="nav-download-btn"><a href="#download-app" data-scroll>Download</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>
