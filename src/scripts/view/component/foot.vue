<template lang="html">
  <div class="m-foot">
      <ul>
          <li class="active">
              <i class="yo-ico">&#xe605;</i>
              <b>首页</b>
          </li>
          <li>
              <i class="yo-ico">&#xe604;</i>
              <b>分类</b>
          </li>
          <li>
              <i class="yo-ico">&#xe611;</i>
              <b>品牌</b>
          </li>
          <li>
              <i class="yo-ico">&#xe60c;</i>
              <b>购物车</b>
          </li>
          <li @click="go_home">
              <i class="yo-ico">&#xe625;</i>
              <b>我的</b>
          </li>
      </ul>
      
  </div>
</template>
<script>
import '../../../media/images/iconfont/iconfont.ttf'
import '../../../media/images/iconfont/iconfont.woff'
export default {
  data() {
    return {
        isfoot : false
    }
  },
  methods : {
      go_home() {
          this.isfoot = true
          console.log(this.isfoot)
      }
  }
}
</script>


