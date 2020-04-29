<!--  -->
<template>
	<div>
		<button @click="$router.push('/search')">搜索</button>
		<div class="top">
			<div class="item" v-for="item in four" :key="item.id" is="router-link" :to="'/list?id='+item.id">
				<img :src="item.coverImgUrl" alt />
				<div class="right">
					<p v-for="(i,index) in item.tracks" :key="i.first">{{index+1}}.{{i.first}}- {{ i.second }}</p>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="item" v-for="item in other" :key="item.id" is="router-link" :to="'/list?id='+item.id">
				<img :src="item.coverImgUrl" alt />
				<div class="right">
					<p>{{item.name}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { requestTop } from "../Util/request";
export default {
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {
			arr: []
		};
	},
	//监听属性 类似于data概念
	computed: {
		four() {
			return this.arr.filter((item, i) => i < 4);
		},
		other() {
			return this.arr.filter((item, i) => i >= 4);
		}
	},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() { },
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {
		requestTop().then(res => {
			console.log(res);
			this.arr = res.data.list
		});
	},
	beforeCreate() { }, //生命周期 - 创建之前
	beforeMount() { }, //生命周期 - 挂载之前
	beforeUpdate() { }, //生命周期 - 更新之前
	updated() { }, //生命周期 - 更新之后
	beforeDestroy() { }, //生命周期 - 销毁之前
	destroyed() { }, //生命周期 - 销毁完成
	activated() { } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl'
.top
	.item
		padding $padding
		display flex
		height 2rem
		img
			width 2rem
			height 2rem
			border-radius $radius
			display block
		.right
			flex 1
			margin-top $margin
			margin-left $margin
			overflow hidden
			p
				font-size $h3
				line-height 0.4rem
				white-space nowrap
				overflow hidden
				text-overflow ellipsis
.bottom
	overflow hidden
	.item
		width 33.33%
		float left
		img
			width 90%
			margin 0.1rem auto
			display block
			border-radius $radius
		p
			text-align center
			line-height 0.4rem
			white-space nowrap
			overflow hidden
			text-overflow ellipsis
</style>
