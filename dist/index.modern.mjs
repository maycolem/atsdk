function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)({}).hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},e.apply(null,arguments)}const t={MODAL_LOGIN_OPEN:"MODAL_LOGIN_OPEN",MODAL_RECARGA_OPEN:"MODAL_RECARGA_OPEN",IFRAME_CONFIG:"IFRAME_CONFIG"},a={LOGIN_SUCESS:"LOGIN_SUCESS"},s=e({},t,a);class n{constructor(){this.iframe=void 0,this.notificationCallback=void 0,window.addEventListener("message",e=>this.receiveMessage(e))}setIframe(e){this.iframe=e}setNotificationCallback(e){this.notificationCallback=e}sendMessageToIframe(e){this.iframe.contentWindow.postMessage(e,"*")}sendMessageToTopAncestor(e){window.top.postMessage(e,"*")}sendMessageToParent(e){window.parent.postMessage(e,"*")}receiveMessage(e){s[e.data.event]&&this.notificationCallback&&this.notificationCallback(e.data)}getEvents(){return{iframe_to_parent:e({},t),parent_to_iframe:e({},a)}}}class i extends n{}export{i as default};
