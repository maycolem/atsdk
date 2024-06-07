// src/constants.ts
var events = {
  loginModalOpen: "loginModalOpen",
  loginSuccess: "loginSuccess",
  recargaModalOpen: "recargaModalOpen",
  iframeWrapperConfig: "iframeWrapperConfig"
};

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
  iframe;
  notificationCallback;
  constructor() {
    const eventListener = "message";
    window.addEventListener(eventListener, (data) => this.receiveMessage(data));
  }
  setIframe(iframe) {
    this.iframe = iframe;
  }
  setNotificationCallback(notification) {
    this.notificationCallback = notification;
  }
  sendMessageToIframe(message) {
    this.iframe.contentWindow.postMessage(message, "*");
  }
  sendMessageToTopAncestor(message) {
    if (window.top) {
      window.top.postMessage(message, "*");
    }
  }
  sendMessageToParent(message) {
    window.parent.postMessage(message, "*");
  }
  receiveMessage(event) {
    if (events[event.data.event]) {
      if (this.notificationCallback) {
        this.notificationCallback(event.data);
      }
    }
  }
  getEvents() {
    return events;
  }
};
var Atsdk = class extends AtsdkBase {
};
applyMixins(Atsdk, []);
export {
  Atsdk,
  events
};
