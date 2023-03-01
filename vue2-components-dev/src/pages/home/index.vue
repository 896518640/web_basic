<template>
  <div class="app-content">
    <div class="component-container">
      <div class="component-item">
        <Bullet></Bullet>
      </div>
      <div class="component-item">
        <RedPacket model="already" :insureState="true" :amount="8.88"></RedPacket>
      </div>
      <div class="component-item">
        <RecordItem @extFn="extFn" :state="item.state" :price="item.price" :time="item.time" :key="item.id" v-for="item in recordList" />
      </div>
      <div class="component-item"></div>
      <div class="component-item"></div>
      <div class="component-item"></div>
    </div>
  
  </div>
</template>

<script>
import Bullet from './components/Bullet.vue';
import RedPacket from './components/RedPacket.vue'
import RecordItem from './components/RecordItem.vue'
export default {
    components: {
      Bullet,
      RedPacket,
      RecordItem
    },
    data() {
      return {
        recordList: [
          {
            id:1,
            price: 8.88,
            time: '2023.02.16 12:01:40',
            state: false
          },
          {
            id:2,
            price: 1.88,
            time: '2023.02.16 12:01:40',
            state: true
          },
          {
            id:3,
            price: 8.88,
            time: '2023.02.16 12:01:40',
            state: true
          },
          {
            id:4,
            price: 2.88,
            time: '2023.02.16 12:01:40',
            state: false
          }
        ]
      }
    },
    created() {
      console.log(Bullet)
      console.log(RedPacket)
    },
    methods: {
      extFn() {
        alert('调用父组件方法')
      }
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