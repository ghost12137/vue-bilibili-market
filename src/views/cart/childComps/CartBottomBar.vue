<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-botton" :is-checked="isSelectAll" @click.native="btnSelectAll" />
      <span>全选</span>
    </div>

    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue"
import {mapGetters} from  'vuex';

export default 
{
  components: { CheckButton },
  name: 'CartBottomBar',
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return "￥ "+this.cartList.filter(item => {
        return item.checked;
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2);
    },
    checkedLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      //return !(this.cartList.filter(item => !item.checked).length);
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(item => !item.checked);
    },
  },
  methods: {
    btnSelectAll() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false);
      } else {
        this.cartList.forEach(item => item.checked = true);
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show('请选择添加的商品', 1500);
      }
    },
  },
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  width: 100%;
  background-color: #eee;
  position: fixed;
  line-height: 40px;
  display: flex;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-botton {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 30px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: #f00;
  color: #fff;
  text-align: center;
}
</style>
