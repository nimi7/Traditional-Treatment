(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{137:function(e,t,c){},138:function(e,t,c){},168:function(e,t,c){},169:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},172:function(e,t,c){},173:function(e,t,c){},177:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),j=c(12),r=c.n(j),i=(c(137),c(138),c(230)),b=c(231),l=c(226),o=c(17),d=c(232),O=c(14),h=c(28),x=c.n(h),u=c(16),p=Object(s.createContext)(),m=function(e){var t=Object(s.useState)(""),c=Object(O.a)(t,2),a=c[0],j=c[1],r=Object(s.useState)(""),i=Object(O.a)(r,2),b=i[0],l=i[1],o=Object(s.useState)(""),d=Object(O.a)(o,2),h=d[0],m=d[1];Object(u.f)();return Object(n.jsx)("div",{children:Object(n.jsx)(p.Provider,{value:{signIn:function(){x.a.post("/login",{email:a,password:b}).then((function(e){console.log(e.data.token),m(e.data.token)})).catch((function(e){console.log(e)}))},emailChangeHandler:function(e){j(e.target.value)},passwordChangeHandler:function(e){l(e.target.value)},token:h,logout:function(){m("")}},children:e.children})})},f=function(){var e=Object(d.a)().t,t=Object(s.useContext)(p),c=t.token,a=t.logout;return Object(n.jsx)("div",{children:""===c?Object(n.jsxs)(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(n.jsx)(i.a.Brand,{children:Object(n.jsx)(o.b,{to:"/",children:e("Navbar.1")})}),Object(n.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(i.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsxs)(b.a,{className:"mr-auto",children:[Object(n.jsx)(o.b,{to:"/",children:e("Navbar.2")}),Object(n.jsx)(o.b,{to:"/AboutUs",children:e("Navbar.3")}),Object(n.jsxs)(l.a,{title:e("Navbar.4"),id:"collasible-nav-dropdown",children:[Object(n.jsx)(l.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(l.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(l.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(l.a.Divider,{}),Object(n.jsx)(l.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)(o.b,{to:"/TherapistTraining",children:e("Navbar.5")}),Object(n.jsx)(o.b,{to:"/Publications",children:e("Navbar.6")}),Object(n.jsx)(o.b,{to:"/Donations",children:e("Navbar.7")}),Object(n.jsx)(o.b,{to:"/ContactUs",children:e("Navbar.8")}),Object(n.jsx)(o.b,{to:"/ContactUs",children:e("Navbar.8")}),Object(n.jsx)(o.b,{to:"/login",children:"Login"})]})]})]}):Object(n.jsxs)(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(n.jsx)(i.a.Brand,{}),Object(n.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(i.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsx)(b.a,{className:"mr-auto",children:Object(n.jsx)(o.b,{onClick:function(){a()},to:"",children:"Logout"})}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)(o.b,{to:"/articles",children:"Articles"}),Object(n.jsx)(o.b,{to:"",children:"Gallery"}),Object(n.jsx)(o.b,{to:"",children:"NewsLetter"})]})]})]})})},g=function(){return Object(n.jsx)("header",{children:Object(n.jsx)(f,{})})},v=c(110);c(168);function y(){var e=Object(d.a)().t,t=Object(s.useState)(""),c=Object(O.a)(t,2),a=c[0],j=c[1],r=Object(s.useState)(""),i=Object(O.a)(r,2),b=i[0],l=i[1],o=Object(s.useState)(""),h=Object(O.a)(o,2),u=h[0],p=h[1],m=Object(s.useState)(!1),f=Object(O.a)(m,2),g=f[0],v=f[1];return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"contactUs",children:[Object(n.jsx)("h2",{children:e("contactUs.1")}),Object(n.jsx)("input",{type:"text",value:a,onChange:function(e){j(e.target.value)},placeholder:e("contactUs.2")}),Object(n.jsx)("input",{type:"text",value:b,onChange:function(e){l(e.target.value)},placeholder:e("contactUs.3")}),Object(n.jsx)("input",{type:"email",value:u,onChange:function(e){p(e.target.value)},placeholder:e("contactUs.4")}),g?Object(n.jsx)("div",{className:"msg",children:"Message has been sent"}):"",Object(n.jsxs)("button",{type:"button",class:"btn btn-outline-light",onClick:function(){var e={firstName:a,lastName:b,email:u};console.log(e),x.a.post("/api/forma",e).then((function(e){200===e.status?(v(!0),console.log(e)):console.log("error code ".concat(e.status))})).catch((function(e){console.log(e.message)})),console.log("dgbfhdgngsfg")},children:[e("contactUs.5")," "]})]})})}c(169);var N=c(215),C=c.p+"static/media/Logo.9f583fc6.jpg";c(170);function U(){return Object(n.jsx)("div",{children:Object(n.jsxs)("footer",{class:"footer",children:[Object(n.jsxs)("div",{class:"footer-center col-md-4 col-sm-6",children:[Object(n.jsxs)("p",{class:"fa fa-phone",children:[Object(n.jsx)("p",{children:"  \u05de\u05e2\u05df \u05de\u05db\u05ea\u05d1\u05d9\u05dd     "})," ",Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"\u05ea.\u05d3. 5778, \u05d7\u05d3\u05e8\u05d4, 321000"})]}),Object(n.jsxs)("div",{class:"icons",children:[Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{class:"fa fa-facebook"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{class:"fa fa-twitter"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{class:"fa fa-linkedin"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{class:"fa fa-google-plus"})}),Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{class:"fa fa-instagram"})})]})]}),Object(n.jsxs)("div",{class:"footer-center col-md-4 col-sm-6",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{class:"fa fa-phone"}),Object(n.jsx)("p",{children:"  Wustetsega@gmail.com : \u05d0\u05d9\u05de\u05d9\u05d9\u05dc "})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{class:"fa fa-phone"}),Object(n.jsx)("p",{children:" 053-4220161 : \u05d8\u05dc\u05e4\u05d5\u05df "})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{class:"fa fa-phone"}),Object(n.jsx)("p",{children:" \u05e4\u05e7\u05e1 : 077-4246845 "})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{class:"fa fa-envelope"}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:"https://www.facebook.com/wustetsega/?view_public_for=1355117517896052",children:" \u05dc\u05e2\u05de\u05d5\u05d3 \u05e4\u05d9\u05d9\u05e1\u05d1\u05d5\u05e7 \u05e9\u05dc\u05e0\u05d5"})})]})]}),Object(n.jsxs)("div",{class:"footer-right col-md-4 col-sm-6",children:[Object(n.jsxs)("h2",{children:["   ",Object(n.jsx)("span",{children:' \u05d5\u05d5\u05e1\u05d8\u05d4 \u05e6\u05d2\u05d4 (\u05d7\u05dc"\u05e6)  '})," ",Object(n.jsx)("img",{src:C,width:"100px"}),"  ",Object(n.jsx)("br",{})," \u05de\u05e8\u05db\u05d6 \u05dc\u05e4\u05e1\u05d9\u05db\u05d5\u05ea\u05e8\u05e4\u05d9\u05d4 \u05de\u05d5\u05ea\u05d0\u05de\u05ea \u05ea\u05e8\u05d1\u05d5\u05ea "]}),Object(n.jsxs)("p",{class:"menu",children:[Object(n.jsx)("a",{href:"/",children:" \u05d3\u05e3 \u05d4\u05d1\u05d9\u05ea"})," |",Object(n.jsx)("a",{href:"/AboutUs",children:" \u05d0\u05d5\u05d3\u05d5\u05ea\u05d9\u05e0\u05d5"})," |",Object(n.jsx)("a",{href:"/TherapistTraining",children:" \u05d4\u05db\u05e9\u05e8\u05ea \u05de\u05d8\u05e4\u05dc\u05d9\u05dd"})," |",Object(n.jsx)("a",{href:"/CenterActivities",children:" \u05e4\u05e2\u05d9\u05dc\u05d5\u05d9\u05d5\u05ea \u05d4\u05de\u05e8\u05db\u05d6"})," |",Object(n.jsx)("a",{href:"/Donations",children:" \u05ea\u05e8\u05d5\u05de\u05d5\u05ea"})," |",Object(n.jsx)("a",{href:"/ContactUs",children:" \u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8"})]}),Object(n.jsx)("p",{class:"name",children:' \u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05e9\u05de\u05d5\u05e8\u05d5\u05ea \xa9 \u05d5\u05d5\u05e1\u05d8\u05d4 \u05e6\u05d2\u05d4 (\u05d7\u05dc"\u05e6)'})]})]})})}var w=c.p+"static/media/Baboyakov.ccb2a5a2.png",k=c.p+"static/media/GrisroNimrod.41fcfd5e.jpg",A=c.p+"static/media/MariOlman.15f08f34.jpg",S=c.p+"static/media/NeiomiShmoel.238fba0e.jpg",T=c.p+"static/media/RafiYungman.188feab8.jpg",I=c.p+"static/media/YuhaiNadan.88a8c489.jpg";function G(){var e=Object(d.a)().t;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(N.a,{children:[Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)("h3",{children:e("Terapist.GrisroNimrod.1")}),Object(n.jsx)("p",{children:e("Terapist.GrisroNimrod.2")})]}),Object(n.jsx)("img",{className:"mr-3",style:{maxHeight:"250px",maxWidth:"200px"},src:k,alt:"Generic placeholder"})]}),Object(n.jsxs)(N.a,{children:[Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)("h3",{children:e("Terapist.MariOlman.1")}),Object(n.jsx)("p",{children:e("Terapist.MariOlman.2")})]}),Object(n.jsx)("img",{width:200,height:250,className:"mr-3",src:A,alt:"Generic placeholder"})]}),Object(n.jsxs)(N.a,{children:[Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)("h3",{children:e("Terapist.NeiomiShmoel.1")}),Object(n.jsx)("p",{children:e("Terapist.NeiomiShmoel.2")})]}),Object(n.jsx)("img",{width:200,height:250,className:"mr-3",src:S,alt:"Generic placeholder"})]}),Object(n.jsxs)(N.a,{children:[Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)("h3",{children:e("Terapist.RafiYungman.1")}),Object(n.jsx)("p",{children:e("Terapist.RafiYungman.2")})]}),Object(n.jsx)("img",{width:200,height:250,className:"mr-3",src:T,alt:"Generic placeholder"})]}),Object(n.jsxs)(N.a,{children:[Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)("h3",{children:e("Terapist.YuhaiNadan.1")}),Object(n.jsx)("p",{children:e("Terapist.YuhaiNadan.2")})]}),Object(n.jsx)("img",{width:200,height:250,className:"mr-3",src:I,alt:"Generic placeholder"})]}),Object(n.jsxs)(N.a,{children:[Object(n.jsxs)(N.a.Body,{children:[Object(n.jsx)("h3",{children:e("Terapist.Baboyakov.1")}),Object(n.jsx)("p",{children:e("Terapist.Baboyakov.2")})]}),Object(n.jsx)("img",{width:200,height:250,className:"mr-3",src:w,alt:"Generic placeholder"})]}),Object(n.jsx)(U,{})]})}var B=c.p+"static/media/2.0994ef3c.jpg",F=c.p+"static/media/6.e1c3d259.jpg",P=c.p+"static/media/3.3f05264d.jpg",L=c.p+"static/media/7.faf97853.jpg",_=c.p+"static/media/8.e4abb3fc.jpg",D=c(89);function E(){var e=[B,F,P,L,_].map((function(e,t){return Object(n.jsx)(D.a.Item,{children:Object(n.jsx)("img",{className:"d-block w-100",src:e,alt:"".concat(t+1," slide")})},e)}));return Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{children:e})})}c(171);var W=c(31),Y=c(32),M=c(63),H=c(34),R=c(33),q=c(28),V=function(e){Object(H.a)(c,e);var t=Object(R.a)(c);function c(e){var n;return Object(W.a)(this,c),(n=t.call(this,e)).state={file:null},n.onFormSubmit=n.onFormSubmit.bind(Object(M.a)(n)),n.onChange=n.onChange.bind(Object(M.a)(n)),n}return Object(Y.a)(c,[{key:"onFormSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("myImage",this.state.file);q.post("/westaGallery",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){alert("The file is successfully uploaded")})).catch((function(e){}))}},{key:"onChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(n.jsx)("h1",{children:"File Upload"}),Object(n.jsx)("input",{type:"file",name:"myImage",onChange:this.onChange}),Object(n.jsx)("button",{type:"submit",children:"Upload"})]})}}]),c}(s.Component),J=function(){var e=Object(d.a)().t,t=Object(s.useState)([]),c=Object(O.a)(t,2),a=(c[0],c[1]);return Object(s.useEffect)((function(){x.a.get("/westaGallery").then((function(e){a(e.data)})).catch((function(e){console.log(e)}))})),Object(n.jsxs)("section",{children:[Object(n.jsx)(V,{}),Object(n.jsxs)("div",{className:"homePage",children:[Object(n.jsx)("div",{className:"languageType"}),Object(n.jsx)("img",{className:"imageMain",src:"/images/imageMain.jpg"}),Object(n.jsxs)("div",{className:"homeContant",children:[Object(n.jsxs)("div",{className:"partOne",children:[Object(n.jsx)("img",{className:"mengPic",src:"/images/16.jpg"}),Object(n.jsx)("p",{children:e("partOne.1")})]}),Object(n.jsxs)("div",{className:"partTwo",children:[Object(n.jsx)("h2",{children:e("partTwo.1")}),Object(n.jsxs)("h5",{children:[" ",e("partTwo.2")," "]}),Object(n.jsx)(v.a,{})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)(E,{})})]}),Object(n.jsx)("div",{className:"contactUs",children:Object(n.jsx)(y,{})})]})},z=(c(172),c(111)),K=function(){var e=Object(d.a)().t;return Object(n.jsx)("div",{children:Object(n.jsx)(z.a,{children:Object(n.jsx)(v.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"/images/30.jpg",alt:"Girl in a jacket",width:"100%",height:"250px"}),Object(n.jsx)("h1",{dir:"rtl",className:"font",children:e("AboutUs.2")}),Object(n.jsxs)("div1",{dir:"ltl",className:"explanation",children:[Object(n.jsx)("img",{className:"mengPic",src:"/images/16.jpg",alt:""}),Object(n.jsx)("p",{children:e("partOne.1")})]}),Object(n.jsxs)("div",{dir:"rtl",className:"font",children:[Object(n.jsxs)("p",{children:[e("AboutUs.1")," "]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.6")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.7")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.8")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.9")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h1",{children:e("AboutUs.10")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h5",{children:e("AboutUs.11")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.12")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h5",{children:e("AboutUs.13")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.14")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.15")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.16")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.17")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.17")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h5",{children:e("AboutUs.18")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.19")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.20")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.21")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.22")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.21")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h5",{children:e("AboutUs.23")}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.24")}),Object(n.jsx)("a",{href:e("AboutUs.25"),children:"\u05e7\u05d9\u05e9\u05d5\u05e8: https://nevetgreenhouse.huji.ac.il/"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:e("AboutUs.26")}),Object(n.jsx)("a",{href:e("AboutUs.27"),children:"\u05e7\u05d9\u05e9\u05d5\u05e8: http://www.tene-briut.org.il/ "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsx)("div",{className:"contactUs",children:Object(n.jsx)("h2",{children:e("contactUs.1")})}),Object(n.jsxs)("div",{className:"contactUs",children:[Object(n.jsx)("h2",{children:e("contactUs.1")}),Object(n.jsx)("input",{type:"text",value:e("contactUs.2")}),Object(n.jsx)("input",{type:"text",value:e("contactUs.3")}),Object(n.jsx)("input",{type:"email",value:e("contactUs.4")}),Object(n.jsxs)("button",{type:"button",class:"btn btn-outline-light",children:[e("contactUs.5")," "]})]})]})})})})},Q=function(e){Object(H.a)(c,e);var t=Object(R.a)(c);function c(){return Object(W.a)(this,c),t.apply(this,arguments)}return Object(Y.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{})}}]),c}(s.Component),X=function(e){Object(H.a)(c,e);var t=Object(R.a)(c);function c(){return Object(W.a)(this,c),t.apply(this,arguments)}return Object(Y.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Contact us"})})}}]),c}(s.Component),Z=function(e){Object(H.a)(c,e);var t=Object(R.a)(c);function c(e){var n;return Object(W.a)(this,c),(n=t.call(this,e)).state={},n}return Object(Y.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"sadsadasdaas"})})}}]),c}(s.Component),$=function(e){Object(H.a)(c,e);var t=Object(R.a)(c);function c(e){var n;return Object(W.a)(this,c),(n=t.call(this,e)).state={},n}return Object(Y.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{})}}]),c}(s.Component),ee=function(e){Object(H.a)(c,e);var t=Object(R.a)(c);function c(e){var n;return Object(W.a)(this,c),(n=t.call(this,e)).state={},n}return Object(Y.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(G,{})})}}]),c}(s.Component),te=(c(173),function(){Object(u.f)();var e=Object(s.useContext)(p),t=e.signIn,c=e.emailChangeHandler,a=e.passwordChangeHandler;return Object(n.jsx)("div",{class:"container h-100",children:Object(n.jsx)("div",{class:"d-flex justify-content-center h-100",children:Object(n.jsxs)("div",{class:"user_card",children:[Object(n.jsx)("div",{class:"d-flex justify-content-center",children:Object(n.jsx)("div",{class:"brand_logo_container",children:Object(n.jsx)("img",{src:"",class:"brand_logo",alt:"Logo"})})}),Object(n.jsx)("div",{class:"d-flex justify-content-center form_container",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{class:"input-group mb-3",children:[Object(n.jsx)("div",{class:"input-group-append",children:Object(n.jsx)("span",{class:"input-group-text",children:Object(n.jsx)("i",{class:"fas fa-user"})})}),Object(n.jsx)("input",{onChange:function(e){return c(e)},type:"text",name:"Email",class:"form-control input_user",placeholder:"Email"})]}),Object(n.jsxs)("div",{class:"input-group mb-2",children:[Object(n.jsx)("div",{class:"input-group-append",children:Object(n.jsx)("span",{class:"input-group-text",children:Object(n.jsx)("i",{class:"fas fa-key"})})}),Object(n.jsx)("input",{onChange:function(e){return a(e)},type:"password",name:"password",class:"form-control input_pass",placeholder:"Password"})]}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsxs)("div",{class:"custom-control custom-checkbox",children:[Object(n.jsx)("input",{type:"checkbox",class:"custom-control-input",id:"customControlInline"}),Object(n.jsx)("label",{class:"custom-control-label",for:"customControlInline",children:"Remember me"})]})}),Object(n.jsx)("div",{class:"d-flex justify-content-center mt-3 login_container",children:Object(n.jsx)("button",{onClick:function(){return t()},type:"button",name:"button",class:"btn login_btn",children:"Login"})})]})})]})})})}),ce=(c(178),c(233)),ne=c(225),se=c(221),ae=c(227),je=c(224),re=c(229),ie=c(218),be=c(222),le=c(228),oe=c(112),de=c.n(oe),Oe=c(116),he=c(219),xe=c(220);function ue(){return Object(n.jsxs)(Oe.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(ie.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var pe=Object(he.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function me(){var e=pe(),t=Object(s.useState)(""),c=Object(O.a)(t,2),a=c[0],j=c[1],r=Object(s.useState)(""),i=Object(O.a)(r,2),b=i[0],l=i[1],o=Object(s.useState)(""),d=Object(O.a)(o,2),h=d[0],p=d[1],m=Object(u.f)();return Object(n.jsxs)(xe.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(se.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(ce.a,{className:e.avatar,children:Object(n.jsx)(de.a,{})}),Object(n.jsx)(Oe.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(n.jsxs)(be.a,{container:!0,spacing:2,children:[Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(ae.a,{autoComplete:"fname",name:"Name",variant:"outlined",required:!0,fullWidth:!0,id:"Name",label:"Name",autoFocus:!0,onChange:function(e){j(e.target.value)}})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(ae.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){l(e.target.value)}})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(ae.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){p(e.target.value)}})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(je.a,{control:Object(n.jsx)(re.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(n.jsx)(ne.a,{type:"submit",name:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){console.log(a,b,h),x.a.post("/register",{name:a,email:b,password:h}).then((function(e){alert("A name was submitted: "+a),console.log(e),m.push("login")})).catch((function(e){alert("The Email Not Valid Try Another"),console.log("some erorr",e)}))},children:"Sign Up"}),Object(n.jsx)(be.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(be.a,{item:!0,children:Object(n.jsx)(ie.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(n.jsx)(le.a,{mt:5,children:Object(n.jsx)(ue,{})})]})}var fe=c(223),ge=Object(he.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}}));function ve(){var e=a.a.useState(2),t=Object(O.a)(e,2),c=t[0],j=(t[1],ge()),r=Object(s.useState)([]),i=Object(O.a)(r,2),b=i[0],l=i[1];return Object(s.useEffect)((function(){x.a.get("/westaArticle").then((function(e){console.log(e.data),l(e.data)})).catch((function(e){console.log(e)}))})),Object(n.jsx)(be.a,{container:!0,className:j.root,spacing:2,children:Object(n.jsx)(be.a,{item:!0,xs:16,children:Object(n.jsx)(be.a,{container:!0,justify:"center",spacing:c,children:b.map((function(e,t){return Object(n.jsx)(be.a,{item:!0,children:Object(n.jsxs)(fe.a,{className:j.paper,children:[Object(n.jsx)("h1",{children:e.header}),Object(n.jsx)("img",{src:e.imgPath}),Object(n.jsx)("p",{children:e.content}),Object(n.jsx)("p",{children:e.subHeader})]})},t)}))})})})}var ye=function(){var e=Object(d.a)().i18n,t=function(t){e.changeLanguage(t)};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"languageType",children:[Object(n.jsx)("a",{href:"",onClick:function(){return t("he")},children:"\u05e2\u05d1\u05e8\u05d9\u05ea"})," ","|"," ",Object(n.jsx)("a",{href:"",onClick:function(){return t("en")},children:"English"}),"|"," ",Object(n.jsx)("a",{href:"",onClick:function(){return t("am")},children:"\u05d0\u05de\u05d4\u05e8\u05d9\u05ea"})]}),Object(n.jsx)("main",{children:Object(n.jsx)(m,{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(g,{}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:J}),Object(n.jsx)(u.a,{exact:!0,path:"/AboutUs",render:function(){return Object(n.jsx)(K,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/CenterActivities",render:function(){return Object(n.jsx)(Q,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/ContactUs",render:function(){return Object(n.jsx)(X,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/Donations",render:function(){return Object(n.jsx)(Z,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/Publications",render:function(){return Object(n.jsx)($,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/login",render:function(){return Object(n.jsx)(te,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/register",render:function(){return Object(n.jsx)(me,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/CenterActivities",render:function(){return Object(n.jsx)(Q,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/ContactUs",render:function(){return Object(n.jsx)(X,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/Donations",render:function(){return Object(n.jsx)(Z,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/Publications",render:function(){return Object(n.jsx)($,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/articles",render:function(){return Object(n.jsx)(ve,{})}}),Object(n.jsx)(u.a,{exact:!0,path:"/TherapistTraining",render:function(){return Object(n.jsx)(ee,{})}})]})]})})})]})},Ne=c(90),Ce=c(67),Ue=c(113),we=c(115);Ne.a.use(Ue.a).use(we.a).use(Ce.e).init({fallbackLng:"en",debug:!0,whitelist:["en","he","am"],interpolation:{escapeValue:!1}});Ne.a;var ke=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,236)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),a(e),j(e)}))};r.a.render(Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)("div",{children:"Loading ~~~"}),children:Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(ye,{})})}),document.getElementById("root")),ke()}},[[177,1,2]]]);
//# sourceMappingURL=main.0c5faecb.chunk.js.map