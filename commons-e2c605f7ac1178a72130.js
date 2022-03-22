/*! For license information please see commons-e2c605f7ac1178a72130.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby=self.webpackChunkgatsby||[]).push([[351],{3090:function(e,r){var t,n=function(e){return e},o=(t=n,{configure:function(e){t=e},generate:function(e){return t(e)},reset:function(){t=n}});r.Z=o},9408:function(e,r,t){function n(e,r,t){var n={};return Object.keys(e).forEach((function(o){n[o]=e[o].reduce((function(e,n){return n&&(t&&t[n]&&e.push(t[n]),e.push(r(n))),e}),[]).join(" ")})),n}t.d(r,{Z:function(){return n}})},8416:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(3090),o={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function i(e,r){return o[r]||"".concat(n.Z.generate(e),"-").concat(r)}},2194:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(8416);function o(e,r){var t={};return r.forEach((function(r){t[r]=(0,n.Z)(e,r)})),t}},9211:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(7462),o=t(3366),i=t(7294),a=t(5505),s=t(2048),u=t(2037),l=t(8297),p=t(3182),c=t(5893),d=["className","component"];var f=t(3090),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.defaultTheme,t=e.defaultClassName,f=void 0===t?"MuiBox-root":t,m=e.generateClassName,h=e.styleFunctionSx,g=void 0===h?u.Z:h,v=(0,s.ZP)("div")(g),y=i.forwardRef((function(e,t){var i=(0,p.Z)(r),s=(0,l.Z)(e),u=s.className,h=s.component,g=void 0===h?"div":h,y=(0,o.Z)(s,d);return(0,c.jsx)(v,(0,n.Z)({as:g,ref:t,className:(0,a.Z)(u,m?m(f):f),theme:i},y))}));return y}({defaultTheme:(0,t(9480).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate}),h=m},9308:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(3366),o=t(7462),i=t(7294),a=t(5505),s=t(8297),u=t(9408),l=t(8348),p=t(2058),c=t(9240),d=t(8416);function f(e){return(0,d.Z)("MuiTypography",e)}(0,t(2194).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=t(5893),h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.variant&&r[t.variant],"inherit"!==t.align&&r["align".concat((0,c.Z)(t.align))],t.noWrap&&r.noWrap,t.gutterBottom&&r.gutterBottom,t.paragraph&&r.paragraph]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)({margin:0},t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=i.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiTypography"}),i=function(e){return y[e]||e}(t.color),l=(0,s.Z)((0,o.Z)({},t,{color:i})),d=l.align,Z=void 0===d?"inherit":d,b=l.className,k=l.component,x=l.gutterBottom,w=void 0!==x&&x,P=l.noWrap,S=void 0!==P&&P,C=l.paragraph,A=void 0!==C&&C,T=l.variant,R=void 0===T?"body1":T,M=l.variantMapping,O=void 0===M?v:M,_=(0,n.Z)(l,h),E=(0,o.Z)({},l,{align:Z,color:i,className:b,component:k,gutterBottom:w,noWrap:S,paragraph:A,variant:R,variantMapping:O}),N=k||(A?"p":O[R]||v[R])||"span",j=function(e){var r=e.align,t=e.gutterBottom,n=e.noWrap,o=e.paragraph,i=e.variant,a=e.classes,s={root:["root",i,"inherit"!==e.align&&"align".concat((0,c.Z)(r)),t&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,u.Z)(s,f,a)}(E);return(0,m.jsx)(g,(0,o.Z)({as:N,ref:r,ownerState:E,className:(0,a.Z)(j.root,b)},_))}))},8348:function(e,r,t){t.d(r,{ZP:function(){return A},FO:function(){return P},Dz:function(){return S}});var n=t(2982),o=t(885),i=t(7462),a=t(3366),s=t(2048),u=t(3409),l=t(6550),p=["variant"];function c(e){return 0===e.length}function d(e){var r=e.variant,t=(0,a.Z)(e,p),n=r||"";return Object.keys(t).sort().forEach((function(r){n+="color"===r?c(n)?e[r]:(0,l.Z)(e[r]):"".concat(c(n)?r:(0,l.Z)(r)).concat((0,l.Z)(e[r].toString()))})),n}var f=t(2037),m=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],h=["theme"],g=["theme"];function v(e){return 0===Object.keys(e).length}var y=function(e,r){return r.components&&r.components[e]&&r.components[e].styleOverrides?r.components[e].styleOverrides:null},Z=function(e,r){var t=[];r&&r.components&&r.components[e]&&r.components[e].variants&&(t=r.components[e].variants);var n={};return t.forEach((function(e){var r=d(e.props);n[r]=e.style})),n},b=function(e,r,t,n){var o,i,a=e.ownerState,s=void 0===a?{}:a,u=[],l=null==t||null==(o=t.components)||null==(i=o[n])?void 0:i.variants;return l&&l.forEach((function(t){var n=!0;Object.keys(t.props).forEach((function(r){s[r]!==t.props[r]&&e[r]!==t.props[r]&&(n=!1)})),n&&u.push(r[d(t.props)])})),u};function k(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}var x=(0,u.Z)();var w=t(9552),P=function(e){return k(e)&&"classes"!==e},S=k,C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.defaultTheme,t=void 0===r?x:r,u=e.rootShouldForwardProp,l=void 0===u?k:u,p=e.slotShouldForwardProp,c=void 0===p?k:p,d=e.styleFunctionSx,w=void 0===d?f.Z:d;return function(e){var r,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=u.name,d=u.slot,f=u.skipVariantsResolver,x=u.skipSx,P=u.overridesResolver,S=(0,a.Z)(u,m),C=void 0!==f?f:d&&"Root"!==d||!1,A=x||!1;var T=k;"Root"===d?T=l:d&&(T=c);var R=(0,s.ZP)(e,(0,i.Z)({shouldForwardProp:T,label:r},S)),M=function(e){for(var r=arguments.length,s=new Array(r>1?r-1:0),u=1;u<r;u++)s[u-1]=arguments[u];var l=s?s.map((function(e){return"function"==typeof e&&e.__emotion_real!==e?function(r){var n=r.theme,o=(0,a.Z)(r,h);return e((0,i.Z)({theme:v(n)?t:n},o))}:e})):[],c=e;p&&P&&l.push((function(e){var r=v(e.theme)?t:e.theme,n=y(p,r);if(n){var i={};return Object.entries(n).forEach((function(r){var t=(0,o.Z)(r,2),n=t[0],a=t[1];i[n]="function"==typeof a?a(e):a})),P(e,i)}return null})),p&&!C&&l.push((function(e){var r=v(e.theme)?t:e.theme;return b(e,Z(p,r),r,p)})),A||l.push((function(e){var r=v(e.theme)?t:e.theme;return w((0,i.Z)({},e,{theme:r}))}));var d=l.length-s.length;if(Array.isArray(e)&&d>0){var f=new Array(d).fill("");(c=[].concat((0,n.Z)(e),(0,n.Z)(f))).raw=[].concat((0,n.Z)(e.raw),(0,n.Z)(f))}else"function"==typeof e&&e.__emotion_real!==e&&(c=function(r){var n=r.theme,o=(0,a.Z)(r,g);return e((0,i.Z)({theme:v(n)?t:n},o))});var m=R.apply(void 0,[c].concat((0,n.Z)(l)));return m};return R.withConfig&&(M.withConfig=R.withConfig),M}}({defaultTheme:w.Z,rootShouldForwardProp:P}),A=C},9240:function(e,r,t){var n=t(6550);r.Z=n.Z},5973:function(e,r,t){var n=t(8127);r.Z=n.Z},2048:function(e,r,t){t.d(r,{ZP:function(){return k}});t(7154);var n=t(7294),o=t.t(n,2),i=t(7462),a=t(7548),s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,a.Z)((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=t(4043),p=t(4660),c=t(4418),d=u,f=function(e){return"theme"!==e},m=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?d:f},h=function(e,r,t){var n;if(r){var o=r.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(r){return e.__emotion_forwardProp(r)&&o(r)}:o}return"function"!=typeof n&&t&&(n=e.__emotion_forwardProp),n},g=o.useInsertionEffect?o.useInsertionEffect:function(e){e()};var v=function(e){var r=e.cache,t=e.serialized,n=e.isStringTag;(0,p.hC)(r,t,n);g((function(){return(0,p.My)(r,t,n)}));return null},y=function e(r,t){var o,a,s=r.__emotion_real===r,u=s&&r.__emotion_base||r;void 0!==t&&(o=t.label,a=t.target);var d=h(r,t,s),f=d||m(u),g=!f("as");return function(){var y=arguments,Z=s&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==o&&Z.push("label:"+o+";"),null==y[0]||void 0===y[0].raw)Z.push.apply(Z,y);else{0,Z.push(y[0][0]);for(var b=y.length,k=1;k<b;k++)Z.push(y[k],y[0][k])}var x=(0,l.w)((function(e,r,t){var o=g&&e.as||u,i="",s=[],h=e;if(null==e.theme){for(var y in h={},e)h[y]=e[y];h.theme=(0,n.useContext)(l.T)}"string"==typeof e.className?i=(0,p.fp)(r.registered,s,e.className):null!=e.className&&(i=e.className+" ");var b=(0,c.O)(Z.concat(s),r.registered,h);i+=r.key+"-"+b.name,void 0!==a&&(i+=" "+a);var k=g&&void 0===d?m(o):f,x={};for(var w in e)g&&"as"===w||k(w)&&(x[w]=e[w]);return x.className=i,x.ref=t,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(v,{cache:r,serialized:b,isStringTag:"string"==typeof o}),(0,n.createElement)(o,x))}));return x.displayName=void 0!==o?o:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",x.defaultProps=r.defaultProps,x.__emotion_real=x,x.__emotion_base=u,x.__emotion_styles=Z,x.__emotion_forwardProp=d,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(r,n){return e(r,(0,i.Z)({},t,n,{shouldForwardProp:h(x,n,!0)})).apply(void 0,Z)},x}},Z=y.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Z[e]=Z(e)}));var b=Z;function k(e,r){return b(e,r)}},9665:function(e,r,t){t.d(r,{Gc:function(){return X},G$:function(){return U}});var n=t(5535),o=t(4106);var i=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=r.reduce((function(e,r){return r.filterProps.forEach((function(t){e[t]=r})),e}),{}),i=function(e){return Object.keys(e).reduce((function(r,t){return n[t]?(0,o.Z)(r,n[t](e)):r}),{})};return i.propTypes={},i.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),i},a=t(5332),s=t(2692);function u(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var l=(0,n.Z)({prop:"border",themeKey:"borders",transform:u}),p=(0,n.Z)({prop:"borderTop",themeKey:"borders",transform:u}),c=(0,n.Z)({prop:"borderRight",themeKey:"borders",transform:u}),d=(0,n.Z)({prop:"borderBottom",themeKey:"borders",transform:u}),f=(0,n.Z)({prop:"borderLeft",themeKey:"borders",transform:u}),m=(0,n.Z)({prop:"borderColor",themeKey:"palette"}),h=(0,n.Z)({prop:"borderTopColor",themeKey:"palette"}),g=(0,n.Z)({prop:"borderRightColor",themeKey:"palette"}),v=(0,n.Z)({prop:"borderBottomColor",themeKey:"palette"}),y=(0,n.Z)({prop:"borderLeftColor",themeKey:"palette"}),Z=function(e){if(void 0!==e.borderRadius&&null!==e.borderRadius){var r=(0,a.eI)(e.theme,"shape.borderRadius",4,"borderRadius");return(0,s.k9)(e,e.borderRadius,(function(e){return{borderRadius:(0,a.NA)(r,e)}}))}return null};Z.propTypes={},Z.filterProps=["borderRadius"];var b=i(l,p,c,d,f,m,h,g,v,y,Z),k=i((0,n.Z)({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),(0,n.Z)({prop:"display"}),(0,n.Z)({prop:"overflow"}),(0,n.Z)({prop:"textOverflow"}),(0,n.Z)({prop:"visibility"}),(0,n.Z)({prop:"whiteSpace"})),x=i((0,n.Z)({prop:"flexBasis"}),(0,n.Z)({prop:"flexDirection"}),(0,n.Z)({prop:"flexWrap"}),(0,n.Z)({prop:"justifyContent"}),(0,n.Z)({prop:"alignItems"}),(0,n.Z)({prop:"alignContent"}),(0,n.Z)({prop:"order"}),(0,n.Z)({prop:"flex"}),(0,n.Z)({prop:"flexGrow"}),(0,n.Z)({prop:"flexShrink"}),(0,n.Z)({prop:"alignSelf"}),(0,n.Z)({prop:"justifyItems"}),(0,n.Z)({prop:"justifySelf"})),w=function(e){if(void 0!==e.gap&&null!==e.gap){var r=(0,a.eI)(e.theme,"spacing",8,"gap");return(0,s.k9)(e,e.gap,(function(e){return{gap:(0,a.NA)(r,e)}}))}return null};w.propTypes={},w.filterProps=["gap"];var P=function(e){if(void 0!==e.columnGap&&null!==e.columnGap){var r=(0,a.eI)(e.theme,"spacing",8,"columnGap");return(0,s.k9)(e,e.columnGap,(function(e){return{columnGap:(0,a.NA)(r,e)}}))}return null};P.propTypes={},P.filterProps=["columnGap"];var S=function(e){if(void 0!==e.rowGap&&null!==e.rowGap){var r=(0,a.eI)(e.theme,"spacing",8,"rowGap");return(0,s.k9)(e,e.rowGap,(function(e){return{rowGap:(0,a.NA)(r,e)}}))}return null};S.propTypes={},S.filterProps=["rowGap"];var C=i(w,P,S,(0,n.Z)({prop:"gridColumn"}),(0,n.Z)({prop:"gridRow"}),(0,n.Z)({prop:"gridAutoFlow"}),(0,n.Z)({prop:"gridAutoColumns"}),(0,n.Z)({prop:"gridAutoRows"}),(0,n.Z)({prop:"gridTemplateColumns"}),(0,n.Z)({prop:"gridTemplateRows"}),(0,n.Z)({prop:"gridTemplateAreas"}),(0,n.Z)({prop:"gridArea"})),A=i((0,n.Z)({prop:"position"}),(0,n.Z)({prop:"zIndex",themeKey:"zIndex"}),(0,n.Z)({prop:"top"}),(0,n.Z)({prop:"right"}),(0,n.Z)({prop:"bottom"}),(0,n.Z)({prop:"left"})),T=i((0,n.Z)({prop:"color",themeKey:"palette"}),(0,n.Z)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),(0,n.Z)({prop:"backgroundColor",themeKey:"palette"})),R=(0,n.Z)({prop:"boxShadow",themeKey:"shadows"});function M(e){return e<=1&&0!==e?"".concat(100*e,"%"):e}var O=(0,n.Z)({prop:"width",transform:M}),_=function(e){if(void 0!==e.maxWidth&&null!==e.maxWidth){return(0,s.k9)(e,e.maxWidth,(function(r){var t,n,o;return{maxWidth:(null==(t=e.theme)||null==(n=t.breakpoints)||null==(o=n.values)?void 0:o[r])||s.VO[r]||M(r)}}))}return null};_.filterProps=["maxWidth"];var E=(0,n.Z)({prop:"minWidth",transform:M}),N=(0,n.Z)({prop:"height",transform:M}),j=(0,n.Z)({prop:"maxHeight",transform:M}),L=(0,n.Z)({prop:"minHeight",transform:M}),B=((0,n.Z)({prop:"size",cssProperty:"width",transform:M}),(0,n.Z)({prop:"size",cssProperty:"height",transform:M}),i(O,_,E,N,j,L,(0,n.Z)({prop:"boxSizing"}))),F=(0,n.Z)({prop:"fontFamily",themeKey:"typography"}),W=(0,n.Z)({prop:"fontSize",themeKey:"typography"}),z=(0,n.Z)({prop:"fontStyle",themeKey:"typography"}),K=(0,n.Z)({prop:"fontWeight",themeKey:"typography"}),I=(0,n.Z)({prop:"letterSpacing"}),G=(0,n.Z)({prop:"textTransform"}),D=(0,n.Z)({prop:"lineHeight"}),V=(0,n.Z)({prop:"textAlign"}),H=i((0,n.Z)({prop:"typography",cssProperty:!1,themeKey:"typography"}),F,W,z,K,I,D,V,G),q={borders:b.filterProps,display:k.filterProps,flexbox:x.filterProps,grid:C.filterProps,positions:A.filterProps,palette:T.filterProps,shadows:R.filterProps,sizing:B.filterProps,spacing:a.ZP.filterProps,typography:H.filterProps},U={borders:b,display:k,flexbox:x,grid:C,positions:A,palette:T,shadows:R,sizing:B,spacing:a.ZP,typography:H},X=Object.keys(q).reduce((function(e,r){return q[r].forEach((function(t){e[t]=U[r]})),e}),{})},8297:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(2982),o=t(7462),i=t(3366),a=t(6486),s=t(9665),u=["sx"];function l(e){var r,t=e.sx,l=function(e){var r={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(t){s.Gc[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r}((0,i.Z)(e,u)),p=l.systemProps,c=l.otherProps;return r=Array.isArray(t)?[p].concat((0,n.Z)(t)):"function"==typeof t?function(){var e=t.apply(void 0,arguments);return(0,a.P)(e)?(0,o.Z)({},p,e):p}:(0,o.Z)({},p,t),(0,o.Z)({},c,{sx:r})}},2037:function(e,r,t){var n=t(4942),o=t(4106),i=t(9665),a=t(2692);function s(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=r.reduce((function(e,r){return e.concat(Object.keys(r))}),[]),o=new Set(n);return r.every((function(e){return o.size===Object.keys(e).length}))}function u(e,r){return"function"==typeof e?e(r):e}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.G$,r=Object.keys(e).reduce((function(r,t){return e[t].filterProps.forEach((function(n){r[n]=e[t]})),r}),{});function t(e,t,o){var i,a=(i={},(0,n.Z)(i,e,t),(0,n.Z)(i,"theme",o),i),s=r[e];return s?s(a):(0,n.Z)({},e,t)}function l(e){var i=e||{},p=i.sx,c=i.theme,d=void 0===c?{}:c;if(!p)return null;function f(e){var i=e;if("function"==typeof e)i=e(d);else if("object"!=typeof e)return e;if(!i)return null;var p=(0,a.W8)(d.breakpoints),c=Object.keys(p),f=p;return Object.keys(i).forEach((function(e){var p=u(i[e],d);if(null!=p)if("object"==typeof p)if(r[e])f=(0,o.Z)(f,t(e,p,d));else{var c=(0,a.k9)({theme:d},p,(function(r){return(0,n.Z)({},e,r)}));s(c,p)?f[e]=l({sx:p,theme:d}):f=(0,o.Z)(f,c)}else f=(0,o.Z)(f,t(e,p,d))})),(0,a.L7)(c,f)}return Array.isArray(p)?p.map(f):f(p)}return l}();l.filterProps=["sx"],r.Z=l},6386:function(e,r,t){function n(e,r){"function"==typeof e?e(r):e&&(e.current=r)}t.d(r,{Z:function(){return n}})},8127:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(7294),o=t(6386);function i(e,r){return n.useMemo((function(){return null==e&&null==r?null:function(t){(0,o.Z)(e,t),(0,o.Z)(r,t)}}),[e,r])}},5505:function(e,r,t){function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})},4101:function(e,r,t){t.d(r,{Z:function(){return j}});var n,o=t(7294),i=t(885),a=t(4942),s=t(3366),u=t(7462),l=t(5505),p=t(9408),c=t(5535),d=t(7663),f=t(9240),m=t(8348),h=t(2058),g=!0,v=!1,y={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Z(e){e.metaKey||e.altKey||e.ctrlKey||(g=!0)}function b(){g=!1}function k(){"hidden"===this.visibilityState&&v&&(g=!0)}function x(e){var r,t,n,o=e.target;try{return o.matches(":focus-visible")}catch(i){}return g||(t=(r=o).type,!("INPUT"!==(n=r.tagName)||!y[t]||r.readOnly)||"TEXTAREA"===n&&!r.readOnly||!!r.isContentEditable)}var w=function(){var e=o.useCallback((function(e){var r;null!=e&&((r=e.ownerDocument).addEventListener("keydown",Z,!0),r.addEventListener("mousedown",b,!0),r.addEventListener("pointerdown",b,!0),r.addEventListener("touchstart",b,!0),r.addEventListener("visibilitychange",k,!0))}),[]),r=o.useRef(!1);return{isFocusVisibleRef:r,onFocus:function(e){return!!x(e)&&(r.current=!0,!0)},onBlur:function(){return!!r.current&&(v=!0,window.clearTimeout(n),n=window.setTimeout((function(){v=!1}),100),r.current=!1,!0)},ref:e}},P=t(5973),S=t(9308),C=t(8416);function A(e){return(0,C.Z)("MuiLink",e)}var T=(0,t(2194).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),R=t(5893),M=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],O={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},_=(0,m.ZP)(S.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r["underline".concat((0,f.Z)(t.underline))],"button"===t.component&&r.button]}})((function(e){var r=e.theme,t=e.ownerState,n=(0,c.D)(r,"palette.".concat(function(e){return O[e]||e}(t.color)))||t.color;return(0,u.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?(0,d.Fq)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(T.focusVisible),{outline:"auto"}))})),E=o.forwardRef((function(e,r){var t=(0,h.Z)({props:e,name:"MuiLink"}),n=t.className,a=t.color,c=void 0===a?"primary":a,d=t.component,m=void 0===d?"a":d,g=t.onBlur,v=t.onFocus,y=t.TypographyClasses,Z=t.underline,b=void 0===Z?"always":Z,k=t.variant,x=void 0===k?"inherit":k,S=(0,s.Z)(t,M),C=w(),T=C.isFocusVisibleRef,O=C.onBlur,E=C.onFocus,N=C.ref,j=o.useState(!1),L=(0,i.Z)(j,2),B=L[0],F=L[1],W=(0,P.Z)(r,N),z=(0,u.Z)({},t,{color:c,component:m,focusVisible:B,underline:b,variant:x}),K=function(e){var r=e.classes,t=e.component,n=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,f.Z)(o)),"button"===t&&"button",n&&"focusVisible"]};return(0,p.Z)(i,A,r)}(z);return(0,R.jsx)(_,(0,u.Z)({className:(0,l.Z)(K.root,n),classes:y,color:c,component:m,onBlur:function(e){O(e),!1===T.current&&F(!1),g&&g(e)},onFocus:function(e){E(e),!0===T.current&&F(!0),v&&v(e)},ref:W,ownerState:z,variant:x},S))})),N=t(1597),j=o.forwardRef((function(e,r){return o.createElement(E,Object.assign({component:N.Link,ref:r},e))}))}}]);
//# sourceMappingURL=commons-e2c605f7ac1178a72130.js.map