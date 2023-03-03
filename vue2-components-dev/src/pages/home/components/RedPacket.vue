<template>
  <div class="packet-container" v-if="loaded">
    <section class="wrapper">
        <header class="title">
            <img :class="{logo:true,hit:modelMap[model].hit }" :src="modelMap[model].title" alt="">
        </header>

        <main class="packet-main">

            <div class="outline-box">
                <img class="outline" src="../images/light.png" alt="">
            </div>

            <div class="packet-box" >
                <template v-if="modelMap[model].hit">
                    <img class="packet" src="../images/packet_suc.png" alt="">
                    <div class="price-text">{{ drawing ? drawNumber : amount }}</div>
                    <div class="time-text  hit">好礼第二重（{{count}}）</div>
                </template>
                <template v-else>
                    <img class="packet" src="../images/packet_err.png" alt="">
                    <div class="time-text">为家人贴心守护（{{count}}）</div>
                </template>
            </div>

            <footer class="button">{{ modelMap[model].hit ? '立即提现': '返回继续添加守护人'}}</footer>
        </main>
    </section>
  </div>
</template>
<script>
import img_su from '../images/s_success.png'
import img_al from '../images/s_already.png'
import img_am from '../images/s_amountlimit.png'
import img_nu from '../images/s_numberlimit.png'
export default {
    props: {
        // 红包类型 控制页面样式
        model: {
            type: String,
            required: true
        },
        // 是否存在价值险 控制跳转链接
        insureState: {
            type: Boolean,
            required: true
        },
        // 中奖金额
        amount: {
            type: Number,
            required: false,
            default: 0.00
        }
    },
    data(){
        return {
            loaded: false,
            count: 3,
            drawing: true,
            drawNumber: 3.88,
            modelMap: {
                success: {
                    title: img_su,
                    hit: true
                },
                already: {
                    title: img_al
                },
                amountLimit: {
                    title: img_am
                },
                numberLimit: {
                    title: img_nu
                }
            }
        }
    },
    created() {
        this.loadConfig()
    },
    methods:{
        // 初始化配置
        loadConfig() {
            this.loaded = false
            if(this.modelMap[this.model].hit) {
                // 中奖啦
                this.loaded = true
                this.triggerDraw()
                this.triggerTimer()
            }else {
                // 未中奖
                this.loaded = true
                this.triggerTimer()
            }
        },
        //抽奖
        triggerDraw() {
            this.drawing = true
            let idx =0
            let minTimer = null
            let timer = null

            const toDraw = function() {
                minTimer = setInterval(()=> {
                    console.log('drawing')
                    this.drawNumber = (Math.random()*10).toFixed(2)
                }, 50)
            }
            const endDraw = function() {
                console.log('end draw')
                timer && clearInterval(timer)
                minTimer && clearInterval(minTimer)
                this.drawing = false
            }
        
            setTimeout(()=> {
               console.log('start draw')
               toDraw.call(this,idx++)
               timer = setInterval(() => {
                  if(idx>=1) {
                      endDraw.call(this)
                      return
                  }
            },1000)
            })
        },
        //跳转
        triggerJump(state) {
            const url = {
                true: ' https://m.qsebao.com/zbb/addInsuredPage?from=adMessageNew',
                false: 'https://m.qsebao.com/cbb/landpage?scene_name=pingan-accident-gift-lewuyou-new-yb-land-page&sku_name=pingan-accident-gift-lewuyou'
            }
            console.log('即将跳转',url[state])
            // window.location.href = url[state]
        },
        //设置定时
        triggerTimer() {
            let timer = setInterval(()=> {
                if(this.count<=0) {
                    timer && clearInterval(timer)
                    this.triggerJump(this.insureState)     
                    return
                }
                this.count--
            },1000)
        }
    }
}
</script>
<style scoped lang="less">
.packet-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 1000px;
}
.wrapper {
    // width: 500px;
    height: 750px;
}
.packet-main {
    width: 675px;
    height: 675px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: -55px auto 0;
    animation: fade-in .8s ease-in-out;
    transition: transform 1s;
    .outline-box {
        width: 675px;
        height: 675px;
        display: block;
        position: absolute;
        animation: light2run 3s steps(200,start) infinite ;
        transform: all .3s;
        img.outline{
            width: 675px;
            height: 675px;
            display: block;
        }
    }
    .packet-box {
        position: absolute;
        width: 500px;
        height: 490px;
        display: block;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        img.packet{
            width: 500px;
            height: 490px;
            display: block;
        }
        .price-text {
            font-family: PingFangSC-Semibold;
            font-size: 100px;
            color: #FC3C2A;
            text-align: center;
            line-height: 100px;
            position: absolute;
            top: 115px;
            left: 122px;
            transition: all 1s ease-in-out;
        }
        .time-text {
            font-family: Helvetica;
            font-size: 40px;
            color: #FFFFFF;
            letter-spacing: -1px;
            width: 356px;
            height: 48px;
            white-space: nowrap;
            line-height: 48px;
            text-shadow: 0 3px 1px rgba(181,0,0,0.52);
            position: absolute;
            left: 72px;
            bottom: 95px;
            cursor: pointer;
            &.hit {
                width: 278px;
                height: 48px;
                left: 111px;
                bottom: 95px;
            }
        }
    }
}
.button {
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #FFFAE1;
    text-align: center;
    position: absolute;
    border-bottom: 1px solid #fffae1;
    bottom: 0px;
    cursor: pointer;
}
@keyframes fade-in {
    0% {
        transform: scale(.5);
    }
    100% {
        transform: scale(1)
    }
}
@keyframes light2run {
    0%{
        transform: rotate(0deg) scale(.9);
        opacity: 0;
    }
    20%{
        transform: rotate(36deg) scale(.9);
        opacity: 0;
    }
    40%{
        transform: rotate(72deg)  scale(1);
        opacity: 1;
    }
    60%{
        transform: rotate(108deg) scale(.9);
        opacity: 0;
    }
    80%{
        transform: rotate(144deg) scale(1);
        opacity: 1;
    }
    100% {
        transform: rotate(180deg) scale(.9);
        opacity: 0;
    }
}
.logo {
    width: 535px;
    height: 113px;
    display: block;
    margin: 0 auto;
    &.hit {
        width: 388px;
        
    }
}
</style>