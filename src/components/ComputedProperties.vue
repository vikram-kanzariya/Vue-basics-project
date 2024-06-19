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

const fname = ref('Vikram');
const lname = ref('Kanzariya');

// let fullN = computed(() => {
//   return fname.value + " " + author.books[0]
// })

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

let fullN = computed(() => {
  return fname.value + ' ' + author.books
});

// let fullN = () => {
//   return fname.value + ' ' + author.books
// };

const firstQty = ref(0);
const secondQty = ref(0);

const totalCost = ref(0);

const firstPrice = ref(100);
const secondPrice = ref(50);

const addFirst = () => {
  totalCost.value += firstPrice.value;
  firstQty.value++
}
const removeFirst = () => {
  if(firstQty.value > 0){
    totalCost.value -= firstPrice.value;
    firstQty.value--;
  }
}

const addSecond = () => {
  totalCost.value += secondPrice.value;
  secondQty.value++;
}
const removeSecond = () => {
  if(secondQty.value > 0){
    totalCost.value -= secondPrice.value;
    secondQty.value--;
  }
}
const cssObject = reactive({
    fontSize:'20px',
    class:'cssObject',
    id:'uniqueid',
    color:'blue'
  });
</script>

<template>

  <h4 :style="cssObject">CssObject for H4</h4>

  <div class="one">
    <p>Item:1</p>
    <p>Quantity:</p>
    <p>Price:</p>

    <button @click="addFirst">ADD</button>
    <button @click="removeFirst">Remove</button>
  </div>

  <div class="two">
    <p>Item:2</p>
    <p>Quantity:</p>
    <p>Price:</p>

    <button @click="addSecond">ADD</button>
    <button @click="removeSecond">Remove</button>
  </div>

  <span>Total is: {{ totalCost }}</span>

  <p v-if="totalCost >= 500"> (:   You have Got a Discount Coupon :)</p>

  <div>
    <span>FullN is: {{ fullN }}</span>
  
    <p>has Author Published any Books?: 
      <!-- <span>{{ author.books.length > 0 ? "YES" : "NO" }}</span> -->

      <!-- Using Computed Property -->
      <span>{{ publishedBookMessage }}</span>
      <br><br>
    </p>
    <!-- <span>{{ author.books }}</span> -->

    <p>FirstName is: {{ fname }}</p>
    <p>LastName is: {{ lname }}</p>
    <p>FullName is: {{ fullName }}</p>   
  </div>
</template>

<style scoped>

</style>