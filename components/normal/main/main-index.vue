<template>
   <div class="main-index">
       <waterfall :init-data="initData" @onImgClick="onImgClick"></waterfall>
       <div class="img-preview" v-show="visiable">
           <el-carousel trigger="click" :initial-index="index" arrow="always" :autoplay="false" indicator-position="none">
               <el-carousel-item v-for="(item, index) in imgList" :key="index">
                   <div class="img-box">
                      <div class="ib-body">
                          <img :src="item.url">
                          <i class="el-icon-error ib-close" @click="visiable = false"></i>
                      </div>
                   </div>
               </el-carousel-item>
           </el-carousel>
       </div>
       <div class="img-info" v-show="visiable">
           <h3 class="ii-title">抽象风格背景图</h3>
           <p class="ii-id">图片ID：67679</p>
           <p class="ii-btns">
               <el-button type="primary">收藏</el-button><el-button type="default">不喜欢</el-button>
           </p>
           <div class="ii-baseinfo">
               <ul>
                   <li>颜色：</li>
                   <li>评分：</li>
                   <li>收藏量：</li>
                   <li>创建时间：</li>
                   <li>注释：</li>
                   <li>标签：</li>
               </ul>
           </div>
       </div>
   </div>
</template>
<script>
    import waterfall from './waterfall'
    export default{
        props:{
            initData: {
                type: Array, default(){return [];}
            }
        },
        data(){
            return {
                visiable: false,
                index: 0,
                imgList: []
            }
        },
        components: {waterfall},
        methods:{
            onImgClick({dataList, index}) {
                this.imgList = dataList;
                this.index = index;
                this.visiable = true;
            }
        }
    }
</script>
<style lang="scss">
    @import "main-index";
</style>