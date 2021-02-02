<template>
<div>
  <p>Вы успешно прошли регистрацию!</p>
  <router-link tag="a" :to="{name: 'Login'}">Перейти на страницу авторизации</router-link>
</div>
</template>

<script>
export default {
  name: "Success"
}
</script>

<style scoped>
div {
  padding-top: 120px;
  text-align: center;
  font-size: 40px;
}

</style>
