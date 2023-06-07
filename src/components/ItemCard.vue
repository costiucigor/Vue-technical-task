<script setup lang="ts">
import {defineProps, getCurrentInstance} from "vue";

const props = defineProps({
  id: String,
  name: String,
  time_of_delivery: [Number, undefined],
  stars: Number,
  kitchen: String,
  price: [Number, undefined],
  image: String,
  products: String,
});

const instance = getCurrentInstance()

const handleClick = () => {
  instance?.emit('card-clicked', props.products);
};
</script>

<template>
  <div class="card" @click="handleClick">
    <img :src="props.image" :alt="props.name" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ props.name }}</h3>
        <span class="card-tag tag">{{ props.time_of_delivery }}</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ props.stars }}</div>
        <div class="price">От {{ props.price }} ₽</div>
        <div class="category">{{ props.kitchen }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-tag {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  background: #262626;
  border-radius: 2px;
  padding: 1px 8px;
}

.card-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.card-text {
  padding: 20px 23px 35px;
  min-height: 275px;
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-title {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
}

@media (max-width: 992px) {
  .card {
    flex-basis: 49%;
  }
}

@media (max-width: 768px) {
  .card-info {
    flex-wrap: wrap;
  }

  .card .rating {
    flex-basis: 100%;
  }

  .card-title {
    font-size: 18px;
  }

  .card-text {
    min-height: 290px;
  }
}

@media (max-width: 578px) {
  .card {
    flex-basis: 100%;
  }

  .card-text {
    min-height: auto;
  }

  .card-image {
    width: 100%;
  }
}
</style>