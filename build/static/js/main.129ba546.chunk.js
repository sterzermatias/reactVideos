(this["webpackJsonpvideo-favourites"]=this["webpackJsonpvideo-favourites"]||[]).push([[0],{29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(21),s=n.n(r),o=(n(29),n(6)),c=n(7),u=n(9),d=n(8),l=n(16),h=n(2),m=n(12),b=n.n(m),j=n(15),p=n(11),v=2e3,O=[{id:0,title:"\xbfQu\xe9 es CodelyTV? \ud83c\udf44\ud83d\udd1d - Formaci\xf3n para programadores y divulgaci\xf3n del mundo del desarrollo",url:"https://www.youtube.com/watch?v=rpMQd2DazTc",embed:"https://www.youtube.com/embed/rpMQd2DazTc",thumbnail:"https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg"},{id:1,title:"Introducci\xf3n a PHP: C\xf3mo configurar tu entorno de desarrollo \ud83d\udc18",url:"https://www.youtube.com/embed/watch?v=v2IjMrpZog4",embed:"https://www.youtube.com/embed/v2IjMrpZog4",thumbnail:"https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg"},{id:2,title:"Comunicaci\xf3n entre microservicios: \ud83d\udd4b Event-Driven Architecture",url:"https://www.youtube.com/watch?v=V4mjxJ5czog",embed:"https://www.youtube.com/embed/V4mjxJ5czog",thumbnail:"https://img.youtube.com/vi/V4mjxJ5czog/maxresdefault.jpg"},{id:3,title:"\ud83e\udd14 Cu\xe1ndo usar #interfaces\u2026 y cu\xe1ndo EVITARLAS",url:"https://www.youtube.com/watch?v=uP1CoHtjALg",embed:"https://www.youtube.com/embed/uP1CoHtjALg",thumbnail:"https://img.youtube.com/vi/uP1CoHtjALg/maxresdefault.jpg"},{id:4,title:'Qu\xe9 es la "Composici\xf3n sobre herencia" \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\ude94 (#CompositionOverInheritance)',url:"https://www.youtube.com/watch?v=OyTPDFyGWRc",embed:"https://www.youtube.com/embed/OyTPDFyGWRc",thumbnail:"https://img.youtube.com/vi/OyTPDFyGWRc/maxresdefault.jpg"},{id:5,title:"ReactJS vs VueJS vs Angular 6 \u26a1\ufe0f| 1/5 Qu\xe9 aporta un framework y qu\xe9 es un componente",url:"https://www.youtube.com/watch?v=lttZCIin4HM",embed:"https://www.youtube.com/embed/lttZCIin4HM",thumbnail:"https://img.youtube.com/vi/lttZCIin4HM/maxresdefault.jpg"}],f=function(){return new Promise((function(e,t){setTimeout((function(){return e(O)}),v)}))},g=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1");case 3:return t=e.sent,e.abrupt("return",t.json());case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=n(22),x=n.n(w),y=n(0);var C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.speed||90;this.typed=new x.a(this.$loading,{strings:[this.props.message],typeSpeed:parseInt(e)}),function(e){e.style.opacity=0;var t=+new Date;!function n(){e.style.opacity=+e.style.opacity+(new Date-t)/400,t=+new Date,e.style.opacity<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))}()}(this.$loading)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return Object(y.jsx)("div",{className:"loader",ref:function(t){return e.$loading=t}})}}]),n}(a.PureComponent),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.data,t=e.id,n=e.thumbnail,a=e.title;return Object(y.jsx)(l.b,{className:"grid-item-link",to:"/".concat(t),children:Object(y.jsxs)("div",{className:"grid-item",children:[Object(y.jsx)("img",{className:"preview-image",src:n,alt:a}),Object(y.jsx)("div",{className:"preview-title",children:a})]})})}}]),n}(a.PureComponent),A=n(24),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={hasError:!1,showSending:!1,title:"",url:"",text:""},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e){var t=this;return function(n){t.setState(Object(A.a)({},e,n.target.value))}}},{key:"validation",value:function(e){return e.title.length>0&&e.url.length>0&&e.description.length>2}},{key:"handleSubmit",value:function(e){e.preventDefault();var t,n=this.props.onClose,a=function(e){var t=e.match(/[?&]([^=#]+)=([^&#]*)/);return t&&t[2]}(this.state.url||"");this.validation(this.state)&&a?(this.setState({showSending:!0}),(t={title:this.state.title,description:this.state.description,url:this.state.url,thumbnail:"https://img.youtube.com/vi/".concat(a,"/maxresdefault.jpg"),embed:"https://www.youtube.com/embed/".concat(a)},new Promise((function(e,n){setTimeout((function(){return t.id=O.length+1,O.push(t),e({ok:1})}),v)}))).then(n(!0))):this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state,t=e.showSending,n=e.title,a=e.url,i=e.description,r=e.hasError,s=this.props.onClose;return Object(y.jsx)("div",{className:"modal",children:Object(y.jsxs)("div",{className:"modal-content",children:[Object(y.jsx)("span",{className:"close",onClick:s(!1),children:"\xd7"}),Object(y.jsx)("h2",{children:" Crear nuevo V\xeddeo "}),t&&Object(y.jsx)("span",{className:"success",children:" Enviando .... "}),r&&Object(y.jsx)("div",{className:"error",children:" Some fields are empty or contain an wrong values. "}),Object(y.jsxs)("form",{children:[Object(y.jsx)("label",{children:"T\xedtulo"}),Object(y.jsx)("input",{type:"text",value:n,onChange:this.handleChange("title"),minLength:"3",maxLength:"200",required:!0}),Object(y.jsx)("label",{children:"Url"}),Object(y.jsx)("input",{type:"text",value:a,onChange:this.handleChange("url"),minLength:"3",maxLength:"200",required:!0}),Object(y.jsx)("label",{children:"Descripci\xf3n"}),Object(y.jsx)("textarea",{value:i,onChange:this.handleChange("description"),required:!0}),Object(y.jsx)("input",{type:"submit",onClick:this.handleSubmit,value:"Submit",disabled:t})]})]})})}}]),n}(a.Component),S=function(e){var t=e.onClickAdd;return Object(y.jsxs)("div",{className:"header-content",children:[console.log("COMPONENTE HEADER"),Object(y.jsx)("div",{className:"header-title-text",children:"Mis v\xeddeos favoritos"}),Object(y.jsx)("input",{type:"button",onClick:t,value:"A\xf1adir Video",className:"header-button-add"})]})},L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isLoading:!1,videos:null,error:null,showAdd:!1},a.handleAdd=a.handleAdd.bind(Object(p.a)(a)),a.handleCloseAdd=a.handleCloseAdd.bind(Object(p.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.next=4,f();case 4:t=e.sent,this.setState({videos:t,isLoading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({error:e.t0,isLoading:!1});case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleAdd",value:function(e){e.preventDefault(),this.setState({showAdd:!0})}},{key:"handleCloseAdd",value:function(e){var t=this;return function(){e?(t.setState({isLoading:!0,showAdd:!1}),f().then((function(e){return t.setState({videos:e,isLoading:!1,showAdd:!1})})).catch((function(e){return t.setState({error:e,isLoading:!1,showAdd:!1})}))):t.setState({showAdd:!1})}}},{key:"render",value:function(){var e=this.state,t=e.videos,n=e.isLoading,a=e.error;return n?Object(y.jsx)(C,{message:"Cargando ..."}):a?Object(y.jsx)("p",{className:"error",children:a.message}):Object(y.jsxs)(i.a.Fragment,{children:[Object(y.jsx)(S,{onClickAdd:this.handleAdd}),Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{className:"grid-container",children:t&&t.map((function(e,t){return Object(y.jsx)(k,{data:e},t)}))})}),this.state.showAdd&&Object(y.jsx)(N,{onClose:this.handleCloseAdd})]})}}]),n}(a.Component),D=function(e){var t=e.title,n=e.embed;return Object(y.jsx)("div",{className:"video-container",children:Object(y.jsx)("iframe",{title:t,className:"player",type:"text/html",width:"100%",height:"400px",src:n,frameBorder:"0"})})},M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isLoading:!0},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match;this.setState({isLoading:!0}),function(e){var t=e.idVideo;return new Promise((function(e,n){setTimeout((function(){var a=O.find((function(e){return parseInt(e.id)===parseInt(t)}));return a?a.description?e(a):g().then((function(t){return a.description=t.join(),e(a)})).catch(console.error):n({message:"No se ha encontrado el video ;("})}),v)}))}({idVideo:t.params.id}).then((function(t){return e.setState({video:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.error,a=e.video,r=this.props.match;return n?Object(y.jsx)("p",{className:"error",children:n.message}):t?Object(y.jsx)(C,{message:"Cargando video (#".concat(r.params.id,") .... "),speed:15}):Object(y.jsx)(i.a.Fragment,{children:Object(y.jsxs)("div",{className:"detail-container",children:[Object(y.jsx)(D,{title:a.title,embed:a.embed}),Object(y.jsxs)("div",{className:"detail-summary",children:[Object(y.jsx)("h2",{className:"detail-title",children:a.title}),Object(y.jsx)("p",{children:a.description})]})]})})}}]),n}(a.Component),P=Object(h.f)(M),T=Object(h.f)((function(){return Object(y.jsxs)("div",{className:"header-content",children:[Object(y.jsx)("div",{className:"header-title-text",children:"Acerca de nosotros"}),Object(y.jsx)("p",{children:" Hola, probando"})]})})),I=function(){return Object(y.jsx)(l.a,{children:Object(y.jsx)(h.c,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(h.a,{exact:!0,path:"/",component:L}),Object(y.jsx)(h.a,{exact:!0,path:"/:id",component:P}),Object(y.jsx)(h.a,{exact:!0,path:"/about",component:T})]})})})},E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(y.jsx)(I,{})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(y.jsx)(E,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.129ba546.chunk.js.map