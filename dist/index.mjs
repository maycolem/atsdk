// src/types.ts
var Events = /* @__PURE__ */ ((Events2) => {
  Events2["LoginModalOpen"] = "LoginModalOpen";
  Events2["LoginSuccess"] = "LoginSuccess";
  Events2["RecargaModalOpen"] = "RecargaModalOpen";
  Events2["IframeWrapperConfig"] = "IframeWrapperConfig";
  return Events2;
})(Events || {});

// src/utils.ts
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
    });
  });
}

// src/index.ts
var AtsdkBase = class {
  constructor() {
    const eventListener = "message";
    window.addEventListener(eventListener, (message) => this.receiveMessage(message));
  }
  setIframe(iframe) {
    this.iframe = iframe;
  }
  setNotificationCallback(notification) {
    this.notificationCallback = notification;
  }
  sendMessageToIframe(message) {
    if (this.iframe && this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage(message, "*");
    }
  }
  sendMessageToTopAncestor(message) {
    if (window.top) {
      window.top.postMessage(message, "*");
    }
  }
  sendMessageToParent(message) {
    window.parent.postMessage(message, "*");
  }
  receiveMessage(message) {
    if (Events[message.data.event] && this.notificationCallback) {
      this.notificationCallback(message.data);
    }
  }
  getEvents() {
    return Events;
  }
};
var Atsdk = class extends AtsdkBase {
};
applyMixins(Atsdk, []);
((w) => {
  "use strict";
  if (w) {
    if (!w.Atsdk) {
      w.Atsdk = Atsdk;
    } else {
      console.warn("Atsdk ya est\xE1 definido en el objeto window.");
    }
  } else {
    console.error("El objeto window no est\xE1 disponible.");
  }
})(typeof window !== "undefined" ? window : null);
export {
  Atsdk,
  Events
};
