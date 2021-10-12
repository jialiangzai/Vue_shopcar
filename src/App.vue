<template>
  <div id="app">
    <Head title="购物车" color="#fff" bg="orange" />
    <!-- <Head title="购物车2" color="red" bg="black" /> -->
    <Good  v-for="item in list" :key="item.id" :goodsObject="item" />
    <Foot :list="list"/>
  </div>
</template>

<script>
import Head from "./views/head.vue";
import Good from "./views/good.vue";
import Foot from "./views/foot.vue";

import axios from 'axios'

export default {
    created () {
    this.getList();
  },
data() {
  return {
    list: []
  }
},
  methods: {
    async getList (){
      const {data:{list}} = await axios({
        url:'/api/cart'
      })
      console.log(list);
      this.list=list
    }
    //    async getList (){
    //   const {data} = await axios({
    //     url:'/api/cart'
    //   })
    //   console.log(data);
    //   // this.list=list
    // }
  },
  components: {
    name: 'App',
    Head,
    Good,
    Foot,
  },
};
</script>

<style lang="css">
#app {
  /* 避开遮盖 */
  padding: 45px 0 50px 0;
}
</style>