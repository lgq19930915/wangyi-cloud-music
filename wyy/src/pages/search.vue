<!--  -->
<template>
	<div class="search">
		<!-- 搜索框 -->
		<div class="box">
			<div class="ipt">
				<input type="text" placeholder="请输入关键字" v-model="keyword" />
			</div>
			<div class="btn">
				<button @click="search">搜索</button>
			</div>
		</div>
		<!-- 热搜词汇 -->
		<div class="hots" v-show="keyword==''">
			<h3 class="title">热搜词:</h3>
			<span v-for="item in hots" :key="item.first" @click="change(item.first)">{{item.first}}</span>
		</div>
		<!-- 搜索结果 -->
		<div class="result" v-show="keyword!==''">
			<div class="right" v-for="item in songs" :key="item.id" is="router-link" :to="'/play/'+item.id">
				<h3>{{item.name}}</h3>
				<p>
					<span v-for="i in item.artists" :key="i.id">{{i.name}}&nbsp;&nbsp;</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { requestHots, requestSearch } from '../Util/request'
export default {
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {
			hots: [],//热门搜索词汇
			keyword: "",//搜素关键词
			songs: [],//搜索出来的歌曲
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		search() {
			if (this.keyword === "") {
				return
			}
			requestSearch({
				keywords: this.keyword
			}).then(res => {
				console.log(res);
				this.songs = res.data.result.songs
			})
		},
		change(cot) {
			this.keyword = cot;
			this.search()
		}
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {

	},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {
		// 一进来页面就请求热搜词
		requestHots().then(res => {
			console.log(res);
			this.hots = res.data.result.hots
		});

	},
	beforeCreate() { }, //生命周期 - 创建之前
	beforeMount() { }, //生命周期 - 挂载之前
	beforeUpdate() { }, //生命周期 - 更新之前
	updated() { }, //生命周期 - 更新之后
	beforeDestroy() { }, //生命周期 - 销毁之前
	destroyed() { }, //生命周期 - 销毁完成
	activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='stylus' scoped>
@import '../stylus/index.styl'
.search
	.box
		overflow hidden
		.ipt
			width 80%
			float left
			input
				margin-right 0
				width 80%
				margin-left 0.1rem
		.btn
			float left
			width 20%
	.hots
		overflow hidden
		.title
			color $primary
			font-size $h2
			margin $margin
		span
			float left
			padding $padding
			margin $margin
			border-radius $radius
			background $info
.right
	background $info
	margin-left $margin
	margin-right $margin
	padding $padding
	display block
</style>