<template>
    <div class="color-index">
        <el-popover :visible-arrow="false" popper-class	="color-list"
                    placement="bottom"
                    width="200"
                    trigger="click">
            <div>
                <span class="color-item" v-for="(item, index) in colorArray" :key="index" :style="{backgroundColor: item}"></span>
            </div>
            <label  slot="reference">颜色</label>
        </el-popover>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                colorArray: ['#000', '#000', '#000', '#000', '#000', '#000'],
            };
        },
        methods:{
        }
    }
</script>