<script setup lang="ts">
import { defineProps, ref } from "vue";
import store from "../store"

const showCartAnimation = ref(false);

const props = defineProps({
  name: String,
  description: String,
  price: Number,
  image: String,
});

const addToCart = () => {
  const product = {
    id: Math.random().toString(),
    name: props.name,
    description: props.description,
    price: props.price,
    image: props.image,
    counter: 1,
    initialProductPrice: props.price,
  };
  store.dispatch('addToCart', product);

  showCartAnimation.value = true;
  setTimeout(() => {
    showCartAnimation.value = false;
  }, 200);
}
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
        <button class="button button-primary button-add-cart" @click="addToCart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <transition name="cart-animation">
          <div v-if="showCartAnimation" class="cart-animation"></div>
        </transition>
        <strong class="card-price-bold">{{ props.price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
</template>

<style scoped>
.cart-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  animation-name: cart-enter;
  animation-duration: 0.2s;
}

@keyframes cart-enter {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 2;
  }
}
.card-buttons {
  display: flex;
  margin-top: 24px;
  flex-grow: 1;
  align-items: flex-end;
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

.card-price-bold {
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  margin-left: 30px;
}

@media (max-width: 768px) {
  .card-price-bold {
    margin-left: 20px;
  }
}
</style>