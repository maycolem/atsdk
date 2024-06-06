const Atsdk_events_iframe_to_parent = {
  MODAL_LOGIN_OPEN: "MODAL_LOGIN_OPEN",
  MODAL_RECARGA_OPEN: "MODAL_RECARGA_OPEN",
  IFRAME_CONFIG: "IFRAME_CONFIG",
};
const Atsdk_events_parent_to_iframe = {
  LOGIN_SUCESS: "LOGIN_SUCESS",
};
const Atsdk_events = {
  ...Atsdk_events_iframe_to_parent,
  ...Atsdk_events_parent_to_iframe,
};

class Atsdk {
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

  getEvents() {
    return {
      all: { ...Atsdk_events },
      iframe_to_parent: { ...Atsdk_events_iframe_to_parent },
      parent_to_iframe: { ...Atsdk_events_parent_to_iframe },
    };
  }
}

window.Atsdk = new Atsdk();
