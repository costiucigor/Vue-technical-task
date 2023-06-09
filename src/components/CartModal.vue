<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import CartItems from "@/components/CartItems.vue";

const store = useStore();

const cartItems = computed(() => store.state.cart);
const totalPrice = computed(() => {
  return cartItems.value.reduce((total: any, product: any) => total + product.price * product.counter, 0);
});

const closeModal = () => {
  store.dispatch('toggleCart');
};
</script>

<template>
  <div class="cart-modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="closeModal">&times;</button>
      </div>
      <div class="modal-content" v-if="cartItems.length > 0">
        <div v-for="product in cartItems" :key="product.id">
          <CartItems :product="product" />
        </div>
      </div>
      <div v-else>
        <span class="modal-message">Нет товаров :(</span>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ totalPrice }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart" @click="closeModal">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-message {
  padding-top: 60px;
  padding-bottom: 60px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 10px;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.modal-pricetag {
  font-weight: bold;
}

.footer-buttons {
  display: flex;
}
</style>