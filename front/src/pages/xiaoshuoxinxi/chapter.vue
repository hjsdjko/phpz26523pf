<template>
	<div class="chapterBox" :style='{"background":`${background}`}'>
		<div class="section-title" :style='{"padding":"10px 0","margin":"20px auto 20px","borderColor":"#e5e5e5","color":"#222","textAlign":"center","background":"#F5F5F5","borderWidth":"1px","width":"100%","fontSize":"16px","borderStyle":"solid","fontWeight":"600","height":"auto"}'>{{detail.chaptertitle}}</div>
		<div class="section-content">
			<div class="content-title">{{detail.title}}</div>
			<div class="content-sub-title">发布时间：{{detail.addtime}}</div>
			<el-divider></el-divider>
			<div class="content-detail" :style='{"fontSize":`${fontSize}px`,"color": `${color}`}' v-html="detail.content"></div>
			<el-divider></el-divider>
			<div style="display: flex;align-items: center;justify-content: center;width: 50%;position: fixed;bottom: 2%;left: 25%;">
				<el-button type="primary" @click="prepClick">上一章</el-button>
				<el-button type="warning" @click="catalogueClick">目录</el-button>
				<el-button type="primary" @click="nextClick">下一章</el-button>
			</div>
			<div style="position: fixed;right: 5%;bottom: 10%;display: flex;flex-direction: column;align-items: center;">
				<el-button type="primary" style="margin: 0 0 10px;" circle icon="el-icon-plus" size="small" @click="jiaClick"></el-button>
				<el-button type="danger" style="margin: 0 0 10px;" circle icon="el-icon-minus" size="small" @click="jianClick"></el-button>
				<el-color-picker v-model="background" style="margin: 0 0 10px;" size="small"></el-color-picker>
				<el-color-picker v-model="color" size="small" @change="colorChange"></el-color-picker>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    //数据集合
		data() {
			return {
				detail: {},
				id:'',
				chapterList:[],
				userid: localStorage.getItem('frontUserid'),
				fontSize: 18,
				background: '#ffffff',
				color: '#000',
			}
		},
		created() {
			this.id = this.$route.query.id
			this.getDetail(1)
		},
		methods:{
			colorChange(e){
				this.detail.content = this.detail.content.replace(/color:.*?(.*?).*?;/gi, ``)
			},
			jianClick(){
				this.fontSize--
			},
			jiaClick(){
				this.fontSize++
			},
			getDetail(type){
				this.$http.get('chapterxiaoshuoxinxi/detail/' + this.id, {}).then(res => {
					if (res.data.code == 0) {
						this.detail = res.data.data;
						window.scrollTo( 0, 100 )
						if(type){
							this.getChapterList()
						}
					}
				});
			},
			getChapterList(){
				this.$http.get('chapterxiaoshuoxinxi/list', {
					params: {
						refid: this.detail.refid,
						limit: 1000,
					}
				}).then(res => {
					if (res.data.code == 0 && res.data.data.list.length > 0) {
						this.chapterList = res.data.data.list
					}
				});
			},
			prepClick(){
				for(let x in this.chapterList){
					if(this.chapterList[x].id==this.id){
						if(x==0){
							this.$message.warning('没有上一章了!')
							return false
						}
						this.id = this.chapterList[Number(x) - 1].id
						this.getDetail()
						break;
					}
				}
			},
			catalogueClick(){
				history.back()
			},
			nextClick(){
				for(let x in this.chapterList){
					if(this.chapterList[x].id==this.id){
						if(x==this.chapterList.length - 1){
							this.$message.warning('已经是最后一章了!')
							return false
						}
						if(this.chapterList[Number(x) + 1].vipread=='是' && localStorage.getItem('vip')!='是'){
							this.$message.warning('下一章为vip章节，请购买会员后阅读!')
							return false
						}
						this.id = this.chapterList[Number(x) + 1].id
						this.getDetail()
						break;
					}
				}
			},

		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.chapterBox{
		padding: 30px calc((100% - 1200px)/2) 40px;
		margin: 0px auto;
		background: #fff;
		width: 100%;
		position: relative;
	}
	.section {
		width: 900px;
		margin: 0 auto;
	}

	.section-content {
		margin-top: 30px;
	}
	.content-title {
		text-align: center;
		font-size: 22px;
		font-weight: bold;
	}
	.content-sub-title {
		text-align: center;
		margin-top: 20px;
		color: #888888;
		font-size: 14px;
	}
</style>
