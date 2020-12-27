import Vue from 'vue'
import App from './App.vue'

import {
  Tabs,
  Tab,
  Cell,
  CellGroup,
  Row,
  Col,
  Image,
  List,
  Button,
  Card,
  Tag,
  Lazyload,
  Search,
  Checkbox,
  CheckboxGroup,
  Icon,
  Empty,
  Swipe,
  SwipeItem,
  Rate,
  DropdownMenu,
  DropdownItem,
  Sticky,
} from 'vant'

import router from './router'

Vue.config.productionTip = false
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(List)
Vue.use(Button)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Lazyload)
Vue.use(Search)
Vue.use(Icon)
Vue.use(Empty)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Rate)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Sticky)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
