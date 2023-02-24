<template>
    <div class="bullets-container">
        <div ref="bullets" class="wrapper">
            <div v-for="(item,index) in items" :key="index" class="bullet-screen">
                <div class="screen">
                  恭喜 <span class="name">{{ item.name }}</span> 获得 {{ item.price }}元现金红包
                </div>
            </div>
        </div>
    </div>
  </template>
  <script>
  export default {
    data() {
        return {
            items: [
              {
                name: '张三',
                price: '0.88'
              }, 
              {
                name: '春暖花开sdahjahdjkassadhkashdjkashdkjahskjdah',
                price: '8.88'
              },
              {
                name: '起风了',
                price: '6.88'
              },
              {
                name: '枭雄',
                price: '5.88'
              },
              {
                name: 'wang总',
                price: '3.88'
              },
              {
                name: 'asd',
                price: '2.88'
              },
              {
                name: '一生平安',
                price: '1.88'
              },
            ],
            timer: null
        };
    },
    mounted() {
      this.bulletHell();
    },
    destroyed() {
      clearInterval(this.timer)
    },
    methods: {
      // 发射弹幕
      bulletHell() {
            const duration = 2; // 单位 s
            let bullets = this.$refs.bullets.childNodes;
            let index = 0
            let scrollLen = 0
            
            const toOpacity = function (dom1,dom2) {
              Array.from(bullets).forEach(dom=> {
                    dom.classList.remove('opacity-1')
                    dom.classList.remove('opacity-2')
              })
                  dom1.classList.toggle('opacity-1')
                  dom2.classList.toggle('opacity-2')
            }
  
            const scrollOnce = function (index) {
              scrollLen = index* 58
  
              Array.from(bullets).forEach((bullet)=> {
                bullet.style.transform = `translateY(-${scrollLen/32}rem)`
              })
              toOpacity(bullets[index],bullets[index+1])
            };
  
            scrollOnce(index++)
            this.timer = setInterval(()=> {
              if(index >= bullets.length-2) {
                scrollLen=0
                index=0
              }
              scrollOnce.call(this,index++)
            }, duration*2000)
        },
    },
  };
  </script>
  <style scoped>
  .bullets-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    max-width: 418px;
    max-height: 174px;
    overflow: hidden;
  }
  .bullet-screen {
    /* width: auto; */
    max-width: fit-content;
    height: 48px;
    background: #ddd;
    margin-bottom: 10px;
    transition: all .6s ease-in-out;
    background-image: linear-gradient(180deg, #EA0D00 50%, rgba(241,81,44,0.36) 100%);
    box-shadow: inset 0 0 6px 0 #E31300;
    border-radius: 30px;
    padding: 0px 20px;
    box-sizing: border-box;
  }
  .screen {
    transition: transform 1s;
    font-family: PingFangSC-Regular;
    text-align: center;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 48px;
    display: flex;
    height: 48px;
    white-space: nowrap;
  }
  .name {
    max-width: 180px;
    height: 48px;
    line-height: 48px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0 10px;
  }
  .opacity-1{
    opacity: .2;
  }
  .opacity-2{
    opacity: .7;
  }
  </style>
  