<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Navbar, Footer, ScrollToTop
  },
  
}

</script>

<template>
  <div>
    <Navbar />
    <router-view>

    </router-view>
    <Footer/>
    <ScrollToTop />
  </div>
  
</template>

<style scoped>

</style>
