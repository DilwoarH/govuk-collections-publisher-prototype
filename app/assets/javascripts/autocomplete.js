!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.accessibleAutocomplete=t():e.accessibleAutocomplete=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1)}([function(e,t,n){"use strict";function o(){}function r(e,t){var n,r,l,i,s=L;for(i=arguments.length;i-- >2;)P.push(arguments[i]);for(t&&null!=t.children&&(P.length||P.push(t.children),delete t.children);P.length;)if((r=P.pop())&&void 0!==r.pop)for(i=r.length;i--;)P.push(r[i]);else"boolean"==typeof r&&(r=null),(l="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(l=!1)),l&&n?s[s.length-1]+=r:s===L?s=[r]:s.push(r),n=l;var u=new o;return u.nodeName=e,u.children=s,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==B.vnode&&B.vnode(u),u}function l(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t){return r(e.nodeName,l(l({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e){!e._dirty&&(e._dirty=!0)&&1==R.push(e)&&(B.debounceRendering||T)(u)}function u(){var e,t=R;for(R=[];e=t.pop();)e._dirty&&k(e)}function a(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&p(e,t.nodeName):n||e._componentConstructor===t.nodeName}function p(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function d(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var l in n)l in o||(e.style[l]="");for(var l in o)e.style[l]="number"==typeof o[l]&&!1===V.test(l)?o[l]+"px":o[l]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,v,i):e.removeEventListener(t,v,i),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)m(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var s=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function m(e,t,n){try{e[t]=n}catch(e){}}function v(e){return this._listeners[e.type](B.event&&B.event(e)||e)}function y(){for(var e;e=q.pop();)B.afterMount&&B.afterMount(e),e.componentDidMount&&e.componentDidMount()}function _(e,t,n,o,r,l){U++||(j=null!=r&&void 0!==r.ownerSVGElement,F=null!=e&&!("__preactattr_"in e));var i=b(e,t,n,o,l);return r&&i.parentNode!==r&&r.appendChild(i),--U||(F=!1,l||y()),i}function b(e,t,n,o,r){var l=e,i=j;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(l=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(l,e),w(e,!0))),l.__preactattr_=!0,l;var s=t.nodeName;if("function"==typeof s)return I(e,t,n,o);if(j="svg"===s||"foreignObject"!==s&&j,s=String(s),(!e||!p(e,s))&&(l=d(s,j),e)){for(;e.firstChild;)l.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(l,e),w(e,!0)}var u=l.firstChild,a=l.__preactattr_,c=t.children;if(null==a){a=l.__preactattr_={};for(var f=l.attributes,h=f.length;h--;)a[f[h].name]=f[h].value}return!F&&c&&1===c.length&&"string"==typeof c[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=c[0]&&(u.nodeValue=c[0]):(c&&c.length||null!=u)&&g(l,c,n,o,F||null!=a.dangerouslySetInnerHTML),O(l,t.attributes,a),j=i,l}function g(e,t,n,o,r){var l,i,s,u,p,c=e.childNodes,d=[],h={},m=0,v=0,y=c.length,_=0,g=t?t.length:0;if(0!==y)for(var C=0;C<y;C++){var O=c[C],x=O.__preactattr_,E=g&&x?O._component?O._component.__key:x.key:null;null!=E?(m++,h[E]=O):(x||(void 0!==O.splitText?!r||O.nodeValue.trim():r))&&(d[_++]=O)}if(0!==g)for(var C=0;C<g;C++){u=t[C],p=null;var E=u.key;if(null!=E)m&&void 0!==h[E]&&(p=h[E],h[E]=void 0,m--);else if(!p&&v<_)for(l=v;l<_;l++)if(void 0!==d[l]&&a(i=d[l],u,r)){p=i,d[l]=void 0,l===_-1&&_--,l===v&&v++;break}p=b(p,u,n,o),s=c[C],p&&p!==e&&p!==s&&(null==s?e.appendChild(p):p===s.nextSibling?f(s):e.insertBefore(p,s))}if(m)for(var C in h)void 0!==h[C]&&w(h[C],!1);for(;v<=_;)void 0!==(p=d[_--])&&w(p,!1)}function w(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),C(e))}function C(e){for(e=e.lastChild;e;){var t=e.previousSibling;w(e,!0),e=t}}function O(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,j);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],j)}function x(e){var t=e.constructor.name;(W[t]||(W[t]=[])).push(e)}function E(e,t,n){var o,r=W[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),A.call(o,t,n)):(o=new A(t,n),o.constructor=e,o.render=N),r)for(var l=r.length;l--;)if(r[l].constructor===e){o.nextBase=r[l].nextBase,r.splice(l,1);break}return o}function N(e,t,n){return this.constructor(e,n)}function S(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===B.syncComponentUpdates&&e.base?s(e):k(e,1,r)),e.__ref&&e.__ref(e))}function k(e,t,n,o){if(!e._disable){var r,i,s,u=e.props,a=e.state,p=e.context,d=e.prevProps||u,f=e.prevState||a,h=e.prevContext||p,m=e.base,v=e.nextBase,b=m||v,g=e._component,C=!1;if(m&&(e.props=d,e.state=f,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,a,p)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(u,a,p),e.props=u,e.state=a,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){r=e.render(u,a,p),e.getChildContext&&(p=l(l({},p),e.getChildContext()));var O,x,N=r&&r.nodeName;if("function"==typeof N){var I=c(r);i=g,i&&i.constructor===N&&I.key==i.__key?S(i,I,1,p,!1):(O=i,e._component=i=E(N,I,p),i.nextBase=i.nextBase||v,i._parentComponent=e,S(i,I,0,p,!1),k(i,1,n,!0)),x=i.base}else s=b,O=g,O&&(s=e._component=null),(b||1===t)&&(s&&(s._component=null),x=_(s,r,p,n||!m,b&&b.parentNode,!0));if(b&&x!==b&&i!==g){var A=b.parentNode;A&&x!==A&&(A.replaceChild(x,b),O||(b._component=null,w(b,!1)))}if(O&&M(O),e.base=x,x&&!o){for(var D=e,P=e;P=P._parentComponent;)(D=P).base=x;x._component=D,x._componentConstructor=D.constructor}}if(!m||n?q.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(d,f,h),B.afterUpdate&&B.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);U||o||y()}}function I(e,t,n,o){for(var r=e&&e._component,l=r,i=e,s=r&&e._componentConstructor===t.nodeName,u=s,a=c(t);r&&!u&&(r=r._parentComponent);)u=r.constructor===t.nodeName;return r&&u&&(!o||r._component)?(S(r,a,3,n,o),e=r.base):(l&&!s&&(M(l),e=i=null),r=E(t.nodeName,a,n),e&&!r.nextBase&&(r.nextBase=e,i=null),S(r,a,1,n,o),e=r.base,i&&e!==i&&(i._component=null,w(i,!1))),e}function M(e){B.beforeUnmount&&B.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?M(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,f(t),x(e),C(t)),e.__ref&&e.__ref(null)}function A(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function D(e,t,n){return _(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return r}),n.d(t,"createElement",function(){return r}),n.d(t,"cloneElement",function(){return i}),n.d(t,"Component",function(){return A}),n.d(t,"render",function(){return D}),n.d(t,"rerender",function(){return u}),n.d(t,"options",function(){return B});var B={},P=[],L=[],T="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,V=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,R=[],q=[],U=0,j=!1,F=!1,W={};l(A.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=l({},n)),l(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),k(this,2)},render:function(){}});var K={h:r,createElement:r,cloneElement:i,Component:A,render:D,rerender:u,options:B};t.default=K},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function o(e){if(!e.element)throw new Error("element is not defined");if(!e.id)throw new Error("id is not defined");if(!e.source)throw new Error("source is not defined");Array.isArray(e.source)&&(e.source=u(e.source)),(0,l.render)((0,l.createElement)(s.default,e),e.element)}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(0),i=n(3),s=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(e){return function(t,n){n(e.filter(function(e){return-1!==e.toLowerCase().indexOf(t.toLowerCase())}))}};o.enhanceSelectElement=function(e){if(!e.selectElement)throw new Error("selectElement is not defined");if(!e.source){var t=[].filter.call(e.selectElement.options,function(t){return t.value||e.preserveNullOptions});e.source=t.map(function(e){return e.textContent||e.innerText})}if(e.onConfirm=e.onConfirm||function(t){var n=[].filter.call(e.selectElement.options,function(e){return(e.textContent||e.innerText)===t})[0];n&&(n.selected=!0)},e.selectElement.value||void 0===e.defaultValue){var n=e.selectElement.options[e.selectElement.options.selectedIndex];e.defaultValue=n.textContent||n.innerText}void 0===e.name&&(e.name=""),void 0===e.id&&(void 0===e.selectElement.id?e.id="":e.id=e.selectElement.id),void 0===e.autoselect&&(e.autoselect=!0);var l=document.createElement("span");e.selectElement.parentNode.insertBefore(l,e.selectElement),o(r({},e,{element:l})),e.selectElement.style.display="none",e.selectElement.id=e.selectElement.id+"-select"},e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){}function l(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){"function"!=typeof t&&null!==t||(e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t))}function s(){return!(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||!navigator.userAgent.match(/AppleWebKit/g))}function u(e){return e>47&&e<58||32===e||8===e||e>64&&e<91||e>95&&e<112||e>185&&e<193||e>218&&e<223}function a(e){return _?{onInput:e}:b?{onChange:e}:void 0}t.__esModule=!0,t.default=void 0;var p,c,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=n(0),h=n(4),m=o(h),v=n(5),y=o(v),_=!0,b=!1,g={13:"enter",27:"escape",32:"space",38:"up",40:"down"},w=function(){var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}(),C=(c=p=function(e){function t(n){r(this,t);var o=l(this,e.call(this,n));return o.elementReferences={},o.state={focused:null,hovered:null,menuOpen:!1,options:n.defaultValue?[n.defaultValue]:[],query:n.defaultValue,selected:null},o.handleComponentBlur=o.handleComponentBlur.bind(o),o.handleKeyDown=o.handleKeyDown.bind(o),o.handleUpArrow=o.handleUpArrow.bind(o),o.handleDownArrow=o.handleDownArrow.bind(o),o.handleEnter=o.handleEnter.bind(o),o.handlePrintableKey=o.handlePrintableKey.bind(o),o.handleOptionBlur=o.handleOptionBlur.bind(o),o.handleOptionClick=o.handleOptionClick.bind(o),o.handleOptionFocus=o.handleOptionFocus.bind(o),o.handleOptionMouseDown=o.handleOptionMouseDown.bind(o),o.handleOptionMouseEnter=o.handleOptionMouseEnter.bind(o),o.handleOptionMouseOut=o.handleOptionMouseOut.bind(o),o.handleInputBlur=o.handleInputBlur.bind(o),o.handleInputChange=o.handleInputChange.bind(o),o.handleInputFocus=o.handleInputFocus.bind(o),o.pollInputElement=o.pollInputElement.bind(o),o.getDirectInputChanges=o.getDirectInputChanges.bind(o),o}return i(t,e),t.prototype.componentDidMount=function(){this.pollInputElement()},t.prototype.componentWillUnmount=function(){clearTimeout(this.$pollInput)},t.prototype.pollInputElement=function(){var e=this;this.getDirectInputChanges(),this.$pollInput=setTimeout(function(){e.pollInputElement()},100)},t.prototype.getDirectInputChanges=function(){var e=this.elementReferences[-1];e&&e.value!==this.state.query&&this.handleInputChange({target:{value:e.value}})},t.prototype.componentDidUpdate=function(e,t){var n=this.state.focused,o=null===n,r=t.focused!==n;r&&!o&&this.elementReferences[n].focus();var l=-1===n,i=r&&null===t.focused;if(l&&i){var s=this.elementReferences[n];s.setSelectionRange(0,s.value.length)}},t.prototype.hasAutoselect=function(){return!s()&&this.props.autoselect},t.prototype.templateInputValue=function(e){var t=this.props.templates&&this.props.templates.inputValue;return t?t(e):e},t.prototype.templateSuggestion=function(e){var t=this.props.templates&&this.props.templates.suggestion;return t?t(e):e},t.prototype.handleComponentBlur=function(e){var t=this.state,n=t.options,o=t.query,r=t.selected,l=void 0;this.props.confirmOnBlur?(l=e.query||o,this.props.onConfirm(n[r])):l=o,this.setState({focused:null,menuOpen:e.menuOpen||!1,query:l,selected:null})},t.prototype.handleOptionBlur=function(e,t){var n=this.state,o=n.focused,r=n.menuOpen,l=n.options,i=n.selected,u=null===e.relatedTarget,a=e.relatedTarget===this.elementReferences[-1],p=o!==t&&-1!==o;if(!p&&u||!p&&!a){var c=r&&s();this.handleComponentBlur({menuOpen:c,query:this.templateInputValue(l[i])})}},t.prototype.handleInputBlur=function(e){var t=this.state,n=t.focused,o=t.menuOpen,r=t.options,l=t.query,i=t.selected;if(-1===n){var u=o&&s(),a=s()?l:this.templateInputValue(r[i]);this.handleComponentBlur({menuOpen:u,query:a})}},t.prototype.handleInputChange=function(e){var t=this,n=this.props,o=n.minLength,r=n.source,l=n.showAllValues,i=this.hasAutoselect(),s=e.target.value,u=0===s.length,a=this.state.query.length!==s.length,p=s.length>=o;this.setState({query:s}),l||!u&&a&&p?r(s,function(e){var n=e.length>0;t.setState({menuOpen:n,options:e,selected:i&&n?0:-1})}):!u&&p||this.setState({menuOpen:!1,options:[]})},t.prototype.handleInputClick=function(e){this.handleInputChange(e)},t.prototype.handleInputFocus=function(e){this.setState({focused:-1})},t.prototype.handleOptionFocus=function(e){this.setState({focused:e,hovered:null,selected:e})},t.prototype.handleOptionMouseEnter=function(e,t){this.setState({hovered:t})},t.prototype.handleOptionMouseOut=function(e,t){this.setState({hovered:null})},t.prototype.handleOptionClick=function(e,t){var n=this.state.options[t],o=this.templateInputValue(n);this.props.onConfirm(n),this.setState({focused:-1,menuOpen:!1,query:o,selected:-1}),this.forceUpdate()},t.prototype.handleOptionMouseDown=function(e){e.preventDefault()},t.prototype.handleUpArrow=function(e){e.preventDefault();var t=this.state,n=t.menuOpen,o=t.selected;-1!==o&&n&&this.handleOptionFocus(o-1)},t.prototype.handleDownArrow=function(e){var t=this;if(e.preventDefault(),this.props.showAllValues&&!1===this.state.menuOpen)e.preventDefault(),this.props.source("",function(e){t.setState({menuOpen:!0,options:e,selected:0,focused:0,hovered:null})});else if(!0===this.state.menuOpen){var n=this.state,o=n.menuOpen,r=n.options,l=n.selected,i=l!==r.length-1,s=i&&o;s&&this.handleOptionFocus(l+1)}},t.prototype.handleSpace=function(e){var t=this;this.props.showAllValues&&!1===this.state.menuOpen&&""===this.state.query&&(e.preventDefault(),this.props.source("",function(e){t.setState({menuOpen:!0,options:e})})),-1!==this.state.focused&&(e.preventDefault(),this.handleOptionClick(e,this.state.focused))},t.prototype.handleEnter=function(e){this.state.menuOpen&&(e.preventDefault(),this.state.selected>=0&&this.handleOptionClick(e,this.state.selected))},t.prototype.handlePrintableKey=function(e){var t=this.elementReferences[-1];e.target===t||t.focus()},t.prototype.handleKeyDown=function(e){switch(g[e.keyCode]){case"up":this.handleUpArrow(e);break;case"down":this.handleDownArrow(e);break;case"space":this.handleSpace(e);break;case"enter":this.handleEnter(e);break;case"escape":this.handleComponentBlur({query:this.state.query});break;default:u(e.keyCode)&&this.handlePrintableKey(e)}},t.prototype.render=function(){var e=this,t=this.props,n=t.cssNamespace,o=t.displayMenu,r=t.id,l=t.minLength,i=t.name,s=t.placeholder,u=t.required,p=t.showAllValues,c=t.tNoResults,h=t.tStatusQueryTooShort,v=t.tStatusNoResults,y=t.tStatusSelectedOption,_=t.tStatusResults,b=t.dropdownArrow,g=this.state,C=g.focused,O=g.hovered,x=g.menuOpen,E=g.options,N=g.query,S=g.selected,k=this.hasAutoselect(),I=-1===C,M=0===E.length,A=0!==N.length,D=N.length>=l,B=this.props.showNoOptionsFound&&I&&M&&A&&D,P=n+"__wrapper",L=n+"__input",T=null!==C,V=T?" "+L+"--focused":"",R=this.props.showAllValues?" "+L+"--show-all-values":" "+L+"--default",q=n+"__dropdown-arrow-down",U=-1!==C&&null!==C,j=n+"__menu",F=j+"--"+o,W=x||B,K=j+"--"+(W?"visible":"hidden"),H=n+"__option",Q=n+"__hint",$=this.templateInputValue(E[S]),z=$&&0===$.toLowerCase().indexOf(N.toLowerCase()),G=z&&k?N+$.substr(N.length):"",J=w&&G,X=void 0;return p&&"string"==typeof(X=b({className:q}))&&(X=(0,f.createElement)("div",{className:n+"__dropdown-arrow-down-wrapper",dangerouslySetInnerHTML:{__html:X}})),(0,f.createElement)("div",{className:P,onKeyDown:this.handleKeyDown,role:"combobox","aria-expanded":x?"true":"false"},(0,f.createElement)(m.default,{length:E.length,queryLength:N.length,minQueryLength:l,selectedOption:this.templateInputValue(E[S]),selectedOptionIndex:S,tQueryTooShort:h,tNoResults:v,tSelectedOption:y,tResults:_}),J&&(0,f.createElement)("span",null,(0,f.createElement)("input",{className:Q,readonly:!0,tabIndex:"-1",value:G})),(0,f.createElement)("input",d({"aria-activedescendant":!!U&&r+"__option--"+C,"aria-owns":r+"__listbox",autoComplete:"off",className:""+L+V+R,id:r,onClick:function(t){return e.handleInputClick(t)},onBlur:this.handleInputBlur},a(this.handleInputChange),{onFocus:this.handleInputFocus,name:i,placeholder:s,ref:function(t){e.elementReferences[-1]=t},type:"text",role:"textbox",required:u,value:N})),X,(0,f.createElement)("ul",{className:j+" "+F+" "+K,id:r+"__listbox",role:"listbox"},E.map(function(t,n){var o=-1===C?S===n:C===n,l=o&&null===O?" "+H+"--focused":"",i=n%2?" "+H+"--odd":"";return(0,f.createElement)("li",{"aria-selected":C===n,className:""+H+l+i,dangerouslySetInnerHTML:{__html:e.templateSuggestion(t)},id:r+"__option--"+n,key:n,onFocusOut:function(t){return e.handleOptionBlur(t,n)},onClick:function(t){return e.handleOptionClick(t,n)},onMouseDown:e.handleOptionMouseDown,onMouseEnter:function(t){return e.handleOptionMouseEnter(t,n)},onMouseOut:function(t){return e.handleOptionMouseOut(t,n)},ref:function(t){e.elementReferences[n]=t},role:"option",tabIndex:"-1"})}),B&&(0,f.createElement)("li",{className:H+" "+H+"--no-results"},c())))},t}(f.Component),p.defaultProps={autoselect:!1,cssNamespace:"autocomplete",defaultValue:"",displayMenu:"inline",minLength:0,name:"input-autocomplete",placeholder:"",onConfirm:function(){},confirmOnBlur:!0,showNoOptionsFound:!0,showAllValues:!1,required:!1,tNoResults:function(){return"No results found"},dropdownArrow:y.default},c);t.default=C},function(e,t,n){"use strict";function o(e,t){}function r(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){"function"!=typeof t&&null!==t||(e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t))}t.__esModule=!0,t.default=void 0;var i,s,u=n(0),a=(s=i=function(e){function t(){var n,l,i;o(this,t);for(var s=arguments.length,u=Array(s),a=0;a<s;a++)u[a]=arguments[a];return n=l=r(this,e.call.apply(e,[this].concat(u))),l.state={bump:!1},i=n,r(l,i)}return l(t,e),t.prototype.componentWillReceiveProps=function(e){e.queryLength!==this.props.queryLength&&this.setState(function(e){return{bump:!e.bump}})},t.prototype.render=function(){var e=this.props,t=e.length,n=e.queryLength,o=e.minQueryLength,r=e.selectedOption,l=e.selectedOptionIndex,i=e.tQueryTooShort,s=e.tNoResults,a=e.tSelectedOption,p=e.tResults,c=this.state.bump,d=n<o,f=0===t,h=r?a(r,t,l):"",m=null;return m=d?i(o):f?s():p(t,h),(0,u.createElement)("div",{"aria-atomic":"true","aria-live":"polite",role:"status",style:{border:"0",clip:"rect(0 0 0 0)",height:"1px",marginBottom:"-1px",marginRight:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}},m,(0,u.createElement)("span",null,c?",":",,"))},t}(u.Component),i.defaultProps={tQueryTooShort:function(e){return"Type in "+e+" or more characters for results."},tNoResults:function(){return"No search results."},tSelectedOption:function(e,t,n){return e+" ("+(n+1)+" of "+t+") is selected."},tResults:function(e,t){var n={result:1===e?"result":"results",is:1===e?"is":"are"};return e+" "+n.result+" "+n.is+" available. "+t}},s);t.default=a},function(e,t,n){"use strict";t.__esModule=!0;var o=n(0),r=function(e){var t=e.className;return(0,o.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:t,focusable:"false"},(0,o.createElement)("g",{stroke:"none",fill:"none","fill-rule":"evenodd"},(0,o.createElement)("polygon",{fill:"#000000",points:"0 0 22 0 11 17"})))};t.default=r}])});
