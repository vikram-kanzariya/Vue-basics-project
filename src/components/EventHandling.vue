<script setup>
import { ref } from 'vue';

  function clieckMe(){
    alert("You Clicked Button")
  }
  const count = ref(0);

  const manyFoods = ref( [
          {name: 'Burrito', city:'Ahmedabad'},
          {name: 'Salad', city: 'Rajkot'},
          {name: 'Cake', city: 'Mumbai'},
          {name: 'Soup', city: 'Delhi'}
        ])


// function someEvent(){
//   console.log('Click Evnet is Called')
// }

function helloMessage(name){
  return alert(`Hello, ${name}`);
}

function onceAlert(){
  alert("Alert created from button click")
}

let keyValue = ref("");

function keysAndValue(e){
  
  keyValue.value = e.key;
  console.log(e.key)
}

function alertMessage(){
  alert('You Pressed `V` Key ')
}

function doThat(){
  alert('Do That')
}
function doThis(){
  alert('Do This Task')
}
function onScroll(){
  alert('Scroll Event Triggred')
}
function submit(){
  alert('You Pressed Enter')
}
function onPageDown(){
  alert('You Pressed PageDown Key')
}
// function clear(){
//   alert('You Pressed Alt+Enter Key')
// }
function clickCtrl(){
  alert('You Pressed click+Ctrl Key')
}
</script>

<template>
  <div>

    <!-- Exact Key Event Listener -->
    <input @click.ctrl.exact="clickCtrl" placeholder="exact click + Ctrl"/>
    <input @click.left="clickCtrl" placeholder="Mouse Left"/>
    <input @click.right="clickCtrl" placeholder="Mouse Right"/>
    <input @click.middle="clickCtrl" placeholder="Mouse Middle"/>
    <!-- <input @click.exact="clickCtrl" placeholder="exact click + Ctrl"/> -->


    <!-- <input @keyup.alt.enter="clear" placeholder="Alt+Enter"/> -->
    <input @click.ctrl="clickCtrl" placeholder="click + Ctrl"/>

    <!-- only call `submit` when the `key` is `Enter` -->
<input @keyup.enter="submit" placeholder="press Enter-key"/>
<!-- <input @keyup.enter.once ="submit" placeholder="press Enter-key"/> -->

<!-- Esc , down , up , left , right , delete/backspace , Enter , pageDown/up , tab , space-->
<!-- <input @keyup.delete="onPageDown" placeholder="PageDown key"/> -->
<input @keyup.page-down="onPageDown" placeholder="PageDown key"/>

    <div class="self" @click.self="doThat">
      <p>hello</p>
      <p>All</p>
      <p>How Are You ?</p>
    </div>

    <div class="this" @click.capture="doThis">
      <p>hello</p>
      <p>Do this Task</p>
      <p>How Are You ?</p>
    </div>

    <div class="scroll" @scroll.passive="onScroll">
      <p>hello</p>
      <p>Do Scrolling in Y Direction</p>
    </div>

    <input type="text" @keydown="keysAndValue">
    <p>Key Value is: {{ keyValue }}</p>

    <input type="text" @keyup.v="alertMessage" placeholder="press (V) on keyboard">

    <button @click="helloMessage(`Alpesh`)">Alert </button>

    <br><br>
    <button @click.once="onceAlert">Once click</button>

    <button @click="clieckMe">click me</button>

    <p>{{ 'Input events occured: ' + count }}</p>
    <input type="text" @input="count++">


    <!-- Use v-on in a v-for Loop -->
    <ol>
      <li v-for="(item) in manyFoods" :key="item">{{ item.name }}: {{ item.city }}</li>
    </ol>
    

    <!-- Custom Event Name == someEvent -->
   <button @click="$emit('someEvent')">Click Button</button>

   <!-- <p>Increased Count is: {{ count }}</p> -->
   <button @click="$emit('increaseBy')">Increase</button>
  </div>
</template>

<style scoped>

input{
  margin: 10px;
  gap: 10px;
}
   .position{
    height: 100px;
    width: 100px;
    border: 1px solid black;
    text-align: center;
  }

  .self{
    border: 1px solid black;
    background-color: lightgray;
    height: 150px;
    width: 100px;
    text-align: center;
    padding: 7px;
    margin: 15px;
    box-sizing: border-box;
  }
  .this{
    border: 1px solid black;
    background-color: lightgray;
    height: 150px;
    width: 100px;
    text-align: center;
    padding: 7px;
    margin: 15px;
    box-sizing: border-box;
  }
  .scroll{
    border: 1px solid black;
    background-color: lightgray;
    height: 100px;
    width: 100px;
    text-align: center;
    padding: 7px;
    margin: 15px;
    box-sizing: border-box;
    overflow: auto;
  }

  .self p{ 
    border:  1px solid black;
   }
</style>