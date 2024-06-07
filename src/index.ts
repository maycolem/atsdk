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

((w) => {
  if (w) {
    w.Atsdk = new Atsdk();
  }
})(window);

export { Atsdk, Events };
