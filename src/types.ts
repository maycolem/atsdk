import { Atsdk } from ".";

enum Events {
  LoginModalOpen = "LoginModalOpen",
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

export { Events, NotificationCallback, Notification };

declare global {
  interface Window {
    Atsdk: Atsdk;
  }
}
