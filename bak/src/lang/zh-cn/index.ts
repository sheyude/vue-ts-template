import main from './main.yaml'


// 语言模块
let objects = {
  main,
}

let object = {};
Object.keys(objects).forEach((key) => {
  object = Object.assign(object, objects[key])
})

export default object