(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{33:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},34:function(t,e,r){"use strict";var n=r(35),o=r.n(n),i=r(37),a="https://api.themoviedb.org/3",c="?api_key=f37c49543e0e2e54afc5ecab7f1ff4ce";function s(){return(s=Object(i.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(a).concat(e).concat(c),t.next=3,fetch(r);case 3:if(!(n=t.sent).ok){t.next=10;break}return t.next=7,n.json();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=Promise.reject(new Error("Can not find images with name"));case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=Object(i.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(a,"/search/movie").concat(c,"&query=").concat(e),t.next=3,fetch(r);case 3:if(!(n=t.sent).ok){t.next=10;break}return t.next=7,n.json();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=Promise.reject(new Error("Can not find images with name"));case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l={getMovies:function(t){return s.apply(this,arguments)},getMoviesBySearch:function(t){return u.apply(this,arguments)}};e.a=l},35:function(t,e,r){t.exports=r(36)},36:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",v="executing",p="completed",d={};function y(){}function m(){}function b(){}var g={};s(g,i,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(S([])));w&&w!==r&&n.call(w,i)&&(g=w);var x=b.prototype=y.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=b,s(x,"constructor",b),s(b,"constructor",m),m.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},37:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},43:function(t,e,r){t.exports={button:"BackButton_button__2fiBp"}},44:function(t,e,r){t.exports={container:"MovieTemplate_container__3pkxH",info:"MovieTemplate_info__aDBSh"}},45:function(t,e,r){t.exports={container:"CastReviews_container__bkaVI",buttons:"CastReviews_buttons__P7s2l",link:"CastReviews_link__1Axp8",activeLink:"CastReviews_activeLink__2cjsI"}},48:function(t,e,r){"use strict";r.r(e);var n=r(33),o=r(2),i=r(0),a=r(34),c=r(43),s=r.n(c),u=r(1),l=function(t){var e=t.backFunction;return Object(u.jsx)("button",{className:s.a.button,onClick:e,children:"\xab Go back"})},f=r(44),h=r.n(f),v=function(t){var e=t.movie;return Object(u.jsxs)("div",{className:h.a.container,children:[Object(u.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.img),alt:""}),Object(u.jsxs)("div",{className:h.a.info,children:[Object(u.jsx)("h1",{children:e.title}),Object(u.jsxs)("p",{children:["User Score: ",e.score]}),Object(u.jsx)("h2",{children:"Overview"}),Object(u.jsx)("p",{children:e.overview}),Object(u.jsx)("h2",{children:"Genres"}),Object(u.jsx)("ul",{children:e.genres.map((function(t){return Object(u.jsx)("li",{children:t.name},t.id)}))})]})]})},p=v;v.defaultProps={movie:{}};var d=r(8),y=r(45),m=r.n(y),b=Object(i.lazy)((function(){return r.e(7).then(r.bind(null,50))})),g=Object(i.lazy)((function(){return r.e(8).then(r.bind(null,52))})),j=function(t){var e=t.url,r=t.movieId;return Object(u.jsxs)("div",{className:m.a.container,children:[Object(u.jsxs)("div",{className:m.a.buttons,children:[Object(u.jsx)(d.c,{to:"".concat(e,"/cast"),className:m.a.link,activeClassName:m.a.activeLink,children:"Cast"}),Object(u.jsx)(d.c,{to:"".concat(e,"/reviews"),className:m.a.link,activeClassName:m.a.activeLink,children:"Reviews"})]}),Object(u.jsx)(i.Suspense,{fallback:Object(u.jsx)("h2",{children:"Loadinh..."}),children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"".concat(e,"/cast"),children:Object(u.jsx)(b,{movieId:r})}),Object(u.jsx)(o.a,{path:"".concat(e,"/reviews"),children:Object(u.jsx)(g,{movieId:r})})]})})]})};e.default=function(){var t=Object(o.g)().movieId,e=Object(o.h)().url,r=Object(o.f)(),c=Object(i.useState)(null),s=Object(n.a)(c,2),f=s[0],h=s[1];return Object(i.useEffect)((function(){var e="/movie/".concat(t);a.a.getMovies(e).then((function(t){var e=t.title,r=t.poster_path,n=t.overview,o=t.genres,i=t.vote_average;return h({title:e,img:r,overview:n,genres:o,score:i})}))}),[t]),Object(u.jsxs)(u.Fragment,{children:[null!==f&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{backFunction:function(){return r.goBack()}}),Object(u.jsx)(p,{movie:f})]}),Object(u.jsx)(j,{url:e,movieId:t})]})}}}]);
//# sourceMappingURL=3.d1bd5fbe.chunk.js.map