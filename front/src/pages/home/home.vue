<template>
<div class="home-preview" :style='{"margin":"0 auto","flexWrap":"wrap","flexDirection":"row","background":"none","display":"flex","width":"100%","justifyContent":"center"}'>

	<!-- 搜索 -->
	<div id="search" class="search animate__animated" :style='{"padding":"10px 10%","margin":"0px auto 0","borderColor":"#eee","flexWrap":"wrap","background":"#eee","borderWidth":"0px","display":"none","width":"100%","borderStyle":"solid","justifyContent":"flex-end","height":"auto","zIndex":"1002"}'>
		<div :style='{"margin":"0 10px 0 0"}' class="select">
			<el-select v-model="queryIndex">
				<el-option
				  v-for="(item,index) in queryList"
				  :key="index"
				  :label="item.queryName"
				  :value="index"
				></el-option>
			</el-select>
		</div>
		<div :style='{"margin":"0 0px 0 0"}' class="input" v-if="queryIndex==0">
			<el-input v-model="xiaoshuoxinxixiaoshuomingcheng" placeholder="小说名称"></el-input>
		</div>
		<div :style='{"margin":"0"}' class="btn" v-if="queryIndex==0">
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 12px 0 16px","margin":"0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"2px","background":"#eccc19","width":"auto","lineHeight":"32px","fontSize":"16px","height":"32px"}' type="primary" @click="search('xiaoshuoxinxi')">
				<span class="icon iconfont icon-chakan14" :style='{"color":"rgba(255, 255, 255, 1)","margin":"0 4px 0 0","fontSize":"20px"}'></span>
				
			</el-button>
		</div>
	</div>
	<!-- 搜索 -->


		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"padding":"40px calc((100% - 1200px)/2) 20px","margin":"0 auto","borderColor":"#f1635f","background":"url(http://codegen.caihongy.cn/20240203/e1de0cd1fb1a48afa066afb0e7b20709.jpg) no-repeat center top / cover","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"solid","height":"auto","order":"3"}'>
		  <div :style='{"padding":"0","margin":"0","color":"#222","textAlign":"center","background":"none","width":"100%","fontSize":"22px","fontWeight":"600","height":"60px"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"margin":"0 0 30px","color":"#888","textAlign":"left","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"padding":"0 0px","margin":"0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20240203/04dfdd44a7604afbb8378abf3c344cf5.png) no-repeat left top / 100% 100%","display":"flex","width":"50%","position":"relative","float":"right","height":"346px"}'>
		    <img :style='{"margin":"0 0px","objectFit":"cover","top":"32px","borderRadius":"2px","left":"111px","display":"block","width":"368px","position":"absolute","height":"230px"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"padding":"0 20px","margin":"0","overflow":"hidden","color":"#333","background":"none","width":"50%","fontSize":"14px","lineHeight":"24px","textIndent":"2em","float":"left","height":"220px"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"top":"0","left":"52%","background":"url(http://codegen.caihongy.cn/20230920/8a35b5134ee644b8a9a87ea99a0f1490.png) no-repeat","display":"none","width":"200px","position":"absolute","height":"100%"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"1px solid rgba(202,25,19,.5)","cursor":"pointer","padding":"0 20px","margin":"0","textAlign":"center","bottom":"90px","display":"block","right":"calc(50% + 20px)","float":"left","borderRadius":"4px","background":"none","width":"auto","lineHeight":"35px","position":"absolute"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"rgba(202,25,19,1)","fontSize":"14px"}'>点击了解更多</span>
		    <span class="icon iconfont " :style='{"color":"#fff","fontSize":"16px","display":"inline-block"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"30px calc((100% - 1200px)/2) 0","margin":"0","borderColor":"#ffc652","background":"none","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"solid","height":"auto","order":"5"}'>
		  <div :style='{"padding":"0","margin":"0","color":"#222","textAlign":"center","background":"none","width":"auto","fontSize":"22px","fontWeight":"600","height":"50px"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"margin":"0 0 30px","color":"#888","textAlign":"right","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"padding":"0 0px","margin":"0","flexWrap":"wrap","display":"block","width":"40%","float":"left","height":"236px","order":"2"}'>
		    <img :style='{"width":"100%","margin":"0 0px","objectFit":"cover","display":"block","clipPath":"polygon(6% 0, 100% 0%, 94% 100%, 0% 100%)","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"14px 60px 0","margin":"0px 0 10px 0","color":"rgb(102, 102, 102)","clipPath":"polygon(4% 0, 100% 0%, 96% 100%, 0% 100%)","textIndent":"2em","float":"right","overflow":"hidden","background":"#f6f6f6","width":"60%","lineHeight":"24px","fontSize":"14px","height":"236px","order":"2"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"top":"68px","left":"calc((100% - 1200px)/2 + 10px)","background":"url(http://codegen.caihongy.cn/20240203/b1c0f063ab0a47d089cb38999123375f.png) no-repeat","display":"block","width":"200px","position":"absolute","height":"100%"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"cursor":"pointer","padding":"0 6px","margin":"0","textAlign":"left","display":"block","right":"calc((100% - 1200px)/2)","top":"30px","borderRadius":"4px","background":"#ca1913","width":"auto","lineHeight":"24px","position":"absolute","height":"24px"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#fff","fontSize":"12px","display":"block"}'>MORE+</span>
		    <span class="icon iconfont " :style='{"padding":"0px","margin":"0","color":"#fff","background":"none","display":"inline-block","fontSize":"16px","lineHeight":"40px","height":"40px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"40px calc((100% - 1200px)/2) 30px","margin":"0 auto","backgroundAttachment":"fixed","background":"rgb(240, 240, 240)","width":"100%","position":"relative","order":"2"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"auto","padding":"0","margin":"0 auto","textAlign":"center","background":"none","height":"60px"}'>
			<span :style='{"color":"#222","fontSize":"20px","fontWeight":"600"}'>小说资讯</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
		


		<div v-if="newsList.length" class="list list13 index-pv1" :style='{"padding":"0","margin":"0 auto","color":"#999","background":"none","width":"100%","fontSize":"14px","height":"auto"}'>
		  <div :style='{"width":"100%","margin":"0 0 20px","background":"none","justifyContent":"space-between","display":"flex","height":"auto"}'>
		    <div :style='{"padding":"20px 20px 0","margin":"30px 0 0","borderColor":"#e6e6e6","background":"#fff","borderWidth":"1px","width":"50%","borderStyle":"solid","height":"360px","order":"2"}'>
			  <template v-for="(item,index) in newsList">
		      <div v-if="index < 3" @click="toDetail('newsDetail', item)" class="list-item animation-box" :style='{"cursor":"pointer","padding":"0 0 6px","margin":"0 0 10px","borderColor":"#ddd","background":"none","borderWidth":"0 0 1px","width":"100%","borderStyle":"dashed","height":"auto"}'>
		        <div :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#000","width":"100%","lineHeight":"1.5","fontSize":"14px","textOverflow":"ellipsis","fontWeight":"600"}' class="name">{{item.title}}</div>
		        <div :style='{"lineHeight":"24px","fontSize":"12px","overflow":"hidden","color":"#666","textIndent":"2em","height":"48px"}' class="name">{{item.introduction}}</div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-chakan2" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		        </div>
		      </div>
			  </template>
		    </div>
		    <div :style='{"width":"50%","padding":"0","height":"auto"}'>
		      <div v-if="newsList.length > 3" class="swiper-container newsSwiper13 new-list-13news">
		        <div class="swiper-wrapper">
				  <template v-for="(item,index) in newsList">
		          <div v-if="index > 2 && index < 6" class="swiper-slide">
		            <div :style='{"width":"100%","position":"relative","height":"auto"}' @click="toDetail('newsDetail', item)">
		              <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"360px"}' :src="baseUrl + item.picture">
		              <div :style='{"width":"100%","position":"absolute","left":"0","bottom":"0","background":"rgba(0,0,0,.3)"}'>
		                <div :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#fff","width":"100%","lineHeight":"44px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.title}}</div>
		              </div>
		            </div>
		          </div>
				  </template>
		        </div>
		        <!-- Add Pagination -->
		        <div class="swiper-pagination" :style='{"width":"100%","left":"0","textAlign":"right","bottom":"10px"}'></div>
		      </div>
		    </div>
		  </div>
		  <div v-if="newsList.length > 6" :style='{"width":"100%","justifyContent":"space-between","display":"none","height":"auto"}'>
			<template v-for="(item,index) in newsList">
		    <div v-if="index > 5" @click="toDetail('newsDetail', item)" class="list-item animation-box" :style='{"width":"24%","padding":"0 0 10px","position":"relative","background":"#fff","height":"auto"}'>
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' :src="baseUrl + item.picture">
		      <div :style='{"padding":"5px 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"1.5","fontSize":"14px","textOverflow":"ellipsis"}' class="name">{{item.title}}</div>
		      <div :style='{"padding":"0 10px","lineHeight":"24px","fontSize":"14px","overflow":"hidden","color":"#999","height":"48px"}' class="name">{{item.introduction}}</div>
		      <div :style='{"padding":"0 10px","margin":"10px 0 0"}'>
		        <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		        <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
		      </div>
		      <div :style='{"padding":"0 10px","margin":"10px 0 0","display":"inline-block"}'>
		        <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		        <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		      </div>
		      <div :style='{"padding":"0 10px","display":"inline-block"}'>
		        <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		        <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		      </div>
		      <div :style='{"padding":"0 10px","display":"inline-block"}'>
		        <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		        <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		      </div>
		      <div :style='{"padding":"0 10px","display":"inline-block"}'>
		        <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		        <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		      </div>
		    </div>
			</template>
		  </div>
		</div>









		<div @click="moreBtn('news')" :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"2px 2px 2px 6px","margin":"0","top":"40px","borderRadius":"4px","textAlign":"center","background":"#ca1913","display":"block","width":"auto","position":"absolute","right":"18%"}'>
			<span :style='{"color":"#fff","fontSize":"12px"}'>MORE+</span>
			<i :style='{"color":"#fff","fontSize":"16px","display":"inline-block"}' class="icon iconfont "></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->


<!-- 商品推荐 -->
<div id="animate_recommendxiaoshuoxinxi" class="recommend animate__animated" :style='{"padding":"40px calc((100% - 1200px)/2) 0px","margin":"0 auto","borderColor":"#e6e6e6","background":"url(http://codegen.caihongy.cn/20240203/f50d0f8c22c742b387feaf4ac9a285c5.jpg) no-repeat center center / cover,rgb(245, 245, 245)","borderWidth":"0 0 1px","width":"100%","position":"relative","borderStyle":"solid","order":"1"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"0 auto","textAlign":"center","background":"none","height":"60px"}'>
		<span :style='{"padding":"0px 0 0","fontSize":"22px","color":"#222","fontWeight":"600","display":"block"}'>小说信息推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	







		<div v-if="xiaoshuoxinxiRecommend.length" :style='{"padding":"0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="list list17 index-pv1">
		  <div v-for="item,index in xiaoshuoxinxiRecommend" :key="index"  @click="toDetail('xiaoshuoxinxiDetail', item)" :style='{"cursor":"pointer","width":"18%","margin":"0 0 20px","position":"relative","background":"none","height":"auto"}' class="item">
				<img class="image" v-if="preHttp(item.xiaoshuofengmian)" :src="item.xiaoshuofengmian.split(',')[0]" alt="" />
				<img class="image" v-else :src="baseUrl + (item.xiaoshuofengmian?item.xiaoshuofengmian.split(',')[0]:'')" alt="" />
			<div class="content">
		      <div :style='{"lineHeight":"24px","fontSize":"14px","color":"#333","display":"none"}'>{{item.xiaoshuojianjie}}</div>

		      <div class="info">
				<div :style='{"overflow":"hidden","whiteSpace":"hidden","color":"#333","textAlign":"center","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis","fontWeight":"600"}' class="name ">{{item.xiaoshuomingcheng}}</div>
				<div :style='{"overflow":"hidden","whiteSpace":"hidden","color":"#333","textAlign":"center","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis","fontWeight":"600"}' class="name ">{{item.xiaoshuofenlei}}</div>
				<div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
		        </div>
		        <div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('xiaoshuoxinxi')" :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"2px 2px 2px 6px","margin":"0","top":"40px","borderRadius":"4px","textAlign":"center","background":"#ca1913","display":"block","width":"auto","position":"absolute","right":"18%"}'>
		<span :style='{"color":"#fff","fontSize":"12px"}'>MORE+</span>
		<i :style='{"color":"#fff","fontSize":"16px","display":"inline-block"}' class="icon iconfont "></i>
	</div>
	
</div>
<!-- 商品推荐 -->


<!-- 特价商品 -->
<div id="animate_listxiaoshuoxinxi" class="lists animate__animated" :style='{"width":"100%","padding":"30px calc((100% - 1200px)/2) 40px","margin":"0 auto","position":"relative","background":"#efeeec","order":"4"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"auto","margin":"0 auto","textAlign":"center","background":"none","height":"60px"}'>
	  <span :style='{"padding":"0","fontSize":"22px","color":"#222","fontWeight":"600","display":"block","font":"\"宋体\""}'>小说信息展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"padding":"0 calc((100% - 1200px)/2)","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		<div :style='{"cursor":"pointer","margin":"0","background":"none","display":"inline-block","width":"18.8%","position":"relative","height":"auto"}' v-for="(item,index) in xiaoshuoxinxiList" :key="index" @click="toDetail('xiaoshuoxinxiDetail', item)" class="list-item animation-box">
			<img :style='{"border":"1px solid #ccc","padding":"20px 10px","objectFit":"contain","background":"#fff","display":"block","width":"100%","height":"240px"}' v-if="preHttp(item.xiaoshuofengmian)" :src="item.xiaoshuofengmian.split(',')[0]" alt="" />
			<img :style='{"border":"1px solid #ccc","padding":"20px 10px","objectFit":"contain","background":"#fff","display":"block","width":"100%","height":"240px"}' v-else :src="baseUrl + (item.xiaoshuofengmian?item.xiaoshuofengmian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.xiaoshuomingcheng}}</div>
			<div class="name line1" :style='{"padding":"0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.xiaoshuofenlei}}</div>
			<div :style='{"width":"100%","padding":"0 0px","display":"none"}'>
			  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
			</div>
			<div :style='{"padding":"0 0px","margin":"0 5px 0 0","display":"inline-block"}'>
			  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
			</div>
			<div :style='{"padding":"0 0px","margin":"0 5px 0 0","display":"inline-block"}'>
			  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
			</div>
			<div :style='{"padding":"0 0px","margin":"0 5px 0 0","display":"inline-block"}'>
			  <span class="icon iconfont icon-chakan2" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	






	
	
	<div @click="moreBtn('xiaoshuoxinxi')" :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"2px 2px 2px 6px","margin":"0","top":"40px","borderRadius":"4px","textAlign":"center","background":"#ca1913","display":"block","width":"auto","position":"absolute","right":"calc((100% - 1200px)/2)"}'>
		<span :style='{"color":"#fff","fontSize":"12px"}'>MORE+</span>
		<i :style='{"color":"#fff","fontSize":"16px","display":"inline-block"}' class="icon iconfont "></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        queryList:[
          {
              queryName:"小说名称",
          },
        ],
        queryIndex: 0,
        xiaoshuoxinxixiaoshuomingcheng: '',
        newsList: [],
        xiaoshuoxinxiRecommend: [],

        xiaoshuoxinxiList: [],

		newListSwiper13news: null,



      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getAboutUs();
		this.getSystemIntroduction();
		this.getList();
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			if (this['newListSwiper13news']) this['newListSwiper13news'].destroy()
			setTimeout(()=>{
				this['newListSwiper13news'] = new Swiper(".new-list-13news", {"autoplay":{"delay":2500,"disableOnInteraction":false},"pagination":{"el":".swiper-pagination","clickable":true}})
			},750)
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__fadeInUp'},
				{id:'about',css:'animate__'},
				{id:'system',css:'animate__'},
				{id:'animate_recommendxiaoshuoxinxi',css:'animate__'},
				{id:'animate_listxiaoshuoxinxi',css:'animate__'},
				{id:'animate_newsnews',css:'animate__'},
				{id:'msgs',css:'animate__'},
				{id:'friendly',css:'animate__'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
      search(tablename) {
        if (this.queryIndex == 0 && this.xiaoshuoxinxixiaoshuomingcheng) {
          this.$router.push({path: '/index/' + tablename, query: {indexQueryCondition: this.xiaoshuoxinxixiaoshuomingcheng}});
        }
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 4,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "xiaoshuoxinxi/autoSort";
          if(localStorage.getItem('frontToken')) {
              autoSortUrl = "xiaoshuoxinxi/autoSort2";
          }
			data = {
				page: 1,
				limit: 5,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.xiaoshuoxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			data = {
				page: 1,
				limit: 5,
			}
			this.$http.get('xiaoshuoxinxi/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.xiaoshuoxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0px solid #ddd;
			border-radius: 2px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 32px;
		}
		
		.search .input /deep/ .el-input__inner {
			border-radius: 2px;
			padding: 0 10px;
			color: rgba(64, 158, 255, 1);
			width: 280px;
			font-size: 14px;
			border-color: #ddd;
			border-width: 0px;
			border-style: solid;
			height: 32px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				box-shadow: 0px 0px 0px 0px #e7e7e7;
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(0.98) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	

	.home-preview .news .list13 .newsSwiper13 .swiper-pagination /deep/ span.swiper-pagination-bullet {
				border-radius: 100%;
				margin: 0 4px;
				background: #fff;
				display: inline-block;
				width: 10px;
				opacity: .2;
				height: 10px;
			}
	
	.home-preview .news .list13 .newsSwiper13 .swiper-pagination /deep/ span.swiper-pagination-bullet:hover {
				background: rgba(202,25,19,1);
				opacity: 1;
			}
	
	.home-preview .news .list13 .newsSwiper13 .swiper-pagination /deep/ span.swiper-pagination-bullet.swiper-pagination-bullet-active {
				background: rgba(202,25,19,1);
				opacity: 1;
			}







	.home-preview .recommend .list17 .item .image {
				border: 1px solid #ddd;
				border-radius: 2px;
				padding: 20px 10px;
				background: #fff;
				object-fit: contain;
				display: block;
				width: 100%;
				transition: 0.3s;
				height: 240px;
			}

	.home-preview .recommend .list17 .item:hover .image {
				transform: scale(1);
			}
	
	.home-preview .recommend .list17 .item .content {
				border-radius: 0px;
				padding: 0px 0;
				left: 0;
				bottom: 0;
				background: none;
				display: flex;
				width: 100%;
				position: inherit;
				transition: 0.3s;
				height: auto;
			}
	
	.home-preview .recommend .list17 .item:hover .content {
				bottom: 0;
			}


</style>
