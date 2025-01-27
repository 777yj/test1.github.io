<script setup>
import { ref } from 'vue';

const industryNews = ref([
  {
    imgSrc: 'https://demoall.kuaituiyun.cn/28643/uploads/allimg/190108/1-1Z10Q61K80-L.jpg',
    title: '如何利用论坛来推广网站 这些事项要注意',
    desc: '网站建好、做好SEO优化之后，就需要将我们的网站推广出去，在推广方式上有很多，其中论坛推广就是里面一个有效的方法，利用高权重论坛的',
    date: '2019-01-08'
  },
  {
    title: '制作营销型网站之前需明确五大要素',
    date: '2019-01-08'
  },
  {
    title: '企业开发APP应用不得不正视的三大问题',
    date: '2019-01-08'
  },
  {
    title: '分析企业需了解的营销型网站建设五部曲',
    date: '2019-01-08'
  }
]);

const enterpriseNews = ref([
  {
    imgSrc: 'https://demoall.kuaituiyun.cn/28643/uploads/allimg/190108/1-1Z10Q61K80-L.jpg',
    title: '浅谈APP应用运营推广当中的四大诀窍',
    desc: '随着移动互联网的不断发展，各大应用市场的APP应用技术越来越多，企业在进行APP开发之后，想要取得成功的难度就越来越大。在这样的情况',
    date: '2019-01-08'
  },
  {
    title: '做好四个方面让你的APP应用效果更佳',
    date: '2019-01-08'
  },
  {
    title: '浅谈确定营销型网站主题的三大原则',
    date: '2019-01-08'
  }
]);
</script>

<template>
  <div class="news-wrapper">
    <div class="news-section">
      <div class="news-title-wrapper">
        <h2 class="news-title">
          <s class="news-title-icon">|</s>
          
          行业新闻hhhhh</h2>
        <a href="#" class="more-link">更多+</a>
      </div>
      <ul class="news-list">
        <li class="news-item-with-img">
          <div class="news-img-wrapper">
            <img :src="industryNews[0].imgSrc" alt="行业新闻图片">
          </div>
          <div class="news-content-wrapper">
            <div class="news-content-header">
              <p class="news-content-title"><a href="">{{ industryNews[0].title }}</a></p>
              <div class="news-content-date"><a href="">{{ industryNews[0].date }}</a></div>
            </div>
            <p class="news-content-desc"><a href="">{{ industryNews[0].desc }}</a></p>
          </div>
          <div class="news-separator"></div>
        </li>
        <li v-for="(news, index) in industryNews.slice(1)" :key="index" class="news-item-without-img">
          <div class="news-separator-top"></div>
          <div class="news-content-header">
            <p class="news-content-title"><a href="">{{ news.title }}</a></p>
            <div class="news-content-date">{{ news.date }}</div>
          </div>
          <div class="news-separator"></div>
        </li>
      </ul>
    </div>
    <div class="news-section">
      <div class="news-title-wrapper">
        <s class="news-title-icon">|</s>
        <h2 class="news-title">企业新闻</h2>
        <a href="#" class="more-link">更多+</a>
      </div>
      <ul class="news-list">
        <li class="news-item-with-img">
          <div class="news-img-wrapper">
            <img :src="enterpriseNews[0].imgSrc" alt="企业新闻图片">
          </div>
          <div class="news-content-wrapper">
            <div class="news-content-header">
              <p class="news-content-title"><a href="">{{ enterpriseNews[0].title }}</a></p>
              <div class="news-content-date">{{ enterpriseNews[0].date }}</div>
            </div>
            <p class="news-content-desc"><a href="">{{ enterpriseNews[0].desc }}</a></p>
          </div>
          <div class="news-separator"></div>
        </li>
        <li v-for="(news, index) in enterpriseNews.slice(1)" :key="index" class="news-item-without-img">
          <div class="news-separator-top"></div>
          <div class="news-content-header">
            <p class="news-content-title"><a href="">{{ news.title }}</a></p>
            <div class="news-content-date">{{ news.date }}</div>
          </div>
          <div class="news-separator"></div>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.news-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 50px 200px;
}

.news-wrapper a {
  text-decoration: none;
}

.news-content-title a,
.news-content-desc a,
.news-content-date a {
  color: inherit;
  text-decoration: none;
}

.news-section {
  padding:0 30px;
}

.news-title-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.news-title-icon {
  color: #97C660;
  margin-right: 10px;
}

.news-title {
  font-size: 20px;
  color: #97C660;
  margin: 0;
}

.more-link {
  color: #97C660;
  text-decoration: none;
  cursor: pointer;
  margin-left: auto;
}

.more-link:hover {
  text-decoration: underline #97C660;
}

.news-list {
  list-style: none;
  padding: 0;
}

.news-item-with-img {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.news-img-wrapper {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.news-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8px;
}

.news-content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.news-content-title {
  font-size: 15px;
  margin: 0;
}

.news-content-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.news-content-date {
  color: #999;
  font-size: 12px;
}

.news-item-without-img {
  margin-bottom: 20px;
}

/* .news-separator {
  border-bottom: 1px dashed #ccc;
  margin-top: 8px;
} */

.news-separator-top {
  border-top: 1px dashed #ccc;
  margin-bottom: 8px;
}

.news-item-with-img:hover,
.news-item-without-img:hover {
  color: #97C660;
}
</style>