<template>
  <div class="container my-5" v-if="blog">
    <div class="row">
      <!-- Blog Image -->
      <div class="col-md-6 mb-4">
        <img :src="blog.image" :alt="blog.title" class="img-fluid rounded w-100" />
      </div>
      <!-- Blog Details -->
      <div class="col-md-6 mb-4">
        <h2 class="fw-bold mb-2">{{ blog.title }}</h2>
        <div class="mb-2 text-muted">
          <span>By {{ blog.author }}</span> |
          <span>{{ blog.date }}</span>
        </div>
        <div class="mb-3">
          <span class="badge bg-primary" v-if="blog.category">{{ blog.category }}</span>
        </div>
        <div class="mb-3" v-if="blog.tags && blog.tags.length">
          <span class="badge bg-secondary me-1" v-for="tag in blog.tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="lead">{{ blog.summary }}</p>
      </div>
    </div>
    <!-- Blog Content -->
    <div class="row">
      <div class="col-12">
        <div class="blog-content" v-html="blog.content"></div>
      </div>
    </div>
    <!-- Related Blogs -->
    <div class="mt-5" v-if="relatedBlogs.length">
      <h4 class="mb-4">Related Posts</h4>
      <div class="row">
        <div v-for="related in relatedBlogs" :key="related.id" class="col-md-3 mb-4">
          <div class="card h-100">
            <img :src="related.image" :alt="related.title" class="card-img-top" style="height: 180px; object-fit: cover;" />
            <div class="card-body">
              <h6 class="card-title">{{ related.title }}</h6>
              <p class="card-text text-muted small mb-1">{{ related.summary }}</p>
              <router-link :to="{ name: 'blogPost', params: { id: related.id } }" class="btn btn-sm btn-outline-primary">Read More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container my-5 text-center">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="mt-3">Loading blog post...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import {articles} from "../assets/blogs/blogs"; // Adjust the path if needed

const route = useRoute();
const blog = ref(null);
const allBlogs = ref([]);
const relatedBlogs = ref([]);

const fetchBlog = (id) => {
  // Find the blog by id from blogsData
  const found = articles.find(b => String(b.id) === String(id));
  if (found) {
    blog.value = found;
  } else {
    blog.value = null;
  }
};

const fetchAllBlogs = () => {
  allBlogs.value = articles;
};

const updateRelatedBlogs = () => {
  relatedBlogs.value = allBlogs.value
    .filter(b => String(b.id) !== String(route.params.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
};

onMounted(() => {
  fetchAllBlogs();
  fetchBlog(route.params.id);
  updateRelatedBlogs();
});

watch(() => route.params.id, (newId) => {
  fetchBlog(newId);
  updateRelatedBlogs();
});
</script>

<style scoped>
.blog-content {
  font-size: 1.1rem;
  line-height: 1.7;
}
.breadcrumb {
  background: none;
  padding: 0;
  margin-bottom: 1rem;
}
.card-title {
  font-size: 1.1rem;
}
</style>