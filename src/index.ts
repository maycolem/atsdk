import { Events, Notification, NotificationCallback } from "./types";
import { applyMixins } from "./utils";

abstract class AtsdkBase {
  iframe: HTMLIFrameElement | undefined;
  notificationCallback: NotificationCallback | undefined;
  constructor() {
    const eventListener = "message";
    window.addEventListener(eventListener, (message: MessageEvent<Notification>) => this.receiveMessage(message));
  }

  setIframe(iframe: HTMLIFrameElement) {
    this.iframe = iframe;
  }

  setNotificationCallback(notification: NotificationCallback) {
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

  receiveMessage(message: MessageEvent<Notification>) {
    if (Events[message.data.event] && this.notificationCallback) {
      this.notificationCallback(message.data);
    }
  }

  getEvents() {
    return Events;
  }
}

class Atsdk extends AtsdkBase {}
applyMixins(Atsdk, []);

export { Atsdk, Events };

((w) => {
  "use strict";
  if (w) {
    // Verificar si Atsdk ya existe para no sobrescribirlo accidentalmente
    if (!w.Atsdk) {
      w.Atsdk = Atsdk;
    } else {
      console.warn("Atsdk ya está definido en el objeto window.");
    }
  } else {
    console.error("El objeto window no está disponible.");
  }
})(typeof window !== "undefined" ? window : null);
