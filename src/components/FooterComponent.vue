<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <img src="@/assets/img/icon/logo.svg" alt="logo" class="logo footer-logo" />
        <nav class="footer-nav">
          <a href="#" class="footer-link">Ресторанам </a>
          <a href="#" class="footer-link">Курьерам</a>
          <a href="#" class="footer-link">Пресс-центр</a>
          <a href="#" class="footer-link">Контакты</a>
        </nav>
        <div class="social-links">
          <a href="#" class="social-link"><img src="@/assets/img/social/instagram.svg" alt="instagram" /></a>
          <a href="#" class="social-link"><img src="@/assets/img/social/fb.svg" alt="facebook" /></a>
          <a href="#" class="social-link"><img src="@/assets/img/social/vk.svg" alt="vk" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0;
}

.footer-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-nav {
  margin-left: 35px;
  margin-right: auto;
}

.footer-link {
  display: inline-block;
  color: #595959;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
}

.footer-link:not(:last-child) {
  margin-right: 15px;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-link:not(:last-child) {
  margin-right: 21px;
}

@media (max-width: 768px) {
  .footer {
    padding: 30px 0;
  }

  .footer-block {
    align-items: flex-start;
  }

  .footer-nav {
    margin-left: 0;
    margin-right: 0;
    order: 0;
    display: flex;
    flex-direction: column;
  }

  .footer-logo {
    margin-right: 15px;
    order: 1;
  }
}

@media (max-width: 578px) {
  .footer-link {
    font-size: 16px;
  }

  .social-links {
    order: 2;
  }
}

@media (max-width: 480px) {
  .footer-block {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  .footer-logo {
    order: 0;
    margin-bottom: 20px;
  }

  .footer-nav {
    margin-bottom: 20px;
    text-align: center;
  }

  .footer-link:not(:last-child) {
    margin-right: 0;
  }
}
</style>