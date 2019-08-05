<template>
<div>
    <div @click="goback" class="goback">
        <span><</span>
        <h2>目的城市</h2>
    </div>
    <!-- city -->
    <div class="city">
        
        <div>
            <h3>产品类型</h3>
            <ul>
                <li @click="shot(i)" :class="[shotbool == i ? 'bule':'']" v-for="v,i in shotarr" :key="i">{{v}}</li>
            </ul>
        </div>
        <div>
            <h3>服务天数</h3>
            <ul>
                <li @click="day(i)" :class="[daybool == i ? 'bule':'']" v-for="v,i in dayarr" :key="i">{{v}}</li>
            </ul>
        </div>
        <div>
            <h3>目的城市</h3>
            <ul>
                <li @click="city(i)" :class="[citybool == i ? 'bule':'']" v-for="v,i in cityarr" :key="i">{{v}}</li>
            </ul>
        </div> 
    </div> 
      <!--  图片样例 -->
    <div class="photo"> 
        <div class="item" v-for="v in imgs[num]"> 
            <img :src="v.url" alt="">
            <h4>{{v.pname}}</h4>
            <h5>{{v.style}}</h5>
            <p>{{v.xq}}</p>
            <span>{{v.time}}</span>
        </div> 
    </div>

</div>    
</template>
<script>
import axios from  'axios';
export default {
    data(){
        return{
            num:0,
            img:'',
            imgs:[
                [ {url:require('../assets/img/a.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'},
                {url:require('../assets/img/a.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'},
                {url:require('../assets/img/a.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'}],

                [ {url:require('../assets/img/b.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'},
                {url:require('../assets/img/b.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'},
                {url:require('../assets/img/b.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'}],

                [ {url:require('../assets/img/c.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'},
                {url:require('../assets/img/c.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'},
                {url:require('../assets/img/c.jpg'),pname:"Photo Name",xq:"GARDEN EXC...",style:"极简视觉2",time:'2019.07.20'}]
            ],
            shotarr:["不限","必选套餐","本地拍","全国拍","全球拍","蜜月旅游"],
            dayarr:["不限","1天","2天","3天","4天","5天"],
            cityarr:'',
            shotbool:0,
            daybool:0,
            citybool:0,
            allcity:[
                ["土耳其","巴厘岛","三亚","..."],
                ["意大利","巴厘岛","马尔达夫"],
                ["北京"],
                ["三亚","丽江","大理"],
                ["三亚","丽江","大理","意大利","巴厘岛","马尔达夫"],
                ["重庆"],
            ]
      }
    },
    mounted(){
        this.cityarr=this.allcity[0]
    },
    methods:{
        shot(i){//拍摄
           this.shotbool=i;
           this.cityarr=this.allcity[i];
          // console.log(this.cityarr[0])//获取到当前地点的下标
        },day(i){
           this.daybool=i;
        },
        city(i){//地点
           this.citybool=i;
        //    console.log(this.cityarr[i])
           this.num=i
        },
        goback(){
            this.$router.push('wedding')
        }
    }
}
</script>

<style scoped>
    @import url("../assets/css/shot.css");
</style>



