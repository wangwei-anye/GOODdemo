"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[197],{49197:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d}),t(52262);var r=t(65400),n=(t(10524),t(31059)),s=(t(69852),t(97538)),l=(t(67272),t(51024)),o=t(15861),u=t(87757),m=t.n(u),c=t(67294),i=(t(39704),t(80710)),p=(t(80129),t(58061));const d=function(){var e=function(){var e=(0,o.Z)(m().mark((function e(a){var t,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={username:a.username,password:a.password},void 0,s={method:"POST",body:JSON.stringify(n)},(0,i.Z)("".concat(p.Sg,"/user/login"),s);case 2:t=e.sent,200===(r=t.data).code&&(localStorage.token=r.data,window.location.href="/case-lib");case 5:case"end":return e.stop()}var n,s}),e)})));return function(a){return e.apply(this,arguments)}}();return c.createElement("div",{className:"login-wrap"},c.createElement("div",{className:"title"},"欢迎使用"),c.createElement(s.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{username:"root",password:"root123",remember:!0},onFinish:e,onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off"},c.createElement(s.Z.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"Please input your username!"}]},c.createElement(l.default,null)),c.createElement(s.Z.Item,{label:"密码",name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.createElement(l.default.Password,null)),c.createElement(s.Z.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16}},c.createElement(n.default,null,"记住")),c.createElement(s.Z.Item,{wrapperCol:{offset:8,span:16}},c.createElement(r.default,{type:"primary",htmlType:"submit"},"登入"))))}}}]);