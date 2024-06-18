<script setup>
import { computed, reactive, ref } from 'vue';
  const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
});

const now = computed(() => new Date().toString().split(' ')[4])

const fname = ref('john');
const lname = ref('doe');

// return fname.value + " " + lname.value;
const fullName = computed({
  get(){
    return fname.value + ' ' + lname.value;
  },

  set(newValue){
    [fname.value , lname.value] = newValue.split(' ');
  }
})


// Using Computed Property
const publishedBookMessage = computed(() => {
  return author.books.length > 0 ? "YES" : "NO";
})
</script>

<template>
  <div>
  
    <p>has Author Published any Books?: 
      <!-- <span>{{ author.books.length > 0 ? "YES" : "NO" }}</span> -->

      <!-- Using Computed Property -->
      <span>{{ publishedBookMessage }}</span>
      <br><br>
      <span>{{ now }}</span>
    </p>
    <!-- <span>{{ author.books }}</span> -->

    <p>FirstName is: {{ fname }}</p>
    <p>LastName is: {{ lname }}</p>
    <p>FullName is: {{ fullName }}</p>

    <h3>FullName is: {{ fullName }}</h3>
   
  </div>
</template>

<style scoped>

</style>