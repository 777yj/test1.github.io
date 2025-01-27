<script setup>

</script>
<template>
    <div class="green-section">
     <el-button class="consult-button" type="primary" plain>立即咨询</el-button>
      <div class="service-hotline">
    <span class="service-hotline1">服务热线 </span>
    <span class="service-hotline2"><strong>+86 0000 8888 </strong></span>
  </div>
  </div>
</template>
<style scoped>
.green-section {
  background-image: url('/src/assets/logo.png'); /* 请将此处替换为实际图片路径 */
  background-size: cover;
  background-position: center;
  height: 175px; /* 根据实际需求调整高度 */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center ;
  color: black; /* 文字颜色根据图片背景调整 */
  margin: 25px 0 0 0px;
}

.consult-button {
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: white;
  color: green;
  font-size: 16px;
  width: 145px;
  height: 42px;
  border: none;
  border-radius: 0px;
}

.service-hotline {
  display: flex;
  flex-direction: column;
  margin:0 200px 5px 20px;
}

.service-hotline1 {
  color: #fff;
  font-size: 14px;
}

.service-hotline2 {
  color: #fff;
  font-size: 28px;
}


.slogan {
  margin: 0;
}
</style>