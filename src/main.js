import { createApp } from 'vue';
import { createRouter , createWebHistory } from 'vue-router'

import App from './App.vue'

import EventHandling from './components/EventHandling.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import TemplateSyntax from './components/TemplateSyntax.vue'
import DemoData from './components/DemoData.vue';
import StateManagement from './components/StateManagement.vue';
import ListRenderingVue from './components/ListRendering.vue';
import VueHooks from './components/VueHooks.vue';
import ComputedProperties from './components/ComputedProperties.vue'; 
import VueWatchers from './components/VueWatchers.vue';

const router = createRouter({
  history:createWebHistory(),
  routes:[
    { path:'/events' , component:EventHandling },
    { path:'/rendering' , component:ConditionalRendering },
    { path:'/template' , component:TemplateSyntax },
    { path:'/demodata' , component:DemoData },
    { path:'/states' , component:StateManagement },
    { path:'/list' , component:ListRenderingVue },
    { path:'/hooks' , component:VueHooks },
    { path:'/computed' , component:ComputedProperties },
    { path:'/watcher' , component:VueWatchers },
  ]
});


createApp(App).use(router).mount('#app');
// const app = createApp(App);
// app.mount('#app')
