<template>
    <div>
        <section class="sections-carousel py-5">
            <div class="container">
                <Carousel :items-to-show="3" :autoplay="false" :loop="true">
                    <Slide v-for="(section, index) in sections" :key="index">
                        <div class="card h-100">
                            <img :src="section.image" class="card-img-top" :alt="section.name">
                            <div class="card-body text-center">
                                <h5 class="card-title">{{ section.name }}</h5>
                                <p class="card-text text-muted">{{ section.description }}</p>
                                <button class="btn btn-outline-primary">READ MORE</button>
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
    name: 'Sections',
    data() {
        return {

            sections: [
                { name: "Serums & Oils", description: "Hydrating and nourishing products.", image: "" },
                { name: "Organics Cream", description: "Natural and organic creams.", image: "section2.jpg" },
                { name: "Facial Cleanser", description: "Gentle and effective face cleansers.", image: "section3.jpg" }
            ]
        };

    },
    components: {
        Carousel,
        Slide

    }
}
</script>
<style scoped></style>