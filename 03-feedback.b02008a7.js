!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(w,t),d?p(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function w(){var e=g();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function O(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function T(){var e=g(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(w,t),p(c)}return void 0===f&&(f=setTimeout(w,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:O(g())},T}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||f.test(e)?c(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),h=document.querySelector("[name=email]"),w=document.querySelector("[name=message]");j.addEventListener("input",n((function(e){e.preventDefault();var t={email:h.value,message:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));var O=localStorage.getItem("feedback-form-state");try{var T=JSON.parse(O);h.value=T.email,w.value=T.message}catch(e){console.warn("Еще нет значений в форме!")}j.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),j.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.b02008a7.js.map