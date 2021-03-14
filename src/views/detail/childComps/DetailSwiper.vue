<template>
  <swiper class="detail-swiper" ref="DeatailSwiper"><!--类名不能是swiper-->
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="" @load="imageLoad">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';
export default {
  name: 'DetailSwiper',
  data() {
    return {
      loadImgCount: 0
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      if (++this.loadImgCount == this.topImages.length) {
        this.loadImgCount -= this.topImages.length;
        this.$refs.DeatailSwiper.handleDom();
        this.$refs.DeatailSwiper.startTimer();
      }
    },
  },
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>


