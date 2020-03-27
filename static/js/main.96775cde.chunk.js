(this["webpackJsonpanumati-admin-dashboard"]=this["webpackJsonpanumati-admin-dashboard"]||[]).push([[0],{114:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),c=a.n(o),l=(a(90),a(91),a(11)),i=a.n(l),s=a(18),u=a(22),m=a(23),d=a(26),p=a(27),f=a(72),g=a(10),h=function(e){return r.a.createElement("div",{className:"error-message"},e.children)},E=(a(61),a(34)),v=a.n(E);v.a.defaults.baseURL="https://epass.egovernments.org:8091",v.a.defaults.headers["content-type"]="application/json";var A=function(e,t){return v.a.post("/signin",{email:e,password:t})},b=function(e,t,a){return v.a.post("/createAccount",{name:e,email:t,password:a,key:"test"})},w=function(){return v.a.post("/getAllOrders",{authToken:localStorage.getItem("auth")})},S=function(e,t){return v.a.post("/approveOrder",{orderID:e,orderAction:t,authToken:localStorage.getItem("auth")})},j=function(e){return v.a.post("/processOrder",{orderID:e,authToken:localStorage.getItem("auth")})},k=(r.a.Component,a(47)),O=a.n(k),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).loginEval=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,r=t.password,e.next=3,A(a,r);case 3:o=e.sent,c=o.data,localStorage.setItem("auth",c.authToken),localStorage.setItem("accountID",c.accountID),localStorage.setItem("organizationID",c.organizationID),localStorage.setItem("expiry",O()(new Date).add(1,"day")),n.props.onLogin();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.openRegistrationForm=function(){n.setState({registered:!1})},n.hideRegistrationForm=function(){n.setState({registered:!0})},n.state={registered:!0},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement(g.d,{className:"login-form",initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Required"),t},onSubmit:this.loginEval},(function(e){var t=e.isSubmitting;return r.a.createElement(g.c,null,r.a.createElement(g.b,{type:"email",name:"email",placeholder:"Email ID"}),r.a.createElement(g.a,{name:"email",component:h}),r.a.createElement(g.b,{type:"password",name:"password",placeholder:"Create Password"}),r.a.createElement(g.a,{name:"password",component:h}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"primary",size:"lg",type:"submit",disabled:t},"Login"))})))}}]),a}(r.a.Component),C=a(42),x=a(82),I=(a(114),a(128)),N=a(130),D=function(e){var t=Object(n.useState)(""),a=Object(C.a)(t,2),o=a[0],c=a[1];return r.a.createElement(I.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(I.a.Body,null,r.a.createElement("h4",null,"Enter Reason"),r.a.createElement("p",null,"Let the applicant know why their request is being rejected"),r.a.createElement(N.a,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(N.a.Control,{onChange:function(e){return c(e.target.value)},as:"textarea",className:"decline-form-reason-field"}))),r.a.createElement(I.a.Footer,null,r.a.createElement("div",{className:"d-flex justify-content-end decline-modal-footer"},r.a.createElement(f.a,{onClick:e.onHide,variant:"outline-primary"},"Cancel"),r.a.createElement(f.a,{disabled:0===o.length,onClick:function(){return e.onSubmit(o)},variant:"primary"},"Send Note"))))},R=a(75),L=a.n(R),T=a(76),q=a.n(T),Y=a(126),B=a(129),U=r.a.forwardRef((function(e,t){e.children;var a=e.onClick;return r.a.createElement("img",{className:"action-icon",height:"20",src:q.a,ref:t,onClick:function(e){e.preventDefault(),a(e)}})})),F=function(e){var t=Object(n.useState)(!1),a=Object(C.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(null),u=Object(C.a)(l,2),m=u[0],d=u[1],p=function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!1),t.next=3,S(m,"DECLINE");case 3:e.onRefresh();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a,"ACCEPT");case 2:return t.next=4,j(a);case 4:e.onRefresh();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=e.rows.map((function(e,t){var a,n="status";return e.orderStatus&&(n+=" ".concat(e.orderStatus.toLowerCase())),r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.id),r.a.createElement("td",null,r.a.createElement(Y.a,{variant:"person"==e.orderType?"primary":"dark"},e.orderType.toUpperCase())),r.a.createElement("td",{className:"center"},e.requestCount),r.a.createElement("td",null,(a=e.createdAt,O()(new Date(a)).format("DD/MM/YYYY | hh:mm A"))),r.a.createElement("td",{className:n},e.orderStatus),r.a.createElement("td",null,e.pdfUrl?r.a.createElement("img",{src:L.a,alt:"Download"}):null),r.a.createElement("td",null,r.a.createElement(B.a,null,r.a.createElement(B.a.Toggle,{as:U,id:"dropdown-basic"}),r.a.createElement(B.a.Menu,null,r.a.createElement(B.a.Item,{onClick:function(){return f(e.id)}},"Approve"),r.a.createElement(B.a.Item,{onClick:function(){return t=e.id,d(t),void c(!0);var t}},"Decline")))))}));return r.a.createElement("div",{className:"request-table-container"},r.a.createElement(x.a,{bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"#"),r.a.createElement("td",null,"Type"),r.a.createElement("td",{className:"center"},"No of Passes"),r.a.createElement("td",null,"Raised on"),r.a.createElement("td",{className:""},"Status"),r.a.createElement("td",{width:"300"},"Download"),r.a.createElement("td",null))),r.a.createElement("tbody",null,g)),r.a.createElement(D,{show:o,onHide:function(){return c(!1)},onSubmit:p}))},Q=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchAllOrders();case 2:case"end":return e.stop()}}),e)}))),n.fetchAllOrders=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:200===(t=e.sent).status&&n.setState({orderList:t.data.orders}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n.setState({error:e.t0.toString()});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.state={orderList:[],error:null},n}return Object(m.a)(a,[{key:"render",value:function(){return this.state.error?r.a.createElement("div",{style:{height:"500px"},className:"d-flex justify-content-center align-items-center"},r.a.createElement("h1",{className:"text-danger"},"Unauthorised access")):r.a.createElement("div",{className:"padding-46"},r.a.createElement(F,{onRefresh:this.fetchAllOrders,rows:this.state.orderList}))}}]),a}(r.a.Component),M=(a(119),a(51)),J=a.n(M),z=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).logout=function(){localStorage.clear(),window.location.reload()},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-header"},r.a.createElement("img",{src:J.a,height:"30"}),r.a.createElement("span",{onClick:this.logout,className:"sign-out"},"Sign out"))}}]),a}(r.a.Component),X=(a(120),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).checkLoginSession=function(){var e=localStorage.getItem("expiry");return localStorage.getItem("auth")&&e&&new Date(e)>Date.now()},n.onLoginSuccess=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({loggedIn:!0});case 1:case"end":return e.stop()}}),e)}))),n.state={loggedIn:n.checkLoginSession()},n}return Object(m.a)(a,[{key:"render",value:function(){return this.state.loggedIn?r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(Q,null)):r.a.createElement("div",{className:"login-form"},r.a.createElement("img",{src:J.a,style:{display:"block",marginLeft:"auto",marginRight:"auto"}}),r.a.createElement(y,{onLogin:this.onLoginSuccess}))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,a){e.exports=a.p+"static/media/anumatiLogo.72e1b5bf.jpg"},61:function(e,t,a){},75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACGSURBVHgB7ZPBCYAwDEV/xQFcyT1E7AZuoJsoqHu4gY7iXTS2nkRqrFjBQx/kkpAXEgjgeYtgqx1lIFSHTI1ESK4lgGP+LzTfsKFSVQqmb8SMGFJMdkJeeinjhWYpK7NDS1siFQMqiuCElnJ3soeYb6hXvGOFRCrqczqEeQz7XjsLeng+YQPZairUORaqnAAAAABJRU5ErkJggg=="},76:function(e,t,a){e.exports=a.p+"static/media/vertical-dots.03f1bbc5.svg"},85:function(e,t,a){e.exports=a(121)},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.96775cde.chunk.js.map