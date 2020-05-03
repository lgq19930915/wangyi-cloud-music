<!--  -->
<template>
  <div class>
    <audio
      autoplay
      controls
      ref="audio"
      :src="'https://music.163.com/song/media/outer/url?id=' + id + '.mp3'"
    ></audio>
    <!-- 歌词 -->
    <div class="outer">
      <div
        class="inner"
        :style="{top:innerTop+'rem'}"
      >
        <!-- 歌词 -->
        <div
          class="lrc"
          :class="[i==idx?'select':'']"
          v-for="(item,i) in lyric"
          :key="i"
        >{{item.ci}}</div>

      </div>
    </div>
    <!-- 自定义控制条 -->
    <router-link :to="'/comment?id=' + id">评论</router-link>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { requestGetLrc } from "../Util/request";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      id: "",
      lyric: [], //歌词的数组
      innerTop: 0,
      idx: -1 //记录那一句歌词被选中的下标
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   获取歌词
    getLrc() {
      requestGetLrc(this.id).then(res => {
        var geci = res.data.lrc.lyric;
        var tempArr = geci.split("[");
        tempArr = tempArr.slice(1);
        this.lyric = tempArr.map(item => {
          var arr = item.split("]");
          return {
            time: arr[0].slice(0, 5),
            ci: arr[1].slice(0, arr[1].length - 1)
          };
        });
        console.log(this.lyric);
        // 监听歌曲播放进度
        this.timeUpdate();
      });
    },
    // 监听歌曲播放进度
    timeUpdate() {
      var audio = this.$refs.audio;
      audio.ontimeupdate = () => {
        // console.log(audio.currentTime);
        var minute = (Math.floor(audio.currentTime / 60) + "").padStart(2, "0");
        var second = (Math.floor(audio.currentTime % 60) + "").padStart(2, "0");
        var key = minute + ":" + second;
        console.log(key);
        // 查询歌词里面那一条数据跟当前时间相同，取出他的下标idx,innerTop=-idx*0.3;
        var idx = this.lyric.findIndex(item => item.time === key);
        // 	1.找到了 0-lyric.length-1  2.没找到-1
        if (idx != -1) {
          this.innerTop = -idx * 0.3 + 0.6;
          this.idx = idx;
        }
      };
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
  activated() {
    this.id = this.$route.params.id;
    this.getLrc();
  } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.outer {
  position relative;
  overflow hidden;
  padding 0.1rem;
  height 3rem;
  border 1px solid orange;

  .inner {
    position absolute;
    top 0px;
    left 0px;
    width 100%;
    transition all 0.3s;

    .lrc {
      height 0.3rem;
      background #fff;
      color #333;
      text-align center;
      line-height 0.3rem;
      transition all 0.3s;
    }

    .select {
      height 0.3rem;
      color #f40;
    }
  }
}
</style>
