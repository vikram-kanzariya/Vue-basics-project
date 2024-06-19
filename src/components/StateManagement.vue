<script setup>
  import { ref , reactive } from 'vue';

  const stores = reactive({ 
    counter : 0 , 
    
     add(){
      this.counter += 5;
    }
  });

  // State
  const count = ref(0)

  // Action
  function increment(){
    count.value++;
  }

  const users = ref(['Vikram' , 'Aashish' , 'Axay']);
  const newUser = ref(['abhishek' , 'hardik' , 'virat']);


  function addUser(){
   newUser.value.forEach((element) => {
    users.value.push(element)
   });
  }

  const styleObject = reactive({
    color:'blue',
    fontSize:'20px',
    border:'1px solid black',
    boxSize:'border-box',
    width:'180px',
    padding:'10px',
    fontWeight:'600',
    borderRadius:"4px"
  });

  const baseClass = ref('baseClass')
</script>

<template>
  <div>
    <h3>Count is: {{ count }}</h3> 
    <button @click="increment">Increment</button>

    <h3>Users are: {{ users }}</h3>
    <button @click="addUser">Add USer</button>
    <!-- <button @click="users.push('Rohit')">Add USer</button> -->
    <!-- <button @click="users.push(newuser) ">Add USer</button> -->

    <p v-for="(user , index) in users" :key="user"> {{ (index + 1) + '. ' + user  }} </p>

    <p>Stored reactive Counter is: {{ stores.counter }}</p>
    <!-- <button @click="stores.counter+=5">Add by-5</button> -->
    <button  @click="stores.add">Add by-5</button>


  <p :class="$attrs.class">Hi!</p>
  <span>This is a Child Component</span>

  <p v-bind:style="styleObject">This is Style Objects</p>
  <p :class="baseClass">This is Base Paragraph</p>


  <!-- Takes the Last Value defined in array which the Browser Supports -->
  <p :style="{ color:['red', 'green' , 'blue' ] }">Display Properies</p>

  </div>
</template>

<style>
  .baseClass{
    color: green;
  }
</style>