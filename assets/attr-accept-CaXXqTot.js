var f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var d=function(e,t){if(e&&t){var a=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),l=o.replace(/\/.*$/,"");return a.some(function(u){var r=u.trim().toLowerCase();return r.charAt(0)==="."?n.toLowerCase().endsWith(r):r.endsWith("/*")?l===r.replace(/\/.*$/,""):o===r})}return!0};export{d as _,f as c,s as g};