"use strict";(self["webpackChunkNewBee"]=self["webpackChunkNewBee"]||[]).push([[511],{7554:function(e,t,a){a.d(t,{Z:function(){return b}});var l=a(3396),n=a(7139);const o=e=>((0,l.dD)("data-v-366c0458"),e=e(),(0,l.Cn)(),e),c={class:"simple-header van-hairline--bottom"},s={key:1},i={class:"simple-header-name"},r=o((()=>(0,l._)("i",{class:"nbicon nbmore"},null,-1))),u=o((()=>(0,l._)("div",{class:"block"},null,-1)));function d(e,t,a,o,d,g){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("header",c,[o.isback?((0,l.wg)(),(0,l.iD)("i",s,"      ")):((0,l.wg)(),(0,l.iD)("i",{key:0,class:"nbicon nbfanhui",onClick:t[0]||(t[0]=(...e)=>o.goBack&&o.goBack(...e))})),(0,l._)("div",i,(0,n.zw)(a.name),1),r]),u],64)}var g=a(4870),m=a(678),p={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup(e,t){const a=(0,g.iH)(e.noback),l=(0,m.tv)(),n=()=>{e.back?l.push({path:e.back}):l.go(-1),t.emit("callback")};return{goBack:n,isback:a}}},k=a(89);const h=(0,k.Z)(p,[["render",d],["__scopeId","data-v-366c0458"]]);var b=h},2134:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var l=a(3396),n=a(7139);const o={class:"cart-box"},c={class:"cart-body"},s={class:"good-item"},i={class:"good-img"},r=["src"],u={class:"good-desc"},d={class:"good-title"},g={class:"good-btn"},m={class:"price"},p=(0,l.Uk)("全选"),k={key:1,class:"empty"},h=(0,l._)("img",{class:"empty-cart",src:"https://s.yezgea02.com/1604028375097/empty-car.png",alt:"空购物车"},null,-1),b=(0,l._)("div",{class:"title"},"购物车空空如也",-1),v=(0,l.Uk)("前往选购");function f(e,t,a,f,C,w){const y=(0,l.up)("s-header"),_=(0,l.up)("van-checkbox"),I=(0,l.up)("van-stepper"),Z=(0,l.up)("van-button"),B=(0,l.up)("van-swipe-cell"),x=(0,l.up)("van-checkbox-group"),W=(0,l.up)("van-submit-bar"),D=(0,l.up)("nav-bar");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(y,{name:"购物车",noback:!0}),(0,l._)("div",c,[(0,l.Wm)(x,{onChange:f.groupChange,modelValue:e.result,"onUpdate:modelValue":t[0]||(t[0]=t=>e.result=t),ref:"checkboxGroup"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.list,((t,a)=>((0,l.wg)(),(0,l.j4)(B,{"right-width":50,key:a},{right:(0,l.w5)((()=>[(0,l.Wm)(Z,{square:"",icon:"delete",type:"danger",class:"delete-button",onClick:e=>f.deleteGood(t.cartItemId)},null,8,["onClick"])])),default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(_,{name:t.cartItemId},null,8,["name"]),(0,l._)("div",i,[(0,l._)("img",{src:e.$filters.prefix(t.goodsCoverImg),alt:""},null,8,r)]),(0,l._)("div",u,[(0,l._)("div",d,[(0,l._)("span",null,(0,n.zw)(t.goodsName),1),(0,l._)("span",null,"x"+(0,n.zw)(t.goodsCount),1)]),(0,l._)("div",g,[(0,l._)("div",m,"¥"+(0,n.zw)(t.sellingPrice),1),(0,l.Wm)(I,{integer:"",min:1,max:5,"model-value":t.goodsCount,name:t.cartItemId,"async-change":"",onChange:f.onChange},null,8,["model-value","name","onChange"])])])])])),_:2},1024)))),128))])),_:1},8,["onChange","modelValue"])]),e.list.length>0?((0,l.wg)(),(0,l.j4)(W,{key:0,class:"submit-all van-hairline--top",price:100*f.total,"button-text":"结算",onSubmit:f.onSubmit},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{onClick:f.allCheck,checked:e.checkAll,"onUpdate:checked":t[1]||(t[1]=t=>e.checkAll=t)},{default:(0,l.w5)((()=>[p])),_:1},8,["onClick","checked"])])),_:1},8,["price","onSubmit"])):(0,l.kq)("",!0),e.list.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",k,[h,b,(0,l.Wm)(Z,{round:"",color:"#1baeae",type:"primary",onClick:f.goTo,block:""},{default:(0,l.w5)((()=>[v])),_:1},8,["onClick"])])),(0,l.Wm)(D)])}a(767);var C=a(7619),w=(a(6699),a(8809)),y=a(4870),_=a(678),I=a(65),Z=a(2378),B=a(7554),x={components:{navBar:Z.Z,sHeader:B.Z},setup(){const e=(0,_.tv)(),t=(0,I.oR)(),a=(0,y.qj)({checked:!1,list:[],all:!1,result:[],checkAll:!0});(0,l.bv)((()=>{n()}));const n=async()=>{C.Z.loading({message:"加载中...",forbidClick:!0});const{data:e}=await(0,w.dv)({pageNumber:1});console.log(e),a.list=e,a.result=e.map((e=>e.cartItemId)),console.log("商品id"+a.result),C.Z.clear()},o=(0,l.Fl)((()=>{let e=a.list.filter((e=>a.result.includes(e.cartItemId)));console.log(e);let t=e.reduce(((e,t)=>e+t.goodsCount*t.sellingPrice),0);return t})),c=()=>{e.go(-1)},s=()=>{e.push({path:"/home"})},i=async(e,t)=>{if(a.list.filter((e=>e.cartItemId==t.name))[0].goodsCount==e)return;C.Z.loading({message:"修改中...",forbidClick:!0});const l={cartItemId:t.name,goodsCount:e};await(0,w.qi)(l),a.list.forEach((a=>{a.cartItemId==t.name&&(a.goodsCount=e)})),C.Z.clear()},r=async()=>{if(0==a.result.length)return void C.Z.fail("请选择商品进行结算");const t=JSON.stringify(a.result);console.log(t),e.push({path:"/create-order",query:{cartItemIds:t}})},u=async e=>{await(0,w.GR)(e),t.dispatch("updateCart"),n()},d=e=>{console.log(e),a.checkAll=e.length==a.list.length},g=()=>{a.checkAll?a.result=[]:a.result=a.list.map((e=>e.cartItemId))};return{...(0,y.BK)(a),total:o,goBack:c,goTo:s,onChange:i,onSubmit:r,deleteGood:u,groupChange:d,allCheck:g}}},W=a(89);const D=(0,W.Z)(x,[["render",f]]);var S=D}}]);
//# sourceMappingURL=cart.90e71f27.js.map