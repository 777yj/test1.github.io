<!-- 输入框的角无法变成直角，按钮可以设置border-radius: 0px;改变 -->
<script setup>
import { Search } from '@element-plus/icons-vue';

// 热门关键词数组
const keywords = [
  '建筑遮阳',
  '建筑保温',
  '建筑供热',
  '能效楼宇',
  '能源自动化'
];
</script>

<template>
  <div class="keyword-search-container">
    <div class="keywords-area">
      <span class="keywords-label"><strong>热门关键词:</strong></span>
      <a
        v-for="(keyword, index) in keywords"
        :key="index"
        class="keyword-link"
        href="#"
      >
        {{ keyword }}
      </a>
    </div>
    <div class="search-area">
      <el-input style="border-radius: 0px;" placeholder="请输入关键字" class="search-input">
      </el-input>
        <el-button type="success" class="search-button">
          <el-icon><Search /></el-icon>
        </el-button>
  </div>
    </div>
</template>

<style scoped>

.keyword-search-container {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  height: 65px;
  background-color: #fff;
  padding: 0 200px;
}

.keywords-area {
  font-size: 12px; /* 设置小字字体大小 */
  /* color: #666; */
}

.keywords-label {
  color: #74B306;
  margin-right: 10px;
}

.keyword-link {
  margin-right: 22px;
  color: #666; /*继承父元素颜色 */
  text-decoration: none; /* 去除默认下划线 */
}

.keyword-link:hover {
  color: #74B306; /* 焦点时变为草绿色 */
  outline: none; /* 去除默认焦点轮廓 */
}

.search-area {
  display: flex;
  justify-content: flex-end;
}

.search-input {
  width: 200px;
  /* margin-right: 10px; */
  border: 1px solid #67B306;
}

.search-button {
  height: 38px;
  border-radius: 0px;
  font-size: 22px;
}
</style>