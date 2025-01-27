<script setup>
// 产品数据数组，每个对象包含产品的图片地址、标题和描述
const products = [
  {
    // 占位图，需替换为实际建筑遮阳图片地址
    image: 'https://demoall.kuaituiyun.cn/28643/template/pc/skin/images/pro1.png',
    title: '建筑遮阳',
    desc: '阳光一键掌控'
  },
  {
    // 占位图，需替换为实际建筑保温图片地址
    image: 'https://demoall.kuaituiyun.cn/28643/template/pc/skin/images/pro2.png',
    title: '建筑保温',
    desc: '保温、防水、装饰一体化解决方案'
  },
  {
    // 占位图，需替换为实际建筑供热图片地址
    image: 'https://demoall.kuaituiyun.cn/28643/template/pc/skin/images/pro3.png',
    title: '建筑供热',
    desc: '低能耗、高热效'
  }
];
</script>


<template>
  <div class="product-display-container">
    <!-- 循环渲染产品列表 -->
    <div v-for="(product, index) in products" :key="index" class="product-item">
      <img :src="product.image" alt="产品图片" class="product-img">
      <div class="product-text">
        <h2 class="product-title">{{ product.title }}</h2>
        <span class="product-desc">{{ product.desc }}</span>
      </div>
    </div>
  </div>
</template>


<style scoped>
.product-display-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0px;
  /* justify-items: stretch; */
  align-items: center;
  height: 240px;
  background-color: #f9f9f9;
  padding: 0 200px;
}

.product-item {
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  text-align: left;

}

.product-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  /* margin: 20px; */
}

.product-text {
  padding: 0 20px;
}

.product-title {
  color: #74B306;
  margin: 0 0 12px 0;
}

.product-desc {
  color: #999;
  margin: 0;
}
</style>