<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import ObserveDOM from '@better-scroll/observe-dom';
import MouseWheel from '@better-scroll/mouse-wheel';
import ObserveImage from '@better-scroll/observe-image';
BScroll.use(MouseWheel);
BScroll.use(ObserveDOM);
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    //1、创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      mouseWheel: true,
      observeDOM: true, // 开启 observe-dom 插件
      // scrollX: false,
      // scrollY: true,
      pullUpLoad: this.pullUpLoad,
      observeImage: true // 开启 observe-image 插件
    });
    //2、监听滚动位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position);
    });
    if (this.pullUpLoad) {
      //3、监听上拉事件
      this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp');
    });
    }

    this.scroll.refresh();
  },
  methods: {
    scrollTo(x, y, time=500) {
      this.scroll && this.scroll.scrollTo(x,y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log('-----------');
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
}
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
