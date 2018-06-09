
declare let process:{
  env:{
    NODE_EVENT:string,
    NODE_LANG:string
  }
};

let urlBase:string
// 线上生产环境
if(process.env.NODE_EVENT == 'prod'){
  if(process.env.NODE_LANG == 'en'){
    // 线上生产环境 国外
    urlBase = ""
  }else{
    // 线上生产环境 国内
    urlBase = ""
  }
}else{
  // 测试版或者开发板
  if(process.env.NODE_LANG == 'en'){
    urlBase = ""
  }else{
    urlBase = ""
  }
}

export {
    urlBase,
}