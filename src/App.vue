<script setup>
import { ref } from 'vue'

const src = ref('')
const fileInput = ref(null)
// const show = ref(false)
const fileName = ref('')
// const actions = [
//   { name: '相册', key: 'picture' },
//   { name: '相机', key: 'graph' }
// ]

const handleFileInputChange = async (e) => {
  fileName.value = e.target.files[0].name
  // const url = URL.createObjectURL(e.target.files[0])
  const img = await readImg(e.target.files[0])
  src.value = img
}

// const onSelect = (item) => {
//   // 默认情况下点击选项时不会自动收起
//   // 可以通过 close-on-click-action 属性开启自动收起
//   show.value = false
//   console.log(item)
//   const { key } = item
//   if (key === 'picture') {
//     fileInput.value.type = 'file'
//   } else {
//     fileInput.value.type = 'text'
//   }
//   fileInput.value.click()
// }
const handleFileUpload = () => {
  fileInput.value.click()
}

function readImg(file) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function (e) {
      resolve(e.target.result)
      // img.src = e.target.result
    }
    reader.onerror = function (e) {
      reject(e)
    }
    // img.onload = function () {
    //   resolve(img)
    // }
    // img.onerror = function (e) {
    //   reject(e)
    // }
  })
}
</script>

<template>
  <img :src="src" alt="" />
  <input
    v-show="false"
    ref="fileInput"
    type="file"
    accept="image/*"
    @change="handleFileInputChange"
  />
  <button @click="handleFileUpload">森分钟</button>
  <!-- <van-cell is-link title="基础用法" @click="show = true" />
  <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" /> -->
</template>
