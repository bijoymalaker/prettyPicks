<template>
    <div>
        <section class="banner-part">
        <div class="text-section vh-100">
          <div class="text-center">
            <h2>Jonathon Kubb</h2>
            <h4>Photography</h4>
            <p>Based in New York since 2001</p>
        </div>
        </div>
      </section>
        
    </div>
</template>
<script>
export default {
    name: 'InnerPageBanner',
    components: {
        
    },
    
}
</script>
<style scoped>
.banner-part {
    background-image: url(../../assets/images/banner-2.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.text-section {
    display: flex;
    justify-content: center;
    align-items: center;
}
    
</style>