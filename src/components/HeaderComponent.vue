<template>
  <div class="header">
    <ul class="header__nav">
      <li class="header__nav-element">Каталог</li>
      <li class="header__nav-element">Доставка</li>
      <li class="header__nav-element">Оплата</li>
      <li class="header__nav-element">Контакты</li>
      <li class="header__nav-element">О компании</li>
    </ul>
    <p>{{ value }}</p>
    <div class="header__search">
      <input
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
        type="text"
        placeholder="Поиск по названию картинки"
        class="header__input"
      />
      <button class="header__button">Найти</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'keyForSearch'],
  name: 'HeaderComponent',
  data: function () {
    return {
      value: this.keyForSearch,
    };
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style>
.header {
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #fbfbfb;
  height: 97px;
}
.header__nav {
  list-style-type: none;
  display: flex;
  width: 542px;
  height: 21px;
  padding: 0;
  margin: 37px 162px 38px 448px;
}
.header__nav-element {
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  margin-right: 48px;
}
.header__nav-element:last-child {
  margin: 0;
}
.header__search {
  width: 416px;
  height: 48px;
  margin: 24px 350px 24px 0px;
}
.header__input {
  width: 218px;
  height: 21px;
  border: 1px solid #e1e1e1;
  padding: 13px 60px 14px 16px;
}
.header__button {
  width: 120px;
  height: 48px;
  background-color: #403432;
  color: #ffffff;
}
</style>
