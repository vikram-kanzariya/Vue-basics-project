<script setup>
  import { ref } from 'vue';
  import AddCounter from './components/AddCounter.vue';
  // import TemplateSyntax from './components/TemplateSyntax.vue'
  // import DemoData from './components/DemoData.vue';
  
  let multiply = ref(1);
  let i=1;
  function multiplication(){
    ++i;
    multiply.value = multiply.value * i;
    return multiply.value;
  }

</script>

<template>
    <DemoData/>
    <h4>Hello Every-One</h4>
    <button @click="multiplication">Click for Multiplying:  {{ multiply }}</button>
    <TemplateSyntax />

    <AddCounter />


</template>

<style>
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