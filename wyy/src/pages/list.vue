<!--  -->
<template>
	<div class>
		<ul>
			<!-- <li class="item">
        <img
          src="http://p2.music.126.net/jkUVsm8PoX-BeBaU_1Ckjg==/109951164435625996.jpg"
          alt=""
        />
        <div class="right">
          <h3>歌名：xx</h3>
          <p>歌手：xx xx</p>
        </div>
			</li>-->
			<li is="router-link" :to="'/play/' + item.id" class="item" v-for="item in songs" :key="item.id">
				<img :src="item.al.picUrl" alt />
				<div class="right">
					<h3>歌名：{{ item.name }}</h3>
					<p>
						歌手：
						<span v-for="i in item.ar" :key="i.id">{{ i.name }}&nbsp;&nbsp;</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { requestList } from "../Util/request";
export default {
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {
			songs: []
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() { },
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {
		var id = this.$route.query.id;
		requestList({
			id: id
		}).then(res => {
			this.songs = res.data.playlist.tracks;
		});
	},
	activated() {
		console.log(2)
		console.log("=====list activated==========");
		var id = this.$route.query.id;

    /*如果这次的id和上次的id是一样的，那么就不用发起请求了；
        如果这次id和上次的id不一样，那么songs=[]*/
		if (localStorage.getItem("id") === id) {
			return;
		}
		localStorage.setItem("id", id);
		this.songs = [];
		requestList({
			id: id
		}).then(res => {
			this.songs = res.data.playlist.tracks;
		});
	},
	beforeCreate() { }, //生命周期 - 创建之前
	beforeMount() { }, //生命周期 - 挂载之前
	beforeUpdate() { }, //生命周期 - 更新之前
	updated() { }, //生命周期 - 更新之后
	beforeDestroy() { }, //生命周期 - 销毁之前
	destroyed() { }, //生命周期 - 销毁完成
	// activated() { } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl'
.item {
	width 90%
	margin $margin auto
	background $info
	height 2rem
	display flex
	padding $padding
	img {
		width 1.5rem
		height 1.6rem
		margin-top 0.2rem
	}
	.right {
		flex 1
	}
}
</style>
