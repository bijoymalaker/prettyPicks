<template>
    <div>
        <InnerPageBanner />
        <div class="container my-4">
            <div class="row">
                <div class="col-md-4 mb-4" v-for="(post, index) in blogPosts" :key="index">
                    <div class="card">
                        <img :src="post.image" class="card-img-top" :alt="post.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="text-muted">Posted on {{ post.date }}</p>
                            <p class="card-text">{{ post.summary }}</p>
                            <router-link :to="{ name: 'blogPost', params: { id: index } }" class="btn btn-primary">Read More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InnerPageBanner from '../components/innerpage/InnerPageBanner.vue';

export default {
    name: 'BlogPage',
    components: {
        InnerPageBanner
    },
    data() {
        return {
            blogTitle: 'Blog',
            blogFooter: 'Pretty Picks. All Rights Reserved.',
            blogPosts: [
                {
                    title: 'AR Carrot Honey Rice Milk Facewash',
                    date: 'December 17, 2024',
                    image: 'path/to/facewash-image.jpg',
                    summary: 'A natural gift for your skin...',
                },
                {
                    title: 'KOJIC GLUTA PAPAYA Soap',
                    date: 'December 14, 2024',
                    image: 'path/to/kojic-image.jpg',
                    summary: 'Discover the magic of Kojic Papaya...',
                }
                // Add more blog posts here
            ]
        };
    }
};
</script>
