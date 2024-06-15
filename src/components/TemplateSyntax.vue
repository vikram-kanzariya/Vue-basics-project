<template>
  <div>
    <div v-bind:id="demo">This is Template Syntax</div>
    <button :disabled="isDisable" >Click Button</button>
  </div>

  <div v-bind:="objectAttr">This is Object Array</div>
</template>

<style>
  
</style>
  #container{
    background-color:blue;
  }


<script >
export default{
  data(){
   return {
     isDisable:false,
     objectAttr : {
       id:'container',
       class:'demoClass',
       style:'color:black; background-color:gray'
     }
   }  
 },

}
</script>

