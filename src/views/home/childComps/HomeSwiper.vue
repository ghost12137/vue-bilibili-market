<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item) in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper, 
    SwiperItem
  },
  methods: {
    imageLoad() {
      // console.log("-------");
    },
  },
}
</script>

<style scoped>

</style>