var e={loginModalOpen:"loginModalOpen",loginSuccess:"loginSuccess",recargaModalOpen:"recargaModalOpen",iframeWrapperConfig:"iframeWrapperConfig"};exports.Atsdk=/*#__PURE__*/function(){function n(){var e=this;this.iframe=void 0,this.notificationCallback=void 0,window.addEventListener("message",function(n){return e.receiveMessage(n)})}var t=n.prototype;return t.setIframe=function(e){this.iframe=e},t.setNotificationCallback=function(e){this.notificationCallback=e},t.sendMessageToIframe=function(e){this.iframe.contentWindow.postMessage(e,"*")},t.sendMessageToTopAncestor=function(e){window.top.postMessage(e,"*")},t.sendMessageToParent=function(e){window.parent.postMessage(e,"*")},t.receiveMessage=function(n){e[n.data.event]&&this.notificationCallback&&this.notificationCallback(n.data)},t.getEvents=function(){return e},n}(),exports.events=e;
