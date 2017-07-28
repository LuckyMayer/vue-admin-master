<template>
	<el-submenu :index='index+" "' v-if="item.children && item.children.length>0 && !item.hidden">
		<template slot="title"><i :class="item.iconCls"></i><span>{{item.name}}</span></template>
		<side-bar-item :item="child" v-for="(child,i) in item.children" :keys="item.view" :index='index+"-"+i'></side-bar-item>
	</el-submenu>
	<el-menu-item :index='item.view' v-else-if="!item.hidden" >
		<i :class="item.iconCls"></i>
		<span>{{item.name}}</span>
	</el-menu-item>		
</template>
<script>
	import SideBarItem from '../components/menu'
	export default {
		name : "side-bar-item",
		data(){
			return{}
		},
		props:['item','index'],
		components:{
			SideBarItem
		}
	}
</script>