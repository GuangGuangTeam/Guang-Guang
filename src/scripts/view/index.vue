<template lang="html">
    <div class="m-index">
        <Top></Top>
        <section>
            <router-view></router-view>
        </section>
        <Foot></Foot>
    </div>
</template>
<script>

import Top from './component/top.vue'
import Foot from './component/foot.vue'
import MainCont from './main/main.vue'



export default {
  data() {
    return {

    }
  },
  methods : {

  },
  
  components: {
      MainCont : MainCont,
      Top : Top,
      Foot :Foot,
  }
}
</script>

