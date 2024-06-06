export declare abstract class Atsdk {
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
        iframe_to_parent: {
            MODAL_LOGIN_OPEN: string;
            MODAL_RECARGA_OPEN: string;
            IFRAME_CONFIG: string;
        };
        parent_to_iframe: {
            LOGIN_SUCESS: string;
        };
    };
}
export default Atsdk;
