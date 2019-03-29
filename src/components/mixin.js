export const Mixin = {
  data () {
    return {
      testNum: 1
    }
  },
  created () {
  },
  methods: {
    deepCopy (obj) { // 深拷贝对象
      let _obj = Array.isArray(obj) ? [] : {}
      for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (typeof obj[i] === 'object') {
            _obj[i] = this.deepCopy(obj[i])
          } else {
            _obj[i] = obj[i]
          }
        }
      }
      return _obj
    },
    testMethod () {
      this.testNum++
      console.log(this.testNum)
    }
  }
}
