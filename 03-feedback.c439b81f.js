function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,r,l,o,a,u,f=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,l=r;return i=r=void 0,f=t,o=e.apply(l,n)}function h(e){return f=e,a=setTimeout(j,t),c?b(e):o}function E(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=l}function j(){var e=v();if(E(e))return w(e);a=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,l-(e-f)):n}(e))}function w(e){return a=void 0,g&&i?b(e):(i=r=void 0,o)}function C(){var e=v(),n=E(e);if(i=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(j,t),b(u)}return void 0===a&&(a=setTimeout(j,t)),o}return t=y(t)||0,p(n)&&(c=!!n.leading,l=(s="maxWait"in n)?d(y(n.maxWait)||0,t):l,g="trailing"in n?!!n.trailing:g),C.cancel=function(){void 0!==a&&clearTimeout(a),f=0,i=u=r=a=void 0},C.flush=function(){return void 0===a?o:w(v())},C}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||o.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),h=b.firstElementChild,E=h.nextElementSibling,j=b.lastElementChild;let w={};!function(){try{let e=JSON.parse(localStorage.getItem("feedback-form-state"));null!==e&&(h.lastElementChild.value=e.email,E.lastElementChild.value=e.message)}catch(e){console.log("помилка поля вводу")}}(),b.addEventListener("input",e(t)((e=>{var t;e.target===h.lastElementChild?w.email=e.target.value:w.message=e.target.value,t=w,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),j.addEventListener("click",(e=>{e.preventDefault();let t={email:h.lastElementChild.value,message:E.lastElementChild.value};""!==h.lastElementChild.value&&""!==E.lastElementChild.value?(console.log(t),b.reset(),localStorage.clear()):alert("Не всі поля заповнені")}));
//# sourceMappingURL=03-feedback.c439b81f.js.map