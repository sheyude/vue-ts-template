<template>
  <div class="hello">
    <mu-button color="primary">Primary</mu-button>
    <p>mixin 数据 ：</p>
    <p>store 数据 ：</p>
    <RC></RC>
    <p @click="onClick">点我查看更多</p>
    <h1 v-if="text">我是更多内容</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RC from '../components/testrender'
import TestMixin from '../mixins/test-mixin'
import { Getter } from 'vuex-class'
import Api from '../api/index'
@Component({
  components: {
    RC
  },
  mixins: [TestMixin]
})
export default class HelloWorld extends Vue {
  @Getter info: any

  msg: string = 'Vue-Typescript'
  text: Boolean = false

  async created () {
    let data = await Api.sign()
    console.log(data)
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

