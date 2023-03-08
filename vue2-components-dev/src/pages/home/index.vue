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
        <transition-group name="more" @before-enter="beforeEnter" @enter="enter">
          <RecordItem v-if="show" :data-index="item.id" @extFn="extFn" :state="item.state" :price="item.price" :time="item.time" :key="item.id" v-for="item in recordList" />
        </transition-group> 
      </div>
      <div class="component-item">
        <follow-popup/>
      </div>
      <div class="component-item"></div>
      <div class="component-item"></div>
    </div>
  
  </div>
</template>

<script>
import Bullet from './components/Bullet.vue';
import RedPacket from './components/RedPacket.vue'
import RecordItem from './components/RecordItem.vue'
import FollowPopup from './components/FollowPopup.vue'
export default {
    components: {
      Bullet,
      RedPacket,
      RecordItem,
      FollowPopup
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
        ],
        show:false
      }
    },
    created() {
      console.log(Bullet)
      console.log(RedPacket)
      setTimeout(()=> {
        this.show = true
      })
      
    },
    methods: {
      extFn() {
        alert('调用父组件方法')
      },
      beforeEnter (el) {
         el.style.opacity = 0
      },
      enter (el, done) {
          let delay = el.dataset.index * 100
          console.log(delay)
          setTimeout(()=>{
            el.style.transition = 'opacity 0.3s '
            el.style.opacity = 1
            el.style.animation = 'one-in 0.3s infinite'
            el.style['animation-iteration-count'] = 1
            done()
          }, delay)
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
  overflow: hidden;
  /* animation: ; */
}
@keyframes one-in {
  from {
    margin-top: 50px;
    height: 0%;
    /* transition: all .3s; */
  }
  to {
    margin-top: 0px;
    height: 50px;
    /* transition: all .3s; */
  }
}
</style>