<template>
    <div>
      <my-index></my-index>
      <div class="goods">
        <div class="cake1" v-for="(item,index) of goods" :key="index">
            <div>
              <img :src="`${item.image}`"/>
            </div>
            <div>
              <p>{{item.gdetail}}</p>
              <p>{{item.gname}}<span>chocolate cake</span> </p>
              <p>￥{{item.gprice.toFixed(2)}}/510g </p>
              <p><img src="../assets/images/iconbasket.png" id="cart"></p>
            </div>
        </div>
      </div>
      <!--分页-->
      <div class="block">
        
        <el-pagination
         layout="prev, pager, next, sizes, total, jumper"
                   :page-size="pageSize"
                   :total="goods.length" 
                   @current-change="handleCurrentChange" 
                   @size-change="handleSizeChange" 
                   style="text-align:center;margin-bottom:20px;">
        </el-pagination>
</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            //用变量保存goods的返回值
            goods:[],
            pageSize: 10,
            currentPage: 1
        }
    },
    methods:{
          handleCurrentChange:function(cpage){
          this.goods.currentPage = cpage;
          },
          handleSizeChange:function(psize){
          this.goods.pageSize = psize;
       },
   },
    mounted(){
	  this.axios.get('http://localhost:3000/goods').then(res=>{
        let data=res.data.results;
        data.forEach(item => {
            //动态导入后台图片
            item.image=require('../assets/images/'+item.gimg);
            this.goods.push(item);
        });
  });
 }
}
</script>
<style scoped>
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
  margin-right:10px;
  margin-bottom:20px;
}
.goods>.cake1{
  margin-right:10px;
  width:291px;height:400px;
  margin-bottom:20px;
  }
  .goods{
      display: flex;
      flex-wrap: wrap;
    
    width:1220px;
    margin:0 auto;
  }
</style>