import { useState } from "react";
import "./App.css";
import { BlogSettingsContext } from "./context/BlogSettingsContext";
import SettingsPanel from "./components/settingsPanel";
import Article from "./components/article";

function App() {
  const [fontSettings, setFontSettings] = useState({
    fontSize: "12px",
    lineHeight: "1",
    color: "black",
    fontWeight: "400",
    fontStyle: "normal",
  });

  function setFontsSize(event) {
    setFontSettings({
      ...fontSettings,
      fontSize: event.target.value,
    });
  }

  function setLineHeight(event) {
    setFontSettings({ ...fontSettings, lineHeight: event.target.value });
  }

  function setColor(event) {
    setFontSettings({ ...fontSettings, color: event.target.value });
  }

  function setFontWeight(event) {
    setFontSettings({ ...fontSettings, fontWeight: event.target.value });
  }

  function setFontStyle(event) {
    setFontSettings({ ...fontSettings, fontStyle: event.target.value });
  }
  return (
    <BlogSettingsContext.Provider
      value={{
        setFontsSize,
        setLineHeight,
        setColor,
        setFontWeight,
        setFontStyle,
        fontSettings,
      }}
    >
      <div className="App">
        <SettingsPanel />
        <Article />
      </div>
    </BlogSettingsContext.Provider>
  );
}

export default App;
