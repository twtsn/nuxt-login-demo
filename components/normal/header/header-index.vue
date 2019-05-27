<template>
    <ul class="pi-header">
        <li class="pi-name">Dubhen Plan</li>
        <li class="pi-menu">资料库</li>
        <li class="pi-right">
            <span class="pi-toggle-color">切换模式</span>
            <el-dropdown>
                <span class="login-photo"></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
    </ul>
</template>
<script>
    export default {

    }
</script>