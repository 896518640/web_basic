<template>
    <div class="app-wrapper" @click="onTriggerUrl">
        <div class="main-content">
            <div class="close-btn" @click.stop="onClose">
                <img src="./images/close-btn.png" alt="" />
            </div>
            <div class="user-info">
                <div class="avatar">
                    <img src="" class="avatar" alt="" />
                </div>
                <div class="user-name text">一生平安</div>
            </div>
            <img src="./images/packetAct.gif" alt="" />
            <div class="partake">
                <span class="text">同地区用户</span>
                <div class="partake-avatar">
                    <img src="" class="avatar" alt="" />
                    <img src="" class="avatar" alt="" />
                    <img src="" class="avatar" alt="" />
                </div>
                <span class="text">已参与</span>
            </div>
        </div>
    </div>
</template>
<script>
import { utils } from '@/library';
export default {
    props: {},
    data() {
        return {
            returnUrl: 'https://www.baidu.com',
            shakeEvent: null,
            index: null,
        };
    },
    created() {
        this.addShake(() => {
            alert('您进行了摇一摇操作99999s');
        });
    },
    unmounted() {
        this.removeShake();
    },
    methods: {
        loadConfig() {
            let Agent = navigator.userAgent;
            let isIphone = !!Agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (isIphone) {
                this.getPermission();
            } else {
                this.handler();
            }
        },
        addShake(cb) {
            const maxRange = 40; //当用户两次加速度差值大于这个幅度 判定用户进行了摇一摇功能
            const minRange = 20; //当用户两次加速度差值小于这个幅度 判定用户停止摇动手机
            let isShake = false; //表示用户是否摇了
            let lastX = 0;
            let lastY = 0;
            let lastZ = 0;
            let toShake = function (e) {
                let motion = e.acceleration;
                let { x, y, z } = motion;
                let range =
                    Math.abs(x - lastX) +
                    Math.abs(y - lastY) +
                    Math.abs(z - lastZ);
                if (range > maxRange) {
                    isShake = true;
                }
                if (range < minRange && isShake) {
                    cb(e);
                    isShake = false;
                }
                lastX = x;
                lastY = y;
                lastZ = z;
            };
            toShake = utils.throttle(toShake, 1000, { closeToast: true });
            // if (!this.shakeEvent) {
            this.shakeEvent = toShake;
            // }
            // this.shakeEvent.push(toShake)
            this.setDeviceMotion(toShake);
            // return this.shakeEvent.length - 1
        },
        removeShake() {
            window.removeEventListener('devicemotion', this.shakeEvent);
        },
        setDeviceMotion(cb) {
            if (!window.DeviceMotionEvent) {
                alert('设备不支持DeviceMotion');
                return;
            }

            if (typeof DeviceMotionEvent.requestPermission === 'function') {
                // IOS 13 设备
                DeviceMotionEvent.requestPermission()
                    .then((per) => {
                        if (per === 'granted') {
                            this.removeShake();
                            window.addEventListener('devicemotion', cb);
                        }
                    })
                    .catch((e) => {});
            } else {
                // 其他支持加速度检测的系统
                let timer = setTimeout(function () {
                    alert('用户未开启权限');
                }, 1000);
                window.addEventListener(
                    'devicemotion',
                    (e) => {
                        clearTimeout(timer);
                    },
                    { once: true },
                );
                window.addEventListener('devicemotion', cb);
            }
        },
        handler() {
            if (window.DeviceMotionEvent) {
                let i = 0;
                window.addEventListener(
                    'devicemotion',
                    () => {
                        alert(i++);
                    },
                    false,
                );
            } else {
                alert('该浏览器暂不支持摇一摇功能');
            }
        },
        onClose() {
            this.$emit('update:show', false);
        },
        onTriggerUrl() {
            this.index = this.addShake(() => {
                alert('您进行了摇一摇操作');
            });
            console.log('即将跳转', this.returnUrl);
        },
    },
};
</script>

<style lang="less">
.app-wrapper {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    .main-content {
        width: 612px;
        height: 880px;
        position: relative;
        > img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .close-btn {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 32px;
        height: 32px;
        img {
            display: block;
            width: 32px;
            height: 32px;
        }
    }
    .user-info {
        position: absolute;
        top: 88px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    }

    .partake {
        position: absolute;
        bottom: 144px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
    }
    .text {
        font-family: Helvetica;
        font-size: 25px;
        color: #feeace;
        letter-spacing: 0;
        line-height: 40px;
    }

    .partake-avatar {
        display: flex;
    }

    .avatar {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
</style>
