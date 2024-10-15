var l=Object.defineProperty;var f=(o,t,r)=>t in o?l(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var n=(o,t,r)=>f(o,typeof t!="symbol"?t+"":t,r);import{b as _}from"./buffer-Ce5O-hDk.js";import{E as d}from"./eventemitter3-C8r-TI6f.js";var p=class extends d{constructor(t,r,e){super();n(this,"socket");this.socket=new window.WebSocket(t,e),this.socket.onopen=()=>this.emit("open"),this.socket.onmessage=i=>this.emit("message",i.data),this.socket.onerror=i=>this.emit("error",i),this.socket.onclose=i=>{this.emit("close",i.code,i.reason)}}send(t,r,e){const i=e||r;try{this.socket.send(t),i()}catch(s){i(s)}}close(t,r){this.socket.close(t,r)}addEventListener(t,r,e){this.socket.addEventListener(t,r,e)}};function b(o,t){return new p(o,t)}var k=class{encode(o){return JSON.stringify(o)}decode(o){return JSON.parse(o)}},E=class extends d{constructor(t,r="ws://localhost:8080",{autoconnect:e=!0,reconnect:i=!0,reconnect_interval:s=1e3,max_reconnects:c=5,...h}={},u,a){super();n(this,"address");n(this,"rpc_id");n(this,"queue");n(this,"options");n(this,"autoconnect");n(this,"ready");n(this,"reconnect");n(this,"reconnect_timer_id");n(this,"reconnect_interval");n(this,"max_reconnects");n(this,"rest_options");n(this,"current_reconnects");n(this,"generate_request_id");n(this,"socket");n(this,"webSocketFactory");n(this,"dataPack");this.webSocketFactory=t,this.queue={},this.rpc_id=0,this.address=r,this.autoconnect=e,this.ready=!1,this.reconnect=i,this.reconnect_timer_id=void 0,this.reconnect_interval=s,this.max_reconnects=c,this.rest_options=h,this.current_reconnects=0,this.generate_request_id=u||(()=>++this.rpc_id),a?this.dataPack=a:this.dataPack=new k,this.autoconnect&&this._connect(this.address,{autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects,...this.rest_options})}connect(){this.socket||this._connect(this.address,{autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects,...this.rest_options})}call(t,r,e,i){return!i&&typeof e=="object"&&(i=e,e=null),new Promise((s,c)=>{if(!this.ready)return c(new Error("socket not ready"));const h=this.generate_request_id(t,r),u={jsonrpc:"2.0",method:t,params:r||void 0,id:h};this.socket.send(this.dataPack.encode(u),i,a=>{if(a)return c(a);this.queue[h]={promise:[s,c]},e&&(this.queue[h].timeout=setTimeout(()=>{delete this.queue[h],c(new Error("reply timeout"))},e))})})}async login(t){const r=await this.call("rpc.login",t);if(!r)throw new Error("authentication failed");return r}async listMethods(){return await this.call("__listMethods")}notify(t,r){return new Promise((e,i)=>{if(!this.ready)return i(new Error("socket not ready"));const s={jsonrpc:"2.0",method:t,params:r};this.socket.send(this.dataPack.encode(s),c=>{if(c)return i(c);e()})})}async subscribe(t){typeof t=="string"&&(t=[t]);const r=await this.call("rpc.on",t);if(typeof t=="string"&&r[t]!=="ok")throw new Error("Failed subscribing to an event '"+t+"' with: "+r[t]);return r}async unsubscribe(t){typeof t=="string"&&(t=[t]);const r=await this.call("rpc.off",t);if(typeof t=="string"&&r[t]!=="ok")throw new Error("Failed unsubscribing from an event with: "+r);return r}close(t,r){this.socket.close(t||1e3,r)}setAutoReconnect(t){this.reconnect=t}setReconnectInterval(t){this.reconnect_interval=t}setMaxReconnects(t){this.max_reconnects=t}_connect(t,r){clearTimeout(this.reconnect_timer_id),this.socket=this.webSocketFactory(t,r),this.socket.addEventListener("open",()=>{this.ready=!0,this.emit("open"),this.current_reconnects=0}),this.socket.addEventListener("message",({data:e})=>{e instanceof ArrayBuffer&&(e=_.Buffer.from(e).toString());try{e=this.dataPack.decode(e)}catch{return}if(e.notification&&this.listeners(e.notification).length){if(!Object.keys(e.params).length)return this.emit(e.notification);const i=[e.notification];if(e.params.constructor===Object)i.push(e.params);else for(let s=0;s<e.params.length;s++)i.push(e.params[s]);return Promise.resolve().then(()=>{this.emit.apply(this,i)})}if(!this.queue[e.id])return e.method?Promise.resolve().then(()=>{this.emit(e.method,e==null?void 0:e.params)}):void 0;"error"in e=="result"in e&&this.queue[e.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),this.queue[e.id].timeout&&clearTimeout(this.queue[e.id].timeout),e.error?this.queue[e.id].promise[1](e.error):this.queue[e.id].promise[0](e.result),delete this.queue[e.id]}),this.socket.addEventListener("error",e=>this.emit("error",e)),this.socket.addEventListener("close",({code:e,reason:i})=>{this.ready&&setTimeout(()=>this.emit("close",e,i),0),this.ready=!1,this.socket=void 0,e!==1e3&&(this.current_reconnects++,this.reconnect&&(this.max_reconnects>this.current_reconnects||this.max_reconnects===0)&&(this.reconnect_timer_id=setTimeout(()=>this._connect(t,r),this.reconnect_interval)))})}};export{E as C,b as W};
