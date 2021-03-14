<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNav" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="2">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShow"/>
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue';

import { getDetails, getRecommend, Goods, Shop, GoodsParam } from 'network/detail';
import { itemListenerMixin, backTopMixin } from 'common/mixin';
import { debounce } from 'common/utils';

import Scroll from 'components/common/scroll/Scroll.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';

import {mapActions} from 'vuex';
// import Toast from 'components/common/toast/Toast';

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    // Toast,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeY: null,
      currentIndex: 0,
      // message: '',
      // show: false,
    };
  },
  methods: {
    ...mapActions(['addCart']),
    imgLoad() {
      this.$refs.scroll.refresh();

      //等待图片加载完后获取top值
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);

    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      //console.log(position);
      const positionY = Math.abs(position.y);

      let length = this.themeTopYs.length - 1;
      for (let i = 0; i < length; ++i) {
        // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
        //   this.currentIndex = i;
        //   this.$refs.detailNav.currentIndex = this.currentIndex;
        //   // console.log(this.currentIndex);
        // }
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }

      //1、backtop是否显示
      this.listenShowBackTop(position);
    },
    addToCart() {
     //获取商品信息
     const product = {};
     product.image = this.topImages[0];
     product.title = this.goods.title;
     product.desc = this.goods.desc;
     product.price = this.goods.realPrice;
     product.iid = this.iid;

     //将商品添加到购物车
     this.addCart(product).then(res => {
      //  console.log(res);
      //  this.show = true;
      //  this.message = res;
      //  setTimeout(() => {
      //    this.show = false;
      //    this.message = '';
      //  }, 1500);
      this.$toast.show(res, 1500);
     });
    //  this.$store.dispatch('addCart', product).then(res => {
    //    console.log(res);
    //  });
    //  this.$store.commit('addCart', product);
    },
  },
  created() {
    //获取传过来的iid
    this.iid = this.$route.params.iid;

    //根据iid请求详情数据
    getDetails(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      //获取顶部轮播图
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      //创建店铺信息
      this.shop = new Shop(data.shopInfo);
      //保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      //取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      //页面渲染完后获取top信息
      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

      //   console.log(this.themeTopYs);
      // });

    });

    //请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {

  },
  updated() {

  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
}
</script>

<style scoped>
#detail {
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(1005 - 93px);
  overflow: hidden;
}
</style>

