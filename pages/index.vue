<template>
  <el-container class="pages-index">
    <el-header>
      <header-index></header-index>
    </el-header>
    <section class="tool-bars">
      <bar-list v-model="isCollapse"></bar-list>
    </section>
    <el-container>
      <el-aside :width="isCollapse ? 'auto' : '200px'">
        <menu-index :data="categoryList" :isCollapse="isCollapse"></menu-index>
      </el-aside>
      <el-main>
        <main-index :init-data="initData"></main-index>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import headerIndex from '../components/normal/header/header-index';
import barList from '../components/normal/bar-list';
import menuIndex from '../components/normal/menu/menu-index';
import mainIndex from '../components/normal/main/main-index';
import API from '../api'
export default {
  components: {
      headerIndex, barList, menuIndex, mainIndex
  },
  computed:{
      categoryList(){
          return this.$store.state.categoryList;
      }
  },
  data(){
      return {
          isCollapse: false
      }
  },
  async asyncData ({$axios, store}) {
      await store.dispatch('queryCategoryList');
      let {data} = await $axios.get(API.get_img_list_url);
      return {
          initData: data.result
      }
  },
  methods:{
  }
}
</script>
<style lang="scss">
    @import "assets/css/pages-index";
</style>
