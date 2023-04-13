<template>
  <div class="footer">
    <ul class="footer__nav">
      <li class="footer__nav-element">Каталог</li>
      <li class="footer__nav-element">Доставка</li>
      <li class="footer__nav-element">Оплата</li>
      <li class="footer__nav-element">Контакты</li>
      <li class="footer__nav-element">О компании</li>
    </ul>
    <div class="footer__phone">
      <img class="footer__phone-icon" src="../assets/phone-icon.svg" />
      <p class="footer__phone-symbols">+7 (812) 555-55-55</p>
    </div>
    <div class="footer__location">
      <img class="footer__location-icon" src="../assets/adres-icon.svg" />
      <p class="footer__location-symbols">г. Санкт-Петербург, ул. Ефимова, 3</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style>
.footer {
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #f4f4f4;
  height: 97px;
}
.footer__nav {
  width: 555px;
  list-style-type: none;
  display: flex;
  margin: 38px 127px 37px 448px;
  padding: 0;
}
.footer__nav-element {
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  margin-right: 48px;
}
.footer__nav-element:last-child {
  margin-right: 0;
}
.footer__phone {
  display: flex;
  width: 160px;
  height: 21px;
  align-items: center;
  margin: 37px 54px 38px 0;
}
.footer__phone-icon {
  width: 14px;
  height: 14px;
  margin: 0 9px 0 0;
}
.footer__phone-symbols {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}
.footer__location {
  display: flex;
  width: 285px;
  height: 21px;
  align-items: center;
  margin: 38px 305px 37px 0;
}
.footer__location-icon {
  width: 11px;
  height: 14px;
  margin: 0 11px 0 0;
}
.footer__location-symbols {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}
</style>
