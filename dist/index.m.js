var e={loginModalOpen:"loginModalOpen",loginSuccess:"loginSuccess",recargaModalOpen:"recargaModalOpen",iframeWrapperConfig:"iframeWrapperConfig"},n=/*#__PURE__*/function(){function n(){var e=this;this.iframe=void 0,this.notificationCallback=void 0,window.addEventListener("message",function(n){return e.receiveMessage(n)})}var i=n.prototype;return i.setIframe=function(e){this.iframe=e},i.setNotificationCallback=function(e){this.notificationCallback=e},i.sendMessageToIframe=function(e){this.iframe.contentWindow.postMessage(e,"*")},i.sendMessageToTopAncestor=function(e){window.top.postMessage(e,"*")},i.sendMessageToParent=function(e){window.parent.postMessage(e,"*")},i.receiveMessage=function(n){e[n.data.event]&&this.notificationCallback&&this.notificationCallback(n.data)},i.getEvents=function(){return e},n}();export{n as Atsdk,e as events};
