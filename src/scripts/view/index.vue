<template lang="html">
    <div class="m-index">
        <Top></Top>
        <section>
            <Carousel></Carousel>
            <div>
                <ul class="menu">
                    <li>
                        <img src="../../media/images/menu/m1.png"/>
                        <span>女装</span>
                    </li>
                    <li>
                        <img src="../../media/images/menu/m2.png"/>
                        <span>男装</span>
                    </li>
                    <li>
                        <img src="../../media/images/menu/m3.png"/>
                        <span>艺术品</span>
                    </li>
                    <li>
                        <img src="../../media/images/menu/m4.png"/>
                        <span>饰品</span>
                    </li>
                    <li>
                        <img src="../../media/images/menu/m5.png"/>
                        <span>商务合作</span>
                    </li>
                    <li>
                        <img src="../../media/images/menu/m6.png"/>
                        <span>精美鞋靴</span>
                    </li>
                    <li>
                        <img src="../../media/images/menu/m7.png"/>
                        <span>关于我们</span>
                    </li>
                    <li>
                        <img src="../../media/images/menu/m8.png"/>
                        <span>生活家居</span>
                    </li>
                </ul>
            </div>
            <div class="ad">
                <span>逛逛·热点</span>
                <div class="swiper-container-ad">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><b class="hot">HOT</b>透闪石决定和田玉质量</div>
                        <div class="swiper-slide"><b class="hot">HOT</b>玉器的几种修复方法</div>
                        <div class="swiper-slide"><b class="hot">HOT</b>和田玉与佛文化</div>
                        <div class="swiper-slide"><b class="hot">HOT</b>玉镯的开光</div>
                    </div>
                </div>
            </div>
            <div class="ad-img">
                <img src="../../media/images/ad1.jpeg"/>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <img src="../../media/images/c1.jpeg"/>
                    </li>
                    <li>
                        <img src="../../media/images/c2.jpeg"/>
                    </li>
                    <li>
                        <img src="../../media/images/c3.jpeg"/>
                    </li>
                    <li>
                        <img src="../../media/images/c4.jpeg"/>
                    </li>
                </ul>
            </div>
            <MainClassify></MainClassify>
            <ProductsList></ProductsList>
        </section>
        <Foot></Foot>
    </div>
</template>
<script>
import MainClassify from './component/main-classify.vue'
import Top from './component/top.vue'
import Foot from './component/foot.vue'
import Carousel from './component/carousel.vue'
import ProductsList from './component/products-list.vue'

import Home from '../../scripts/view/home/home.vue'
import Classify from '../../scripts/view/classify/classify.vue'

import '../../media/images/menu/m1.png'
import '../../media/images/menu/m2.png'
import '../../media/images/menu/m3.png'
import '../../media/images/menu/m4.png'
import '../../media/images/menu/m5.png'
import '../../media/images/menu/m6.png'
import '../../media/images/menu/m7.png'
import '../../media/images/menu/m8.png'

import '../../media/images/ad1.jpeg'
import '../../media/images/c1.jpeg'
import '../../media/images/c2.jpeg'
import '../../media/images/c3.jpeg'
import '../../media/images/c4.jpeg'
export default {
  data() {
    return {
      ismain : true,
      isClassify : false,
      isHome : false

    }
  },
  methods : {

  },
  
  components: {
      MainClassify : MainClassify,
      Home : Home,
      Top : Top,
      Foot :Foot,
      Carousel: Carousel,
      ProductsList: ProductsList,
      Classify
  }
}
</script>
<style lang="scss">
@charset "UTF-8";
@import '../../styles/app.scss';
@import '../../styles/modules/commen.scss';
.m-index{
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
    background: $base-color;
    section{
        @include flex();
        width: 100%;
        // overflow: hidden;
        overflow-y: scroll;
        ul.menu{
            width: 100%;
            height: 1.2rem;
            background: $base-color;
            @include flexbox();
            @include align-items();
            @include flex-wrap(wrap);
            padding: 0.05rem 0;
            @include border(0 0 1px 0);
            li{
                width: 25%;
                height: 0.56rem;
                
                @include flexbox();
                @include flex-direction(column);
                @include justify-content();
                @include align-items();
                img{
                    width: 0.35rem;
                    height: 0.35rem;
                }
                span{
                font-weight: 400;
                font-size: 0.09rem;
                }
            }
        }
        .ad{
            padding: .05rem 0.2rem;
            @include flexbox();
            span{
                display: inline-block;
                width: 0.6rem;
                height: 0.13rem;
                @include border(0 1px 0 0);
                font-size: 0.1rem;
                line-height: .13rem;
                color: #e4393c;
            }
            .swiper-container-ad{
                @include flex();
                height: .13rem;
                overflow: hidden;
                .swiper-wrapper{
                    height: .13rem;
                    .swiper-slide{
                        height: .2rem;
                        line-height: 0rem;
                        font-size: 0.1rem;
                        padding:0 .1rem;

                        .hot{
                            display: inline-block;
                            width: .34rem;
                            height: .16rem;
                            color: $base-color;
                            line-height: .13rem;
                            text-align: center;
                            background: #e4393c;
                            margin-right: .1rem;
                        }
                    }
                }
            }
        }
        .ad-img{
            width: 100%;
            height: 1.14rem;
            img{
                width: 100%;
            }
        }
        .content{
            width: 100%;
            height: 2.1rem;
            padding: .1rem;
            background: #fe319f;
            ul{
                width: 100%;
                height: 1.9rem;
                background: $base-color;
                @include flexbox();
                @include align-items();
                @include flex-wrap(wrap);
                
                li{
                    width: 50%;
                    height: 0.95rem;
                    @include flexbox();
                    @include flex-direction(column);
                    @include justify-content();
                    @include align-items();
                    @include border(0 0 1px 1px);
                    img{
                        width: 1.41rem;
                        height: 0.77rem;
                    }
                    &:nth-child(2n-1){
                        @include border(0 0 1px 0);
                    }
                    &:nth-child(3){
                        @include border(0 0 0 0);
                    }
                    &:nth-child(4){
                        @include border(0 0 0 1px);
                    }
                }
            }
        }
    }
}

</style>

