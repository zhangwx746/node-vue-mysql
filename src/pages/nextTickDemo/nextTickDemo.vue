<template>
  <div>
    <div>在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中</div>
    <div ref="msgDiv">{{ msg }}</div>
    <div v-if="msg1">这是msg1: {{ msg1 }}</div>
    <div v-if="msg2">这是msg2: {{ msg2 }}</div>
    <div v-if="msg3">这是msg3: {{ msg3 }}</div>
    <button @click="changeMsg">查看变化</button>
    <div>在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '点击前',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    changeMsg () {
      this.$nextTick(() => {
        console.log(this.$refs)
        this.$refs.msgDiv.style.background = 'red'
      })
      this.$refs.msgDiv.style.background = 'yellow'
      this.msg = '点击后'
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    }
  }
}
</script>
