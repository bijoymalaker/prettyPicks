<template>
    <div>
    <section class="banner-part" :style="{ backgroundImage: `url(${innerBanner})` }">
    <div class="text-section">
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
    props: {
        innerBanner: {
            type: String,
            default: 'Inner Page Banner'
        }
    },
    
    
}
</script>
<style scoped>
.banner-part {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.text-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
}
    
</style>