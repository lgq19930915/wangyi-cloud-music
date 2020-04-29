<!--  -->
<template>
  <div class="">
    <h3 class="title">评论</h3>
    <h3 class="comment_title">热门评论</h3>
    <div>
      <comment-card
        @dianzan="dianzan"
        v-for="item in hots"
        :key="item.commentId"
        :d="item"
      ></comment-card>
    </div>
    <h3 class="comment_title">评论</h3>
    <div>
      <comment-card
        @dianzan="dianzan"
        v-for="item in comments"
        :key="item.commentId"
        :d="item"
      ></comment-card>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { requestComment, dianzan } from "../Util/request";
import commentCard from "../components/commentCard";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    commentCard
  },
  data() {
    //这里存放数据
    return {
      hots: [],
      comments: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 点赞

    dianzan(d) {
      var t = 1;
      if (d.liked) {
        t = 0;
      }
      dianzan({
        id: this.id, //哪个歌
        cid: d.commentId, //给那个评论点赞
        t: t,
        type: 0
      }).then(res => {
        console.log(res);
        alert("点赞成功");
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
   
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {
     // 取到歌曲id
    this.id = this.$route.query.id;
    // 根据id获取评论内容
    requestComment({ id: this.id }).then(res => {
      console.log(res);
      this.hots = res.data.hotComments;
      this.comments = res.data.comments;
    });
  } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl'
  .title
    font-size $h1
    color $primary
  .comment_title
    font-size $h2
    color $success
</style>
