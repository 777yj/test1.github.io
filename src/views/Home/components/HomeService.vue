<template>
  <div class="grid-container">
    <div class="grid-item">
      <img :src="imageSrc" alt="示例图片" />
      <div class="content-container">
        <p><b><span style="color: #67B306;">我们</span>为您提供一站式服务</b></p>
        <el-button type="success" @click="handleConsult">我要咨询</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imageSrc = ref('https://demoall.kuaituiyun.cn/28643/template/pc/skin/images/iservice2-img.png');

const handleConsult = () => {
  console.log('用户点击了咨询按钮');
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  height: 540px;
}

.grid-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

.content-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 50px 0; /* 顶部和底部的内边距 */
  box-sizing: border-box;
}

.content-container p {
  margin: 0;
  font-size: 36px;
}

.content-container p:hover {
  color: #67B306;
}

.content-container .el-button {
  margin: 0;
  width: 202px;
  height: 55px;
  font-size: 26px;
  background-color: #67B306;
  border-radius: 0px
}
</style>