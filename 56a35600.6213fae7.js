(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),i=(r(0),r(351)),c={title:"hdfsToServer"},p={id:"pipeline/workflow/workspace/job-processing/hdfs-to-server",title:"hdfsToServer",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/hdfs-to-server.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/hdfs-to-server",sidebar:"pipeline",previous:{title:"hdfsToS3",permalink:"/docs/pipeline/workflow/workspace/job-processing/hdfs-to-s3"},next:{title:"hiveToHdfs",permalink:"/docs/pipeline/workflow/workspace/job-processing/hive-to-hdfs"}},a=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:a};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"HDFS \ud30c\uc77c/\ud3f4\ub354\ub97c \uc6d0\uaca9 \uc11c\ubc84\uc5d0 \ubcf5\uc0ac \ud558\ub294 \ub178\ub4dc\uc774\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hdfsToServer]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. "),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow008_hdfstoserver_property.png",alt:"flow008"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"hdfs\ud30c\uc77c\uacbd\ub85c(\ubd88\ub7ec\uc624\uae30) : \ubcf5\uc0ac\ud560 \ud30c\uc77c \uacbd\ub85c \uc120\ud0dd"),Object(i.b)("li",{parentName:"ol"},"dest : \uc6d0\uaca9\uc11c\ubc84 \uc815\ubcf4")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IP\uc8fc\uc18c : \uc6d0\uaca9\uc11c\ubc84 IP \uc815\ubcf4"),Object(i.b)("li",{parentName:"ul"},"\uc800\uc7a5\uacbd\ub85c(path) : \ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uacbd\ub85c"),Object(i.b)("li",{parentName:"ul"},"PORT : SCP \ud65c\uc6a9 \uac00\ub2a5 \ud3ec\ud2b8")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"user : SCP\uc5d0 \ud65c\uc6a9\ud560 \uacc4\uc815"),Object(i.b)("li",{parentName:"ol"},"password : SCP\uc5d0 \ud65c\uc6a9\ud560 password")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"kbtest \ud074\ub7ec\uc2a4\ud130 hdfs\uc5d0 \uc801\uc7ac\ub41c \ud30c\uc77c\uc744 \uc678\ubd80\uc11c\ubc84\uc5d0 \uc804\ub2ec\ud55c\ub2e4. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"[hdfsToServer]"," \ub178\ub4dc property \uad6c\uc131")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow044_hdfstoserver_property%EC%84%A4%EC%A0%95.png",alt:"flow044"}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \ud6c4 \ud30c\uc77c\uc774 \uc678\ubd80\uc11c\ubc84\uc5d0 \uc804\uc1a1\ub418\uc5c8\ub2e4. ")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow045_hdfstoserver_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"flow044"}))))}s.isMDXComponent=!0},351:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,d=b["".concat(c,".").concat(u)]||b[u]||f[u]||i;return r?o.a.createElement(d,p({ref:t},l,{components:r})):o.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);