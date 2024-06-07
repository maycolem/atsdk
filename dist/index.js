"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Atsdk: () => Atsdk,
  events: () => events
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Atsdk,
  events
});
