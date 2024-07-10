<template>
  <div class="container">
    <input
      v-show="false"
      ref="file"
      type="file"
      accept="image/*"
      onchange="handleFileSelect(event)"
    />
    <button @click="handleTakePhoto">选择照片</button>

    <button @click="handleGraphPhoto">拍照</button>

    <button @click="test">test</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const file = ref(null)

const handleTakePhoto = () => {
  file.value.click()
}

const handleGraphPhoto = () => {
  window.navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      // 将视频流添加到页面上的 video 标签中
      var video = document.getElementById('my-video')
      video.srcObject = stream
      video.play()
    })
    .catch(function (error) {
      console.error('无法访问摄像头:', error)
    })
}

const test = () => {
  window.openTocamera()
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  button {
    margin: 10px 0;
  }
}
</style>
