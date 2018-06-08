let urlBase:any

declare var process: any;
// 线上生产环境
if(process.env.NODE_EVENT == 'prod'){
  if(process.env.NODE_LANG == 'en'){
    // 线上生产环境 国外
    urlBase = "https://merculet-mgnt.merculet.io"
  }else{
    // 线上生产环境 国内
    urlBase = "https://mb-mgnt.magicwindow.cn"
  }
}else{
  // 测试版或者开发板
  if(process.env.NODE_LANG == 'en'){
    urlBase = "http://merculet-mgnt.liaoyantech.cn"
  }else{
    urlBase = "http://merculet-mgnt-cn.liaoyantech.cn"
  }
}

export {
    urlBase,
}