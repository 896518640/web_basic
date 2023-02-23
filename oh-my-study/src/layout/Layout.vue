<template>
    <div className="layout-container">
        <div className="layout-header">
            <div class="left">
                <div class="logo">学海无涯</div>
            </div>
            <div class="right">
                <div class="menu-container">
                    <div class="menu-item">
                        <router-link to="home"> 首页 </router-link>
                    </div>
                    <div class="menu-item">
                        <a-switch
                            v-model:checked="themeValue.theme"
                            checked-value="dark"
                            un-checked-value="light"
                            @change="changeTheme"
                        >
                            <template #checkedChildren>
                                <svg
                                    t="1675935793040"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="2679"
                                >
                                    <path
                                        d="M524.490551 1023.43355c-140.102939 0-271.81403-54.547017-370.878782-153.611769S0 639.045939 0 498.943c0-115.183242 36.995772-223.867918 106.944903-314.336142a523.825343 523.825343 0 0 1 119.276826-112.266563A533.035909 533.035909 0 0 1 376.55863 1.11192a25.584905 25.584905 0 0 1 30.036679 36.228225c-33.004527 64.320451-48.35547 125.621883-48.355471 193.012523 0 239.832899 195.110485 434.943383 434.943384 434.943383 67.39064 0 128.692072-15.350943 193.012523-48.35547a25.584905 25.584905 0 0 1 36.228225 30.036678 534.468663 534.468663 0 0 1-71.228375 150.336902 523.825343 523.825343 0 0 1-112.266563 119.276826 509.395457 509.395457 0 0 1-314.336142 106.944903zM336.18565 69.884144C163.538712 143.82452 51.16981 309.819383 51.16981 498.943 51.16981 759.90903 263.524521 972.26374 524.490551 972.26374c189.123617 0 355.11848-112.420072 429.058855-285.01584A451.98293 451.98293 0 0 1 793.132052 716.414691c-129.868977 0-251.908974-50.555772-343.707612-142.354411S307.018859 360.170475 307.018859 230.301498c0-55.109885 9.619924-108.019469 29.166791-160.417354z"
                                        fill="#e6e6e6"
                                        p-id="2680"
                                    ></path>
                                </svg>
                            </template>
                            <template #unCheckedChildren>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    class="sun"
                                >
                                    <path
                                        d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"
                                    ></path>
                                    <path
                                        d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"
                                    ></path>
                                    <path
                                        d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"
                                    ></path>
                                    <path
                                        d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"
                                    ></path>
                                    <path
                                        d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"
                                    ></path>
                                    <path
                                        d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"
                                    ></path>
                                    <path
                                        d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    ></path>
                                    <path
                                        d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"
                                    ></path>
                                    <path
                                        d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"
                                    ></path>
                                </svg>
                            </template>
                        </a-switch>
                    </div>
                    <div class="menu-item">
                        <router-link to="navigation"> 前端导航 </router-link>
                    </div>
                    <div class="menu-item">
                        <router-link to="demo"> 案例 </router-link>
                    </div>
                    <div class="menu-item">
                        <router-link to="study">学习</router-link>
                    </div>
                    <div class="menu-item">心得</div>
                    <div class="menu-item">user</div>
                </div>
            </div>
        </div>
        <div className="layout-main">
            <RouterView />
            <!-- <div className="layout-sidebar">sidebar</div>
            <div className="layout-content">main</div> -->
        </div>
        <div className="layout-footer">footer</div>
    </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useThemeStore } from '@/store/theme';
type themeType = 'dark' | 'light';
const themeValue = useThemeStore();
document.body.classList.toggle(themeValue.theme);

function changeTheme(theme: themeType) {
    console.log('changeTheme', theme);
    if (theme === 'dark') {
        console.log('dark');
        document.body.classList.toggle(theme);
        document.body.classList.remove('light');
        themeValue.updateTheme(theme);
    }
    if (theme === 'light') {
        console.log('pink');
        document.body.classList.toggle(theme);
        document.body.classList.remove('dark');
        themeValue.updateTheme(theme);
    }
}
</script>
<style lang="less">
@import './index.less';
</style>
