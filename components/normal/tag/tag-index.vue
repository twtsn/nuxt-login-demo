<template>
   <div class="tag-index">
       <el-popover :visible-arrow="false" popper-class	="tag-select-menu"
               placement="bottom"
               width="200"
               trigger="click">
           <div>
               <section class="tag-main">
                   <ul>
                       <li class="tag-menu-item" :class="{'tag-active': activeIndex === index}"
                           @click="onMenuClick(index)"
                           v-for="(item, index) in options"
                           :key="index">
                           <span class="label">{{item.name}}</span>
                           <ul class="tag-submenu" v-show="activeIndex === index">
                               <li v-for="(sItem, sIndex) in item.list" :key="`sub${sIndex}`">
                                   <el-checkbox @change="(v) => {onCheckboxClick(v, sItem)}">{{sItem.name}}</el-checkbox>
                                   <span class="tag-num">{{sItem.num}}</span>
                               </li>
                           </ul>
                       </li>
                   </ul>
               </section>
               <footer>
                   <span>已选 <span v-show="checkedArray.length">({{checkedArray.length}})</span></span>
                   <div>
                       <el-button size="small">取消</el-button><el-button size="small">确定</el-button>
                   </div>
               </footer>
           </div>
           <label  slot="reference">标签</label>
       </el-popover>
   </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: 0,
                checkedArray: [],
            };
        },
        computed:{
            options() {
                return this.$store.state.tagsList;
            }
        },
        methods:{
            onMenuClick(index) {
                this.activeIndex = index;
            },
            onCheckboxClick(v, item) {
                if(v) {
                    this.checkedArray.push(item.id);
                } else {
                    this.checkedArray = this.checkedArray.filter((obj) => {
                        return obj.id !== item.id;
                    });
                }
                this.$emit('onChange', this.checkedArray);
            }
        }
    }
</script>