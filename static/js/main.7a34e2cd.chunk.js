(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(4),a=n.n(o),u=(n(18),n(1)),i=(n(19),n(5)),l=n(6),f=n(8),s=n(7),h=n(2);function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(t){Object(f.a)(n,t);var e=p(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(t,e){}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0}}}]),n}(c.a.Component);var b=function(t){var e=Object(r.useState)(0),n=Object(u.a)(e,2),o=n[0],a=n[1];if(5===o)throw new Error("za duza ilosc...");return c.a.createElement("button",{onClick:function(){a(o+1)}},t.label," ",o)};b.defaultProps={label:"OK"};var d=function(){var t=Object(r.useState)([]),e=Object(u.a)(t,2),n=(e[0],e[1]);return Object(r.useEffect)(function(){fetch("https://randomuser.me/api/?results=10").then(function(t){return t.json()}).then(function(t){return n(t.results)}).catch(function(t){return console.log(t)})},[]),c.a.createElement("div",{className:"App"},c.a.createElement(v,null,c.a.createElement(b,null)))},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then(function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),o(t),a(t)})};a.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null))),m()},9:function(t,e,n){t.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.7a34e2cd.chunk.js.map