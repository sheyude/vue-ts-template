import main from './main.yaml'


// 语言模块
let objects:any = {
  main,
}

let object:any = {};
Object.keys(objects).forEach((key) => {
  object = Object.assign(object, objects[key])
})

export default object