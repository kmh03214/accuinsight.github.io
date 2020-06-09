(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{107:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return b}));var n=t(1),o=t(6),a=(t(0),t(351)),c={title:"query"},i={id:"batchpipeline/workflow/workspace/job-processing/query",title:"query",description:"### Definition",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/query.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/query",sidebar:"batchpipeline",previous:{title:"python",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/python"},next:{title:"Rcode",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/r-code"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"RDBMS\uc5d0 JDBC\ubc29\uc2dd\uc73c\ub85c \uc811\uc18d\ud558\uc5ec \ucffc\ub9ac\ub97c \uc2e4\ud589\ud55c\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[query]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(a.b)("h3",{id:"set"},"Set"),Object(a.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(a.b)("h4",{id:"property"},"property"),Object(a.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow016_query_property.png",alt:"flow016"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"query : \uc2e4\ud589\ud560 Query \uc785\ub825 ( Query editor \uc774\uc6a9 \uac00\ub2a5 )")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"username : \uc0ac\uc6a9\uc790ID (\uc790\ub3d9\uc785\ub825)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"password : \uc0ac\uc6a9\uc790 \ube44\ubc00\ubc88\ud638 (\uc790\ub3d9\uc785\ub825)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"jdbcUrl : JDBC\uc5f0\uacb0\uc744 \uc704\ud55c URL\uc815\ubcf4 (\uc790\ub3d9\uc785\ub825)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"[\uc124\uc815]"," > ","[JDBC\uad00\ub9ac]","\uc5d0 \ub4f1\ub85d\ub41c JDBC \uc124\uc815\uc815\ubcf4 \uc120\ud0dd\uc2dc ","[2~4]",' \ud56d\ubaa9 \uc790\ub3d9 \uc785\ub825("\ubaa9\ub85d\uc5f4\uae30")'),Object(a.b)("li",{parentName:"ul"},'"\uc5f0\uacb0\ud14c\uc2a4\ud2b8" \uc544\uc774\ucf58\uc744 \uc120\ud0dd\ud558\uc5ec JDBC \uc5f0\uacb0\uc124\uc815 \ud14c\uc2a4\ud2b8'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"variables : variable - \ubcc0\uc218 \uba85, value - \ubcc0\uc218\uc5d0 \ud560\ub2f9\ud560 \uac12")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80"))),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"Maria DB\uc5d0 \uc811\uc18d \ud6c4 user \uc815\ubcf4\ub97c \ud655\uc778\ud558\ub294 \ucffc\ub9ac\ub97c \uc218\ud589\ud558\ub294 \uc608\uc81c\uc774\ub2e4. ","[\uc124\uc815]"," > ","[jdbc\uad00\ub9ac]","\uc5d0 \ub4f1\ub85d\ub41c \uc811\uc18d\uc815\ubcf4\ub97c ","[\uc5f0\uacb0\uad00\ub9ac]"," > ","[\ubaa9\ub85d\uc5f4\uae30]","\ub97c \ud1b5\ud574 \uc120\ud0dd\ud55c\ub2e4. jdbc\uad00\ub9ac\uc5d0 \ub4f1\ub85d\ud55c \uc815\ubcf4\uac00 \uc5c6\uc744 \uacbd\uc6b0 ","[\ubaa9\ub85d\uc5f4\uae30]"," \ub0b4 ","[\uc2e0\uaddc\uc0dd\uc131]","\ubc84\ud2bc\uc744 \ud1b5\ud574 jdbc \uc815\ubcf4\ub97c \uc0c8\ub86d\uac8c \uc785\ub825/\uc800\uc7a5\ud560 \uc218 \uc788\ub2e4.  "),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow055_query_property_ex.png",alt:"flow055"}))))}b.isMDXComponent=!0},351:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},u=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(t),f=n,m=u["".concat(c,".").concat(f)]||u[f]||s[f]||a;return t?o.a.createElement(m,i({ref:r},l,{components:t})):o.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);