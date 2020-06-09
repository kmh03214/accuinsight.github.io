(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{210:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),l=r(6),o=(r(0),r(351)),a={title:"shell"},c={id:"pipeline/workflow/workspace/job-processing/shell",title:"shell",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/shell.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/shell",sidebar:"pipeline",previous:{title:"serverToHdfs",permalink:"/docs/pipeline/workflow/workspace/job-processing/server-to-hdfs"},next:{title:"spark",permalink:"/docs/pipeline/workflow/workspace/job-processing/spark"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],i={rightToc:p};function b(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"Cluster \uc0c1\uc758 \uc784\uc758\uc758 host\uc5d0\uc11c shell \uba85\ub839\uc744 \uc2e4\ud589\ud55c\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[shell]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow020_shell_property.png",alt:"flow020"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uacb0\uacfc\ub97c HDFS\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ud30c\uc77c\uc0ad\uc81c/\ud3f4\ub354\uc0dd\uc131 \uc791\uc5c5 \uc120 \uc218\ud589(\uc6cc\ud06c\ud50c\ub85c\uc6b0 \ubc18\ubcf5\uc2e4\ud589 \uc2dc \ud65c\uc6a9\uac00\ub2a5)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"delete : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0ad\uc81c\ud560 \ud3f4\ub354/\ud30c\uc77c \uacbd\ub85c"),Object(o.b)("li",{parentName:"ul"},"mkdir\t: \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c\t"))),Object(o.b)("li",{parentName:"ol"},"file : \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub77c\uc774\ube0c\ub7ec\ub9ac \uacbd\ub85c\ub97c \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"archive : archive\uacbd\ub85c\ub97c \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"retry : max: \uc7ac\uc218\ud589 \ud69f \uc218 : period: \uc7ac\uc218\ud589 \uac04\uaca9"),Object(o.b)("li",{parentName:"ol"},"jobXml : jobxml\uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"configuration : \uc2e4\ud589\uc5d0 \uc0ac\uc6a9\ud560 \uc18d\uc131 (key, value) \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"envVar : keyValPair \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"captionOutput : captureOutput \uc5ec\ubd80 \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"shellCmd : shell command\ub97c \uc9c1\uc811 \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"\ud06c\uae30\uac00 0 byte\uc778 \ud30c\uc77c\uc744 \ub9cc\ub4dc\ub294 \uc2a4\ud06c\ub9bd\ud2b8\ub97c ","[shell]"," \ub178\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud55c\ub2e4. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"touch /usr/local/hadoop/sample.txt\n")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"[shell]","\ub178\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 shell\uc740 \uc0ac\uc804\uc5d0 hdfs\uc5d0 \uc704\uce58\ud574\uc57c \ud558\ubbc0\ub85c, \uc704 \ub0b4\uc6a9\uc744 \uc800\uc7a5(crefile.sh) \ud6c4 ","[HDFS\ube0c\ub77c\uc6b0\uc800]"," \ub610\ub294 \ud130\ubbf8\ub110\uc5d0 \uc811\uc18d\ud574\uc11c hdfs\uc5d0 \uc800\uc7a5\ud55c\ub2e4.  ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"kbtest \ud074\ub7ec\uc2a4\ud130 /tmp/ManSample/shell \ud3f4\ub354\uc5d0 \uc800\uc7a5")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[shell]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"2.file : \uc55e\uc11c \uc800\uc7a5\ud55c \ud30c\uc77c\uc744 \uc120\ud0dd\ud55c\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow053_shell_property_%ED%8C%8C%EC%9D%BC%EC%84%A0%ED%83%9D.png",alt:"flow053"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"9.shellCmd : sheel command\ub97c \uc785\ub825\ud55c\ub2e4. \uc2e4\ud589 \uc2a4\ud06c\ub9bd\ud2b8\ub97c hdfs\uc5d0 \uc800\uc7a5\ud588\uc73c\ubbc0\ub85c, \ud30c\uc77c\uba85\ub9cc \uc785\ub825\ud55c\ub2e4. \uc624\ub978\ucabd Script Editor\ub97c \ud31d\uc5c5\ud558\uc5ec \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud560 \uc218 \uc788\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow054_shell_property_shellcmd%EC%9E%85%EB%A0%A5.png",alt:"flow054"}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc800\uc7a5/\uc2e4\ud589 \uc2dc shell\uc774 \uc2e4\ud589\ub418\uc5b4 0byte\uc758 \ube48 \ud30c\uc77c\uc774 \uc0dd\uc131\ub41c\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow055_shell_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"flow055"}))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[Note]"," shell \ub178\ub4dc \uc0ac\uc6a9\uc2dc \uc720\uc758\uc0ac\ud56d"),Object(o.b)("br",{parentName:"p"}),"\n","1. shell \ub178\ub4dc \uc218\ud589\uc744 \uc704\ud55c shell \uc2a4\ud06c\ub9bd\ud2b8\ub97c hdfs\uc5d0 \uc801\uc7ac\ud574\uc57c \ud55c\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","2. shell \uc2a4\ud06c\ub9bd\ud2b8\ub294 yarn resource manager\uc5d0\uc11c random\ud558\uac8c \uc9c0\uc815\ud558\ub294 node manager\uc5d0\uc11c \uc218\ud589\ub41c\ub2e4. hdfs\uc5d0 \uc801\uc7ac\ub41c \ud30c\uc77c\uc744 local\ub85c \ub0b4\ub9ac\ub294 \uba85\ub839 \uc218\ud589\uc2dc \uc791\uc5c5\uc774 \uc2e4\ud589\ub418\ub294 node manager\ub97c \uba3c\uc800 \ud655\uc778\ud55c\ub2e4. ")))}b.isMDXComponent=!0},351:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),l=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=l.a.createContext({}),b=function(e){var t=l.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=b(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,O=s["".concat(a,".").concat(m)]||s[m]||u[m]||o;return r?l.a.createElement(O,c({ref:t},i,{components:r})):l.a.createElement(O,c({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var i=2;i<o;i++)a[i]=r[i];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);