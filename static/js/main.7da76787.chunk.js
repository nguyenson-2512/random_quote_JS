(this.webpackJsonprandom_quote=this.webpackJsonprandom_quote||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),F=n.n(o),a=n(5),s=n.n(a),r=(n(12),n(4)),u=n.n(r),i=n(6),C=n(2);n(14);var b=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF","#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"],l=function(){var e=Object(o.useState)("I would rather die of passion than of boredom."),t=Object(C.a)(e,2),n=t[0],F=t[1],a=Object(o.useState)("Vincent van Gogh"),s=Object(C.a)(a,2),r=s[0],l=s[1],B=Object(o.useState)(0),j=Object(C.a)(B,2),d=j[0],h=j[1],E=Object(o.useState)([]),f=Object(C.a)(E,2),D=f[0],O=f[1],p=Object(o.useState)("#bf6565"),A=Object(C.a)(p,2),m=A[0],x=A[1],w="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",g=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,O(c.quotes),console.log(D);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){g(w)}),[w]);var q=function(){h(Math.floor(Math.random()*D.length)),F(D[d].quote),l(D[d].author),x(b[d])};return Object(c.jsx)("div",{className:"App",style:{backgroundColor:m,color:m},children:Object(c.jsxs)("div",{id:"quote-box",children:[Object(c.jsxs)("p",{className:"quote-text",children:[Object(c.jsx)("span",{className:"quote-left",children:'"'}),n]}),Object(c.jsxs)("p",{className:"quote-author",children:["- ",r]}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("a",{style:{backgroundColor:m,color:"white"},className:"button",id:"tweet-quote",title:"Tweet this quote!",href:encodeURI("https://twitter.com/intent/tweet?text=".concat(n,"-").concat(r)),children:"Tweeter"}),Object(c.jsx)("a",{style:{backgroundColor:m,color:"white"},className:"button",id:"new-quote",onClick:function(){return q()},children:"New quote"})]})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,F=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),F(e),a(e)}))};s.a.render(Object(c.jsx)(F.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),B()}},[[15,1,2]]]);
//# sourceMappingURL=main.7da76787.chunk.js.map