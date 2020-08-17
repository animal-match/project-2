<template>
<div class="page">
<!--商品详情况页-->
    <div class="chose">
        <!--商品-->
        <div class="products">
            <p>商品:</p>
            <p :class="{'active':isActive}" @click="skip">全部</p>
            <p :class="{'active':index===number}" v-for="(item,index) of series" :key="index" @click="toggle(index)">{{item.sname}}</p>
        </div>
        <!--口味-->
        <div class="flavor">
            <p>口味:</p>
            <p v-for="(item,i) of flavorx" :key="i" :class="{'active':i===num}" @click="change(i)">{{item}}</p>
        </div>
    <hr class="hr">
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            series:[],
            number:-1,
            num:-1,
            isActive:true,
            flavorx:["拿破仑","水果","芝士","巧克力","慕斯","咖啡","鲜奶","无糖"],
            
        }
    },
    methods:{
        toggle(index){
            this.number=index;
        },
        change(i){
            this.num=i;
        },
        skip(){
            this.$router.push("/all")
        }
    },
     mounted(){
	    this.axios.get('http://localhost:3000/series').then(res=>{
        console.log(res.data.results);
        this.series=res.data.results;
        });
    }
}
</script>
<style scoped>
.active{
    color:#fff !important;
    width:110px;height:20px;line-height:20px;
    background-color: #e9546b;
    border-radius:2px;
    cursor: pointer;
    text-align: center;
}
.products p+p:hover,.flavor p+p:hover{
    color:#fff;
    width:110px;height:20px;line-height:20px;
    background-color: #e9546b;
    border-radius:2px;
    cursor: pointer;
    text-align: center;
}
.hr{
    margin-bottom:50px;
}
.page{
  width:1222px;
  margin:0px 100px;
}
.page .products,.page .flavor{
    display:flex;
}
.products{
    padding-top:50px;margin-bottom:20px;
    height:20px;
}
.flavor{
    margin-bottom:20px;height: 20px;
}
.products p,.flavor p{
    width:110px;text-align: center;
    color:#505050;
    font-size: 14px;
}
</style>
