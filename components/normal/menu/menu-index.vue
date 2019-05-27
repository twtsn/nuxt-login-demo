<template>
    <el-menu default-active="" class="menu-index" :collapse="isCollapse" :collapse-transition="false">
        <el-menu-item index="-1">
            <i class="el-icon-menu"></i>
            <span slot="title">全部</span>
        </el-menu-item>
        <el-submenu :index="index + ''" v-for="(item, index) in data" :key="index">
            <template slot="title">
                <i class="el-icon-location"></i><span slot="title"> {{item.name}} </span>
            </template>
            <el-menu-item :index="`${index}_${subIdx}` " :key="`${index}_${subIdx}`"v-for="(subItem, subIdx) in item.list">
                {{subItem.name}}
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
    export default {
        props:{
            isCollapse: Boolean,
            data:{type: Array, default() {return []}}
        },
        data(){
            return {
            }
        }
    }
</script>