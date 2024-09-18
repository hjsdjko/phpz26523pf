import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import xiaoshuoxinxiList from '../pages/xiaoshuoxinxi/list'
import xiaoshuoxinxiDetail from '../pages/xiaoshuoxinxi/detail'
import xiaoshuoxinxiAdd from '../pages/xiaoshuoxinxi/add'
import xiaoshuoxinxiChapter from '../pages/xiaoshuoxinxi/chapter'
import xiaoshuofenleiList from '../pages/xiaoshuofenlei/list'
import xiaoshuofenleiDetail from '../pages/xiaoshuofenlei/detail'
import xiaoshuofenleiAdd from '../pages/xiaoshuofenlei/add'
import gonggaozixunList from '../pages/gonggaozixun/list'
import gonggaozixunDetail from '../pages/gonggaozixun/detail'
import gonggaozixunAdd from '../pages/gonggaozixun/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussxiaoshuoxinxiList from '../pages/discussxiaoshuoxinxi/list'
import discussxiaoshuoxinxiDetail from '../pages/discussxiaoshuoxinxi/detail'
import discussxiaoshuoxinxiAdd from '../pages/discussxiaoshuoxinxi/add'
import chapterxiaoshuoxinxiList from '../pages/chapterxiaoshuoxinxi/list'
import chapterxiaoshuoxinxiDetail from '../pages/chapterxiaoshuoxinxi/detail'
import chapterxiaoshuoxinxiAdd from '../pages/chapterxiaoshuoxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'xiaoshuoxinxi',
					component: xiaoshuoxinxiList
				},
				{
					path: 'xiaoshuoxinxiDetail',
					component: xiaoshuoxinxiDetail
				},
				{
					path: 'xiaoshuoxinxiAdd',
					component: xiaoshuoxinxiAdd
				},
				{
					path: 'xiaoshuoxinxiChapter',
					component: xiaoshuoxinxiChapter
				},
				{
					path: 'xiaoshuofenlei',
					component: xiaoshuofenleiList
				},
				{
					path: 'xiaoshuofenleiDetail',
					component: xiaoshuofenleiDetail
				},
				{
					path: 'xiaoshuofenleiAdd',
					component: xiaoshuofenleiAdd
				},
				{
					path: 'gonggaozixun',
					component: gonggaozixunList
				},
				{
					path: 'gonggaozixunDetail',
					component: gonggaozixunDetail
				},
				{
					path: 'gonggaozixunAdd',
					component: gonggaozixunAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussxiaoshuoxinxi',
					component: discussxiaoshuoxinxiList
				},
				{
					path: 'discussxiaoshuoxinxiDetail',
					component: discussxiaoshuoxinxiDetail
				},
				{
					path: 'discussxiaoshuoxinxiAdd',
					component: discussxiaoshuoxinxiAdd
				},
				{
					path: 'chapterxiaoshuoxinxi',
					component: chapterxiaoshuoxinxiList
				},
				{
					path: 'chapterxiaoshuoxinxiDetail',
					component: chapterxiaoshuoxinxiDetail
				},
				{
					path: 'chapterxiaoshuoxinxiAdd',
					component: chapterxiaoshuoxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
