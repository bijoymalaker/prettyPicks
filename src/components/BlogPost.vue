<template>
    <div>
        <InnerPageBanner />
         
        <div class="container my-4">
            <div class="row">
                <!-- Blog Content -->
                <main class="col-md-9">
                    <article>
                        <h2>{{ blogPost.title }}</h2>
                        <p class="text-muted">Posted by {{ blogPost.author }} on {{ blogPost.date }}</p>
                        <img :src="blogPost.image" class="img-fluid mb-4" :alt="blogPost.title">

                        <p v-for="(paragraph, index) in blogPost.content" :key="index">
                            {{ paragraph }}
                        </p>

                        <h3>প্রধান উপকারিতা</h3>
                        <ul>
                            <li v-for="(benefit, index) in blogPost.benefits" :key="index">{{ benefit }}</li>
                        </ul>

                        <h3>ব্যবহারবিধি</h3>
                        <ol>
                            <li v-for="(instruction, index) in blogPost.instructions" :key="index">{{ instruction }}</li>
                        </ol>

                        <h3>কেন {{ blogPost.title }} বেছে নেবেন?</h3>
                        <ul>
                            <li v-for="(reason, index) in blogPost.reasons" :key="index">{{ reason }}</li>
                        </ul>

                        <h3>{{ blogPost.origin.title }}</h3>
                        <p>
                            {{ blogPost.origin.description }}
                        </p>
                    </article>

                    <!-- Comments Section -->
                    <section class="mt-5">
                        <h3>Leave a Reply</h3>
                        <form @submit.prevent="submitComment">
                            <div class="mb-3">
                                <label for="comment" class="form-label">Comment</label>
                                <textarea v-model="newComment.text" id="comment" class="form-control" rows="4"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input v-model="newComment.name" type="text" id="name" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="newComment.email" type="email" id="email" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-primary">Post Comment</button>
                        </form>
                    </section>
                </main>

                <!-- Sidebar -->
                <aside class="col-md-3">
                    <div class="mb-4">
                        <h5>Categories</h5>
                        <ul class="list-unstyled">
                            <li v-for="(category, index) in categories" :key="index"><a href="#">{{ category }}</a></li>
                        </ul>
                    </div>
                    <div class="mb-4">
                        <h5>Recent Posts</h5>
                        <ul class="list-unstyled">
                            <li v-for="(post, index) in recentPosts" :key="index"><a href="#">{{ post }}</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
import InnerPageBanner from './innerpage/InnerPageBanner.vue';

export default {
    name: 'BlogPost',
    components: {
        InnerPageBanner
    },
    data() {
        return {
            blogTitle: 'Blog',
            blogFooter: 'Pretty Picks. All Rights Reserved.',
            blogPost: {
                title: 'AR Carrot Honey Rice Milk Facewash: আপনার স্ক্রাব মধুর প্রকৃতির উপহার',
                author: 'Labonno Blog',
                date: 'December 17, 2024',
                image: 'path/to/facewash-image.jpg',
                content: [
                    'মধুর শক্তি এবং এর সাথে চমৎকার ভিটামিন সমৃদ্ধ এই ফেসওয়াশটি ত্বকের যত্নে অতুলনীয়। এটি আপনার ত্বকের জন্য একটি প্রকৃতির উপহার নিয়ে এসেছে।'
                ],
                benefits: [
                    'ত্বককে নরম এবং মসৃণ করে।',
                    'মৃত কোষ দূর করে এবং উজ্জ্বলতা ফিরিয়ে আনে।',
                    'ত্বকের গভীরে পরিচ্ছন্নতা নিশ্চিত করে।'
                ],
                instructions: [
                    'ত্বক সামান্য ভেজান।',
                    'একটু ফেসওয়াশ নিন এবং ত্বকে ম্যাসাজ করুন।',
                    'পরিষ্কার পানি দিয়ে ধুয়ে ফেলুন।'
                ],
                reasons: [
                    'প্রাকৃতিক উপাদান ব্যবহার করে তৈরি।',
                    'ত্বকের জন্য সম্পূর্ণ নিরাপদ।',
                    'সব ধরনের ত্বকে ব্যবহার উপযোগী।'
                ],
                origin: {
                    title: 'Made in Thailand',
                    description: 'এটি থাইল্যান্ডে তৈরি এবং AR Carrot Honey Rice Milk Facewash এর উপাদান সম্পূর্ণ প্রাকৃতিক। এটি আপনাকে ত্বকের যত্নে সেরা অভিজ্ঞতা দেবে।'
                }
            },
            categories: ['Blog'],
            recentPosts: [
                'Unveiling the Magic of KOJIC GLUTA PAPAYA Soap',
                'EHUV Gluta Sunscreen'
            ],
            newComment: {
                text: '',
                name: '',
                email: ''
            }
        };
    },
    methods: {
        submitComment() {
            if (this.newComment.text && this.newComment.name && this.newComment.email) {
                alert('Comment submitted successfully!');
                this.newComment.text = '';
                this.newComment.name = '';
                this.newComment.email = '';
            } else {
                alert('Please fill out all fields before submitting.');
            }
        }
    }
};
</script>

<style>
body {
    font-family: Arial, sans-serif;
}
</style>
