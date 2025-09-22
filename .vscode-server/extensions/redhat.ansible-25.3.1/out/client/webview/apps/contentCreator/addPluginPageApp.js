/*! For license information please see addPluginPageApp.js.LICENSE.txt */
var e={341:(e,t,o)=>{o.r(t),o.d(t,{VscodeBadge:()=>Re,VscodeButton:()=>He,VscodeCheckbox:()=>Ge,VscodeCheckboxGroup:()=>Ze,VscodeCollapsible:()=>et,VscodeContextMenu:()=>rt,VscodeContextMenuItem:()=>st,VscodeDivider:()=>ct,VscodeFormContainer:()=>bt,VscodeFormGroup:()=>_t,VscodeFormHelper:()=>xt,VscodeIcon:()=>Me,VscodeLabel:()=>Dt,VscodeMultiSelect:()=>so,VscodeOption:()=>Gt,VscodeProgressRing:()=>ro,VscodeRadio:()=>co,VscodeRadioGroup:()=>Et,VscodeScrollable:()=>fo,VscodeSingleSelect:()=>uo,VscodeSplitLayout:()=>ko,VscodeTabHeader:()=>Eo,VscodeTabPanel:()=>Ao,VscodeTable:()=>Go,VscodeTableBody:()=>Po,VscodeTableCell:()=>Vo,VscodeTableHeader:()=>To,VscodeTableHeaderCell:()=>jo,VscodeTableRow:()=>qo,VscodeTabs:()=>Zo,VscodeTextarea:()=>At,VscodeTextfield:()=>Bt,VscodeTree:()=>os});const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class a{constructor(e,t,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&r.set(t,e))}return e}toString(){return this.cssText}}const l=e=>new a("string"==typeof e?e:e+"",void 0,n),c=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1]),e[0]);return new a(o,e,n)},d=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=s.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}},h=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return l(t)})(e):e,{is:p,defineProperty:u,getOwnPropertyDescriptor:v,getOwnPropertyNames:b,getOwnPropertySymbols:f,getPrototypeOf:g}=Object,_=globalThis,m=_.trustedTypes,y=m?m.emptyScript:"",x=_.reactiveElementPolyfillSupport,w=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},C=(e,t)=>!p(e,t),$={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);void 0!==s&&u(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:i}=v(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const n=s?.call(this);i.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,t=[...b(e),...f(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(void 0!==s&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:k).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,s=o._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=o.getPropertyOptions(s),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=s,this[s]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??C)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[w("elementProperties")]=new Map,E[w("finalized")]=new Map,x?.({ReactiveElement:E}),(_.reactiveElementVersions??=[]).push("2.0.4");const I=globalThis,S=I.trustedTypes,A=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,R="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+O,B=`<${P}>`,z=document,V=()=>z.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,T=e=>L(e)||"function"==typeof e?.[Symbol.iterator],M="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,H=/>/g,U=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,N=/"/g,K=/^(?:script|style|textarea|title)$/i,W=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),G=W(1),Y=(W(2),W(3),Symbol.for("lit-noChange")),X=Symbol.for("lit-nothing"),Z=new WeakMap,J=z.createTreeWalker(z,129);function Q(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const ee=(e,t)=>{const o=e.length-1,s=[];let i,n=2===t?"<svg>":3===t?"<math>":"",r=F;for(let t=0;t<o;t++){const o=e[t];let a,l,c=-1,d=0;for(;d<o.length&&(r.lastIndex=d,l=r.exec(o),null!==l);)d=r.lastIndex,r===F?"!--"===l[1]?r=j:void 0!==l[1]?r=H:void 0!==l[2]?(K.test(l[2])&&(i=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=i??F,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?U:'"'===l[3]?N:q):r===N||r===q?r=U:r===j||r===H?r=F:(r=U,i=void 0);const h=r===U&&e[t+1].startsWith("/>")?" ":"";n+=r===F?o+B:c>=0?(s.push(a),o.slice(0,c)+R+o.slice(c)+O+h):o+O+(-2===c?t:h)}return[Q(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class te{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let i=0,n=0;const r=e.length-1,a=this.parts,[l,c]=ee(e,t);if(this.el=te.createElement(l,o),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=J.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(R)){const t=c[n++],o=s.getAttribute(e).split(O),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:r[2],strings:o,ctor:"."===r[1]?re:"?"===r[1]?ae:"@"===r[1]?le:ne}),s.removeAttribute(e)}else e.startsWith(O)&&(a.push({type:6,index:i}),s.removeAttribute(e));if(K.test(s.tagName)){const e=s.textContent.split(O),t=e.length-1;if(t>0){s.textContent=S?S.emptyScript:"";for(let o=0;o<t;o++)s.append(e[o],V()),J.nextNode(),a.push({type:2,index:++i});s.append(e[t],V())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=s.data.indexOf(O,e+1));)a.push({type:7,index:i}),e+=O.length-1}i++}}static createElement(e,t){const o=z.createElement("template");return o.innerHTML=e,o}}function oe(e,t,o=e,s){if(t===Y)return t;let i=void 0!==s?o._$Co?.[s]:o._$Cl;const n=D(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e),i._$AT(e,o,s)),void 0!==s?(o._$Co??=[])[s]=i:o._$Cl=i),void 0!==i&&(t=oe(e,i._$AS(e,t.values),i,s)),t}class se{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??z).importNode(t,!0);J.currentNode=s;let i=J.nextNode(),n=0,r=0,a=o[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new ie(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ce(i,this,e)),this._$AV.push(t),a=o[++r]}n!==a?.index&&(i=J.nextNode(),n++)}return J.currentNode=z,s}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=oe(this,e,t),D(e)?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):T(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==X&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,s="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=te.createElement(Q(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new se(s,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new te(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const i of e)s===t.length?t.push(o=new ie(this.O(V()),this.O(V()),this,this.options)):o=t[s],o._$AI(i),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ne{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,i){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=X}_$AI(e,t=this,o,s){const i=this.strings;let n=!1;if(void 0===i)e=oe(this,e,t,0),n=!D(e)||e!==this._$AH&&e!==Y,n&&(this._$AH=e);else{const s=e;let r,a;for(e=i[0],r=0;r<i.length-1;r++)a=oe(this,s[o+r],t,r),a===Y&&(a=this._$AH[r]),n||=!D(a)||a!==this._$AH[r],a===X?e=X:e!==X&&(e+=(a??"")+i[r+1]),this._$AH[r]=a}n&&!s&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class re extends ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}}class ae extends ne{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class le extends ne{constructor(e,t,o,s,i){super(e,t,o,s,i),this.type=5}_$AI(e,t=this){if((e=oe(this,e,t,0)??X)===Y)return;const o=this._$AH,s=e===X&&o!==X||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==X&&(o===X||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ce{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){oe(this,e)}}const de={M:R,P:O,A:P,C:1,L:ee,R:se,D:T,V:oe,I:ie,H:ne,N:ae,U:le,B:re,F:ce},he=I.litHtmlPolyfillSupport;he?.(te,ie),(I.litHtmlVersions??=[]).push("3.2.1");class pe extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const s=o?.renderBefore??t;let i=s._$litPart$;if(void 0===i){const e=o?.renderBefore??null;s._$litPart$=i=new ie(t.insertBefore(V(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}pe._$litElement$=!0,pe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:pe});const ue=globalThis.litElementPolyfillSupport;ue?.({LitElement:pe}),(globalThis.litElementVersions??=[]).push("4.1.1");const ve={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:C},be=(e=ve,t,o)=>{const{kind:s,metadata:i}=o;let n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(o.name,e),"accessor"===s){const{name:s}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(s,i,e)},init(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===s){const{name:s}=o;return function(o){const i=this[s];t.call(this,o),this.requestUpdate(s,i,e)}}throw Error("Unsupported decorator location: "+s)};function fe(e){return(t,o)=>"object"==typeof o?be(e,t,o):((e,t,o)=>{const s=t.hasOwnProperty(o);return t.constructor.createProperty(o,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ge(e){return fe({...e,state:!0,attribute:!1})}const _e=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function me(e,t){return(o,s,i)=>{const n=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof s?o:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return _e(o,s,{get(){let o=e.call(this);return void 0===o&&(o=n(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return _e(o,s,{get(){return n(this)}})}}let ye;function xe(e){return(t,o)=>{const{slot:s,selector:i}=e??{},n="slot"+(s?`[name=${s}]`:":not([name])");return _e(t,o,{get(){const t=this.renderRoot?.querySelector(n),o=t?.assignedElements(e)??[];return void 0===i?o:o.filter((e=>e.matches(i)))}})}}const we="1.14.0",ke="__vscodeElements_disableRegistryWarning__";class Ce extends pe{get version(){return we}}const $e=e=>t=>{if(!customElements.get(e))return void customElements.define(e,t);if(ke in window)return;const o=document.createElement(e),s=o?.version;let i="";s?s!==we?(i+="is already registered by a different version of VSCode Elements. ",i+=`This version is "${we}", while the other one is "${s}".`):i+="is already registered by the same version of VSCode Elements. ":(console.warn(e,"is already registered by an unknown custom element handler class."),i+="is already registered by an unknown custom element handler class."),console.warn(`[VSCode Elements] ${e} ${i}\nTo suppress this warning, set window.${ke} to true`)},Ee=c`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;function Ie(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}const Se=[Ee,c`
    :host {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      font-family: var(--vscode-font-family, ${l(Ie())});
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      line-height: 11px;
      min-height: 18px;
      min-width: 18px;
      padding: 3px 6px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }

    :host([variant='tab-header-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 10px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      line-height: 10px;
      min-height: 16px;
      min-width: 16px;
      padding: 3px 5px;
    }
  `];var Ae=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Re=class extends Ce{constructor(){super(...arguments),this.variant="default"}render(){return G` <slot></slot> `}};Re.styles=Se,Ae([fe({reflect:!0})],Re.prototype,"variant",void 0),Re=Ae([$e("vscode-badge")],Re);const Oe=e=>(...t)=>({_$litDirective$:e,values:t});class Pe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Be=Oe(class extends Pe{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const s=!!t[e];s===this.st.has(e)||this.nt?.has(e)||(s?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return Y}}),ze=e=>e??X,Ve=Oe(class extends Pe{constructor(e){if(super(e),this._prevProperties={},3!==e.type||"style"!==e.name)throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(e,[t]){return Object.entries(t).forEach((([t,o])=>{this._prevProperties[t]!==o&&(t.startsWith("--")?e.element.style.setProperty(t,o):e.element.style[t]=o,this._prevProperties[t]=o)})),Y}render(e){return Y}}),De=[Ee,c`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var Le,Te=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Me=Le=class extends Ce{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:t}=this._getStylesheetConfig();Le.stylesheetHref=e,Le.nonce=t}_getStylesheetConfig(){const e=document.getElementById("vscode-codicon-stylesheet"),t=e?.getAttribute("href")||void 0,o=e?.nonce||void 0;if(!e){let e="[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";e+="See https://vscode-elements.github.io/components/icon/ for more details.",console.warn(e)}return{nonce:o,href:t}}render(){const{stylesheetHref:e,nonce:t}=Le,o=G`<span
      class=${Be({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${Ve({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,s=this.actionIcon?G` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${o}
        </button>`:G` <span class="icon" aria-hidden="true" role="presentation"
          >${o}</span
        >`;return G`
      <link
        rel="stylesheet"
        href=${ze(e)}
        nonce=${ze(t)}
      >
      ${s}
    `}};Me.styles=De,Me.stylesheetHref="",Me.nonce="",Te([fe()],Me.prototype,"label",void 0),Te([fe({type:String})],Me.prototype,"name",void 0),Te([fe({type:Number})],Me.prototype,"size",void 0),Te([fe({type:Boolean,reflect:!0})],Me.prototype,"spin",void 0),Te([fe({type:Number,attribute:"spin-duration"})],Me.prototype,"spinDuration",void 0),Te([fe({type:Boolean,reflect:!0,attribute:"action-icon"})],Me.prototype,"actionIcon",void 0),Me=Le=Te([$e("vscode-icon")],Me);const Fe=[Ee,c`
    :host {
      background-color: var(--vscode-button-background, #0078d4);
      border-color: var(--vscode-button-border, transparent);
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      display: inline-block;
      font-family: var(--vscode-font-family, ${l(Ie())});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 22px;
      overflow: hidden;
      padding: 1px 13px;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon {
      color: inherit;
      display: block;
      margin-right: 3px;
    }

    .icon-after {
      color: inherit;
      display: block;
      margin-left: 3px;
    }
  `];var je=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let He=class extends Ce{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then((()=>{this.focus(),this.requestUpdate()}))),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){"submit"===this.type&&this._internals.form&&this._internals.form.requestSubmit(),"reset"===this.type&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){if(("Enter"===e.key||" "===e.key)&&!this.hasAttribute("disabled")){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}}));const e=new MouseEvent("click",{bubbles:!0,cancelable:!0});e.synthetic=!0,this.dispatchEvent(e),this._executeAction()}}_handleClick(e){e.synthetic||this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}})),this._executeAction())}render(){const e=""!==this.icon,t=""!==this.iconAfter,o={wrapper:!0,"has-icon-before":e,"has-icon-after":t},s=e?G`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${ze(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:X,i=t?G`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${ze(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:X;return G`
      <span class=${Be(o)}>
        ${s}
        <slot></slot>
        ${i}
      </span>
    `}};He.styles=Fe,He.formAssociated=!0,je([fe({type:Boolean,reflect:!0})],He.prototype,"autofocus",void 0),je([fe({type:Number,reflect:!0})],He.prototype,"tabIndex",void 0),je([fe({type:Boolean,reflect:!0})],He.prototype,"secondary",void 0),je([fe({reflect:!0})],He.prototype,"role",void 0),je([fe({type:Boolean,reflect:!0})],He.prototype,"disabled",void 0),je([fe()],He.prototype,"icon",void 0),je([fe({type:Boolean,reflect:!0,attribute:"icon-spin"})],He.prototype,"iconSpin",void 0),je([fe({type:Number,reflect:!0,attribute:"icon-spin-duration"})],He.prototype,"iconSpinDuration",void 0),je([fe({attribute:"icon-after"})],He.prototype,"iconAfter",void 0),je([fe({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],He.prototype,"iconAfterSpin",void 0),je([fe({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],He.prototype,"iconAfterSpinDuration",void 0),je([fe({type:Boolean,reflect:!0})],He.prototype,"focused",void 0),je([fe({type:String,reflect:!0})],He.prototype,"name",void 0),je([fe({reflect:!0})],He.prototype,"type",void 0),je([fe()],He.prototype,"value",void 0),He=je([$e("vscode-button")],He);class Ue extends Ce{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"disabled"===e&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):"disabled"!==e||this.hasAttribute("disabled")||(this.tabIndex=this._prevTabindex)}}!function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);n>3&&r&&Object.defineProperty(t,o,r)}([fe({type:Boolean,reflect:!0})],Ue.prototype,"focused",void 0);const qe=e=>{class t extends e{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(e){this._label=e,""===this._slottedText&&this.setAttribute("aria-label",e)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",""!==this._slottedText&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return""===this._slottedText?G`<span class="label-attr">${this._label}</span>`:G`${X}`}}return function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);n>3&&r&&Object.defineProperty(t,o,r)}([fe()],t.prototype,"label",null),t},Ne=[c`
    :host {
      color: var(--vscode-foreground, #cccccc);
      display: inline-block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size, 13px);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder, #3c3c3c);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground, #cccccc);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      opacity: 0.9;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `],Ke=[Ee,Ne,c`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var We=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Ge=class extends(qe(Ue)){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.role="checkbox",this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=e=>{e.preventDefault(),this.disabled||this._toggleState()},this._handleKeyDown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault()," "===e.key&&this._toggleState(),"Enter"===e.key&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then((()=>{this._manageRequired(),this._setActualFormValue()}))}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,t){e&&(this.checked=!0)}_setActualFormValue(){let e="";e=this.checked?this.value?this.value:"on":null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=Be({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),t=Be({"label-inner":!0}),o=G`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,s=this.checked&&!this.indeterminate?o:X,i=this.indeterminate?G`<span class="indeterminate-icon"></span>`:X;return G`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
        >
        <div class=${e}>${i}${s}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${t}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};Ge.styles=Ke,Ge.formAssociated=!0,Ge.shadowRootOptions={...pe.shadowRootOptions,delegatesFocus:!0},We([fe({type:Boolean,reflect:!0})],Ge.prototype,"autofocus",void 0),We([fe({type:Boolean,reflect:!0})],Ge.prototype,"checked",null),We([fe({type:Boolean,reflect:!0,attribute:"default-checked"})],Ge.prototype,"defaultChecked",void 0),We([fe({type:Boolean,reflect:!0})],Ge.prototype,"invalid",void 0),We([fe({reflect:!0})],Ge.prototype,"name",void 0),We([fe({reflect:!0})],Ge.prototype,"role",void 0),We([fe()],Ge.prototype,"value",void 0),We([fe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),We([fe({type:Boolean,reflect:!0})],Ge.prototype,"indeterminate",void 0),We([fe({type:Boolean,reflect:!0})],Ge.prototype,"required",null),We([fe()],Ge.prototype,"type",void 0),We([me("#input")],Ge.prototype,"_inputEl",void 0),Ge=We([$e("vscode-checkbox")],Ge);const Ye=[Ee,c`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `];var Xe=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Ze=class extends Ce{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return G`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Ze.styles=Ye,Xe([fe({reflect:!0})],Ze.prototype,"role",void 0),Xe([fe({reflect:!0})],Ze.prototype,"variant",void 0),Ze=Xe([$e("vscode-checkbox-group")],Ze);const Je=[Ee,c`
    .collapsible {
      background-color: var(--vscode-sideBar-background, #181818);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background, #181818);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder, #0078d4);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground, #cccccc);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var Qe=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let et=class extends Ce{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){"Enter"===e.key&&(this.open=!this.open,this._emitToggleEvent())}render(){const e=Be({collapsible:!0,open:this.open}),t=G`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,o=this.description?G`<span class="description">${this.description}</span>`:X;return G`
      <div class=${e}>
        <div
          class="collapsible-header"
          tabindex="0"
          title=${this.title}
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${t}
          <h3 class="title">${this.title}${o}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};et.styles=Je,Qe([fe({type:String})],et.prototype,"title",void 0),Qe([fe()],et.prototype,"description",void 0),Qe([fe({type:Boolean,reflect:!0})],et.prototype,"open",void 0),et=Qe([$e("vscode-collapsible")],et);const tt=[Ee,c`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var ot=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let st=class extends Ce{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return G`
      ${this.separator?G`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:G`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?G`<span class="label">${this.label}</span>`:X}
                ${this.keybinding?G`<span class="keybinding">${this.keybinding}</span>`:X}
              </a>
            </div>
          `}
    `}};st.styles=tt,ot([fe({type:String})],st.prototype,"label",void 0),ot([fe({type:String})],st.prototype,"keybinding",void 0),ot([fe({type:String})],st.prototype,"value",void 0),ot([fe({type:Boolean,reflect:!0})],st.prototype,"separator",void 0),ot([fe({type:Number})],st.prototype,"tabindex",void 0),st=ot([$e("vscode-context-menu-item")],st);const it=[Ee,c`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var nt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let rt=class extends Ce{set data(e){this._data=e;const t=[];e.forEach(((e,o)=>{e.separator||t.push(o)})),this._clickableItemIndexes=t}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then((()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame((()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})}))}))}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this.show=!1)}_onKeyDown(e){const{key:t}=e;switch("ArrowUp"!==t&&"ArrowDown"!==t&&"Escape"!==t&&"Enter"!==t||e.preventDefault(),t){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter()}}_handleArrowUp(){0===this._selectedClickableItemIndex?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:t,label:o,value:s,separator:i,tabindex:n}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:t,label:o,separator:i,tabindex:n,value:s}}))}_dispatchLegacySelectEvent(e){const{keybinding:t,label:o,value:s,separator:i,tabindex:n}=e,r={keybinding:t,label:o,value:s,separator:i,tabindex:n};this.dispatchEvent(new CustomEvent("vsc-select",{detail:r,bubbles:!0,composed:!0}))}_handleEnter(){if(-1===this._selectedClickableItemIndex)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],t=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchLegacySelectEvent(t),this._dispatchSelectEvent(t),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(e){const t=e.currentTarget;this._dispatchLegacySelectEvent(t),this._dispatchSelectEvent(t),this.preventClose||(this.show=!1)}_onItemMouseOver(e){const t=e.target,o=t.dataset.index?+t.dataset.index:-1,s=this._clickableItemIndexes.findIndex((e=>e===o));-1!==s&&(this._selectedClickableItemIndex=s)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return G`${X}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return G`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map((({label:t="",keybinding:o="",value:s="",separator:i=!1,tabindex:n=0},r)=>G`
                <vscode-context-menu-item
                  label=${t}
                  keybinding=${o}
                  value=${s}
                  ?separator=${i}
                  ?selected=${r===e}
                  tabindex=${n}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${r}
                ></vscode-context-menu-item>
              `)):G`<slot></slot>`}
      </div>
    `}};rt.styles=it,nt([fe({type:Array,attribute:!1})],rt.prototype,"data",null),nt([fe({type:Boolean,reflect:!0,attribute:"prevent-close"})],rt.prototype,"preventClose",void 0),nt([fe({type:Boolean,reflect:!0})],rt.prototype,"show",null),nt([fe({type:Number,reflect:!0})],rt.prototype,"tabIndex",void 0),nt([ge()],rt.prototype,"_selectedClickableItemIndex",void 0),nt([ge()],rt.prototype,"_show",void 0),nt([me(".context-menu")],rt.prototype,"_wrapperEl",void 0),rt=nt([$e("vscode-context-menu")],rt);const at=[Ee,c`
    :host {
      background-color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
      opacity: 0.4;
    }
  `];var lt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let ct=class extends Ce{constructor(){super(...arguments),this.role="separator"}render(){return G``}};ct.styles=at,lt([fe({reflect:!0})],ct.prototype,"role",void 0),ct=lt([$e("vscode-divider")],ct);const dt=[Ee,c`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var ht,pt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};!function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"}(ht||(ht={}));const ut=e=>"vscode-checkbox"===e.tagName.toLocaleLowerCase(),vt=e=>"vscode-radio"===e.tagName.toLocaleLowerCase();let bt=class extends Ce{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(e){this._responsive=e,this._firstUpdateComplete&&(e?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}get data(){return this._collectFormData()}_collectFormData(){const e=["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select","vscode-checkbox","vscode-radio"].join(","),t=this.querySelectorAll(e),o={};return t.forEach((e=>{if(!e.hasAttribute("name"))return;const t=e.getAttribute("name");t&&(ut(e)&&e.checked?o[t]=Array.isArray(o[t])?[...o[t],e.value]:[e.value]:"vscode-multi-select"===e.tagName.toLocaleLowerCase()?o[t]=e.value:ut(e)&&!e.checked?o[t]=Array.isArray(o[t])?o[t]:[]:vt(e)&&e.checked||["vscode-textfield","vscode-textarea"].includes(e.tagName.toLocaleLowerCase())||(e=>"vscode-single-select"===e.tagName.toLocaleLowerCase())(e)?o[t]=e.value:vt(e)&&!e.checked&&(o[t]=o[t]?o[t]:""))})),o}_toggleCompactLayout(e){this._assignedFormGroups.forEach((t=>{t.dataset.originalVariant||(t.dataset.originalVariant=t.variant);const o=t.dataset.originalVariant;e===ht.VERTICAL&&"horizontal"===o?t.variant="vertical":t.variant=o,t.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach((t=>{t.dataset.originalVariant||(t.dataset.originalVariant=t.variant);const o=t.dataset.originalVariant;e===ht.HORIZONTAL&&o===ht.HORIZONTAL?t.variant="horizontal":t.variant="vertical"}))}))}_resizeObserverCallback(e){let t=0;for(const o of e)t=o.contentRect.width;const o=t<this.breakpoint?ht.VERTICAL:ht.HORIZONTAL;o!==this._currentFormGroupLayout&&(this._toggleCompactLayout(o),this._currentFormGroupLayout=o)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){this._resizeObserver?.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return G`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};bt.styles=dt,pt([fe({type:Boolean,reflect:!0})],bt.prototype,"responsive",null),pt([fe({type:Number})],bt.prototype,"breakpoint",void 0),pt([fe({type:Object})],bt.prototype,"data",null),pt([me(".wrapper")],bt.prototype,"_wrapperElement",void 0),pt([xe({selector:"vscode-form-group"})],bt.prototype,"_assignedFormGroups",void 0),bt=pt([$e("vscode-form-container")],bt);const ft=[Ee,c`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `];var gt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let _t=class extends Ce{constructor(){super(...arguments),this.variant="horizontal"}render(){return G`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};_t.styles=ft,gt([fe({reflect:!0})],_t.prototype,"variant",void 0),_t=gt([$e("vscode-form-group")],_t);const mt=[Ee,c`
    :host {
      display: block;
      line-height: 1.4em;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
      opacity: 0.9;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `];const yt=new CSSStyleSheet;yt.replaceSync("\n  vscode-form-helper * {\n    margin: 0;\n  }\n\n  vscode-form-helper *:not(:last-child) {\n    margin-bottom: 8px;\n  }\n");let xt=class extends Ce{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){const e=document.adoptedStyleSheets.find((e=>e===yt));e||document.adoptedStyleSheets.push(yt)}render(){return G`<slot></slot>`}};xt.styles=mt,xt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r}([$e("vscode-form-helper")],xt);let wt=0;const kt=(e="")=>(wt++,`${e}${wt}`),Ct=[Ee,c`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var $t=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Et=class extends Ce{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(e,t){-1!==e&&(this._radios[e].checked=!1),-1!==t&&(this._radios[t].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex((e=>e.checked)),t=this._radios.findIndex((e=>e.focused)),o=-1!==t?t:e;this._uncheckPreviousChecked(e,t),this._checkedRadio=-1===o?this._radios.length-1:o-1>=0?o-1:this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex((e=>e.checked)),t=this._radios.findIndex((e=>e.focused)),o=-1!==t?t:e;this._uncheckPreviousChecked(e,t),-1===o?this._checkedRadio=0:o+1<this._radios.length?this._checkedRadio=o+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(e){const{key:t}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(t)&&e.preventDefault(),"ArrowRight"!==t&&"ArrowDown"!==t||this._checkNext(),"ArrowLeft"!==t&&"ArrowUp"!==t||this._checkPrev()}_onChange(e){const t=this._radios.findIndex((t=>t===e.target));-1!==t&&(-1!==this._focusedRadio&&(this._radios[this._focusedRadio].tabIndex=-1),-1!==this._checkedRadio&&this._checkedRadio!==t&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=t,this._checkedRadio=t,this._radios[t].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex((e=>e.autofocus));e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}this._radios.forEach(((e,t)=>{this._focusedRadio>-1?e.tabIndex=t===this._focusedRadio?0:-1:e.tabIndex=0===t?0:-1}))}render(){return G`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};Et.styles=Ct,$t([fe({reflect:!0})],Et.prototype,"variant",void 0),$t([fe({reflect:!0})],Et.prototype,"role",void 0),$t([xe({selector:"vscode-radio"})],Et.prototype,"_radios",void 0),$t([ge()],Et.prototype,"_focusedRadio",void 0),$t([ge()],Et.prototype,"_checkedRadio",void 0),Et=$t([$e("vscode-radio-group")],Et);const It=[Ee,c`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var St=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let At=class extends Ce{set value(e){this._value=e,this._internals.setFormValue(e)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)}))}updated(e){const t=["maxLength","minLength","required"];for(const o of e.keys())if(t.includes(String(o))){this.updateComplete.then((()=>{this._setValidityFromInput()}));break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then((()=>{this._value=e}))}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_handleInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_handleMouseMove(e){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight)return void(this._textareaPointerCursor=!1);const t=this._textareaEl.getBoundingClientRect(),o=e.clientX;this._textareaPointerCursor=o>=t.left+t.width-14-2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return G`
      <div
        class=${Be({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${ze(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${Be({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${ze(this.maxLength)}
        minlength=${ze(this.minLength)}
        rows=${ze(this.rows)}
        cols=${ze(this.cols)}
        name=${ze(this.name)}
        placeholder=${ze(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${Ve({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};At.styles=It,At.formAssociated=!0,At.shadowRootOptions={...pe.shadowRootOptions,delegatesFocus:!0},St([fe()],At.prototype,"autocomplete",void 0),St([fe({type:Boolean,reflect:!0})],At.prototype,"autofocus",void 0),St([fe({attribute:"default-value"})],At.prototype,"defaultValue",void 0),St([fe({type:Boolean,reflect:!0})],At.prototype,"disabled",void 0),St([fe({type:Boolean,reflect:!0})],At.prototype,"invalid",void 0),St([fe({attribute:!1})],At.prototype,"label",void 0),St([fe({type:Number})],At.prototype,"maxLength",void 0),St([fe({type:Number})],At.prototype,"minLength",void 0),St([fe({type:Number})],At.prototype,"rows",void 0),St([fe({type:Number})],At.prototype,"cols",void 0),St([fe()],At.prototype,"name",void 0),St([fe()],At.prototype,"placeholder",void 0),St([fe({type:Boolean,reflect:!0})],At.prototype,"readonly",void 0),St([fe()],At.prototype,"resize",void 0),St([fe({type:Boolean,reflect:!0})],At.prototype,"required",void 0),St([fe({type:Boolean})],At.prototype,"spellcheck",void 0),St([fe({type:Boolean,reflect:!0})],At.prototype,"monospace",void 0),St([fe()],At.prototype,"value",null),St([me("#textarea")],At.prototype,"_textareaEl",void 0),St([ge()],At.prototype,"_value",void 0),St([ge()],At.prototype,"_textareaPointerCursor",void 0),St([ge()],At.prototype,"_shadow",void 0),At=St([$e("vscode-textarea")],At);const Rt=l(Ie()),Ot=[Ee,c`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${Rt});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${Rt});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var Pt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Bt=class extends Ce{set type(e){this._type=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"].includes(e)?e:"text"}get type(){return this._type}set value(e){"file"!==this.type&&(this._value=e,this._internals.setFormValue(e)),this.updateComplete.then((()=>{this._setValidityFromInput()}))}get value(){return this._value}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)}))}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),["max","maxlength","min","minlength","pattern","required","step"].includes(e)&&this.updateComplete.then((()=>{this._setValidityFromInput()}))}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(e,t){this.value=e}_dataChanged(){if(this._value=this._inputEl.value,"file"===this.type&&this._inputEl.files)for(const e of this._inputEl.files)this._internals.setFormValue(e);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_onChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(e){"Enter"===e.key&&this._internals.form&&this._internals.form?.requestSubmit()}render(){return G`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${ze(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${ze(this.max)}
        maxlength=${ze(this.maxLength)}
        min=${ze(this.min)}
        minlength=${ze(this.minLength)}
        ?multiple=${this.multiple}
        name=${ze(this.name)}
        pattern=${ze(this.pattern)}
        placeholder=${ze(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${ze(this.step)}
        .value=${this._value}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      >
      <slot name="content-after"></slot>
    `}};Bt.styles=Ot,Bt.formAssociated=!0,Bt.shadowRootOptions={...pe.shadowRootOptions,delegatesFocus:!0},Pt([fe()],Bt.prototype,"autocomplete",void 0),Pt([fe({type:Boolean,reflect:!0})],Bt.prototype,"autofocus",void 0),Pt([fe({attribute:"default-value"})],Bt.prototype,"defaultValue",void 0),Pt([fe({type:Boolean,reflect:!0})],Bt.prototype,"disabled",void 0),Pt([fe({type:Boolean,reflect:!0})],Bt.prototype,"focused",void 0),Pt([fe({type:Boolean,reflect:!0})],Bt.prototype,"invalid",void 0),Pt([fe({attribute:!1})],Bt.prototype,"label",void 0),Pt([fe({type:Number})],Bt.prototype,"max",void 0),Pt([fe({type:Number})],Bt.prototype,"maxLength",void 0),Pt([fe({type:Number})],Bt.prototype,"min",void 0),Pt([fe({type:Number})],Bt.prototype,"minLength",void 0),Pt([fe({type:Boolean,reflect:!0})],Bt.prototype,"multiple",void 0),Pt([fe({reflect:!0})],Bt.prototype,"name",void 0),Pt([fe()],Bt.prototype,"pattern",void 0),Pt([fe()],Bt.prototype,"placeholder",void 0),Pt([fe({type:Boolean,reflect:!0})],Bt.prototype,"readonly",void 0),Pt([fe({type:Boolean,reflect:!0})],Bt.prototype,"required",void 0),Pt([fe({type:Number})],Bt.prototype,"step",void 0),Pt([fe({reflect:!0})],Bt.prototype,"type",null),Pt([fe()],Bt.prototype,"value",null),Pt([me("#input")],Bt.prototype,"_inputEl",void 0),Pt([ge()],Bt.prototype,"_value",void 0),Pt([ge()],Bt.prototype,"_type",void 0),Bt=Pt([$e("vscode-textfield")],Bt);const zt=[Ee,c`
    :host {
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${16/13};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `];var Vt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Dt=class extends Ce{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o)}connectedCallback(){super.connectedCallback(),this._connected=!0,""===this._id&&(this._id=kt("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const t=this.getRootNode({composed:!1});t&&(e=t.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();(e instanceof Et||e instanceof Ze)&&e.setAttribute("aria-labelledby",this._id);let t="";this.textContent&&(t=this.textContent.trim()),(e instanceof Bt||e instanceof At)&&(e.label=t)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return G`
      <label
        class=${Be({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};Dt.styles=zt,Vt([fe({reflect:!0,attribute:"for"})],Dt.prototype,"htmlFor",null),Vt([fe()],Dt.prototype,"id",null),Vt([fe({type:Boolean,reflect:!0})],Dt.prototype,"required",void 0),Dt=Vt([$e("vscode-label")],Dt);const{I:Lt}=de,Tt=()=>document.createComment(""),Mt=(e,t,o)=>{const s=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=s.insertBefore(Tt(),i),n=s.insertBefore(Tt(),i);o=new Lt(t,n,e,e.options)}else{const t=o._$AB.nextSibling,n=o._$AM,r=n!==e;if(r){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==n._$AU&&o._$AP(t)}if(t!==i||r){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,i),e=t}}}return o},Ft=(e,t,o=e)=>(e._$AI(t,o),e),jt={},Ht=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}},Ut=(e,t,o)=>{const s=new Map;for(let i=t;i<=o;i++)s.set(e[i],i);return s},qt=Oe(class extends Pe{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let s;void 0===o?o=t:void 0!==t&&(s=t);const i=[],n=[];let r=0;for(const t of e)i[r]=s?s(t,r):r,n[r]=o(t,r),r++;return{values:n,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,s]){const i=(e=>e._$AH)(e),{values:n,keys:r}=this.dt(t,o,s);if(!Array.isArray(i))return this.ut=r,n;const a=this.ut??=[],l=[];let c,d,h=0,p=i.length-1,u=0,v=n.length-1;for(;h<=p&&u<=v;)if(null===i[h])h++;else if(null===i[p])p--;else if(a[h]===r[u])l[u]=Ft(i[h],n[u]),h++,u++;else if(a[p]===r[v])l[v]=Ft(i[p],n[v]),p--,v--;else if(a[h]===r[v])l[v]=Ft(i[h],n[v]),Mt(e,l[v+1],i[h]),h++,v--;else if(a[p]===r[u])l[u]=Ft(i[p],n[u]),Mt(e,i[h],i[p]),p--,u++;else if(void 0===c&&(c=Ut(r,u,v),d=Ut(a,h,p)),c.has(a[h]))if(c.has(a[p])){const t=d.get(r[u]),o=void 0!==t?i[t]:null;if(null===o){const t=Mt(e,i[h]);Ft(t,n[u]),l[u]=t}else l[u]=Ft(o,n[u]),Mt(e,i[h],o),i[t]=null;u++}else Ht(i[p]),p--;else Ht(i[h]),h++;for(;u<=v;){const t=Mt(e,l[v+1]);Ft(t,n[u]),l[u++]=t}for(;h<=p;){const e=i[h++];null!==e&&Ht(e)}return this.ut=r,((e,t=jt)=>{e._$AH=t})(e,l),Y}}),Nt=G`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`,Kt=Ee;var Wt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Gt=class extends Ce{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._initialized=!0}))}willUpdate(e){this._initialized&&(e.has("description")||e.has("value")||e.has("selected")||e.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return G`<slot @slotchange=${this._handleSlotChange}></slot>`}};Gt.styles=Kt,Wt([fe({type:String})],Gt.prototype,"value",void 0),Wt([fe({type:String})],Gt.prototype,"description",void 0),Wt([fe({type:Boolean,reflect:!0})],Gt.prototype,"selected",void 0),Wt([fe({type:Boolean,reflect:!0})],Gt.prototype,"disabled",void 0),Gt=Wt([$e("vscode-option")],Gt);const Yt=e=>{const t=[];return" "===e?(t.push(G`&nbsp;`),t):(0===e.indexOf(" ")&&t.push(G`&nbsp;`),t.push(G`${e.trimStart().trimEnd()}`),e.lastIndexOf(" ")===e.length-1&&t.push(G`&nbsp;`),t)},Xt=(e,t)=>{const o=[],s=t.length;return s<1?G`${e}`:(t.forEach(((i,n)=>{const r=e.substring(i[0],i[1]);0===n&&0!==i[0]&&o.push(...Yt(e.substring(0,t[0][0]))),n>0&&n<s&&i[0]-t[n-1][1]!=0&&o.push(...Yt(e.substring(t[n-1][1],i[0]))),o.push(G`<b>${Yt(r)}</b>`),n===s-1&&i[1]<e.length&&o.push(...Yt(e.substring(i[1],e.length)))})),o)};var Zt=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const Jt=22;class Qt extends Ce{set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",!0===e?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){["contains","fuzzy","startsWith","startsWithPerTerm"].includes(e)?this._filter=e:(this._filter="fuzzy",console.warn(`[VSCode Webview Elements] Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this))}get filter(){return this._filter}set options(e){this._options=e.map(((e,t)=>({...e,index:t})))}get options(){return this._options.map((({label:e,value:t,description:o,selected:s,disabled:i})=>({label:e,value:t,description:o,selected:s,disabled:i})))}constructor(){super(),this.ariaExpanded="false",this.combobox=!1,this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this.tabIndex=0,this._activeIndex=-1,this._currentDescription="",this._filter="fuzzy",this._filterPattern="",this._selectedIndex=-1,this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._listScrollTop=0,this._multiple=!1,this._valueOptionIndexMap={},this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=e=>{-1===e.composedPath().findIndex((e=>e===this))&&(this._toggleDropdown(!1),window.removeEventListener("click",this._onClickOutside))},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this.addEventListener("vsc-option-state-change",(e=>{e.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}get _filteredOptions(){return this.combobox&&""!==this._filterPattern?((e,t,o)=>{const s=[];return e.forEach((e=>{let i;switch(o){case"startsWithPerTerm":i=((e,t)=>{const o={match:!1,ranges:[]},s=e.toLowerCase(),i=t.toLowerCase(),n=s.split(" ");let r=0;return n.forEach(((t,s)=>{if(s>0&&(r+=n[s-1].length+1),o.match)return;const a=t.indexOf(i),l=i.length;0===a&&(o.match=!0,o.ranges.push([r+a,Math.min(r+a+l,e.length)]))})),o})(e.label,t);break;case"startsWith":i=((e,t)=>{const o={match:!1,ranges:[]};return 0===e.toLowerCase().indexOf(t.toLowerCase())&&(o.match=!0,o.ranges=[[0,t.length]]),o})(e.label,t);break;case"contains":i=((e,t)=>{const o={match:!1,ranges:[]},s=e.toLowerCase().indexOf(t.toLowerCase());return s>-1&&(o.match=!0,o.ranges=[[s,s+t.length]]),o})(e.label,t);break;default:i=((e,t)=>{const o={match:!1,ranges:[]};let s=0,i=0;const n=t.length-1,r=e.toLowerCase(),a=t.toLowerCase();for(let e=0;e<=n;e++){if(i=r.indexOf(a[e],s),-1===i)return{match:!1,ranges:[]};o.match=!0,o.ranges.push([i,i+1]),s=i+1}return o})(e.label,t)}i.match&&s.push({...e,ranges:i.ranges})})),s})(this._options,this._filterPattern,this._filter):this._options}get _currentOptions(){return this.combobox?this._filteredOptions:this._options}_setStateFromSlottedElements(){const e=[];let t=0;const o=this._assignedOptions??[],s=[],i=[];this._valueOptionIndexMap={},o.forEach(((o,n)=>{const{innerText:r,description:a,disabled:l}=o,c="string"==typeof o.value?o.value:r.trim(),d=o.selected??!1,h={label:r.trim(),value:c,description:a,selected:d,index:t,disabled:l};t=e.push(h),d&&!this._multiple&&(this._activeIndex=n),d&&(s.push(e.length-1),i.push(c)),this._valueOptionIndexMap[h.value]=h.index})),this._options=e,s.length>0&&(this._selectedIndex=s[0],this._selectedIndexes=s,this._value=i[0],this._values=i),this._multiple||this.combobox||0!==s.length||(this._selectedIndex=this._options.length>0?0:-1)}async _toggleDropdown(e){this.open=e,this.ariaExpanded=String(e),!e||this._multiple||this.combobox||(this._activeIndex=this._selectedIndex,this._activeIndex>9&&(await this.updateComplete,this._listElement.scrollTop=Math.floor(this._activeIndex*Jt))),e?window.addEventListener("click",this._onClickOutside):window.removeEventListener("click",this._onClickOutside)}_dispatchChangeEvent(){this._multiple?this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._selectedIndexes,value:this._values}})):this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._selectedIndex,value:this._value}})),this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}_onFaceClick(){this._toggleDropdown(!this.open),this._multiple&&(this._activeIndex=0)}_toggleComboboxDropdown(){this._filterPattern="",this._toggleDropdown(!this.open),this._multiple&&(this._activeIndex=-1)}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){"Enter"===e.key&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const t=e.target;t.matches(".option")&&(this._activeIndex=Number(this.combobox?t.dataset.filteredIndex:t.dataset.index))}_onEnterKeyDown(){const e=this.combobox?this._filteredOptions:this._options,t=!this.open;this._toggleDropdown(t),this._multiple||t||this._selectedIndex===this._activeIndex||(this._selectedIndex=this._activeIndex>-1?e[this._activeIndex].index:-1,this._value=this._selectedIndex>-1?this._options[this._selectedIndex].value:"",this._dispatchChangeEvent()),this.combobox&&(this._multiple||t||(this._selectedIndex=this._activeIndex>-1?this._filteredOptions[this._activeIndex].index:-1),!this._multiple&&t&&this.updateComplete.then((()=>{this._scrollActiveElementToTop()}))),this._multiple&&t&&(this._activeIndex=0)}_onSpaceKeyDown(){if(this.open){if(this.open&&this._multiple&&this._activeIndex>-1){const e=this.combobox?this._filteredOptions:this._options,{selected:t}=e[this._activeIndex];e[this._activeIndex].selected=!t,this._selectedIndexes=[],e.forEach((({index:e,selected:t})=>{t&&this._selectedIndexes.push(e)}))}}else this._toggleDropdown(!0)}_scrollActiveElementToTop(){this._listElement.scrollTop=Math.floor(this._activeIndex*Jt)}async _adjustOptionListScrollPos(e){if((this.combobox?this._filteredOptions.length:this._options.length)<=10)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove),this._listElement||await this.updateComplete;const t=this._listElement.scrollTop,o=this._activeIndex*Jt;"down"===e&&o+Jt>=34+t&&(this._listElement.scrollTop=(this._activeIndex-9)*Jt),"up"===e&&o<=t-Jt&&this._scrollActiveElementToTop()}_onArrowUpKeyDown(){if(this.open){if(this._activeIndex<=0)return;this._activeIndex-=1,this._adjustOptionListScrollPos("up")}}_onArrowDownKeyDown(){if(this.open){if(this._activeIndex>=this._currentOptions.length-1)return;this._activeIndex+=1,this._adjustOptionListScrollPos("down")}}_onComponentKeyDown(e){[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),"Enter"===e.key&&this._onEnterKeyDown()," "===e.key&&this._onSpaceKeyDown(),"Escape"===e.key&&this._toggleDropdown(!1),"ArrowUp"===e.key&&this._onArrowUpKeyDown(),"ArrowDown"===e.key&&this._onArrowDownKeyDown()}_onComponentFocus(){this.focused=!0}_onComponentBlur(){this.focused=!1}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select()}_onComboboxInputInput(e){this._filterPattern=e.target.value,this._activeIndex=-1,this._toggleDropdown(!0)}_onComboboxInputClick(){this._toggleDropdown(!0)}_renderOptions(){return[]}_renderDescription(){if(!this._options[this._activeIndex])return X;const{description:e}=this._options[this._activeIndex];return e?G`<div class="description">${e}</div>`:X}_renderSelectFace(){return G`${X}`}_renderComboboxFace(){return G`${X}`}_renderDropdownControls(){return G`${X}`}_renderDropdown(){const e=Be({dropdown:!0,multiple:this._multiple});return G`
      <div class=${e}>
        ${"above"===this.position?this._renderDescription():X}
        ${this._renderOptions()} ${this._renderDropdownControls()}
        ${"below"===this.position?this._renderDescription():X}
      </div>
    `}render(){return G`
      <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
      ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
      ${this.open?this._renderDropdown():X}
    `}}Zt([fe({type:String,reflect:!0,attribute:"aria-expanded"})],Qt.prototype,"ariaExpanded",void 0),Zt([fe({type:Boolean,reflect:!0})],Qt.prototype,"combobox",void 0),Zt([fe({type:Boolean,reflect:!0})],Qt.prototype,"disabled",null),Zt([fe({type:Boolean,reflect:!0})],Qt.prototype,"invalid",void 0),Zt([fe()],Qt.prototype,"filter",null),Zt([fe({type:Boolean,reflect:!0})],Qt.prototype,"focused",void 0),Zt([fe({type:Boolean,reflect:!0})],Qt.prototype,"open",void 0),Zt([fe({type:Array})],Qt.prototype,"options",null),Zt([fe({reflect:!0})],Qt.prototype,"position",void 0),Zt([fe({type:Number,attribute:!0,reflect:!0})],Qt.prototype,"tabIndex",void 0),Zt([xe({flatten:!0,selector:"vscode-option"})],Qt.prototype,"_assignedOptions",void 0),Zt([ge()],Qt.prototype,"_activeIndex",void 0),Zt([ge()],Qt.prototype,"_currentDescription",void 0),Zt([ge()],Qt.prototype,"_filter",void 0),Zt([ge()],Qt.prototype,"_filteredOptions",null),Zt([ge()],Qt.prototype,"_filterPattern",void 0),Zt([ge()],Qt.prototype,"_selectedIndex",void 0),Zt([ge()],Qt.prototype,"_selectedIndexes",void 0),Zt([ge()],Qt.prototype,"_options",void 0),Zt([ge()],Qt.prototype,"_value",void 0),Zt([ge()],Qt.prototype,"_values",void 0),Zt([ge()],Qt.prototype,"_listScrollTop",void 0),Zt([me(".options")],Qt.prototype,"_listElement",void 0);const eo=[Ee,c`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      flex-shrink: 0;
      height: 24px;
      margin: 0;
      padding: 0;
      width: 30px;
    }

    .combobox-button:focus,
    .combobox-button:hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .combobox-button:focus {
      outline: 0;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      position: absolute;
      right: 8px;
      top: 5px;
      width: 14px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    :host([position='above']) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      max-height: 222px;
      overflow: auto;
      padding: 1px;
    }

    .option {
      align-items: center;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      border-style: dotted;
      border-color: var(--vscode-list-focusOutline, #0078d4);
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      border-color: var(--vscode-list-activeSelectionBackground, #04395e);
      border-style: solid;
      border-width: 1px;
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      border-color: var(--vscode-list-focusOutline, #0078d4);
      border-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      border-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      border-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      border: 1px solid currentColor;
      border-radius: 2px;
      box-sizing: border-box;
      height: 14px;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 14px;
    }

    .checkbox-icon.checked:before,
    .checkbox-icon.checked:after {
      content: '';
      display: block;
      height: 5px;
      position: absolute;
      transform: rotate(-45deg);
      width: 10px;
    }

    .checkbox-icon.checked:before {
      background-color: var(--vscode-foreground, #cccccc);
      left: 1px;
      top: 2.5px;
    }

    .checkbox-icon.checked:after {
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      left: 1px;
      top: -0.5px;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `],to=eo;var oo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let so=class extends Qt{set selectedIndexes(e){this._selectedIndexes=e}get selectedIndexes(){return this._selectedIndexes}set value(e){const t=Array.isArray(e)?e.map((e=>String(e))):[String(e)];this._values=[],this._selectedIndexes.forEach((e=>{this._options[e].selected=!1})),this._selectedIndexes=[],t.forEach((e=>{"number"==typeof this._valueOptionIndexMap[e]&&(this._selectedIndexes.push(this._valueOptionIndexMap[e]),this._options[this._valueOptionIndexMap[e]].selected=!0,this._values.push(e))})),this._selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(e)?e:[e],this._setFormValue(),this._manageRequired()}get value(){return this._values}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._multiple=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._setDefaultValue(),this._manageRequired()}))}formResetCallback(){this.updateComplete.then((()=>{this.value=this.defaultValue}))}formStateRestoreCallback(e,t){const o=Array.from(e.entries()).map((e=>String(e[1])));this.updateComplete.then((()=>{this.value=o}))}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map((e=>String(e)));this.value=e}}_manageRequired(){const{value:e}=this;0===e.length&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach((t=>{e.append(this.name??"",t)})),this._internals.setFormValue(e)}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&this.options.forEach(((e,t)=>{this._requestedValueToSetLater.includes(e.value)&&(this._selectedIndexes.push(t),this._values.push(e.value),this._options[t].selected=!0,this._requestedValueToSetLater=this._requestedValueToSetLater.filter((t=>t!==e.value)))}))}_onOptionClick(e){const t=e.composedPath().find((e=>"matches"in e&&e.matches("li.option")));if(!t)return;const o=Number(t.dataset.index);if(this._options[o]){if(this._options[o].disabled)return;this._options[o].selected=!this._options[o].selected}this._selectedIndexes=[],this._values=[],this._options.forEach((e=>{e.selected&&(this._selectedIndexes.push(e.index),this._values.push(e.value))})),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()}_onMultiAcceptClick(){this._toggleDropdown(!1)}_onMultiDeselectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map((e=>({...e,selected:!1}))),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map((e=>({...e,selected:!0}))),this._options.forEach(((e,t)=>{this._selectedIndexes.push(t),this._values.push(e.value),this._dispatchChangeEvent()})),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._selectedIndexes.length){case 0:return G`<span class="select-face-badge no-item"
          >No items selected</span
        >`;case 1:return G`<span class="select-face-badge">1 item selected</span>`;default:return G`<span class="select-face-badge"
          >${this._selectedIndexes.length} items selected</span
        >`}}_renderSelectFace(){return G`
      <div
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        tabindex=${this.tabIndex>-1?0:-1}
      >
        ${this._renderLabel()} ${Nt}
      </div>
    `}_renderComboboxFace(){const e=this._selectedIndex>-1?this._options[this._selectedIndex].label:"";return G`
      <div class="combobox-face face">
        ${this._renderLabel()}
        <input
          class="combobox-input"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${e}
          @focus=${this._onComboboxInputFocus}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
        >
        <button
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
        >
          ${Nt}
        </button>
      </div>
    `}_renderOptions(){const e=this.combobox?this._filteredOptions:this._options;return G`
      <ul
        class="options"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${qt(e,(e=>e.index),((e,t)=>{const o=this._selectedIndexes.includes(e.index),s=Be({active:t===this._activeIndex&&!e.disabled,option:!0,selected:o,disabled:e.disabled}),i=Be({"checkbox-icon":!0,checked:o});return G`
              <li
                class=${s}
                data-index=${e.index}
                data-filtered-index=${t}
              >
                <span class=${i}></span>
                <span class="option-label"
                  >${e.ranges?.length?Xt(e.label,e.ranges??[]):e.label}</span
                >
              </li>
            `}))}
      </ul>
    `}_renderDropdownControls(){return G`
      <div class="dropdown-controls">
        <button
          type="button"
          @click=${this._onMultiSelectAllClick}
          title="Select all"
          class="action-icon"
          id="select-all"
        >
          <vscode-icon name="checklist"></vscode-icon>
        </button>
        <button
          type="button"
          @click=${this._onMultiDeselectAllClick}
          title="Deselect all"
          class="action-icon"
          id="select-none"
        >
          <vscode-icon name="clear-all"></vscode-icon>
        </button>
        <vscode-button class="button-accept" @click=${this._onMultiAcceptClick}
          >OK</vscode-button
        >
      </div>
    `}};so.styles=to,so.shadowRootOptions={...pe.shadowRootOptions,delegatesFocus:!0},so.formAssociated=!0,oo([fe({type:Array,attribute:"default-value"})],so.prototype,"defaultValue",void 0),oo([fe({type:Boolean,reflect:!0})],so.prototype,"required",void 0),oo([fe({reflect:!0})],so.prototype,"name",void 0),oo([fe({type:Array,attribute:!1})],so.prototype,"selectedIndexes",null),oo([fe({type:Array})],so.prototype,"value",null),oo([me(".face")],so.prototype,"_faceElement",void 0),so=oo([$e("vscode-multi-select")],so);const io=[Ee,c`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var no=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let ro=class extends Ce{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return G`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};ro.styles=io,no([fe({reflect:!0,attribute:"aria-label"})],ro.prototype,"ariaLabel",void 0),no([fe({reflect:!0,attribute:"aria-live"})],ro.prototype,"ariaLive",void 0),no([fe({reflect:!0})],ro.prototype,"role",void 0),ro=no([$e("vscode-progress-ring")],ro);const ao=[Ee,Ne,c`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var lo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let co=class extends(qe(Ue)){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this.type="radio",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault()," "!==e.key||this.checked||(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),"Enter"===e.key&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach((e=>{e.checked=e.defaultChecked})),this.updateComplete.then((()=>{this._handleValueChange()}))}formStateRestoreCallback(e,t){this.value===e&&""!==e&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const e=this.getRootNode({composed:!0});if(!e)return[];const t=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(t)}_uncheckOthers(e){e.forEach((e=>{e!==this&&(e.checked=!1)}))}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach((e=>{e!==this&&(e.checked=!1)}))}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(e,t){this.updateComplete.then((()=>{e.forEach((e=>{e.setComponentValidity(t)}))}))}_setActualFormValue(){let e="";e=this.checked?this.value?this.value:"on":null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),t=e.some((e=>e.required));if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const o=!!e.find((e=>e.checked)),s=t&&!o;this._setGroupValidity(e,!s)}}render(){const e=Be({icon:!0,checked:this.checked}),t=Be({"label-inner":!0,"is-slot-empty":""===this._slottedText});return G`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
          tabindex=${this.tabIndex}
        >
        <div class=${e}></div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${t}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};co.styles=ao,co.formAssociated=!0,co.shadowRootOptions={...pe.shadowRootOptions,delegatesFocus:!0},lo([fe({type:Boolean,reflect:!0})],co.prototype,"autofocus",void 0),lo([fe({type:Boolean,reflect:!0})],co.prototype,"checked",void 0),lo([fe({type:Boolean,reflect:!0,attribute:"default-checked"})],co.prototype,"defaultChecked",void 0),lo([fe({type:Boolean,reflect:!0})],co.prototype,"invalid",void 0),lo([fe({reflect:!0})],co.prototype,"name",void 0),lo([fe()],co.prototype,"value",void 0),lo([fe({type:Boolean,reflect:!0})],co.prototype,"disabled",void 0),lo([fe({type:Boolean,reflect:!0})],co.prototype,"required",void 0),lo([fe({reflect:!0})],co.prototype,"role",void 0),lo([fe({type:Number,reflect:!0})],co.prototype,"tabIndex",void 0),lo([ge()],co.prototype,"_slottedText",void 0),lo([me("#input")],co.prototype,"_inputEl",void 0),lo([fe()],co.prototype,"type",void 0),co=lo([$e("vscode-radio")],co);const ho=eo;var po=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let uo=class extends Qt{set selectedIndex(e){this._selectedIndex=e,this._value=this._options[this._selectedIndex]?this._options[this._selectedIndex].value:""}get selectedIndex(){return this._selectedIndex}set value(e){this._options[this._selectedIndex]&&(this._options[this._selectedIndex].selected=!1),this._selectedIndex=this._options.findIndex((t=>t.value===e)),this._selectedIndex>-1?(this._options[this._selectedIndex].selected=!0,this._value=e,this._requestedValueToSetLater=""):(this._value="",this._requestedValueToSetLater=e)}get value(){return this._options[this._selectedIndex]?this._options[this._selectedIndex]?.value??"":""}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");e&&(e.value=this._options[this._selectedIndex]?this._options[this._selectedIndex].label:"")}constructor(){super(),this.defaultValue="",this.role="listbox",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._multiple=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._manageRequired()}))}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then((()=>{this.value=e}))}get type(){return"select-one"}get form(){return this._internals.form}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const e=this._options.findIndex((e=>e.value===this._requestedValueToSetLater));e>0&&(this._selectedIndex=e,this._requestedValueToSetLater="")}this._selectedIndex>-1&&this._options.length>0?this._internals.setFormValue(this._options[this._selectedIndex].value):this._internals.setFormValue(null)}_onArrowUpKeyDown(){super._onArrowUpKeyDown(),this.open||this._selectedIndex<=0||(this._filterPattern="",this._selectedIndex-=1,this._activeIndex=this._selectedIndex,this._value=this._options[this._selectedIndex].value,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_onArrowDownKeyDown(){super._onArrowDownKeyDown(),this.open||this._selectedIndex>=this._options.length-1||(this._filterPattern="",this._selectedIndex+=1,this._activeIndex=this._selectedIndex,this._value=this._options[this._selectedIndex].value,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_onEnterKeyDown(){super._onEnterKeyDown(),this.updateInputValue(),this._internals.setFormValue(this._value),this._manageRequired()}_onOptionClick(e){const t=e.composedPath().find((e=>e?.matches("li.option")));t&&!t.matches(".disabled")&&(this._selectedIndex=Number(t.dataset.index),this._value=this._options[this._selectedIndex].value,this._toggleDropdown(!1),this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){const{value:e}=this;""===e&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){const e=this._options[this._selectedIndex]?.label??"";return G`
      <div
        class="select-face face"
        @click=${this._onFaceClick}
        tabindex=${this.tabIndex>-1?0:-1}
      >
        <span class="text">${e}</span> ${Nt}
      </div>
    `}_renderComboboxFace(){const e=this._selectedIndex>-1?this._options[this._selectedIndex].label:"";return G`
      <div class="combobox-face face">
        <input
          class="combobox-input"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${e}
          @focus=${this._onComboboxInputFocus}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
        >
        <button
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
        >
          ${Nt}
        </button>
      </div>
    `}_renderOptions(){const e=(this.combobox?this._filteredOptions:this._options).map(((e,t)=>{const o=Be({option:!0,disabled:e.disabled,selected:e.selected,active:t===this._activeIndex&&!e.disabled});return G`
        <li
          class=${o}
          data-index=${e.index}
          data-filtered-index=${t}
        >
          ${e.ranges?.length?Xt(e.label,e.ranges??[]):e.label}
        </li>
      `}));return G`
      <ul
        class="options"
        @mouseover=${this._onOptionMouseOver}
        @click=${this._onOptionClick}
      >
        ${e}
      </ul>
    `}};uo.styles=ho,uo.shadowRootOptions={...pe.shadowRootOptions,delegatesFocus:!0},uo.formAssociated=!0,po([fe({attribute:"default-value"})],uo.prototype,"defaultValue",void 0),po([fe({type:String,attribute:!0,reflect:!0})],uo.prototype,"role",void 0),po([fe({reflect:!0})],uo.prototype,"name",void 0),po([fe({type:Number,attribute:"selected-index"})],uo.prototype,"selectedIndex",null),po([fe({type:String})],uo.prototype,"value",null),po([fe({type:Boolean,reflect:!0})],uo.prototype,"required",void 0),po([me(".face")],uo.prototype,"_face",void 0),uo=po([$e("vscode-single-select")],uo);const vo=[Ee,c`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var bo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let fo=class extends Ce{constructor(){super(...arguments),this.shadow=!0,this.scrolled=!1,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar()},this._onSlotChange=()=>{this._zIndexFix()},this._onScrollThumbMouseMoveBound=this._onScrollThumbMouseMove.bind(this),this._onScrollThumbMouseUpBound=this._onScrollThumbMouseUp.bind(this),this._onComponentMouseOverBound=this._onComponentMouseOver.bind(this),this._onComponentMouseOutBound=this._onComponentMouseOut.bind(this)}set scrollPos(e){this._scrollableContainer.scrollTop=e}get scrollPos(){return this._scrollableContainer?this._scrollableContainer.scrollTop:0}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then((()=>{this._scrollableContainer.addEventListener("scroll",this._onScrollableContainerScroll.bind(this)),this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement)})),this.addEventListener("mouseover",this._onComponentMouseOverBound),this.addEventListener("mouseout",this._onComponentMouseOutBound)}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect(),this.removeEventListener("mouseover",this._onComponentMouseOverBound),this.removeEventListener("mouseout",this._onComponentMouseOutBound)}_updateScrollbar(){const e=this.getBoundingClientRect(),t=this._contentElement.getBoundingClientRect();e.height>=t.height?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=e.height*(e.height/t.height)),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach((t=>{if("style"in t){const o=window.getComputedStyle(t).zIndex;/([0-9-])+/g.test(o)&&(e=Number(o)>e?Number(o):e)}})),this._scrollbarTrackZ=e+1,this.requestUpdate()}_onScrollThumbMouseDown(e){const t=this.getBoundingClientRect(),o=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=o.top-t.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.addEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollThumbMouseMove(e){const t=this._scrollThumbStartY+(e.screenY-this._mouseStartY);let o=0;const s=this.getBoundingClientRect().height,i=this._scrollThumbElement.getBoundingClientRect().height,n=this._contentElement.getBoundingClientRect().height;o=t<0?0:t>s-i?s-i:t,this._thumbY=o,this._scrollableContainer.scrollTop=o/(s-i)*(n-s)}_onScrollThumbMouseUp(e){this._isDragging=!1,this._thumbActive=!1;const t=this.getBoundingClientRect(),{x:o,y:s,width:i,height:n}=t,{pageX:r,pageY:a}=e;(r>o+i||r<o||a>s+n||a<s)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.removeEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollableContainerScroll(){const e=this._scrollableContainer.scrollTop;this.scrolled=e>0;const t=this.getBoundingClientRect().height,o=this._scrollThumbElement.getBoundingClientRect().height,s=e/(this._contentElement.getBoundingClientRect().height-t);this._thumbY=s*(t-o)}_onComponentMouseOver(){this._thumbVisible=!0,this._thumbFade=!1}_onComponentMouseOut(){this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)}render(){return G`
      <div
        class="scrollable-container"
        .style=${Ve({userSelect:this._isDragging?"none":"auto"})}
      >
        <div
          class=${Be({shadow:!0,visible:this.scrolled})}
          .style=${Ve({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?G`<div class="prevent-interaction"></div>`:X}
        <div
          class=${Be({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
        >
          <div
            class=${Be({"scrollbar-thumb":!0,visible:this._thumbVisible,fade:this._thumbFade,active:this._thumbActive})}
            .style=${Ve({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._onScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `}};fo.styles=vo,bo([fe({type:Boolean,reflect:!0})],fo.prototype,"shadow",void 0),bo([fe({type:Boolean,reflect:!0})],fo.prototype,"scrolled",void 0),bo([fe({type:Number,attribute:"scroll-pos"})],fo.prototype,"scrollPos",null),bo([fe({type:Number,attribute:"scroll-max"})],fo.prototype,"scrollMax",null),bo([ge()],fo.prototype,"_isDragging",void 0),bo([ge()],fo.prototype,"_thumbHeight",void 0),bo([ge()],fo.prototype,"_thumbY",void 0),bo([ge()],fo.prototype,"_thumbVisible",void 0),bo([ge()],fo.prototype,"_thumbFade",void 0),bo([ge()],fo.prototype,"_thumbActive",void 0),bo([me(".content")],fo.prototype,"_contentElement",void 0),bo([me(".scrollbar-thumb",!0)],fo.prototype,"_scrollThumbElement",void 0),bo([me(".scrollable-container")],fo.prototype,"_scrollableContainer",void 0),bo([xe()],fo.prototype,"_assignedElements",void 0),fo=bo([$e("vscode-scrollable")],fo);const go=[Ee,c`
    :host {
      --separator-border: var(--vscode-editorWidget-border, transparent);

      border: 1px solid var(--vscode-editorWidget-border);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var _o,mo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const yo=e=>{if(!e)return{value:0,unit:"pixel"};let t,o;return e.endsWith("%")?(t="percent",o=+e.substring(0,e.length-1)):e.endsWith("px")?(t="pixel",o=+e.substring(0,e.length-2)):(t="pixel",o=+e),{unit:t,value:isNaN(o)?0:o}},xo=(e,t)=>0===t?0:Math.min(100,e/t*100),wo=(e,t)=>t*(e/100);let ko=_o=class extends Ce{set split(e){this._split!==e&&(this._split=e,this.resetHandlePosition())}get split(){return this._split}set handlePosition(e){this._rawHandlePosition=e,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(e){this._fixedPane=e,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition="50%",this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=e=>{const t=e[0].contentRect,{width:o,height:s}=t;this._boundRect=t;const i="vertical"===this.split?o:s;"start"===this.fixedPane&&(this._handlePosition=this._fixedPaneSize),"end"===this.fixedPane&&(this._handlePosition=i-this._fixedPaneSize)},this._handleMouseUp=e=>{this._isDragActive=!1,e.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:t,height:o}=this._boundRect,s="vertical"===this.split?t:o,i=xo(this._handlePosition,s);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:i},composed:!0}))},this._handleMouseMove=e=>{const{clientX:t,clientY:o}=e,{left:s,top:i,height:n,width:r}=this._boundRect,a="vertical"===this.split,l=a?r:n,c=a?t-s:o-i;this._handlePosition=Math.max(0,Math.min(c-this._handleOffset+this.handleSize/2,l)),"start"===this.fixedPane&&(this._fixedPaneSize=this._handlePosition),"end"===this.fixedPane&&(this._fixedPaneSize=l-this._handlePosition)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl)return void(this._handlePosition=0);const{width:e,height:t}=this._wrapperEl.getBoundingClientRect(),o="vertical"===this.split?e:t,{value:s,unit:i}=yo(this.initialHandlePosition??"50%");this._handlePosition="percent"===i?wo(s,o):s}connectedCallback(){super.connectedCallback()}firstUpdated(e){"none"!==this.fixedPane&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:t,unit:o}=this.handlePosition?yo(this.handlePosition):yo(this.initialHandlePosition);this._setPosition(t,o),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:e,unit:t}=yo(this.handlePosition);this._setPosition(e,t)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if("none"===this.fixedPane)this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:e,height:t}=this._boundRect,o="vertical"===this.split?e:t;this._fixedPaneSize="start"===this.fixedPane?this._handlePosition:o-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_setPosition(e,t){const{width:o,height:s}=this._boundRect,i="vertical"===this.split?o:s;this._handlePosition="percent"===t?wo(e,i):e}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(e){1!==e.buttons&&(this._hover=!1,this._hide=!0)}_handleMouseDown(e){e.stopPropagation(),e.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:t,top:o}=this._boundRect,{left:s,top:i}=this._handleEl.getBoundingClientRect(),n=e.clientX-t,r=e.clientY-o;"vertical"===this.split&&(this._handleOffset=n-(s-t)),"horizontal"===this.split&&(this._handleOffset=r-(i-o)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach((e=>{e instanceof _o&&e.resetHandlePosition()}))}render(){const{width:e,height:t}=this._boundRect,o="vertical"===this.split?e:t,s="none"!==this.fixedPane?`${this._handlePosition}px`:`${xo(this._handlePosition,o)}%`;let i="";i="start"===this.fixedPane?`0 0 ${this._fixedPaneSize}px`:`1 1 ${xo(this._handlePosition,o)}%`;let n="";n="end"===this.fixedPane?`0 0 ${this._fixedPaneSize}px`:`1 1 ${xo(o-this._handlePosition,o)}%`;const r={left:"vertical"===this.split?s:"0",top:"vertical"===this.split?"0":s},a=this.handleSize??4;"vertical"===this.split&&(r.marginLeft=0-a/2+"px",r.width=`${a}px`),"horizontal"===this.split&&(r.height=`${a}px`,r.marginTop=0-a/2+"px");const l=Be({"handle-overlay":!0,active:this._isDragActive,"split-vertical":"vertical"===this.split,"split-horizontal":"horizontal"===this.split}),c=Be({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":"vertical"===this.split,"split-horizontal":"horizontal"===this.split}),d={wrapper:!0,horizontal:"horizontal"===this.split};return G`
      <div class=${Be(d)}>
        <div class="start" .style=${Ve({flex:i})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${Ve({flex:n})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${l}></div>
        <div
          class=${c}
          .style=${Ve(r)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};ko.styles=go,mo([fe({reflect:!0})],ko.prototype,"split",null),mo([fe({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],ko.prototype,"resetOnDblClick",void 0),mo([fe({type:Number,reflect:!0,attribute:"handle-size"})],ko.prototype,"handleSize",void 0),mo([fe({reflect:!0,attribute:"initial-handle-position"})],ko.prototype,"initialHandlePosition",void 0),mo([fe({attribute:"handle-position"})],ko.prototype,"handlePosition",null),mo([fe({attribute:"fixed-pane"})],ko.prototype,"fixedPane",null),mo([ge()],ko.prototype,"_handlePosition",void 0),mo([ge()],ko.prototype,"_isDragActive",void 0),mo([ge()],ko.prototype,"_hover",void 0),mo([ge()],ko.prototype,"_hide",void 0),mo([me(".wrapper")],ko.prototype,"_wrapperEl",void 0),mo([me(".handle")],ko.prototype,"_handleEl",void 0),mo([xe({slot:"start",selector:"vscode-split-layout"})],ko.prototype,"_nestedLayoutsAtStart",void 0),mo([xe({slot:"end",selector:"vscode-split-layout"})],ko.prototype,"_nestedLayoutsAtEnd",void 0),ko=_o=mo([$e("vscode-split-layout")],ko);const Co=[Ee,c`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var $o=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Eo=class extends Ce{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,t,o){if(super.attributeChangedCallback(e,t,o),"active"===e){const e=null!==o;this.ariaSelected=e?"true":"false",this.tabIndex=e?0:-1}}render(){return G`
      <div
        class=${Be({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${Be({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};Eo.styles=Co,$o([fe({type:Boolean,reflect:!0})],Eo.prototype,"active",void 0),$o([fe({reflect:!0,attribute:"aria-controls"})],Eo.prototype,"ariaControls",void 0),$o([fe({type:Boolean,reflect:!0})],Eo.prototype,"panel",void 0),$o([fe({reflect:!0})],Eo.prototype,"role",void 0),$o([fe({type:Number,reflect:!0,attribute:"tab-id"})],Eo.prototype,"tabId",void 0),Eo=$o([$e("vscode-tab-header")],Eo);const Io=[Ee,c`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `];var So=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Ao=class extends Ce{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return G` <slot></slot> `}};Ao.styles=Io,So([fe({type:Boolean,reflect:!0})],Ao.prototype,"hidden",void 0),So([fe({reflect:!0,attribute:"aria-labelledby"})],Ao.prototype,"ariaLabelledby",void 0),So([fe({type:Boolean,reflect:!0})],Ao.prototype,"panel",void 0),So([fe({reflect:!0})],Ao.prototype,"role",void 0),So([fe({type:Number,reflect:!0})],Ao.prototype,"tabIndex",void 0),Ao=So([$e("vscode-tab-panel")],Ao);const Ro=[Ee,c`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var Oo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Po=class extends Ce{constructor(){super(...arguments),this.role="rowgroup"}render(){return G` <slot></slot> `}};Po.styles=Ro,Oo([fe({reflect:!0})],Po.prototype,"role",void 0),Po=Oo([$e("vscode-table-body")],Po);const Bo=[Ee,c`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var zo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Vo=class extends Ce{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?G`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:X;return G`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};Vo.styles=Bo,zo([fe({reflect:!0})],Vo.prototype,"role",void 0),zo([fe({attribute:"column-label"})],Vo.prototype,"columnLabel",void 0),zo([fe({type:Boolean,reflect:!0})],Vo.prototype,"compact",void 0),Vo=zo([$e("vscode-table-cell")],Vo);const Do=[Ee,c`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var Lo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let To=class extends Ce{constructor(){super(...arguments),this.role="rowgroup"}render(){return G` <slot></slot> `}};To.styles=Do,Lo([fe({reflect:!0})],To.prototype,"role",void 0),To=Lo([$e("vscode-table-header")],To);const Mo=[Ee,c`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var Fo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let jo=class extends Ce{constructor(){super(...arguments),this.role="columnheader"}render(){return G`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};jo.styles=Mo,Fo([fe({reflect:!0})],jo.prototype,"role",void 0),jo=Fo([$e("vscode-table-header-cell")],jo);const Ho=[Ee,c`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var Uo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let qo=class extends Ce{constructor(){super(...arguments),this.role="row"}render(){return G` <slot></slot> `}};qo.styles=Ho,Uo([fe({reflect:!0})],qo.prototype,"role",void 0),qo=Uo([$e("vscode-table-row")],qo);const No=(e,t)=>"number"!=typeof e||Number.isNaN(e)?"string"==typeof e&&/^[0-9.]+$/.test(e)?Number(e)/t*100:"string"==typeof e&&/^[0-9.]+%$/.test(e)?Number(e.substring(0,e.length-1)):"string"==typeof e&&/^[0-9.]+px$/.test(e)?Number(e.substring(0,e.length-2))/t*100:null:e/t*100,Ko=[Ee,c`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `];var Wo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Go=class extends Ce{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{let e=0,t=0;const o=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(t=this._assignedBodyElements[0].getBoundingClientRect().height);const s=t-e-o;this._scrollableElement.style.height=s>0?o-e+"px":"auto"},this._onResizingMouseMove=e=>{e.stopPropagation(),this._updateActiveSashPosition(e.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=e=>{this._resizeColumns(!0),this._updateActiveSashPosition(e.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(e){this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){super.disconnectedCallback(),this._componentResizeObserver?.unobserve(this),this._componentResizeObserver?.disconnect(),this._bodyResizeObserver?.disconnect()}_px2Percent(e){return e/this._componentW*100}_percent2Px(e){return this._componentW*e/100}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width,this._componentX=e.x}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const e=this._getHeaderCells().length;let t=this.columns.slice(0,e);const o=t.filter((e=>"auto"===e)).length+e-t.length;let s=100;if(t=t.map((e=>{const t=No(e,this._componentW);return null===t?"auto":(s-=t,t)})),t.length<e)for(let o=t.length;o<e;o++)t.push("auto");return t=t.map((e=>"auto"===e?s/o:e)),t}_initHeaderCellSizes(e){this._getHeaderCells().forEach(((t,o)=>{t.style.width=`${e[o]}%`}))}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach(((t,o)=>{t.style.width=`${e[o]}%`}))}_initSashes(e){const t=e.length;let o=0;this._sashPositions=[],e.forEach(((e,s)=>{if(s<t-1){const t=o+e;this._sashPositions.push(t),o=t}}))}_initDefaultColumnSizes(){const e=this._calcColWidthPercentages();this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const t=this._componentH-e.height;this._sashVisibleElements.forEach((o=>{o.style.height=`${t}px`,o.style.top=`${e.height}px`}))}_applyCompactViewColumnLabels(){const e=this._getHeaderCells().map((e=>e.innerText));this.querySelectorAll("vscode-table-row").forEach((t=>{t.querySelectorAll("vscode-table-cell").forEach(((t,o)=>{t.columnLabel=e[o],t.compact=!0}))}))}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach((e=>{e.columnLabel="",e.compact=!1}))}_toggleCompactView(){const e=this.getBoundingClientRect().width<this.breakpoint;this.compact!==e&&(this.compact=e,e?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onDefaultSlotChange(){this._assignedElements.forEach((e=>{"vscode-table-header"!==e.tagName.toLowerCase()?"vscode-table-body"!==e.tagName.toLowerCase()||(e.slot="body"):e.slot="header"}))}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const t=e.currentTarget,o=Number(t.dataset.index);this._sashHovers[o]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const t=e.currentTarget,o=Number(t.dataset.index);this._sashHovers[o]=!1,this.requestUpdate()}_onSashMouseDown(e){e.stopPropagation();const{pageX:t,currentTarget:o}=e,s=o,i=Number(s.dataset.index),n=s.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=i,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(t-n);const r=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(r[i]),r[i+1]&&(this._headerCellsToResize[1]=r[i+1]);const a=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(a[i]),a[i+1]&&this._cellsToResize.push(a[i+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(e){const{prevSashPos:t,nextSashPos:o}=this._getSashPositions();let s=No(this.minColumnWidth,this._componentW);null===s&&(s=0);const i=t?t+s:s,n=o?o-s:100-s;let r=this._px2Percent(e-this._componentX-this._percent2Px(this._activeSashCursorOffset));r=Math.max(r,i),r=Math.min(r,n),this._sashPositions[this._activeSashElementIndex]=r,this.requestUpdate()}_getSashPositions(){return{sashPos:this._sashPositions[this._activeSashElementIndex],prevSashPos:this._sashPositions[this._activeSashElementIndex-1]||0,nextSashPos:this._sashPositions[this._activeSashElementIndex+1]||100}}_resizeColumns(e=!0){const{sashPos:t,prevSashPos:o,nextSashPos:s}=this._getSashPositions(),i=t-o+"%",n=s-t+"%";this._headerCellsToResize[0].style.width=i,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=n),e&&(this._cellsToResize[0].style.width=i,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=n))}render(){const e=this._sashPositions.map(((e,t)=>{const o=Be({sash:!0,hover:this._sashHovers[t],resizable:this.resizable}),s=`${e}%`;return this.resizable?G`
            <div
              class=${o}
              data-index=${t}
              .style=${Ve({left:s})}
              @mousedown=${this._onSashMouseDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:G`<div
            class=${o}
            data-index=${t}
            .style=${Ve({left:s})}
          >
            <div class="sash-visible"></div>
          </div>`})),t=Be({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return G`
      <div class=${t}>
        <div class="header">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange=${this._onBodySlotChange}></slot>
          </div>
        </vscode-scrollable>
        ${e}
        <slot @slotchange=${this._onDefaultSlotChange}></slot>
      </div>
    `}};Go.styles=Ko,Wo([fe({reflect:!0})],Go.prototype,"role",void 0),Wo([fe({type:Boolean,reflect:!0})],Go.prototype,"resizable",void 0),Wo([fe({type:Boolean,reflect:!0})],Go.prototype,"responsive",void 0),Wo([fe({type:Boolean,reflect:!0})],Go.prototype,"bordered",void 0),Wo([fe({type:Boolean,reflect:!0,attribute:"bordered-columns"})],Go.prototype,"borderedColumns",void 0),Wo([fe({type:Boolean,reflect:!0,attribute:"bordered-rows"})],Go.prototype,"borderedRows",void 0),Wo([fe({type:Number})],Go.prototype,"breakpoint",void 0),Wo([fe({type:Array})],Go.prototype,"columns",null),Wo([fe({attribute:"min-column-width"})],Go.prototype,"minColumnWidth",void 0),Wo([fe({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],Go.prototype,"delayedResizing",void 0),Wo([fe({type:Boolean,reflect:!0})],Go.prototype,"compact",void 0),Wo([fe({type:Boolean,reflect:!0})],Go.prototype,"zebra",void 0),Wo([fe({type:Boolean,reflect:!0,attribute:"zebra-odd"})],Go.prototype,"zebraOdd",void 0),Wo([me('slot[name="body"]')],Go.prototype,"_bodySlot",void 0),Wo([me(".header")],Go.prototype,"_headerElement",void 0),Wo([me(".scrollable")],Go.prototype,"_scrollableElement",void 0),Wo([(e,t)=>_e(e,t,{get(){return(this.renderRoot??(ye??=document.createDocumentFragment())).querySelectorAll(".sash-visible")}})],Go.prototype,"_sashVisibleElements",void 0),Wo([xe({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],Go.prototype,"_assignedElements",void 0),Wo([xe({slot:"header",flatten:!0,selector:"vscode-table-header"})],Go.prototype,"_assignedHeaderElements",void 0),Wo([xe({slot:"body",flatten:!0,selector:"vscode-table-body"})],Go.prototype,"_assignedBodyElements",void 0),Wo([ge()],Go.prototype,"_sashPositions",void 0),Wo([ge()],Go.prototype,"_isDragging",void 0),Go=Wo([$e("vscode-table")],Go);const Yo=[Ee,c`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var Xo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Zo=class extends Ce{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=kt()}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"selected-index"===e&&this._setActiveTab(),"panel"===e&&(this._tabHeaders.forEach((e=>e.panel=null!==o)),this._tabPanels.forEach((e=>e.panel=null!==o)))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach(((e,t)=>{e.hidden=t!==this.selectedIndex})),this._tabHeaders.forEach(((e,t)=>{e.active=t===this.selectedIndex}))}_focusPrevTab(){0===this._tabFocus?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),"ArrowLeft"===e.key?this._focusPrevTab():"ArrowRight"===e.key&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),"Enter"===e.key&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter((e=>e instanceof Eo));e.length>0&&e.forEach((e=>e.setAttribute("slot","header")))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter((e=>e instanceof Ao)),this._tabPanels.forEach(((e,t)=>{e.ariaLabelledby=`t${this._componentId}-h${t}`,e.id=`t${this._componentId}-p${t}`,e.panel=this.panel})),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter((e=>e instanceof Eo)),this._tabHeaders.forEach(((e,t)=>{e.tabId=t,e.id=`t${this._componentId}-h${t}`,e.ariaControls=`t${this._componentId}-p${t}`,e.panel=this.panel,e.active=t===this.selectedIndex}))}_onHeaderClick(e){const t=e.composedPath().find((e=>e instanceof Eo));t&&(this.selectedIndex=t.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return G`
      <div
        class=${Be({header:!0,panel:this.panel})}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};Zo.styles=Yo,Xo([fe({type:Boolean,reflect:!0})],Zo.prototype,"panel",void 0),Xo([fe({reflect:!0})],Zo.prototype,"role",void 0),Xo([fe({type:Number,reflect:!0,attribute:"selected-index"})],Zo.prototype,"selectedIndex",void 0),Xo([xe({slot:"header"})],Zo.prototype,"_headerSlotElements",void 0),Xo([xe()],Zo.prototype,"_mainSlotElements",void 0),Zo=Xo([$e("vscode-tabs")],Zo);const Jo=[Ee,c`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline)
      );
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `];var Qo=function(e,t,o,s){var i,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n<3?i(r):n>3?i(t,o,r):i(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const es=(e,t=[])=>{const o=[];return e.forEach(((e,s)=>{const i=[...t,s],n={...e,path:i};e.subItems&&(n.subItems=es(e.subItems,i)),o.push(n)})),o},ts=e=>!!(e.subItems&&Array.isArray(e.subItems)&&e?.subItems?.length>0);let os=class extends Ce{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(e){const t=this._data;this._data=es(e),this.requestUpdate("data",t)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(e){return this._getItemByPath(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(e){let t=this._data,o=null;return e.forEach(((s,i)=>{i===e.length-1?o=t[s]:t=t[s].subItems})),o}_handleActionClick(e){e.stopPropagation();const t=e.target,o=t.dataset.itemPath,s=t.dataset.index;let i=null,n="",r="";if(o){const e=o.split("/").map((e=>Number(e)));if(i=this._getItemByPath(e),i?.actions){const e=Number(s);i.actions[e]&&(n=i.actions[e].actionId)}i?.value&&(r=i.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:n,item:i,value:r}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:n,item:i,value:r}}))}_renderIconVariant(e){const{type:t,value:o}=e;return"themeicon"===t?G`<vscode-icon name=${o} class="theme-icon"></vscode-icon>`:G`<span
        class="image-icon"
        .style=${Ve({backgroundImage:`url(${o})`})}
      ></span>`}_renderIcon(e){const t={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(e.iconUrls)e.iconUrls.branch&&(t.branch={value:e.iconUrls.branch,type:"image"}),e.iconUrls.leaf&&(t.leaf={value:e.iconUrls.leaf,type:"image"}),e.iconUrls.open&&(t.open={value:e.iconUrls.open,type:"image"});else if("object"==typeof e.icons)e.icons.branch&&(t.branch={value:e.icons.branch,type:"themeicon"}),e.icons.leaf&&(t.leaf={value:e.icons.leaf,type:"themeicon"}),e.icons.open&&(t.open={value:e.icons.open,type:"themeicon"});else if(!e.icons)return G`${X}`;return ts(e)?e.open?this._renderIconVariant(t.open):this._renderIconVariant(t.branch):this._renderIconVariant(t.leaf)}_renderArrow(e){if(!this.arrows||!ts(e))return G`${X}`;const{open:t=!1}=e;return G`
      <div class="arrow-container">
        <vscode-icon name=${t?"chevron-down":"chevron-right"} class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(e){const t=[];return e.actions&&Array.isArray(e.actions)&&e.actions.forEach(((o,s)=>{if(o.icon){const i=G`<vscode-icon
            name=${o.icon}
            action-icon
            title=${ze(o.tooltip)}
            data-item-path=${ze(e.path?.join("/"))}
            data-index=${s}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;t.push(i)}})),t.length>0?G`<div class="actions">${t}</div>`:G`${X}`}_renderDecorations(e){const t=[];return e.decorations&&Array.isArray(e.decorations)&&e.decorations.forEach((e=>{const{appearance:o="text",visibleWhen:s="always",content:i="",color:n="",focusedColor:r="",hoverColor:a="",selectedColor:l=""}=e,c=`visible-when-${s}`,d={};switch(n&&(d["--color"]=n),r&&(d["--focused-color"]=r),a&&(d["--hover-color"]=a),l&&(d["--selected-color"]=l),o){case"counter-badge":t.push(G`<vscode-badge
                variant="counter"
                class=${["counter-badge",c].join(" ")}
                part="counter-badge-decoration"
                >${i}</vscode-badge
              >`);break;case"filled-circle":t.push(G`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",c].join(" ")}
                part="filled-circle-decoration"
                .style=${Ve(d)}
              ></vscode-icon>`);break;case"text":t.push(G`<div
                class=${["decoration-text",c].join(" ")}
                part="caption-decoration"
                .style=${Ve(d)}
              >
                ${i}
              </div>`)}})),t.length>0?G`<div class="decorations" part="decorations">
        ${t}
      </div>`:G`${X}`}_renderTreeItem(e,t){const{open:o=!1,label:s,description:i="",tooltip:n,selected:r=!1,focused:a=!1,subItems:l=[]}=e,{path:c,itemType:d,hasFocusedItem:h=!1,hasSelectedItem:p=!1}=t,u=["contents"],v=o?["open"]:[],b=(c.length-1)*this.indent,f=this.arrows&&"leaf"===d?30+b:b,g=this._renderArrow(e),_=this._renderIcon(e),m=this.arrows?b+16:b+3,y=o&&"branch"===d?G`<ul
            .style=${Ve({"--indent-guide-pos":`${m}px`})}
            class=${Be({"has-active-item":h||p})}
          >
            ${this._renderTree(l,c)}
          </ul>`:X,x=i?G`<span class="description" part="description">${i}</span>`:X,w=this._renderActions(e),k=this._renderDecorations(e);return v.push(d),r&&u.push("selected"),a&&u.push("focused"),G`
      <li data-path=${c.join("/")} class=${v.join(" ")}>
        <div
          class=${u.join(" ")}
          .style=${Ve({paddingLeft:`${f+3}px`})}
        >
          ${g}${_}<span
            class="text-content"
            part="text-content"
            title=${ze(n)}
            >${s}${x}</span
          >
          ${w} ${k}
        </div>
        ${y}
      </li>
    `}_renderTree(e,t=[]){const o=[];return e?(e.forEach(((e,s)=>{const i=[...t,s],n=ts(e)?"branch":"leaf",{selected:r=!1,focused:a=!1,hasFocusedItem:l=!1,hasSelectedItem:c=!1}=e;r&&(this._selectedItem=e),a&&(this._focusedItem=e),o.push(this._renderTreeItem(e,{path:i,itemType:n,hasFocusedItem:l,hasSelectedItem:c}))})),o):X}_selectItem(e){this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=e,e.selected=!0,this._focusedItem=e,e.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let t=null;if(e.path?.length&&e.path.length>1&&(t=this._getItemByPath(e.path.slice(0,-1))),ts(e))this._selectedBranch=e,e.hasSelectedItem=!0,e.open=!e.open,e.open?(this._selectedBranch=e,e.hasSelectedItem=!0):t&&(this._selectedBranch=t,t.hasSelectedItem=!0);else if(e.path?.length&&e.path.length>1){const t=this._getItemByPath(e.path.slice(0,-1));t&&(this._selectedBranch=t,t.hasSelectedItem=!0)}else this._selectedBranch=e,e.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(e){this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=e,e.focused=!0;const t=!!e?.subItems?.length;this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let o=null;e.path?.length&&e.path.length>1&&(o=this._getItemByPath(e.path.slice(0,-1))),t?e.open?(this._focusedBranch=e,e.hasFocusedItem=!0):!e.open&&o&&(this._focusedBranch=o,o.hasFocusedItem=!0):o&&(this._focusedBranch=o,o.hasFocusedItem=!0)}_closeSubTreeRecursively(e){e.forEach((e=>{e.open=!1,e.subItems&&e.subItems.length>0&&this._closeSubTreeRecursively(e.subItems)}))}_deselectItemsRecursively(e){e.forEach((e=>{e.selected&&(e.selected=!1),e.subItems&&e.subItems.length>0&&this._deselectItemsRecursively(e.subItems)}))}_emitSelectEvent(e,t){const{icons:o,label:s,open:i,value:n}=e,r={icons:o,itemType:ts(e)?"branch":"leaf",label:s,open:i||!1,value:n||s,path:t};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:r})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:r}))}_focusPrevItem(){if(!this._focusedItem)return void this._focusItem(this._data[0]);const{path:e}=this._focusedItem;if(e&&e?.length>0){const t=e[e.length-1],o=e.length>1;if(t>0){const o=[...e];o[o.length-1]=t-1;const s=this._getItemByPath(o);let i=s;if(s?.open&&s.subItems?.length){const{subItems:e}=s;i=e[e.length-1]}this._focusItem(i)}else if(o){const t=[...e];t.pop(),this._focusItem(this._getItemByPath(t))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem)return void this._focusItem(this._data[0]);const{path:e,open:t}=this._focusedItem;if(t&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0)return void this._focusItem(this._focusedItem.subItems[0]);const o=[...e];o[o.length-1]+=1;let s=this._getItemByPath(o);s?this._focusItem(s):(o.pop(),o.length>0&&(o[o.length-1]+=1,s=this._getItemByPath(o),s&&this._focusItem(s)))}_handleClick(e){const t=e.composedPath().find((e=>e.tagName&&"LI"===e.tagName.toUpperCase()));if(t){const e=(t.dataset.path||"").split("/").map((e=>Number(e))),o=this._getItemByPath(e);this._selectItem(o)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(e){const t=e.key;[" ","ArrowDown","ArrowUp","Enter","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),"Escape"===t&&(this._focusedItem=null),"ArrowUp"===t&&this._focusPrevItem(),"ArrowDown"===t&&this._focusNextItem(),"Enter"!==t&&" "!==t||this._focusedItem&&this._selectItem(this._focusedItem)}render(){const e=Be({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":null!==this._selectedItem});return G`
      <div @click=${this._handleClick} class=${e}>
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};os.styles=Jo,Qo([fe({type:Array,reflect:!1})],os.prototype,"data",null),Qo([fe({type:Number})],os.prototype,"indent",void 0),Qo([fe({type:Boolean,reflect:!0})],os.prototype,"arrows",void 0),Qo([fe({type:Boolean,reflect:!0})],os.prototype,"multiline",void 0),Qo([fe({type:Number,reflect:!0})],os.prototype,"tabindex",void 0),Qo([fe({type:Boolean,reflect:!0,attribute:"indent-guides"})],os.prototype,"indentGuides",void 0),Qo([ge()],os.prototype,"_selectedItem",void 0),Qo([ge()],os.prototype,"_focusedItem",void 0),Qo([ge()],os.prototype,"_selectedBranch",void 0),Qo([ge()],os.prototype,"_focusedBranch",void 0),os=Qo([$e("vscode-tree")],os)}},t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{var e=s;Object.defineProperty(e,"B",{value:!0}),o(341);const t=acquireVsCodeApi();let i,n,r,a,l,c,d,h,p,u,v,b,f;window.addEventListener("load",(function(){i=document.getElementById("plugin-name"),n=document.getElementById("plugin-dropdown"),r=document.getElementById("path-url"),a=document.getElementById("folder-explorer"),d=document.getElementById("overwrite-checkbox"),h=document.getElementById("verbosity-dropdown"),l=document.getElementById("create-button"),c=document.getElementById("clear-button"),v=document.getElementById("log-text-area"),b=document.getElementById("clear-logs-button"),f=document.getElementById("open-folder-button"),i.addEventListener("input",y),r.addEventListener("input",y),a.addEventListener("click",_),l.addEventListener("click",x),l.disabled=!0,c.addEventListener("click",m),b.addEventListener("click",w),f.addEventListener("click",k),p=document.getElementById("full-collection-path"),u=document.createElement("p"),u.innerHTML=r.placeholder,p?.appendChild(u)}));let g="";function _(e){const o=e.target.id;let s;s="folder-explorer"===o?"folder":"file",t.postMessage({command:"open-explorer",payload:{selectOption:s}}),window.addEventListener("message",(e=>{const t=e.data;if("file-uri"===t.command){const e=t.arguments.selectedUri;e&&"folder-explorer"===o&&(r.value=e,u.innerHTML=e)}}))}function m(){i.value="",n.value="action",r.value="",u.innerHTML=r.placeholder,d.checked=!1,h.value="Off",l.disabled=!0}function y(){r.value.trim()?u.innerHTML=r.value.trim():(u.innerHTML=`${r.placeholder}/plugins/${n.value.trim()}/${i.value.trim()}`,i.value.trim()||(u.innerHTML=r.placeholder)),i.value.trim()?l.disabled=!1:l.disabled=!0}function x(){l.disabled=!0,t.postMessage({command:"init-create",payload:{pluginName:i.value.trim(),pluginType:n.value.trim(),collectionPath:r.value.trim(),verbosity:h.value.trim(),isOverwritten:d.checked}}),window.addEventListener("message",(async e=>{const t=e.data;if("execution-log"===t.command)return v.value=t.arguments.commandOutput,t.arguments.status&&"passed"===t.arguments.status?f.disabled=!1:f.disabled=!0,g=t.arguments.projectUrl?t.arguments.projectUrl:"",void(l.disabled=!1)}))}function w(){v.value=""}function k(){t.postMessage({command:"init-open-scaffolded-folder",payload:{projectUrl:g,pluginName:i.value.trim(),pluginType:n.value.trim()}})}})();var i=s.B;export{i as __esModule};
//# sourceMappingURL=addPluginPageApp.js.map