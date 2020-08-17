<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" height="640px" width="1411px">
          <el-carousel-item v-for="item in imagesbox" :key="item.id">
               <router-link to="/index"><img :src="item.idView" class="image"></router-link>
          </el-carousel-item>
        </el-carousel>
      <!--固定定位的广告-->  
     <div id="advertisement" v-show="visible"><img src="../assets/images/qrcode-close.png" @click="close()"></div>
    </div> 
    <div id="All">
      <!--这里是5张宣传图片链接-->
      <!--上层两张-->
      <div class="picTop">
        <div class="pic1"></div>
        <div class="pic2"></div>
      </div> 
      <!--下层三张--> 
      <div class="picBot">
        <div class="pic3">   
        </div>
        <div class="pic4">
        </div>
        <div class="pic5">
        </div>
      </div>
      <!--分割线-->
      <hr>
    </div>
    <div class="sale">
      <!--当季热卖-->
      <div id="slogan">
        <p>当季热卖</P><P>BEST CHOICE</p>
      </div>
    </div>
    <div class="goods">
        <div class="cake1">
            <div>
              <img src="../assets/images/goods1.jpg"/>
              
            </div>
            <div>
              <p>只留下奶香巧克力化也化不开的醇香。</p>
              <p> 奶香巧克力 <span>chocolate cake</span> </p>
              <p> ￥198.00 /510g </p>
              <p><img src="../assets/images/iconbasket.png" id="cart"></p>
            </div>
        </div>
    </div>
    <!--最底部3个商品-->
    <div id="cakes">
      <div><el-link href="/"><img src="../assets/images/one2017121118105111794.jpg"></el-link></div>
      <div><el-link href="/"><img src="../assets/images/one2017062817214296575.jpg"></el-link></div>
      <div><el-link href="/"><img src="../assets/images/one2017062817195140684.jpg"></el-link></div>
    </div>
  </div>
</template>

<script>
export default{
//发送请求
data(){
	return{
    imagesbox:[
      {id:0,idView:require("../assets/images/1.jpg")},
      {id:1,idView:require("../assets/images/2.jpg")},
      {id:2,idView:require("../assets/images/3.jpg")},
      {id:3,idView:require("../assets/images/4.jpg")},
      {id:5,idView:require("../assets/images/5.jpg")}
    ],
    //用于存储商品系列信息
    series:[],
    visible:true
  };
},
methods:{
  close(){
    this.visible=!this.visible;
  }
},
//在挂载后发送请求，获取后台的数据
   mounted(){
	this.axios.get('http://localhost:3000/series').then(res=>{
    console.log(res.data.results);
	  this.series=res.data.results;
  });
 }
}
</script>
<style scoped> 
#cakes{
  display:flex;
  padding-bottom: 50px;
}
#cakes>div:first-child{
  margin-left: 100px;
}
#cakes>div{
  border:1px solid #f0f0f0;
}
.goods>.cake1{
  margin-left:100px;
}
#cart{width:28px;height: 28px; display:block;cursor:  pointer;}
.goods>.cake1>div>p:last-child{
  position: relative;
  left:223px;top:-26px;
}
.goods>.cake1>div:nth-child(2){
  padding-left:20px;
}
.goods>.cake1 p:nth-child(3){
  color:#e9546b;
  font-size:14px;
  padding-top:5px;
}
.goods>.cake1 p:nth-child(2)>span{
  font-size:10px;
}
.goods>.cake1 p:nth-child(2){
  font-size:14px;
  line-height: 30px;
  color:#635859;
}
.goods>.cake1 p:first-child{
  font-size: 14px;
  padding:14px 0px 11px;
  color:#b5b5b5;
}
.goods>.cake1:hover{
  border:1px solid pink;
  width:291px;height:400px;
}
  
  .goods{
    height:450px;
  }
  /*当季热卖*/
  #slogan{
    width:275px;height:200px;
    margin:0 auto;
    background:url("../assets/images/section_title_bg.png") no-repeat;
    color: #e9546b;
    text-align: center;
  }
  #slogan>p:first-child{
    position: relative;
    top:60px;
    font-size:24px;
  }
  #slogan>p:last-child{
    position: relative;
    top:80px;
    font-size: 20px;
    font-family: "MicroSoft Yahei";
  }
  .sale{
    height:200px;width:1422px;
    margin-bottom: 50px;
  }
  /*分割线*/
  #All hr{
    border:2px solid #EAEAEA;
    margin-bottom: 100px;
  }
  /*广告*/
  #advertisement>img{
    margin-top:8px;
    margin-left:10px;
    cursor: pointer;
  }
  #advertisement{
    background:url("../assets/images/qrcode.gif");
    background-size: 250px 420px;
    background-repeat: no-repeat;
    background-color:rgb(0,0,0,.6);
    background-position:center;
    width: 280px;
    height:470px;
    border:2px solid transparent;
    z-index:1000;
    position: fixed;
    right:40px;top:200px;
    border-radius:22px;
  }
  .pic3{background:url("../assets/images/entry_strawberry.jpg")}
  .pic4{background:url("../assets/images/entry_card.jpg")}
  .pic5{background:url("../assets/images/entry_ranking.jpg")}
  .pic5:hover,.pic4:hover,.pic3:hover,.picTop>.pic1:hover,.picTop>.pic2:hover{
    box-shadow: 0 0 15px 6px #fabdc9;
    cursor: pointer;
  }
  .pic3,.pic5,.pic4{
    width:294px;height:294px;
    border:1px solid #fabdc9;
    margin-left:25px;
    box-shadow: 0 0 44px -15px pink;
  }
  
  .picBot,.picTop{
    display: flex;
    flex-direction: row;
  }
  .picBot{
    margin-top: 330px;
    margin-left:215px;
    margin-bottom: 100px;
  }
  .picTop{   
    margin-top:100px;   
  }
  .picTop>.pic1{
    width:500px;
    height:294px;
    border:1px solid #fabdc9;
    position: absolute;
    left:240px;
    background:url("../assets/images/entry_szone001.jpg");
    box-shadow: 0 0 44px -15px pink;
  }
  .picTop>.pic2{
    width:410px;
    height:294px;
    border:1px solid #fabdc9;
    position: absolute;
    right:240px;
    background:url("../assets/images/entry_inbox001.jpg");
    box-shadow: 0 0 44px -15px pink;
  }
  #All{
    width:1420px;
    height:818px;
    position: relative;
  }
  .block{width:100% !important;}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>