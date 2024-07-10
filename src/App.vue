<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const show = ref(false)
const fileName = ref('')
const actions = [
  { name: '相册', key: 'picture' },
  { name: '相机', key: 'graph' }
]

const handleFileInputChange = (e) => {
  fileName.value = e.target.files[0].name
}

const onSelect = (item) => {
  // 默认情况下点击选项时不会自动收起
  // 可以通过 close-on-click-action 属性开启自动收起
  show.value = false
  console.log(item)
  const { key } = item
  if (key === 'picture') {
    fileInput.value.type = 'file'
  } else {
    fileInput.value.type = 'text'
  }
  fileInput.value.click()
}
</script>

<template>
  <input
    v-show="false"
    ref="fileInput"
    type="text"
    accept="image/*"
    @change="handleFileInputChange"
  />
  <van-cell is-link title="基础用法" @click="show = true" />
  <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
</template>
