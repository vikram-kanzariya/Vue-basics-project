<!----- This is Composition APIs ----->
<script setup>
import { ref , onMounted } from 'vue';

// Reactive State
const count = ref(0);

// Functions that Mutate state and Trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is: ${count.value}.`)
});

let number = ref(0);

let Arrays = {
  id:'red',
  class:'blue',
  style:'color:blue'
}

function incr(){
  return number.value += 5;
}

let ok = true;

let msg = "vikram";
let id= "Data"
let dates = new Date();
let url = "https://www.w3schools.com/vue/vue_v-bind.php";

function popUp(){
  alert("BTN is This")
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>

  <p v-bind="Arrays">Number is: {{ number }}</p>
  <button @click="incr">Click Here</button>
  <p>{{ ok ? 'YES' : 'NO' }}</p>
  <p>{{ msg.split('').reverse().join('') }}</p>
  <p :id="`list-${id}`">Id is: {{ id }}</p>
  <p> {{ a = 150 }}</p>
  <p v-if="ok">`The Message is: {{ msg }}`</p>
  <p>{{ dates.toISOString() }}</p>

  <a v-bind:href="url">Click here</a>
  <button @click="popUp">Button-1</button>
</template>