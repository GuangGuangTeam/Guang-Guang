<template>
    <div class="m-main">
        <Carousel></Carousel>
        <div>
            <ul class="menu">
                <li>
                    <img src="../../../media/images/menu/m1.png"/>
                    <span>女装</span>
                </li>
                <li>
                    <img src="../../../media/images/menu/m2.png"/>
                    <span>男装</span>
                </li>
                <li>
                    <img src="../../../media/images/menu/m3.png"/>
                    <span>艺术品</span>
                </li>
                <li>
                    <img src="../../../media/images/menu/m4.png"/>
                    <span>饰品</span>
                </li>
                <li>
                    <img src="../../../media/images/menu/m5.png"/>
                    <span>商务合作</span>
                </li>
                <li>
                    <img src="../../../media/images/menu/m6.png"/>
                    <span>精美鞋靴</span>
                </li>
                <li>
                    <img src="../../../media/images/menu/m7.png"/>
                    <span>关于我们</span>
                </li>
                <li>
                    <img src="../../../media/images/menu/m8.png"/>
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
            <img src="../../../media/images/ad1.jpeg"/>
        </div>
        <div class="content">
            <p><img src="../../../media/images/t1.png"/></p>
            <ul>
                <li>
                    <img src="../../../media/images/c1.jpeg"/>
                </li>
                <li>
                    <img src="../../../media/images/c2.jpeg"/>
                </li>
                <li>
                    <img src="../../../media/images/c3.jpeg"/>
                </li>
                <li>
                    <img src="../../../media/images/c4.jpeg"/>
                </li>
            </ul>
        </div>
        <MainClassify></MainClassify>
        <ProductsList></ProductsList>
    </div>
</template>
<script>
import Carousel from '../component/carousel.vue'
import ProductsList from '../component/products-list.vue'
import MainClassify from '../component/main-classify.vue'

import '../../../media/images/menu/m1.png'
import '../../../media/images/menu/m2.png'
import '../../../media/images/menu/m3.png'
import '../../../media/images/menu/m4.png'
import '../../../media/images/menu/m5.png'
import '../../../media/images/menu/m6.png'
import '../../../media/images/menu/m7.png'
import '../../../media/images/menu/m8.png'

import '../../../media/images/ad1.jpeg'
import '../../../media/images/c1.jpeg'
import '../../../media/images/c2.jpeg'
import '../../../media/images/c3.jpeg'
import '../../../media/images/c4.jpeg'
import '../../../media/images/t1.png'
export default {
  data() {
      return {

      }
  },
  components: {
      MainClassify : MainClassify,
      Carousel: Carousel,
      ProductsList: ProductsList,
  }
}
</script>

