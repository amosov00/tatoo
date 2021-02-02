<template>
  <div class="header">
    <router-link
        tag="img"
        :to="{name: 'Home'}"
        :src="require('@/assets/3681956.png')"
        alt="logo"
        class="img"
    >
    </router-link>
    <ul class="menu">
      <li v-for="i of menu">
        <router-link tag="a" :to="i.to" class="link">{{i.name}}</router-link>
      </li>
    </ul>
    <div class="buttons">
      <t-spinner v-if="isAuth === 'loading'"></t-spinner>
      <t-menu v-else-if="isAuth"></t-menu>
      <div class="buttons" v-else>
        <router-link :to="{name: 'Login'}" tag="div">
          <t-btn background="red" color="white">Войти</t-btn>
        </router-link>
        <router-link :to="{name: 'Registration'}" tag="div">
          <t-btn background="#f0f1f4" color="black">Регистраця</t-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Menu from "@/components/Menu";
export default {
  name: "Header.vue",
  components: {
    't-btn': Button,
    't-menu': Menu
  },
  data: () => ({
    menu: [
      {
        name: 'Catalog',
        to: {
          name: 'Catalog'
        }
      },
    ]
  }),
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    }
  },
  async created() {
    await this.$store.dispatch('check')
  }
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: black solid 1px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  .img {
    width: 150px;
    display: block;
    cursor: pointer;
  }
  .menu {
    display: flex;
    li {
      list-style: none;
      margin: 0 40px;
      font-size: 25px;
      font-family: 'Lobster', cursive;
      .link {
        text-decoration: none;
        color: black;
      }
    }
  }
  .buttons {
    margin-left: auto;
    margin-right: 0;
    display: flex;
    align-items: center;
  }
}

</style>
