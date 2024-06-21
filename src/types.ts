enum Events {
  LoginModalOpen = "LoginModalOpen",
  LoginModalMessi10Open = "LoginModalMessi10Open",
  LoginSuccess = "LoginSuccess",
  RecargaModalOpen = "RecargaModalOpen",
  IframeWrapperConfig = "IframeWrapperConfig",
}

interface NotificationLoginModalOpen {
  event: Events.LoginModalOpen;
  data: {
    email?: string;
    redirectUrl?: string;
  };
}
interface LoginModalMessi10Open extends NotificationLoginModalOpen {}

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

type Notification =
  | NotificationLoginModalOpen
  | LoginModalMessi10Open
  | NotificationLoginSuccess
  | NotificationRecargaModalOpen
  | NotificationIframeWrapperConfig;

type NotificationCallback = (notification: Notification) => void;

export { Events, NotificationCallback, Notification };

declare global {
  interface Window {
    Atsdk: any;
  }
}
