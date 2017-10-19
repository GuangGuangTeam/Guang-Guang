<template lang="html">
  <div class="m-top">
      <div class="m-head">
            <h1>
                <a href="#">
                    <img src="../../../media/images/logo.png" alt="">
                </a>
            </h1>
            <input type="text" placeholder="请输入宝贝关键词">
            <i class="yo-ico">&#xe60a;</i>
        </div>
  </div>
</template>
<script>
import '../../../media/images/logo.png'

import '../../../media/images/iconfont/iconfont.ttf'
import '../../../media/images/iconfont/iconfont.woff'
export default {
  data() {
    return {

    }
  },
  methods : {

  }
}
</script>
<style lang="scss">
@charset "UTF-8";
@import '../../../styles/app.scss';
@import '../../../styles/modules/commen.scss';

.m-top{
    height: .38rem;
    background: #fff;
    .m-head{
        @include flexbox();
        @include justify-content(space-between);
        @include align-items();
        padding: 0 0.1rem;
        h1{
            width: 25%;
            height: .38rem;
            @include flexbox();
            @include justify-content();
            
            a{
                display: block;
                height: 100%;
                line-height: .38rem;
                img{
                    width: 100%;
                }
            }
        }
        input{
            width: 65%;
            height: .26rem;
            border: 1px solid #f6f6f6;
            border-radius: 3px;
            padding: 0.05rem;
            font-size: 0.12rem;
            position: relative;
        }
        i{
            position: absolute;
            z-index: 1;
            right: 5%;
            color: #b1b1b1;
        }
    }
}
</style>

