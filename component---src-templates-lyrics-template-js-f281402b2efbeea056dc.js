webpackJsonp([22320329301387],{107:function(e,t,n){!function(t,r){e.exports=r(n(2))}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(9)(o,!0)},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,a,i,u,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,i,u,s],f=0;c=new Error(t.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};o=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")},e.exports=r},function(e,t,n){"use strict";var r=n(1),o=r,a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];a.apply(void 0,[t].concat(r))}},e.exports=o},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e){return e in i?i[e]:i[e]=e.replace(o,"-$&").toLowerCase().replace(a,"-ms-")}var o=/[A-Z]/g,a=/^ms-/,i={};e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=a.default.oneOfType([a.default.string,a.default.number]),u={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:i,deviceHeight:i,width:i,deviceWidth:i,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:i},s=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:i,maxHeight:i,minDeviceHeight:i,maxDeviceHeight:i,minWidth:i,maxWidth:i,minDeviceWidth:i,maxDeviceWidth:i,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:i,maxResolution:i},u),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},l=r({},c,s);u.type=Object.keys(c),t.default={all:l,types:c,matchers:u,features:s},e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n=c({},e);return t.forEach(function(e){return delete n[e]}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.toQuery=t.default=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(8),f=r(l),p=n(0),d=r(p),m=n(12),h=r(m),y=n(5),v=r(y),b=n(6),g=r(b),w=n(14),O=r(w),x={component:d.default.node,query:d.default.string,values:d.default.shape(g.default.matchers),children:d.default.oneOfType([d.default.node,d.default.func]),onChange:d.default.func,onBeforeChange:d.default.func},j=Object.keys(g.default.all),_=Object.keys(x),k=_.concat(j),E=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={matches:!1},r.updateMatches=function(){r._mql.matches!==r.state.matches&&r.setState({matches:r._mql.matches})},r.removeMql=function(){r._mql&&(r._mql.removeListener(r.updateMatches),r._mql.dispose())},i=n,a(r,i)}return i(t,e),s(t,[{key:"componentWillMount",value:function(){this.updateQuery(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.updateQuery(e)}},{key:"updateQuery",value:function(e){var t=void 0;if(e.query?this.query=e.query:this.query=(0,O.default)(u(e,_)),!this.query)throw new Error("Invalid or missing MediaQuery!");e.values&&(t=Object.keys(e.values).reduce(function(t,n){return t[(0,v.default)(n)]=e.values[n],t},{})),this.removeMql(),this._mql=(0,h.default)(this.query,t),this._mql.addListener(this.updateMatches),this.updateMatches()}},{key:"componentWillUpdate",value:function(e,t){this.props.onBeforeChange&&this.state.matches!==t.matches&&this.props.onBeforeChange(this.state.matches)}},{key:"componentDidUpdate",value:function(e,t){this.props.onChange&&t.matches!==this.state.matches&&this.props.onChange(this.state.matches)}},{key:"componentWillUnmount",value:function(){this.removeMql()}},{key:"render",value:function(){if("function"==typeof this.props.children)return this.props.children(this.state.matches);if(!1===this.state.matches)return null;var e=u(this.props,k),t=Object.keys(e).length>0,n=f.default.Children.count(this.props.children);return this.props.component||void 0===this.props.children?f.default.createElement(this.props.component||"div",e,this.props.children):t?f.default.cloneElement(this.props.children,e):n?this.props.children:null}}]),t}(f.default.Component);E.displayName="MediaQuery",E.defaultProps={values:{}},t.default=E,t.toQuery=O.default},function(t,n){t.exports=e},function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(3),i=n(10),u=n(4),s=n(11);e.exports=function(e,t){function n(e){var t=e&&(E&&e[E]||e[T]);if("function"==typeof t)return t}function c(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function f(e){function n(n,s,c,f,p,d,m){if(f=f||R,d=d||c,m!==u)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("undefined"!=typeof console){var h=f+":"+c;!r[h]&&i<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",d,f),r[h]=!0,i++)}return null==s[c]?n?new l(null===s[c]?"The "+p+" `"+d+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(s,c,f,p,d)}var r={},i=0,s=n.bind(null,!1);return s.isRequired=n.bind(null,!0),s}function p(e){function t(t,n,r,o,a,i){var u=t[n];return x(u)!==e?new l("Invalid "+o+" `"+a+"` of type `"+j(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}return f(t)}function d(e){function t(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new l("Invalid "+o+" `"+a+"` of type `"+x(i)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<i.length;s++){var c=e(i,s,r,o,a+"["+s+"]",u);if(c instanceof Error)return c}return null}return f(t)}function m(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||R;return new l("Invalid "+o+" `"+a+"` of type `"+k(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return f(t)}function h(e){function t(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(c(i,e[u]))return null;return new l("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(t):(a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function y(e){function t(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],s=x(i);if("object"!==s)return new l("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var c in i)if(i.hasOwnProperty(c)){var f=e(i,c,r,o,a+"."+c,u);if(f instanceof Error)return f}return null}return f(t)}function v(e){function t(t,n,r,o,a){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,o,a,u))return null;return new l("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",_(o),n),r.thatReturnsNull}return f(t)}function b(e){function t(t,n,r,o,a){var i=t[n],s=x(i);if("object"!==s)return new l("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var p=f(i,c,r,o,a+"."+c,u);if(p)return p}}return null}return f(t)}function g(e){function t(t,n,r,o,a){var s=t[n],c=x(s);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var p in f){var d=e[p];if(!d)return new l("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(s,p,r,o,a+"."+p,u);if(m)return m}return null}return f(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!w(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!w(i[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}function x(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function j(e){if(void 0===e||null===e)return""+e;var t=x(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function k(e){return e.constructor&&e.constructor.name?e.constructor.name:R}var E="function"==typeof Symbol&&Symbol.iterator,T="@@iterator",R="<<anonymous>>",P={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,o,a){var i=t[n];return e(i)?null:new l("Invalid "+o+" `"+a+"` of type `"+x(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return f(t)}(),instanceOf:m,node:function(){function e(e,t,n,r,o){return w(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:y,oneOf:h,oneOfType:v,shape:b,exact:g};return l.prototype=Error.prototype,P.checkPropTypes=s,P.PropTypes=P,P}},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)a.call(n,l)&&(s[l]=n[l]);if(o){u=o(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},function(e,t,n){"use strict";function r(e,t,n,r,s){for(var c in e)if(e.hasOwnProperty(c)){var l;try{o("function"==typeof e[c],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",r||"React class",n,c,typeof e[c]),l=e[c](t,c,r,n,null,i)}catch(e){l=e}if(a(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,c,typeof l),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var f=s?s():"";a(!1,"Failed %s type: %s%s",n,l.message,null!=f?f:"")}}}var o=n(2),a=n(3),i=n(4),u={};e.exports=r},function(e,t,n){"use strict";function r(e,t){function n(e){c&&c.addListener(e)}function r(e){c&&c.removeListener(e)}function o(e){s.matches=e.matches,s.media=e.media}function u(){c&&c.removeListener(o)}var s=this;if(i){var c=i.call(window,e);this.matches=c.matches,this.media=c.media,c.addListener(o)}else this.matches=a(e,t),this.media=e;this.addListener=n,this.removeListener=r,this.dispose=u}function o(e,t){return new r(e,t)}var a=n(13).match,i="undefined"!=typeof window?window.matchMedia:null;e.exports=o},function(e,t,n){"use strict";function r(e,t){return o(e).some(function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every(function(e){var n=e.feature,r=e.modifier,o=e.value,s=t[n];if(!s)return!1;switch(n){case"orientation":case"scan":return s.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),s=u(s);break;case"resolution":o=i(o),s=i(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=a(o),s=a(s);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,s=parseInt(s,10)||0}switch(r){case"min":return s>=o;case"max":return s<=o;default:return s===o}});return o&&!n||!o&&n})}function o(e){return e.split(",").map(function(e){e=e.trim();var t=e.match(s),n=t[1],r=t[2],o=t[3]||"",a={};return a.inverse=!!n&&"not"===n.toLowerCase(),a.type=r?r.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(e){var t=e.match(c),n=t[1].toLowerCase().match(l);return{modifier:n[1],feature:n[2],value:t[2]}}),a})}function a(e){var t,n=Number(e);return n||(t=e.match(/^(\d+)\s*\/\s*(\d+)$/),n=t[1]/t[2]),n}function i(e){var t=parseFloat(e);switch(String(e).match(p)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=r,t.parse=o;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,l=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,p=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=(0,u.default)(e);return"number"==typeof t&&(t+="px"),!0===t?e:!1===t?l(e):"("+n+": "+t+")"}function a(e){return e.join(" and ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return Object.keys(c.default.all).forEach(function(n){var r=e[n];null!=r&&t.push(o(n,r))}),a(t)};var i=n(5),u=r(i),s=n(6),c=r(s),l=function(e){return"not "+e};e.exports=t.default}])})},188:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.lyricsTemplateQuery=void 0;var o=n(107),a=r(o),i=n(7),u=r(i),s=n(2),c=r(s),l=n(273),f=r(l),p=function(e){var t=e.data,n=t.markdownRemark;return c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},c.default.createElement(a.default,{query:"(orientation: portrait)"},c.default.createElement("div",{className:"col-8 offset-2 "+f.default.lyrics,dangerouslySetInnerHTML:{__html:n.html}})),c.default.createElement(a.default,{query:"(orientation: landscape)"},c.default.createElement("div",{className:"col-4 offset-4 "+f.default.lyrics,dangerouslySetInnerHTML:{__html:n.html}}))))};t.lyricsTemplateQuery="** extracted graphql fragment **";p.propTypes={data:u.default.object.isRequired},t.default=p},273:function(e,t){e.exports={lyrics:"src-templates----lyricsTemplate-module---lyrics---IexWd",wordbreak:"src-templates----lyricsTemplate-module---wordbreak---1zFN5"}}});
//# sourceMappingURL=component---src-templates-lyrics-template-js-f281402b2efbeea056dc.js.map