
// 让ts识别.vue文件
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
// 让ts识别.yaml文件
declare module "*.yaml" {
    
}

// 坑爹muse-ui 没有类型定义文件
// 自己定义一个
declare module 'muse-ui' {
    export const Alert: any
    export const AppBar: any
    export const AutoComplete: any
    export const Avatar: any
    export const Badge: any
    export const BottomNav: any
    export const BottomSheet: any
    export const Breadcrumbs: any
    export const Button: any
    export const Card: any
    export const Checkbox: any
    export const Chip: any
    export const DateInput: any
    export const DataTable: any
    export const Dialog: any
    export const Divider: any
    export const Drawer: any
    export const ExpansionPanel: any
    export const Form: any
    export const Grid: any
    export const GridList: any
    export const Helpers: any
    export const Icon: any
    export const List: any
    export const LoadMore: any
    export const Menu: any
    export const Pagination: any
    export const Paper: any
    export const Picker: any
    export const Popover: any
    export const Progress: any
    export const Radio: any
    export const Select: any
    export const SlidePicker: any
    export const Slider: any
    export const Snackbar: any
    export const Stepper: any
    export const SubHeader: any
    export const Switch: any
    export const Tabs: any
    export const TextField: any
    export const Tooltip: any
  }

declare var require:any
