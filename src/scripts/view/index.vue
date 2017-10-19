<template lang="html">
  <div class="m-index" v-if="ismain">
      <Top></Top>
      <Carousel></Carousel>
      <div class="menu">图标</div>
      <div class="ad">广告</div>
      <div class="banner"><img/></div>
      <MainClassify></MainClassify>
      <ProductsList></ProductsList>
      <Foot></Foot>
  </div>
  <div class="m-index" v-else-if="isHome">
      <Home></Home>
  </div>
  <div class="m-index" v-else-if="isClassify">
      <Classify></Classify>
  </div>
</template>
<script>
import MainClassify from './component/main-classify.vue'
import Top from './component/top.vue'
import Foot from './component/foot.vue'
import Carousel from './component/carousel.vue'
import ProductsList from './component/products-list.vue'

import '../../media/images/iconfont/iconfont.ttf'
import '../../media/images/iconfont/iconfont.woff'

import Home from '../../scripts/view/home/home.vue'
import Classify from '../../scripts/view/classify/classify.vue'
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

// export default Main_vue;

</script>
<style lang="scss">
@charset "UTF-8";
@import '../../styles/app.scss';
@import '../../styles/modules/commen.scss';

</style>

