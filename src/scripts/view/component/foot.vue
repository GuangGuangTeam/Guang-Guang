<template lang="html">
  <div class="m-foot">
      <ul>
          <router-link to="/main" tag='li'>
              <i class="yo-ico">&#xe605;</i>
              <b>首页</b>
          </router-link>
          <router-link to="/classify" tag='li'>
              <i class="yo-ico">&#xe604;</i>
              <b>分类</b>
          </router-link>
          <router-link to="/brand" tag='li'>
              <i class="yo-ico">&#xe611;</i>
              <b>品牌</b>
          </router-link>
          <router-link to="/cart" tag='li'>
              <i class="yo-ico">&#xe60c;</i>
              <b>购物车</b>
          </router-link>
          <router-link to="/home" tag='li'>
              <i class="yo-ico">&#xe625;</i>
              <b>我的</b>
          </router-link>
      </ul>
      
  </div>
</template>
<script>
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


