import { ChevronDown, ChevronUp } from "lucide-react";
import { useShowMoreStore } from "../stores/show-more-store";

export const ShowMore = () => {
  const { setShowMore, showMore } = useShowMoreStore();
  return (
    <button
      onClick={() => setShowMore(!showMore)}
      className="inline-flex text-teal items-center justify-center gap-x-2 w-full fixed bottom-0 left-0 bg-gradient-to-b pb-8 pt-12 from-white/20 to-white"
    >
      <span>{showMore ? "Less" : "More"}</span>
      {showMore ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
};
