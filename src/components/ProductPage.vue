<template>
  <div class="container my-5">
    <div class="row">
      <!-- Product Details -->
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="row g-0">
            <div class="col-md-5">
              <img :src="product.image" :alt="product.name" class="img-fluid rounded-start w-100" />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h3 class="card-title">{{ product.name }}</h3>
                <p class="card-text text-muted">{{ product.description }}</p>
                <h4 class="text-primary mb-3">${{ product.price }}</h4>
                <button class="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Product Suggestions -->
      <div class="col-md-4">
        <h5 class="mb-3">You may also like</h5>
        <div v-for="suggestion in suggestions" :key="suggestion.id" class="card mb-3">
          <div class="row g-0 align-items-center">
            <div class="col-4">
              <img :src="suggestion.image" :alt="suggestion.name" class="img-fluid rounded" />
            </div>
            <div class="col-8">
              <div class="card-body py-2 px-2">
                <h6 class="card-title mb-1">{{ suggestion.name }}</h6>
                <p class="card-text text-muted small mb-1">${{ suggestion.price }}</p>
                <button class="btn btn-sm btn-outline-primary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Dummy product data
const product = {
  id: 1,
  name: "Hydrating Facial Mask",
  description: "A deeply hydrating facial mask for radiant, glowing skin. Suitable for all skin types.",
  price: 29.99,
  image: require("../assets/images/products/clothes1.jpg"),
};

// Dummy suggestions
const suggestions = [
  {
    id: 2,
    name: "Vitamin C Serum",
    price: 19.99,
    image: require("../assets/images/products/clothes2.jpg"),
  },
  {
    id: 3,
    name: "Anti-Aging Cream",
    price: 24.99,
    image: require("../assets/images/products/jacket1.jpg"),
  },
  {
    id: 4,
    name: "Moisture Lock Lotion",
    price: 15.99,
    image: require("../assets/images/products/jacket2.jpg"),
  },
];
</script>

<style scoped>
.card-title {
  font-size: 1.25rem;
}
</style>
