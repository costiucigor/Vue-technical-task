<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Restaurant {
  id: string;
  name: string;
  time_of_delivery: number;
  stars: number;
  price: number;
  kitchen: string;
  image: string;
  products: string;
}

const products = ref([]);
const route = useRoute();
const selectedRestaurant = ref<Restaurant | null>(null);

const fetchProducts = async () => {
  try {
    const productParam = route.params.products;
    const response = await fetch('/db/partners.json');
    const data = await response.json();
    const restaurant = data.find((restaurant: any) => restaurant.products === productParam);

    if (restaurant) {
      products.value = require(`/public/db/${restaurant.products}`);
      selectedRestaurant.value = restaurant;
    } else {
      console.error('Restaurant not found');
    }

    console.log(products.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchProducts);
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">{{ selectedRestaurant?.name }}</h2>
          <div class="card-info">
            <div class="rating">
              {{ selectedRestaurant?.stars }}
            </div>
            <div class="price">{{ selectedRestaurant?.price }} ₽</div>
            <div class="category">{{ selectedRestaurant?.kitchen }}</div>
          </div>
        </div>
        <div class="cards cards-menu">
          <template v-if="products">
            <product-card
                v-for="product in products"
                :key="product.id"
                :name="product.name"
                :description="product.description"
                :price="product.price"
                :image="require(`@/assets/${product.image}`)"
                class="card"
            >
            </product-card>
          </template>
        </div>
      </section>
    </div>
  </main>
</template>
