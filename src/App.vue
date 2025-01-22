<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Navbar, Footer
  },
  
}

</script>

<template>
  <div>
    <Navbar />
    <router-view>

    </router-view>
    <Footer/>
  </div>
  
</template>

<style scoped>

</style>
