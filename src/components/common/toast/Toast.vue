<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  components: {
    
  },  
  props: {
    message: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    show(message="默认文字", duration=1000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration);
    },
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 99;
}
</style>




