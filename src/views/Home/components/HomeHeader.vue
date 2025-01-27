<!-- 菜单栏高度修改，字体无法垂直居中，鼠标经过背景颜色无法改变 -->
<script setup>
// import { ref, watch } from 'vue';
// import { useRoute } from 'vue-router';
// import { Phone } from '@element-plus/icons-vue';

// const route = useRoute();
// const activeIndex = ref(route.path);

// // 监听路由变化
// watch(() => route.path, (newPath) => {
//   activeIndex.value = newPath;
// });
</script>


<template>
  <!-- Element - UI容器布局 -->
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div class="header">
      <div class="logo">
        <!-- 网站logo图片 -->
        <img src="https://demoall.kuaituiyun.cn/28643/uploads/allimg/20221014/1-221014091KRJ.png" alt="">
      </div>
      <div class="contact">
        <!-- Element - UI图标 -->
        <el-icon><Phone /></el-icon>
        <span class="tel"><strong>+86 0000 88888</strong></span>
      </div>
      </div>
    </el-header>
    <!-- 主体内容 -->
    <el-main>
      <!-- 水平导航菜单 -->
       <el-menu :default-active="activeIndex" class="nav-menu" mode="horizontal">
        <el-menu-item index="/">网站首页</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
        <el-menu-item index="/product-center">产品中心</el-menu-item>
        <el-menu-item index="/news">新闻动态</el-menu-item>
        <el-menu-item index="/engineering-cases">工程案例</el-menu-item>
        <el-menu-item index="/Certifications">资质荣誉</el-menu-item>
        <el-menu-item index="/online-message">在线留言</el-menu-item>
        <el-menu-item index="/contact">联系我们</el-menu-item>
      </el-menu>
      <!-- 路由视图，用于显示不同组件 -->
      <!-- <router-view></router-view> -->
    </el-main>
  </el-container>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-main {
  padding: 40px 0 0 0;
}

.el-menu-item {
  font-size: 16px !important;
  /* display: flex !important;
  justify-content: center !important; */
}

.tel {
  margin-left: 10px;
  color: #86B350;
  font-size: 30px;
}

/* el-menu {
  color: #fff !important;
} */

.nav-menu {
  /* margin: 30px 0 0 0; */
  /* margin-bottom: 20px; */
  --el-menu-bg-color: #313131; /* 设置导航菜单背景色 */
  width: 100%;
  height: 40px;
  --el-menu-text-color: #fff; /*菜单项文字颜色 */
  /* --el-menu-font-size: 16px; */

  padding: 0 215px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0; /* 网格项之间的间距 */
  
}

.nav-menu.el-menu-item {
  text-align: center;
  transition: background-color 0.3s ease; /* 背景色过渡效果 */

}

.nav-menu.el-menu-item:hover {
  background-color: #86B350 ; /* 菜单项悬停时的背景色 */
}

.nav-menu.el-menu-item.is-active {
  background-color: #86B350; /* 激活菜单项的背景色 */
}
</style>