
// 让ts识别.vue文件
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
// 让ts识别.yaml文件
declare module "*.yaml" {
    
}
