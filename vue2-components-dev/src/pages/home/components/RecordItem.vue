<template>
  <div class="record-item">
    <div class="item-info">
        <div class="price">{{ price }}</div>
        <div class="time">{{ time }}</div>
    </div>
    <div class="item-state">
        <div class="state-on" v-if='state'>已提现</div>
        <div @click="TriggerCash" class="state-off" v-else>去提现</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        state:{
            type:Boolean,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        time: {
            type: String,
            required: true
        },
    },
    methods: {
        TriggerCash() {
            this.$emit('extFn')
        }
    }
}
</script>

<style lang="less">
.record-item {
    width: 750px;
    height: 50px;
    padding: 40px;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    background: #FFCFBB;
    margin-bottom: 20px;
    .item-info {
        width: 229px;
        height: 72px;
        .price {
            font-family: PingFangSC-Regular;
            font-size: 32px;
            color: #333333;
            letter-spacing: 0;
            line-height: 32px;
            margin-bottom: 16px;
        }
        .time {
            font-family: PingFangSC-Regular;
            font-size: 24px;
            color: #999999;
            letter-spacing: 0;
            line-height: 24px;
        }
    }
    .item-state {
        width: 126px;
        height: 52px;
        padding: 5px 24px 10px;
        text-align: center;
        .state-on {
            background-image: linear-gradient(179deg, #FFFFFF 0%, #D1D1D1 100%);
            border-radius: 24px;
            font-family: PingFangSC-Medium;
            font-size: 26px;
            color: #999999;
            letter-spacing: 0;
            cursor:not-allowed;
            pointer-events:none;
        }
        .state-off {
            background-image: linear-gradient(180deg, #FFCFBB 0%, #FC4817 100%);
            border-radius: 24px;
            font-family: PingFangSC-Medium;
            font-size: 26px;
            color: #FFFFFF;
            letter-spacing: 0;
            box-shadow: 0 10px 20px 5px rgba(0,0,0,.5);
        }
    }
}
</style>