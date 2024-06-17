<script setup>
  import { reactive, ref, warn } from 'vue';

  const awesome = ref(true);

  const grades = reactive({
    type:'Z'
  })
  const ok = ref(true)

  const doThis = () => {
    return alert("Do-ThIS Task")
  }

  function onPageDown(){
    alert('Hiiii')
  }

  function doSomething(){
    alert('do something')
  }
</script>

<template>
  <div>
    <h3 v-if="awesome">Vue.js is Awesome!!!</h3>
    <h3 v-else>Some Error Occured...</h3>

    <button @click="awesome = !awesome">Toggle</button>

    <p v-if="grades.type === 'A'">A</p>
    <p v-else-if="grades.type === 'B'">B</p>
    <p v-else-if="grades.type === 'C'">C</p>
    <p v-else>Not any of A/B/C</p>
  </div>

  <template v-if="ok">
    <h3>Title</h3>  
    <p>Paragraph-1</p>
    <p>Paragraph-2</p>
  </template>

  <button @click="ok = !ok">Toggle Template</button>

  <h2 v-show="!ok">!-! Hello !-!</h2>

  <br> <br>

  <!-- <button @click="warn(`form can not be Submitted yet..` , $event)">Submit</button> -->
  <button @click="(event) =>warn(`!!form can not be Submitted yet!!` , event)">Submit</button>

  <a @click="doThis">Do-This</a>

  <input @keyup.enter="submit" />

  <br><br>

  <input @keyup.page-down="onPageDown" />

  <br><br>

<button @click.ctrl="onClick">A</button>
<button @click.once="doThis">ONCE</button>


<!-- Alt + Enter -->
<!-- <input @keyup.alt.enter="doSomething"  placeholder="alt + Enter"/> -->
<input @click.alt="doSomething"  placeholder="alt + Enter"/>

<!-- Ctrl + Click -->
<!-- <div @click.ctrl="doSomething">Do something</div> -->


</template>


<style>

</style>