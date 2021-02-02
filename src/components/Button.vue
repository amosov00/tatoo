<template>
<div>
  <button class="btn" :style="`background-color: ${background}; color: ${color}`">
    <slot>
    </slot>
  </button>
</div>
</template>

<script>
export default {
  name: "Button",
  props: {
    background: {
      default: 'white',
      type: String
    },
    color: {
      default: 'black',
      type: String
    }
  },
}
</script>

<style scoped>
 .btn {
   display: block;
   font-size: 20px;
   border: 2px solid black;
   padding: 10px 20px;
   border-radius: 20px;
   margin: 10px;
   cursor: pointer;
 }
</style>
