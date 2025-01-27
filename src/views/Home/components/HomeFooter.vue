<template>
  <div class="footer">
    <div class="foot">
    <!-- 友情链接部分 -->
    <div class="friend-links">
      友情链接：
      <a href="https://www.baidu.com">百度</a>
      <a href="https://www.sina.com.cn">新浪</a>
      <a href="https://www.weibo.com">微博</a>
      <a href="https://www.tencent.com">腾讯</a>
      <a href="https://www.taobao.com">淘宝</a>
    </div>
    <!-- 主体内容网格布局部分 -->
    <div class="grid-container">
      <div class="left-section">
        <h4>建筑节能遮阳物件类网站模板</h4>
        <p>电话：+86 0000 88888</p>
        <p>地址：广东省广州市番禺经济开发区</p>
         <el-button type="primary" color="#86B350">在线留言</el-button>
      </div>
      <div class="center-section">
        <div class="col">
         <h4><a href="">关于我们</a></h4>
          <p><a href="">企业文化</a></p>
          <p><a href="">加入我们</a></p>
          <p><a href="">销售网络</a></p>
        </div>
        <div class="col">
          <h4><a href="">产品中心</a></h4>
          <p><a href="">建筑遮阳</a></p>
          <p><a href="">建筑保温</a></p>
          <p><a href="">建筑供热</a></p>
          <p><a href="">能效楼宇</a></p>
          <p><a href="">能源自动化</a></p>
        </div>
        <div class="col">
          <h4><a href="">新闻动态</a></h4>
          <p><a href="">行业新闻</a></p>
          <p><a href="">企业新闻</a></p>
        </div>
        <div class="col">
          <h4><a href="">工程案例</a></h4>
          <p><a href="">工程案例一</a></p>
          <p><a href="">工程案例二</a></p>
          <p><a href="">工程案例三</a></p>
          <p><a href="">工程案例四</a></p>
        </div>
        <div class="col">
          <h4><a href="">荣誉资质</a></h4>
        </div>
        <div class="col">
          <h4><a href="">在线留言</a></h4>
        </div>
        <div class="col">
          <h4><a href="">联系我们</a></h4>
        </div>
      </div>
      <div class="qr-code-section">
        <img src="https://demoall.kuaituiyun.cn/28643/uploads/allimg/20221025/1-2210251JZC59.png" alt="二维码">
        <p>扫一扫 关注我们</p>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
/* 整体底部样式 */
.footer {
  background-color: #86B350;
  color: white;
  padding: 20px;
  font-size: 12px;
  /* margin-left: 100px; */
}

.footer a {
    color: white;
    text-decoration: none;
}

.footer h4 {
    font-weight: normal;
    font-size: 16px;
}
.foot {
  margin: 0 200px;
}
/* 友情链接样式 */
.friend-links {
  font-size: 16px;
  margin-bottom: 15px;
  padding-bottom: 30px;
  border-bottom: 1px solid #97C660;
}

.friend-links a {
  margin: 0 5px;
}
/* 网格布局容器 */
.grid-container {
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  gap: 10px;
}

/* 左侧信息部分样式 */
.left-section button {
color: #fff;
}

/* 中间内容部分样式 */
.center-section {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

/* 中间每列样式 */
.col {
  text-align: left;
}

/* 二维码部分样式 */
.qr-code-section {
  text-align: right;
}

.qr-code-section img {
    width: 120px; /* 可根据需求调整宽度 */
    height: auto; /* 保持图片宽高比 */
}
</style>