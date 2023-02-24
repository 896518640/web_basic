<template>
  <div class="app-content">
    <div class="component-container">
      <div class="component-item">
        <Bullet></Bullet>
      </div>
      <div class="component-item">
        <RedPacket model="already" :insureState="true" :amount="8.88"></RedPacket>
      </div>
      <div class="component-item"></div>
      <div class="component-item"></div>
      <div class="component-item"></div>
      <div class="component-item"></div>
    </div>
  
  </div>
</template>

<script>
import Bullet from './components/Bullet.vue';
import RedPacket from './components/RedPacket.vue'
export default {
components: {
  Bullet,
  RedPacket
},
created() {
  console.log(Bullet)
  console.log(RedPacket)
}
}
</script>

<style>
.component-container {
  display: flex;
  width:100%;
  height: 100%;
  flex-wrap: wrap;
}
.component-item {
  flex: 0 0 33%;
  height: 1000px;
  border: 1px solid #ddd;
  position: relative;
}
</style>