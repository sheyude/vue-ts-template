<script lang="tsx">
import Vue, {CreateElement} from 'vue'
import { Component } from 'vue-property-decorator'
// tsx先不做支持

@Component({})
export default class JsxItem extends Vue {
  // render (h:CreateElement) {
  //   return (
  //     <div on-click={this.ee}>这条是jsx</div>
  //   )
  // }
  ee () {
    console.log('test')
  }
}
</script>
