(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{5448:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}}),t(2784);var r=t(2322);function i(e){let{children:n,title:t}=e;return(0,r.jsxs)("div",{className:"p3",children:[(0,r.jsx)("h1",{className:"main",children:t}),n]})}},9039:function(e,n,t){"use strict";var r=t(3908),i=t(381),c=t.n(i);t(2784);var s=t(2322);n.Z=function(e){let{icon:n,name:t,highlightPattern:i=null}=e;return(0,s.jsxs)("div",{className:"item",tabIndex:0,onClick:()=>{c()(t),r.Z.success("Copied '".concat(t,"' to clipboard"),{position:"bottom-center"})},children:[(0,s.jsx)("div",{className:"icon h2",children:"function"==typeof n&&n()}),(0,s.jsx)("div",{className:"name",children:i?t.split(i).map((e,n)=>e.match(i)?(0,s.jsx)("b",{children:e},n):e):t})]},t)}},4955:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(5448),i=t(786);t(2784);var c=t(9426),s=t(3908),a=t(381),d=t.n(a),o=t(6937),l=t(8990);function u(e){return(0,l.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z"}}]})(e)}var h=t(2322);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach(function(n){(0,c.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function x(e){let{code:n,language:t}=e,r=()=>{d()(n),s.Z.success("Copied to clipboard",{position:"bottom-center"})};return(0,h.jsx)(o.y$,{theme:o.np.nightOwl,code:n.trim(),language:t,children:e=>{let{className:n,style:t,tokens:i,getLineProps:c,getTokenProps:s}=e;return(0,h.jsxs)("pre",{className:"".concat(n," code"),style:t,children:[(0,h.jsx)("a",{onClick:r,className:"prism-code--copy",children:(0,h.jsx)(u,{})}),i.map((e,n)=>(0,h.jsx)("div",b(b({},c({line:e,key:n})),{},{children:e.map((e,n)=>(0,h.jsx)("span",b({},s({token:e,key:n})),n))}),n))]})}})}function f(e){let{iconId:n}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Import"}),(0,h.jsx)(x,{language:"jsx",code:'import { IconName } from "@vertisanpro/react-icons/'.concat(n,'";')})]})}function m(e){let{icon:n}=e,{licenseUrl:t,license:r,projectUrl:i,id:c}=n;return(0,h.jsx)("table",{className:"iconset--info",children:(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"License"}),(0,h.jsx)("td",{children:(0,h.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:r})})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Project"}),(0,h.jsx)("td",{children:(0,h.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:i})})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Folder"}),(0,h.jsx)("td",{children:(0,h.jsx)("a",{children:c})})]})]})})}var p=t(9039),v=t(164),g=t(9475),O=t(1139);function y(){return(0,h.jsx)("div",{className:"icons",children:Array(100).fill(null).map((e,n)=>(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)(O.Z,{height:"60px"}),(0,h.jsx)("div",{className:"name",children:(0,h.jsx)(O.Z,{height:"15px"})})]},n))})}function N(e){let{icon:n}=e,t=v.ZP.lib(()=>(0,g.w)(n.id));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Icons"}),(0,h.jsx)(t,{fallback:(0,h.jsx)(y,{}),children:e=>{let{default:n}=e;return(0,h.jsx)("div",{className:"icons",children:Object.keys(n).map(e=>(0,h.jsx)(p.Z,{icon:n[e],name:e},e))})}})]})}function w(e){let{iconId:n}=e,t=(0,i.a)(n);return(0,h.jsx)(h.Fragment,{children:null!=t&&t.name?(0,h.jsxs)(r.Z,{title:t.name,children:[(0,h.jsx)(m,{icon:t}),(0,h.jsx)(f,{iconId:t.id}),(0,h.jsx)(N,{icon:t})]}):(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"p3",children:[(0,h.jsx)("h1",{className:"main",children:"Error 404"}),"Icon does not exist, ID: ",n]})})})}var _=t(5632);function k(){let e=(0,_.useRouter)(),{name:n}=e.query;return(0,h.jsx)(h.Fragment,{children:n&&(0,h.jsx)(w,{iconId:n})})}},9475:function(e,n,t){"use strict";t.d(n,{w:function(){return i}});let r=function(e){switch(e){case"ci":return t.e(364).then(t.t.bind(t,1364,19));case"fa":return t.e(9).then(t.t.bind(t,9,19));case"fa6":return t.e(289).then(t.t.bind(t,6289,19));case"io":return t.e(649).then(t.t.bind(t,5649,19));case"io5":return t.e(908).then(t.t.bind(t,4908,19));case"md":return t.e(322).then(t.t.bind(t,3322,19));case"ti":return t.e(555).then(t.t.bind(t,7555,19));case"go":return t.e(409).then(t.t.bind(t,5409,19));case"fi":return t.e(259).then(t.t.bind(t,3259,19));case"lu":return t.e(295).then(t.t.bind(t,1295,19));case"gi":return t.e(855).then(t.t.bind(t,4855,19));case"wi":return t.e(369).then(t.t.bind(t,6369,19));case"di":return t.e(239).then(t.t.bind(t,239,19));case"ai":return t.e(697).then(t.t.bind(t,6697,19));case"bs":return t.e(418).then(t.t.bind(t,3418,19));case"ri":return t.e(177).then(t.t.bind(t,177,19));case"fc":return t.e(54).then(t.t.bind(t,3054,19));case"gr":return t.e(388).then(t.t.bind(t,9388,19));case"hi":return t.e(308).then(t.t.bind(t,1308,19));case"hi2":return t.e(324).then(t.t.bind(t,2324,19));case"si":return t.e(606).then(t.t.bind(t,5606,19));case"sl":return t.e(27).then(t.t.bind(t,6027,19));case"im":return t.e(907).then(t.t.bind(t,3907,19));case"bi":return t.e(495).then(t.t.bind(t,6495,19));case"cg":return t.e(768).then(t.t.bind(t,4768,19));case"vsc":return t.e(305).then(t.t.bind(t,3305,19));case"tb":return t.e(15).then(t.t.bind(t,6015,19));case"tfi":return t.e(731).then(t.t.bind(t,1731,19));case"rx":return t.e(149).then(t.t.bind(t,3149,19));case"pi":return t.e(459).then(t.t.bind(t,5459,19));case"lia":return t.e(328).then(t.t.bind(t,328,19))}};function i(e){return r(e)}},3025:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/icons",function(){return t(4955)}])}},function(e){e.O(0,[869,937,774,888,179],function(){return e(e.s=3025)}),_N_E=e.O()}]);