<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class JsxItem extends Vue {
  render (h, context) {
    return (
      <div on-click={this.ee}>这条是jsx</div>
    )
  }
  ee () {
    console.log('test')
  }
}
</script>
