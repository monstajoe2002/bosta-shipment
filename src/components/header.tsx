import { Search } from "lucide-react";
import logo from "../assets/logo-en.svg";
import { useSearchStore } from "../stores/search-store";
import { useTranslation } from "react-i18next";
export const Header = () => {
  const { setIsVisible, isVisible } = useSearchStore();
  const { i18n, t } = useTranslation();
  const languages = {
    en: { nativeName: "English" },
    ar: { nativeName: "عربي" },
  };
  return (
    <header className="px-4 py-3 container mx-auto">
      <nav className="flex justify-between">
        <img src={logo} alt="Logo" />
        <div className="flex gap-5 my-auto">
          <button onClick={() => setIsVisible(isVisible)}>
            <div className="inline-flex items-center gap-2">
              <Search />
              <span className="md:block hidden text-sm">
                {t("Toggle Search")}
              </span>
            </div>
          </button>

          {i18n.resolvedLanguage === "ar" ? (
            <button
              type="submit"
              onClick={() => i18n.changeLanguage("en")}
              className="text-gray-600"
            >
              {languages.en.nativeName}
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => i18n.changeLanguage("ar")}
              className="text-gray-600"
            >
              {languages.ar.nativeName}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
