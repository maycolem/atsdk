!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).atsdk=t()}(this,function(){function e(t,n){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e(t,n)}var t,n={loginModalOpen:"loginModalOpen",loginSuccess:"loginSuccess",recargaModalOpen:"recargaModalOpen",iframeWrapperConfig:"iframeWrapperConfig"},o=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}var o,i;return i=t,(o=n).prototype=Object.create(i.prototype),o.prototype.constructor=o,e(o,i),n}(/*#__PURE__*/function(){function e(){var e=this;this.iframe=void 0,this.notificationCallback=void 0,window.addEventListener("message",function(t){return e.receiveMessage(t)})}var t=e.prototype;return t.setIframe=function(e){this.iframe=e},t.setNotificationCallback=function(e){this.notificationCallback=e},t.sendMessageToIframe=function(e){this.iframe.contentWindow.postMessage(e,"*")},t.sendMessageToTopAncestor=function(e){window.top.postMessage(e,"*")},t.sendMessageToParent=function(e){window.parent.postMessage(e,"*")},t.receiveMessage=function(e){n[e.data.event]&&this.notificationCallback&&this.notificationCallback(e.data)},t.getEvents=function(){return n},e}());return t=o,[].forEach(function(e){Object.getOwnPropertyNames(e.prototype).forEach(function(n){Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n))})}),{Atsdk:o,events:n}});
