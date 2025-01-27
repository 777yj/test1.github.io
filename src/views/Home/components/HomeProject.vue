<script setup>
import ProjectImage from './HomeImage.vue';
const projectTitles = ['工程案例一','工程案例二','工程案例三','工程案例四'];
const projectImages = ['https://demoall.kuaituiyun.cn/28643/uploads/allimg/190322/1-1Z322145TM53.jpg','https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg','https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg','https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg','https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg','https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg','https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg','https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg'];
</script>


<template>
  <div class="project-gallery-container">
    <div class="project-titles">
      <el-button v-for="(title,index) in projectTitles" :key="index" type="primary" plain>{{ title }}</el-button>
    </div>
    <div class="project-images-grid">
      <ProjectImage v-for="(image,index) in projectImages" :key="index" :imageSrc="image" />
    </div>
  </div>
</template>

<style scoped>
.project-gallery-container{
  display:grid;
  grid-template-rows:auto auto;
  gap:20px;
}
.project-titles{
  display:flex;
  justify-content:center;
  gap:10px;
  margin: 90px 0 80px 0;
}

.el-button {
color: #fff;
font-size: 18px; 
background: #333; 
width: 120px; 
height: 42px; 
margin: 0 22px;   
border-radius: 0px
}

.project-images-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  grid-template-rows: auto auto;
  gap:1px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 200px;
  }
</style>
