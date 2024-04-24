import{r as a,a as q}from"./react-C1R9VIsi.js";import{R as J}from"./react-dom-oUAr-6g_.js";import{m as Q,D as B,a as W,R as Z,u as $,b as D,c as z,N as H,d as ee,e as te}from"./react-router-qlYjPv88.js";import{c as ne,b as ie,E as ae,s as N,i as M,d as F,e as V}from"./@remix-run-ETicesdp.js";/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},P.apply(this,arguments)}function K(t,n){if(t==null)return{};var e={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(e[i]=t[i]);return e}function re(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oe(t,n){return t.button===0&&(!n||n==="_self")&&!re(t)}const se=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],le=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ue="6";try{window.__reactRouterVersion=ue}catch{}function _e(t,n){return ne({basename:n==null?void 0:n.basename,future:P({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:ie({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||ce(),routes:t,mapRouteProperties:Q,window:n==null?void 0:n.window}).initialize()}function ce(){var t;let n=(t=window)==null?void 0:t.__staticRouterHydrationData;return n&&n.errors&&(n=P({},n,{errors:fe(n.errors)})),n}function fe(t){if(!t)return null;let n=Object.entries(t),e={};for(let[r,i]of n)if(i&&i.__type==="RouteErrorResponse")e[r]=new ae(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let s=new o(i.message);s.stack="",e[r]=s}catch{}}if(e[r]==null){let o=new Error(i.message);o.stack="",e[r]=o}}else e[r]=i;return e}const G=a.createContext({isTransitioning:!1}),de=a.createContext(new Map),he="startTransition",I=q[he],ve="flushSync",j=J[ve];function pe(t){I?I(t):t()}function U(t){j?j(t):t()}class me{constructor(){this.status="pending",this.promise=new Promise((n,e)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",n(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",e(r))}})}}function Pe(t){let{fallbackElement:n,router:e,future:r}=t,[i,o]=a.useState(e.state),[s,w]=a.useState(),[v,l]=a.useState({isTransitioning:!1}),[u,y]=a.useState(),[p,L]=a.useState(),[m,x]=a.useState(),R=a.useRef(new Map),{v7_startTransition:C}=r||{},d=a.useCallback(f=>{C?pe(f):f()},[C]),h=a.useCallback((f,S)=>{let{deletedFetchers:g,unstable_flushSync:_,unstable_viewTransitionOpts:T}=S;g.forEach(E=>R.current.delete(E)),f.fetchers.forEach((E,Y)=>{E.data!==void 0&&R.current.set(Y,E.data)});let X=e.window==null||typeof e.window.document.startViewTransition!="function";if(!T||X){_?U(()=>o(f)):d(()=>o(f));return}if(_){U(()=>{p&&(u&&u.resolve(),p.skipTransition()),l({isTransitioning:!0,flushSync:!0,currentLocation:T.currentLocation,nextLocation:T.nextLocation})});let E=e.window.document.startViewTransition(()=>{U(()=>o(f))});E.finished.finally(()=>{U(()=>{y(void 0),L(void 0),w(void 0),l({isTransitioning:!1})})}),U(()=>L(E));return}p?(u&&u.resolve(),p.skipTransition(),x({state:f,currentLocation:T.currentLocation,nextLocation:T.nextLocation})):(w(f),l({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}))},[e.window,p,u,R,d]);a.useLayoutEffect(()=>e.subscribe(h),[e,h]),a.useEffect(()=>{v.isTransitioning&&!v.flushSync&&y(new me)},[v]),a.useEffect(()=>{if(u&&s&&e.window){let f=s,S=u.promise,g=e.window.document.startViewTransition(async()=>{d(()=>o(f)),await S});g.finished.finally(()=>{y(void 0),L(void 0),w(void 0),l({isTransitioning:!1})}),L(g)}},[d,s,u,e.window]),a.useEffect(()=>{u&&s&&i.location.key===s.location.key&&u.resolve()},[u,p,i.location,s]),a.useEffect(()=>{!v.isTransitioning&&m&&(w(m.state),l({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),x(void 0))},[v.isTransitioning,m]),a.useEffect(()=>{},[]);let c=a.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:f=>e.navigate(f),push:(f,S,g)=>e.navigate(f,{state:S,preventScrollReset:g==null?void 0:g.preventScrollReset}),replace:(f,S,g)=>e.navigate(f,{replace:!0,state:S,preventScrollReset:g==null?void 0:g.preventScrollReset})}),[e]),b=e.basename||"/",k=a.useMemo(()=>({router:e,navigator:c,static:!1,basename:b}),[e,c,b]);return a.createElement(a.Fragment,null,a.createElement(B.Provider,{value:k},a.createElement(W.Provider,{value:i},a.createElement(de.Provider,{value:R.current},a.createElement(G.Provider,{value:v},a.createElement(Z,{basename:b,location:i.location,navigationType:i.historyAction,navigator:c,future:{v7_relativeSplatPath:e.future.v7_relativeSplatPath}},i.initialized||e.future.v7_partialHydration?a.createElement(we,{routes:e.routes,future:e.future,state:i}):n))))),null)}function we(t){let{routes:n,future:e,state:r}=t;return $(n,void 0,r,e)}const ge=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ye=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=a.forwardRef(function(n,e){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:w,target:v,to:l,preventScrollReset:u,unstable_viewTransition:y}=n,p=K(n,se),{basename:L}=a.useContext(H),m,x=!1;if(typeof l=="string"&&ye.test(l)&&(m=l,ge))try{let h=new URL(window.location.href),c=l.startsWith("//")?new URL(h.protocol+l):new URL(l),b=N(c.pathname,L);c.origin===h.origin&&b!=null?l=b+c.search+c.hash:x=!0}catch{}let R=ee(l,{relative:i}),C=Te(l,{replace:s,state:w,target:v,preventScrollReset:u,relative:i,unstable_viewTransition:y});function d(h){r&&r(h),h.defaultPrevented||C(h)}return a.createElement("a",P({},p,{href:m||R,onClick:x||o?r:d,ref:e,target:v}))}),ke=a.forwardRef(function(n,e){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:w,to:v,unstable_viewTransition:l,children:u}=n,y=K(n,le),p=D(v,{relative:y.relative}),L=z(),m=a.useContext(W),{navigator:x,basename:R}=a.useContext(H),C=m!=null&&Le(p)&&l===!0,d=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,h=L.pathname,c=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(h=h.toLowerCase(),c=c?c.toLowerCase():null,d=d.toLowerCase()),c&&R&&(c=N(c,R)||c);const b=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let k=h===d||!s&&h.startsWith(d)&&h.charAt(b)==="/",f=c!=null&&(c===d||!s&&c.startsWith(d)&&c.charAt(d.length)==="/"),S={isActive:k,isPending:f,isTransitioning:C},g=k?r:void 0,_;typeof o=="function"?_=o(S):_=[o,k?"active":null,f?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let T=typeof w=="function"?w(S):w;return a.createElement(Se,P({},y,{"aria-current":g,className:_,ref:e,style:T,to:v,unstable_viewTransition:l}),typeof u=="function"?u(S):u)});var O;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(O||(O={}));var A;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(A||(A={}));function Re(t){let n=a.useContext(B);return n||M(!1),n}function Te(t,n){let{target:e,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:w}=n===void 0?{}:n,v=te(),l=z(),u=D(t,{relative:s});return a.useCallback(y=>{if(oe(y,e)){y.preventDefault();let p=r!==void 0?r:V(l)===V(u);v(t,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:w})}},[l,v,u,r,i,e,t,o,s,w])}function Le(t,n){n===void 0&&(n={});let e=a.useContext(G);e==null&&M(!1);let{basename:r}=Re(O.useViewTransitionState),i=D(t,{relative:n.relative});if(!e.isTransitioning)return!1;let o=N(e.currentLocation.pathname,r)||e.currentLocation.pathname,s=N(e.nextLocation.pathname,r)||e.nextLocation.pathname;return F(i.pathname,s)!=null||F(i.pathname,o)!=null}export{ke as N,Pe as R,_e as c};
