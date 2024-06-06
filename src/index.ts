import { Atsdk_events, Atsdk_events_iframe_to_parent, Atsdk_events_parent_to_iframe } from "./constants";

export abstract class Atsdk {
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
    if (Atsdk_events[event.data.event]) {
      if (this.notificationCallback) {
        this.notificationCallback(event.data);
      }
    }
  }

  getEvents() {
    return {
      iframe_to_parent: { ...Atsdk_events_iframe_to_parent },
      parent_to_iframe: { ...Atsdk_events_parent_to_iframe },
    };
  }
}

export default Atsdk;
