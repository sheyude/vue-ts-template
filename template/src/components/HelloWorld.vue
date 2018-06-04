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
import RC from '@/components/testrender.ts'
import TestMixin from '../mixins/test-mixin'
import { Getter } from 'vuex-class'

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

  mounted () {

  }

  onClick () {
    this.text = !this.text
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
