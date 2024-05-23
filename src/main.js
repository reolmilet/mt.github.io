import { createApp } from 'vue'
import { Tab, Tabs } from 'vant'
import { Search } from 'vant'
import { Card } from 'vant'
import { Button } from 'vant'
import { Tabbar, TabbarItem } from 'vant'
import App from './App.vue'
import router from './router'
import { Tag } from 'vant'
import 'vant/lib/index.css'
import { SubmitBar } from 'vant'
import { Dialog } from 'vant'
import { Sidebar, SidebarItem } from 'vant'
const app = createApp(App)
app.use(Dialog)
app.use(SubmitBar)
app.use(Tag)
app.use(Sidebar)
app.use(SidebarItem)
app.use(Tab)
app.use(Tabs)
app.use(Search)
app.use(Card)
app.use(Tabbar)
app.use(TabbarItem)

app.use(router)

app.use(Button)

app.mount('#app')
