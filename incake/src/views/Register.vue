<template>
     <div>
        <div class="backGround">
            <div class="login">
                <p>REGISTER</p>
                <input type="text" class="name" placeholder="请输入用户名,长度为6~10位的字母或数字" v-model="username" @blur="checkUsername">
                <input type="password" class="name" placeholder="请输入密码,长度为8~14位的字母或数字" v-model="password" 
                @blur="checkPassword">
                <input type="password" class="name" placeholder="请再次输入密码" v-model="repassword" @blur="checkRePassword">
                <button class="btn" @click="reg">注册</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      //保存用户名
      username:'',
      //保存密码
      password:'',
      //保存确认密码
      repassword:''
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
      //失去焦点,检查确认密码
      checkRePassword(){
        let password=this.password;
        let repassword=this.repassword;
        //重复验证密码
          if(repassword==password && repassword!==""){
              this.$message({
                  message:"两次输入的密码一致",
                  type:"success",
                  center:true
              });
              return true;
          }else{
              this.$message({
                  message:"两次输入的密码不一致",
                  type:"error",
                  center:true
              });
          }
          return false;
      },
      
      reg(){
          //如果所有数据正确，则进行提交
          if(this.checkUsername() && this.checkPassword() && this.checkRePassword()){
              this.axios.post('http://localhost:3000/register','username='+this.username + '&password=' + this.password).then(res=>{
                  if(res.data.code==0){
                      //注册失败
                        this.$message("用户已存在");
                  }else{
                      //注册成功
                        this.$message('注册成功,请登录!');
                        this.$router.push('/login');
                  }
              });
          }
          
        },
        
    }
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