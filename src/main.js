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
} from 'vant'

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

new Vue({
  render: (h) => h(App),
}).$mount('#app')
