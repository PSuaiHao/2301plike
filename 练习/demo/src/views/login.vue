<template>
    <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <h2>欢迎登录 - MMALL管理系统</h2>
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { querylogin } from '../api/http';
export default {
    data() {
        return {
            ruleForm: {
                username: 'admin',
                password: 'admin'
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入正确的密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    querylogin({ ...this.ruleForm }).then(res => {
                        console.log(res.data);
                        localStorage.setItem('userInfo', JSON.stringify(res.data.data))
                        this.$router.push('/')
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

    },
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;

    .demo-ruleForm {
        padding: 20px;
        width: 40%;
        background-color: #fff;
        box-shadow: 2px 2px 2px #fff;

        h2 {
            margin-bottom: 20px;
            font-weight: normal;
        }

        .btn {
            width: 100%;
        }
    }
}
</style>