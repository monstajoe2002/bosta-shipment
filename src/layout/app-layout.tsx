import { Outlet } from "react-router";
import pin from "../assets/pin.svg";
import { SearchInput } from "../components/search-input";
import { Header } from "../components/header";
import { useShowMoreStore } from "../stores/show-more-store";
import { ShowMore } from "../components/show-more";
import { useSearchStore } from "../stores/search-store";
import { useTranslation } from "react-i18next";

export default function AppLayout() {
  const { showMore } = useShowMoreStore();
  const { isVisible } = useSearchStore();
  const { i18n, t } = useTranslation();

  return (
    <>
      <Header />
      <main
        dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
        className={`${!showMore ? "h-screen" : "h-auto"} overflow-y-clip font-sans`}
      >
        <div className="flex flex-col items-center bg-teal-light text-gray-dark m-4 rounded-md md:m-0 md:rounded-none">
          <img src={pin} alt="Pin" className="w-72 h-40" />
          <h1 className="md:text-3xl text-2xl md:font-semibold font-medium">
            {t("Track Your Order")}
          </h1>
          {isVisible && <SearchInput />}
        </div>
        <div className={showMore ? "mb-12" : ""}>
          <Outlet />
        </div>

        <ShowMore />
      </main>
    </>
  );
}
