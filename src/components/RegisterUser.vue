<template>
    <div class="register_container">
        <div class="register_box">
            <el-form class="register_form" ref="registerFormRef" :model="registerForm" :rules="registerFormRules">
                <el-form-item prop="real_name">
                    <el-input v-model="registerForm.real_name" placeholder="真实姓名" prefix-icon="el-icon-user-solid" clearable>
                        <template slot="prepend">姓名:</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="nick_name">
                    <el-input v-model="registerForm.nick_name" placeholder="用户名" prefix-icon="el-icon-user-solid" clearable>
                        <template slot="prepend">用户名:</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="age">
                    <el-input-number v-model="registerForm.age" placeholder="年龄" prefix-icon="el-icon-user-solid" clearable>
                        <template slot="prepend">年龄:</template>
                    </el-input-number>
                </el-form-item>
                <el-form-item prop="phone">
                    <el-input v-model="registerForm.phone" placeholder="电话" prefix-icon="el-icon-phone" clearable>
                        <template slot="prepend">电话:</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input v-model="registerForm.pwd" placeholder="密码" prefix-icon="el-icon-lock" clearable show-password>
                        <template slot="prepend">密码:</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="gender">
                    <el-radio-group v-model="registerForm.gender">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item class="form_buttons">
                    <el-button type="primary" @click="submit">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            registerForm: {
                pwd: "",
                real_name: "",
                nick_name: "",
                age: 0,
                gender: 1,
                phone: "",
            },
            registerFormRules: {
                real_name: [
                    { required: true, message: '请输入真实姓名', trigger: 'blur' }
                ],
                nick_name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submit() {
            this.$refs.registerFormRef.validate(async valid => {
                if (!valid) {
                    this.$message({
                        showClose: true,
                        message: '请按指定输入',
                        type: 'warning'
                    })
                    return
                }
                console.log("registerRerquestResult:", JSON.stringify(this.registerForm))
                let result = await this.$axios.post("/signUp", JSON.stringify(this.registerForm))
                console.log("registerRerquestResult:", result)
                if (result.data.result) {
                    this.$message({
                        showClose: true,
                        message: result.data.message,
                        type: 'success'
                    })
                    this.$router.push('/login')
                } else {
                    this.$message({
                        showClose: true,
                        message: result.data.message,
                        type: 'error'
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.register_container{
    background-color:aqua;
    height: 100%;
}
.register_box{
    width: 900px;
    height: 500px;
    background-color: aliceblue;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.register_form{
    position: absolute;
    margin-top: 5%;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.form_buttons{
    display: flex;
    justify-content: end;
}
</style>