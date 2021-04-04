/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-4-5 01:21:02
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4adbbae"],{"3ba4":function(t,e,a){},"6d2a":function(t,e,a){"use strict";a.r(e),a.d(e,"getList",(function(){return r}));var s=a("b775");function r(t){return Object(s["default"])({url:"/goodsList/getList",method:"post",data:t})}},"74db":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods-list-container"},[a("vab-query-form",[a("vab-query-form-right-panel",{attrs:{span:24}},[a("el-form",{ref:"form",attrs:{model:t.queryForm,inline:!0},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"商品名称"},model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-search",type:"primary","native-type":"submit"},on:{click:t.handleQuery}},[t._v(" 查询 ")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},t._l(t.list,(function(e,s){return a("el-col",{key:s,attrs:{xs:24,sm:8,md:8,lg:8,xl:6}},[a("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[a("div",{staticClass:"goods-list-card-body"},[a("div",{staticClass:"goods-list-tag-group"},[e.isRecommend?a("el-tag",{attrs:{hit:"",type:"success"}},[t._v("推荐")]):t._e(),0===e.status?a("el-tag",{attrs:{hit:"",type:"danger"}},[t._v("缺货")]):t._e()],1),a("div",{staticClass:"goods-list-image-group"},[a("img",{staticClass:"goods-list-image",attrs:{src:e.image}})]),a("div",{staticClass:"goods-list-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"goods-list-description"},[t._v(t._s(e.description))]),a("div",{staticClass:"goods-list-price"},[a("span",[t._v("¥ "+t._s(e.price)+" 元")])])])])],1)})),1),a("el-pagination",{attrs:{background:"","current-page":t.queryForm.pageNo,layout:t.layout,"page-size":t.queryForm.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)},r=[],i=a("b097"),n=(a("6a61"),a("6d2a")),o={name:"Goods",components:{},data:function(){return{queryForm:{pageNo:1,pageSize:20,title:""},list:null,listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,elementLoadingText:"正在加载..."}},created:function(){this.fetchData()},methods:{handleSizeChange:function(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.queryForm.pageNo=t,this.fetchData()},handleQuery:function(){this.queryForm.pageNo=1,this.fetchData()},fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,Object(n["getList"])(t.queryForm);case 3:a=e.sent,s=a.data,r=a.totalCount,t.list=s,t.total=r;case 8:case"end":return e.stop()}}),e)})))()}}},l=o,c=(a("b3fb"),a("5d22")),u=Object(c["a"])(l,s,r,!1,null,"01a9b5f2",null);e["default"]=u.exports},b3fb:function(t,e,a){"use strict";a("3ba4")}}]);