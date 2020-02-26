<template>
<div>
<el-row type="flex" align="middle">
    <el-col span="2" style="background-color:white">
        <div class="nav-brand">
        <h2 >cdbc</h2>
        </div>
    </el-col>
    <el-col  span="16" >
        <div class="nav-menu">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#FFFFFF"
                    text-color="#C0C4CC"
                    active-text-color="#000000">

                <el-menu-item index="1">工作区</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">资源</template>
                    <el-menu-item index="2-1">标准规范</el-menu-item>
                    <el-menu-item index="2-2">数据手册</el-menu-item>
                    <el-menu-item index="2-3">CemCADE</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" >文档</el-menu-item>
<!--                <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>-->
            </el-menu>
        </div>

    </el-col>
    <el-col  span="6" style="background-color:white">
        <div class="nav-function" >
            <span><i class="el-icon-user-solid" ></i></span>
            <el-divider direction="vertical"></el-divider>
            <span>Username</span>
            <el-divider direction="vertical"></el-divider>
            <span>Message</span>
         </div>
    </el-col>
</el-row>
</div>
</template>

<script>
    export default {
        name: "TopNav",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>