(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),o=(n(170),n(52)),s=(n(171),n(250)),l=n(150),u=Object(l.a)({palette:{primary:{main:"#5294ff",contrastText:"white"},secondary:{main:"#989898"}}}),d=n(21),j=n(252),b=n(233),h=n(3),p=(Object(b.a)((function(e){return{glass:{height:"100%",width:"100%",background:"linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))",zIndex:99,backdropFilter:"blur(1rem)",borderRadius:5},container:{height:"100vh",width:"100vw",zIndex:-1,background:"linear-gradient(to right top, #fff, #fff)",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},circle:{background:"linear-gradient(to right bottom,rgba(253, 203, 110, 0.8),rgba(253, 203, 110, 0.3))",width:300,height:300,borderRadius:"50%",position:"absolute",animation:"$moveX 50s linear 0s infinite alternate, $moveY 55s linear 0s infinite alternate"},circle1:{background:"linear-gradient(to right bottom,rgba(214, 48, 49, 0.5),rgba(214, 48, 49, 0.3))",animation:"$moveX 40s linear 0s infinite alternate, $moveY 60s linear 0s infinite alternate",width:300,height:300},circle2:{background:"linear-gradient(to right bottom,rgba(0, 184, 148, 0.8),rgba(0, 184, 148, 0.3))",animation:"$moveX 70s linear 0s infinite alternate, $moveY 40s linear 0s infinite alternate",width:300,height:300},"@keyframes moveX":{from:{left:0},to:{left:"calc(100% - 300px)"}},"@keyframes moveY":{from:{top:0},to:{top:"calc(100% - 300px)"}}}})),n(53)),f=n(33),m=n.n(f),x=n(88),g=n(36),O=n(37),k=n(251),v=n(151),y=n(84),w=n(39),C=n.n(w);n(90).config();var S,N,I,F,E,q=new v.a({uri:"".concat("https://h5iyxee68b.execute-api.us-east-1.amazonaws.com","/dev/search"),cache:new y.a({addTypename:!1}),request:function(e){var t=C.a.get("token");e.setContext({headers:{Authorization:t?"Bearer ".concat(t):""}})}}),B=n(146),z=n.n(B),T=n(145),D=n.n(T),P=Object(O.gql)(S||(S=Object(g.a)(["\nquery update($url: String!, $state: Boolean!){\n  updateBookmark(url:$url, state: $state){\n   state\n }\n }\n"]))),L=Object(b.a)((function(e){return{searchBar:{display:"flex",flexDirection:"row",alignItems:"center",transition:"all 2s",justifyContent:"center",width:"1000px",zIndex:99,background:"linear-gradient(180deg, #F1EDE4 80%, rgba(0,0,0,0) 100%)"},sticky:{position:"fixed",top:0},input:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 1000px #F1EDE4 inset"},textAlign:"center"},spacer:{marginTop:102}}})),_=function(e){var t=L(),n=Object(a.useState)(!1),r=Object(d.a)(n,2),c=r[0],i=r[1],o=function(){var e=window.scrollY;i(e>94)};Object(a.useEffect)((function(){window.addEventListener("scroll",o)}));var s=function(){var t=Object(x.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q.query({query:P,variables:{url:e.value,state:n},fetchPolicy:"no-cache"}).then((function(t){e.setBookmarked(t.data.updateBookmark.state)})),e.setBookmarked(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.a,{className:[t.searchBar].concat(Object(p.a)(c?[t.sticky]:[])).join(" "),children:[Object(h.jsx)(k.a,{id:"standard-full-width",style:{margin:8,padding:"1rem",maxWidth:1e3},placeholder:"Article URL",helperText:"Hit enter to search \ud83d\udd0e",fullWidth:!0,value:e.value,onChange:function(t){return e.setValue(t.target.value)},margin:"normal",InputLabelProps:{shrink:!0},inputProps:{className:t.input},onKeyDown:function(t){return"Enter"==t.key&&e.onSubmit(e.value)}}),null==e.bookmarked?null:e.bookmarked?Object(h.jsx)(j.a,{onClick:function(){return s(!1)},children:Object(h.jsx)(D.a,{})}):Object(h.jsx)(j.a,{onClick:function(){return s(!0)},children:Object(h.jsx)(z.a,{})})]}),Object(h.jsx)(j.a,{className:c?t.spacer:""})]})},W=n(201),A=(Object(b.a)((function(e){return{container:{width:"100%",height:160,display:"flex",flexDirection:"row"},root:{margin:"20px 0 20px 0"},title:{textAlign:"left",fontWeight:500,fontSize:"20px",paddingBottom:10,paddingTop:10},snippet:{textAlign:"left",width:"100%",fontSize:12,flexGrow:1,textOverflow:"ellipsis",wordWrap:"break-word"},src:{width:160,height:160,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},textContainer:{height:"100%",padding:"1rem",display:"flex",flexDirection:"column",alignContent:"flex-start"},date:{fontSize:10,textAlign:"right",color:"grey"}}})),n(236)),U=n(202),$=n(237),R=function(e,t){var n=function(e,t){var n;try{return n=q.readQuery(Object(o.a)({query:e},t)),{read:function(){return n}}}catch(a){n=null}return n}(e,t);return n||function(e){var t,n="pending",a=e.catch((function(e){document.cookie="token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",window.location.href="/login"})).then((function(e){n="success",t=e}),(function(e){n="error",t=e}));return{read:function(){switch(n){case"pending":throw a;case"error":throw t;default:return t}}}}(q.query(Object(o.a)({query:e},t)).then((function(e){return e.data})))},J=n(20),M=Object(b.a)((function(e){return{listItem:{width:300,height:50,display:"flex",alignItems:"center"},title:{fontSize:25,fontWeight:800,padding:16}}})),H=Object(O.gql)(N||(N=Object(g.a)(["\nquery{\n  user{\n    notifications{\n      url\n      title\n    }\n  }\n}\n"]))),Y=function(e){var t=e.resource,n=e.updateSearch,a=t.read(),r=M();Object(J.g)();return 0==a.user.notifications.length?Object(h.jsx)(A.a,{children:Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:r.listItem,children:"No Notifications"})})}):Object(h.jsx)(A.a,{children:a.user.notifications.map((function(e,t){return Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:r.listItem,onClick:function(){return n(e.url)},children:e.title})},t)}))})},Q=function(e){var t=M(),n=R(H,{fetchPolicy:"no-cache"});return Object(h.jsxs)($.a,{onClose:e.handleClose,"aria-labelledby":"simple-dialog-title",open:e.open,children:[Object(h.jsx)(j.a,{className:t.title,children:"Notifications"}),Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)(A.a,{children:Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:t.listItem,children:"Loading"})})}),children:Object(h.jsx)(Y,{resource:n,updateSearch:e.updateSearch})})]})},V=Object(b.a)((function(e){return{listItem:{width:300,height:50,display:"flex",alignItems:"center"},title:{fontSize:25,fontWeight:800,padding:16}}})),X=Object(O.gql)(I||(I=Object(g.a)(["\nquery{\n  user{\n    history{\n      url\n      title\n    }\n  }\n}\n"]))),G=function(e){var t=e.resource,n=e.updateSearch,a=t.read(),r=V();Object(J.g)();return 0==a.user.history.length?Object(h.jsx)(A.a,{children:Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:r.listItem,children:"No History"})})}):Object(h.jsx)(A.a,{children:a.user.history.slice(10).map((function(e,t){return Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:r.listItem,onClick:function(){return n(e.url)},children:e.title})},t)}))})},K=function(e){var t=V(),n=R(X,{fetchPolicy:"no-cache"});return Object(h.jsxs)($.a,{onClose:e.handleClose,"aria-labelledby":"simple-dialog-title",open:e.open,children:[Object(h.jsx)(j.a,{className:t.title,children:"History"}),Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)(A.a,{children:Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:t.listItem,children:"Loading"})})}),children:Object(h.jsx)(G,{resource:n,updateSearch:e.updateSearch})})]})},Z=Object(b.a)((function(e){return{listItem:{width:300,height:50,display:"flex",alignItems:"center"},title:{fontSize:25,fontWeight:800,padding:16}}})),ee=Object(O.gql)(F||(F=Object(g.a)(["\nquery{\n  user{\n    bookmarks{\n      url\n      title\n    }\n  }\n}\n"]))),te=function(e){var t=e.resource,n=e.updateSearch,a=t.read(),r=Z();Object(J.g)();return 0==a.user.bookmarks.length?Object(h.jsx)(A.a,{children:Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:r.listItem,children:"No Bookmarks"})})}):Object(h.jsx)(A.a,{children:a.user.bookmarks.map((function(e,t){return Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:r.listItem,onClick:function(){return n(e.url)},children:e.title})},t)}))})},ne=function(e){var t=Z(),n=R(ee,{fetchPolicy:"no-cache"});return Object(h.jsxs)($.a,{onClose:e.handleClose,"aria-labelledby":"simple-dialog-title",open:e.open,children:[Object(h.jsx)(j.a,{className:t.title,children:"Bookmarks"}),Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)(A.a,{children:Object(h.jsx)(U.a,{autoFocus:!0,button:!0,children:Object(h.jsx)(j.a,{className:t.listItem,children:"Loading"})})}),children:Object(h.jsx)(te,{resource:n,updateSearch:e.updateSearch})})]})},ae=n(241),re=n(238),ce=n(239),ie=n(240),oe=n(242),se=n(243),le=n(244),ue=n(245),de=n(253);n(90).config();var je,be="ws://".concat("ec2-54-161-37-25.compute-1.amazonaws.com",":15674/ws"),he=Object(O.gql)(E||(E=Object(g.a)(["\n    query Similar($url: String!){\n        processUrl(url:$url){\n          uid\n          nextQueue\n          bookmarked\n        }\n    }  \n"]))),pe=new de.a({brokerURL:be,connectHeaders:{login:"client",passcode:"clientpass"},debug:function(e){console.log(e)},reconnectDelay:5e3,heartbeatIncoming:4e3,heartbeatOutgoing:4e3}),fe=function(e){return new Promise((function(t,n){pe.onConnect=function(n){var a=function(){var n=Object(x.a)(m.a.mark((function n(a){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a.body){n.next=6;break}if((r=JSON.parse(a.body)).uid!==e){n.next=6;break}return t(r),n.next=6,pe.deactivate();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();pe.subscribe("replyQueue",a,{"x-dead-letter-exchange":"replyQueue-dead-letter"})},pe.onStompError=function(e){console.log("Broker reported error: "+e.headers.message),console.log("Additional details: "+e.body)},pe.activate()}))},me=function(){var e=Object(x.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.query({query:he,variables:{url:t}}).then((function(e){return e.data}));case 2:return n=e.sent,a=n.processUrl.uid,r=n.processUrl.bookmarked,e.abrupt("return",{queryUid:a,response:fe(a),bookmarked:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=n(189),ge=Object(b.a)((function(e){return{paper:{padding:"6px 16px",cursor:"pointer",textAlign:"justify",backgroundColor:"#FEFEFE"},secondaryTail:{backgroundColor:e.palette.secondary.main},description:{display:"-webkit-box",textOverflow:"ellipsis",overflow:"hidden","-webkit-line-clamp":5,"-webkit-box-orient":"vertical"},title:{display:"-webkit-box",textOverflow:"ellipsis",overflow:"hidden","-webkit-line-clamp":1,"-webkit-box-orient":"vertical"},loaderContainer:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},timelineContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingBottom:50},footer:{background:"linear-gradient(0deg, #F1EDE4 20%, rgba(0,0,0,0) 100%)",width:"100%",height:45,position:"fixed",bottom:0,marginTop:-45}}})),Oe=function(e){var t,n,a=e.data,r=ge(),c=null===a||void 0===a||null===(t=a.handleSearchRabbit)||void 0===t?void 0:t.result,i=null===a||void 0===a||null===(n=a.ingestUrlArticleRabbit)||void 0===n?void 0:n.result;if(!c||0===c.length)return null;var s,l=[{title:i.title,description:i.text,publish_date:i.publish_date,link:i.link,rank:-1}],u=function(e){return e.map((function(e,t){return Object(o.a)(Object(o.a)({rank:t},e),{},{publish_date:e.publish_date?Date.parse(e.publish_date):""})})).sort((function(e,t){return e.publish_date&&e.publish_date===t.publish_date?e.rank-t.rank:(t.publish_date?t.publish_date:-1===t.rank?1/0:-1/0)-(e.publish_date?e.publish_date:-1===e.rank?1/0:-1/0)}))}(c=c.concat(l)),d=(s=u.length-l.length,xe.default(["#cc0000","#33cc33"],s>2?s:3));return Object(h.jsxs)(j.a,{className:r.timelineContainer,children:[Object(h.jsx)(re.a,{align:"alternate",style:{maxWidth:1e3},children:u.map((function(e,t){return Object(h.jsxs)(ce.a,{children:[Object(h.jsx)(ie.a,{children:Object(h.jsx)(ae.a,{variant:"body2",color:"textSecondary",children:e.publish_date?new Date(e.publish_date).toLocaleDateString():""})}),Object(h.jsxs)(oe.a,{children:[Object(h.jsx)(se.a,{style:{backgroundColor:-1===e.rank?"#478CE3":d[e.rank]}}),Object(h.jsx)(le.a,{})]}),Object(h.jsx)(ue.a,{children:Object(h.jsxs)(W.a,{elevation:0,className:r.paper,onClick:function(){return function(e){if(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}}(e.link)},style:Object(o.a)({},-1==e.rank&&{border:"1px solid #478CE3"}),children:[Object(h.jsx)(j.a,{style:{textAlign:t%2===0?"left":"right"},children:Object(h.jsx)(ae.a,{color:"secondary",variant:"caption",children:-1===e.rank?"Original Article":"\ud83d\udd17 ".concat(e.link.split("/").slice(2,3))})}),Object(h.jsx)(j.a,{style:{textAlign:t%2!==0?"left":"right",marginTop:-20},children:Object(h.jsx)(ae.a,{color:"secondary",variant:"caption",children:"   \ud83c\udfc5".concat(e.rank+2)})}),Object(h.jsx)(ae.a,{className:r.title,variant:"h6",style:{fontWeight:550,fontSize:16},children:e.title}),Object(h.jsx)(ae.a,{variant:"body1",children:Object(h.jsx)("div",{className:r.description,dangerouslySetInnerHTML:{__html:e.description}})})]})})]})}))}),Object(h.jsx)(j.a,{className:r.footer})]})},ke=function(e){var t=e.initialData,n=e.updateBookmarked,r=Object(a.useState)(null),c=Object(d.a)(r,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){t.response&&(t.response.then((function(e){return o(e)})),n(t.bookmarked))}),[t.queryUid]),t.response?null==i?Object(h.jsx)(h.Fragment,{children:"Message in queue"}):Object(h.jsx)(Oe,{data:i}):null},ve=function(e){ge();var t=Object(a.useState)(null),n=Object(d.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){e.url&&(c(null),me(e.url).then((function(e){return c(e)})))}),[e.url]),e.url?null==r?Object(h.jsx)(h.Fragment,{children:"Adding message to queue"}):Object(h.jsx)(ke,{initialData:r,updateBookmarked:e.updateBookmarked}):null},ye=n(246),we=n(255),Ce=n(152),Se=n(247),Ne=n(114),Ie=n.n(Ne),Fe=n(149),Ee=n.n(Fe),qe=n(148),Be=n.n(qe),ze=n(147),Te=function(){var e=C.a.get("token");return Object(ze.a)(e)},De=Object(O.gql)(je||(je=Object(g.a)(["\nquery{\n  user{\n    notifications{\n      url\n      title\n    }\n  }\n}\n"]))),Pe=Object(b.a)((function(e){return{header:{width:200,height:50,position:"fixed",zIndex:99,top:10,right:10,display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"},avatar:{transform:"scale(0.8)",backgroundColor:"#64625E"},mailIcon:{transform:"scale(1.1)",color:"#64625E"},horizontalCenter:{display:"flex",flexDirection:"column",alignItems:"center"},icon:{color:"#64625E"}}})),Le=function(e){var t=e.resource.read(),n=Pe();return Object(h.jsx)(ye.a,{badgeContent:t.user.notifications.length,color:"primary",className:n.mailIcon,children:Object(h.jsx)(Ie.a,{})})},_e=function(e){var t=e.updateSearch,n=Pe(),r=Object(J.g)(),c=R(De),i=Object(a.useState)(null),o=Object(d.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(!1),b=Object(d.a)(u,2),p=b[0],f=b[1],m=Object(a.useState)(!1),x=Object(d.a)(m,2),g=x[0],O=x[1],k=Object(a.useState)(!1),v=Object(d.a)(k,2),y=v[0],w=v[1],S=function(){l(null)},N=function(e){O(!1),w(!1),f(!1),t(e)};return Object(h.jsxs)(j.a,{className:n.header,children:[Object(h.jsx)(j.a,{onClick:function(){O(!0)},children:Object(h.jsx)(Be.a,{className:n.icon})}),Object(h.jsx)(j.a,{onClick:function(){w(!0)},children:Object(h.jsx)(Ee.a,{className:n.icon})}),Object(h.jsx)(j.a,{onClick:function(){f(!0)},children:Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)(Ie.a,{className:n.mailIcon}),children:Object(h.jsx)(Le,{resource:c})})}),Object(h.jsx)(we.a,{onClick:function(e){l(e.currentTarget)},className:n.avatar,children:Te().data.name.slice(0,1)}),Object(h.jsxs)(Ce.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:S,style:{marginTop:50},children:[Object(h.jsx)(Se.a,{onClick:S,children:"Profile"}),Object(h.jsx)(Se.a,{onClick:function(){C.a.remove("token"),r.push("/login")},children:"Logout"})]}),Object(h.jsx)(Q,{open:p,handleClose:function(){f(!1)},updateSearch:N}),Object(h.jsx)(ne,{open:y,handleClose:function(){w(!1)},updateSearch:N}),Object(h.jsx)(K,{open:g,handleClose:function(){O(!1)},updateSearch:N})]})},We=Object(b.a)((function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},text:{maxWidth:1e3,fontWeight:600},horizontalCenter:{display:"flex",flexDirection:"column",alignItems:"center"}}})),Ae=function(e){var t=We(),n=Object(a.useState)(e.url||""),r=Object(d.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(e.url||""),s=Object(d.a)(o,2),l=s[0],u=s[1],b=Object(a.useState)(null),p=Object(d.a)(b,2),f=p[0],m=p[1],x=Object(J.g)(),g=function(e){i(e),u(e),m(null),x.push("/search/".concat(encodeURIComponent(e.replace(/\+/g," "))))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.a,{className:t.container,children:[Object(h.jsx)(ae.a,{variant:"h2",color:"textSecondary",className:t.text,children:"Story Evolution Tracker"}),Object(h.jsx)(ae.a,{variant:"subtitle1",color:"textSecondary",className:t.text,style:{fontWeight:200},children:"Track news stories on a timeline. Just enter a the URL to an article bellow."})]}),Object(h.jsx)(_e,{updateSearch:g}),Object(h.jsxs)(j.a,{className:t.horizontalCenter,children:[Object(h.jsx)(_,{onSubmit:function(e){return g(e)},value:l,setValue:u,bookmarked:f,setBookmarked:m}),Object(h.jsx)(ve,{url:c,updateBookmarked:function(e){m(e)}})]})]})},Ue=n(203),$e=n(248),Re=n(249);n(90).config();var Je=Object(b.a)((function(e){return{container:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"},paper:{width:400,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},form:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:20},formItem:{width:"90%",maxWidth:300,margin:10},footer:{display:"flex",justifyContent:"space-between",width:"90%",maxWidth:300,padding:20},title:{fontWeight:900,fontSize:40,paddingTop:40,paddingBottom:20,color:"#c2bbae"},backdrop:{zIndex:99}}})),Me={Main:Ae,LoginPage:function(){var e=Je(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(d.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)([{email:"",password:""},{name:"",email:"",password1:"",password2:""}]),b=Object(d.a)(u,2),f=b[0],m=b[1],x=Object(J.g)();return Object(h.jsxs)(j.a,{className:e.container,children:[Object(h.jsx)(Ue.a,{className:e.backdrop,open:s,children:Object(h.jsx)($e.a,{color:"primary"})}),Object(h.jsxs)(W.a,{className:e.paper,children:[Object(h.jsx)(j.a,{className:e.title,children:r?"Sign up":"Sign in"}),!r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",children:[Object(h.jsx)(k.a,{className:e.formItem,id:"outlined-basic",label:"Email *",variant:"outlined",value:f[0].email,onChange:function(e){var t,n;return m([{email:null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.value)||void 0===n?void 0:n.toString(),password:f[0].password}].concat(Object(p.a)(f.slice(1))))}}),Object(h.jsx)(k.a,{className:e.formItem,id:"outlined-basic",label:"Password *",variant:"outlined",type:"password",onChange:function(e){var t,n;return m([{email:f[0].email,password:null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.value)||void 0===n?void 0:n.toString()}].concat(Object(p.a)(f.slice(1))))},value:f[0].password}),Object(h.jsx)(Re.a,{className:e.formItem,variant:"contained",color:"primary",onClick:function(){l(!0);var e=new Headers;e.append("Content-Type","application/json");var t={method:"POST",headers:e,body:JSON.stringify(f[0])};fetch("".concat("https://h5iyxee68b.execute-api.us-east-1.amazonaws.com","/dev/login/"),t).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);C.a.set("token",t.token),l(!1),x.push("/search")})).catch((function(e){console.log("error",e),l(!1)}))},children:"Log In"})]}),Object(h.jsxs)(j.a,{className:e.footer,children:[Object(h.jsx)(j.a,{onClick:function(){return x.push("/resetPassword")},children:"Forgot password?"}),Object(h.jsx)(j.a,{onClick:function(){return c(!0)},children:"Sign up"})]})]}),r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",children:[Object(h.jsx)(k.a,{className:e.formItem,id:"outlined-basic",label:"Name *",variant:"outlined",value:f[1].name,onChange:function(e){return m([].concat(Object(p.a)(f.slice(0,1)),[{password1:f[1].password1,password2:f[1].password2,email:f[1].email,name:e.target.value}]))}}),Object(h.jsx)(k.a,{className:e.formItem,id:"outlined-basic",label:"Email *",variant:"outlined",value:f[1].email,onChange:function(e){return m([].concat(Object(p.a)(f.slice(0,1)),[{password1:f[1].password1,password2:f[1].password2,name:f[1].name,email:e.target.value}]))}}),Object(h.jsx)(k.a,{className:e.formItem,id:"outlined-basic",label:"Password *",type:"password",variant:"outlined",onChange:function(e){return m([].concat(Object(p.a)(f.slice(0,1)),[{email:f[1].email,password2:f[1].password2,name:f[1].name,password1:e.target.value}]))},value:f[1].password1}),Object(h.jsx)(k.a,{className:e.formItem,id:"outlined-basic",label:"Repeat Password *",type:"password",variant:"outlined",onChange:function(e){return m([].concat(Object(p.a)(f.slice(0,1)),[{email:f[1].email,password1:f[1].password1,name:f[1].name,password2:e.target.value}]))},value:f[1].password2}),Object(h.jsx)(Re.a,{className:e.formItem,variant:"contained",color:"primary",onClick:function(){l(!0);var e=new Headers;e.append("Content-Type","application/json");var t={method:"POST",headers:e,body:JSON.stringify(f[1])};fetch("".concat("https://h5iyxee68b.execute-api.us-east-1.amazonaws.com","/dev/signUp/"),t).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);C.a.set("token",t.token),l(!1),x.push("/search")})).catch((function(e){console.log("error",e),l(!1)}))},children:"Sign Up"})]}),Object(h.jsx)(j.a,{className:e.footer,children:Object(h.jsx)(j.a,{onClick:function(){return c(!1)},children:"Already have an account?"})})]})]})]})}},He=function(e){return null==C.a.get("token")?Object(h.jsx)(J.a,{to:{pathname:"login"}}):Object(h.jsx)(J.b,Object(o.a)({},e))},Ye=function(e){return null!=C.a.get("token")?Object(h.jsx)(J.a,{to:{pathname:"search"}}):Object(h.jsx)(J.b,{path:"/login",exact:!0,component:Me.LoginPage})};var Qe=function(){return Object(h.jsx)(s.a,{theme:u,children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(J.d,{children:[Object(h.jsx)(J.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(J.a,{to:"/search"})}}),Object(h.jsx)(Ye,{path:"/login",exact:!0,component:Me.LoginPage}),Object(h.jsx)(He,{path:"/search/:url",render:function(e){return Object(h.jsx)(Me.Main,{url:decodeURIComponent(e.match.params.url.replace(/\+/g," "))})}}),Object(h.jsx)(He,{path:"/search",exact:!0,component:Me.Main})]})})})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,256)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Xe=n(46);n(90).config(),i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Xe.a,{children:Object(h.jsx)(Qe,{})})}),document.getElementById("root")),Ve()}},[[199,1,2]]]);
//# sourceMappingURL=main.fc11b110.chunk.js.map