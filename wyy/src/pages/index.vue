<!--  -->
<template>
	<div class>
		<router-view class="con"></router-view>
		<footer>
			<router-link :to="item.path" v-for="item in navs" :key="item.name" activeClass="select">
				<img :src="item.select" v-if="$route.path == item.path" alt />
				<img :src="item.no_select" v-else alt />
				<p>{{ item.name }}</p>
			</router-link>
		</footer>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import tuijian_no from "../assets/image/tuijian_no.png";
import tuijian_yes from "../assets/image/tuijian_yes.png";
import top_no from "../assets/image/top_no.png";
import top_yes from "../assets/image/top_yes.png";
export default {
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {
			navs: [
				{
					name: "推荐榜",
					select: tuijian_yes,
					no_select: tuijian_no,
					path: "/index/tuijian"
				},
				{
					name: "排行榜",
					select: top_yes,
					no_select: top_no,
					path: "/index/top"
				}
			]
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
	mounted() { },
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
.con {
	padding-bottom $footerHeight
}
footer {
	position fixed
	left 0
	bottom 0
	width 100vw
	height $footerHeight
	display flex
	background $info
	a {
		flex 1
		padding $padding 0
		img
		width $iconWidth
		height $iconHeight {
			display block
			margin 0px auto
		}
		p {
			text-align center
			color $default
		}
	}
	.select {
		background $primary
		p {
			color #fff
		}
	}
}
</style>
