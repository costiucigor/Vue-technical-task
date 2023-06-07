<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <NavBar />
<router-view />
  <FooterComponent />
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  padding-top: 44px;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

body {
}

a,
button {
  cursor: pointer;
  color: inherit;
}

.hide {
  display: none;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
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

.address {
  flex: 0.8;
}

.input-address {
  width: 100%;
  background-image: url('@/assets/img/icon/home.svg');
}

.search {
  margin-left: auto;
}

.input-search {
  width: 300px;
  background-image: url('@/assets/img/icon/search.svg');

}

.buttons {
  display: flex;
  align-items: center;
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

.button:hover {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
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

.button-icon {
  margin-right: 6px;
}

.button-auth {
  background-position: 20px 13px;
}

.button-primary .button-auth-svg {
  width: 24px;
  height: 24px;
  background-color: #fff;
  -webkit-mask: url("@/assets/img/icon/user.svg") no-repeat 50% 50%;
  mask: url("@/assets/img/icon/user.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary:hover .button-auth-svg {
  background-color: #595959;
}

.card {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 30px;
  flex-basis: 31%;
  text-decoration: none;
}

.button-out {
  display: none;
  margin: 0 5px;
}

.user-name {
  display: none;
  margin-right: 20px;
  font-weight: bold;
  font-size: 18px;
}

.kebab {
  background: #D6E4FF url("@/assets/img/promo/kebab.png") no-repeat top 45px right 40px / 450px;
}

.vegetables {
  background: #FFF566 url("@/assets/img/promo/vegetables.png") no-repeat top 0 right 0 / 825px
}

.sushi {
  background: #FFF1F0 url("@/assets/img/promo/sushi.png") no-repeat top 10px right 15px / 500px
}

.main {
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 1.04%, #f5f5f5 100%);
}

.rating {
  background-image: url("@/assets/img/icon/rating.svg");
  background-repeat: no-repeat;
  background-position: 0 7px;
  padding-left: 20px;
  margin-right: 26px;
  color: #ffc107;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
}

.price,
.category {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 32px;
}

.price {
  margin-right: 10px;
}

.category {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;
}

.price:after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #8c8c8c;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  margin-left: 10px;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  z-index: 999;
}

.modal-auth {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  z-index: 999;
}

.is-open {
  display: flex;
}

.modal-dialog {
  max-width: 780px;
  width: 95%;
  background: #ffffff;
  border-radius: 5px;
  margin: auto;
  padding: 40px 45px;
}

.modal-dialog-auth {
  width: auto;
  position: relative;
}

.label-auth {
  display: block;
  margin: 30px;
}

.label-auth span {
  width: 80px;
  display: inline-block;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
}

.modal-title {
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
}

.close {
  font-size: 36px;
  border: none;
  background-color: transparent;
}

.close-auth {
  font-size: 36px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 20px;
}

.modal-body {
  margin-bottom: 22px;
}

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

.food-counter {
  display: flex;
  align-items: center;
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

.counter {
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  margin-right: 10px;
}

.modal-pricetag {
  background: #262626;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px 20px;
  font-size: 20px;
  line-height: 23px;
}

@media (max-width: 1366px) {
  .container {
    max-width: 960px;
  }


  .kebab {
    background-position: top -5px right -93px;
    background-size: 530px;
  }

  .vegetables {
    background-position: top 0 right -93px;
    background-size: 820px;
  }

  .sushi {
    background-position: center right -90px;
  }

  .rating {
    margin-right: 15px;
  }

  .category,
  .price {
    font-size: 14px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 750px;
  }

  .kebab {
    background-position: top 55px right -100px;
    background-size: 385px;
  }

  .vegetables {
    background-position: top 0 right -280px;
    background-size: 810px;
  }

  .sushi {
    background-position: top 30px right -175px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 560px;
  }

  .kebab {
    background-position: top -5px right -74px;
    background-size: 300px;
  }

  .vegetables {
    background-position: top 0 right -240px;
    background-size: 702px;
  }

  .sushi {
    background-position: top -24px right -75px;
    background-size: 302px;
  }
}

@media (max-width: 578px) {
  .container {
    width: 90%;
  }

  .address {
    min-width: 100%;
    order: 1;
  }

  .header {
    flex-wrap: wrap;
  }

  .input-address {
    margin-top: 15px;
    order: 5;
    flex: 1;
  }

  .section-title {
    font-size: 20px;
  }

}

@media (max-width: 480px) {
  .button-text {
    display: none;
  }

  .button-icon {
    margin: 0;
  }

  .user-name {
    margin: 10px;

  }

  .buttons {
    flex-wrap: wrap;
    margin-left: auto;
  }

  .button {
    min-height: 40px;
    padding: 5px 12px;

  }

  .button-out-svg {
    width: 24px;
    height: 24px;
    background-color: #fff;
    -webkit-mask: url("@/assets/img/icon/logout.svg") no-repeat 50% 50%;
    mask: url("@/assets/img/icon/logout.svg") no-repeat 50% 50%;
    background-repeat: no-repeat;
    -webkit-mask-size: 20px;
    mask-size: 20px;
  }

  .section-heading {
    flex-wrap: wrap;
  }
}

</style>
