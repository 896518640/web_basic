<template>
  <div class="packet-container">
    <div class="wrapper">
        <div class="title">
            添加守护人
        </div>
        <div class="packet">
            <img src="../images/大红包.png" alt="">
        </div>
        <div class="button">立即提现</div>
    </div>
  </div>
</template>

<script>
export default {

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
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper {
    width: 500px;
    height: 750px;
}
.packet {
    width: 500px;
    height: 490px;
    img {
        width: 500px;
        height: 490px;
        display: block;
    }
}
</style>