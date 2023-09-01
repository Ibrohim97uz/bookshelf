import uz from "./flags/uz.png";
import ru from "./flags/ru.png";
import en from "./flags/en.png";
import styles from "./style.module.css";
import i18next from "i18next";

type lang = "uz" | "ru" | "en";
interface ILanguages {
  image: string;
  key: lang;
  alt: string;
}

const iconStyle = { width: "40px", height: "40px", cursor: "pointer" };
function languageSwitcher(lang: lang) {
  localStorage.setItem("locale", lang);
  i18next.changeLanguage(lang);
}

const languages: Array<ILanguages> = [
  { alt: "Uzbek", image: uz, key: "uz" },
  { alt: "Russian", image: ru, key: "ru" },
  { alt: "English", image: en, key: "en" },
];

export default function Language() {
  return (
    <div className={styles.wrapper}>
      {languages.map((language, index) => (
        <img
          key={index}
          onClick={() => languageSwitcher(language.key)}
          style={iconStyle}
          src={language.image}
          alt={language.alt}
        />
      ))}
    </div>
  );
}
