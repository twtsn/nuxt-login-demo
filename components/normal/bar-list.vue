<template>
    <ul class="bar-list">
        <li>
            <span @click="onToggleMenu"><i class="el-icon-tickets"></i>分类</span>
        </li>
        <li>
           <tag-index></tag-index>
        </li>
        <li>
            <color-index></color-index>
        </li>
        <li>
            <score-index></score-index>
        </li>
        <li>
            <el-dropdown trigger="click" @command="onCommandChange">
              <span class="el-dropdown-link">
                {{selectedCollect.name}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="item.value" v-for="(item, index) in collectList" :key="index">
                        {{item.name}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
        <li>
           <el-checkbox>网易自制</el-checkbox>
            <el-input icon="search" class="bar-list-search" :clearable="true">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </li>
    </ul>
</template>
<script>
    import tagIndex from './tag/tag-index';
    import colorIndex from './color/color-index';
    import scoreIndex from './score/score-index';
    export default {
        components: {tagIndex, colorIndex, scoreIndex},
        props:{
            value: Boolean
        },
        data() {
            return {
                queryParams: {
                    collect: ''
                },
                selectedCollect: {name: '', value: ''},
                collectList: [
                    {name: '最多收藏', value: 'more'},
                    {name: '最新收藏', value: 'latest'}
                ]
            };
        },
        created() {
            this.$store.dispatch('queryImgList');
            this.selectedCollect = this.collectList[0];
        },
        methods:{
            onCommandChange(value) {
                let selectedItem = this.collectList.filter((item) => {
                    return item.value === value;
                })[0];
                this.selectedCollect = selectedItem;
            },
            onToggleMenu() {
                this.$emit('input', !this.value);
            }
        }
    }
</script>
<style lang="scss">
    @import "bar-list";
</style>