<template>
        <div class="login-box">
            <div class="logo">
                <img width="144px" height="144px" alt="Petrochina & Schlumberger logo" src="../assets/logo_petrochina.jpg">
                <img width="144px" height="auto" alt="Petrochina & Schlumberger logo" src="../assets/logo_schlumberger.jpg">
                </img>

                <h1 class="h3 mb-3 font-weight-normal">固井数据管理协作系统</h1>
                <h5>Cementing DataBase & Cooperation</h5>
                <h5 class="text-center text-muted">cdbc &copy; 中国石油塔里木油田公司</h5>
            </div>
              <div>
                <el-form  size="medium" ref="loginForm" :model="form" :rules="rules" label-width="80px" >
                    <h2 class="login-title">欢迎登录</h2>
                    <el-form-item size="medium"  label="账号" prop="username" >
                        <el-input  type="text" placeholder="请输入账号" v-model="form.username"/>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
                    </el-form-item>
                </el-form>
                  <el-checkbox v-model="form.rememberMe">记住我</el-checkbox>
                  <el-button  size="medium" type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
                <br><br><br>
            </div>
        </div>
</template>

<script>

    export default {
        name: "FormLogin",
        data() {
            return {
                src:'../assets/p_s.jpg',
                form: {
                    username: '',
                    password: '',
                    rememberMe: false
                },
                // 表单验证，需要在 el-form-item 元素中增加 prop 属性
                rules: {
                    username: [
                        {required: true, message: '账号不可为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不可为空', trigger: 'blur'}
                    ]
                },
            }
        },
        methods: {
            onSubmit(formName) {
                // 为表单绑定验证功能
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                        // this.$router.push("/main");
                        console.log(this.Qs.stringify({
                            username: this.form.username,
                            password: this.form.password,
                            rememberMe: this.form.rememberMe
                        }));
                        this.$http.post('/dologin', this.Qs.stringify({
                                username: this.form.username,
                                password: this.form.password,
                                rememberMe: this.form.rememberMe
                            }),

                            {
                                header:{
                                    'Content-Type': 'multipart/form-data'
                                }
                            })
                            .then( response=> {
                                this.$store.commit("setPrinciple",response.data);
                                console.log(response.data);
                                console.log(response.status);
                                console.log(response.statusText);
                                this.$router.push("/main");;
                            })
                            .catch( error=> {
                                if (error.response) {
                                    // The request was made and the server responded with a status code
                                    // that falls out of the range of 2xx
                                    // console.log("error.response");
                                    console.log(error.response.data);
                                    console.log(error.response.status);
                                    console.log(error.response.statusText);
                                    const msg=`服务器返回信息：${error.response.status},${error.response.data.statusText}`;
                                    this.$alert(msg, '登录错误', {
                                        confirmButtonText: '确定'});
                                    // console.log(self.resp);
                                    // console.log(error.response.headers);
                                } else if (error.request) {
                                    console.log(error.request);
                                    this.$alert(error.message, '登录错误', {
                                        confirmButtonText: '确定'});
                                }else {
                                    // The request was made but no response was received
                                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                                    // http.ClientRequest in node.js
                                    // console.log("error.request");
                                    // console.log(error.request);
                                    console.log("error.message");
                                    this.$alert(error.message, '登录错误', {
                                        confirmButtonText: '确定'});
                                    // console.log("error.else");
                                    // Something happened in setting up the request that triggered an Error
                                }})
                    } else{
                        this.$alert("表单验证错误", '登录错误', {
                            confirmButtonText: '确定'});
                        return false;
                    }
                });
            }
        }
    }
</script>

<style  scoped>
    .login-box {
        border: 1px solid #DCDFE6;
        width: 360px;
        margin: 80px auto;
        padding: 40px 40px 10px 40px;
        border-radius: 15px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px #909399;
    }
    .login-title {
        text-align: center;
        margin: 0 auto 10px auto;
        color: #303133;
    }
    .el-checkbox{
        text-align: center;
        margin: 0 20px auto auto;
    }
</style>