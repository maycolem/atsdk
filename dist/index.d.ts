declare abstract class AtsdkBase {
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
declare class Atsdk extends AtsdkBase {
}
declare const _default: {
    Atsdk: typeof Atsdk;
    events: {
        loginModalOpen: string;
        loginSuccess: string;
        recargaModalOpen: string;
        iframeWrapperConfig: string;
    };
};
export default _default;
