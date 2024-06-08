declare enum Events {
    LoginModalOpen = "LoginModalOpen",
    LoginSuccess = "LoginSuccess",
    RecargaModalOpen = "RecargaModalOpen",
    IframeWrapperConfig = "IframeWrapperConfig"
}
interface NotificationLoginModalOpen {
    event: Events.LoginModalOpen;
    data: {
        email?: string;
        redirectUrl?: string;
    };
}
interface NotificationLoginSuccess {
    event: Events.LoginSuccess;
    data: {
        email?: string;
        mobile?: string;
        dni?: string;
    };
}
interface NotificationRecargaModalOpen {
    event: Events.RecargaModalOpen;
    data: {};
}
interface NotificationIframeWrapperConfig {
    event: Events.IframeWrapperConfig;
    data: {
        height?: string;
        width?: string;
    };
}
type Notification = NotificationLoginModalOpen | NotificationLoginSuccess | NotificationRecargaModalOpen | NotificationIframeWrapperConfig;
type NotificationCallback = (notification: Notification) => void;

declare global {
    interface Window {
        Atsdk: any;
    }
}

declare abstract class AtsdkBase {
    iframe: HTMLIFrameElement | undefined;
    notificationCallback: NotificationCallback | undefined;
    constructor();
    setIframe(iframe: HTMLIFrameElement): void;
    setNotificationCallback(notification: NotificationCallback): void;
    sendMessageToIframe(message: any): void;
    sendMessageToTopAncestor(message: any): void;
    sendMessageToParent(message: any): void;
    receiveMessage(message: MessageEvent<Notification>): void;
    getEvents(): typeof Events;
}
declare class Atsdk extends AtsdkBase {
}

export { Atsdk, Events };
