// 公共的混合
import {
  debounce
} from './utils'
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    };
  },

  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      newRefresh();
    };
    this.$bus.$on('itemImageLoad', this.itemImgListener);
  },
};


import BackTop from 'components/content/backTop/BackTop';
import {BACK_POSITION} from 'common/const';
export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 800);
    },
    listenShowBackTop(position) {
      this.isShow = Math.abs(position.y) > BACK_POSITION;
    },
  },
};


import {POP, NEW, SELL} from "./const";
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    }
  }
};
