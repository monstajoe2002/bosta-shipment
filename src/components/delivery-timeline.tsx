import { CheckIcon } from "lucide-react";
import { formatDate, workingDaysUntilArrival } from "../lib/utils";
import { useTranslation } from "react-i18next";

export const DeliveryTimeline = ({
  shipment,
}: {
  shipment: Record<string, any>;
}) => {
  const { t, i18n } = useTranslation();
  const stepIndex: Record<string, number> = {
    [t("Pending")]: 0,
    [t("Received at warehouse")]: 1,
    [t("Out for delivery")]: 2,

    [t("Delivered")]: 3,
  };
  const steps = [
    {
      status: t("Pending"),
      date: formatDate(shipment?.CreateDate),

      completed:
        t(shipment.CurrentStatus.state) &&
        stepIndex[t(shipment.CurrentStatus.state)] >= stepIndex[t("Pending")],
    },
    {
      status: t("Received at warehouse"),
      date:
        t(shipment?.CurrentStatus?.state) === t("Received at warehouse")
          ? formatDate(shipment?.CurrentStatus.timestamp)
          : "",
      completed:
        t(shipment.CurrentStatus.state) &&
        stepIndex[t(shipment.CurrentStatus.state)] >=
          stepIndex[t("Received at warehouse")],
    },
    {
      status: t("Out for delivery"),

      date:
        t(shipment?.CurrentStatus?.state) === t("Out for delivery")
          ? formatDate(shipment?.CurrentStatus?.timestamp)
          : "",
      completed:
        t(shipment.CurrentStatus.state) &&
        stepIndex[t(shipment.CurrentStatus.state)] >=
          stepIndex[t("Out for delivery")],
    },
    {
      status: t("Delivered"),
      date:
        t(shipment?.CurrentStatus?.state) === t("Delivered")
          ? formatDate(shipment?.CurrentStatus.timestamp)
          : "",
      completed:
        t(shipment.CurrentStatus.state) &&
        stepIndex[t(shipment.CurrentStatus.state)] >= stepIndex[t("Delivered")],
    },
  ];
  const workingDays = workingDaysUntilArrival(
    shipment?.CreateDate,
    shipment?.CurrentStatus?.timestamp
  );

  return (
    <div className="bg-white rounded-lg shadow-md border border-[#E4E7EC] md:mt-14 lg:mx-0 mx-3 mt-6">
      <div className="p-4">
        <p className="text-gray-500 tracking-wide uppercase text-xs">
          {t("order #")}
          {shipment?.TrackingNumber}
        </p>
        {shipment?.CurrentStatus?.state === "Returned" ||
        shipment?.CurrentStatus?.state === "Delivered" ? (
          <h2 className="text-2xl font-semibold text-teal">
            {t(shipment?.CurrentStatus?.state)}
          </h2>
        ) : (
          <>
            <h2 className="text-2xl font-semibold">
              {t("Arriving by")}
              <span className="text-teal">
                {" "}
                {formatDate(shipment?.CurrentStatus?.timestamp)}
              </span>
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {t("Your order is expected to arrive within")} {workingDays}{" "}
              {i18n.resolvedLanguage === "en" && "working"} {t("days")}.
            </p>
          </>
        )}
      </div>
      <hr className="border" />
      {/* order timeline steps */}
      {/* hide if returned */}
      {t(shipment?.CurrentStatus?.state) !== t("Returned") && (
        <div className="p-4 md:flex md:justify-center">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="flex items-center mb-4 relative md:flex-col md:items-start md:mb-0 md:px-4"
              >
                <div className="mr-4 z-10 md:mr-0 md:mb-2">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full ${
                      step.completed ? "bg-teal text-white" : "bg-gray-200"
                    }`}
                  >
                    {step.completed && <CheckIcon size={14} />}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-2 top-4 h-full translate-x-1/2 border-l-[3px] border-gray-300 border-dashed
                ${steps[index + 1].completed ? "border-teal" : ""}
                md:border-l-0 md:border-t-[3px] md:top-auto md:translate-x-2 md:translate-y-[8px] md:rtl:-translate-x-6 rtl:hidden rtl:md:block md:w-full`}
                  />
                )}
                <div
                  className={`${step.completed ? "opacity-100" : "opacity-50"} rtl:mr-2`}
                >
                  <p className="font-semibold">{step.status}</p>
                  {step.date && <p className="text-sm">{step.date}</p>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
