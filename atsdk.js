const Atsdk_events = {
  MODAL_LOGIN_OPEN: "MODAL_LOGIN_OPEN",
  MODAL_RECARGA_OPEN: "MODAL_RECARGA_OPEN",
  IFRAME_PROPS: "IFRAME_PROPS",
};

class Atsdk {
  iframe;
  notificationCallback;
  constructor() {
    window.addEventListener("message", (data) => this.receiveMessage(data));
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

  sendMessageToParent(message) {
    window.parent.postMessage(message, "*");
  }

  receiveMessage(event) {
    if (Atsdk_events[event.data.event]) {
      if (this.notificationCallback) {
        this.notificationCallback(event.data);
      }
    }
    // if (event.origin !== window.location.origin) {
    //   return;
    // }
  }
}

window.Atsdk = new Atsdk();
