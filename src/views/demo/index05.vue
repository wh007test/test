<template>
    <div class="wrap">
        <div class="left">
            <timeline/>
        </div>
        <div class="iframe1">
            <iframe :src="src1" name="iframe1" frameborder="0" width="438" height="877" border="0" scrolling="no"></iframe>
        </div>        
        <div class="middle">
            <timeline/>
        </div>
        <div class="iframe2">
            <iframe :src="src2" name="iframe2" frameborder="0" width="438" height="877" border="0" scrolling="no"></iframe>
        </div>
        
        <div class="right">
            <timeline/>
        </div>
        <div class="iframe3">
            <iframe :src="src3" name="iframe3" frameborder="0" width="438" height="877" border="0" scrolling="yes"></iframe>
        </div>

    </div>
</template>
<script>
    import timeline from './components/timeline4k'

    export default {
        components: {timeline},
        data() {
            return {
                src1: 'http://tdnow.show.tdlink.com.cn',
                src2: 'http://td-tv.tdlink.com.cn/version2/#/',
                src3: 'http://tdnow.show.tdlink.com.cn',
                /*iframe1Name: 'iframe1',
                iframe2Name: 'iframe2',
                iframe3Name: 'iframe3'*/
            }
        },
        mounted() {
            /*test2
			let body = document.querySelector('body')
            let widthScale = 0.21
            let width = body.clientWidth * widthScale
            let iframe1 = document.getElementsByName('iframe1')[0]
            iframe1.setAttribute('width', width)*/
        },
        methods: {
        }
    }
</script>
<style lang="stylus" scoped>
    .wrap
        height 100vh
        background url(../../../public/images/right4k/bg.jpg) no-repeat 0 0
        background-size 100% 100%
        overflow hidden
        position relative
        .left
            width 1077px
            height 1146px
            background url(../../../public/images/right4k/1L.png) no-repeat 0 0
            background-size 100% 100%
            position absolute
            left 400 px
            top 600 px
            .timeline
                right 112 px
        .iframe1
            position absolute
            top 661 px
            left 925 px
            background #fff
            overflow hidden
            border-bottom-left-radius 40px !important
            border-bottom-right-radius 40px !important;
        .middle
            width 666 px
            height 1170 px
            background url(../../../public/images/right4k/M.png) no-repeat 0 0
            background-size 100% 100%
            position absolute
            left 1600 px
            top 520 px
            .timeline
                right 112 px        
        .iframe2
            position absolute
            top 582 px
            left 1716 px
            background #fff
            overflow hidden
            border-bottom-left-radius 40px !important
            border-bottom-right-radius 40px !important;
        .right
            width 1077 px
            height 1146 px
            background url(../../../public/images/right4k/1R.png) no-repeat 0 0
            background-size 100% 100%
            position absolute
            left 2390 px
            top 600 px
            .timeline
                right 524 px        
        .iframe3
            position absolute
            top 661 px
            left 2505 px
            background #fff
            overflow hidden
            border-bottom-left-radius 40px !important
            border-bottom-right-radius 40px !important;
</style>
