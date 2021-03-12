(this["webpackJsonpinput-component"]=this["webpackJsonpinput-component"]||[]).push([[0],{18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r,i,o,l,c,a,d,s,j,h,p,b,u,x,f,O,g,m,v,y,w,F,P,z,I,L,S,E,k,J,D,N,R,T,W,C=t(3),B=t.n(C),M=t(9),_=t.n(M),G=(t(18),t(1)),U=t(2),q=U.a.div(r||(r=Object(G.a)(['\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 1fr;\n  grid-template-columns: 20% 1fr;\n  grid-template-areas: "navigation main";\n\n  @media (max-width: 480px) {\n    grid-template-columns: 1fr;\n    grid-template-areas: "main";\n  }\n']))),A=U.a.div(i||(i=Object(G.a)(["\n  grid-area: navigation;\n"]))),H=U.a.div(o||(o=Object(G.a)(["\n  grid-area: main;\n  padding: 3rem;\n"]))),K=U.a.div(l||(l=Object(G.a)(["\n  position: fixed;\n  width: 20%;\n  height: 100%;\n  background-color: #fafbfd;\n  display: flex;\n  justify-content: center;\n  padding-top: 6rem;\n\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),Q=U.a.div(c||(c=Object(G.a)(['\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  /* justify-content: center; */\n  background-color: #fafbfd;\n  color: #9e9e9e;\n  font-family: "Noto Sans JP", sans-serif;\n  font-size: 14px;\n\n  .selected {\n    color: #090f31;\n    font-weight: bold;\n  }\n']))),V=t(0),X=function(){return Object(V.jsx)(K,{children:Object(V.jsxs)(Q,{children:[Object(V.jsx)("p",{children:"Typography"}),Object(V.jsx)("p",{children:"Grid"}),Object(V.jsx)("p",{children:"Buttons"}),Object(V.jsx)("p",{className:"selected",children:"Inputs"})]})})},Y=function(n){var e=n.children;return Object(V.jsxs)(q,{children:[Object(V.jsx)(A,{children:Object(V.jsx)(X,{})}),Object(V.jsx)(H,{children:e})]})},Z=t(5),$=t(13),nn=U.a.input(a||(a=Object(G.a)(["\n  width: ",";\n  display: flex;\n  margin-top: 1rem;\n  align-items: center;\n  justify-content: center;\n  padding: ",';\n  color: "#3F3F3F";\n  border: ',';\n  border-radius: 6px;\n\n  font-family: "Noto Sans JP";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333333;\n\n  :hover:not([disabled]) {\n    border: ',";\n  }\n\n  :focus-visible {\n    outline: none;\n    ",";\n  }\n\n  :focus {\n    outline: none;\n    ",";\n  }\n"])),(function(n){return n.fullWidth?"100%":"200px"}),(function(n){return n.size&&n.size}),(function(n){return n.border?"1px solid ".concat(n.border):"1px solid #828282"}),(function(n){return n.hover?"1px solid ".concat(n.hover):"1px solid #333333"}),(function(n){return n.error?"1px solid #D32F2F":"1px solid #2962ff"}),(function(n){return n.error?"1px solid #D32F2F":"1px solid #2962ff"})),en=U.a.textarea(d||(d=Object(G.a)(["\n  width: ",";\n  display: flex;\n  margin-top: 1rem;\n  align-items: center;\n  justify-content: center;\n  padding: ",';\n  color: "#3F3F3F";\n  border: ',';\n  border-radius: 6px;\n  resize: none;\n\n  font-family: "Noto Sans JP";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333333;\n\n  :hover:not([disabled]) {\n    border: ',";\n  }\n\n  :focus-visible {\n    outline: none;\n    ",";\n  }\n\n  :focus {\n    outline: none;\n    ",";\n  }\n"])),(function(n){return n.fullWidth?"100%":"200px"}),(function(n){return n.size&&n.size}),(function(n){return n.border?"1px solid ".concat(n.border):"1px solid #828282"}),(function(n){return n.hover?"1px solid ".concat(n.hover):"1px solid #333333"}),(function(n){return n.error?"1px solid #D32F2F":"1px solid #2962ff"}),(function(n){return n.error?"1px solid #D32F2F":"1px solid #2962ff"})),tn=U.a.input(s||(s=Object(G.a)(['\n  width: 200px;\n  justify-content: center;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: "row";\n  align-items: center;\n  padding: ',";\n  border: ",";\n  border-radius: 6px;\n  padding-left: ",";\n  padding-right: ",';\n\n  font-family: "Noto Sans JP";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333333;\n\n  :hover:not([disabled]) {\n    border: ',";\n  }\n\n  :focus-visible {\n    outline: none;\n    ",";\n  }\n\n  :focus {\n    outline: none;\n    ",";\n  }\n"])),(function(n){return n.size&&n.size}),(function(n){return n.border?"1px solid ".concat(n.border):"1px solid #828282"}),(function(n){return!n.iconRight&&"50px"}),(function(n){return n.iconRight&&"50px"}),(function(n){return n.hover?"1px solid ".concat(n.hover):"1px solid #aeaeae"}),(function(n){return n.error?"1px solid #D32F2F":"1px solid #2962ff"}),(function(n){return n.error?"1px solid #D32F2F":"1px solid #2962ff"})),rn=U.a.div(j||(j=Object(G.a)(["\n  position: relative;\n"]))),on=U.a.label(h||(h=Object(G.a)(['\n  font-family: "Noto Sans JP", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 17px;\n  color: ',";\n"])),(function(n){return n.error?"#D32F2F":"#333333"})),ln=U.a.p(p||(p=Object(G.a)(['\n  font-family: "Noto Sans JP", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 14px;\n  color: #828282;\n  color: ',";\n"])),(function(n){return n.error?"#D32F2F":"#828282"})),cn=U.a.div(b||(b=Object(G.a)(["\n  left: ",";\n  right: ",";\n  position: absolute;\n  padding: 15px;\n  width: ",";\n  color: #828282;\n"])),(function(n){return!n.iconRight&&"0px"}),(function(n){return n.iconRight&&"0px"}),(function(n){return n.iconRight&&"56%"})),an=function(n){var e=n.label,t=n.border,r=n.helperText,i=n.hover,o=n.shadow,l=n.icon,c=n.iconRight,a=n.size,d=n.error,s=n.fullWidth,j=n.hoverError,h=n.multiline,p=Object($.a)(n,["label","border","helperText","hover","shadow","icon","iconRight","size","error","fullWidth","hoverError","multiline"]),b=a&&"sm"===a?"0.6rem":"md"===a?"1rem":"lg"===a?"1.6rem":"1rem",u=d&&!j?"#D32F2F":"#828282";return Object(V.jsx)("div",{children:l?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(on,{error:d,children:e}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(cn,{iconRight:c,children:Object(V.jsx)("span",{class:"material-icons",children:l})}),Object(V.jsx)(tn,Object(Z.a)({iconRight:c,placeholder:p.placeholder,type:p.type,border:!u||t||p.disabled?t&&!p.disabled?t:p.disabled?"#E0E0E0":"#828282":u,hover:u||i,shadow:o,error:d,fullWidth:s,size:b},p)),r&&Object(V.jsx)(ln,{error:d,children:r})]})]}):h?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(on,{error:d,children:e}),Object(V.jsx)(en,Object(Z.a)({placeholder:p.placeholder,type:p.type,border:!u||t||p.disabled?t&&!p.disabled?t:p.disabled?"#E0E0E0":"#828282":u,hover:u||i,shadow:o,error:d,size:b,fullWidth:s},p)),r&&Object(V.jsx)(ln,{error:d,children:r})]}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(on,{error:d,children:e}),Object(V.jsx)(nn,Object(Z.a)({placeholder:p.placeholder,type:p.type,border:!u||t||p.disabled?t&&!p.disabled?t:p.disabled?"#E0E0E0":"#828282":u,hover:u||i,shadow:o,error:d,size:b,fullWidth:s},p)),r&&Object(V.jsx)(ln,{error:d,children:r})]})})},dn=U.a.div(u||(u=Object(G.a)(["\n  width: 100%;\n  height: 100%;\n"]))),sn=U.a.div(x||(x=Object(G.a)(['\n  width: 100%;\n  height: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-columns: auto auto auto auto;\n\n  grid-template-areas:\n    "head head head head"\n    "input1 input2 input3 input3"\n    "input4 input5 input6 input6"\n    "input7 input7 input7 input7"\n    "input8 input9 input9 input9"\n    "input10 input11 input11 input11"\n    "input12 input12 input12 input12"\n    "input13 input14 input14 input14"\n    "input15 input15 input15 input15"\n    "input16 input16 input16 input16"\n    "link link link link"\n    "footer footer footer footer";\n\n  @media (max-width: 480px) {\n    grid-template-areas:\n      "head"\n      "input1"\n      "input2"\n      "input3"\n      "input4"\n      "input5"\n      "input6"\n      "input7"\n      "input8"\n      "input9"\n      "input10"\n      "input11"\n      "input12"\n      "input13"\n      "input14"\n      "input15"\n      "input16"\n      "link"\n      "footer";\n\n    grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-columns: auto;\n  }\n']))),jn=U.a.div(f||(f=Object(G.a)(["\n  grid-area: head;\n"]))),hn=U.a.p(O||(O=Object(G.a)(['\n  font-weight: 500;\n  font-family: "Ubuntu Mono", monospace;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 36px;\n  color: #4f4f4f;\n  margin: 0;\n']))),pn=U.a.p(g||(g=Object(G.a)(['\n  color: #828282;\n  font-family: "Noto Sans JP", sans-serif;\n  font-weight: normal;\n  font-size: 12px;\n  margin: 0;\n  margin-bottom: 1rem;\n  margin-top: 2rem;\n']))),bn=U.a.div(m||(m=Object(G.a)(["\n  grid-area: input1;\n"]))),un=U.a.div(v||(v=Object(G.a)(["\n  grid-area: input2;\n  min-width: 20rem;\n"]))),xn=U.a.div(y||(y=Object(G.a)(["\n  grid-area: input3;\n"]))),fn=U.a.div(w||(w=Object(G.a)(["\n  grid-area: input4;\n"]))),On=U.a.div(F||(F=Object(G.a)(["\n  grid-area: input5;\n"]))),gn=U.a.div(P||(P=Object(G.a)(["\n  grid-area: input6;\n"]))),mn=U.a.div(z||(z=Object(G.a)(["\n  grid-area: input7;\n"]))),vn=U.a.div(I||(I=Object(G.a)(["\n  grid-area: input8;\n  min-width: 20rem;\n"]))),yn=U.a.div(L||(L=Object(G.a)(["\n  grid-area: input9;\n"]))),wn=U.a.div(S||(S=Object(G.a)(["\n  grid-area: input10;\n"]))),Fn=U.a.div(E||(E=Object(G.a)(["\n  grid-area: input11;\n"]))),Pn=U.a.div(k||(k=Object(G.a)(["\n  grid-area: input12;\n"]))),zn=U.a.div(J||(J=Object(G.a)(["\n  grid-area: input13;\n"]))),In=U.a.div(D||(D=Object(G.a)(["\n  grid-area: input14;\n"]))),Ln=U.a.div(N||(N=Object(G.a)(["\n  grid-area: input15;\n"]))),Sn=U.a.div(R||(R=Object(G.a)(["\n  grid-area: input16;\n"]))),En=U.a.div(T||(T=Object(G.a)(['\n  grid-area: footer;\n  color: #a9a9a9;\n  font-family: "Noto Sans JP", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n']))),kn=U.a.a(W||(W=Object(G.a)(['\n  grid-area: link;\n  color: #a9a9a9;\n  font-family: "Noto Sans JP", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  margin-top: 4rem;\n']))),Jn=function(){return Object(V.jsx)(dn,{children:Object(V.jsxs)(sn,{children:[Object(V.jsx)(jn,{children:Object(V.jsx)(hn,{children:"Inputs"})}),Object(V.jsxs)(bn,{children:[Object(V.jsx)(pn,{children:"<Input />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsxs)(un,{children:[Object(V.jsx)(pn,{children:"&:hover"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{label:"Label",border:"#333333",placeholder:"Placeholder"})})]}),Object(V.jsxs)(xn,{children:[Object(V.jsx)(pn,{children:"&:focus"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{label:"Label",border:"#2962FF",placeholder:"Placeholder"})})]}),Object(V.jsxs)(fn,{children:[Object(V.jsx)(pn,{children:"<Input error />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{error:!0,label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsxs)(On,{children:[Object(V.jsx)(pn,{children:"&:hover"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{hoverError:!0,label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsxs)(gn,{children:[Object(V.jsx)(pn,{children:"&:focus"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{error:!0,label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsxs)(mn,{children:[Object(V.jsx)(pn,{children:"<Input disabled />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{label:"Label",placeholder:"Placeholder",disabled:!0})})]}),Object(V.jsxs)(vn,{children:[Object(V.jsx)(pn,{children:"<Input helperText=\u201dSome interesting text\u201d />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{label:"Label",helperText:"Some interesting text",placeholder:"Placeholder"})})]}),Object(V.jsxs)(yn,{children:[Object(V.jsx)(pn,{children:"<Input helperText=\u201dSome interesting text\u201d error />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{error:!0,helperText:"Some interesting text",label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsxs)(wn,{children:[Object(V.jsx)(pn,{children:"<Input startIcon />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{label:"Label",placeholder:"Placeholder",icon:"call"})})]}),Object(V.jsxs)(Fn,{children:[Object(V.jsx)(pn,{children:"<ContainerInput endIcon=\u201dlocal_grocery_store\u201d />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{label:"Label",placeholder:"Placeholder",icon:"lock",iconRight:!0})})]}),Object(V.jsxs)(Pn,{children:[Object(V.jsx)(pn,{children:"<Input value=\u201dtext\u201d />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{label:"Label",placeholder:"Placeholder",value:"Text"})})]}),Object(V.jsxs)(zn,{children:[Object(V.jsx)(pn,{children:"<Input size=\u201dsm\u201d />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{size:"sm",label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsxs)(In,{children:[Object(V.jsx)(pn,{children:"<Input size=\u201dmd\u201d />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{size:"md",label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsxs)(Ln,{children:[Object(V.jsx)(pn,{children:"<Input fullWidth />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{fullWidth:!0,label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsxs)(Sn,{children:[Object(V.jsx)(pn,{children:"<Input multiline row=\u201d4\u201d />"}),Object(V.jsx)("div",{children:Object(V.jsx)(an,{multiline:!0,rows:"4",label:"Label",placeholder:"Placeholder"})})]}),Object(V.jsx)(kn,{href:"https://material.io/resources/icons/?style=round",children:"Icons: https://material.io/resources/icons/?style=round"}),Object(V.jsxs)(En,{children:["created by ",Object(V.jsx)("strong",{children:"Lorraine"})," - devChallenges.io"]})]})})},Dn=function(){return Object(V.jsx)(Y,{children:Object(V.jsx)(Jn,{})})};var Nn=function(){return Object(V.jsx)("div",{children:Object(V.jsx)(Dn,{})})},Rn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,l=e.getTTFB;t(n),r(n),i(n),o(n),l(n)}))};_.a.render(Object(V.jsx)(B.a.StrictMode,{children:Object(V.jsx)(Nn,{})}),document.getElementById("root")),Rn()}},[[22,1,2]]]);
//# sourceMappingURL=main.e6d2aca7.chunk.js.map