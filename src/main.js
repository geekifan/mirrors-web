import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Select, Table, TableColumn, Tooltip, Tabs, TabPane, Tag, Icon, Row, Col, Card, Container, Header, Aside, Footer, Skeleton, SkeletonItem, Dialog, Option, Input} from 'element-ui';
import i18n from './i18n'
import GLOBAL from '@/global/global.js'

Vue.prototype.$GLOBAL = GLOBAL

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Tag.name, Tag);
Vue.component(Icon.name, Icon);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Card.name, Card);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Footer.name, Footer);
Vue.component(Skeleton.name, Skeleton);
Vue.component(SkeletonItem.name, SkeletonItem);
Vue.component(Dialog.name, Dialog);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);


Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
