<template>
  <div class="cont">
    <div class="stick"></div>
    <h1>Новый аккаунт</h1>
    <h3>У вас уже есть аккаунт? <router-link tag="a" :to="{name: 'Login'}">Войти</router-link></h3>
    <div class="flex">
      <section class="inputsection">
          <t-input type="text" placeholder="Логин" v-model="login"></t-input>
          <t-input type="email" placeholder="Почта" v-model="email"></t-input>
          <t-input type="password" placeholder="Пароль" v-model="pass"></t-input>
        <div class="flex">
          <t-btn @click.native="reg">Создать аккаунт</t-btn>
          <t-spinner v-if="loading"></t-spinner>
        </div>
      </section>
      <div style="width: 300px"></div>
      <section class="socialsection">
        <div class="wrap" @click="redirect('https://www.instagram.com/')">
          <div>
            <img :src="require('@/assets/inast.png')" alt="inst">
          </div>
          <p>Регистрация через Instagram</p>
        </div>
        <div class="wrap" @click="redirect('https://vk.com/')">
          <div>
            <img :src="require('@/assets/1024px-Vk_Logo.svg.png')" alt="vk">
          </div>
          <p>Регистрация через Вконтакте</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Registration",
  data() {
    return {
      login: '',
      pass:'',
      email: '',
      loading: false
    }
  },
  components: {
    't-btn': Button
  },
  computed: {
    data() {
      return this.$store.state.data
    }
  },
  methods: {
    redirect(herf) {
      window.location.href = herf
    },
    async reg() {
      this.loading = true
      await this.$store.dispatch('auth', {
        login: this.login,
        password: this.pass,
        email: this.email
      })
      this.loading = false
      if (this.data.isSuccees) {
        await this.$router.replace({name: 'Success'})
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
