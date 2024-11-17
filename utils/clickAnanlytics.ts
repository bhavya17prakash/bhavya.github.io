// import { Analytics, logEvent } from "firebase/analytics";
// import { analytics } from "./firebase";

export const CONTACT_BTN = "contact_btn_clicked";
export const SOCIAL_BTN = "_social_btn_clicked";
export const PROJECT_CLICKED = "_project_clicked";
export const EMAIL_CLICKED = "email_btn_clicked";
export const CALL_BTN_CLICKED = "call_btn_clicked";
export const RESUME_BTN = "resume_btn_clicked";

export const analyseBtnClicked = (event: string) => {
  // _logEvent(analytics, event);
};

export const pageLoadEvent = () => {
  // _logEvent(analytics, "homepage_load_event");
};

// const _logEvent = (analytics: Analytics, event: string) => {
//   if (process.env.NODE_ENV !== "development") logEvent(analytics, event);
// };
