<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const counter = ref(1);
const store = useStore();

const decrementCounter = () => {
  const product = store.state.cart.find((item: any) => item.name === props.product.name);
  const initialProductPrice = props.product.price;

  if (counter.value > 1) {
    counter.value--;
    product.price = initialProductPrice / (counter.value + 1) * counter.value; // Update the price based on the initial product price and the counter
  }
};

const incrementCounter = () => {
  counter.value++;
  const product = store.state.cart.find((item: any) => item.name === props.product.name);
  const initialProductPrice = props.product.price;

  if (product) {
    product.price = initialProductPrice / (counter.value - 1) * counter.value; // Update the price based on the initial product price and the counter
  }
};

const removeFromCart = () => {
  store.commit('removeFromCart', props.product.id);
};

</script>

<template>
  <div class="food-row">
    <img class="product-image" :src="props.product.image" alt="Product Image">
    <div class="product-details">
      <span class="food-name">{{ props.product.name }}</span>
      <strong class="food-price">{{ store.getters.getProductPrice(props.product.id) }} ₽</strong>
    </div>
    <div class="food-counter">
      <button class="counter-button" @click.stop.prevent="decrementCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="counter-button" @click.stop.prevent="incrementCounter">+</button>
      <button class="remove-button button" @click="removeFromCart">Remove</button>
    </div>
  </div>
</template>

<style scoped>
/* styles for the food cart component */

.product-image {
  width: 10vw; /* Responsive width based on viewport */
  height: 10vw; /* Responsive height based on viewport */
  object-fit: cover;
  margin-right: 1rem; /* Responsive margin */
}

.product-details {
  display: flex;
  align-items: center;
}

.food-name {
  margin-right: 1rem; /* Responsive margin */
}

.food-price {
  font-weight: bold;
}

.food-counter {
  display: flex;
  align-items: center;
}

.counter-button {
  margin: 0 0.5rem; /* Responsive margin */
}

.remove-button {
  margin-left: 1rem; /* Responsive margin */
  background: red;
  border: none;
  border-radius: 4px;
  color: white;
}

/* Responsive styles for different screen sizes */
@media screen and (max-width: 768px) {
  .product-image {
    width: 20vw;
    height: 20vw;
  }

  .food-name {
    margin-right: 0.5rem;
  }

  .counter-button {
    margin: 0 0.25rem;
  }

  .remove-button {
    margin-left: 0.5rem;
  }
}

@media screen and (max-width: 480px) {
  .product-image {
    width: 30vw;
    height: 30vw;
  }

  .food-name {
    margin-right: 0.25rem;
  }

  .counter-button {
    margin: 0 0.1rem;
  }

  .remove-button {
    margin-left: 0.25rem;
  }
}
</style>