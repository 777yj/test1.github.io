<script setup>
import { CaretRight } from '@element-plus/icons-vue';
// 产品列表数据
const productList = [
  '建筑遮阳',
  '建筑保温',
  '建筑供热',
  '能效楼宇',
  '能源自动化'
];

// 图片列表数据
const imageList = [
  {
    src: 'https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg', // 请替换为实际图片地址
    title: '产品中心标题一'
  },
  {
    src: 'https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg',
    title: '产品中心标题二'
  },
  {
    src: 'https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg',
    title: '产品中心标题三'
  },
  {
    src: 'https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg',
    title: '产品中心标题四'
  },
  {
    src: 'https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg',
    title: '产品中心标题五'
  },
  {
    src: 'https://demoall.kuaituiyun.cn/28643/uploads/allimg/190109/1-1Z10ZU3150-L.jpg',
    title: '产品中心标题六'
  }
];
</script>

<template>
  <div class="product-center-wrapper">
    <div class="product-center-left">
      <div class="product-center-title">产品中心
      </div>
      <ul class="product-list">
        <li v-for="(item, index) in productList" :key="index"> 
          <a href="">
           <s><el-icon><CaretRight /></el-icon></s>
            {{ item }}
          </a></li>
      </ul>
      <div class="contact-us">
        <div class="contact-us-title">联系我们</div>
        <span><b>建筑节能遮阳物件类网站模板</b></span>
        <p>电话: +86 0000 8888</p>
        <p>手机: 13988888888</p>
        <p>地址: 广东省广州市番禺经济开发区</p>
      </div>
    </div>
    <div class="product-center-right">
      <div class="hot-recommend">
        <span class="hot-recommend-title"><b>热门推荐</b></span>
        <div style="font-size: 14px;"><a href="">更多+</a></div>
      </div>
      <div class="grid-container">
        <div v-for="(image, index) in imageList" :key="index" class="grid-item">
           <img :src="image.src" alt="建筑图片" class="grid-item-img">
          <div class="grid-item-title">{{ image.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-center-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 75px 200px;
  background-color: #f4f4f4;
  /* margin: 10px 100px; */
}

.product-center-wrapper a {
  text-decoration: none;
  color:#67B306;
}


.product-center-left {
  width: 280px;
  height: 568px;
  background-color: #fff;
  border: 1px solid #d7d2d2;
  border-bottom: 4px solid #67B306;
}

.product-center-title {
  background-color: #67B306;
  color: white;
  text-align: center;
  line-height: 80px;
  border-radius:0;
  font-size: 30px;
  font-weight: bold;
  height: 80px;

}

.product-list {
  list-style: none;
  border-bottom: 1px solid #EEE;
  padding: 0;
  margin: 0;
}

.product-list li {
  padding: 15px 0;
  padding: 15px 30px;

}

.product-list s{
  color: #67B306;
}

.product-list a{
  width: 250px;
  height: 28px;

  /* color: #67B306; */
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
}

.contact-us {
  margin-top: 20px;
  padding: 0 30px;
}

.contact-us-title {
  color: #67B306;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;

}

.contact-us p {
  font-size: 14px;
  margin-bottom: -7px;
}

.hot-recommend {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.hot-recommend-title {
  font-size: 18px;
  /* margin-bottom: 10px; */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.grid-item {
  text-align: center;
}

.grid-item-img {
  width: 280px;
  height: 210px;
  /* height: 230px; */
  border-radius: 0px;
  margin: 10px 0;
}

.grid-item-title {
  color: #333;
  font-size: 14px;
}
</style>

