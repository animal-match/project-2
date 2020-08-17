<template>
    <div>
        <!--顶部导航开始-->
        <el-container>
          <el-header>
              <img src="../assets/images/logo.png" id="logo">
              <!--导航菜单-->
              <div class="navList">
                <ul>
                  <li>
                    <el-link href="/" :underline="false">首页</el-link>
                  </li>
                  <li>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        <router-link to="/all" id="sty">蛋糕馆</router-link><i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        
                        <el-dropdown-item v-for="(item,index) of series" :key="index"><router-link to="/index">{{item.sname}}</router-link></el-dropdown-item>
                        
                      </el-dropdown-menu>
                    </el-dropdown>
                  </li>
                  <li>
                    <el-link :underline="false">特惠商城</el-link>
                  </li>
                  <li>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        INLIFE<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>下午茶</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </li>
                  <li>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        企业专区<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>企业VIP登录</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </li>
                  <li>
                    <el-link :underline="false">卡券兑换</el-link>
                  </li>
                </ul>
              </div>
              <div class="login">
                <router-link to="/login" class="color">登录</router-link>
                <span class="divid">|</span> 
                <router-link to="/register" class="color">注册</router-link>  
              </div>      
              <div class="shopping">
                <el-badge :value="0" class="item">
                <el-button type="transparent" size="mini" icon="el-icon-shopping-cart-2" @click="cart"></el-button>
                </el-badge>
              </div>
          </el-header>
          <!--顶部导航结束-->
        </el-container>
    </div>    
</template>

<script>
export default {
  data(){
    return{
    //用变量series保存商品系列的数据
    series:[]
    }
  },
  methods:{
    cart(){
      this.$router.push('/cart');
    }
  },
   mounted(){
	this.axios.get('http://localhost:3000/series').then(res=>{
    //console.log(res.data.results);
	  this.series=res.data.results;
  });
 }
}
</script>
<style scoped>

#sty{text-decoration: none;}
#sty:visited{
  color:#fff;
  text-decoration:none;
}
.el-link{
  color: #FFF;
  width:70px;height:20px;
  border-radius: 2px;
}
.el-link:hover{
  border:1px solid white;
  width:70px;height:20px;
  border-radius: 2px;
  color:#fff;
  
}
/*购物车样式*/ 
.item {
  margin-top: 10px;
  margin-right: 40px;
}
/*购物车样式结束*/
/*页头下拉菜单*/
 .el-dropdown-link {
    cursor: pointer;
    color: #FFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
/*页头下拉菜单结束*/
.login>.color{
  color:#fff;
  text-decoration: none;
}
.shopping{
  float:right;
  margin-top:50px;
  margin-right:-120px;
}
.login{
  float:right;
  margin-right: 50px;margin-top:5px;
  color:#fff;
}
.divid{padding:0px 15px;font-size: 20px;}
.el-header{
  background-color:#e9546b;
  width:1439px;height:100px !important;
}

#logo{
  width:220px;
  margin-top:16px;
  margin-left:60px;
  display:block;
  float:left;
}

.navList>ul>li{
  float:left;
  padding:0 16px;
  margin-left:30px;
  margin-top:60px;
  color:#fff;
  font-size:12px;
}
</style>
