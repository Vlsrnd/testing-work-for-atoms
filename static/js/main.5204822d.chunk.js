(this.webpackJsonpborjomi=this.webpackJsonpborjomi||[]).push([[0],{12:function(e,t,i){e.exports={header:"Header_header__23vRI",loginBtn:"Header_loginBtn__jqciD",activeLink:"Header_activeLink__3YAuC",logoImg:"Header_logoImg__1R2i3",navList:"Header_navList__3MrsY",mobileMenu:"Header_mobileMenu__1_D8V",mobileMenuList:"Header_mobileMenuList__3aR96",mobileMenuIcon:"Header_mobileMenuIcon__1XLeC",mobileMenuIconOpen:"Header_mobileMenuIconOpen__2OEAh",mobileMenuIconClose:"Header_mobileMenuIconClose__3Ulgu"}},13:function(e,t,i){e.exports={login:"Login_login__22LEc",closeBtn:"Login_closeBtn__195vt",error:"Login_error__1UIxH",email:"Login_email__3A_Fi",forgetPassword:"Login_forgetPassword__GaLe6"}},20:function(e,t,i){e.exports={customCheckbox:"CustomCheckbox_customCheckbox__3GQ-d",box:"CustomCheckbox_box__1_5bF",errorBox:"CustomCheckbox_errorBox__3mIAF"}},21:function(e,t,i){e.exports={withWrapperThree:"ConcentricDiv_withWrapperThree__2R4HS",withWrapperTwo:"ConcentricDiv_withWrapperTwo__32Rqh",pulse2px:"ConcentricDiv_pulse2px__1BTzQ",pulse1px:"ConcentricDiv_pulse1px__3N97N",additionalLine:"ConcentricDiv_additionalLine__1LrFO",pulse05px:"ConcentricDiv_pulse05px__1awHU"}},3:function(e,t,i){e.exports={registration:"Registration_registration__26uk_",error:"Registration_error__kDg9c",closeBtn:"Registration_closeBtn__3VTnt",firstNameLastName:"Registration_firstNameLastName__3ykT9",emailPhone:"Registration_emailPhone__QVdwl",customCheckbox:"Registration_customCheckbox__J-vLM",rulesCheckbox:"Registration_rulesCheckbox__12Q0p",emailCheckbox:"Registration_emailCheckbox__10TBX",smsCheckbox:"Registration_smsCheckbox__3OU1h",commonError:"Registration_commonError__3Hbu0",attention:"Registration_attention__22pHR",commonErrorClose:"Registration_commonErrorClose__2Q5qi",commonErrorText:"Registration_commonErrorText__31WmG",submitBtn:"Registration_submitBtn__1jUle",autorizeBtn:"Registration_autorizeBtn__1hwwn"}},38:function(e,t,i){e.exports={modal:"Authorization_modal__rWUgY"}},44:function(e,t,i){},45:function(e,t,i){},6:function(e,t,i){e.exports={main:"Main_main__2KAkC",greenCircle:"Main_greenCircle__q3cbd",leftColumn:"Main_leftColumn__3Q_vJ",bill:"Main_bill__btQAC",centralImg:"Main_centralImg__3-kuE",mobileRules:"Main_mobileRules__3kCpP",mobileUserDeal:"Main_mobileUserDeal__2Pnqt",mobileBill:"Main_mobileBill__EVAhX",mobileCentralImg:"Main_mobileCentralImg__1J6gs",centralColumn:"Main_centralColumn__Y_lRT",rightColumn:"Main_rightColumn__33WuJ",prizes:"Main_prizes__3KLWG",superPrize:"Main_superPrize__1rBAo",picture:"Main_picture__295kG"}},74:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i(1),s=i(24),c=i.n(s),a=(i(44),i(10)),o=i(2),l=i(18),m=(i(45),i(12)),j=i.n(m),b=i.p+"static/media/logo.e3d74db6.svg",d=i.p+"static/media/mobile-menu-btn.873f26b2.svg",u=i.p+"static/media/mobile-menu-btn-close.49ec80b2.svg",h=function(e){var t=e.isAuth,i=e.userName,r=e.isMobile,s=e.showAuthorization;return Object(n.jsx)("div",{className:j.a.loginBtn,onClick:s,children:t?i:r?"\u041b\u0418\u0427\u041d\u042b\u0419 \u041a\u0410\u0411\u0418\u041d\u0415\u0422":"\u0412\u041e\u0419\u0422\u0418"})},x=function(){return[{link:"/",text:"\u0433\u043b\u0430\u0432\u043d\u0430\u044f",isExact:!0},{link:"/rules",text:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0430\u043a\u0446\u0438\u0438"},{link:"/prizes",text:"\u043f\u0440\u0438\u0437\u044b"},{link:"/winners",text:"\u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0438"},{link:"/feedback",text:"\u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"}].map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{exact:e.isExact,to:e.link,activeClassName:j.a.activeLink,children:e.text})},e.link+e.text)}))},_=function(e){var t=e.isAuth,i=e.showAuthorization,s=Object(r.useState)(!1),c=Object(a.a)(s,2),o=c[0],l=c[1],m=function(){return l((function(e){return!e}))};return Object(n.jsxs)("div",{className:j.a.mobileMenu,children:[!o&&Object(n.jsx)("div",{className:"".concat(j.a.mobileMenuIcon," ").concat(j.a.mobileMenuIconOpen),children:Object(n.jsx)("img",{onClick:m,src:d,alt:"menu"})}),o&&Object(n.jsxs)("ul",{onClick:m,className:j.a.mobileMenuList,children:[Object(n.jsx)("div",{className:"".concat(j.a.mobileMenuIcon," ").concat(j.a.mobileMenuIconClose),children:Object(n.jsx)("img",{src:u,alt:"close"})}),Object(n.jsx)(x,{}),Object(n.jsx)(h,{isAuth:t,isMobile:!0,showAuthorization:i})]})]})},O=function(e){var t=e.isAuth,i=e.showAuthorization;return Object(n.jsxs)("header",{className:j.a.header,children:[Object(n.jsx)("img",{className:j.a.logoImg,src:b,alt:"logo"}),Object(n.jsx)("nav",{className:j.a.navList,children:Object(n.jsxs)("ul",{children:[Object(n.jsx)(x,{}),Object(n.jsx)(h,{isAutn:t,showAuthorization:i})]})}),Object(n.jsx)(_,{showAuthorization:i})]})},p=i(19),g=i(13),v=i.n(g),f=i(36),N=function(e){var t=e.setRegistrationMode,i=e.hideAuthorization,r=Object(p.a)({mode:"onTouched",shouldFocusError:!1}),s=r.register,c=r.handleSubmit,a=r.errors;return Object(n.jsxs)("div",{className:v.a.login,children:[Object(n.jsxs)("form",{onSubmit:c((function(){return f({url:"http://tw-2020.itest.atoms.ru/backend/api/oauth/token",method:"post",auth:{Username:1,Password:"6VnbRlpgkYdbevd564PEv8kBW6IR97rvWv8ZDZbh"},data:{grant_type:"client_credentials"}})})),children:[Object(n.jsx)("img",{className:v.a.closeBtn,src:u,alt:"X",onClick:i}),Object(n.jsx)("header",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(n.jsx)("div",{className:v.a.email,children:Object(n.jsx)("input",{ref:s({required:!0}),name:"username",className:a.username&&v.a.error,type:"email",placeholder:"E-mail"})}),Object(n.jsx)("div",{className:v.a.password,children:Object(n.jsx)("input",{ref:s({required:!0,minLength:7}),name:"password",className:a.password&&v.a.error,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})}),Object(n.jsx)("div",{className:v.a.forgetPassword,children:"\u0417\u0430\u0431\u044b\u043b \u043f\u0430\u0440\u043e\u043b\u044c?"}),Object(n.jsx)("button",{className:v.a.submitBtn,type:"submit",children:"\u0412\u041e\u0419\u0422\u0418"})]}),Object(n.jsx)("button",{onClick:t,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})},C=i(20),k=i.n(C),w=function(e){var t=e.name,i=e.label,r=e.reactHookFormRegister,s=e.errors;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:k.a.customCheckbox,ref:r,type:"checkbox",name:t,id:t}),Object(n.jsxs)("label",{htmlFor:t,children:[Object(n.jsx)("div",{className:"".concat(k.a.box," ").concat(s&&k.a.errorBox)}),i]})]})},M=i(37),R=i.n(M),L=i(3),z=i.n(L),B=i.p+"static/media/attention.b42f08e3.svg",I=i.p+"static/media/red-close.3283ddbd.svg",A=function(e){var t=e.clearErrors;return Object(n.jsxs)("div",{className:z.a.commonError,children:[Object(n.jsx)("div",{className:z.a.attention,children:Object(n.jsx)("img",{src:B,alt:"!"})}),Object(n.jsx)("div",{className:z.a.commonErrorText,children:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041e\u0434\u043d\u043e \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0435\u0439 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0438\u043b\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043d\u0435\u0432\u0435\u0440\u043d\u043e. \u041f\u0440\u043e\u0432\u0435\u0440\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439."}),Object(n.jsx)("div",{className:z.a.commonErrorClose,children:Object(n.jsx)("img",{src:I,alt:"X",onClick:function(){return t()}})})]})},E=function(e){var t=e.setLoginMode,i=e.hideAuthorization,r=Object(p.a)({mode:"onTouched",shouldFocusError:!1}),s=r.register,c=r.handleSubmit,a=r.errors,o=r.clearErrors,l=Object(n.jsxs)("div",{children:["\u042f \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b \u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441",Object(n.jsx)("a",{href:"http://www.google.com",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0430\u043a\u0446\u0438\u0438"}),"\u0438 ",Object(n.jsx)("a",{href:"http://www.google.com",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435\u043c"}),", \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"]}),m=Object(n.jsx)("div",{children:"\u042f  \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u0430\u043a\u0446\u0438\u0438 \u043f\u043e E-mail"}),j=Object(n.jsx)("div",{children:"\u042f  \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u0430\u043a\u0446\u0438\u0438 \u043f\u043e \u0441\u043c\u0441"});return Object(n.jsxs)("div",{className:z.a.registration,children:[Object(n.jsxs)("form",{onSubmit:c((function(e){return console.log(e)})),children:[Object(n.jsx)("img",{className:z.a.closeBtn,src:u,alt:"X",onClick:i}),Object(n.jsx)("header",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsxs)("div",{className:z.a.firstNameLastName,children:[Object(n.jsx)("input",{ref:s({required:!0}),name:"first_name",className:a.first_name&&z.a.error,type:"text",placeholder:"\u0418\u043c\u044f"}),Object(n.jsx)("input",{ref:s({required:!0}),name:"last_name",className:a.last_name&&z.a.error,type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"})]}),Object(n.jsxs)("div",{className:z.a.emailPhone,children:[Object(n.jsx)("input",{ref:s({required:!0}),name:"email",className:a.email&&z.a.error,type:"email",placeholder:"E-mail"}),Object(n.jsx)(R.a,{mask:"+7 (999) 999-99-99",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",inputRef:s({required:!0,pattern:/\+[0-9]\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/}),name:"phone",className:a.phone&&z.a.error})]}),Object(n.jsx)("div",{className:"".concat(z.a.customCheckbox," ").concat(z.a.rulesCheckbox),children:Object(n.jsx)(w,{name:"rules",label:l,reactHookFormRegister:s({required:!0}),errors:a.rules})}),Object(n.jsx)("div",{className:"".concat(z.a.customCheckbox," ").concat(z.a.emailCheckbox),children:Object(n.jsx)(w,{name:"agreements_email",label:m,reactHookFormRegister:s})}),Object(n.jsx)("div",{className:"".concat(z.a.customCheckbox," ").concat(z.a.smsCheckbox),children:Object(n.jsx)(w,{name:"agreements_sms",label:j,reactHookFormRegister:s})}),!!Object.keys(a).length&&Object(n.jsx)(A,{clearErrors:o}),Object(n.jsx)("button",{className:z.a.submitBtn,type:"submit",children:"\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c\u0421\u042f"})]}),Object(n.jsx)("button",{onClick:t,className:z.a.autorizeBtn,children:"\u0410\u0412\u0422\u041e\u0420\u0418\u0417\u041e\u0412\u0410\u0422\u042c\u0421\u042f"})]})},H=i(38),P=i.n(H),y=function(e){var t=e.hideAuthorization,i=Object(r.useState)(!0),s=Object(a.a)(i,2),c=s[0],o=s[1];return Object(n.jsxs)("div",{className:P.a.modal,children:[c&&Object(n.jsx)(N,{setRegistrationMode:function(){return o(!1)},hideAuthorization:t}),!c&&Object(n.jsx)(E,{setLoginMode:function(){return o(!0)},hideAuthorization:t})]})},T=i(21),F=i.n(T),D=function(e){var t=e.element,i=e.width,r=void 0===i?120:i,s=e.height,c=void 0===s?120:s,a=e.numberLines,o={width:r+"px",height:c+"px"};return 3===(void 0===a?2:a)?Object(n.jsxs)("div",{className:F.a.withWrapperThree,style:o,children:[Object(n.jsx)("div",{className:F.a.additionalLine}),t]}):Object(n.jsx)("div",{className:F.a.withWrapperTwo,style:o,children:t})},q=i(6),W=i.n(q),U=i.p+"static/media/prizes.5b34b6c7.png",S=i.p+"static/media/super-prize.199c828b.png",J=i.p+"static/media/centralImg.01299265.png",Q=i.p+"static/media/centralImg-mobile.21e38bec.png",X=function(){var e=Object(n.jsx)("div",{children:"\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c \u0427\u0415\u041a"}),t=Object(n.jsx)("img",{src:U,alt:"prizes"}),i=Object(n.jsx)("img",{src:S,alt:"super prize"});return Object(n.jsxs)("div",{className:W.a.main,children:[Object(n.jsx)("div",{className:W.a.greenCircle}),Object(n.jsxs)("div",{className:W.a.leftColumn,children:[Object(n.jsx)("div",{children:"\u041e\u0442\u043c\u0435\u0447\u0430\u0439"}),Object(n.jsx)("div",{children:"\u043d\u0430 \u0432\u0441\u0435  130%"}),Object(n.jsx)("div",{className:W.a.bill,children:Object(n.jsx)(D,{element:e,width:284,height:60,numberLines:3})}),Object(n.jsx)("div",{children:"\u041f\u043e\u0434\u0430\u0440\u043a\u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441"}),Object(n.jsx)("img",{src:b,alt:"BORJOMI"})]}),Object(n.jsxs)("div",{className:W.a.centralColumn,children:[Object(n.jsx)("div",{className:W.a.centralImg,children:Object(n.jsx)("img",{src:J,alt:"bottle tree and men"})}),Object(n.jsx)("div",{className:W.a.mobileCentralImg,children:Object(n.jsx)("img",{src:Q,alt:"bottle tree and men"})}),Object(n.jsx)("div",{className:W.a.mobileBill,children:e}),Object(n.jsx)("div",{className:W.a.mobileRules,children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0430\u043a\u0446\u0438\u0438"}),Object(n.jsx)("div",{className:W.a.mobileUserDeal,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})]}),Object(n.jsxs)("div",{className:W.a.rightColumn,children:[Object(n.jsxs)("div",{className:W.a.prizes,children:[Object(n.jsx)("div",{children:"\u0423\u0447\u0430\u0432\u0441\u0442\u0432\u0443\u0439"}),Object(n.jsx)("div",{children:"\u0432 \u0440\u043e\u0437\u044b\u0433\u0440\u044b\u0448\u0435"}),Object(n.jsx)("div",{children:"\u0441\u0442\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043e\u0432"}),Object(n.jsx)("div",{className:W.a.picture,children:Object(n.jsx)(D,{element:t,width:126,height:126})})]}),Object(n.jsxs)("div",{className:W.a.superPrize,children:[Object(n.jsx)("div",{children:"\u041f\u043e\u043b\u0443\u0447\u0438 \u0448\u0430\u043d\u0441"}),Object(n.jsx)("div",{children:"\u0432\u044b\u0438\u0433\u0440\u0430\u0442\u044c"}),Object(n.jsx)("div",{className:W.a.picture,children:Object(n.jsx)(D,{element:i,width:132,height:129})})]})]})]})},G=function(){return Object(n.jsx)("div",{className:"emptyPage",children:"rules"})},V=function(){return Object(n.jsx)("div",{className:"emptyPage",children:"prizes"})},Y=function(){return Object(n.jsx)("div",{className:"emptyPage",children:"winners"})},K=function(){return Object(n.jsx)("div",{className:"emptyPage",children:"feedback"})},Z=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),i=t[0],s=t[1];return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(O,{showAuthorization:function(){return s(!0)}}),i&&Object(n.jsx)(y,{hideAuthorization:function(){return s(!1)}}),Object(n.jsxs)("main",{className:"container",children:[Object(n.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(X,{})}}),Object(n.jsx)(o.a,{path:"/rules",render:function(){return Object(n.jsx)(G,{})}}),Object(n.jsx)(o.a,{path:"/prizes",render:function(){return Object(n.jsx)(V,{})}}),Object(n.jsx)(o.a,{path:"/winners",render:function(){return Object(n.jsx)(Y,{})}}),Object(n.jsx)(o.a,{path:"/feedback",render:function(){return Object(n.jsx)(K,{})}})]})]})},$=function(){return Object(n.jsx)(l.a,{basename:"",children:Object(n.jsx)(Z,{})})},ee=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,75)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(n.jsx)($,{}),document.getElementById("root")),ee()}},[[74,1,2]]]);
//# sourceMappingURL=main.5204822d.chunk.js.map