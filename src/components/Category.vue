<template>
    <div>
        <section class="category-carousel py-5">
            <div class="container">
                <Carousel :items-to-show="4" :autoplay="false" :gap="10">
                    <Slide v-for="(category, index) in categories" :key="index">
                        <div class="card h-100">
                            <img :src="category.image" class="card-img-top" :alt="category.name">
                            <div class="card-body text-center">
                                <h5 class="card-title">{{ category.name }}</h5>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </section>

    </div>
</template>
<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
    name: 'Product',
    data() {
        return {
            categories: [
                {
                    name: "Korean  (15ml)",
                    image: ""
                },
                {
                    name: "Q-NBC Care Whitening  (15g)",
                    image: "product2.jpg"
                },
                {
                    name: "C.S.E Rose Strawberry (300ml)",
                    image: ""
                },
                {
                    name: "Madam White To",
                    image: ""
                },
                {
                    name: "Madam White Tomato",
                    image: ""
                },
            ]
        }
    },
    components: {
        Carousel,
        Slide

    }
}
</script>
<style scoped>
.category-carousel .card {
    border: none;
    transition: transform 0.3s;
}

.category-carousel .card:hover {
    transform: scale(1.05);
}
</style>