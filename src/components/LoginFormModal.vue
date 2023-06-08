<script setup lang="ts">
import {computed} from "vue";
import store from "@/store";
const showModal = computed(() => {
  return store.state.loginModal.showModal;
});

const closeModal = () => {
  store.dispatch("loginModal/toggleModal");
};
</script>

<template>
  <div class="modal-auth" v-if="showModal">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="closeModal">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text">
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password">
          </label>
        </fieldset>
        <!-- /.modal-body -->
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login" type="submit">Войти</button>
          </div>
        </div>
      </form>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<style scoped>
.modal-auth {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-dialog {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
}

.close-auth {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #999;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.modal-body {
  margin-bottom: 20px;
}

.modal-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.label-auth {
  display: block;
  margin-bottom: 10px;
}

.label-auth span {
  font-weight: bold;
}

#login,
#password {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.footer-buttons {
  margin-top: 10px;
}

.button-login {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-login:hover {
  background-color: #0056b3;
}
</style>