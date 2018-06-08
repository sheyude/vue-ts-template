<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>mixin 数据 ：{{ testMixinArg }}</p>
    <p>store 数据 ：{{ info.data }}</p>
    <JSXRC></JSXRC>
    <RC></RC>
    <p @click="onClick">点我查看更多</p>
    <h1 v-if="text">我是更多内容</h1>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import JSXRC from '@/components/renderComponent.vue'
import RC from '../components/testrender'
import TestMixin from '../mixins/test-mixin'
import { Getter } from 'vuex-class'
import Api from '../api/index'
@Component({
  components: {
    JSXRC,
    RC
  },
  mixins: [TestMixin]
})
export default class HelloWorld extends Vue {
  @Getter info

  msg: string = 'Vue-Typescript'
  text: Boolean = false

  async created () {
    let data = await Api.sign()
    console.log(data)
  }

  mounted () {

  }

  onClick () {
    this.text = !this.text
  }
}
</script>

<style lang="less" scoped>
  .hello{
    font-size: 16px;
    h1{
      color: red;
    }
  }
</style>

