<template>
  <div>
    <slot></slot>
    <slot name="one"></slot>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <slot :value="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      list: ['来了', '打的', '赤赤', '请求', '当初', '是谁']
    }
  }
}
</script>
