import './assets/main.css'
import 'vant/lib/action-sheet/style/index'
import 'vant/lib/cell/style/index'
import { ActionSheet, Cell } from 'vant'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(ActionSheet).use(Cell).mount('#app')
