<script setup>
  import { onBeforeMount, onBeforeUpdate, onMounted , onUnmounted, onUpdated, ref } from 'vue';
  const count = ref(0);
  const isDisable = ref(false);


  onBeforeMount(() => {
      console.log('onBeforeMount Called')
    })

  onMounted(() => {
    console.log(`Component is Mounted(created): ${count.value}`)
  });


  onBeforeUpdate(() => {
    console.log(`Before Update Called`)
  });

  onUpdated(() => {
    console.log(`onUpdate called; ${count.value}`)
  })

  onUnmounted(() => {
    console.log(`Component UnMounted`)
  })

 
  

</script>

<template>
  <div>
    <button @click="count++">Increment: {{ count }}</button>
    
    <button v-if="isDisable = !isDisable">Disable it</button>
  </div>
</template>

<style scoped>

</style>