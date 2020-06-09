(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{308:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(1),a=t(6),c=(t(0),t(351)),o={title:"crosstab"},i={id:"pipeline/workflow/workspace/data-processing-basic/crosstab",title:"crosstab",description:"## crosstab",source:"@site/docs/pipeline/workflow/workspace/data-processing-basic/crosstab.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/crosstab",sidebar:"pipeline",previous:{title:"cast",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/cast"},next:{title:"dataJoin",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/data-join"}},p=[{value:"crosstab",id:"crosstab",children:[]}],s={rightToc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"crosstab"},"crosstab"),Object(c.b)("p",null,"\uc5f4\uc758 \ube48\ub3c4 \ud14c\uc774\ube14\uc744 \uacc4\uc0b0\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[crosstab]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"col1 : \ube48\ub3c4\ud45c \uc791\uc131\uc744 \uc704\ud55c \uccab \ubc88\uc9f8 \uae30\uc900\uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. \uacb0\uacfc\ud14c\uc774\ube14\uc5d0\uc11c \ud589\uc5d0 \uc704\uce58\ud55c\ub2e4. "),Object(c.b)("li",{parentName:"ol"},"col2 : \ube48\ub3c4\ud45c \uc791\uc131\uc744 \uc704\ud55c \ub450 \ubc88\uc9f8 \uae30\uc900\uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. \uacb0\uacfc\ud14c\uc774\ube14\uc5d0\uc11c \uc5f4\uc5d0 \uc704\uce58\ud55c\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic007_crosstab_property.png",alt:"prebasic007"}))),Object(c.b)("p",null,"hdfs\uc5d0 \uc800\uc7a5\ub41c \ud14c\uc774\ube14\uc5d0\uc11c co11=category, col2=group\uc744 \uac01\uac01 \uc120\ud0dd\ud560 \uacbd\uc6b0 \uacb0\uacfc\ub294 \uc544\ub798\uc640 \uac19\ub2e4. "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"hdfs\uc5d0 \uc800\uc7a5\ub41c \uc6d0\ud14c\uc774\ube14")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic008_crosstab_hdfs_raw.png",alt:"prebasic008"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"crosstab \ub178\ub4dc\ub97c \ud65c\uc6a9\ud558\uc5ec \ube48\ub3c4\ud14c\uc774\ube14 \uacc4\uc0b0\ud55c \uacb0\uacfc \ud14c\uc774\ube14 : category \uae30\uc900\uc73c\ub85c group \ubcc4 \ube48\ub3c4\ud14c\uc774\ube14\uc774 \uacc4\uc0b0\ub428\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic009_crosstab_result.png",alt:"prebasic009"}))))}l.isMDXComponent=!0},351:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},b=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(t),f=n,d=b["".concat(o,".").concat(f)]||b[f]||u[f]||c;return t?a.a.createElement(d,i({ref:r},s,{components:t})):a.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);