"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[507],{38285:(t,e,n)=>{n.d(e,{ro:()=>g,lb:()=>m})
var i=n(8651),s=n(88521),a=n(16140),r=n(30180),o=n(8142),c=n(48206)
function _(){const t=(0,c.x1)()
if(t){const e="internal_error";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),t.setStatus(e)}}var d=n(27448),p=n(21535)
function l(){const t=this.getScope()
if(t){const e=t.getSpan()
if(e)return{"sentry-trace":e.toTraceparent()}}return{}}function u(t,e,n){if(!(0,c.zu)(e))return t.sampled=!1,t
if(void 0!==t.sampled)return t.setMetadata({sampleRate:Number(t.sampled)}),t
let i
return"function"==typeof e.tracesSampler?(i=e.tracesSampler(n),t.setMetadata({sampleRate:Number(i)})):void 0!==n.parentSampled?i=n.parentSampled:(i=e.tracesSampleRate,t.setMetadata({sampleRate:Number(i)})),r=i,((0,a.i2)(r)||"number"!=typeof r&&"boolean"!=typeof r?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`),0):!(r<0||r>1)||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${r}.`),0))?i?(t.sampled=Math.random()<i,t.sampled?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`),t)):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] Discarding transaction because "+("function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)
var r}function h(t,e){const n=this.getClient(),i=n&&n.getOptions()||{},a=i.instrumenter||"sentry",r=t.instrumenter||"sentry"
a!==r&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.error(`A transaction was started with instrumenter=\`${r}\`, but the SDK is configured with the \`${a}\` instrumenter.\nThe transaction will not be sampled. Please use the ${a} instrumentation to start transactions.`),t.sampled=!1)
let o=new p.Y(t,this)
return o=u(o,i,{parentSampled:t.parentSampled,transactionContext:t,...e}),o.sampled&&o.initSpanRecorder(i._experiments&&i._experiments.maxSpans),o}function m(t,e,n,i,s,a,r){const o=t.getClient(),c=o&&o.getOptions()||{}
let _=new d.io(e,t,n,i,r,s)
return _=u(_,c,{parentSampled:e.parentSampled,transactionContext:e,...a}),_.sampled&&_.initSpanRecorder(c._experiments&&c._experiments.maxSpans),_}function g(){!function(){const t=(0,i.cu)()
t.__SENTRY__&&(t.__SENTRY__.extensions=t.__SENTRY__.extensions||{},t.__SENTRY__.extensions.startTransaction||(t.__SENTRY__.extensions.startTransaction=h),t.__SENTRY__.extensions.traceHeaders||(t.__SENTRY__.extensions.traceHeaders=l))}(),(0,r.KV)()&&function(){const e=(0,i.cu)()
if(!e.__SENTRY__)return
const n={mongodb:()=>new((0,r.l$)(t,"./integrations/node/mongo").Mongo),mongoose:()=>new((0,r.l$)(t,"./integrations/node/mongo").Mongo)({mongoose:!0}),mysql:()=>new((0,r.l$)(t,"./integrations/node/mysql").Mysql),pg:()=>new((0,r.l$)(t,"./integrations/node/postgres").Postgres)},s=Object.keys(n).filter((t=>!!(0,r.$y)(t))).map((t=>{try{return n[t]()}catch(t){return}})).filter((t=>t))
s.length>0&&(e.__SENTRY__.integrations=[...e.__SENTRY__.integrations||[],...s])}(),(0,o.o)("error",_),(0,o.o)("unhandledrejection",_)}t=n.hmd(t)},27448:(t,e,n)=>{n.d(e,{hd:()=>_,io:()=>p,mg:()=>c,nT:()=>o})
var i=n(88468),s=n(88521),a=n(20484),r=n(21535)
const o=1e3,c=3e4,_=5e3
class d extends a.gB{constructor(t,e,n,i){super(i),this._pushActivity=t,this._popActivity=e,this.transactionSpanId=n}add(t){t.spanId!==this.transactionSpanId&&(t.finish=e=>{t.endTimestamp="number"==typeof e?e:(0,i._I)(),this._popActivity(t.spanId)},void 0===t.endTimestamp&&this._pushActivity(t.spanId)),super.add(t)}}class p extends r.Y{__init(){this.activities={}}__init2(){this._heartbeatCounter=0}__init3(){this._finished=!1}__init4(){this._beforeFinishCallbacks=[]}constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:_,r=arguments.length>5&&void 0!==arguments[5]&&arguments[5]
super(t,e),this._idleHub=e,this._idleTimeout=n,this._finalTimeout=i,this._heartbeatInterval=a,this._onScope=r,p.prototype.__init.call(this),p.prototype.__init2.call(this),p.prototype.__init3.call(this),p.prototype.__init4.call(this),r&&(l(e),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),e.configureScope((t=>t.setSpan(this)))),this._startIdleTimeout(),setTimeout((()=>{this._finished||(this.setStatus("deadline_exceeded"),this.finish())}),this._finalTimeout)}finish(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i._I)()
if(this._finished=!0,this.activities={},this.spanRecorder){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] finishing IdleTransaction",new Date(1e3*t).toISOString(),this.op)
for(const e of this._beforeFinishCallbacks)e(this,t)
this.spanRecorder.spans=this.spanRecorder.spans.filter((e=>{if(e.spanId===this.spanId)return!0
e.endTimestamp||(e.endTimestamp=t,e.setStatus("cancelled"),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(e,void 0,2)))
const n=e.startTimestamp<t
return n||("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(e,void 0,2)),n})),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] flushing IdleTransaction")}else("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] No active IdleTransaction")
return this._onScope&&l(this._idleHub),super.finish(t)}registerBeforeFinishCallback(t){this._beforeFinishCallbacks.push(t)}initSpanRecorder(t){if(!this.spanRecorder){const e=t=>{this._finished||this._pushActivity(t)},n=t=>{this._finished||this._popActivity(t)}
this.spanRecorder=new d(e,n,this.spanId,t),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}_cancelIdleTimeout(){this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0)}_startIdleTimeout(t){this._cancelIdleTimeout(),this._idleTimeoutID=setTimeout((()=>{this._finished||0!==Object.keys(this.activities).length||this.finish(t)}),this._idleTimeout)}_pushActivity(t){this._cancelIdleTimeout(),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] pushActivity: ${t}`),this.activities[t]=!0,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(t){if(this.activities[t]&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] popActivity ${t}`),delete this.activities[t],("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){const t=(0,i._I)()+this._idleTimeout/1e3
this._startIdleTimeout(t)}}_beat(){if(this._finished)return
const t=Object.keys(this.activities).join("")
t===this._prevHeartbeatString?this._heartbeatCounter++:this._heartbeatCounter=1,this._prevHeartbeatString=t,this._heartbeatCounter>=3?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this.finish()):this._pingHeartbeat()}_pingHeartbeat(){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout((()=>{this._beat()}),this._heartbeatInterval)}}function l(t){const e=t.getScope()
e&&e.getTransaction()&&e.setSpan(void 0)}},42507:(t,e,n)=>{n.r(e),n.d(e,{BROWSER_TRACING_INTEGRATION_ID:()=>it,BrowserTracing:()=>at,IdleTransaction:()=>U.io,Integrations:()=>i,Span:()=>ct.Dr,SpanStatus:()=>ot,TRACEPARENT_REGEXP:()=>B.K,Transaction:()=>_t.Y,addExtensionMethods:()=>s.ro,defaultRequestInstrumentationOptions:()=>et,extractTraceparentData:()=>B.q,getActiveTransaction:()=>Y.x1,hasTracingEnabled:()=>Y.zu,instrumentOutgoingRequests:()=>nt,spanStatusfromHttpCode:()=>ct.Zd,startIdleTransaction:()=>s.lb,stripUrlQueryAndFragment:()=>o.rt})
var i={}
n.r(i),n.d(i,{Apollo:()=>N,BrowserTracing:()=>at,Express:()=>p,GraphQL:()=>b,Mongo:()=>v,Mysql:()=>T,Postgres:()=>f,Prisma:()=>R})
var s=n(38285),a=n(2796),r=n(88521),o=n(72702),c=n(14205),_=n(16140)
function d(t){const e=(0,a.x)([t,"call",t=>t(),"access",t=>t.getClient,"call",t=>t(),"optionalAccess",t=>t.getOptions,"call",t=>t()])
return"sentry"!==((0,a.x)([e,"optionalAccess",t=>t.instrumenter])||"sentry")}class p{static __initStatic(){this.id="Express"}__init(){this.name=p.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
p.prototype.__init.call(this),this._router=t.router||t.app,this._methods=(Array.isArray(t.methods)?t.methods:[]).concat("use")}setupOnce(t,e){this._router?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Express Integration is skipped because of instrumenter configuration."):(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
e.forEach((e=>h(t,e)))}(this._router,this._methods),function(t){const e="settings"in t
e&&void 0===t._router&&t.lazyrouter&&t.lazyrouter()
const n=e?t._router:t
if(!n)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.debug("Routing instrumentation is currently only supported in Express 4."))
const i=Object.getPrototypeOf(n),s=i.process_params
i.process_params=function(t,e,n,i,r){n._reconstructedRoute||(n._reconstructedRoute="")
const{layerRoutePath:d,isRegex:p,isArray:l,numExtraSegments:u}=function(t){const e=(0,a.x)([t,"access",t=>t.route,"optionalAccess",t=>t.path]),n=(0,_.Kj)(e),i=Array.isArray(e)
if(!e)return{isRegex:n,isArray:i,numExtraSegments:0}
const s=i?Math.max(e.reduce(((t,e)=>t+(0,o.$A)(e.toString())),0)-(0,o.$A)(t.path||""),0):0,r=function(t,e){return t?e.map((t=>t.toString())).join(","):e&&e.toString()}(i,e)
return{layerRoutePath:r,isRegex:n,isArray:i,numExtraSegments:s}}(t);(d||p||l)&&(n._hasParameters=!0)
const h=(d||t.path||"").split("/").filter((t=>t.length>0&&(p||l||!t.includes("*")))).join("/")
if(h&&h.length>0&&(n._reconstructedRoute+=`/${h}${p?"/":""}`),(0,o.$A)(n.originalUrl||"")+u===(0,o.$A)(n._reconstructedRoute)){n._hasParameters||n._reconstructedRoute!==n.originalUrl&&(n._reconstructedRoute=n.originalUrl)
const t=i.__sentry_transaction
if(t&&"custom"!==t.metadata.source){const e=n._reconstructedRoute||"/"
t.setName(...(0,c.oA)(n,{path:!0,method:!0,customRoute:e}))}}return s.call(this,t,e,n,i,r)}}(this._router)):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("ExpressIntegration is missing an Express instance")}}function l(t,e){const n=t.length
switch(n){case 2:return function(n,i){const s=i.__sentry_transaction
if(s){const n=s.startChild({description:t.name,op:`middleware.express.${e}`})
i.once("finish",(()=>{n.finish()}))}return t.call(this,n,i)}
case 3:return function(n,i,s){const r=i.__sentry_transaction,o=(0,a.x)([r,"optionalAccess",t=>t.startChild,"call",n=>n({description:t.name,op:`middleware.express.${e}`})])
t.call(this,n,i,(function(){(0,a.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
s.call(this,...e)}))}
case 4:return function(n,i,s,r){const o=s.__sentry_transaction,c=(0,a.x)([o,"optionalAccess",t=>t.startChild,"call",n=>n({description:t.name,op:`middleware.express.${e}`})])
t.call(this,n,i,s,(function(){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
r.call(this,...e)}))}
default:throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)}}function u(t,e){return t.map((t=>"function"==typeof t?l(t,e):Array.isArray(t)?t.map((t=>"function"==typeof t?l(t,e):t)):t))}function h(t,e){const n=t[e]
return t[e]=function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s]
return n.call(this,...u(i,e))},t}p.__initStatic()
var m=n(30180),g=n(15834)
class f{static __initStatic(){this.id="Postgres"}__init(){this.name=f.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
f.prototype.__init.call(this),this._usePgNative=!!t.usePgNative}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Postgres Integration is skipped because of instrumenter configuration."))
const n=(0,m.$y)("pg")
if(!n)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Postgres Integration was unable to require `pg` package."))
if(this._usePgNative&&!(0,a.x)([n,"access",t=>t.native,"optionalAccess",t=>t.Client]))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Postgres Integration was unable to access 'pg-native' bindings."))
const{Client:i}=this._usePgNative?n.native:n;(0,g.hl)(i.prototype,"query",(function(t){return function(n,i,s){const r=e().getScope(),o=(0,a.x)([r,"optionalAccess",t=>t.getSpan,"call",t=>t()]),c=(0,a.x)([o,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof n?n:n.text,op:"db"})])
if("function"==typeof s)return t.call(this,n,i,(function(t,e){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),s(t,e)}))
if("function"==typeof i)return t.call(this,n,(function(t,e){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),i(t,e)}))
const d=void 0!==i?t.call(this,n,i):t.call(this,n)
return(0,_.J8)(d)?d.then((t=>((0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),d)}}))}}f.__initStatic()
class T{constructor(){T.prototype.__init.call(this)}static __initStatic(){this.id="Mysql"}__init(){this.name=T.id}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Mysql Integration is skipped because of instrumenter configuration."))
const n=(0,m.$y)("mysql/lib/Connection.js")
n?(0,g.hl)(n,"createQuery",(function(t){return function(n,i,s){const r=e().getScope(),o=(0,a.x)([r,"optionalAccess",t=>t.getSpan,"call",t=>t()]),c=(0,a.x)([o,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof n?n:n.sql,op:"db"})])
return"function"==typeof s?t.call(this,n,i,(function(t,e,n){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),s(t,e,n)})):"function"==typeof i?t.call(this,n,(function(t,e,n){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),i(t,e,n)})):t.call(this,n,i,s)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Mysql Integration was unable to require `mysql` package.")}}T.__initStatic()
const E=["aggregate","bulkWrite","countDocuments","createIndex","createIndexes","deleteMany","deleteOne","distinct","drop","dropIndex","dropIndexes","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndReplace","findOneAndUpdate","indexes","indexExists","indexInformation","initializeOrderedBulkOp","insertMany","insertOne","isCapped","mapReduce","options","parallelCollectionScan","rename","replaceOne","stats","updateMany","updateOne"],y={bulkWrite:["operations"],countDocuments:["query"],createIndex:["fieldOrSpec"],createIndexes:["indexSpecs"],deleteMany:["filter"],deleteOne:["filter"],distinct:["key","query"],dropIndex:["indexName"],find:["query"],findOne:["query"],findOneAndDelete:["filter"],findOneAndReplace:["filter","replacement"],findOneAndUpdate:["filter","update"],indexExists:["indexes"],insertMany:["docs"],insertOne:["doc"],mapReduce:["map","reduce"],rename:["newName"],replaceOne:["filter","doc"],updateMany:["filter","update"],updateOne:["filter","update"]}
function S(t){return t&&"object"==typeof t&&t.once&&"function"==typeof t.once}class v{static __initStatic(){this.id="Mongo"}__init(){this.name=v.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
v.prototype.__init.call(this),this._operations=Array.isArray(t.operations)?t.operations:E,this._describeOperations=!("describeOperations"in t)||t.describeOperations,this._useMongoose=!!t.useMongoose}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Mongo Integration is skipped because of instrumenter configuration."))
const n=this._useMongoose?"mongoose":"mongodb",i=(0,m.$y)(n)
i?this._instrumentOperations(i.Collection,this._operations,e):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error(`Mongo Integration was unable to require \`${n}\` package.`)}_instrumentOperations(t,e,n){e.forEach((e=>this._patchOperation(t,e,n)))}_patchOperation(t,e,n){if(!(e in t.prototype))return
const i=this._getSpanContextFromOperationArguments.bind(this);(0,g.hl)(t.prototype,e,(function(t){return function(){for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o]
const c=r[r.length-1],d=n().getScope(),p=(0,a.x)([d,"optionalAccess",t=>t.getSpan,"call",t=>t()])
if("function"!=typeof c||"mapReduce"===e&&2===r.length){const n=(0,a.x)([p,"optionalAccess",t=>t.startChild,"call",t=>t(i(this,e,r))]),s=t.call(this,...r)
if((0,_.J8)(s))return s.then((t=>((0,a.x)([n,"optionalAccess",t=>t.finish,"call",t=>t()]),t)))
if(S(s)){const e=s
try{e.once("close",(()=>{(0,a.x)([n,"optionalAccess",t=>t.finish,"call",t=>t()])}))}catch(t){(0,a.x)([n,"optionalAccess",t=>t.finish,"call",t=>t()])}return e}return(0,a.x)([n,"optionalAccess",t=>t.finish,"call",t=>t()]),s}const l=(0,a.x)([p,"optionalAccess",t=>t.startChild,"call",t=>t(i(this,e,r.slice(0,-1)))])
return t.call(this,...r.slice(0,-1),(function(t,e){(0,a.x)([l,"optionalAccess",t=>t.finish,"call",t=>t()]),c(t,e)}))}}))}_getSpanContextFromOperationArguments(t,e,n){const i={collectionName:t.collectionName,dbName:t.dbName,namespace:t.namespace},s={op:"db",description:e,data:i},a=y[e],r=Array.isArray(this._describeOperations)?this._describeOperations.includes(e):this._describeOperations
if(!a||!r)return s
try{if("mapReduce"===e){const[t,e]=n
i[a[0]]="string"==typeof t?t:t.name||"<anonymous>",i[a[1]]="string"==typeof e?e:e.name||"<anonymous>"}else for(let t=0;t<a.length;t++)i[a[t]]=JSON.stringify(n[t])}catch(t){}return s}}v.__initStatic()
class R{static __initStatic(){this.id="Prisma"}__init(){this.name=R.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var e
R.prototype.__init.call(this),(e=t.client)&&e.$use?this._client=t.client:("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(t.client)}`)}setupOnce(t,e){this._client?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Prisma Integration is skipped because of instrumenter configuration."):this._client.$use(((t,n)=>{const i=e().getScope(),s=(0,a.x)([i,"optionalAccess",t=>t.getSpan,"call",t=>t()]),r=t.action,o=t.model,c=(0,a.x)([s,"optionalAccess",t=>t.startChild,"call",t=>t({description:o?`${o} ${r}`:r,op:"db.sql.prisma"})]),d=n(t)
return(0,_.J8)(d)?d.then((t=>((0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),d)})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("PrismaIntegration is missing a Prisma Client Instance")}}R.__initStatic()
class b{constructor(){b.prototype.__init.call(this)}static __initStatic(){this.id="GraphQL"}__init(){this.name=b.id}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("GraphQL Integration is skipped because of instrumenter configuration."))
const n=(0,m.$y)("graphql/execution/execute.js")
n?(0,g.hl)(n,"execute",(function(t){return function(){const n=e().getScope(),i=(0,a.x)([n,"optionalAccess",t=>t.getSpan,"call",t=>t()]),s=(0,a.x)([i,"optionalAccess",t=>t.startChild,"call",t=>t({description:"execute",op:"graphql.execute"})]);(0,a.x)([n,"optionalAccess",t=>t.setSpan,"call",t=>t(s)])
for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c]
const d=t.call(this,...o)
return(0,_.J8)(d)?d.then((t=>((0,a.x)([s,"optionalAccess",t=>t.finish,"call",t=>t()]),(0,a.x)([n,"optionalAccess",t=>t.setSpan,"call",t=>t(i)]),t))):((0,a.x)([s,"optionalAccess",t=>t.finish,"call",t=>t()]),(0,a.x)([n,"optionalAccess",t=>t.setSpan,"call",t=>t(i)]),d)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("GraphQL Integration was unable to require graphql/execution package.")}}b.__initStatic()
var D=n(7209)
class N{constructor(){N.prototype.__init.call(this)}static __initStatic(){this.id="Apollo"}__init(){this.name=N.id}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Apollo Integration is skipped because of instrumenter configuration."))
const n=(0,m.$y)("apollo-server-core")
n?(0,g.hl)(n.ApolloServerBase.prototype,"constructSchema",(function(t){return function(){if(!this.config.resolvers)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&(this.config.schema?r.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property."):this.config.modules&&r.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."),r.kg.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")),t.call(this)
const n=(0,D.lE)(this.config.resolvers)
return this.config.resolvers=n.map((t=>(Object.keys(t).forEach((n=>{Object.keys(t[n]).forEach((i=>{"function"==typeof t[n][i]&&function(t,e,n,i){(0,g.hl)(t[e],n,(function(t){return function(){const s=i().getScope(),r=(0,a.x)([s,"optionalAccess",t=>t.getSpan,"call",t=>t()]),o=(0,a.x)([r,"optionalAccess",t=>t.startChild,"call",t=>t({description:`${e}.${n}`,op:"graphql.resolve"})])
for(var c=arguments.length,d=new Array(c),p=0;p<c;p++)d[p]=arguments[p]
const l=t.call(this,...d)
return(0,_.J8)(l)?l.then((t=>((0,a.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,a.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()]),l)}}))}(t,n,i,e)}))})),t))),t.call(this)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Apollo Integration was unable to require apollo-server-core package.")}}N.__initStatic()
var x=n(4549),B=n(75492),k=n(22850),G=n(68256),U=n(27448),Y=n(48206)
const I=n(27083).n2
var A=n(88468)
const C=(t,e,n)=>{let i,s
return a=>{e.value>=0&&(a||n)&&(s=e.value-(i||0),(s||void 0===i)&&(i=e.value,e.delta=s,t(e)))}},O=()=>I.__WEB_VITALS_POLYFILL__?I.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||(()=>{const t=I.performance.timing,e=I.performance.navigation.type,n={entryType:"navigation",startTime:0,type:2==e?"back_forward":1===e?"reload":"navigate"}
for(const i in t)"navigationStart"!==i&&"toJSON"!==i&&(n[i]=Math.max(t[i]-t.navigationStart,0))
return n})()):I.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],w=()=>{const t=O()
return t&&t.activationStart||0},$=(t,e)=>{const n=O()
let i="navigate"
return n&&(i=I.document.prerendering||w()>0?"prerender":n.type.replace(/_/g,"-")),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:`v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:i}},M=(t,e,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(t)){const i=new PerformanceObserver((t=>{e(t.getEntries())}))
return i.observe(Object.assign({type:t,buffered:!0},n||{})),i}}catch(t){}},L=(t,e)=>{const n=i=>{"pagehide"!==i.type&&"hidden"!==I.document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))}
addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)}
let P=-1
const q=()=>(P<0&&(P="hidden"!==I.document.visibilityState||I.document.prerendering?1/0:0,L((t=>{let{timeStamp:e}=t
P=e}),!0)),{get firstHiddenTime(){return P}}),H={}
function F(t){return"number"==typeof t&&isFinite(t)}function j(t,e){let{startTimestamp:n,...i}=e
return n&&t.startTimestamp>n&&(t.startTimestamp=n),t.startChild({startTimestamp:n,...i})}function z(){return I&&I.addEventListener&&I.performance}let X,J,Q=0,W={}
function Z(t,e,n,i,s,a){const r=a?e[a]:e[`${n}End`],o=e[`${n}Start`]
o&&r&&j(t,{op:"browser",description:(0,x.h)(s,(()=>n)),startTimestamp:i+(0,Y.XL)(o),endTimestamp:i+(0,Y.XL)(r)})}var K=n(8142),V=n(98902)
const tt=["localhost",/^\//],et={traceFetch:!0,traceXHR:!0,tracingOrigins:tt,tracePropagationTargets:tt}
function nt(t){const{traceFetch:e,traceXHR:n,tracePropagationTargets:i,tracingOrigins:s,shouldCreateSpanForRequest:a}={traceFetch:et.traceFetch,traceXHR:et.traceXHR,...t},r="function"==typeof a?a:t=>!0,o=t=>function(t,e){return(0,V.U0)(t,e||tt)}(t,i||s),c={}
e&&(0,K.o)("fetch",(t=>{!function(t,e,n,i){if(!(0,Y.zu)()||!t.fetchData||!e(t.fetchData.url))return
if(t.endTimestamp){const e=t.fetchData.__span
if(!e)return
const n=i[e]
return void(n&&(t.response?n.setHttpStatus(t.response.status):t.error&&n.setStatus("internal_error"),n.finish(),delete i[e]))}const s=(0,Y.x1)()
if(s){const e=s.startChild({data:{...t.fetchData,type:"fetch"},description:`${t.fetchData.method} ${t.fetchData.url}`,op:"http.client"})
t.fetchData.__span=e.spanId,i[e.spanId]=e
const a=t.args[0]
t.args[1]=t.args[1]||{}
const r=t.args[1]
n(t.fetchData.url)&&(r.headers=function(t,e,n,i){const s=(0,k.IQ)(e),a=n.toTraceparent(),r="undefined"!=typeof Request&&(0,_.V9)(t,Request)?t.headers:i.headers
if(r){if("undefined"!=typeof Headers&&(0,_.V9)(r,Headers)){const t=new Headers(r)
return t.append("sentry-trace",a),s&&t.append(k.bU,s),t}if(Array.isArray(r)){const t=[...r,["sentry-trace",a]]
return s&&t.push([k.bU,s]),t}{const t="baggage"in r?r.baggage:void 0,e=[]
return Array.isArray(t)?e.push(...t):t&&e.push(t),s&&e.push(s),{...r,"sentry-trace":a,baggage:e.length>0?e.join(","):void 0}}}return{"sentry-trace":a,baggage:s}}(a,s.getDynamicSamplingContext(),e,r),s.metadata.propagations++)}}(t,r,o,c)})),n&&(0,K.o)("xhr",(t=>{!function(t,e,n,i){if(!(0,Y.zu)()||t.xhr&&t.xhr.__sentry_own_request__||!(t.xhr&&t.xhr.__sentry_xhr__&&e(t.xhr.__sentry_xhr__.url)))return
const s=t.xhr.__sentry_xhr__
if(t.endTimestamp){const e=t.xhr.__sentry_xhr_span_id__
if(!e)return
const n=i[e]
return void(n&&(n.setHttpStatus(s.status_code),n.finish(),delete i[e]))}const a=(0,Y.x1)()
if(a){const e=a.startChild({data:{...s.data,type:"xhr",method:s.method,url:s.url},description:`${s.method} ${s.url}`,op:"http.client"})
if(t.xhr.__sentry_xhr_span_id__=e.spanId,i[t.xhr.__sentry_xhr_span_id__]=e,t.xhr.setRequestHeader&&n(t.xhr.__sentry_xhr__.url))try{t.xhr.setRequestHeader("sentry-trace",e.toTraceparent())
const n=a.getDynamicSamplingContext(),i=(0,k.IQ)(n)
i&&t.xhr.setRequestHeader(k.bU,i),a.metadata.propagations++}catch(t){}}}(t,r,o,c)}))}const it="BrowserTracing",st={idleTimeout:U.nT,finalTimeout:U.mg,heartbeatInterval:U.hd,markBackgroundTransactions:!0,routingInstrumentation:function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
if(!I||!I.location)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Could not initialize routing instrumentation due to invalid location"))
let i,s=I.location.href
e&&(i=t({name:I.location.pathname,op:"pageload",metadata:{source:"url"}})),n&&(0,K.o)("history",(e=>{let{to:n,from:a}=e
void 0===a&&s&&-1!==s.indexOf(n)?s=void 0:a!==n&&(s=void 0,i&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Finishing current transaction with op: ${i.op}`),i.finish()),i=t({name:I.location.pathname,op:"navigation",metadata:{source:"url"}}))}))},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,_experiments:{enableLongTask:!0,enableInteractions:!1},...et}
class at{__init(){this.name=it}constructor(t){at.prototype.__init.call(this),this.options={...st,...t},t&&!t.tracePropagationTargets&&t.tracingOrigins&&(this.options.tracePropagationTargets=t.tracingOrigins),function(){const t=z()
t&&A.Z1&&(t.mark&&I.performance.mark("sentry-tracing-init"),(t=>{const e=$("CLS",0)
let n,i=0,s=[]
const a=t=>{t.forEach((t=>{if(!t.hadRecentInput){const a=s[0],r=s[s.length-1]
i&&0!==s.length&&t.startTime-r.startTime<1e3&&t.startTime-a.startTime<5e3?(i+=t.value,s.push(t)):(i=t.value,s=[t]),i>e.value&&(e.value=i,e.entries=s,n&&n())}}))},o=M("layout-shift",a)
o&&(n=C((t=>{const e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding CLS"),W.cls={value:t.value,unit:""},J=e)}),e),L((()=>{a(o.takeRecords()),n(!0)})))})(),(t=>{const e=q(),n=$("LCP")
let i
const s=t=>{const s=t[t.length-1]
if(s){const t=Math.max(s.startTime-w(),0)
t<e.firstHiddenTime&&(n.value=t,n.entries=[s],i())}},a=M("largest-contentful-paint",s)
if(a){i=C((t=>{const e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding LCP"),W.lcp={value:t.value,unit:"millisecond"},X=e)}),n)
const t=()=>{H[n.id]||(s(a.takeRecords()),a.disconnect(),H[n.id]=!0,i(!0))};["keydown","click"].forEach((e=>{addEventListener(e,t,{once:!0,capture:!0})})),L(t,!0)}})(),(t=>{const e=q(),n=$("FID")
let i
const s=t=>{t.startTime<e.firstHiddenTime&&(n.value=t.processingStart-t.startTime,n.entries.push(t),i(!0))},a=t=>{t.forEach(s)},o=M("first-input",a)
i=C((t=>{const e=t.entries.pop()
if(!e)return
const n=(0,Y.XL)(A.Z1),i=(0,Y.XL)(e.startTime);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FID"),W.fid={value:t.value,unit:"millisecond"},W["mark.fid"]={value:n+i,unit:"second"}}),n),o&&L((()=>{a(o.takeRecords()),o.disconnect()}),!0)})())}(),(0,a.x)([this,"access",t=>t.options,"access",t=>t._experiments,"optionalAccess",t=>t.enableLongTask])&&M("longtask",(t=>{for(const e of t){const t=(0,Y.x1)()
if(!t)return
const n=(0,Y.XL)(A.Z1+e.startTime),i=(0,Y.XL)(e.duration)
t.startChild({description:"Main UI thread blocked",op:"ui.long-task",startTimestamp:n,endTimestamp:n+i})}}))}setupOnce(t,e){this._getCurrentHub=e
const{routingInstrumentation:n,startTransactionOnLocationChange:i,startTransactionOnPageLoad:s,markBackgroundTransactions:o,traceFetch:c,traceXHR:_,tracePropagationTargets:d,shouldCreateSpanForRequest:p,_experiments:l}=this.options
n((t=>this._createRouteTransaction(t)),s,i),o&&(I&&I.document?I.document.addEventListener("visibilitychange",(()=>{const t=(0,Y.x1)()
if(I.document.hidden&&t){const e="cancelled";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`),t.status||t.setStatus(e),t.setTag("visibilitychange","document.hidden"),t.finish()}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),(0,a.x)([l,"optionalAccess",t=>t.enableInteractions])&&this._registerInteractionListener(),nt({traceFetch:c,traceXHR:_,tracePropagationTargets:d,shouldCreateSpanForRequest:p})}_createRouteTransaction(t){if(!this._getCurrentHub)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`))
const{beforeNavigate:e,idleTimeout:n,finalTimeout:i,heartbeatInterval:o}=this.options,c="pageload"===t.op,_=c?rt("sentry-trace"):null,d=c?rt("baggage"):null,p=_?(0,B.q)(_):void 0,l=d?(0,k.EN)(d):void 0,u={...t,...p,metadata:{...t.metadata,dynamicSamplingContext:p&&!l?{}:l},trimEnd:!0},h="function"==typeof e?e(u):u,m=void 0===h?{...u,sampled:!1}:h
m.metadata=m.name!==u.name?{...m.metadata,source:"custom"}:m.metadata,this._latestRouteName=m.name,this._latestRouteSource=(0,a.x)([m,"access",t=>t.metadata,"optionalAccess",t=>t.source]),!1===m.sampled&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Starting ${m.op} transaction on scope`)
const g=this._getCurrentHub(),{location:f}=I,T=(0,s.lb)(g,m,n,i,!0,{location:f},o)
return T.registerBeforeFinishCallback((t=>{!function(t){const e=z()
if(!e||!I.performance.getEntries||!A.Z1)return;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Tracing] Adding & adjusting spans using Performance API")
const n=(0,Y.XL)(A.Z1),i=e.getEntries()
let s,a
if(i.slice(Q).forEach((e=>{const i=(0,Y.XL)(e.startTime),o=(0,Y.XL)(e.duration)
if(!("navigation"===t.op&&n+i<t.startTimestamp))switch(e.entryType){case"navigation":!function(t,e,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((i=>{Z(t,e,i,n)})),Z(t,e,"secureConnection",n,"TLS/SSL","connectEnd"),Z(t,e,"fetch",n,"cache","domainLookupStart"),Z(t,e,"domainLookup",n,"DNS"),function(t,e,n){j(t,{op:"browser",description:"request",startTimestamp:n+(0,Y.XL)(e.requestStart),endTimestamp:n+(0,Y.XL)(e.responseEnd)}),j(t,{op:"browser",description:"response",startTimestamp:n+(0,Y.XL)(e.responseStart),endTimestamp:n+(0,Y.XL)(e.responseEnd)})}(t,e,n)}(t,e,n),s=n+(0,Y.XL)(e.responseStart),a=n+(0,Y.XL)(e.requestStart)
break
case"mark":case"paint":case"measure":{!function(t,e,n,i,s){const a=s+n,r=a+i
j(t,{description:e.name,endTimestamp:r,op:e.entryType,startTimestamp:a})}(t,e,i,o,n)
const s=q(),a=e.startTime<s.firstHiddenTime
"first-paint"===e.name&&a&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FP"),W.fp={value:e.startTime,unit:"millisecond"}),"first-contentful-paint"===e.name&&a&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FCP"),W.fcp={value:e.startTime,unit:"millisecond"})
break}case"resource":{const s=e.name.replace(I.location.origin,"")
!function(t,e,n,i,s,a){if("xmlhttprequest"===e.initiatorType||"fetch"===e.initiatorType)return
const r={}
"transferSize"in e&&(r["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(r["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(r["Decoded Body Size"]=e.decodedBodySize)
const o=a+i
j(t,{description:n,endTimestamp:o+s,op:e.initiatorType?`resource.${e.initiatorType}`:"resource.other",startTimestamp:o,data:r})}(t,e,s,i,o,n)
break}}})),Q=Math.max(i.length-1,0),function(t){const e=I.navigator
if(!e)return
const n=e.connection
n&&(n.effectiveType&&t.setTag("effectiveConnectionType",n.effectiveType),n.type&&t.setTag("connectionType",n.type),F(n.rtt)&&(W["connection.rtt"]={value:n.rtt,unit:"millisecond"})),F(e.deviceMemory)&&t.setTag("deviceMemory",`${e.deviceMemory} GB`),F(e.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}(t),"pageload"===t.op){"number"==typeof s&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding TTFB"),W.ttfb={value:1e3*(s-t.startTimestamp),unit:"millisecond"},"number"==typeof a&&a<=s&&(W["ttfb.requestTime"]={value:1e3*(s-a),unit:"millisecond"})),["fcp","fp","lcp"].forEach((e=>{if(!W[e]||n>=t.startTimestamp)return
const i=W[e].value,s=n+(0,Y.XL)(i),a=Math.abs(1e3*(s-t.startTimestamp)),o=a-i;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Measurements] Normalized ${e} from ${i} to ${a} (${o})`),W[e].value=a}))
const e=W["mark.fid"]
e&&W.fid&&(j(t,{description:"first input delay",endTimestamp:e.value+(0,Y.XL)(W.fid.value),op:"ui.action",startTimestamp:e.value}),delete W["mark.fid"]),"fcp"in W||delete W.cls,Object.keys(W).forEach((e=>{t.setMeasurement(e,W[e].value,W[e].unit)})),function(t){X&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding LCP Data"),X.element&&t.setTag("lcp.element",(0,G.Rt)(X.element)),X.id&&t.setTag("lcp.id",X.id),X.url&&t.setTag("lcp.url",X.url.trim().slice(0,200)),t.setTag("lcp.size",X.size)),J&&J.sources&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding CLS Data"),J.sources.forEach(((e,n)=>t.setTag(`cls.source.${n+1}`,(0,G.Rt)(e.node)))))}(t)}X=void 0,J=void 0,W={}}(t)})),T}_registerInteractionListener(){let t
const e=()=>{const{idleTimeout:e,finalTimeout:n,heartbeatInterval:i}=this.options,a="ui.action.click"
if(t&&(t.finish(),t=void 0),!this._getCurrentHub)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] Did not create ${a} transaction because _getCurrentHub is invalid.`))
if(!this._latestRouteName)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`))
const o=this._getCurrentHub(),{location:c}=I,_={name:this._latestRouteName,op:a,trimEnd:!0,metadata:{source:(0,x.h)(this._latestRouteSource,(()=>"url"))}}
t=(0,s.lb)(o,_,e,n,!0,{location:c},i)};["click"].forEach((t=>{addEventListener(t,e,{once:!1,capture:!0})}))}}function rt(t){const e=(0,G.qT)(`meta[name=${t}]`)
return e?e.getAttribute("content"):null}var ot,ct=n(20484)
!function(t){t.Ok="ok",t.DeadlineExceeded="deadline_exceeded",t.Unauthenticated="unauthenticated",t.PermissionDenied="permission_denied",t.NotFound="not_found",t.ResourceExhausted="resource_exhausted",t.InvalidArgument="invalid_argument",t.Unimplemented="unimplemented",t.Unavailable="unavailable",t.InternalError="internal_error",t.UnknownError="unknown_error",t.Cancelled="cancelled",t.AlreadyExists="already_exists",t.FailedPrecondition="failed_precondition",t.Aborted="aborted",t.OutOfRange="out_of_range",t.DataLoss="data_loss"}(ot||(ot={}))
var _t=n(21535);("undefined"==typeof __SENTRY_TRACING__||__SENTRY_TRACING__)&&(0,s.ro)()},20484:(t,e,n)=>{n.d(e,{Dr:()=>_,Zd:()=>d,gB:()=>c})
var i=n(4549),s=n(7209),a=n(88468),r=n(88521),o=n(15834)
class c{__init(){this.spans=[]}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
c.prototype.__init.call(this),this._maxlen=t}add(t){this.spans.length>this._maxlen?t.spanRecorder=void 0:this.spans.push(t)}}class _{__init2(){this.traceId=(0,s.DM)()}__init3(){this.spanId=(0,s.DM)().substring(16)}__init4(){this.startTimestamp=(0,a._I)()}__init5(){this.tags={}}__init6(){this.data={}}__init7(){this.instrumenter="sentry"}constructor(t){if(_.prototype.__init2.call(this),_.prototype.__init3.call(this),_.prototype.__init4.call(this),_.prototype.__init5.call(this),_.prototype.__init6.call(this),_.prototype.__init7.call(this),!t)return this
t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp),t.instrumenter&&(this.instrumenter=t.instrumenter)}startChild(t){const e=new _({...t,parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId})
if(e.spanRecorder=this.spanRecorder,e.spanRecorder&&e.spanRecorder.add(e),e.transaction=this.transaction,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&e.transaction){const n=`[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${e.transaction.name||"< unknown name >"}' (${e.transaction.spanId}).`
e.transaction.metadata.spanMetadata[e.spanId]={logMessage:n},r.kg.log(n)}return e}setTag(t,e){return this.tags={...this.tags,[t]:e},this}setData(t,e){return this.data={...this.data,[t]:e},this}setStatus(t){return this.status=t,this}setHttpStatus(t){this.setTag("http.status_code",String(t))
const e=d(t)
return"unknown_error"!==e&&this.setStatus(e),this}isSuccess(){return"ok"===this.status}finish(t){if(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&this.transaction&&this.transaction.spanId!==this.spanId){const{logMessage:t}=this.transaction.metadata.spanMetadata[this.spanId]
t&&r.kg.log(t.replace("Starting","Finishing"))}this.endTimestamp="number"==typeof t?t:(0,a._I)()}toTraceparent(){let t=""
return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),`${this.traceId}-${this.spanId}${t}`}toContext(){return(0,o.Jr)({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})}updateWithContext(t){return this.data=(0,i.h)(t.data,(()=>({}))),this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=(0,i.h)(t.spanId,(()=>this.spanId)),this.startTimestamp=(0,i.h)(t.startTimestamp,(()=>this.startTimestamp)),this.status=t.status,this.tags=(0,i.h)(t.tags,(()=>({}))),this.traceId=(0,i.h)(t.traceId,(()=>this.traceId)),this}getTraceContext(){return(0,o.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})}toJSON(){return(0,o.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})}}function d(t){if(t<400&&t>=100)return"ok"
if(t>=400&&t<500)switch(t){case 401:return"unauthenticated"
case 403:return"permission_denied"
case 404:return"not_found"
case 409:return"already_exists"
case 413:return"failed_precondition"
case 429:return"resource_exhausted"
default:return"invalid_argument"}if(t>=500&&t<600)switch(t){case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline_exceeded"
default:return"internal_error"}return"unknown_error"}},21535:(t,e,n)=>{n.d(e,{Y:()=>_})
var i=n(4549),s=n(8651),a=n(88468),r=n(88521),o=n(15834),c=n(20484)
class _ extends c.Dr{__init(){this._measurements={}}__init2(){this._contexts={}}__init3(){this._frozenDynamicSamplingContext=void 0}constructor(t,e){super(t),_.prototype.__init.call(this),_.prototype.__init2.call(this),_.prototype.__init3.call(this),this._hub=e||(0,s.Gd)(),this._name=t.name||"",this.metadata={source:"custom",...t.metadata,spanMetadata:{},changes:[],propagations:0},this._trimEnd=t.trimEnd,this.transaction=this
const n=this.metadata.dynamicSamplingContext
n&&(this._frozenDynamicSamplingContext={...n})}get name(){return this._name}set name(t){this.setName(t)}setName(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom"
t===this.name&&e===this.metadata.source||this.metadata.changes.push({source:this.metadata.source,timestamp:(0,a.ph)(),propagations:this.metadata.propagations}),this._name=t,this.metadata.source=e}initSpanRecorder(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
this.spanRecorder||(this.spanRecorder=new c.gB(t)),this.spanRecorder.add(this)}setContext(t,e){null===e?delete this._contexts[t]:this._contexts[t]=e}setMeasurement(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
this._measurements[t]={value:e,unit:n}}setMetadata(t){this.metadata={...this.metadata,...t}}finish(t){if(void 0!==this.endTimestamp)return
if(this.name||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),super.finish(t),!0!==this.sampled){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
const t=this._hub.getClient()
return void(t&&t.recordDroppedEvent("sample_rate","transaction"))}const e=this.spanRecorder?this.spanRecorder.spans.filter((t=>t!==this&&t.endTimestamp)):[]
this._trimEnd&&e.length>0&&(this.endTimestamp=e.reduce(((t,e)=>t.endTimestamp&&e.endTimestamp?t.endTimestamp>e.endTimestamp?t:e:t)).endTimestamp)
const n=this.metadata,i={contexts:{...this._contexts,trace:this.getTraceContext()},spans:e,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:{...n,dynamicSamplingContext:this.getDynamicSamplingContext()},...n.source&&{transaction_info:{source:n.source,changes:n.changes,propagations:n.propagations}}}
return Object.keys(this._measurements).length>0&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),i.measurements=this._measurements),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),this._hub.captureEvent(i)}toContext(){const t=super.toContext()
return(0,o.Jr)({...t,name:this.name,trimEnd:this._trimEnd})}updateWithContext(t){return super.updateWithContext(t),this.name=(0,i.h)(t.name,(()=>"")),this._trimEnd=t.trimEnd,this}getDynamicSamplingContext(){if(this._frozenDynamicSamplingContext)return this._frozenDynamicSamplingContext
const t=this._hub||(0,s.Gd)(),e=t&&t.getClient()
if(!e)return{}
const{environment:n,release:i}=e.getOptions()||{},{publicKey:a}=e.getDsn()||{},r=this.metadata.sampleRate,c=void 0!==r?r.toString():void 0,_=t.getScope(),{segment:d}=_&&_.getUser()||{},p=this.metadata.source,l=p&&"url"!==p?this.name:void 0
return(0,o.Jr)({environment:n,release:i,transaction:l,user_segment:d,public_key:a,trace_id:this.traceId,sample_rate:c})}}},48206:(t,e,n)=>{n.d(e,{XL:()=>r,x1:()=>a,zu:()=>s})
var i=n(8651)
function s(t){const e=(0,i.Gd)().getClient(),n=t||e&&e.getOptions()
return!!n&&("tracesSampleRate"in n||"tracesSampler"in n)}function a(t){const e=(t||(0,i.Gd)()).getScope()
return e&&e.getTransaction()}function r(t){return t/1e3}},4549:(t,e,n)=>{function i(t,e){return null!=t?t:e()}n.d(e,{h:()=>i})}}])

//# sourceMappingURL=chunk.507.aa38cb08f25bae1d4e76.map