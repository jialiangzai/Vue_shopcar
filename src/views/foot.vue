<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        v-model="isAll"
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ addUp.toFixed(2)  }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ({{ total }})
    </button>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // isAll() {
    //   return this.list.every(ele => ele.goods_state === true);
    // }
    // 修改计算属性
    isAll: {
      set(val) {
        return this.list.forEach((ele) => {
          ele.goods_state = val;
        });
      },
      get() {
        return this.list.every((ele) => ele.goods_state === true);
      },
    },
    total() {
      // 先过滤未选中的good在进行累加 函数返回值是同一个用链式编程
      return this.list
        .filter((obj) => obj.goods_state)
        .reduce((sum1, obj) => (sum1 += obj.goods_count), 0);
    },
    addUp() {
      return this.list
        .filter((obj) => obj.goods_state)
        .reduce((adds, obj) => (adds += obj.goods_count * obj.goods_price), 0);
    },
  },
};
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: -4px;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>