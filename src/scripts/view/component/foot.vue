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
<style lang="scss">
@charset "UTF-8";
@import '../../../styles/app.scss';
@import '../../../styles/modules/commen.scss';
  .m-foot{
      height: .44rem;
      background: #fff;
      ul{
          @include border(1px 0 0 0);
          @include flexbox();
          @include align-items();
          height: 100%;
          li{
              @include flex();
              @include flexbox();
              
              @include flex-direction(column);
              @include justify-content();
              @include align-items();
              i{
                  font-weight: 100;
                  font-size: 0.18rem;
              }
              b{
              font-weight: 300;
              font-size: 0.1rem;
              }
              &.active b,&.active i{
                  color: #f02a41;
              }
          }
      }
  }
</style>

