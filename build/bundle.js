var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let h;function p(t){h=t}function m(){const t=function(){if(!h)throw new Error("Function called outside component initialization");return h}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const b=[],y=[],v=[],w=[],_=Promise.resolve();let k=!1;function x(t){v.push(t)}const D=new Set;let E=0;function M(){const t=h;do{for(;E<b.length;){const t=b[E];E++,p(t),A(t.$$)}for(p(null),b.length=0,E=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];D.has(e)||(D.add(e),e())}v.length=0}while(b.length);for(;w.length;)w.pop()();k=!1,D.clear(),p(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const C=new Set;function F(t,e){t&&t.i&&(C.delete(t),t.i(e))}function T(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),undefined.c.push((()=>{C.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function S(t){t&&t.c()}function L(t,n,c,a){const{fragment:u,on_mount:s,on_destroy:i,after_update:l}=t.$$;u&&u.m(n,c),a||x((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(x)}function N(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,_.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,r,c,a,u,i,l,f=[-1]){const d=h;p(e);const g=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};l&&l(g.root);let $=!1;if(g.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&u(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),$&&O(e,t)),n})):[],g.update(),$=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();r.intro&&F(e.$$.fragment),L(e,r.target,r.anchor,r.customElement),M()}p(d)}class J{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(e){let n,r,c,h,p,m,b,y,v;return{c(){n=i("div"),r=i("span"),r.innerHTML='<img src="assets/images/arrow-left.svg" alt="button"/>',c=f(),h=i("h1"),p=l(e[0]),m=f(),b=i("span"),b.innerHTML='<img src="assets/images/arrow-right.svg" alt="button"/>',g(r,"class","button svelte-n27bk4"),g(h,"class","svelte-n27bk4"),g(b,"class","button svelte-n27bk4"),g(n,"class","date_nav svelte-n27bk4")},m(t,o){u(t,n,o),a(n,r),a(n,c),a(n,h),a(h,p),a(n,m),a(n,b),y||(v=[d(r,"click",e[1]),d(b,"click",e[2])],y=!0)},p(t,[e]){1&e&&$(p,t[0])},i:t,o:t,d(t){t&&s(n),y=!1,o(v)}}}function q(t,e,n){const o=m();let r,{date:c}=e;return t.$$set=t=>{"date"in t&&n(3,c=t.date)},t.$$.update=()=>{8&t.$$.dirty&&n(0,r=function(t){return`${["Sun","Mon","Tue","Wed","Thr","Fri","Sat"][t.getDay()]}, ${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}`}(c))},[r,function(){c.setDate(c.getDate()-1),n(3,c),o("change",{date:c})},function(){c.setDate(c.getDate()+1),n(3,c),o("change",{date:c})},c]}class H extends J{constructor(t){super(),j(this,t,q,P,c,{date:3})}}function Y(t,e,n){const o=t.slice();return o[3]=e[n],o}function z(t){let e,n,o,r,c,d,h,p=t[3].content+"";return{c(){e=i("li"),n=i("label"),o=i("input"),c=f(),d=l(p),h=f(),g(o,"type","checkbox"),o.checked=r=t[3].done},m(t,r){u(t,e,r),a(e,n),a(n,o),a(n,c),a(n,d),a(e,h)},p(t,e){1&e&&r!==(r=t[3].done)&&(o.checked=r),1&e&&p!==(p=t[3].content+"")&&$(d,p)},d(t){t&&s(e)}}}function B(e){let n,o=e[1].filter(e[2]),r=[];for(let t=0;t<o.length;t+=1)r[t]=z(Y(e,o,t));return{c(){n=i("ul");for(let t=0;t<r.length;t+=1)r[t].c();g(n,"class","svelte-138qaw1")},m(t,e){u(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,[e]){if(3&e){let c;for(o=t[1].filter(t[2]),c=0;c<o.length;c+=1){const a=Y(t,o,c);r[c]?r[c].p(a,e):(r[c]=z(a),r[c].c(),r[c].m(n,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},i:t,o:t,d(t){t&&s(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function R(t,e,n){let{date:o}=e;const r=[{content:"Fork",date:new Date(2022,3,27),done:!0},{content:"Clone",date:new Date(2022,3,27),done:!0},{content:"Commit",date:new Date(2022,3,28),done:!0},{content:"Push",date:new Date(2022,3,28),done:!1},{content:"PR",date:new Date(2022,3,28),done:!1}];return t.$$set=t=>{"date"in t&&n(0,o=t.date)},[o,r,t=>{return e=t.date,n=o,e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate();var e,n}]}class W extends J{constructor(t){super(),j(this,t,R,B,c,{date:0})}}function G(t){let e,n,o,r,c;return n=new H({props:{date:t[0]}}),n.$on("change",t[1]),r=new W({props:{date:t[0]}}),{c(){e=i("div"),S(n.$$.fragment),o=f(),S(r.$$.fragment),g(e,"class","app svelte-1b7od3w")},m(t,s){u(t,e,s),L(n,e,null),a(e,o),L(r,e,null),c=!0},p(t,[e]){const o={};1&e&&(o.date=t[0]),n.$set(o);const c={};1&e&&(c.date=t[0]),r.$set(c)},i(t){c||(F(n.$$.fragment,t),F(r.$$.fragment,t),c=!0)},o(t){T(n.$$.fragment,t),T(r.$$.fragment,t),c=!1},d(t){t&&s(e),N(n),N(r)}}}function I(t,e,n){let o=new Date;return[o,function(t){n(0,o=t.detail.date)}]}return new class extends J{constructor(t){super(),j(this,t,I,G,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map