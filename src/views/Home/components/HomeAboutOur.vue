<script setup>
</script>


<template>
  <div style="background-color: #f4f4f4;">
    <div class="grid-container">
      <div class="grid-item-image">
        <img src="https://demoall.kuaituiyun.cn/28643/uploads/allimg/20221025/1-2210251ISB22.jpg" alt="示例图片" />
      </div>
      <div class="grid-item-content">
        <h2 class="title">关于我们</h2>
        <span><br>
          广东省广州建筑节能工程有限公司为KARDON卡尔顿国际玻璃贴膜和SunScape圣泊窗膜的广东总代理商，KARDON是北京固邦海达（北京）环保节能有限公司在中国大陆唯一授权经销商，SunScape圣泊窗膜是北京圣泊通顺国际贸易有限公司在中国大陆唯一授权经销商，是从美国引进优质建筑贴膜产品。经过十几年的市场拓展，最终确立KARDON卡尔顿国际玻璃贴膜在中国大陆的竞争优势。卡尔顿国际玻璃贴膜公司，是世界贴膜协会的倡导者和重要成员，自五十年代开始，就致力于发展超安全、超设计的玻璃贴膜，每年的生产以50%的惊人速度增长，其产品的品质一直处于世界领先地位。目前，在西方国家80%的建筑玻璃贴<br>
        </span>
        <el-button type="success" style="font-size: 20px;width: 130px;height: 38px; border-radius: 0;">→</el-button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(10px, 1fr)); */
  grid-gap: 20px;
  padding: 60px 200px;
  align-items: center;
  justify-items: legacy;
}

.grid-item-image {
  width: 400px;
  height: 300px;

}

.grid-item-content {
    margin-left: 70px;
    text-align: left;
    height: 300px;
}

.grid-item-content span {
  display: block;
  font-size: 14px;
  margin: 30px 0;
  color: #666;
  width: 737px;
  /* height: 154px; */
  line-height: 1.7;
}


.title {
  color: #333;
  font-size: 24px;
  position: relative;
  display: inline-block;
  margin: 0;
}

.title::after {
  content: '';
  display: block;
  width: 46px; /* 横线的长度 */
  height: 2px; /* 横线的厚度 */
  background-color: #666; /* 横线的颜色 */
  position: absolute;
  bottom: -20px;

}
</style>
