<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          v-model="goodsObject.goods_state"
          type="checkbox"
          class="custom-control-input"
          :id="goodsObject.id"
        />
        <label class="custom-control-label" :for="goodsObject.id">
          <img :src="goodsObject.goods_img" alt="" />
        </label>
      </div>
    </div>

    <div class="right">
      <div class="top">{{ goodsObject.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ goodsObject.goods_price }}</span>
        <span><Count :goodsObject="goodsObject" /></span>
      </div>
    </div>
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
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-input {
      margin-right: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>