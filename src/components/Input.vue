<template>
<div>
  <input :type="type" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
</div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      default: 'text',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>
  input {
    display: block;
    width: 100%;
    height: 40px;
    font-size: 20px;
    margin: 20px 0;
    border-bottom: 2px solid gray;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
    background: transparent;
  }
  input:focus {
    border-bottom: 2px solid black;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
    outline: transparent;
  }
</style>
