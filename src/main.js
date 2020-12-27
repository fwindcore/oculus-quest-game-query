import Vue from 'vue'
import Vuex from 'vuex'

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
  Skeleton,
  NavBar,
} from 'vant'

import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

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
Vue.use(Skeleton)
Vue.use(NavBar)

const store = new Vuex.Store({
  state: {
    rate: {
      USD: 1,
    },
  },
  mutations: {
    updateRate(state, rate) {
      state.rate = rate
    },
  },
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
