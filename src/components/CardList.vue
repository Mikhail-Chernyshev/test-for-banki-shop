<template>
  <div class="main">
    <h1 class="main__title">Картины эпохи Возрождения</h1>
    <div class="main__card-list">
      <div class="main__card" v-for="item in items" :key="item.id">
        <div v-if="item.status === 'sale'" class="main__card_opacity">
          <img :src="item.image" class="main__card-image" />
          <h2 class="main__card-title">{{ item.name }}</h2>
          <div class="main__price">
            <p class="main__sold">Продана на аукционе</p>
          </div>
        </div>
        <div v-else class="main__card">
          <img :src="item.image" class="main__card-image" />
          <h2 class="main__card-title">{{ item.name }}</h2>
          <div v-if="item.oldPrice === 0" class="main__price">
            <p class="main__price-cost">{{ item.price }} $</p>
            <div v-if="item.onBasket === false">
              <button
                @click="item.onBasket = !item.onBasket"
                class="main__button-buy"
              >
                Купить
              </button>
            </div>
            <div v-else>
              <button class="main__button-buy">В корзине</button>
            </div>
          </div>
          <div v-else-if="item.oldPrice > 0" class="main__price">
            <div class="main__price-wrapper">
              <p class="main__price-old">{{ item.oldPrice }} $</p>
              <p class="main__price-new">{{ item.price }} $</p>
            </div>
            <div v-if="item.onBasket === false">
              <button
                @click="item.onBasket = !item.onBasket"
                class="main__button-buy"
              >
                Купить
              </button>
            </div>
            <div v-else>
              <button class="main__button-buy">В корзине</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  name: 'CardList',
  data() {
    return {
      isBuy: false,
      showPopup: false,
    };
  },
};
</script>

<style>
.main {
  width: 1216px;
  height: auto;
  margin: 0 auto;
}
.main__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  margin: 45px 0 39px 0;
}
.main__card-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 320px 0;
}
.main__card {
  width: 280px;
  height: 328px;
  border: 1px solid #e1e1e1;
}
.main__card_opacity {
  opacity: 0.4;
}
.main__card-title {
  width: 220px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: left;
  margin: 20px 36px 23px 24px;
}
.main__price {
  display: flex;
  margin: 0 24px 24px 24px;
  align-items: center;
}
.main__price-wrapper {
  margin: 0 21px 0 0;
}
.main__price-old {
  margin: 0;
}
.main__price-new {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.main__price-cost {
  margin: 0 25px 0 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.main__button-buy {
  width: 120px;
  height: 48px;
  background-color: #403432;
  color: #ffffff;
}

.main__price-wrapper {
  display: flex;
  flex-direction: column;
}
.main__price-old {
  color: #a0a0a0;
  text-decoration: line-through;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
}
.main__sold {
  color: #343030;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
</style>
