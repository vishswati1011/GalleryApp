(this.webpackJsonpgalleryapp=this.webpackJsonpgalleryapp||[]).push([[0],{54:function(t,e,c){},55:function(t,e,c){},81:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(19),r=c.n(a),s=(c(54),c(28)),j=(c.p,c(55),c(29)),o=c.n(j),i=c(41),b=c(26),l=c(100),h=c(101),p=c(2),u=function(t){var e=t.data;return Object(p.jsx)("div",{children:e!==[]&&e.map((function(t){return Object(p.jsx)("img",{alt:"dogs",src:"https://farm"+t.farm+".staticflickr.com/"+t.server+"/"+t.id+"_"+t.secret+".jpg"},Object(h.a)())}))})},O=c(42),x=c.n(O),d=function(){var t=Object(n.useState)(""),e=Object(b.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),j=s[0],h=s[1],O=Object(n.useState)([]),d=Object(b.a)(O,2),f=d[0],m=d[1],g="https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("b0eef55b619ebc606dac76caef5312d5","&tags=").concat(c,"&per_page=10&format=json&nojsoncallback=1"),v=function(){var t=Object(i.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get(g);case 2:e=t.sent,console.log(e),console.log(e.data.photos.photo),m(e.data.photos.photo);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"centerdiv",children:[Object(p.jsx)("label",{children:Object(p.jsxs)("b",{children:[" ",Object(p.jsxs)("h2",{children:["Enter Image  Name ",j]})]})}),Object(p.jsx)("br",{}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h(c),v()},children:[Object(p.jsx)("input",{type:"text",autoComplete:"off",onChange:function(t){a(t.target.value)},value:c}),Object(p.jsx)("br",{}),Object(p.jsx)(l.a,{type:"submit",color:"primary",children:"search"})]}),""!=f?Object(p.jsx)(u,{data:f}):null]})})},f=c(4),m=c(15),g=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Oops ! Page Not Found... "}),Object(p.jsx)(m.b,{to:"/",children:"Click here"})]})},v=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"This is Gallery App in React "}),Object(p.jsx)(f.c,{children:Object(p.jsx)(f.a,{exact:!0,path:"/about",component:d})})]})},y=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"This is Gallery App in React Made by Swati..."}),Object(p.jsx)(f.c,{children:Object(p.jsx)(f.a,{exact:!0,path:"/about",component:d})})]})},F=c(102),k=c(98),w=c(99),S=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(F.a,{position:"static",children:Object(p.jsx)(k.a,{children:Object(p.jsxs)(w.a,{children:[Object(p.jsx)(m.c,{exact:!0,to:"/",children:"Gallery App"}),Object(p.jsx)(m.c,{exact:!0,to:"/about",children:" About US"}),Object(p.jsx)(m.c,{exact:!0,to:"/contact",children:" Contact US"})]})})})})};var C=function(){var t;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"resultdiv",children:[Object(p.jsx)(S,{}),Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{exact:!0,path:"/",component:d}),Object(p.jsx)(f.a,{exact:!0,path:"/about",component:v}),Object(p.jsx)(f.a,(t={path:!0},Object(s.a)(t,"path","/contact"),Object(s.a)(t,"component",y),t)),Object(p.jsx)(f.a,{component:g})]})]})})},A=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),r(t),s(t)}))};r.a.render(Object(p.jsx)(m.a,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),A()}},[[81,1,2]]]);
//# sourceMappingURL=main.a468d40c.chunk.js.map