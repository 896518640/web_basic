<template>
  <div class="follow-popup">
        <div class="popup-content">
            <div class="popup">
                <header class="popup-header">
                    <p>关注「轻松青年」公众号</p>
                    <p>提现立即到账</p>
                </header>
                <main class="popup-main">
                    <img src="../images/qr.png" alt="">
                </main>
                <footer class="popup-footer">
                    <img src="../images/follow.png" alt="">
                </footer>
            </div>
            <div class="close-btx">x</div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.follow-popup {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    .popup-content {
        width: 620px;
        height: 836px;
        position: relative;
    }

    .popup {
        width: 620px;
        height: 748px;
        background-image: linear-gradient(137deg, #FBEFEF 0%, #FBECEC 100%);
        border-radius: 40px;
        background: #fafafa;
        padding: 40px 46px 45px;
        box-sizing: border-box;
    }

    .close-btx {
        position: absolute;
        bottom: 0;
        left:50%;
        width: 48px;
        height: 48px;
        transform: translateX(-50%);
        border: 3px solid #979797;
        border-radius: 50%;
        color: #979797;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .popup-header p{
        font-family: PingFangSC-Medium;
        font-size: 48px;
        color: #850800;
        letter-spacing: 0;
        line-height: 48px;
        margin-bottom: 24px;
        text-align: center;
    }
    .popup-main {
        img {
             width: 396px;
             height: 396px;
             display: block;
             margin:  0 auto;
        }
    }
    .popup-footer {
        img {
            width: 278px;
            height: 67px;
            display: block;
            margin:  0 auto;
        }
    }
}
</style>