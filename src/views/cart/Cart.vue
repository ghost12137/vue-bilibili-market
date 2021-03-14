<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list />

    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import {mapGetters} from 'vuex';
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar';

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList, 
    CartBottomBar,
  },
  computed: {
    /* cartLength() {
      return this.$store.getters.cartLength;
    }, */
    ...mapGetters(["cartLength"])
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>