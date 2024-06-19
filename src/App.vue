<script setup>
  // import { computed, reactive } from 'vue';
  // import LifeCycleHooks from './components/LifeCycleHooks.vue';
  // import TemplateSyntax from './components/TemplateSyntax.vue'
  // import DemoData from './components/DemoData.vue';
  // import StateManagement from './components/StateManagement.vue';
  // import ListRenderingVue from './components/ListRendering.vue';
  // import VueHooks from './components/VueHooks.vue';
  // import ComputedProperties from './components/ComputedProperties.vue'; 
  // import VueWatchers from './components/VueWatchers.vue';
  // import EventHandling from './components/EventHandling.vue';
  // import ConditionalRendering from './components/ConditionalRendering.vue';
  

  // const activeClass = ref('active');
  // const errorClass = ref('text-danger');

  // const isActive = ref(true);
  // const hasError = ref(true);

  // const variables = computed(() => {
  //   return reactive({
  //     fname:"vikram",
  //     lname:"Kanzariya",
  //     age:21,
  //     city:"Morbi"
  //   })
  // });


  // const isActive = ref(true);
  // const error = ref(null);

  // const classObject = computed(() => ({
    
  //   active:isActive.value && !error.value ,
  //   'text-danger' : error.value&& error.value.type === 'fatal',
  // }
  // ));

  // const message = () => { alert("Messaged U")}

  // function increase(){
  //   let counts = ref(0);
  //   console.log("Increase Event Called")
  //   // counts.value = counts.value + 5
  //   counts.value += 5;

  //   console.log(counts.value)
  // }
// import {defineProps} from 'vue'
// const props = defineProps({
//   fname:String,
//   lname:String,
//   city:String,
//   age:Number,
// });
</script>

<template>
  <!-- <p>props are: {{ props.age=21 }}</p> -->

<h2>Choose what Component you want to see:</h2>

<p>Current Route Path: {{ $route.fullPath }}</p>

  <router-link class="route" to="/events">Events</router-link>
  <router-link class="route" to="/rendering">ConditionalRendering</router-link>
  <router-link class="route" to="/list">List Rendering</router-link>
  <router-link class="route" to="/template">TemplateSyntax</router-link>
  <router-link class="route" to="/demodata">DemoData</router-link>
  <router-link class="route" to="/states">StateManagement</router-link>
  <router-link class="route" to="/computed">ComputedProperties</router-link>
  <router-link class="route" to="/watcher">Watchers</router-link>

  <div>
    <router-view></router-view>
  </div>


  <!-- <p>FirstName is: {{ variables.fname }}</p>
  <p>LastName is: {{ variables.lname }}</p> -->

  
  <!-- <EventHandling @some-event.once="message"/> -->
  <!-- <EventHandling @increase-by="increase"/> -->



  <!-- <VueHooks />
  <EventHandling />
  <ConditionalRendering/>
  <ComputedProperties />
  <VueWatchers />
  <ListRenderingVue/>
  <StateManagement/>
  <DemoData/>
  <TemplateSyntax /> -->


 

  <!-- <div :class="[activeClass , errorClass]">
    Static Div
  </div> -->

  <!-- <div class="static" :class="{ active:isActive , 'text-danger':hasError }">
    Static Div
  </div> -->
</template>

<style scoped>
 a {
    display: inline-block;
    background-color: black;
    border: solid 1px black;
    color: white;
    padding: 5px;
    margin: 5px;
  }
  a:hover,
  a.router-link-active {
    background-color: rgb(230, 153, 39);
  }
  div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }

h2{
  text-align: center;
}

.route{
  padding: 7px;
  margin: 15px;
  background: lightgray;
  border-radius: 6px;
  text-decoration: none;
  color: rgb(49, 100, 167);
  font-size: 16px;
  font-weight: 600;
  font-family:Arial, Helvetica, sans-serif;
}

.active{
  color: green;
  font-weight: 600;
  font-size: 18px;
}
button{
  background-color: lightgray;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
}

button:hover{
  background-color: rgb(131, 131, 185);
}
</style>