import { InputText } from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debounce } from "../helpers/utils";
import { usePhotos } from "../contexts/photos/hooks/use-photos";

export function PhotosSearch() {
  const [inputValue, setInputValue] = React.useState("");
  const { filter } = usePhotos();

  const debouncedSetValue = React.useCallback(
    debounce((value: string) => filter.setQ(value), 1000),
    [filter.setQ]
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    console.log("Campo de texto", value);
    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar foto"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
