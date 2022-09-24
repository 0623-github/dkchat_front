<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像，记得把这里链接换一个 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
                <el-form-item prop="account_number">
                    <el-input v-model="loginForm.account_number" placeholder="用户账号" prefix-icon="el-icon-user-solid" clearable></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input v-model="loginForm.pwd" placeholder="密码" prefix-icon="el-icon-lock" clearable show-password></el-input>
                </el-form-item>
                <el-form-item class="form_buttons">
                    <el-button type="primary" @click="register">注册</el-button>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					account_number: "",
					pwd: ""
				},
				loginFormRules: {
					account_number: [
						{ required: true, message: '请输入账号', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			resetLoginForm() {
				this.$refs.loginFormRef.resetFields();
			},
            login() {
                this.$refs.loginFormRef.validate(async valid => {
                    if (!valid) {
                        this.$message({
                            showClose: true,
                            message: '请按指定输入',
                            type: 'warning'
                        })
                        return
                    }
                    let result = await this.$axios({
                        url: "/signIn",
                        params: this.loginForm
                    })
                    console.log("loginRerquestResult:", result)
                    if (result.data.result) {
                        this.$message({
                            showClose: true,
                            message: result.data.message,
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: result.data.message,
                            type: 'error'
                        })
                    }
                })
            },
            register() {
                this.$router.push('/register')
            }
		}
	}
</script>

<style lang="less" scoped>
.login_container{
    background-color:aqua;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: aliceblue;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}
.form_buttons{
    display: flex;
    justify-content: end;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>
