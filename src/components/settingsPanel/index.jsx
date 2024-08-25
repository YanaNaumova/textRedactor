import { useContext } from "react";
import { BlogSettingsContext } from "../../context/BlogSettingsContext";
import Select from "../Select";
import {
  fontSizeList,
  lineHeigthList,
  colorList,
  fontWeightList,
  fontStyleList,
} from "../../utils/settingsData";
import styles from "./styles.module.css";

function SettingsPanel() {
  const {
    setFontsSize,
    setLineHeight,
    setColor,
    setFontWeight,
    setFontStyle,
    fontSettings,
  } = useContext(BlogSettingsContext);
  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <Select
        titleSelect={"Font Size"}
        handelSelect={setFontsSize}
        options={fontSizeList}
        defaultValue={fontSettings.fontSize}
      />
      <Select
        titleSelect={"Line Height"}
        handelSelect={setLineHeight}
        options={lineHeigthList}
        defaultValue={fontSettings.lineHeight}
      />
      <Select
        titleSelect={"Color"}
        handelSelect={setColor}
        options={colorList}
        defaultValue={fontSettings.color}
      />
      <Select
        titleSelect={"Font Weight"}
        handelSelect={setFontWeight}
        options={fontWeightList}
        defaultValue={fontSettings.fontWeight}
      />
      <Select
        titleSelect={"Font Style"}
        handelSelect={setFontStyle}
        options={fontStyleList}
        defaultValue={fontSettings.fontStyle}
      />
    </div>
  );
}

export default SettingsPanel;
