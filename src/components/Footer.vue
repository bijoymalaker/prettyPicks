<template>
    <footer class="bg-light py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="d-flex align-items-center mb-3">
              <img :src="logo" alt="Shop Logo" height="50" class="me-2">
              <h5 class="mb-0 fs-4">Pretty Picks</h5>
            </div>
            <ul class="list-unstyled text-muted small fs-5">
              <li><font-awesome-icon icon="fa-solid fa-location-dot" class="me-2" />Dhaka, Bangladesh</li>
              <li><font-awesome-icon icon="fa-solid fa-phone" class="me-2"/>Phone: 01029794605</li>
              <li><font-awesome-icon icon="fa-brands fa-whatsapp" class="me-2" />Whatsapp: 01823934468</li>
            </ul>
          </div>
          <div class="col-md-4 offset-md-4">
            <h6 class="mb-3">RECENT POSTS</h6>
            <ul class="list-unstyled">
              <li v-for="post in articles.slice(0, 3)" :key="post.id" class="mb-2">
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
            <p class="text-muted small mb-0">All Rights Reserved by <router-link to="/">Pretty Picks</router-link></p>
          </div>
          <div class="col-md-6 text-end">
            <img :src="paymentImage" alt="Payment Methods" height="50%" class="mw-100">
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { articles } from './articles.js'; // <-- Import from new file
  import logo from '../assets/images/logo/prettypicksLogo.png'; // Import logo

  import paymentImage from '../assets/images/paymentssl.png';
  
  
  </script>
  
  <style scoped>
 
  </style>