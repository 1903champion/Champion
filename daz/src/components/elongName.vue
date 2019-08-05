<template>
    <div class='elongName'>
        <div class='header'>
            <router-link to='/zhoubianyou' class="iconfont icon-xiaoyu back"></router-link>
            <input type="text" placeholder="输入城市名、行政区或景区" v-model='elongInp'> 
            <span class='iconfont icon-fangdajing-copy'></span>   
            <router-link to='/zhoubianyou' class='wordSearch'>搜索</router-link>
         </div>
         <div class='content' v-show='bool'>
             <div class='contentList' v-for='e,i in elongNameClass' :key='i'>
                 <h3>{{e.nameCn}}</h3>
                 <ul :ref='i'>
                     <li v-for='s,n in e.subFilterInfoEntities' :key='n' @click='elongChooseName(s.nameCn)'>
                         <span>{{s.nameCn}}</span>
                     </li>
                     <li class='iconfont icon-jiantou8' @click='ShowHide(i)'></li>
                 </ul>
             </div>
         </div>
         <div class='inpList' v-if='!bool'>
             <ul>
                 <li v-for='e,i in elongNameInputArr' :key='i'>
                     {{e.hotelname}}
                 </li>
             </ul>
         </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
    computed:{
        ...mapState(['elongNameInputArr'])
    },
    data(){
        return {
            elongNameClass:[],
            elongInp:'',
            bool:true,
            n:[0,0,0,0],
        }
    },
    watch:{
        elongInp(){
            if(this.elongInp){
                this.elongNameInputGetcity(this.elongInp)
                this.bool=false
            }else{
                this.bool=true;
            }
        }
    },
    methods:{
        ...mapMutations(['elongChooseName']),
        ...mapActions(['elongNameInputGetcity']),
        ShowHide(q){
            var obj=this.$refs
            
            this.n[q]++;
            if(this.n[q]%2==1){
                for(var i=0;i<obj[q][0].children.length-1;i++){
                    if(i>4){
                        obj[q][0].children[i].style.display='none';
                    }
            }
            }else{
                for(var i=0;i<obj[q][0].children.length-1;i++){
                    if(i>4){
                        obj[q][0].children[i].style.display='block';
                    }
            }
            }          
        }
    },
    mounted(){
        axios.get('/home/api/gethotelsearchrecommendplace?_rt=1564847340062&city=1101')
        .then(res=>{
            this.elongNameClass=eval(res.data.simpleFilterInfos)
        })
    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
}
ul{
    list-style:none;
}
a{
    text-decoration: none;
}
.elongName{
    background:#F2F2F2;
    height:100%;
}
.elongName .header{
    height:1.2rem /* 45/37.5 */;
    width:100%;
    position:relative;
    background:#FCFCFC;
    position:relative;
}
.elongName .header .back{
    display:block;
    line-height:1.2rem /* 45/37.5 */;
    color:#858585;;
    font-size:.8rem /* 30/37.5 */;
    float:left;
    margin:0 .133333rem /* 5/37.5 */;
}
.elongName .header input{
    width:6.4rem /* 240/37.5 */;
    outline:none;
    border: 1px solid #ddd;
    border-radius: 3px;
    float:left;
    line-height:.906667rem /* 34/37.5 */;
    margin-top:.133333rem /* 5/37.5 */;
    padding-left:1.066667rem /* 40/37.5 */;
}
.elongName .header span{
    position:absolute;
    left:1.466667rem /* 55/37.5 */;
    top:.4rem /* 15/37.5 */;
}
.wordSearch{
    font-size:.4rem /* 15/37.5 */;
    color: #49f;
    line-height:1.2rem /* 45/37.5 */;
    font-weight:600;
    margin-left:.266667rem /* 10/37.5 */;
}
.content{
    background:#F2F2F2;
    padding:.4rem /* 15/37.5 */ .32rem /* 12/37.5 */ 0;
}
.content h3{
    font-size:.32rem /* 12/37.5 */;
    color: #999;
    margin:0 0 .16rem /* 6/37.5 */;
}
.contentList ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}
.contentList ul li{
    width: 30%;
    border-radius: 3px;
    margin-bottom: .32rem /* 12/37.5 */;
    background: #FFF;
    text-align: center;
    height: 1.066667rem /* 40/37.5 */;
    line-height:1.066667rem /* 40/37.5 */;
    text-align: center;
}
.contentList ul li span{
    display:inline-block;
    vertical-align: middle;
   width:1.6rem /* 60/37.5 */;
   height:.853333rem /* 32/37.5 */;
   text-overflow: ellipsis;
   overflow: hidden; 
   white-space: nowrap;
    text-align: center;
    font-size:.32rem /* 12/37.5 */;
    line-height: 1rem;
}
.inpList ul{
    padding:.32rem /* 12/37.5 */;
}
.inpList ul li{
    line-height:1.093333rem /* 41/37.5 */;
    font-size:.346667rem /* 13/37.5 */;
    color:#555;
    border-bottom:1px solid #ddd;
}
</style>
