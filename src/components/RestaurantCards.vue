<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ItemCard from "@/components/ItemCard.vue";
import jsonData from "@/../public/db/partners.json";
import { useRouter } from 'vue-router';

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

const items = ref<Restaurant[]>([]);
const router = useRouter();

const fetchItems = () => {
  items.value = jsonData;
};

onMounted(fetchItems);

const redirect = (productsUrl: string) => {
  if (items.value && items.value.length > 0) {
    const matchedItem = items.value.find(item => item.products === productsUrl);
    if (matchedItem) {
      router.push(`/products/${productsUrl}`)
    }
  }
};
</script>

<template>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
      </label>
    </div>
    <div class="cards cards-restaurants">
    <ItemCard
        v-for="item in items"
        :id="item.id"
        :name="item.name"
        :time_of_delivery="item.time_of_delivery"
        :stars="item.stars"
        :price="item.price"
        :kitchen="item.kitchen"
        :key="item.id"
        :image="require(`@/assets/${item.image}`)"
        :products="item.products"
        @click="redirect(item.products)"
    />
    </div>
  </section>
</template>

<style scoped>
.restaurants {
  min-height: auto;
}

.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cards-restaurants .card {
  transition: transform 0.4s;
}

.section-heading {
  display: flex;
  align-items: center;
  margin-bottom: 44px;
}

.section-title {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin: 0 30px 0 0;
  color: #000000;
}

.search {
  margin-left: auto;
}

.input {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 8px 8px 35px;
  background-repeat: no-repeat;
  background-position: left 11px center;
}

.input-search {
  width: 300px;
  background-image: url('@/assets/img/icon/search.svg');
}

.cards-restaurants .card:hover {
  transform: translateY(-9px);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
