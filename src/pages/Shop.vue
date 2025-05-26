<template>
    <div>
        <InnerPageBanner :innerBanner="innerBanner" />
        <div class="container my-4">
            <div class="row">
                <!-- Sidebar -->
                <aside class="col-md-3">
                    <div class="mb-4">
                        <h5>Filter by Price</h5>
                        <input type="range" class="form-range" min="400" max="2200" step="100" v-model="priceRange" />
                        <p>Price: {{ priceRange[0] }} - {{ priceRange[1] }}</p>
                    </div>
                    <div class="mb-4">
                        <h5>Stock Status</h5>
                        <div>
                            <input type="checkbox" id="onSale" v-model="filters.onSale" />
                            <label for="onSale">On Sale</label>
                        </div>
                        <div>
                            <input type="checkbox" id="inStock" v-model="filters.inStock" />
                            <label for="inStock">In Stock</label>
                        </div>
                    </div>
                </aside>
                <!-- Main Content -->
                <main class="col-md-9">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        <div class="col" v-for="product in products" :key="product.id">
                            <div class="card h-100">
                                <img :src="product.images" class="card-img-top" :alt="product.name" />
                                <div class="card-body">
                                    <h5 class="card-title">{{ product.name }}</h5>
                                    <p class="card-text">{{ product.category }}</p>
                                    <p class="text-muted">
                                        <s v-if="product.discount">&#2547; {{ product.originalPrice }}</s>
                                        &#2547; {{ product.price }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed, onMounted } from "vue";
import InnerPageBanner from "../components/innerpage/InnerPageBanner.vue";

import innerBanner from '../assets/images/with_photosWeb_Banner_716_4jjhhj.webp';

const priceRange = ref([400, 2200]);
const products = ref([]);
const filters = ref({
    onSale: false,
    inStock: false,
});

const categories = [
    "beauty",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
];

const fetchProducts = async () => {
    try {
        const allProducts = [];
        for (const category of categories) {
            const response = await fetch(
                `https://dummyjson.com/products/category/${category}`
            );
            const data = await response.json();
            if (data.products) {
                allProducts.push(...data.products);
            }
        }
        products.value = allProducts;
    } catch (error) {
        console.error("Error Fetching products", error);
    }
};

onMounted(fetchProducts);

// const filteredProducts = computed(() => {
//     return products.value.filter(product => {
//         return product.price >= priceRange.value[0] && product.price <= priceRange.value[1];
//     });
// });
</script>

<style>


</style>
