<template>
  <div class="login">
   <el-form class="loginForm" :model="formData" ref="login" :rules="rules" label-width="80px" :inline="false" size="normal">
    <el-form-item label="账号">
      <el-input v-model="formData.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formData.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(login)">登陆</el-button>
      <!-- <el-button>取消</el-button> -->
    </el-form-item>
   </el-form>

  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const data = reactive({
      formData: {
        name: '111',
        password: '22'
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '账号3-10位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '密码3-10位', trigger: 'blur' }
        ]
      }
    })

    const submitForm (elform) {
      elform.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!', fields)
        }
      })
    }

    return {
      ...toRefs(data),
      submitForm
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  .loginForm {
    margin: 150px auto;
    width: 400px;
  }
}
</style>
