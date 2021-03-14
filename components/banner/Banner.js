import styles from "./Banner.module.css";
import classNames from "classnames";

const Banner = ({ source }) => {
  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${source})`,              
        }}
      >
      
        <div className={styles.bannerTitle}>
          <div class={styles.wrapper}>
            <input class={styles.search} type="text" id="search" />
            <input class={styles.submit} type="submit" value="সার্চ করুন"/>
          </div>
          <h4 className="mb-4 pl-5">
            আপনার প্রয়োজনীয় প্রোগ্রামটি খুঁজতে আমাদের কোর্সগুলো ঘুরে দেখুন 
          </h4>
          <a href="#" className={classNames(styles.customBtn, "ml-5")}>
            সকল কোর্স 
          </a>
        </div>

      </div>
    </>
  );
};

export default Banner;
