(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{209:function(e,t,n){},211:function(e,t,n){},361:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(55),c=n.n(o),s=(n(209),n(17)),i=n.n(s),l=n(42),u=n(23),d=n(30),h=n(24),p=n(25),b=(n(211),n(2));var f=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Welcome to devel_Up+, the Web Development Meet app!"}),Object(b.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(b.jsx)("div",{className:"button_cont",align:"center",children:Object(b.jsxs)("div",{class:"google-btn",children:[Object(b.jsx)("div",{class:"google-icon-wrapper",children:Object(b.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(b.jsx)("a",{href:"https://accounts.google.com/o/oauth2/v2/auth/identifier?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=36721240947-ga3kcvoir0t2rghlcqp83iv9gb1c831r.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwillcrone11.github.io%2Fmeet%2F&flowName=GeneralOAuthFlow",rel:"nofollow noopener",class:"btn-text",children:Object(b.jsx)("b",{children:"Sign in with Google"})})]})}),Object(b.jsx)("a",{href:"https://willcrone11.github.io/meet/devel_Up+PrivacyPolicy.html",rel:"nofollow noopener",children:"Privacy policy"})]})},j=n(174),v=n.n(j),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isExpanded:!1},e.handleExpandEvent=function(){!1===e.state.isExpanded?e.setState({isExpanded:!0}):e.setState({isExpanded:!1})},e.renderExpandedComponent=function(){var t=e.props.event;if(e.state.isExpanded)return Object(b.jsxs)("div",{className:"Expanded-Event",children:[Object(b.jsx)("h4",{children:"About event:"}),Object(b.jsx)("div",{className:"link-container",children:Object(b.jsx)("a",{className:"link",href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"})}),Object(b.jsx)("p",{className:"description",children:t.description})]})},e.renderButtonText=function(){return e.state.isExpanded?"Hide details":"Show details"},e.formatTime=function(){var t=e.props.event.start.dateTime,n=v()(t).format("dddd, MMMM Do YYYY, h:mm a");return Object(b.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(b.jsxs)("div",{className:"event",onClick:this.handleExpandEvent,children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("h2",{className:"summary",children:e.summary})}),Object(b.jsx)("div",{className:"time",children:this.formatTime()}),Object(b.jsx)("div",{className:"location-container",children:Object(b.jsx)("span",{className:"location",children:e.location})}),Object(b.jsx)("div",{children:this.renderExpandedComponent()}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"button",className:"details-btn",onClick:this.handleExpandEvent,children:this.renderButtonText()})]})}}]),n}(a.Component),g=n(198),x=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],O=n(120),w=n.n(O),y=n(76),k=n.n(y),S=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return k.a.done(),e.abrupt("return",x);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),k.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:E(JSON.parse(t).events)});case 8:return e.next=10,A();case 10:if(!(n=e.sent)){e.next=20;break}return T(),a="https://embmwddg0m.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,w.a.get(a);case 16:return(r=e.sent).data&&(o=E(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),k.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.map((function(e){return e.location}));return Object(g.a)(new Set(t))},T=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),n=encodeURIComponent(t),e.next=4,fetch("https://embmwddg0m.execute-api.us-east-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:if(t=e.sent,e.t0=t,!e.t0){e.next=8;break}return e.next=7,C(t);case 7:e.t0=e.sent;case 8:if(n=e.t0,t&&n){e.next=23;break}return e.next=12,localStorage.removeItem("access_token");case 12:return a=new URLSearchParams(window.location.search),e.next=15,a.get("code");case 15:if(r=e.sent){e.next=22;break}return e.next=19,w.a.get("https://embmwddg0m.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 19:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 22:return e.abrupt("return",r&&N(r));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0,S().then((function(e){t.mounted&&t.setState({events:e,locations:E(e)})})),this.ifOnline();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(m,{event:e})},e.id)}))})}}]),n}(a.Component),Z=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(Z),L=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(Z),F=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(!(a.length<1))return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",onMouseOver:function(){e.setState({showSuggestions:!0})},onMouseOut:function(){e.setState({showSuggestions:!1})},children:[Object(b.jsx)("div",{className:"info-alert",children:Object(b.jsx)(M,{text:this.state.infoText})}),Object(b.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),I=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:"24"},e.handleChange=function(t){var n=t.target.value;if(e.props.updateEvents(null,n),!(n<0|n>=101))return e.setState({infoText:"",numberOfEvents:n});e.setState({infoText:"Please enter a number between 0 and 100"})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(b.jsxs)("div",{className:"numberOfEvents",children:[Object(b.jsx)("p",{className:"error-alert",children:Object(b.jsx)(L,{text:this.state.infoText})}),Object(b.jsxs)("label",{id:"numevents-label",children:["Number of events:",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"number",className:"number",value:e,onChange:this.handleChange})]})]})}}]),n}(a.Component),q=n(29),D=n(370),_=n(369),U=n(189),J=n(95),B=n(75),R=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(q.a)(n,2),o=r[0],c=r[1];Object(a.useEffect)((function(){c((function(){return s()}))}),[t]);var s=function(){return["React","JavaScript","Node","jQuery","Angular"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},i=["#ee5454","#5f74f0","#69eb13","#13ebeb","#eb13c7"];return Object(b.jsx)(D.a,{height:400,children:Object(b.jsxs)(_.a,{children:[Object(b.jsx)(U.a,{data:o,cx:"47%",cy:"50%",labelLine:!1,legendType:"square",outerRadius:80,fill:"#8884d8",datakey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:o.map((function(e,t){return Object(b.jsx)(J.a,{fill:i[t%i.length],name:e.name},"cell-".concat(t))}))}),Object(b.jsx)(B.a,{layout:"horizontal",align:"center",verticalAlign:"top"})]})})},P=(n(361),n(366)),Y=n(367),G=n(194),z=n(195),H=n(79),V=n(199),K=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:"24",currentLocation:"all",tokenCheck:!1},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?S().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t})})):S().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(",").shift(),number:t}}))},e.ifOnline=function(){if(navigator.onLine)return e.setState({infoText:""});e.setState({infoText:"You are currently offline- events may not be up to date"})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,C(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&!0===this.mounted&&!1===n&&(this.setState({tokenCheck:!0}),this.updateEvents());case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return!1===this.state.tokenCheck?Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(f,{})}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{id:"header-container",children:[Object(b.jsxs)("h1",{id:"header",children:[Object(b.jsx)("span",{id:"devel",children:"devel_"}),Object(b.jsx)("span",{id:"up",children:"Up"}),Object(b.jsx)("span",{id:"plus",children:"+"})]}),Object(b.jsx)("p",{className:"error-alert-offline",children:Object(b.jsx)(L,{text:this.state.infoText})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{id:"subheader",children:["Want to level-up your dev skills?",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Explore upcoming events in ",Object(b.jsx)("span",{id:"webdev-header",children:"Web Development"})," from around the world!"]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{id:"city-label",children:["Select your city:",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(F,{locations:this.state.locations,updateEvents:this.updateEvents})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(I,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"data-vis-wrapper",children:[Object(b.jsx)("p",{className:"chart-label",children:"Frequency of Event by Type:"}),Object(b.jsx)(R,{events:this.state.events,locations:this.state.locations}),Object(b.jsx)("p",{className:"chart-label",children:"Number of Events per City:"}),Object(b.jsx)(D.a,{height:400,children:Object(b.jsxs)(P.a,{margin:{top:5,right:5,bottom:5,left:0},children:[Object(b.jsx)(Y.a,{}),Object(b.jsx)(G.a,{type:"category",dataKey:"city",name:"city"}),Object(b.jsx)(z.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(b.jsx)(H.a,{cursor:{strokeDasharray:"3 3"}}),Object(b.jsx)(V.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(W,{events:this.state.events})]})}}]),n}(a.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,371)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},ee=n(196);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}(),$(),ee.config("74815b4dc5874d75a670130aff0bc5bb").install()}},[[362,1,2]]]);
//# sourceMappingURL=main.9d7d7e37.chunk.js.map