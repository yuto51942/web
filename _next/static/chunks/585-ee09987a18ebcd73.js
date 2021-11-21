"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{3892:function(t,e,n){var r,c,a,o;n.d(e,{h:function(){return r},V:function(){return a}}),(c=r||(r={}))[c.normal=0]="normal",(o=a||(a={})).senju="\u5343\u4f4f",o.hatoyama="\u9ce9\u5c71"},7799:function(t,e,n){n.d(e,{h:function(){return x},X:function(){return k}});var r=n(5893),c=n(7294),a=n(8448),o=n(4096),i=n(8017),u=n(4115),s=n(7341),f=n(7389),h=n(2083),l=n(155),p=n(5063),d=n(2804),b=n(6064);function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){v(t,e,n[e])}))}return t}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(t){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(a.M,{marginBottom:"2rem",children:(0,r.jsxs)(o.k,{width:"20rem",children:[(0,r.jsx)(i.xu,{display:"flex",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(u.x,{fontSize:t.size||"1.3rem",fontWeight:"bold",marginLeft:t.marginLeft||"1.2rem",color:(0,h.O)("textPrimary"),children:t.title})}),(0,r.jsx)(s.L,{}),(0,r.jsx)(p.default,{href:"/",children:(0,r.jsx)(f.z,{borderRadius:"2rem",leftIcon:(0,r.jsx)(l.KkC,{}),backgroundColor:(0,h.O)("buttonSecondly"),color:(0,h.O)("buttonIconSecondly"),width:"9rem",children:(0,r.jsx)(u.x,{color:(0,h.O)("textPrimary"),children:"\u30db\u30fc\u30e0\u3078\u623b\u308b"})})})]})}),t.children]})},k=function(t){var e=y((0,d.FV)(b.Jk),2)[1],n=y((0,d.FV)(b.vx),2)[1];return(0,r.jsx)(p.default,{href:t.link,children:(0,r.jsx)(f.z,m({onClick:function(){e(!1),n(!1)}},t.buttonProps,{children:t.children}))})}},1529:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(5666),c=n.n(r),a=n(3892);function o(t,e,n,r,c,a,o){try{var i=t[a](o),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,c)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,c){var a=t.apply(e,n);function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}i(void 0)}))}}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api="https://api.tdu.app",this.userApi="".concat(this.api,"/user"),this.logApi="".concat(this.api,"/log")}var e,n,r;return e=t,(n=[{key:"createAccount",value:function(t){return i(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=this.fetchOption("POST")).body="user_name=".concat(t),e.next=4,fetch(this.userApi,n);case 4:return r=e.sent,e.next=7,this.checkStatus(r,(function(){}));case 7:return e.next=9,r.json();case 9:return e.abrupt("return",e.sent.id);case 10:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"getUserInfo",value:function(t,e){return i(c().mark((function n(){var r,a,o,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={method:"GET"},n.next=3,fetch("".concat(this.userApi,"?id=").concat(t),r);case 3:return a=n.sent,n.next=6,this.checkStatus(a,e);case 6:return n.next=8,a.json();case 8:return o=n.sent,i={id:o.id,name:o.name,numberOfLogs:o.number_of_logs,createDate:o.create_date,updateDate:new Date},n.abrupt("return",i);case 11:case"end":return n.stop()}}),n,this)})).bind(this))()}},{key:"changeName",value:function(t,e,n){return i(c().mark((function r(){var a,o;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(a=this.fetchOption("POST")).body="id=".concat(t,"&user_name=").concat(e),r.next=4,fetch(this.userApi,a);case 4:return o=r.sent,r.next=7,this.checkStatus(o,n);case 7:case"end":return r.stop()}}),r,this)})).bind(this))()}},{key:"deleteUser",value:function(t){return i(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.fetchOption("DELETE"),e.next=3,fetch("".concat(this.userApi,"?id=").concat(t),n);case 3:return r=e.sent,e.next=6,this.checkStatus(r,(function(){}));case 6:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"rank",value:function(){return i(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this.fetchOption("GET")).cache="default",t.next=4,fetch("".concat(this.api,"/rank"),e);case 4:return n=t.sent,t.next=7,this.checkStatus(n,(function(){}));case 7:return t.next=9,n.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"addLog",value:function(t,e,n){return i(c().mark((function r(){var a,o,i,u;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.map((function(t){return{date:t.date.toISOString(),campus:t.campus,log_type:"".concat(t.type),label:t.label,code:t.code}})),o={id:t,logs:a},(i=this.fetchOption("POST")).headers={"Content-Type":"application/json"},i.body=JSON.stringify(o),r.next=7,fetch(this.logApi,i);case 7:return u=r.sent,r.next=10,this.checkStatus(u,n);case 10:case"end":return r.stop()}}),r,this)})).bind(this))()}},{key:"getLogs",value:function(t,e){return i(c().mark((function n(){var r,o,i,u,s,f,h,l,p,d;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=this.fetchOption("GET"),n.next=3,fetch("".concat(this.logApi,"?id=").concat(t),r);case 3:return o=n.sent,n.next=6,this.checkStatus(o,e);case 6:return n.next=8,o.json();case 8:for(i=n.sent,u=[],s=!0,f=!1,h=void 0,n.prev=11,l=i[Symbol.iterator]();!(s=(p=l.next()).done);s=!0)d=p.value,u.push({campus:this.selectCampus(d.campus),code:d.code,type:a.h[d.log_type],label:d.label,date:new Date(d.date)});n.next=19;break;case 15:n.prev=15,n.t0=n.catch(11),f=!0,h=n.t0;case 19:n.prev=19,n.prev=20,s||null==l.return||l.return();case 22:if(n.prev=22,!f){n.next=25;break}throw h;case 25:return n.finish(22);case 26:return n.finish(19);case 27:return n.abrupt("return",u);case 28:case"end":return n.stop()}}),n,this,[[11,15,19,27],[20,,22,26]])})).bind(this))()}},{key:"checkStatus",value:function(t,e){return i(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.ok){n.next=12;break}return 400===t.status&&e(),n.t0=Error,n.t1="".concat(t.status,": "),n.next=6,t.text();case 6:if(n.t2=n.sent,n.t2){n.next=9;break}n.t2="No Text";case 9:throw n.t3=n.t2,n.t4=n.t1.concat.call(n.t1,n.t3),new n.t0(n.t4);case 12:case"end":return n.stop()}}),n)})))()}},{key:"selectCampus",value:function(t){switch(t){case"\u5343\u4f4f":return a.V.senju;case"\u9ce9\u5c71":return a.V.hatoyama}}},{key:"fetchOption",value:function(t){var e={credentials:"include",mode:"cors",cache:"no-store"};return f("POST"===t?{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}:{method:t},e)}}])&&u(e.prototype,n),r&&u(e,r),t}()}}]);