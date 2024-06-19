<script setup>
import { ref, watch , watchEffect } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// watch works directly on a ref
watch(question  , async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})


let rangeVal = ref(100);
watch(rangeVal , function(){
  console.log("watcher is Called")
  if(rangeVal.value > 20 && rangeVal.value < 60){
    if(rangeVal.value < 40){
      return rangeVal.value = 20;
    }
    else{
      return rangeVal.value = 60;
    }
  }
});

let inputAddress = ref("");
let outputText = ref("");
let myClass = 'invalid';

watch(inputAddress , (newVal , oldVal) => {
  console.log("Watcher is Called :) :)")

  console.log("New Value: " , newVal);
  console.log("Old Value: " , oldVal);

  if(!newVal.includes('@')){
    outputText.value ='The Email is Invalid';
    myClass = 'invalid'
  }
  else if(!oldVal.includes('@') && newVal.includes('@')){
    outputText.value = 'You have Fixed the Issue :) :)';
    myClass = 'valid'
  }
  else{
    outputText.value = 'The e-mail address is valid :) :)';
  }
});


  const todoId = ref(1)
  const data = ref(null)

  watch(
    todoId,
    async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
      )
      data.value = await response.json()
      console.log(data.value)
    },
    // { immediate: true , flush:'post' , once:true  }
  );


watchEffect(() => {
  if (data.value) {
    // do something when data is loaded
    console.log(data.value)
  }
})

  

</script>

<template>

  <button @click="todoId++">ToDo: {{ todoId }}</button>

<div>
  <label for="">  
    <p>Type a valid e-mail address:</p>
    <input v-model="inputAddress" type="" />
  </label>
  <p :class="myClass">{{ outputText }}</p>

</div>

  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>


  <input v-model="rangeVal" type='range' />
  <p>Range is: {{ rangeVal }}</p>

</template>

<style>
.invalid{
  color: red;
}

.valid{
  color: green;
}
</style>