<script setup>
  // import { ref } from 'vue';
  import { computed, reactive, ref } from 'vue';

  // const parentMsg = ref('Parent');
  // const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

  // V-for in objects
  const myObject = reactive({
  Title: 'How to do lists in Vue',
  Author: 'Jane Doe',
  PublishedAt: '2016-04-10'
})



// function showData(){
//   items.value.forEach((element , index) => {
//     // console.log(element.message)
//     // console.log(`${parentMsg.value} - ${index+1} - ${element.message} `) 
//     return (`${parentMsg.value} - ${index+1} - ${element.message} `) 
//   });
// }
  

const numbers = ref([1 , 2 , 3, 4, 5 , 6])

const evenNumber = computed(() => {
  return numbers.value.filter((n) => n % 2 == 0)
});

const sets = ref([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10]);

function oddArr(numbers){
  return numbers.filter((n) => n % 2 === 1)
}

</script>

<template>
  <div>

    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="n in oddArr(numbers)" :key="n">{{ n }}</li> 
    </ul>


    <p>Even Numbers are: {{ evenNumber }}</p>
    <p>Odd Numbers are: {{ oddArr(sets) }}</p>
    <li v-for="n in evenNumber" :key="n">{{ n }}</li>
    
    <ul v-for="item in myObject" :key="item">
      <li v-if="(item )"> {{ item }}</li>



<!-- V-for in ( ref ) -->
      <!-- <li v-for="{ message } in items" :key="message">{{ message }}</li> -->
      <!-- <li v-for="({ message } , index) in items" :key="message">{{ index+1 }} {{ message }}</li> -->

      <!-- <li v-for="item in items" :key="item">
  <span v-for="childItem in item" :key="childItem">
    {{ childItem }} {{ item.message }} 
  </span>
</li> -->

<!-- <li v-for="(item , index) of items" :key="item">{{ (index+1) + "." + (item.message) }}</li> -->

      <!-- <li v-for="(item , index) in items" :key="item">{{ parentMsg + "-" +  (index + 1) + '. ' +  item.message }}</li> -->



      <!-- V-for in Objects -->
      <!-- <li v-for="data in myObject" :key="data"> {{ data }} </li> -->
      <!-- <li v-for="(data , key) in myObject" :key="data">  {{ key }}: {{ data }} </li> -->
      <!-- <li v-for="(data , key, index) in myObject" :key="data"> {{ index + 1 }}. {{ key }}: {{ data }} </li> -->

      <!-- v-for in/with range -->
      <!-- <li v-for="(n) in 10" :key="n">{{ n }}</li> -->

    </ul>
  </div>
</template>

<style scoped>
  *{
    font-weight: 500;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>