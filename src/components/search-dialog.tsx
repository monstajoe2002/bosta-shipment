import { useEffect, useRef } from "react";
import { useSearchStore } from "../stores/search-store";
import { SearchInput } from "./search-input";

export const SearchDialog = () => {
  const { isVisible: isOpen } = useSearchStore();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} open={isOpen}>
      <p>Greetings, one and all!</p>
      <SearchInput />
    </dialog>
  );
};
