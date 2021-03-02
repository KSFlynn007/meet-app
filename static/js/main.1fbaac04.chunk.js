(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},64:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),s=n.n(o),i=(n(42),n(11)),c=n.n(i),l=n(15),u=n(6),d=n(10),h=n(8),m=n(7),p=n(75),f=n(76),v=(n(44),n(22)),b=n.n(v),g=n(1),j=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e.formatStartTime=function(){var t=e.props.event.start.dateTime,n=b()(t).format("dddd, MMMM, Do YYYY, h:MM a");return Object(g.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e.formatEndTime=function(){var t=e.props.event.end.dateTime,n=b()(t).format("dddd, MMMM, Do YYYY, h:MM a");return Object(g.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(g.jsxs)("div",{className:"Event",children:[Object(g.jsxs)("div",{className:"event-collapsed",children:[Object(g.jsx)("h3",{className:"event-name",children:t.summary}),Object(g.jsx)("p",{className:"event-location",children:t.location}),!e&&Object(g.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"See More"}),e&&Object(g.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"See Less"})]}),e&&Object(g.jsxs)("div",{className:"event-expanded",children:[Object(g.jsxs)("p",{className:"event-start",children:[Object(g.jsx)("span",{className:"time-label",children:"Starts @ "}),this.formatStartTime()]}),Object(g.jsxs)("p",{className:"event-end",children:[Object(g.jsx)("span",{className:"time-label",children:"Ends @ "}),this.formatEndTime()]}),Object(g.jsx)("p",{className:"event-description",children:t.description}),Object(g.jsxs)("p",{className:"event-organizer",children:["Get in touch with us about this event at: ",Object(g.jsx)("span",{className:"org-email",children:t.organizer.email})]})]})]})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(g.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(j,{event:e})},e.id)}))})}}]),n}(a.Component),y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"Alert",children:Object(g.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#7dd8ff",a}return n}(y),O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#ff4343",a}return n}(y),T=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;if(e.setState({showSuggestions:!0}),0!==e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1})).length)return e.setState({query:n,suggestions:[],showSuggestions:!1,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for, please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"CitySearch",children:[Object(g.jsx)(k,{text:this.state.infoText}),Object(g.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(g.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(g.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventNumber:12},e.handleInputChanged=function(t){var n=t.target.value;if(e.props.updateEvents(null,n),!(n<1))return e.setState({eventNumber:n,errorText:""});e.setState({eventNumber:n,errorText:"Please choose at least one event to view."})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"numberOfEvents",children:[Object(g.jsx)(O,{text:this.state.errorText,style:{margin:0}}),Object(g.jsx)("label",{className:"eventNumberLabel",children:"Number of events/page:"}),Object(g.jsx)("input",{type:"number",id:"eventNumber",className:"eventNumber",value:this.state.eventNumber,onChange:this.handleInputChanged})]})}}]),n}(a.Component),S=n(37),Z=[{kind:"calendar#event",etag:"'3181161784712000'",id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:"'3181159875584000'",id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-25T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],N=n(23),E=n.n(N),M=n(20),C=n.n(M),A={GET_AUTH:"https://ndtbfpup03.execute-api.ca-central-1.amazonaws.com/dev/api/get-auth-url",GET_TOKEN:"https://ndtbfpup03.execute-api.ca-central-1.amazonaws.com/dev/api/token/",GET_EVENTS:"https://ndtbfpup03.execute-api.ca-central-1.amazonaws.com/dev/api/get-events/",GOOGLE_API:"https://www.googleapis.com/oauth2/v1/tokeninfo?",LOCAL_HOST:"http://localhost:8080/"},W=function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))},D=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",Z);case 4:return e.next=6,L();case 6:if(!(t=e.sent)){e.next=16;break}return q(),n=A.GET_EVENTS+t,e.next=12,E.a.get(n);case 12:return(a=e.sent).data&&(r=W(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),C.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,B(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get(A.GET_AUTH);case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&I(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A.GOOGLE_API,"access_token=").concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),n=encodeURIComponent(t),e.next=4,fetch(A.GET_TOKEN+n).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(64);var J=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"Welcome to the Meet App"}),Object(g.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(g.jsx)("div",{className:"button_cont",align:"center",children:Object(g.jsxs)("div",{className:"google-btn",children:[Object(g.jsx)("div",{className:"google-icon-wrapper",children:Object(g.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sing-in"})}),Object(g.jsx)("a",{href:A.GET_AUTH,rel:"nofollow noopener",className:"btn-text",children:Object(g.jsx)("b",{children:"Sign in with Google"})})]})}),Object(g.jsx)("a",{href:"https://glenzy.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy Policy"})]})},R=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?D().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t})})):D().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.state={events:[],locations:[],numberOfEvents:12,currentLocation:"all",tokenCheck:!1},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,B(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&!0===this.mounted&&!1===n&&(this.setState({tokenCheck:!0}),this.updateEvents()),this.mounted=!0,D().then((function(e){o.mounted&&o.setState({events:e,locations:W(e)})}));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return!1==={tokenCheck:this.state.tokenCheck}?Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(J,{})}):Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)(p.a,{variant:"dark",expand:"md",fixed:"top",className:"color-nav",children:[Object(g.jsx)(p.a.Brand,{className:"brand",href:"https://ksflynn007.github.io/meet-app/",children:"Code Hub"}),Object(g.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(p.a.Collapse,{children:Object(g.jsxs)(f.a,{children:[Object(g.jsx)(f.a.Item,{children:Object(g.jsx)(f.a.Link,{className:"justify-content-end",href:"https://ksflynn007.github.io/meet-app/privacy-policy.html",children:"Privacy Policy"})}),Object(g.jsx)(f.a.Item,{className:"header-welcome",children:"Welcome to the Code Hub, please select from a city below to find an event:"})]})})]}),Object(g.jsx)(T,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(g.jsx)(x,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(g.jsx)(w,{events:this.state.events})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))},H=n(36);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),G(),H.config("b9237718df5e45c39793ba2fadca9808").install()}},[[72,1,2]]]);
//# sourceMappingURL=main.1fbaac04.chunk.js.map