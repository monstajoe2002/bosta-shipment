import i18next from "i18next";

/**
 * Formats a given date into a string based on the specified options.
 *
 * @param date - The date to format.
 * @param showYear - A boolean indicating whether to include the year in the formatted string. Defaults to `false`.
 * @returns A formatted date string.
 */
export const formatDate = (date: Date, showYear: boolean = false): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: showYear ? "numeric" : undefined,
  };
  return new Date(date).toLocaleDateString(
    i18next.resolvedLanguage === "en" ? "en-US" : "ar-EG",
    options
  );
};

/**
 * Calculates the number of working days between the creation date and the arrival date.
 *
 * @param arrivalDate - The arrival date in string format (e.g., "YYYY-MM-DD").
 * @param creationDate - The creation date in string format (e.g., "YYYY-MM-DD").
 * @returns The number of working days between the creation date and the arrival date.
 */
export const workingDaysUntilArrival = (
  arrivalDate: string,
  creationDate: string
): number => {
  const arrivalDateObj = new Date(arrivalDate);
  const creationDateObj = new Date(creationDate);
  const daysBetween = Math.ceil(
    Math.abs(arrivalDateObj.getTime() - creationDateObj.getTime()) /
      (1000 * 60 * 60 * 24)
  );
  return daysBetween;
};
