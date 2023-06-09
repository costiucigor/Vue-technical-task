<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from "vue";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();

const toggleCart = () => {
  store.dispatch('toggleCart');
};

const redirectToHome = () => {
  router.push("/");
}

const toggleModal = () => {
  store.dispatch('loginModal/toggleModal');
}

const cartItems = computed(() => store.state.cart);
</script>

<template>
  <div class="container">
    <header class="header">
      <a class="logo" @click="redirectToHome">
        <img src="@/assets/img/icon/logo.svg" alt="Logo" />
      </a>
      <label class="address">
        <input type="text" class="input input-address" placeholder="Адрес доставки" />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button class="button button-primary button-auth" @click="toggleModal">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button class="button button-cart" id="cart-button" @click="toggleCart">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
          <span class="cart-info">{{ cartItems.length }}</span>
        </button>
      </div>
    </header>
  </div>
</template>


<style scoped>
.address {
  flex: 0.8;
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

.input-address {
  width: 100%;
  background-image: url("@/assets/img/icon/home.svg");
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.cart-info {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: #ff0000;
  color: #ffffff;
  font-size: 12px;
  border-radius: 50%;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;
}

.buttons {
  display: flex;
  align-items: center;
}

.button-primary {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
  margin-right: 10px;
}

.button-primary:hover {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  color: #595959;
}

.button-auth {
  background-position: 20px 13px;
}

.button-primary .button-auth-svg {
  width: 24px;
  height: 24px;
  background-color: #fff;
  webkit-mask: url("@/assets/img/icon/user.svg") no-repeat 50% 50%;
  mask: url("@/assets/img/icon/user.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary:hover .button-auth-svg {
  background-color: #595959;
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

.user-name {
  display: none;
  margin-right: 20px;
  font-weight: bold;
  font-size: 18px;
}

@media (max-width: 1366px) {
  .container {
    max-width: 960px;
  }
}
</style>

