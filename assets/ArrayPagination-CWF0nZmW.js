import{u as f,__tla as __tla_0}from"./index-QvosRmIi.js";import{a as d,D as t}from"./vue-Dk8yKSDY.js";let h;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{h=function(a,e,o=1){const{currentPage:n,currentPageSize:r,pageCount:u,isFirstPage:i,isLastPage:c,next:g,prev:l}=f({total:()=>t(a).length,page:o,pageSize:()=>t(e)===-1?t(a).length:t(e)}),p=d(()=>{const s=(n.value-1)*t(e),P=s+r.value;return t(a).slice(s,P)});return{currentPage:n,currentPageSize:r,pageCount:u,isFirstPage:i,isLastPage:c,next:g,prev:l,paginatedResults:p}}});export{h as u,__tla};