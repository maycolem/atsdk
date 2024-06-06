import { events } from "./constants";
import { applyMixins } from "./utils";

abstract class AtsdkBase {
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
    window.top.postMessage(message, "*");
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
}

class Atsdk extends AtsdkBase {}
applyMixins(Atsdk, []);

export { Atsdk, events };
