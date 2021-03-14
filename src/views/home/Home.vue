<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isTapFixed"
      />
    <scroll 
      class="wrapper" 
      ref="scroll" 
      :probe-type="2" 
      @scroll="contentScroll" 
      @pullingUp="loadMore"
      :pull-up-load="true"
      >
      <home-swiper :banners="banners" />

      <!-- <swiper>
        <swiper-item v-for="item in banners" :key="item.index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad"/>
          </a>
        </swiper-item>
      </swiper> -->

      <home-recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
import { Swiper, SwiperItem } from 'components/common/swiper';

import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommendView';
import FeatureView from './childComps/FeatureView';

import { itemListenerMixin, backTopMixin } from 'common/mixin';

import {
  getHomeMultidata,
  getHomeGoods
} from 'network/home';
import {debounce} from 'common/utils';

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isSwiperLoad: false,
      isTapFixed: false,
      saveY: 0,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    NavBar,
    TabControl,
    Scroll,
    Swiper, 
    SwiperItem,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    GoodsList,

  },
  methods: {
    /**
     * 事件监听的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      //1、backtop是否显示
      this.listenShowBackTop(position);
      
      //2. 决定tabControl是否吸顶
      this.isTapFixed = (Math.abs(position.y)) > this.tabOffsetTop;
    },
    loadMore() {
      // console.log('上拉下载gengd');
      this.getHomeGoods(this.currentType);
    },
    imageLoad() {
      if (!this.isSwiperLoad) {

        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        this.isSwiperLoad = true;
      }
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;

        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
        // setTimeout(() => {
        //   this.$refs.scroll.finishPullUp();
        // }, 1000);
      });
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0 , this.saveY, 0);
    this.$refs.scroll.refresh();
    // console.log('activated');
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log('deactivated');
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  created() {
    //请求多个数据 x
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  mounted() {
    //1、监听item中图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 500);
    // this.$bus.$on('itemImageLoad', () => {
    //   refresh();
    // });
    //2、offset赋值
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    
  },

}
</script>

<style scoped>
#home {
  /* padding-top: 44 px; */
  height: 100vh;
  /* padding-bottom: 600px; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: -webkit-sticky;
  position: sticky;
  top: 43px;
  background-color: white;
  z-index: 9;
}
.wrapper {
  height: calc(1005 - 93px);
  overflow: hidden;
  margin-top: 44px;
}
/* .warpper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
} */
</style>