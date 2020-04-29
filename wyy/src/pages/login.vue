<!--  -->
<template>
	<div class="login">
		<h3>登录</h3>
		<div>
			<input type="text" placeholder="请输入手机号" v-model="phone" />
		</div>
		<div>
			<input type="password" placeholder="请输入密码" v-model="password" />
		</div>
		<div>
			<button @click="send">发送验证码</button>
		</div>
		<div>
			<input type="text" placeholder="请输入验证码" v-model="checkCode" />
		</div>
		<div>
			<button @click="login">登录</button>
		</div>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { requestLogin, sendCode, verify } from '../Util/request';
export default {
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {
			phone: "",//手机号
			password: "",//密码
			checkCode: ""//验证码
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		// 当点击验证码时，先验证账号密码对不对，如果不对，提示用户账号密码错误，如果正确发送验证码，
		// 如果点击了登录，先验一下，账号密码对不对，验证码正确就登录，验证码错误就提示验证码错误
		send() {
			requestLogin({
				phone: this.phone,
				password: this.password
			}
			).then(res => {
				console.log(res);
				sendCode({
					phone: this.phone
				}).then(res => {
					alert('验证码发送成功');
				})

			}).catch(err => {
				alert('账号或者密码错误');
			})
		},
		login() {
			// 验证验证码
			verify({
				phone: this.phone,
				captcha: this.checkCode
			}).then(res => {//验证成功
				this.$router.push("/index")
			}).catch(err => {//验证码错了
				alert('验证码错误');
			})
		}
	},
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
<style lang='stylus' scoped>
@import '../stylus/index.styl'

.login
	h3
		color $success
		text-align center
		font-size $h1

	button
		width 85%
</style>