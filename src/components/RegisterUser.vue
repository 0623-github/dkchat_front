<template>
    <div class="register_container">
        <div class="register_box">
            <el-form class="register_form" ref="registerFormRef" :model="registerForm" :rules="registerFormRules">
                <el-form-item prop="real_name">
                    <el-input v-model="registerForm.real_name" placeholder="真实姓名" prefix-icon="el-icon-user-solid" clearable></el-input>
                </el-form-item>
                <el-form-item prop="nick_name">
                    <el-input v-model="registerForm.nick_name" placeholder="用户名" prefix-icon="el-icon-user-solid" clearable></el-input>
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
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                nick_name: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
            }
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
</style>