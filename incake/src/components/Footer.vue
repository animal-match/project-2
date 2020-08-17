<template>
    <!--底部页脚开始-->
    <div>
        <el-container>
            <el-footer>
                  <img src="../assets/images/logo.png" id="logo2">
                  <!--面包屑导航-->
                  <div class="crumbs">
                    <el-breadcrumb separator="|">
                      <el-breadcrumb-item :to="{ path: '/' }">配送范围</el-breadcrumb-item>
                      <el-breadcrumb-item :to="{ path: '/' }">帮助中心</el-breadcrumb-item>
                      <el-breadcrumb-item :to="{ path: '/' }">品牌故事</el-breadcrumb-item>
                      <el-breadcrumb-item :to="{ path: '/' }">关于我们</el-breadcrumb-item>
                       <el-breadcrumb-item :to="{ path: '/' }">招贤纳士</el-breadcrumb-item>
                    </el-breadcrumb>
                  </div>
                  
                  <div id="callUs">
                    客服热线: <span>400-921-5757</span>
                  </div>
                  <div id="code2">
                    <img src="../assets/images/2D.png" width="140px">
                    <span>微信订购更方便</span>
                  </div>
            </el-footer>
          <!--底部页脚结束-->
        </el-container>
    </div>
</template>
<style scoped>
.el-footer{
  background-color:#f5f5f5;
  width:1439px;height:250px !important;
}
#logo2{
  width:400px;
  margin-left:50px;
  margin-top:60px;
  display: block;
  float:left;
}
#code2{
 position:relative;
 left:-50px;
 top:50px;
}
#code2>span{
  display: inline-block;
  position:relative;
  left:265px;
  top:10px;
}
.crumbs{
  margin-top:60px;
  width:400px;
  height:100px;
  float:left;
  margin-left:50px;
}
#callUs{
  width:250px;
  height:30px;
  float:left;
  position:relative;
  top:100px;
  left:-400px;
  color:#e9546b;
}
#callUs>span{
  font-size:28px;
  left:20px;
  font-weight:bolder;
  display:block;
  margin-top:-23px;
  margin-left:80px;
}
</style>
