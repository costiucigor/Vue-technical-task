<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import restaurantData from "@/../public/db/partners.json";
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';

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

const fetchProducts = () => {
  const productParam = route.params.products;
  const jsonData = require(`/public/db/${productParam}`);
  const restaurant = jsonData.find((restaurant: Restaurant) => restaurant.products === productParam);
  products.value = jsonData;
  if (restaurant) {
    restaurantData.value = [restaurant];
    products.value = require(`/public/db/${restaurant.products}`).default;
  } else {
    // Handle case when the selected product doesn't match any restaurant
    console.error('Restaurant not found');
  }

  console.log(jsonData)
};

onMounted(fetchProducts);
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="menu">
            <div class="section-heading">
              <h2 class="section-title restaurant-title">{{ restaurantData[0].name }}</h2>
              <div class="card-info">
                <div class="rating">
                  {{ restaurantData[0].name }}
                </div>
                <div class="price">{{ restaurantData[0].price }} ₽</div>
                <div class="category">{{ restaurantData[0].kitchen}}</div>
              </div>
            </div>
        <div class="cards cards-menu">
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
        </div>
      </section>
    </div>
  </main>
</template>