(this["webpackJsonpgrid-art"]=this["webpackJsonpgrid-art"]||[]).push([[0],{12:function(t,e,r){},13:function(t,e,r){},14:function(t,e,r){},16:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),i=r(7),o=r.n(i),c=(r(12),r(13),[{id:"a1",url:"https://picsum.photos/id/1002/200",title:"artwork 1",rotate:0},{id:"a2",url:"https://picsum.photos/id/101/200",title:"artwork 2",rotate:0},{id:"a3",url:"https://picsum.photos/id/1014/200",title:"artwork 3",rotate:0},{id:"a4",url:"https://picsum.photos/id/102/200",title:"artwork 4",rotate:0},{id:"a5",url:"https://picsum.photos/id/1025/200",title:"artwork 5",rotate:0},{id:"a6",url:"https://picsum.photos/id/1051/200",title:"artwork 6",rotate:0}]),u=r(5),d=r(6),s=(r(14),r(0)),l=function(t){var e=t.artPiece,r=t.handleDrag,n=t.handleDrop,a=t.handleClick,i={transform:"rotate("+e.rotate+"deg)"};return Object(s.jsx)("div",{className:"item",draggable:!0,id:e.id,onDragOver:function(t){return t.preventDefault()},onDragStart:r,onDrop:n,onClick:a,children:Object(s.jsx)("img",{src:e.url,alt:e.title,className:"image",style:i})})},p=function(t){var e=t.artArray,r=Object(n.useState)(e),a=Object(d.a)(r,2),i=a[0],o=a[1];Object(n.useEffect)((function(){console.log("arranged: ",i)}),[i]);var c=Object(n.useState)(),p=Object(d.a)(c,2),f=p[0],g=p[1],h=function(t){g(t.currentTarget.id)},j=function(t){var e=i.findIndex((function(t){return t.id===f}));console.log("drag: ",e);var r=i.findIndex((function(e){return e.id===t.currentTarget.id}));console.log("drop: ",r),-1!==e&&-1!==r&&o((function(t){var n=Object(u.a)(t),a=[n[r],n[e]];return n[e]=a[0],n[r]=a[1],n}))},b=function(t){t.preventDefault();var e=i.findIndex((function(e){return e.id===t.currentTarget.id})),r=i[e].rotate+=90;o((function(t){var n=Object(u.a)(t);return n[e].rotate=r,console.log("rotation: ",n[e].rotate),console.log("temp: ",n),n}))};return Object(s.jsx)("div",{className:"grid",children:i.map((function(t){return Object(s.jsx)(l,{artPiece:t,handleDrag:h,handleDrop:j,handleClick:b},t.id)}))})};var f=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(p,{artArray:c})})},g=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;r(t),n(t),a(t),i(t),o(t)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.d6789c30.chunk.js.map