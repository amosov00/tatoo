<template>
  <div id="app">
    <t-header></t-header>
    <router-view/>
    <t-not v-if="error" class="erroe">{{error}}</t-not>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Notify from "@/components/Notify";
export default {
  components: {
    't-header': Header,
    't-not': Notify
  },
  computed: {
    error() {
      return this.$store.state.error
    }
  }
}
</script>
<style scoped>
.erroe {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
</style>

