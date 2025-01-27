  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({imageSrc: {type: String, required: true}});
  </script>
<template>
  <div class="project-image-item"><a href=""><img :src="imageSrc" alt="工程案例图片"></a></div>
</template>


<style scoped>
/* .project-image-item {
  width:100%;
  height:auto;
padding: 3px;
} */
.project-image-item img {
  width:280px;
  height:200px;
  display:block;
  padding: 0 0 25px 0;
  }
</style>
