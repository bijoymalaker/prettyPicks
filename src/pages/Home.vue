<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">Pretty Picks</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/shop">Shop</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
            </li>
          </ul>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search Products" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link position-relative" to="/wishlist">
                <font-awesome-icon icon="fa-regular fa-heart" class="fs-4" />
                <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                  10+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/shop">Login/register</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link position-relative" to="/cart">
                <font-awesome-icon icon="fa-solid fa-cart-arrow-down" class="fs-4" />
                <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                  10+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/banner-1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/images/banner-2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/images/banner-3.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <div class="container">
        <div class="carousel-caption d-none d-md-block row">
          <div class="col-md-6 text-start">
            <h1 class="fw-bold text-black">Women's latest fashion sale</h1>
            <p class="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration.</p>
            <button class="btn btn-primary">READ MORE</button>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <Category />
    <Product />
    <Sections />
    <Product />
    <DetailBanner />

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <div>
            <p class="fs-4">Enjoy the best quality,</p>
            <p class="fs-4">cosmetics collected by</p>
          </div>
          <div class="mt-4">
            <h2 class="display-5">LABONNO SHOP</h2>
            <div class="d-flex justify-content-center mt-3">
              <span class="me-2">7</span>
              <span class="me-2">06</span>
              <span class="me-2">49</span>
              <span class="me-2">01</span>
              <span>N°8</span>
            </div>
            <div class="mt-4">
              <img src="" alt="Product Image" class="img-fluid rounded shadow-sm" style="max-height: 300px;">
              <p class="mt-3 fw-bold">Beauty & Health N°8 Anti-Aging Eye Cream</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Ingredients />
    <Articals />
    <Footer />




  </div>
</template>

<script>
import Category from '../components/Category.vue';
import Product from '../components/Product.vue';
import Sections from '../components/Sections.vue';
import DetailBanner from '../components/DetailBanner.vue';
import Ingredients from '../components/Ingredients.vue';
import Articals from '../components/Articals.vue';
import Footer from '../components/Footer.vue';


export default {
  name: 'HomePage',
  data() {
    return {

    }
  },
  components: {
    Product, Category, Sections, DetailBanner, Ingredients, Articals, Footer
  }
}
</script>

<style scoped>
.carousel-caption {
  top: 25%;
}

.display-5 {
  font-weight: bold;
  /* Example: Making the heading bolder */
}
</style>
