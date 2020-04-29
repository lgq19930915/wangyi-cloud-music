<!--  -->
<template>
  <div class="comment-card">
    <div class="comment-card-header">
      <img class="ava" :src="d.user.avatarUrl" alt="" />
      <p class="nick">{{ d.user.nickname }}</p>
      <p class="time">{{ d.time | time }}</p>
    </div>
    <div class="con">{{ d.content }}</div>
    <button @click="dianzan(d)">{{ d.liked ? "取消点赞" : "点赞" }}</button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: ["d"],
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    dianzan(d) {
      this.$emit("dianzan", d);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl'
.comment-card
    background $info
    padding $padding
    .comment-card-header
        height 0.8rem
        overflow hidden
        img
            float left
            width 0.6rem
            height 0.6rem
            margin 0.1rem
            border-radius 50%
        .nick
            float left
            line-height 0.8rem
        .time
            float right
            font-size $p
            color #333
            line-height 0.8rem
    .con
        color $defalut
        overflow hidden
</style>
