"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[197],{49197:(e,a,r)=>{r.r(a),r.d(a,{default:()=>d}),r(52262);var t=r(65400),n=(r(10524),r(31059)),s=(r(69852),r(97538)),l=(r(67272),r(51024)),o=r(15861),u=r(87757),m=r.n(u),c=r(67294),i=(r(39704),r(80710)),p=(r(80129),r(58061));const d=function(){var e=function(){var e=(0,o.Z)(m().mark((function e(a){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r={username:a.username,password:a.password},void 0,t={method:"POST",body:JSON.stringify(r)},(0,i.Z)("".concat(p.Sg,"/user/login"),t);case 2:200===e.sent.data.code&&(window.location.href="/case-lib");case 5:case"end":return e.stop()}var r,t}),e)})));return function(a){return e.apply(this,arguments)}}();return c.createElement("div",{className:"login-wrap"},c.createElement("div",{className:"title"},"欢迎使用"),c.createElement(s.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{username:"root",password:"root123",remember:!0},onFinish:e,onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off"},c.createElement(s.Z.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"Please input your username!"}]},c.createElement(l.default,null)),c.createElement(s.Z.Item,{label:"密码",name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.createElement(l.default.Password,null)),c.createElement(s.Z.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16}},c.createElement(n.default,null,"记住")),c.createElement(s.Z.Item,{wrapperCol:{offset:8,span:16}},c.createElement(t.default,{type:"primary",htmlType:"submit"},"登入"))))}}}]);