<template>
  <div>
    <div class="label" @mouseover="visible = true" @mouseleave="visible = false">
      <img :src="require('@/assets/pHoK71gq95c.jpg')" alt="profile_photo">
      <div class="sticks">
        <div class="stick"></div>
        <div class="stick"></div>
        <div class="stick"></div>
      </div>
      <div class="middleware" v-if="visible"></div>
      <ul class="list" v-if="visible">
        <li>Сообщения</li>
        <li>Уведомления</li>
        <li>Понравившиеся</li>
        <li>Поддержка</li>
        <li>Выйти</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Menu",
  data: ()=>({
    visible: false
  })
}
</script>

<style scoped lang="scss">

.label {
  width: 80px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f0f1f4;
  position: relative;
  cursor: pointer;
}
.sticks {
 margin-right: 10px;
}
.stick {
  width: 25px;
  height: 3px;
  margin: 7px 0;
  background-color: gray;
  border-radius: 50px;
}

[alt="profile_photo"] {
  margin-left: 5px;
  display: block;
  width: 25px;
  border-radius: 70px;
}

.label:hover {
  background-color: beige;
}

.list {
  width: 220px;
  border: 2px solid black;
  position: absolute;
  right: -1px;
  top: 56px;
  padding: 0;
  border-radius: 20px;
  background-color: white;
  li {
    list-style: none;
    text-align: center;
    border: 1px solid gray;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    padding: 10px;
  }
  li:first-child {
    border-bottom: 1px solid gray;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  li:last-child {
    border-top: 1px solid gray;
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  li:hover {
    background-color: beige;
  }
}

.middleware {
  position: absolute;
  width: 80px;
  height: 180px;
  top: -3px;
  right: -1px;
}

</style>
