<template>
  <div>

    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active" v-for="(image, index) in bannerImages" :key="index" :data-bs-interval="2000">
          <img :src="image.image" class="d-block w-100" :alt="image.name">
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
    <Product :products="products" />
    <Sections />
    <Product :products="anotherProducts" />
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




  </div>
</template>

<script>
import Category from '../components/Category.vue';
import Product from '../components/Product.vue';
import Sections from '../components/Sections.vue';
import DetailBanner from '../components/DetailBanner.vue';
import Ingredients from '../components/Ingredients.vue';
import Articals from '../components/Articals.vue';


// Banner Images import 

import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';


export default {
  name: 'HomePage',
  data() {
    return {
      bannerImages: [
        {
          name: "banner1",
          image: banner1
        },
        {
          name: "banner2",
          image: banner2
        },
        {
          name: "banner3",
          image: banner3
        }
      ],
      products: [
        {
          name: "Korean H&S Arbutin Whitening Cream (15ml)",
          description: "Face Care, Whitening Cream",
          price: 1200,
          image: ""
        },
        {
          name: "Q-NBC Care Whitening Night Cream (15g)",
          description: "Face Care, Night Cream",
          price: 950,
          image: "product2.jpg"
        },
        {
          name: "C.S.E Rose Strawberry Face/Body Peeling Gel (300ml)",
          description: "Body Care, Peeling Gel",
          price: 850,
          image: ""
        },
        {
          name: "Madam White Tomato Gluta Soap",
          description: "Skin Care, Soap",
          price: 750,
          image: ""
        },
        {
          name: "Madam White Tomato Gluta Soap",
          description: "Skin Care, Soap",
          price: 750,
          image: ""
        },
        {
          name: "Madam White Tomato Gluta Soap",
          description: "Skin Care, Soap",
          price: 750,
          image: ""
        },
      ],
      anotherProducts: [
        {
          name: "Korean (15ml)",
          description: "Face Car Cream",
          price: 1200,
          image: ""
        },
        {
          name: "Q Night Cream (15g)",
          description: "Faceam",
          price: 950,
          image: ""
        },
        {
          name: "C.S. Peeling Gel (300ml)",
          description: "Body Care,l",
          price: 850,
          image: ""
        },
        {
          name: "Madamoap",
          description: "Skinoap",
          price: 750,
          image: ""
        },
        {
          name: "Madam WGluta Soap",
          description: "Skie, Soap",
          price: 750,
          image: ""
        },
        {
          name: "Madato Gluta Soap",
          description: "Skioap",
          image: ""
        },
      ]

    }

  },
  components: {
     Product, Category, Sections, DetailBanner, Ingredients, Articals
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
