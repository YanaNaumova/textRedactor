import { useContext } from "react";
import { BlogSettingsContext } from "../../context/BlogSettingsContext";
import styles from "./styles.module.css";

function Article() {
  const { fontSettings } = useContext(BlogSettingsContext);

  return (
    <div className={styles.container}>
      <p style={fontSettings}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis
        error illum. Ex doloremque adipisci, totam facere sint, vero tempore,
        recusandae eveniet ullam suscipit nesciunt corrupti officia hic eaque a.
      </p>
    </div>
  );
}

export default Article;
