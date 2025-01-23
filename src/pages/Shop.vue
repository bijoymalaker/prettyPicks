<template>
    <div>
        <InnerPageBanner />
        <div class="container my-4">
            <div class="row">
                <!-- Sidebar -->
                <aside class="col-md-3">
                    <div class="mb-4">
                        <h5>Filter by Price</h5>
                        <input type="range" class="form-range" min="400" max="2200" step="100" v-model="priceRange">
                        <p>Price: {{ priceRange[0] }} - {{ priceRange[1] }}</p>
                    </div>
                    <div class="mb-4">
                        <h5>Stock Status</h5>
                        <div>
                            <input type="checkbox" id="onSale" v-model="filters.onSale">
                            <label for="onSale">On Sale</label>
                        </div>
                        <div>
                            <input type="checkbox" id="inStock" v-model="filters.inStock">
                            <label for="inStock">In Stock</label>
                        </div>
                    </div>
                </aside>
                <!-- Main Content -->
                <main class="col-md-9">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        <div class="col" v-for="product in filteredProducts" :key="product.id">
                            <div class="card h-100">
                                <img :src="product.image" class="card-img-top" :alt="product.name">
                                <div class="card-body">
                                    <h5 class="card-title">{{ product.name }}</h5>
                                    <p class="card-text">{{ product.category }}</p>
                                    <p class="text-muted">
                                        <s v-if="product.discount">&#2547; {{ product.originalPrice }}</s> &#2547; {{ product.price }}
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

<script>
import InnerPageBanner from '../components/innerpage/InnerPageBanner.vue';

// import Navbar from '../components/Navbar.vue';

export default {
    name: 'Shop',
    components: {
        InnerPageBanner
    },
    data() {
        return {
            priceRange: [400, 2200],
            filters: {
                onSale: false,
                inStock: false
            },
            products: [
                { id: 1, name: 'AR Carrot Honey Rice Milk Facewash', category: 'Face Care', price: 650, originalPrice: 1000, discount: true, image: 'path/to/image1.jpg' },
                { id: 2, name: 'AR Vitamin C B3 Gluta X10 Serum', category: 'Face Care', price: 550, originalPrice: 750, discount: true, image: 'path/to/image2.jpg' },
                { id: 3, name: 'Bobo Forever Whitening Combo', category: 'Skin Care', price: 1700, originalPrice: 2000, discount: true, image: 'path/to/image3.jpg' },
                { id: 4, name: 'C&E Rose Strawberry Peeling Gel', category: 'Face Care', price: 850, originalPrice: 970, discount: true, image: 'path/to/image4.jpg' },
                { id: 5, name: 'Clear Skin Cloud Mousse', category: 'Hair Care', price: 850, originalPrice: 1050, discount: true, image: 'path/to/image5.jpg' },
            ]
        };
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => {
                return product.price >= this.priceRange[0] && product.price <= this.priceRange[1];
            });
        }
    }
};
</script>

<style>

</style>
