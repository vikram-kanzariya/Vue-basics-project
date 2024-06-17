<script setup>
  import { computed, ref } from 'vue';
  // import LifeCycleHooks from './components/LifeCycleHooks.vue';
  // import TemplateSyntax from './components/TemplateSyntax.vue'
  // import DemoData from './components/DemoData.vue';
  import StateManagement from './components/StateManagement.vue';
  import ConditionalRendering from './components/ConditionalRendering.vue';
  
  let multiply = ref(1);
  let i=1;
  function multiplication(){
    ++i;
    multiply.value = multiply.value * i;
    return multiply.value;
  }

  // const activeClass = ref('active');
  // const errorClass = ref('text-danger');

  // const isActive = ref(true);
  // const hasError = ref(true);


  const isActive = ref(true);
  const error = ref(null);

  const classObject = computed(() => ({
    
    active:isActive.value && !error.value ,
    'text-danger' : error.value&& error.value.type === 'fatal',
  }
  ));

</script>

<template>

  <!-- <div :class="[activeClass , errorClass]">
    Static Div
  </div> -->

  <!-- <div class="static" :class="{ active:isActive , 'text-danger':hasError }">
    Static Div
  </div> -->

  <div :class="classObject">
    Static Div
  </div>
    <!-- <LifeCycleHooks /> -->
    <!-- <DemoData/> -->
    <!-- <TemplateSyntax /> -->
    <h4>Hello Every-One</h4>
    <button @click="multiplication">Click for Multiplying:  {{ multiply }}</button>


  <StateManagement class="baz"/>
  <ConditionalRendering />



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