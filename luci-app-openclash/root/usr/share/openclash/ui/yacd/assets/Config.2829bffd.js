import{r as U,b as c,j as t,i as y,s as j,h as S,c as V,k as W,l as L,n as P,o as H,d as T,q as G,g as $,t as q,v as F,w as b,x as J,u as K,C as Q,y as X,B as Y,z as Z,A as ee}from"./index.1428ab75.js";import{r as te}from"./logs.6e20f0cf.js";import{S as w}from"./Select.bdd10c8a.js";function ne(e,s){if(e==null)return{};var r=ae(e,s),l,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],!(s.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,l)||(r[l]=e[l]))}return r}function ae(e,s){if(e==null)return{};var r={},l=Object.keys(e),a,o;for(o=0;o<l.length;o++)a=l[o],!(s.indexOf(a)>=0)&&(r[a]=e[a]);return r}var _=U.exports.forwardRef(function(e,s){var r=e.color,l=r===void 0?"currentColor":r,a=e.size,o=a===void 0?24:a,u=ne(e,["color","size"]);return c("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...u,children:[t("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),t("polyline",{points:"16 17 21 12 16 7"}),t("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})});_.propTypes={color:y.exports.string,size:y.exports.oneOfType([y.exports.string,y.exports.number])};_.displayName="LogOut";const oe=_,{useState:se,useRef:le,useEffect:re,useCallback:ce}=S;function ie(e){return t("input",{className:j.input,...e})}function de({value:e,...s}){const[r,l]=se(e),a=le(e);re(()=>{a.current!==e&&l(e),a.current=e},[e]);const o=ce(u=>l(u.target.value),[l]);return t("input",{className:j.input,value:r,onChange:o,...s})}const ue="_root_1tdl3_1",pe="_section_1tdl3_2",he="_wrapSwitch_1tdl3_26",ge="_sep_1tdl3_32",fe="_label_1tdl3_45",d={root:ue,section:pe,wrapSwitch:he,sep:ge,label:fe},me="_fieldset_1ghjp_1",ve="_input_1ghjp_9",ye="_cnt_1ghjp_9",k={fieldset:me,input:ve,cnt:ye};function Ce({OptionComponent:e,optionPropsList:s,selectedIndex:r,onChange:l}){const a=V("visually-hidden",k.input),o=u=>{l(u.target.value)};return t("fieldset",{className:k.fieldset,children:s.map((u,h)=>c("label",{children:[t("input",{type:"radio",checked:r===h,name:"selection",value:h,"aria-labelledby":"traffic chart type "+h,onChange:o,className:a}),t("div",{className:k.cnt,children:t(e,{...u})})]},h))})}const{useMemo:be}=S,we={plugins:{legend:{display:!1}},scales:{x:{display:!1,type:"category"},y:{display:!1,type:"linear"}}},M=[23e3,35e3,46e3,33e3,9e4,68e3,23e3,45e3],ke=[184e3,183e3,196e3,182e3,19e4,186e3,182e3,189e3],Se=M;function _e({id:e}){const s=W.read(),r=be(()=>({labels:Se,datasets:[{...L,...P[e].up,data:M},{...L,...P[e].down,data:ke}]}),[e]),l="chart-"+e;return H(s.Chart,l,r,null,we),t("div",{style:{width:100,padding:5},children:t("canvas",{id:l})})}const{useEffect:R,useState:xe,useCallback:g,useRef:Oe,useMemo:Ie}=S,Ne=[{id:0},{id:1},{id:2},{id:3}],Le=[["debug","Debug"],["info","Info"],["warning","Warning"],["error","Error"],["silent","Silent"]],Pe=[{key:"port",label:"HTTP Proxy Port"},{key:"socks-port",label:"SOCKS5 Proxy Port"},{key:"mixed-port",label:"Mixed Port"},{key:"redir-port",label:"Redir Port"}],je=[["zh","\u4E2D\u6587"],["en","English"]],Te=[["Global","Global"],["Rule","Rule"],["Direct","Direct"]],$e=e=>({configs:G(e),apiConfig:$(e)}),Me=e=>({selectedChartStyleIndex:Z(e),latencyTestUrl:ee(e),apiConfig:$(e)}),Re=T(Me)(Ae),Ue=T($e)(ze);function ze({dispatch:e,configs:s,apiConfig:r}){return R(()=>{e(q(r))},[e,r]),t(Re,{configs:s})}function Ae({dispatch:e,configs:s,selectedChartStyleIndex:r,latencyTestUrl:l,apiConfig:a}){const[o,u]=xe(s),h=Oe(s);R(()=>{h.current!==s&&u(s),h.current=s},[s]);const z=g(()=>{e(F("apiConfig"))},[e]),f=g((n,i)=>{u({...o,[n]:i})},[o]),A=g(n=>{const i="allow-lan",p=n;f(i,p),e(b(a,{"allow-lan":p}))},[a,e,f]),m=g(({name:n,value:i})=>{switch(n){case"mode":case"log-level":f(n,i),e(b(a,{[n]:i})),n==="log-level"&&te({...a,logLevel:i});break;case"redir-port":case"socks-port":case"mixed-port":case"port":if(i!==""){const p=parseInt(i,10);if(p<0||p>65535)return}f(n,i);break;default:return}},[a,e,f]),E=g(n=>m(n.target),[m]),{selectChartStyleIndex:B,updateAppConfig:x}=J(),O=g(n=>{const i=n.target,{name:p,value:N}=i;switch(p){case"port":case"socks-port":case"mixed-port":case"redir-port":{const C=parseInt(N,10);if(C<0||C>65535)return;e(b(a,{[p]:C}));break}case"latencyTestUrl":{x(p,N);break}default:throw new Error(`unknown input name ${p}`)}},[a,e,x]),D=Ie(()=>{const n=o.mode;return typeof n=="string"&&n[0].toUpperCase()+n.slice(1)},[o.mode]),{t:v,i18n:I}=K();return c("div",{children:[t(Q,{title:v("Config")}),c("div",{className:d.root,children:[Pe.map(n=>o[n.key]!==void 0?c("div",{children:[t("div",{className:d.label,children:n.label}),t(ie,{name:n.key,value:o[n.key],onChange:E,onBlur:O})]},n.key):null),c("div",{children:[t("div",{className:d.label,children:"Mode"}),t(w,{options:Te,selected:D,onChange:n=>m({name:"mode",value:n.target.value})})]}),c("div",{children:[t("div",{className:d.label,children:"Log Level"}),t(w,{options:Le,selected:o["log-level"],onChange:n=>m({name:"log-level",value:n.target.value})})]}),c("div",{children:[t("div",{className:d.label,children:"Allow LAN"}),t("div",{className:d.wrapSwitch,children:t(X,{name:"allow-lan",checked:o["allow-lan"],onChange:A})})]})]}),t("div",{className:d.sep,children:t("div",{})}),c("div",{className:d.section,children:[c("div",{children:[t("div",{className:d.label,children:v("latency_test_url")}),t(de,{name:"latencyTestUrl",type:"text",value:l,onBlur:O})]}),c("div",{children:[t("div",{className:d.label,children:v("lang")}),t("div",{children:t(w,{options:je,selected:I.language,onChange:n=>I.changeLanguage(n.target.value)})})]}),c("div",{children:[t("div",{className:d.label,children:v("chart_style")}),t(Ce,{OptionComponent:_e,optionPropsList:Ne,selectedIndex:r,onChange:B})]}),c("div",{children:[t("div",{className:d.label,children:"Action"}),t(Y,{start:t(oe,{size:16}),label:"Switch backend",onClick:z})]})]})]})}export{Ue as default};
