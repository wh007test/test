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
    width (420 / 2.56)px
    height (42 / 2.56)px
    background #fff url(../../../../public/images/timeline.jpg) no-repeat center 4px
    background-size (405/ 2.56)px (22 / 2.56)px
    position absolute
    top (28 / 2.56)px
    right (68 / 2.56)px
    border-top-left-radius (40/ 2.56)px !important
    border-top-right-radius (40/ 2.56)px !important
    .time
        line-height @height
        font-size (14 / 2.56)px
        font-weight bold
    .m
        line-height @height
        font-size (14 / 2.56)px
        font-weight bold
</style>
