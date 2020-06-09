(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{234:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),o=(r(0),r(351)),i={title:"cluster"},l={id:"pipeline/workflow/workspace/data-sampling/cluster",title:"cluster",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/data-sampling/cluster.md",permalink:"/docs/pipeline/workflow/workspace/data-sampling/cluster",sidebar:"pipeline",previous:{title:"stratified",permalink:"/docs/pipeline/workflow/workspace/data-sampling/stratified"},next:{title:"agg",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/agg"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"[\ub370\uc774\ud130\ubd88\ub7ec\uc624\uae30]","\uc5d0\uc11c \ubd88\ub7ec\uc628 \ub370\uc774\ud130\ub97c \ud074\ub7ec\uc2a4\ud130\ub85c \ub098\ub204\uace0 \ud074\ub7ec\uc2a4\ud130\ub97c \ubb34\uc791\uc704\ub85c \uc0d8\ud50c\ub9c1\ud55c \ub4a4 \ud074\ub7ec\uc2a4\ud130\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uac80\uc0ac\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\uc0d8\ud50c\ub9c1]","\uc5d0\uc11c ","[cluster]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.\nComponents \ud328\ub110\uc758 \ud0ed\ubcc4 \ud56d\ubaa9\uc5d0\uc11c ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"Property"),Object(o.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-sampling/datasampling011_cluster_property.png",alt:"datasampling011"}))),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"fraction : \ub9ac\ud134\ud560 \ub370\uc774\ud130\uc14b\uacfc \uc804\uccb4 \ub370\uc774\ud130\uc14b \uac04\uc758 \ud06c\uae30 \ube44\uc728\uc744 \uc758\ubbf8\ud558\uba70, 0~1\uc0ac\uc774\uc758 \uac12 \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"col : \uc801\uc6a9\ud560 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"includeJob : \ubc30\uce58/\uc2a4\ucf00\uc904\ub9c1 \uc791\uc5c5 \uc218\ud589 \uc2dc \uc0d8\ud50c\ub9c1 \ud3ec\ud568\uc5ec\ubd80")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"random \uc0d8\ud50c\ub9c1\uc5d0\uc11c \uc0ac\uc6a9\ud55c HR_Retention.csv(14,999 records)\ud30c\uc77c\uc5d0\uc11c cluster \uc0d8\ud50c\ub9c1\uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \uae30\uc900\uceec\ub7fc(col)\uc744 sales\ub85c, fraction\uc744 0.1\ub85c \uc124\uc815\ud560 \uacbd\uc6b0 sales \uceec\ub7fc\uc5d0 \ud3ec\ud568\ub41c 10\uac1c category \uc911 10%\ub9cc \ud074\ub7ec\uc2a4\ud130\ub97c \ub9cc\ub4e4\uace0 \ud574\ub2f9 \ud074\ub7ec\uc2a4\ud130\uc758 \uc804\uccb4 \ub370\uc774\ud130\ub97c \uc0d8\ud50c\ub9c1\ud569\ub2c8\ub2e4. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[cluster]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(o.b)("br",{parentName:"li"}),Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-sampling/datasampling012_cluster_exampleworkflow.png",alt:"datasampling012"}))),Object(o.b)("li",{parentName:"ol"},"[cluster]","\ub178\ub4dc\uc758 fraction \uac12\uc744 0.1\ub85c \uc120\ud0dd\ud558\uace0, col\uac12\uc744 sales\ub85c \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"sales cagegory(10\uac1c) \uc911 \ub79c\ub364\ud558\uac8c 1\uac1c\ub97c \uc120\ud0dd\ud55c \ud6c4 \ud3ec\ud568\ub41c \uc804\uccb4\ub370\uc774\ud130\ub97c \uc0d8\ud50c\ub9c1\n",Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-sampling/datasampling013_cluster_exampleworkflow%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"datasampling013"})))))}s.isMDXComponent=!0},351:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,l({ref:t},p,{components:r})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);