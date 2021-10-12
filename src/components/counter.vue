<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      :disabled="goodsObject.goods_count === 1"
      @click="goodsObject.goods_count--"
    >
      -
    </button>
    <input
      type="number"
      v-model="goodsObject.goods_count"
      class="form-control inp"
    />
    <button
      type="button"
      class="btn btn-light"
      :disabled="goodsObject.goods_count === 9"
      @click="goodsObject.goods_count++"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    goodsObject: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>