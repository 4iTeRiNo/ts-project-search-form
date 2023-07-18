import { LocalGithubUser } from "types";
import styles from "./UserStat.module.scss";

 export interface UserStatProps
  extends Pick<LocalGithubUser, "followers" | "following" | "repos"> {}

export const UserStat = ({ followers, following, repos }: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Repos</div>
      <div className={styles.infoNumber}>{repos}</div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Following</div>
      <div className={styles.infoNumber}>{following}</div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Followers</div>
      <div className={styles.infoNumbers}>{followers}</div>
    </div>
  </div>
);
