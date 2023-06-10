<script setup lang="ts">
import {ref, defineProps, watch, onMounted, onUnmounted, computed} from 'vue';
import { useStore } from 'vuex';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  counter: number;
}

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});

const store = useStore();

const counter = ref(props.product.counter);

const updateCounter = () => {
  const product = store.state.cart.find((item: Product) => item.id === props.product.id);
  if (product) {
    product.counter = counter.value;
    updateProductPrice(product);
  }
};

const updateProductPrice = (product: Product) => {
  const totalPrice = product.price * product.counter;
  store.dispatch('updateTotalPrice', { productId: product.id, totalPrice });
};

const decrementCounter = () => {
  if (counter.value > 1) {
    counter.value--;
    updateCounter();
  }
};

const incrementCounter = () => {
  counter.value++;
  updateCounter();
};

const removeFromCart = () => {
  store.dispatch('removeFromCart', props.product.id);
};

watch(
    () => props.product.counter,
    (newCounter) => {
      counter.value = newCounter;
      updateCounter();
    }
);

onMounted(() => {
  const initialProductPrice = props.product.price;
  const totalPrice = initialProductPrice * counter.value;
  store.dispatch('updateTotalPrice', { productId: props.product.id, totalPrice });
  console.log(totalPriceForProduct.value)
});

const totalPriceForProduct = computed(() => {
  const product = store.state.cart.find((item: Product) => item.id === props.product.id);
  if (product) {
    const totalPrice = product.price * product.counter;
    return totalPrice;
  }
  return 0;
});

onUnmounted(updateCounter);
</script>


<template>
  <div class="food-row">
    <img class="product-image" :src="props.product.image" alt="Product Image">
    <div class="product-details">
      <span class="food-name">{{ props.product.name }}</span>
      <strong class="food-price">{{ totalPriceForProduct }} ₽</strong>
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
.food-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 15px;
}

.food-name {
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
}

.food-price {
  margin-left: auto;
  margin-right: 47px;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
}

.product-image {
  width: 10vw;
  height: 10vw;
  object-fit: cover;
  margin-right: 1rem;
}

.product-details {
  display: flex;
  align-items: center;
}

.food-name {
  margin-right: 1rem;
}

.food-price {
  font-weight: bold;
}

.food-counter {
  display: flex;
  align-items: center;
}

.counter {
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  margin-right: 10px;
}

.counter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #40a9ff;
  box-sizing: border-box;
  border-radius: 2px;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #40a9ff;
}

.counter-button:hover {
  background: #40a9ff;
  border: 1px solid #ffffff;
  color: #ffffff;
}

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

@media screen and (max-width: 625px) {
  .food-counter {
    position: relative;
    right: 242px;
    margin-top: 160px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
  }
}

@media screen and (max-width: 480px) {
  .food-counter {
    right: 320px;
  }


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