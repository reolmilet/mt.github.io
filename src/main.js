import { createApp } from 'vue'
import { Tab, Tabs } from 'vant'
import { Search } from 'vant'

import { Button } from 'vant'
import { Tabbar, TabbarItem } from 'vant'
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'

import { Sidebar, SidebarItem } from 'vant'
const app = createApp(App)

app.use(Sidebar)
app.use(SidebarItem)
app.use(Tab)
app.use(Tabs)
app.use(Search)

app.use(Tabbar)
app.use(TabbarItem)

app.use(router)

app.use(Button)

app.mount('#app')
