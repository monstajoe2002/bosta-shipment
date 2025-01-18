import { useTranslation } from "react-i18next";
import { formatDate } from "../lib/utils";

export const TrackingDetails = ({
  shipment,
}: {
  shipment: Record<string, any>;
}) => {
  const { t } = useTranslation();
  const events = [...(shipment?.TransitEvents ?? [])].reverse();
  if (!events.length) return null;
  return (
    <>
      <div className="p-4">
        <h3 className="text-xl mb-8 font-medium text-gray-400">
          {t("Tracking Details")}
        </h3>
        {events?.map((step, index) => (
          <div key={index} className="flex mb-4 relative">
            <div className="mr-4 z-10 mb-4">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full bg-gray-200`}
              ></span>
            </div>
            {index < events.length - 1 && (
              <div
                className={
                  "absolute left-2 top-4 h-full translate-x-1/2 border-l-[3px] border-gray-300 rtl:hidden"
                }
              />
            )}
            <div className="block">
              <p className="font-medium rtl:mr-2">
                {formatDate(step.timestamp, true)}
              </p>
              <div className="border px-4 py-2 rounded mt-2">
                <p>{step?.state}</p>
                <p className="text-gray-500 mt-1">
                  {new Intl.DateTimeFormat("en-US", {
                    timeStyle: "medium",
                    second: undefined,
                  }).format(new Date(step?.timestamp))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
