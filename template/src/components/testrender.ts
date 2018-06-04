

import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class FilterItem extends Vue {
    name:'RC'
    render(createElement){
        return createElement(
            'p',
            '这条数据来自于render'
        )
    }
}