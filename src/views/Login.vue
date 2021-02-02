<template>
<div class="cont">
  <div class="stick"></div>
  <h1>Вход</h1>
  <h3>Ещё нет аккаунта? <router-link tag="a" :to="{name: 'Registration'}">Создать</router-link></h3>
  <div class="flex">
  <section class="inputsection">
      <t-input type="text" placeholder="Логин" v-model="login"></t-input>
      <t-input type="password" placeholder="Пароль" v-model="pass"></t-input>
      <div class="div">
        <input type="checkbox" id="check">
        <label for="check">Запомнить меня</label>
        <a href="#" class="pass">Забыли пароль?</a>
      </div>
    <div class="flex">
      <t-btn @click.native="log">Войти</t-btn>
      <t-spinner v-if="loading"></t-spinner>
    </div>
  </section>
    <div style="width: 300px"></div>
  <section class="socialsection">
    <div class="wrap" @click="redirect('https://www.instagram.com/')">
      <div>
        <img :src="require('@/assets/inast.png')" alt="inst">
      </div>
      <p>Продолжить с Instagram</p>
    </div>
    <div class="wrap" @click="redirect('https://vk.com/')">
      <div>
        <img :src="require('@/assets/1024px-Vk_Logo.svg.png')" alt="vk">
      </div>
      <p>Продолжить с Вконтакте</p>
    </div>
  </section>
  </div>
</div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Login",
  components: {
    't-btn': Button
  },
  data() {
    return {
      login: '',
      pass: '',
      loading: false
    }
  },
  computed: {
    data() {
      return this.$store.state.data
    },
    state() {
      return this.$store.state
    }
  },
  methods: {
    redirect(herf) {
      window.location.href = herf
    },
    async log() {
      this.loading = true
      await this.$store.dispatch('login', {
        login: this.login,
        password: this.pass,
      })
      this.loading = false
      if (this.data.isSuccees) {
        await this.$router.replace({name: 'Home'})
      }
    }
  }
}
</script>

<style scoped lang="scss">
[type="checkbox"] {
  width: 30px;
  height: 30px;
  display: block;
}
[for="check"] {
  display: block;
  margin-left: 10px;
}
.div {
  display: flex;
  align-items: center;
  margin: 30px 0;
}
h1, h3 {
  text-align: center;
}
.pass {
  margin-left: 180px;
}
.cont {
  padding: 0 30px;
}
a {
  color: blue;
}

.stick {
  background-color: gray;
  width: 3px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
[alt="inst"], [alt="vk"] {
  display: block;
  width: 40px;
}

.wrap {
  display: flex;
  border: 2px solid black;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    margin-left: 30px;
  }
}

.wrap:hover {
  background-color: beige;
}

.flex {
  display: flex;
  align-items: center;
}

.socialsection {
  width: 100%;
}
.inputsection {
  width: 100%;
}
</style>
