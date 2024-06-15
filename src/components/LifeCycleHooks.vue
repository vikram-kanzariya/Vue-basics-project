<!----- This is Composition APIs ----->
<script setup>
import { ref , onMounted, onUpdated, onUnmounted } from 'vue';

// Reactive State
const count = ref(0);

// Functions that Mutate state and Trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  count.value 
  console.log(`The initial count is: ${count.value}.`);
});

let name = ref("");
let address = ref("");

onUpdated(() => {
  console.log(`Current Count is: ${count.value}`)
  console.log(`Name Changed: ${name.value}`)
  console.log(`Address Changed: ${address.value}`)
});

let intervalId;
onMounted(() => {
  intervalId.setInterval(() => {
    console.log("Hello World")
  }, 2000);
});

onUnmounted(() => {
  clearInterval(intervalId);
})

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
  <h3>Name is: {{ name }}</h3>
  <h3>Address is: {{ address }}</h3>

  <button @click="name=`Vikram`">Name</button>
  <button @click="address=`Ahmedabad`">Address</button>

  <br><br>

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