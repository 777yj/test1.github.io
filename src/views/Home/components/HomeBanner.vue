<script setup>
const imageUrls = [
  'https://demoall.kuaituiyun.cn/28643/uploads/190108/1-1Z10Q0341G28.jpg', // 替换为实际图片 URL
  'https://demoall.kuaituiyun.cn/28643/uploads/190108/1-1Z10Q0341G28.jpg', // 替换为实际图片 URL
  'https://demoall.kuaituiyun.cn/28643/uploads/190108/1-1Z10Q0341G28.jpg'  // 替换为实际图片 URL
];
</script>

<template>
  <div style="height: 600px">
    <el-carousel height="auto" autoplay>
      <el-carousel-item style="height: 600px" v-for="(imageUrl, index) in imageUrls" :key="index">
        <img :src="imageUrl" alt="carousel image" class="carousel-img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<style scoped>
.carousel-item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.carousel-img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>