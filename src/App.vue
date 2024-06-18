<script setup>
  // import { computed, ref } from 'vue';
  // import LifeCycleHooks from './components/LifeCycleHooks.vue';
  // import TemplateSyntax from './components/TemplateSyntax.vue'
  // import DemoData from './components/DemoData.vue';
  // import StateManagement from './components/StateManagement.vue';
  // import ConditionalRendering from './components/ConditionalRendering.vue';
  // import ListRenderingVue from './components/ListRendering.vue';
  // import VueHooks from './components/VueHooks.vue';
  // import EventHandling from './components/EventHandling.vue';
  // import ComputedProperties from './components/ComputedProperties.vue';
  import VueWatchers from './components/VueWatchers.vue';
  

  // const activeClass = ref('active');
  // const errorClass = ref('text-danger');

  // const isActive = ref(true);
  // const hasError = ref(true);


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

</script>

<template>

  <ListRenderingVue />
  <VueHooks />
  <!-- <EventHandling @some-event.once="message"/> -->
  <!-- <EventHandling @increase-by="increase"/> -->
  <EventHandling />
  <ComputedProperties />
  <VueWatchers />

  <!-- <div :class="[activeClass , errorClass]">
    Static Div
  </div> -->

  <!-- <div class="static" :class="{ active:isActive , 'text-danger':hasError }">
    Static Div
  </div> -->

  <!-- <div :class="classObject">
    Static Div
  </div> -->

    <!-- <LifeCycleHooks /> -->
    <!-- <DemoData/> -->
    <!-- <TemplateSyntax /> -->
   

  <!-- <StateManagement class="baz"/>
  <ConditionalRendering /> -->



</template>

<style>

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