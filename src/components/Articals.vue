<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="text-center">
          <h2 class="display-6 fw-bold mb-3">OUR ARTICLE</h2>
          <p class="mb-5 text-muted">
            Majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
          </p>
        </div>

        <!-- Articles Grid -->
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="article in displayedArticles" :key="article.id">
            <div class="card h-100 border-0 shadow-sm">
              <div class="position-relative">
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="card-img-top img-fluid object-fit-cover"
                  style="height: 250px;"
                />
                <div class="position-absolute top-0 start-0 bg-light p-2 rounded-bottom">
                  <span class="small text-muted">{{ article.date }}</span>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ article.title }}</h5>
                <p class="card-text text-muted small">{{ article.description }}</p>
                <a href="#" class="btn btn-link p-0">CONTINUE READING</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <nav aria-label="Page navigation" class="mt-5">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
            </li>
            <li
              class="page-item"
              v-for="page in totalPages"
              :key="page"
              :class="{ active: page === currentPage }"
            >
              <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

// Import images
import clothes1 from "../assets/images/products/clothes1.jpg";
import clothes2 from "../assets/images/products/clothes2.jpg";
import clothes3 from "../assets/images/products/clothes3.jpg";
import clothes4 from "../assets/images/products/clothes4.jpg";
import jacket1 from "../assets/images/products/jacket1.jpg";
import jacket2 from "../assets/images/products/jacket2.jpg";
import jacket3 from "../assets/images/products/jacket3.jpg";
import jacket4 from "../assets/images/products/jacket4.jpg";
import jacket5 from "../assets/images/products/jacket5.jpg";
import jacket6 from "../assets/images/products/jacket6.jpg";

// Article data
const articles = [
  {
    id: 1,
    date: "18 DEC",
    image: clothes1,
    title: "DA MANAE ANTI WRINKLE OBSIDIAN CREAM",
    description: "ত্বকের তারুণ্য ও সৌন্দর্য ধরে রাখার সেরা সমাধান - The best solution to maintain youthful and beautiful skin.",
  },
  {
    id: 2,
    date: "24 DEC",
    image: clothes2,
    title: "PRECIOUS ALPHA-ARBUTIN SERUM (50ML)",
    description: "ত্বকের যত্নে এক অনন্য পণ্য - A unique product for skin care.",
  },
  {
    id: 3,
    date: "23 DEC",
    image: clothes3,
    title: "EHUV GLUTA Sunscreen ORG (30g)",
    description: "সূর্যের ক্ষতিকর প্রভাব থেকে ত্বককে সুরক্ষিত রাখুন - Protect your skin from the harmful effects of the sun.",
  },
  {
    id: 4,
    date: "15 DEC",
    image: clothes4,
    title: "O’ MAYLN HAIR VITAMIN-A.C.E",
    description: "চুলের সৌন্দর্য এবং যত্নে এক নতুন যুগের প্রবর্তক - A new era in hair beauty and care.",
  },
  {
    id: 5,
    date: "10 JAN",
    image: jacket1,
    title: "New Product Launch - Hydrating Facial Mask",
    description: "Introducing our latest innovation in skincare: a deeply hydrating facial mask for radiant skin.",
  },
  {
    id: 6,
    date: "5 JAN",
    image: jacket2,
    title: "Winter Skincare Tips",
    description: "Learn how to protect your skin from the harsh winter weather with our expert tips.",
  },
  {
    id: 7,
    date: "28 DEC",
    image: jacket3,
    title: "The Benefits of Vitamin C Serum",
    description: "Discover the amazing benefits of Vitamin C serum for brighter, healthier-looking skin.",
  },
  {
    id: 8,
    date: "20 DEC",
    image: jacket4,
    title: "Natural Ingredients for Glowing Skin",
    description: "Explore the power of natural ingredients in achieving a radiant and healthy complexion.",
  },
  {
    id: 9,
    date: "12 JAN",
    image: jacket5,
    title: "Anti-Aging Secrets Revealed",
    description: "Unlock the secrets to youthful skin with our anti-aging skincare routine.",
  },
  {
    id: 10,
    date: "7 JAN",
    image: jacket6,
    title: "The Ultimate Guide to Hair Care",
    description: "Everything you need to know about achieving healthy, luscious locks.",
  },
];

export default {
  name: "Articals",
  setup() {
    const articlesPerPage = 4;
    const currentPage = ref(1);

    const totalPages = computed(() => Math.ceil(articles.length / articlesPerPage));

    const displayedArticles = computed(() => {
      const startIndex = (currentPage.value - 1) * articlesPerPage;
      const endIndex = startIndex + articlesPerPage;
      return articles.slice(startIndex, endIndex);
    });

    const changePage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    return {
      articlesPerPage,
      currentPage,
      totalPages,
      displayedArticles,
      changePage,
    };
  },
};
</script>

<style scoped>
.page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: #fff;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
}
</style>
