<template>
  <div :style="{ color: color, backgroundColor: bg }" class="my-header">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      // 必须要传递
      require: true,
    },
    color: {
      type: String,
      default: "red",
    },
    bg: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>