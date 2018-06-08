
class StorageService {

    store = window.sessionStorage;
    /**
     * 设置 localStorage
     * @param value 需要存的值
     * @param key 需要存key名字
     */
    set(key: string, value: any) {
      try {
        // 把里面的值转换成json对象
        value = JSON.stringify(value);
      } catch (e) {
        // 抛出一个错误
        value = value;
      }
  
      this.store.setItem(key, value);
  
    }
  
    /**
     * 获取 localStorage
     * @param key 需要获取的key
     *  return 返回value
     */
    get(key: string) {
      let value = this.store.getItem(key);
      if (value) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          value = value;
        }
      }
      return value;
    }
  
    /**
     *  删除 localStorage
     * @param key 需要删除是key
     */
    remove(key:string) {
      this.store.removeItem(key);
    }
  
    clear() {
      this.store.clear();
    }
  }
  export default new StorageService()