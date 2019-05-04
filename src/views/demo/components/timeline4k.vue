<template>
    <div class="timeline">
        <span class="time">{{time}}</span>
        <span class="m">{{timeType}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time: '',
            timeType: 'AM'
        }
    },
    watch: {
        time(val) {
            console.log(val)
            console.log(val.split(':')[0])
            if(val.split(':')[0] > 11) {
                this.timeType = 'PM'
            }else {
                this.timeType = 'AM'
            }
        }
    },
    mounted() {
        this.getTime()
        setInterval(() => {
            this.getTime()
        }, 1000)
    },
    methods: {
        getTime() {
            let date = new Date()
            this.time = this.tran(date.getHours()) + ':' + this.tran(date.getMinutes())
        },
        tran(t) {
            return t < 10 ? '0' + t: t
        }
    }
}
</script>
<style lang="stylus" scoped>
.timeline
    width 440px
    height 44px
    background #fff url(../../../../public/images/timeline.jpg) no-repeat center 4px
    background-size 405px 22px
    position absolute
    top  18px
    right 68px
    border-top-left-radius 40px !important
    border-top-right-radius 40px !important
    .time
        line-height @height
        font-size 14px
        font-weight bold
    .m
        line-height @height
        font-size 14px
        font-weight bold
</style>
