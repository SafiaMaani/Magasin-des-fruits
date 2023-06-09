import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import store from './store/store'
import NavBar from "./components/NavBar.vue";
import FruitCard from "./components/FruitCard.vue";
import CardOnly from "./components/CardOnly.vue";
import PanierComponant from "./components/PanierComponant.vue";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component("navBar", NavBar);
Vue.component("fruitCard", FruitCard);
Vue.component("cardOnly", CardOnly);
Vue.component("panierComponant", PanierComponant);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
