<!-- This Uses Options APIS -->

<template>
  <div>
    <p>Hello Wolrd , I am {{ message }}</p>

    <p v-if="typeWriterCount > 3">In Full Stock</p>
    <p v-else-if="typeWriterCount > 0">Very few Left In Stock</p>
    <p v-else>Typewriter is Not Available</p>
    
    <p v-if="text.includes('auta')">Text Includes the given Word</p>
    <p v-else>Text does Not Include the given Word</p>

    <div v-show="showDiv">This div will be Hidden if Condition is False </div>

    <ol>
      <li v-for="x in manyfood" :key="x">{{  x }}</li>
    </ol>

    <p v-show="lightOn">Hello Light Box</p>
    <button v-on:click="lightOn =! lightOn">Switch Light</button>

    <input type="text" v-on:input="inputcount++">
    <p>The Counts of Inputs are: {{ inputcount }}</p>

    <div class="position" v-on:mousemove="mousePos">
      <span>xPos is: {{ xpos }} <br> yPos is: {{ ypos }}</span>
    </div>

  </div>
</template>


<style>
  .position{
    height: 100px;
    width: 100px;
    border: 1px solid black;
    text-align: center;
  }
</style>

<script>

  export default{
    data(){
        return {
          message:"Vikram Kanzariya",
          typeWriterCount:0,
          text:"This is Random auto generated text...",
          showDiv:true,
          manyfood:['Apple' , 'Banana' , 'Orange' , 'WaterMelon'],
          count:0,
          lightOn:false,
          inputcount:0,
          xpos:0,
          ypos:0
        }
      },
      methods:{
        mousePos(event){
          this.xpos = event.offsetX
          this.ypos = event.offsetY
        }
      }
    }
</script>