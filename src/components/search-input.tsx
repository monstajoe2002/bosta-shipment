import { Search } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const SearchInput = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const { t } = useTranslation();
  return (
    <div className="translate-y-1/3 relative shadow-md rounded-lg">
      <input
        type="text"
        placeholder={t("Enter your tracking number")}
        className="p-4 rounded-l-lg rtl:rounded-r-lg rtl:rounded-l-none w-[300px]"
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <Link to={`/track/${trackingNumber}`}>
        <button className="p-4 rounded-r-lg bg-bosta-red text-white relative translate-y-[6px] hover:bg-bosta-red/70 transition-colors duration-300 rtl:rounded-r-none rtl:rounded-l-lg">
          <Search />
        </button>
      </Link>
    </div>
  );
};
