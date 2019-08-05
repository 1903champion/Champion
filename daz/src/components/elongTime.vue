<template>

    <div class="block">
     <el-date-picker
      v-model="value11"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      default-value="2010-10-01"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      >
    </el-date-picker>
  </div>

  
</template>

<script>
  export default {
    data() {
      return {
        value10: '',
        value11: '',
      };
    }
  };
</script>

<style>
.el-input__inner{
    border:none !important;
}
i.el-input__icon.el-range__icon.el-icon-date{
    font-size:.533333rem /* 20/37.5 */ ! important;
    height:1.066667rem /* 40/37.5 */
}
.el-picker-panel{
  position: absolute;
  width:100% !important;
  top:0 !important;
  left:0 !important;
  height:100%;
  margin:0 !important;
}
.el-date-range-picker .el-picker-panel__body{
  width:100% !important;
  min-width: 10rem /* 375/37.5 */ !important;
  overflow-x: hidden;
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.el-date-range-picker .el-picker-panel__body .el-date-range-picker__content{
  width:100% ;
  padding:0;
}
.el-date-table tr{
  width:100% !important;
  box-sizing: border-box;
}
.el-date-table th{
    width:1.306667rem /* 49/37.5 */ !important;

    margin-right:0 !important;
    padding-right:0 !important
}
.el-date-table td.availabel{
    width:10px !important;

    margin-right:0 !important;
    padding-right:0 !important
}
.el-date-table td div{
  margin:0 !important;
  padding:0 !important;
}

</style>
