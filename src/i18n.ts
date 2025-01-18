import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          "Toggle Search": "Toggle Search",
          "Track Your Order": " Track Your Order",
          "Arriving by": "Arriving by",
          "Your order is expected to arrive within":
            "Your order is expected to arrive within",
          days: "days",
          "order #": "order #",
          "Enter your tracking number": "Enter your tracking number",
          "Tracking Details": "Tracking Details",
          Pending: "Pending",
          Delivered: "Delivered",
          "Received at warehouse": "Received At Warehouse",
          "Out for delivery": "Out for delivery",
          Returned: "Returned",
        },
      },
      ar: {
        translation: {
          "Toggle Search": "إظهار البحث",
          "Track Your Order": "تتبع طلبك",
          "Arriving by": "يصل في",
          "Your order is expected to arrive within":
            "من المتوقع أن يصل طلبك خلال",
          days: "أيام",
          "order #": " :رقم الطلب",
          "Enter your tracking number": "ادخل رقم التتبع",
          "Tracking Details": "تفاصيل التتبع",
          Pending: "قيد الانتظار",
          Delivered: "تم الشحن",
          "Received at warehouse": "وصل إلى المخزن",
          "Out for delivery": "في الطريق للشحن",
          Returned: "تم استرجاعه",
        },
      },
    },
  });
