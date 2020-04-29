<!--  -->
<template>
	<div>
		<button @click="$router.push('/search')">搜索</button>
		<ul class="all">
			<!-- <li class="item">
        <img
          src="https://p2.music.126.net/Hpd8jO5lSrnFRncv5U24DA==/109951164817491081.jpg"
          alt
        />
        <p>123</p>
			</li>-->
			<li is="router-link" :to="'/list?id=' + item.id" class="item" v-for="item in arr" :key="item.id">
				<img :src="item.picUrl" alt />
				<p>{{ item.name }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { requestTuijian } from "../Util/request";
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
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() { },
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {
		//   一进来就获取推荐歌单
		requestTuijian().then(res => {
			console.log(res);
			this.arr = res.data.result;
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
.all
	overflow hidden
.item
	width 50%
	float left
	padding 0 $padding
	box-sizing border-box
	height 2.8rem
	margin $margin 0
	img
		width 100%
		height 2rem
	p
		height 0.8rem
		line-height 0.4rem
		overflow hidden
</style>
