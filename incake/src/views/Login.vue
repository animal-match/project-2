<template>
    <div>
        <div class="backGround">
            <div class="login">
                <p>LOGIN</p>
                <input type="text" class="name" placeholder="请输入用户名" @blur="checkUsername" v-model="username">
                <input type="password" class="name" placeholder="请输入密码" @blur="checkPassword" v-model="password">
                <button class="btn" @click="log">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods:{
       //失去焦点,检查用户名
      checkUsername(){
          let username=this.username;
           //1.验证用户名,必须是字母或数字,长度为6~10个字符
          let userRegExp=/^\w{6,10}$/;
          if(userRegExp.test(username)){
              this.$message({
                  message:"用户名可以使用!",
                  type:"success",
                  center:"true"
              });
              return true;
          }else{
              this.$message({
                  message:"用户名格式错误!",
                  type:"error",
                  center:true
              });
              return false;
          }
      },
      //失去焦点,检查密码
      checkPassword(){
          let password=this.password;
            //验证密码,必须是8~14位的字母或数字
          let passRegExp=/^\w{8,14}$/;
          if(passRegExp.test(password)){
              this.$message({
                  message:"密码格式正确!",
                  type:"success",
                  center:true
              });
              return true;
          }else{
              this.$message({
                  message:"密码格式错误!",
                  type:"error",
                  center:true
              });
              return false;
          }
        },
      //如果用户名密码都正确，则登录成功
      log(){
          if(this.checkUsername() && this.checkPassword){
            this.axios.post('http://localhost:3000/login','username=' + this.username + '&password=' + this.password).then(res=>{
                if(res.data.code == 1){
                    this.$message('登录成功');
                    this.$router.push('/');
                }else{
                    this.$message('登录失败');
                }
            });
          }
      }
    },
    
}
</script>
<style scoped>  
.login>.btn{
    cursor: pointer;
    font-family: 'MicroSoft Yahei';
    height:55px;
    background-color: #45515f;
    color:#fff;
    font-size: 22px;
    border-radius: 4px;
    border:1px solid transparent;
}
.login>.name{
   height:50px;
   border:2px solid #d6dce2;
   border-radius: 5px;
   margin-bottom: 20px;
   padding: 0px 0px 0px 20px;
}
.login>.name:focus{
    border:1px solid red;
    font-size: 16px;
}
.login{
    width:360px;
    display:flex;
    flex-direction: column;
    position: absolute;
    top:150px;
    right:200px;
}
.login>p{
    font-family: 'MicroSoft Yahei';
    color:#d6dce2;
    font-size:36px;
    text-align: center;
    margin-bottom: 20px;
}

.backGround{   
    background: url("../assets/images/login-slogan.png");
    background-repeat: no-repeat;
    background-position:170px 170px;
    height:760px;
    position: relative;
}
</style>