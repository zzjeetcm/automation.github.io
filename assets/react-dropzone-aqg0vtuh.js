import{r as c,R as Ze}from"./react-C1R9VIsi.js";import{P as l}from"./prop-types-BihR8TvY.js";import{f as er}from"./file-selector-DMfHbpIn.js";import{_ as rr}from"./attr-accept-CaXXqTot.js";function Re(e){return or(e)||tr(e)||$e(e)||nr()}function nr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function or(e){if(Array.isArray(e))return se(e)}function Te(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Ie(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Te(Object(n),!0).forEach(function(o){Ke(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ke(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function z(e,r){return ur(e)||ar(e,r)||$e(e,r)||ir()}function ir(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){if(e){if(typeof e=="string")return se(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,r)}}function se(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=e[n];return o}function ar(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],a=!0,u=!1,s,p;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(o.push(s.value),!(r&&o.length===r));a=!0);}catch(m){u=!0,p=m}finally{try{!a&&n.return!=null&&n.return()}finally{if(u)throw p}}return o}}function ur(e){if(Array.isArray(e))return e}var cr="file-invalid-type",lr="file-too-large",sr="file-too-small",fr="too-many-files",pr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var n=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:cr,message:"File type must be ".concat(n)}},ke=function(r){return{code:lr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},xe=function(r){return{code:sr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},dr={code:fr,message:"Too many files"};function He(e,r){var n=e.type==="application/x-moz-file"||rr(e,r);return[n,n?null:pr(r)]}function Be(e,r,n){if(E(e.size))if(E(r)&&E(n)){if(e.size>n)return[!1,ke(n)];if(e.size<r)return[!1,xe(r)]}else{if(E(r)&&e.size<r)return[!1,xe(r)];if(E(n)&&e.size>n)return[!1,ke(n)]}return[!0,null]}function E(e){return e!=null}function gr(e){var r=e.files,n=e.accept,o=e.minSize,a=e.maxSize,u=e.multiple,s=e.maxFiles,p=e.validator;return!u&&r.length>1||u&&s>=1&&r.length>s?!1:r.every(function(m){var j=He(m,n),S=z(j,1),P=S[0],R=Be(m,o,a),T=z(R,1),I=T[0],k=p?p(m):null;return P&&I&&!k})}function q(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function Y(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Me(e){e.preventDefault()}function yr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function mr(e){return e.indexOf("Edge/")!==-1}function br(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return yr(e)||mr(e)}function h(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(o){for(var a=arguments.length,u=new Array(a>1?a-1:0),s=1;s<a;s++)u[s-1]=arguments[s];return r.some(function(p){return!q(o)&&p&&p.apply(void 0,[o].concat(u)),q(o)})}}function vr(){return"showOpenFilePicker"in window}function Dr(e){if(E(e)){var r=Object.entries(e).filter(function(n){var o=z(n,2),a=o[0],u=o[1],s=!0;return We(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),s=!1),(!Array.isArray(u)||!u.every(Ne))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),s=!1),s}).reduce(function(n,o){var a=z(o,2),u=a[0],s=a[1];return Ie(Ie({},n),{},Ke({},u,s))},{});return[{description:"Files",accept:r}]}return e}function hr(e){if(E(e))return Object.entries(e).reduce(function(r,n){var o=z(n,2),a=o[0],u=o[1];return[].concat(Re(r),[a],Re(u))},[]).filter(function(r){return We(r)||Ne(r)}).join(",")}function Ar(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Or(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function We(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Ne(e){return/^.*\.[\w]+$/.test(e)}var Er=["children"],Fr=["open"],_r=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],wr=["refKey","onChange","onClick"];function Cr(e){return Pr(e)||Sr(e)||Ue(e)||jr()}function jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pr(e){if(Array.isArray(e))return fe(e)}function le(e,r){return Ir(e)||Tr(e,r)||Ue(e,r)||Rr()}function Rr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,r){if(e){if(typeof e=="string")return fe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fe(e,r)}}function fe(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=e[n];return o}function Tr(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],a=!0,u=!1,s,p;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(o.push(s.value),!(r&&o.length===r));a=!0);}catch(m){u=!0,p=m}finally{try{!a&&n.return!=null&&n.return()}finally{if(u)throw p}}return o}}function Ir(e){if(Array.isArray(e))return e}function Le(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function f(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Le(Object(n),!0).forEach(function(o){pe(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function pe(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function G(e,r){if(e==null)return{};var n=kr(e,r),o,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)o=u[a],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function kr(e,r){if(e==null)return{};var n={},o=Object.keys(e),a,u;for(u=0;u<o.length;u++)a=o[u],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var ge=c.forwardRef(function(e,r){var n=e.children,o=G(e,Er),a=xr(o),u=a.open,s=G(a,Fr);return c.useImperativeHandle(r,function(){return{open:u}},[u]),Ze.createElement(c.Fragment,null,n(f(f({},s),{},{open:u})))});ge.displayName="Dropzone";var Ye={disabled:!1,getFilesFromEvent:er,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ge.defaultProps=Ye;ge.propTypes={children:l.func,accept:l.objectOf(l.arrayOf(l.string)),multiple:l.bool,preventDropOnDocument:l.bool,noClick:l.bool,noKeyboard:l.bool,noDrag:l.bool,noDragEventsBubbling:l.bool,minSize:l.number,maxSize:l.number,maxFiles:l.number,disabled:l.bool,getFilesFromEvent:l.func,onFileDialogCancel:l.func,onFileDialogOpen:l.func,useFsAccessApi:l.bool,autoFocus:l.bool,onDragEnter:l.func,onDragLeave:l.func,onDragOver:l.func,onDrop:l.func,onDropAccepted:l.func,onDropRejected:l.func,onError:l.func,validator:l.func};var de={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function xr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=f(f({},Ye),e),n=r.accept,o=r.disabled,a=r.getFilesFromEvent,u=r.maxSize,s=r.minSize,p=r.multiple,m=r.maxFiles,j=r.onDragEnter,S=r.onDragLeave,P=r.onDragOver,R=r.onDrop,T=r.onDropAccepted,I=r.onDropRejected,k=r.onFileDialogCancel,J=r.onFileDialogOpen,ye=r.useFsAccessApi,me=r.autoFocus,V=r.preventDropOnDocument,be=r.noClick,Q=r.noKeyboard,ve=r.noDrag,A=r.noDragEventsBubbling,X=r.onError,x=r.validator,M=c.useMemo(function(){return hr(n)},[n]),De=c.useMemo(function(){return Dr(n)},[n]),Z=c.useMemo(function(){return typeof J=="function"?J:ze},[J]),K=c.useMemo(function(){return typeof k=="function"?k:ze},[k]),y=c.useRef(null),D=c.useRef(null),qe=c.useReducer(Mr,de),he=le(qe,2),ee=he[0],b=he[1],Ge=ee.isFocused,Ae=ee.isFileDialogActive,$=c.useRef(typeof window<"u"&&window.isSecureContext&&ye&&vr()),Oe=function(){!$.current&&Ae&&setTimeout(function(){if(D.current){var i=D.current.files;i.length||(b({type:"closeDialog"}),K())}},300)};c.useEffect(function(){return window.addEventListener("focus",Oe,!1),function(){window.removeEventListener("focus",Oe,!1)}},[D,Ae,K,$]);var F=c.useRef([]),Ee=function(i){y.current&&y.current.contains(i.target)||(i.preventDefault(),F.current=[])};c.useEffect(function(){return V&&(document.addEventListener("dragover",Me,!1),document.addEventListener("drop",Ee,!1)),function(){V&&(document.removeEventListener("dragover",Me),document.removeEventListener("drop",Ee))}},[y,V]),c.useEffect(function(){return!o&&me&&y.current&&y.current.focus(),function(){}},[y,me,o]);var O=c.useCallback(function(t){X?X(t):console.error(t)},[X]),Fe=c.useCallback(function(t){t.preventDefault(),t.persist(),N(t),F.current=[].concat(Cr(F.current),[t.target]),Y(t)&&Promise.resolve(a(t)).then(function(i){if(!(q(t)&&!A)){var d=i.length,g=d>0&&gr({files:i,accept:M,minSize:s,maxSize:u,multiple:p,maxFiles:m,validator:x}),v=d>0&&!g;b({isDragAccept:g,isDragReject:v,isDragActive:!0,type:"setDraggedFiles"}),j&&j(t)}}).catch(function(i){return O(i)})},[a,j,O,A,M,s,u,p,m,x]),_e=c.useCallback(function(t){t.preventDefault(),t.persist(),N(t);var i=Y(t);if(i&&t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return i&&P&&P(t),!1},[P,A]),we=c.useCallback(function(t){t.preventDefault(),t.persist(),N(t);var i=F.current.filter(function(g){return y.current&&y.current.contains(g)}),d=i.indexOf(t.target);d!==-1&&i.splice(d,1),F.current=i,!(i.length>0)&&(b({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Y(t)&&S&&S(t))},[y,S,A]),H=c.useCallback(function(t,i){var d=[],g=[];t.forEach(function(v){var L=He(v,M),C=le(L,2),ne=C[0],te=C[1],oe=Be(v,s,u),U=le(oe,2),ie=U[0],ae=U[1],ue=x?x(v):null;if(ne&&ie&&!ue)d.push(v);else{var ce=[te,ae];ue&&(ce=ce.concat(ue)),g.push({file:v,errors:ce.filter(function(Xe){return Xe})})}}),(!p&&d.length>1||p&&m>=1&&d.length>m)&&(d.forEach(function(v){g.push({file:v,errors:[dr]})}),d.splice(0)),b({acceptedFiles:d,fileRejections:g,type:"setFiles"}),R&&R(d,g,i),g.length>0&&I&&I(g,i),d.length>0&&T&&T(d,i)},[b,p,M,s,u,m,R,T,I,x]),B=c.useCallback(function(t){t.preventDefault(),t.persist(),N(t),F.current=[],Y(t)&&Promise.resolve(a(t)).then(function(i){q(t)&&!A||H(i,t)}).catch(function(i){return O(i)}),b({type:"reset"})},[a,H,O,A]),_=c.useCallback(function(){if($.current){b({type:"openDialog"}),Z();var t={multiple:p,types:De};window.showOpenFilePicker(t).then(function(i){return a(i)}).then(function(i){H(i,null),b({type:"closeDialog"})}).catch(function(i){Ar(i)?(K(i),b({type:"closeDialog"})):Or(i)?($.current=!1,D.current?(D.current.value=null,D.current.click()):O(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):O(i)});return}D.current&&(b({type:"openDialog"}),Z(),D.current.value=null,D.current.click())},[b,Z,K,ye,H,O,De,p]),Ce=c.useCallback(function(t){!y.current||!y.current.isEqualNode(t.target)||(t.key===" "||t.key==="Enter"||t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),_())},[y,_]),je=c.useCallback(function(){b({type:"focus"})},[]),Se=c.useCallback(function(){b({type:"blur"})},[]),Pe=c.useCallback(function(){be||(br()?setTimeout(_,0):_())},[be,_]),w=function(i){return o?null:i},re=function(i){return Q?null:w(i)},W=function(i){return ve?null:w(i)},N=function(i){A&&i.stopPropagation()},Je=c.useMemo(function(){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=t.refKey,d=i===void 0?"ref":i,g=t.role,v=t.onKeyDown,L=t.onFocus,C=t.onBlur,ne=t.onClick,te=t.onDragEnter,oe=t.onDragOver,U=t.onDragLeave,ie=t.onDrop,ae=G(t,_r);return f(f(pe({onKeyDown:re(h(v,Ce)),onFocus:re(h(L,je)),onBlur:re(h(C,Se)),onClick:w(h(ne,Pe)),onDragEnter:W(h(te,Fe)),onDragOver:W(h(oe,_e)),onDragLeave:W(h(U,we)),onDrop:W(h(ie,B)),role:typeof g=="string"&&g!==""?g:"presentation"},d,y),!o&&!Q?{tabIndex:0}:{}),ae)}},[y,Ce,je,Se,Pe,Fe,_e,we,B,Q,ve,o]),Ve=c.useCallback(function(t){t.stopPropagation()},[]),Qe=c.useMemo(function(){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=t.refKey,d=i===void 0?"ref":i,g=t.onChange,v=t.onClick,L=G(t,wr),C=pe({accept:M,multiple:p,type:"file",style:{display:"none"},onChange:w(h(g,B)),onClick:w(h(v,Ve)),tabIndex:-1},d,D);return f(f({},C),L)}},[D,n,p,B,o]);return f(f({},ee),{},{isFocused:Ge&&!o,getRootProps:Je,getInputProps:Qe,rootRef:y,inputRef:D,open:w(_)})}function Mr(e,r){switch(r.type){case"focus":return f(f({},e),{},{isFocused:!0});case"blur":return f(f({},e),{},{isFocused:!1});case"openDialog":return f(f({},de),{},{isFileDialogActive:!0});case"closeDialog":return f(f({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return f(f({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return f(f({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return f({},de);default:return e}}function ze(){}export{xr as u};