<template>
  <div class="page">
    <HeaderComponent
      v-model="keySearch"
      :keyForSearch="keySearch"
      :items="resultQuery"
    />
    <CardList :items="resultQuery" />
    <FooterComponent />
  </div>
</template>

<script>
import { items } from '@/utils/items';
import CardList from './CardList.vue';
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
export default {
  name: 'LayoutComponent',
  data: function () {
    return { items: items, itemsShow: items, keySearch: '' };
  },
  computed: {
    resultQuery() {
      if (this.keySearch) {
        return this.items.filter((item) => {
          return this.keySearch
            .toLowerCase()
            .split(' ')
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.items;
      }
    },
  },
  components: {
    HeaderComponent,
    CardList,
    FooterComponent,
  },
};
</script>

<style>
.page {
  width: 1920px;
  height: 960px;
  display: flex;
  flex-direction: column;
}
</style>
