<template>
    <div class="cart">
        <!--购物篮-->
        <div class="tips">
            <p>SHOPPING BASKET</p>
            <p>购物篮</p>
        </div>
        <div class="container">
            <div class="con-list">
                <div>全选</div>
                <div>商品</div>
                <div>属性</div>
                <div>数量</div>
                <div>规格</div>
                <div>单价</div>
                <div>优惠</div>
                <div>操作</div>
            </div>
            <hr>
            <div class="con-goods" v-for="(item,index) of product" :key="index">
                <div>
                    <img :src="require(`../assets/images/${item.img}`)" id="pic">
                </div>
                <div>
                    <p>{{item.name}}</p>
                    <p>{{item.enName}}</p>
                </div>
                <div>
                    <p>免费赠送5份餐具</p>
                </div>
                <div>
                    <!--
                    <img src="../assets/images/icon_sub_disabled.png">
                    -->
                    <button><img src="../assets/images/icon_sub_enabled.png" @click="btn(false,index)"></button>
                    <input type="text" :value="item.count">
                    <button><img src="../assets/images/icon_add_enabled.png" 
                    @click="btn(true,index)"></button>
                </div>
                <div>
                    510g
                </div>
                <div>
                    ￥{{item.price}}
                </div>
                <div>
                </div>
                <div>
                    <p @click="del">删除</p>
                </div>
            </div>
            <hr id="sup">
            <div class="count">
                <p>已选0件商品</p>
                <p>(不包含运费)</p>
                <p>共<span>￥{{totalPrice.toFixed(2)}}</span></p>
                <el-button type="danger">去结算</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   data(){
       return {
           totalPrice:0,
           product:[
               {   
                   id:"1",
                   img:"goods1.jpg",
                   name:"奶香巧克力",//品名
                   enName:"chocolate cake", //英文名
                   price:"119.00", //单价
                   count:1   //数量
               },
               {    
                   id:"2",
                   img:"goods2.jpg",
                   name:"曲奇味蛋糕",//品名
                   enName:"cookie cake", //英文名
                   price:"128.00", //单价
                   count:1  //数量
               },
           ]
       }
   },
   methods:{
       getTotalPrice(){
           //总价
           let price = 0;
           this.product.forEach((item,index)=>{
               price += item.price * item.count;
           })
           this.totalPrice = price;
       },
       btn(bool,index){
           let proIndex = this.product[index];
           if(bool){
               //加法
                proIndex.count++;               
           }else{
               //加法
                if(proIndex.count<=1){
                    return;
                }
                proIndex.count--;
           }
           this.getTotalPrice();
       },
       del(index){
           this.product.splice(index,1);
           this.getTotalPrice();
       }
   },
   mounted(){
       this.getTotalPrice();
   }
}
</script>
<style scoped>
button{
    background-color:transparent;
    border:1px solid transparent;
}
.count p:first-child{
    color:black !important;
    margin-right: 10px;
}
.count p:nth-child(2),.count p:nth-child(1){
    color:#b4b4b4;
    font-size:14px;
    margin-top:25px;
}
.count p:nth-child(3)>span{
    font-size:24px;
    color:#e9546b;
}
.count p:nth-child(3){
    margin-top:20px;
}
.count p+p{
    margin-right: 40px;
}
.count{
    display: flex;
    justify-content:end;
    margin-bottom: 100px;
}
.el-button{padding:16px 60px; font-size: 24px;
background: #e9546b;
}
#sup{
    margin-bottom:35px;
}
.con-goods div:nth-child(8){
    margin:35px;margin-left: 175px;
    color:#4682be;
    cursor: pointer;
}
.con-goods div:nth-child(6){
    margin:35px;margin-left: 40px;
}
.con-goods div:nth-child(5){
    margin:35px;margin-left: 60px;
}
.con-goods div:nth-child(4){
    margin:70px 20px;
}
.con-goods div:nth-child(4) input{
    width:35px;height:30px;
    border:1px solid #c7c7c7;
    border-radius: 2px;
    position:relative;
    top:-7px;
    padding-left:20px;
    
}
.con-goods div:nth-child(3){
    margin:40px;
}
.con-goods div:nth-child(2){
    margin:40px;
    width:94.6px;height:97px;
}
#pic{
    width:120px;height:120px;
    margin:25px 0px 25px 30px;
}
.con-goods{display:flex;color:#505050;}
hr{color: red;}
.con-list>div:nth-child(8){
    margin-left:110px;
}
.con-list>div:nth-child(7){
    margin-left:80px;
}
.con-list>div:nth-child(6){
    margin-left:80px;
}
.con-list>div:nth-child(5){
    margin-left:150px;
}
.con-list>div:nth-child(4){
    margin-left:170px;
}
.con-list>div:nth-child(3){
    margin-left:180px;
}
.con-list>div:nth-child(2){
    margin-left:150px;
}
.con-list>div:first-child{
    margin-left:30px;
}
.con-list{
    display:flex;
    color:#505050;
    font-size:14px;
    margin-bottom:15px;
}
.cart .tips p:last-child{
    text-align: center;
    width:1220px;
    margin-bottom:150px;
    color:#45515e;
    font-size:20px;
}
.cart .tips p:first-child{
    font-size:36px;color:#45515e;
    font-family: "Microsoft Yahei";
    margin-top:50px;margin-bottom:10px;
    text-align: center;
    width:1220px;
}
.cart{
    width:1220px;
    margin:0 auto;
}
</style>