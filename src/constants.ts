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

export { Atsdk_events_iframe_to_parent, Atsdk_events_parent_to_iframe, Atsdk_events };
