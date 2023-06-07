<script setup lang="ts">
import { defineProps } from "vue";


const props = defineProps({
  name: String,
  description: String,
  price: Number,
  image: String,
});
</script>

<template>
  <div class="card">
    <img :src="props.image" :alt="props.name" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ props.name }}</h3>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">{{ props.description }}</div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <button class="button button-primary button-add-cart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ props.price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
</template>

<style scoped>
.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}


.card-text {
  padding: 20px 23px 35px;
  display: flex;
  flex-direction: column;
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

.card-title-reg {
  font-weight: 400;
}

.card-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.ingredients {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 21px;
}

.card-buttons {
  display: flex;
  margin-top: 24px;
  flex-grow: 1;
  align-items: flex-end;
}

.button-card-text {
  margin-right: 10px;
}

.button .button-cart-svg {
  width: 24px;
  height: 24px;
  background-color: #595959;
  -webkit-mask: url("@/assets/img/icon/shopping-cart.svg") no-repeat 50% 50%;
  mask: url("@/assets/img/icon/shopping-cart.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary .button-cart-svg {
  background-color: #fff;
}

.button:hover .button-cart-svg {
  background-color: #fff;
}

.button-primary:hover .button-cart-svg {
  background-color: #595959;
}

@media (max-width: 578px) {
  .card-image {
    width: 100%;
  }
}
</style>