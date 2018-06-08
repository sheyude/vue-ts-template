
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class renderItem extends Vue {
    render(createElement:any){
        return createElement(
            'p',
            '这条数据来自于render'
        )
    }
}