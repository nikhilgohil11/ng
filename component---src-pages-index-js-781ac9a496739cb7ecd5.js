(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(187),r=a(212),o=a.n(r),m=a(282),c=a(301),s=a.n(c),d=a(182),p=d.b.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1rq5al0-0"})(["padding-bottom:4rem;background-image:url('../illustrations/overlay.svg');background-size:contain;background-position:right top;background-repeat:no-repeat;"]),u=d.b.div.withConfig({displayName:"styles__IntroWrapper",componentId:"sc-1rq5al0-1"})(["padding:4rem 0;display:flex;align-items:center;justify-content:space-between;@media (max-width:960px){flex-direction:column;}"]),g=d.b.div.withConfig({displayName:"styles__Details",componentId:"sc-1rq5al0-2"})(["flex:1;@media (max-width:960px){width:100%;margin-bottom:2rem;}h1{margin-bottom:2rem;font-size:36pt;color:#212121;@media (max-width:680px){font-size:30pt;}}h4{margin-bottom:2.5rem;font-size:32pt;font-weight:normal;color:#707070;@media (max-width:680px){font-size:26pt;}}"]),h=d.b.div.withConfig({displayName:"styles__Thumbnail",componentId:"sc-1rq5al0-3"})(["flex:1;@media (max-width:960px){width:100%;}img{width:100%;}"]),f=function(){return i.a.createElement(p,null,i.a.createElement(m.b,null),i.a.createElement(u,{as:l.c},i.a.createElement(g,null,i.a.createElement("h1",null,"Hi There!"),i.a.createElement("h4",null,"I’m Nikhil Gohil and I’m a Mobile engineer! (iOS/Android)"),i.a.createElement(l.a,{as:o.a,href:"#contact"},"Talk to me!")),i.a.createElement(h,null,i.a.createElement("img",{src:s.a,alt:"I’m Nikhil Gohil and I’m a Mobile engineer! (iOS/Android)"}))))},y=a(302),I=a.n(y),b=d.b.div.withConfig({displayName:"styles__Wrapper",componentId:"puvh2p-0"})(["background-image:url('../illustrations/details.svg');background-size:contain;background-position:left top;background-repeat:no-repeat;"]),w=d.b.div.withConfig({displayName:"styles__SkillsWrapper",componentId:"puvh2p-1"})(["padding:4rem 0;display:flex;align-items:center;justify-content:space-between;@media (max-width:960px){flex-direction:column;}"]),x=d.b.div.withConfig({displayName:"styles__Details",componentId:"puvh2p-2"})(["flex:1;padding-left:2rem;@media (max-width:960px){padding-left:unset;width:100%;}h1{margin-bottom:2rem;font-size:26pt;color:#212121;}p{margin-bottom:2.5rem;font-size:20pt;font-weight:normal;line-height:1.3;color:#707070;}"]),M=d.b.div.withConfig({displayName:"styles__Thumbnail",componentId:"puvh2p-3"})(["flex:1;@media (max-width:960px){width:100%;margin-bottom:2rem;}img{width:100%;}"]),E=function(){return i.a.createElement(b,{id:"about"},i.a.createElement(w,{as:l.c},i.a.createElement(M,null,i.a.createElement("img",{src:I.a,alt:"I’m Nikhil Gohil and I’m a Mobile engineer!"})),i.a.createElement(x,null,i.a.createElement("h1",null,"About me!"),i.a.createElement("p",null,"I code in Swift, Javascript [ React Native ], Objective-C, python."),i.a.createElement("p",null,"More than 40+ apps developed for product and service-based MNCs."),i.a.createElement(l.a,{as:o.a,href:"#contact"},"Consult me"))))},v=a(303),N=a.n(v),C=d.b.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1kmwe1u-0"})(["padding:4rem 0;display:flex;align-items:flex-start;justify-content:space-between;@media (max-width:960px){flex-direction:column;}"]),j=d.b.div.withConfig({displayName:"styles__Details",componentId:"sc-1kmwe1u-1"})(["flex:1;padding-right:2rem;@media (max-width:960px){padding-right:unset;width:100%;order:1;}h1{margin-bottom:2rem;font-size:26pt;color:#212121;}p{margin-bottom:2.5rem;font-size:20pt;font-weight:normal;line-height:1.3;color:#707070;}"]),S=d.b.div.withConfig({displayName:"styles__Thumbnail",componentId:"sc-1kmwe1u-2"})(["flex:1;@media (max-width:960px){width:100%;margin-bottom:2rem;}img{width:100%;}"]),A=(a(35),a(304)),L=a.n(A),k=(a(45),a(238),a(33),a(27),a(28),a(15),a(440)),D=a(441),_=a(309),T=a(237),z=d.b.span.withConfig({displayName:"styles__Error",componentId:"ako99o-0"})(["color:#ff4136;"]),q=d.b.div.withConfig({displayName:"styles__Center",componentId:"ako99o-1"})(["text-align:left;h4{font-weight:normal;}"]),G=d.b.div.withConfig({displayName:"styles__InputField",componentId:"ako99o-2"})(["position:relative;margin-bottom:1rem;"]);function W(e,t,a,n,i,l,r){try{var o=e[l](r),m=o.value}catch(c){return void a(c)}o.done?t(m):Promise.resolve(m).then(n,i)}var O=Object(k.d)({mapPropsToValues:function(){return{name:"",email:"",message:"",recaptcha:"",success:!1}},validationSchema:function(){return _.object().shape({name:_.string().required("Full name field is required"),email:_.string().email("Invalid email").required("Email field is required"),message:_.string().required("Message field is required"),recaptcha:_.string().required("Robots are not welcome yet!")})},handleSubmit:function(){var e,t=(e=L.a.mark(function e(t,a){var n,i,l,r,o,m,c,s;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,i=t.email,l=t.message,r=t.recaptcha,o=a.setSubmitting,m=a.resetForm,c=a.setFieldValue,e.prev=2,s=function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},e.next=6,fetch("/?no-cache=1",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s({"form-name":"Contact: nikhilgohil11.com",name:n,email:i,message:l,"g-recaptcha-response":r})});case 6:o(!1),m(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),o(!1),c("success",!1),alert("Something went wrong, please try again!");case 15:case"end":return e.stop()}},e,null,[[2,10]])}),function(){var t=this,a=arguments;return new Promise(function(n,i){var l=e.apply(t,a);function r(e){W(l,n,i,r,o,"next",e)}function o(e){W(l,n,i,r,o,"throw",e)}r(void 0)})});return function(e,a){return t.apply(this,arguments)}}()})(function(e){var t=e.setFieldValue,a=e.isSubmitting,n=e.values,r=e.errors,o=e.touched;return i.a.createElement(k.c,{name:"portfolio-dev",method:"post","data-netlify":"true","data-netlify-recaptcha":"true","data-netlify-honeypot":"bot-field"},i.a.createElement(G,null,i.a.createElement(l.d,{as:k.b,type:"text",name:"name",component:"input","aria-label":"name",placeholder:"Full name*",error:o.name&&r.name}),i.a.createElement(k.a,{component:z,name:"name"})),i.a.createElement(G,null,i.a.createElement(l.d,{id:"email","aria-label":"email",component:"input",as:k.b,type:"email",name:"email",placeholder:"Email*",error:o.email&&r.email}),i.a.createElement(k.a,{component:z,name:"email"})),i.a.createElement(G,null,i.a.createElement(l.d,{as:k.b,component:"textarea","aria-label":"message",id:"message",rows:"8",type:"text",name:"message",placeholder:"Message*",error:o.message&&r.message}),i.a.createElement(k.a,{component:z,name:"message"})),n.name&&n.email&&n.message&&i.a.createElement(G,null,i.a.createElement(k.b,{component:D.a,sitekey:T.recaptcha_key,name:"recaptcha",onChange:function(e){return t("recaptcha",e)}}),i.a.createElement(k.a,{component:z,name:"recaptcha"})),n.success&&i.a.createElement(G,null,i.a.createElement(q,null,i.a.createElement("h4",null,"Your message has been successfully sent, I will get back to you ASAP!"))),i.a.createElement(q,null,i.a.createElement(l.a,{secondary:!0,type:"submit",disabled:a},"Submit")))}),P=function(){return i.a.createElement(C,{as:l.c,id:"contact"},i.a.createElement(j,null,i.a.createElement(O,null)),i.a.createElement(S,null,i.a.createElement("img",{src:N.a,alt:"I’m Nikhil Gohil and I’m an mobile engineer!"})))};a(232),a(438),a(439),d.b.div.withConfig({displayName:"styles__Wrapper",componentId:"lc1qs2-0"})(["padding:2rem 0;"]),d.b.div.withConfig({displayName:"styles__Grid",componentId:"lc1qs2-1"})(["display:grid;align-items:center;grid-template-columns:repeat(3,1fr);grid-template-rows:8fr;gap:1.2rem 1.2rem;@media (max-width:960px){grid-template-columns:repeat(2,1fr);}@media (max-width:680px){grid-template-columns:1fr;}"]),d.b.div.withConfig({displayName:"styles__Item",componentId:"lc1qs2-2"})(["width:100%;height:100%;overflow:hidden;box-shadow:0 1px 6px 0 rgba(0,0,0,0.11);h4{color:#212121;}p{color:#707070;}"]),d.b.div.withConfig({displayName:"styles__Content",componentId:"lc1qs2-3"})(["padding:1rem 0;"]),d.b.div.withConfig({displayName:"styles__Stats",componentId:"lc1qs2-4"})(["display:flex;align-items:center;div{display:flex;&:first-child{margin-right:0.5rem;}img{margin:0;}span{color:#000;margin-left:0.5rem;}}"]),t.default=function(){return i.a.createElement(l.e,null,i.a.createElement(l.f,null),i.a.createElement(f,null),i.a.createElement(E,null),i.a.createElement(P,null))}},301:function(e,t,a){e.exports=a.p+"static/dev-9e2d15d22a96d1a4524d7bebc52b4889.svg"},302:function(e,t,a){e.exports=a.p+"static/skills-ac8dbafdf432c18a6e4d62a715e84ac3.svg"},303:function(e,t,a){e.exports=a.p+"static/contact-a17165fdb242f6435ede1a46a7f2b4ec.svg"},438:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NEwxNCA2eiIvPjwvc3ZnPg=="},439:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcyVjZMNSA4IDMgNlY0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDIgMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNi41bDMgM3YxLjc4QTEuOTkzIDEuOTkzIDAgMCAwIDUgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyVjkuNWwzLTNWNC43MkExLjk5MyAxLjk5MyAwIDAgMCA4IDF6TTIgNC4yQzEuMzQgNC4yLjggMy42NS44IDNjMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTMgMTBjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMy0xMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yeiIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-781ac9a496739cb7ecd5.js.map