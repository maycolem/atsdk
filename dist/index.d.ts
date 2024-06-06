import { events } from "./constants";
declare abstract class Atsdk {
    iframe: any;
    notificationCallback: any;
    constructor();
    setIframe(iframe: any): void;
    setNotificationCallback(notification: any): void;
    sendMessageToIframe(message: any): void;
    sendMessageToTopAncestor(message: any): void;
    sendMessageToParent(message: any): void;
    receiveMessage(event: any): void;
    getEvents(): {
        loginModalOpen: string;
        loginSuccess: string;
        recargaModalOpen: string;
        iframeWrapperConfig: string;
    };
}
export { Atsdk, events };
