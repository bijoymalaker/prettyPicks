<template>
    <footer class="bg-light py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="d-flex align-items-center mb-3">
              <img :src="logo" alt="Shop Logo" height="50" class="me-2">
              <h5 class="mb-0">Pretty Picks</h5>
            </div>
            <ul class="list-unstyled text-muted small">
              <li><i class="fas fa-map-marker-alt me-2"></i>Dhaka, Bangladesh</li>
              <li><i class="fas fa-phone me-2"></i>Phone: 01029794605</li>
              <li><i class="fab fa-whatsapp me-2"></i>Whatsapp: 01823934468</li>
            </ul>
          </div>
          <div class="col-md-4 offset-md-4">
            <h6 class="mb-3">RECENT POSTS</h6>
            <ul class="list-unstyled">
              <li v-for="post in recentPosts" :key="post.id" class="mb-2">
                <div class="d-flex align-items-start">
                  <img :src="post.image" :alt="post.title" height="50" class="me-2 rounded">
                  <div>
                    <a href="#" class="text-decoration-none text-dark fw-bold small">{{ post.title }}</a><br>
                    <span class="text-muted small">{{ post.date }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-4 border-top pt-3">
          <div class="col-md-6">
            <p class="text-muted small mb-0">All Rights Reserved by Labonno Shop</p>
          </div>
          <div class="col-md-6 text-end">
            <img :src="paymentImage" alt="Payment Methods" height="25" class="mw-100">
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import logo from '../assets/images/logo/prettypicksLogo.png'; // Import logo
//   import paymentMethods from './assets/payment_methods.png'; // Import payment methods image
//   import post1 from './assets/post1.jpg'; // Import post images
//   import post2 from './assets/post2.jpg';
  import paymentImage from '../assets/images/paymentssl.png';
  
  const recentPosts = [
    {
      id: 1,
      image: 'post1',
      title: 'PRECIOUS ALPHA-ARBUTIN SERUM (50ML) ত্বকের যত্নে এক অনন্য পণ্য',
      date: 'October 24, 2023',
    },
    {
      id: 2,
      image: 'post2',
      title: 'EHUV GLUTA Sunscreen ORG (30g) সূর্যের ক্ষতিকর প্রভাব থেকে ত্বককে সুরক্ষিত রাখুন',
      date: 'October 22, 2023',
    },
  ];
  
  onMounted(() => {
    // Import Font Awesome only once
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'; // Or your preferred way to include it
    document.head.appendChild(link);
  });
  </script>
  
  <style scoped>
 
  </style>