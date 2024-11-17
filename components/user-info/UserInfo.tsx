import { FC } from "react";
import { useStaticHeight } from "../../hooks/useStaticHeight";
import { GeneralInfo } from "../../types";
import styles from "./UserInfo.module.css";
import {
  CONTACT_BTN,
  RESUME_BTN,
  SOCIAL_BTN,
  analyseBtnClicked,
} from "../../utils/clickAnanlytics";

export interface UserInfoProps {
  info: GeneralInfo;
}

export const UserInfo: FC<UserInfoProps> = ({ info }) => {
  const height = useStaticHeight();

  const onContactMeClick = () => {
    analyseBtnClicked(CONTACT_BTN);
    document
      .getElementById("contact-me")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClicked = () => {
    analyseBtnClicked(RESUME_BTN);
    window.open(info.resume, "_blank");
  };

  return (
    <>
      <div
        className={`p-8 flex flex-col justify-center items-center ${styles["animate-in"]}`}
        style={{ height }}
      >
        <h1 className="text-3xl mb-2 font-light">
          Hey <span className={styles["hand-anim"]}>👋</span> I am
        </h1>
        <h1 className="text-5xl font-medium mb-4">{info.name}</h1>
        <h1 className="text-lg font-light mb-8">{info.title}</h1>
        <h1 className="text-xl font-light flex text-center mb-8 max-w-screen-sm">
          {info.tagline}
        </h1>
        <div className="mb-8">
          {info.social.map((item) => {
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity opacity-80 hover:opacity-100 mr-6 last:mr-0"
              >
                <img
                  src={item.icon}
                  height="32px"
                  width="32px"
                  alt={item.name}
                  onClick={() => {
                    analyseBtnClicked(`${item.name}${SOCIAL_BTN}`);
                  }}
                />
              </a>
            );
          })}
        </div>
        <div className="mb-8">
          <button className="btn mr-6" onClick={onContactMeClick}>
            Contact Me
          </button>
          <button className="btn mt-4 sm:mt-0" onClick={handleResumeClicked}>
            Show Resume
          </button>
        </div>
      </div>
    </>
  );
};
