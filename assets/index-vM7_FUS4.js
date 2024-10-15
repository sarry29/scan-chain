import{r as s,j as e}from"./react-BZ-WpmUX.js";import{c as Ee}from"./react-dom-DtG14WgU.js";import{L as U,N as B,c as Se,R as Re}from"./react-router-dom-DGOIWax0.js";import{C as _e,P as Ie}from"./@solana-C4uT6Dbw.js";import{N as z,A as ae}from"./alchemy-sdk-mGyaJ3EJ.js";import{a as De}from"./axios-CCb-kr4I.js";import{O as Te,d as ke,f as Oe,g as R}from"./react-router-nDmqOZXp.js";import{q as J}from"./@splinetool-BcGSlMHz.js";import"./@ethersproject-w92F1kWw.js";import"./js-sha3-Cqo6AZZz.js";import"./bn.js-BUi-eOe1.js";import"./hash.js-DvWU5-4j.js";import"./minimalistic-assert-DDtZfRm3.js";import"./inherits-BlmhoU4v.js";import"./bech32-BsO5QpzB.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run--NbqtF80.js";import"./buffer-Ce5O-hDk.js";import"./base64-js-D0UyVEDn.js";import"./ieee754-DSYfm7We.js";import"./@noble-CqNZeO14.js";import"./bs58-D21jO5-q.js";import"./base-x-D0k9IrDV.js";import"./safe-buffer-Bb2uIq0F.js";import"./borsh-CS5d1WFI.js";import"./text-encoding-utf-8-CsV-buPx.js";import"./bigint-buffer-BNJRNhsg.js";import"./superstruct-ChmvbrAv.js";import"./jayson-B0kYyBvL.js";import"./uuid-DnmYEDjT.js";import"./rpc-websockets-DFyPd71n.js";import"./eventemitter3-C8r-TI6f.js";import"./sturdy-websocket-Bpjngt07.js";import"./lodash.debounce-CevAiRPT.js";import"./react-merge-refs-Bf2qc8Rt.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function l(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=l(r);fetch(r.href,n)}})();const re=()=>{const[a,c]=s.useState("0xce6f9E922CB469b9C6fB907eCc1AB3C50bEfacAe"),[l,i]=s.useState([]),[r,n]=s.useState(!1),[m,N]=s.useState(""),I=async()=>{if(!a){N("Please enter a wallet address.");return}n(!0),N(""),i([]);try{const h=await new(void 0).JsonRpcProvider("https://lb.drpc.org/ogrpc?network=arbitrum&dkey=AoWvJ_9ogkO0iL5yreCBUHeN_TV5h6AR76lHOpXEh2H0").getHistory(a);i(h)}catch(g){N("Error fetching transactions: "+g.message)}finally{n(!1)}};return e.jsxs("div",{children:[e.jsx("h1",{children:"Arbitrum Wallet Transactions"}),e.jsx("input",{type:"text",placeholder:"Enter Wallet Address",value:a,onChange:g=>c(g.target.value)}),e.jsx("button",{onClick:I,children:"Fetch Transactions"}),r&&e.jsx("p",{children:"Loading..."}),m&&e.jsx("p",{style:{color:"red"},children:m}),e.jsx("ul",{children:l.map((g,h)=>e.jsx("li",{children:e.jsx("a",{href:`https://arbiscan.io/tx/${g.hash}`,target:"_blank",rel:"noopener noreferrer",children:g.hash})},g.hash))})]})},ne=()=>{const[a,c]=s.useState("8ZM8Xf7ZsQXK3aeFLMZeFwQuUBMMSX1Wd1rrCRohEgty"),[l,i]=s.useState([]),[r,n]=s.useState(!1),[m,N]=s.useState(""),I="https://mainnet.helius-rpc.com/?api-key=1af35791-7629-49f2-9963-2d46d46f6d03",g=async()=>{if(!a){N("Please enter a wallet address.");return}n(!0),N(""),i([]);const h=new _e(I),C=new Ie(a);try{const E=await h.getSignaturesForAddress(C,{limit:10});console.log("hello - 4",E);const H=await Promise.all(E.map(D=>h.getTransaction(D.signature)));i(H.filter(D=>D!==null))}catch(E){N("Error fetching transactions: "+E.message)}finally{n(!1)}};return e.jsxs("div",{children:[e.jsx("h1",{children:"Solana Wallet Transactions"}),e.jsx("input",{type:"text",placeholder:"Enter Wallet Address",value:a,onChange:h=>c(h.target.value)}),e.jsx("button",{onClick:g,children:"Fetch Transactions"}),r&&e.jsx("p",{children:"Loading..."}),m&&e.jsx("p",{style:{color:"red"},children:m}),e.jsx("ul",{children:l.map((h,C)=>e.jsx("li",{children:e.jsx("a",{href:`https://explorer.solana.com/tx/${h.transaction.signatures[0]}`,target:"_blank",rel:"noopener noreferrer",children:h.transaction.signatures[0]})},C))})]})};async function Qe(a,c){const l="0x1E6E8695FAb3Eb382534915eA8d7Cc1D1994B152";a.network=z.MATIC_MAINNET;let r=await new ae(a).core.getAssetTransfers({fromBlock:"0x0",fromAddress:c,toAddress:l,excludeZeroValue:!0,category:["erc721","erc1155"]});console.log("POLYGON | MATIC - ",r)}async function Pe(a,c){a.network=z.ETH_MAINNET;let i=await new ae(a).core.getAssetTransfers({fromBlock:"0x0",fromAddress:c,category:["erc721","external","erc20"]});console.log("ETHEREUM - ",i)}const oe=()=>{const[a,c]=s.useState("0xce6f9E922CB469b9C6fB907eCc1AB3C50bEfacAe");s.useState(z.MATIC_MAINNET);const[l,i]=s.useState([]),[r,n]=s.useState(!1),[m,N]=s.useState(""),g={apiKey:"2gOC9WTl7zre4Gy3RTmzCMyhIEdiNeG-"},h=async C=>{if(!a){N("Please enter a wallet address.");return}Qe(g,a),Pe(g,a),n(!0),N(""),i([])};return e.jsxs("div",{children:[e.jsx("h2",{children:"Ethereum Address Transactions"}),e.jsx("input",{type:"text",value:a,onChange:C=>c(C.target.value)}),e.jsx("button",{className:"btn btn-primary",onClick:h,children:"Fetch Transactions"}),e.jsx("br",{}),r&&e.jsx("p",{style:{color:"red"},children:"Loading..."}),m&&e.jsx("p",{style:{color:"red"},children:m}),e.jsx("ul",{children:l.map((C,E)=>e.jsx("li",{children:console.log(C)},E))})]})},Le="VDHDSWE2ZE23VZHZYV1FCI5NZMYYUWMNF6",le=()=>{const[a,c]=s.useState([]),[l,i]=s.useState(""),r=async()=>{if(!l)return;const n=await De.get("https://api.polygonscan.com/api",{params:{module:"account",action:"txlist",address:l,startblock:0,endblock:99999999,sort:"asc",apikey:Le}});n.data.status==="1"?c(n.data.result):console.error("Error fetching transactions:",n.data.message)};return s.useEffect(()=>{r()},[l]),e.jsxs("div",{children:[e.jsx("h1",{children:"Polygon Transactions"}),e.jsx("input",{type:"text",placeholder:"Enter Polygon Address",value:l,onChange:n=>i(n.target.value)}),e.jsx("button",{onClick:r,children:"Fetch Transactions"}),e.jsx("ul",{children:a.map(n=>e.jsxs("li",{children:[e.jsx("a",{href:`https://polygonscan.com/tx/${n.hash}`,target:"_blank",rel:"noopener noreferrer",children:n.hash})," - ",n.value," MATIC"]},n.hash))})]})},$e={"analytics-board":"_analytics-board_lqj8d_1"},Fe=()=>e.jsxs("div",{className:"w-100 text-start py-3",children:[e.jsx(U,{className:"me-4 fs-6",style:{textDecoration:"none",color:"#979797"},to:"/",children:"HOME"}),e.jsx("span",{className:"me-4 fs-6",style:{textDecoration:"none",color:"#979797"},children:">"}),e.jsx(U,{className:"me-4 fs-6",style:{textDecoration:"none",color:"#979797"},to:"/analytics",children:"ANALYTICS"})]}),ee=({chainName:a,walletAddress:c,setWalletAddress:l})=>e.jsxs("div",{className:"shadow rounded-3 text-light mb-3",children:[e.jsxs("label",{style:{width:"150px"},className:"me-3",htmlFor:a,children:[a," Wallet Address:"," "]}),e.jsx("input",{id:a,value:c,style:{width:"300px"},onClick:i=>l(i.target.value),placeholder:"Enter wallet address"})]}),We=()=>{const[a,c]=s.useState(""),[l,i]=s.useState(""),r=()=>{};return e.jsx("section",{className:`${$e["analytics-board"]} pt-3 pb-5`,children:e.jsxs("div",{className:"container",children:[e.jsx(Fe,{}),e.jsx("h1",{children:"Analytics"}),e.jsx(ee,{chainName:"Ethereum",walletAddress:a,setWalletAddress:c}),e.jsx(ee,{chainName:"Solana",walletAddress:l,setWalletAddress:i}),e.jsx("button",{className:"btn btn-primary ms-3 py-1",onClick:r,children:"Submit"}),e.jsx(oe,{}),e.jsx(ne,{}),e.jsx(re,{}),e.jsx(le,{})]})})},te={"border-bottom-grey":"_border-bottom-grey_10ch6_1","header-container":"_header-container_10ch6_5"},Me="/assets/scanchain-CaAS3lAT.png";function Be(){return e.jsx("header",{className:`${te["border-bottom-grey"]} position-sticky top-0 shadow`,style:{background:"#030404",top:"0px",zIndex:"100001"},children:e.jsxs("div",{className:`${te["header-container"]} container d-flex justify-content-center`,children:[e.jsx(B,{to:"/",className:"me-4",children:e.jsxs("div",{className:"d-flex gap-1",children:[e.jsx("img",{src:Me,width:"50",height:"50",alt:"Scanchain Logo"}),e.jsx("p",{className:"my-auto text-light",children:"SCANCHAIN"})]})}),e.jsxs("div",{className:"",children:[e.jsx(B,{to:"/",className:({isActive:a})=>`${a?"fw-bolder text-light":"fw-normal text-secondary"} me-4`,children:"Home"}),e.jsx(B,{to:"/qr-generator",className:({isActive:a})=>`${a?"fw-bolder text-light":"fw-normal text-secondary"} me-4`,children:"QR Generator"}),e.jsx(B,{to:"/analytics",className:({isActive:a})=>`${a?"fw-bolder text-light":"fw-normal text-secondary"} me-4`,children:"Analytics"})]})]})})}const se={"border-bottom-grey":"_border-bottom-grey_o3um7_1","footer-container":"_footer-container_o3um7_5"};function Ue(){return e.jsx("footer",{className:`${se["border-bottom-grey"]} ${se["footer-container"]} shadow text-light w-100`,children:e.jsxs("p",{children:["@",new Date().getFullYear()," | Created By Rabdeep Singh Kharbanda"]})})}function He(){return e.jsxs(e.Fragment,{children:[e.jsx(Be,{}),e.jsx(Te,{}),e.jsx(Ue,{})]})}const qe="_card_1a8jc_21",j={"color-grey":"_color-grey_1a8jc_1","color-darkblue":"_color-darkblue_1a8jc_5","bg-darkblue":"_bg-darkblue_1a8jc_9","background-grey":"_background-grey_1a8jc_13","bg-secondary-own":"_bg-secondary-own_1a8jc_17",card:qe,"hero-fold":"_hero-fold_1a8jc_28"};function Ge(){const a=()=>e.jsxs("section",{className:`${j["hero-fold"]}`,style:{background:"#0B0A0B"},children:[e.jsxs("div",{className:"text-center text-light w-100 pt-5 px-5",children:[e.jsx("h1",{children:"Unlock Seamless Crypto Payments with Scan Chain using Uniqode Platform"}),e.jsx("h3",{className:"py-5",children:"Your AI-driven solution for personalized QR code generation and transaction management."}),e.jsx("a",{href:"/qr-generator",children:e.jsx("button",{className:"btn btn-primary py-2 px-5",children:"Get Started Now"})})]}),e.jsx("div",{className:"m-auto w-100",children:e.jsx(J,{scene:"https://prod.spline.design/IipS6Xglzvc0fN31/scene.splinecode"})})]}),c=()=>e.jsxs("section",{className:`container ${j["hero-fold"]}`,children:[e.jsx("h2",{className:"py-5 mb-3 text-center",children:"Feature ScanChain Has: "}),e.jsxs("div",{className:"d-flex justify-content-center gap-3 flex-wrap",children:[e.jsxs("div",{className:`border bg-opacity-25 rounded px-3 py-3 mt-7 ${j["bg-secondary-own"]} ${j.card}`,children:[e.jsx("h4",{children:"AI-Enhanced Customization:"}),e.jsx("p",{className:"mb-0 pb-0",children:"Tailor your QR codes with personalized designs and color palettes suggested by our machine learning algorithms."})]}),e.jsxs("div",{className:`border bg-opacity-25 rounded px-3 py-3 mt-7 ${j["bg-secondary-own"]} ${j.card}`,children:[e.jsx("h4",{children:"Multi-Blockchain Support:"}),e.jsx("p",{className:"mb-0 pb-0",children:"Start with Solana and easily transition to other blockchains as we expand, ensuring versatility for all your crypto needs."})]}),e.jsxs("div",{className:`border bg-opacity-25 rounded px-3 py-3 mt-7 ${j["bg-secondary-own"]} ${j.card}`,children:[e.jsx("h4",{children:"Dynamic QR Codes:"}),e.jsx("p",{className:"mb-0 pb-0",children:"Create QR codes that can be updated in real-time, so you never have to worry about changing wallet addresses or payment details.."})]}),e.jsxs("div",{className:`border bg-opacity-25 rounded px-3 py-3 mt-7 ${j["bg-secondary-own"]} ${j.card}`,children:[e.jsx("h4",{children:"Real-Time Transaction Dashboard:"}),e.jsx("p",{className:"mb-0 pb-0",children:"Monitor your incoming and outgoing transactions effortlessly with our intuitive dashboard, powered by Web 3.0 APIs.."})]}),e.jsxs("div",{className:`border bg-opacity-25 rounded px-3 py-3 mt-7 ${j["bg-secondary-own"]} ${j.card}`,children:[e.jsx("h4",{children:"Auto Design V2 : "}),e.jsx("p",{className:"mb-0 pb-0",children:"Integrate auto design v2 while creating qr code"})]})]})]}),l=()=>e.jsx("section",{className:`${j[""]}`,style:{background:"#030404",paddingBottom:"100px",paddingTop:"100px"},children:e.jsxs("div",{className:"text-light",children:[e.jsxs("div",{style:{width:"100%"},className:"container py-5 mb-5",children:[e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Smart Alerts and Insights"}),e.jsx("p",{children:"Stay informed with AI-driven notifications for important activities, such as incoming transactions, to enhance your engagement and decision-making."})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Easy Sharing Options"}),e.jsx("p",{children:"Effortlessly share your QR codes across social media, email, or messaging apps, and export in multiple formats (PNG) for any occasion."})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mt-5",children:"Call to Action"}),e.jsx("p",{children:"Ready to revolutionize your crypto experience?"}),e.jsx("a",{href:"/qr-generator",children:e.jsx("button",{className:"btn btn-primary",children:"Get Started Today!"})})]})]}),e.jsx("div",{style:{width:"100%"},children:e.jsx(J,{scene:"https://prod.spline.design/RzVprxhPPXsSMn9f/scene.splinecode"})})]})});return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),e.jsx(c,{}),e.jsx(l,{})]})}const Ye="_slide_1sxy0_1",ze="_move_1sxy0_1",_={"qr-generator-page":"_qr-generator-page_1sxy0_1",slide:Ye,move:ze,"bg-modal":"_bg-modal_1sxy0_7","btn-opacity":"_btn-opacity_1sxy0_16","opacity-0":"_opacity-0_1sxy0_20","background-blue":"_background-blue_1sxy0_24","preview-btn":"_preview-btn_1sxy0_36"};function Ke(){const[a,c]=s.useState(!1),[l,i]=s.useState(""),[r,n]=s.useState("https://static.uniqode.com/assets/img/qrcg-img/qrcg-sample.png"),[m,N]=s.useState("https://static.uniqode.com/assets/img/qrcg-img/qrcg-sample.png"),[I,g]=s.useState("https://static.uniqode.com/assets/img/qrcg-img/qrcg-sample.png"),[h,C]=s.useState(null),[E,H]=s.useState(null),[D,ce]=s.useState(null),[$,ie]=s.useState(null),[F,de]=s.useState(null),[W,me]=s.useState(null),[q,ue]=s.useState(null),[he,pe]=s.useState(""),[ge,xe]=s.useState(""),[K,V]=s.useState(!1),fe=async(t,x)=>{const u="https://mocki.io/v1/df80b8b8-f12f-4df4-8e66-8c4cd988fa37";try{const f=await(await fetch(`${u}`)).json();ue(f)}catch(b){console.error(b)}},G=async(t,x)=>{if(t==null)return;const u="https://api.uniqode.com/api/2.0",y={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token 08ddda7aabcbecfa54b29f6d032d7d289eb241b5"},body:JSON.stringify({name:"Custom URL",organization:"1697",qr_type:2,campaign:{content_type:1,custom_url:t.url},location_enabled:!1,attributes:{color:t.color,colorDark:t.colorDark,margin:80,isVCard:!1,dotScale:1,frameText:"SCAN ME",logoImage:"",logoScale:.19949999999999998,logoWidth:0,colorLight:t.colorLight,frameColor:t.frameColor,frameStyle:t.frameStyle,logoHeight:0,logoMargin:10,dataPattern:t.dataPattern,rectangular:!1,eyeBallColor:t.eyeBallColor,eyeBallShape:t.eyeBallShape,gradientType:"radial",eyeFrameColor:t.eyeFrameColor,eyeFrameShape:t.eyeFrameShape,frameTextColor:t.frameTextColor,logoBackground:!0,backgroundColor:"#ffffff",backgroundImage:""}})};try{const A=await(await fetch(`${u}/qrcodes/`,y)).json();x(A)}catch(o){console.error("Error creating QR code:",o)}},Y=async(t,x)=>{if(t==null)return;const u="https://api.uniqode.com/api/2.0",f={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token 08ddda7aabcbecfa54b29f6d032d7d289eb241b5"}};try{const o=await(await fetch(`${u}/qrcodes/${t}/download/?size=1024&error_correction_level=5&canvas_type=png`,f)).json();console.log("inside download",o),x(o)}catch(y){console.error("ERROR ON FETCHING QR CODE USING ID",y)}};s.useEffect(()=>{K&&fe()},[K]);function w(t){const x=Math.floor(Math.random()*t.length);return t[x]}s.useEffect(()=>{if(!q)return;if(!l){console.error("Enter Wallet address");return}const t=q.body.split(" "),x=`${window.location.origin}/copy-to-clipboard?wallet-address=${l}`,u=["square","circle","smooth-round","kite","thin-square","left-diamond","right-diamond","smooth-sharp"],b=["rounded","square","circle","left-diamond","right-diamond","left-leaf","right-leaf"],f=["rounded","square","left-leaf","right-leaf","circle"],y=["balloon-bottom","box-bottom","banner-top","box-top","balloon-top","circular","text-only","focus"];for(let o=0;o<3;o++){const A={url:x,color:w(t),colorDark:w(t),colorLight:w(t),frameColor:w(t),eyeBallColor:w(t),eyeFrameColor:w(t),frameTextColor:w(t),dataPattern:w(u),eyeBallShape:w(b),eyeFrameShape:w(f),frameStyle:w(y)};o===0&&G(A,C),o===1&&G(A,H),o===2&&G(A,ce)}V(!1)},[q]),s.useEffect(()=>{if(h==null)return;const t=h||null;t&&(console.log("QR Code ID:",t.id),Y(t.id,ie))},[h]),s.useEffect(()=>{if(E==null)return;const t=E||null;t!==null&&(console.log("QR Code 2 ID:",t.id),Y(t.id,de))},[E]),s.useEffect(()=>{if(D==null)return;const t=D||null;t!==null&&(console.log("QR Code 2 ID:",t.id),Y(t.id,me))},[D]),s.useEffect(()=>{$?(console.log("QR DOWNLOAD 1 - ",$),n($.urls.png)):console.error("QR Download Data is still null.")},[$]),s.useEffect(()=>{F?(console.log("QR DOWNLOAD 2 - ",F),N(F.urls.png)):console.error("QR Download Data is still null.")},[F]),s.useEffect(()=>{W?(console.log("QR DOWNLOAD 3 - ",W),g(W.urls.png)):console.error("QR Download Data is still null.")},[W]);const ye=()=>{const[t,x]=s.useState(l),[u,b]=s.useState(he),[f,y]=s.useState(ge),o=()=>{c(!0)},A=(d,O)=>{if(d.preventDefault(),i(t),!O||O==""||O==""){console.error("Wallet Address is Empty"),alert("Wallet Address is Empty");return}V(!0),pe(u),xe(f)},k=d=>{b(d)},T=d=>{y(d)};return e.jsxs("form",{className:"mt-4",children:[e.jsxs("div",{className:"form-outline mb-4","data-mdb-input-init":!0,children:[e.jsx("input",{placeholder:"enter valid wallet address",type:"text",id:"wallet-address",className:"form-control",value:t,onChange:d=>x(d.target.value)}),e.jsxs("label",{className:"form-label text-light d-flex mt-3",htmlFor:"wallet-address",children:[e.jsx("p",{className:"me-3 my-auto",children:"Add your Wallet Address"}),e.jsxs("div",{className:"d-flex",children:[e.jsx("p",{className:"text-light my-auto",children:"OR (Scan or upload your wallet address image)"}),e.jsx("button",{className:"btn btn-primary ms-4",onClick:()=>o(),children:"CLICK HERE"})]})]})]}),e.jsx("div",{className:"form-outline mb-4","data-mdb-input-init":!0,children:e.jsx("textarea",{placeholder:"AI prompt for your personalized QR Code",className:"form-control",value:u,onChange:d=>k(d.target.value)})}),e.jsx("div",{className:"form-outline mb-4","data-mdb-input-init":!0,children:e.jsx("textarea",{placeholder:"What Do You Do?",className:"form-control",value:f,onChange:d=>T(d.target.value)})}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-block mb-4",onClick:d=>A(d,t),children:"Generate QR Code"})]})},be=()=>{const[t,x]=s.useState(!0),[u,b]=s.useState(""),f=s.useRef(null),y=s.useRef(null),o=s.useRef(null),A=s.useRef(null),k=s.useRef(null);s.useEffect(()=>{t?y.current.classList.remove("d-none"):y.current.classList.add("d-none")},[t]);const T=()=>{s.useEffect(()=>{navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(p=>{o.current&&(o.current.srcObject=p,o.current.addEventListener("loadedmetadata",()=>{o.current.play(),A.current.classList.add("d-none"),y.current.background="transparent",requestAnimationFrame(Q)}))}).catch(p=>{A.current.classList.remove("d-none"),console.error("Error accessing camera: ",p)})},[]);const Q=()=>{const S=o.current,p=k.current,M=p.getContext("2d");if(S&&S.readyState===S.HAVE_ENOUGH_DATA&&t){p.width=S.videoWidth,p.height=S.videoHeight,M.drawImage(S,0,0,p.width,p.height);const v=M.getImageData(0,0,p.width,p.height),P=jsQR(v.data,p.width,p.height);P&&(b(P.data),x(!1))}requestAnimationFrame(Q)}},d=()=>{b(""),x(!0),T()};T();const O=s.useRef(null),[L,Ae]=s.useState(""),we=Q=>{const S=Q.target.files[0];if(S){const p=new FileReader;p.onload=function(M){const v=new Image;v.src=M.target.result,v.onload=function(){const P=O.current;P.width=v.width,P.height=v.height;const Z=P.getContext("2d");Z.drawImage(v,0,0);const Ce=Z.getImageData(0,0,v.width,v.height),X=jsQR(Ce.data,v.width,v.height);X&&Ae(`${X.data}`)}},p.readAsDataURL(S)}},ve=()=>{t?L&&(localStorage.setItem("walletAddress",L),i(L)):u&&(localStorage.setItem("walletAddress",u),i(u)),c(!1)};return e.jsx("div",{className:`${_["bg-modal"]}`,children:e.jsxs("div",{className:"container bg-light p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("p",{className:"my-auto",children:"Scan your QR Code"}),e.jsx("button",{className:"btn ",onClick:()=>c(!1),children:"x"})]}),e.jsxs("div",{children:[e.jsxs("div",{ref:y,className:"w-100 position-relative",style:{background:"#F3F3F3"},children:[e.jsx("video",{ref:o,className:"w-100",autoPlay:!0}),e.jsx("div",{ref:A,className:"position-absolute top-50 start-50 translate-middle fw-400",children:"Please grant access to the webcam..."})]}),e.jsx("canvas",{ref:k,id:"canvas",style:{display:"none"}}),e.jsxs("div",{id:"scan-result",className:`${t?"d-none":"d-block"} pb-11 text-center`,children:[e.jsx("button",{ref:f,className:"scan-again btn btn-outline-primary mb-6",onClick:()=>d(),children:"SCAN AGAIN"}),e.jsx("p",{className:"text-dark text-underline",children:u})]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("h4",{className:"text-center",children:"OR"}),e.jsx("p",{children:"Upload an Image to Scan for QR Code"}),e.jsx("input",{type:"file",id:"imageInput",accept:"image/*",onChange:Q=>we(Q)}),e.jsx("label",{htmlFor:"Upload QR Code"}),e.jsx("br",{}),e.jsx("canvas",{ref:O,id:"canvas-file",className:"d-none"}),e.jsx("p",{id:"qrResult",children:L?`QR Code Data: ${L}`:"No Data Present"})]}),e.jsx("div",{className:"w-100 text-center",children:e.jsx("button",{className:"btn btn-primary px-5",onClick:()=>ve(),children:"Submit"})})]})})},je=()=>{const[t,x]=s.useState({1:!0,2:!0,3:!0}),[u,b]=s.useState(!1);s.useEffect(()=>{console.log(t)},[t]);const f=o=>{b(!0),x(()=>({1:o===1,2:o===2,3:o===3}))},y=async()=>{try{let o="";if(console.log(t),!t[1]&&!t[2]&&!t[3]){alert("select any one qr code");return}t[1]&&(o=r),t[2]&&(o=m),t[3]&&(o=I);const k=await(await fetch(o)).blob(),T=window.URL.createObjectURL(k),d=document.createElement("a");d.href=T,d.download="ai-generated-qr-code.png",document.body.appendChild(d),d.click(),d.remove(),window.URL.revokeObjectURL(T)}catch(o){console.error("Error downloading the image:",o)}};return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-light text-center mb-3",children:"QR CODE PREVIEW"}),e.jsx("p",{className:"text-light text-center mb-5",children:"Select any one to go with"}),e.jsxs("div",{className:"m-auto text-center d-flex justify-content-between gap-2",children:[e.jsx("button",{className:`${_["preview-btn"]} ${_["btn-opacity"]} rounded-3 m-auto shadow p-5`,style:{display:"inline-flex",background:"rgba(255,255,255,0.33)",opacity:t[1]?"1":"0"},onClick:()=>f(1),children:e.jsx("img",{className:"m-auto",src:r,alt:"preview",height:300,width:250})}),e.jsx("button",{className:`${_["preview-btn"]} ${_["btn-opacity"]} rounded-3 m-auto shadow p-5`,style:{display:"inline-flex",background:"rgba(255,255,255,0.33)",opacity:t[2]?"1":"0"},onClick:()=>f(2),children:e.jsx("img",{className:"m-auto",src:m,alt:"preview",height:300,width:250})}),e.jsx("button",{className:`${_["preview-btn"]} ${_["btn-opacity"]} rounded-3 m-auto shadow p-5`,style:{display:"inline-flex",background:"rgba(255,255,255,0.33)",opacity:t[3]?"1":"0"},onClick:()=>f(3),children:e.jsx("img",{className:"m-auto",src:I,alt:"preview",height:300,width:250})})]}),e.jsx("div",{className:`${u?"d-flex":"d-none"} justify-content-center mt-5`,children:e.jsx("button",{className:"btn btn-primary ",onClick:y,children:"DOWNLOAD YOUR AI GENERATED QR CODECODE"})})]})},Ne=()=>e.jsxs("div",{className:"w-100 text-start py-3",children:[e.jsx(U,{className:"me-4 fs-6",style:{textDecoration:"none",color:"#979797"},to:"/",children:"HOME"}),e.jsx("span",{className:"me-4 fs-6",style:{textDecoration:"none",color:"#979797"},children:">"}),e.jsx(U,{className:"me-4 fs-6",style:{textDecoration:"none",color:"#979797"},to:"/qr-generator",children:"QR GENERATOR"})]});return e.jsxs("section",{className:`${_["background-blue"]} pt-3 pb-5`,children:[e.jsxs("div",{className:"container",children:[e.jsx(Ne,{}),e.jsxs("h1",{className:"text-center text-light",children:["ADD WALLET ADDRESS ",e.jsx("br",{}),"INSIDE YOUR OWN QR GENERATOR"]}),e.jsx(ye,{}),e.jsx(je,{})]}),a==!0&&e.jsx(be,{})]})}const Ve={"copy-to-clipboard":"_copy-to-clipboard_1h5qr_1"},Ze=()=>new URLSearchParams(ke().search);function Xe(){const[a,c]=s.useState(""),l=Ze(),[i,r]=s.useState(!1);s.useEffect(()=>{c(l.get("wallet-address"))},[]);const n=()=>{try{l.get("wallet-address")?r(!1):r(!0),navigator.clipboard.writeText(a)}catch(m){console.error("Failed to copy: ",m)}};return e.jsxs("div",{className:`${Ve["copy-to-clipboard"]} d-flex flex-column justify-content-center align-items-center`,children:[e.jsx("button",{className:"btn btn-primary",onClick:()=>n(),children:"COPY WALLET ADDRESS TO CLIPBOARD"}),i&&e.jsx("p",{className:"text-danger",children:"No Wallet Address Parameter"}),e.jsx("p",{className:"mt-3",children:"Use this Address and make transaction using any of our favourite crypto exchange"})]})}const Je=Se(Oe(e.jsxs(R,{path:"/",element:e.jsx(He,{}),children:[e.jsx(R,{path:"",element:e.jsx(Ge,{})}),e.jsx(R,{path:"qr-generator",element:e.jsx(Ke,{})}),e.jsx(R,{path:"copy-to-clipboard",element:e.jsx(Xe,{})}),e.jsxs(R,{path:"/analytics",element:e.jsx(We,{}),children:[e.jsx(R,{path:"solana",element:e.jsx(ne,{})}),e.jsx(R,{path:"ethereum",element:e.jsx(oe,{})}),e.jsx(R,{path:"arbitrum",element:e.jsx(re,{})}),e.jsx(R,{path:"polygon",element:e.jsx(le,{})})]})]})));Ee(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(Re,{router:Je})}));
