const e={loginModalOpen:"loginModalOpen",loginSuccess:"loginSuccess",recargaModalOpen:"recargaModalOpen",iframeWrapperConfig:"iframeWrapperConfig"};class t{constructor(){this.iframe=void 0,this.notificationCallback=void 0,window.addEventListener("message",e=>this.receiveMessage(e))}setIframe(e){this.iframe=e}setNotificationCallback(e){this.notificationCallback=e}sendMessageToIframe(e){this.iframe.contentWindow.postMessage(e,"*")}sendMessageToTopAncestor(e){window.top.postMessage(e,"*")}sendMessageToParent(e){window.parent.postMessage(e,"*")}receiveMessage(t){e[t.data.event]&&this.notificationCallback&&this.notificationCallback(t.data)}getEvents(){return e}}class a extends t{}var o;o=a,[].forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(t=>{Object.defineProperty(o.prototype,t,Object.getOwnPropertyDescriptor(e.prototype,t))})});export{a as Atsdk,e as events};
