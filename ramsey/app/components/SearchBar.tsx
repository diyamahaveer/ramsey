"use client";
import React from "react";

interface SearchBarProps {
  search: (query: string) => void;
}

export default function SearchBar({ search }: SearchBarProps) {
  async function handleKeyPress(evt: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (evt.key === "Enter") {
      evt.preventDefault();

      const query = evt.target.value;
      (evt.target as HTMLTextAreaElement).value = "";

      // Call the onSearch function with the query
      search(query);


      // You can also handle the API request here if needed
      // const response = await axios.get(`http://10.37.116.66:8080/api/search/?query=${query}`);
      // console.log(response);
    }
  }

  return (
    <textarea
      onKeyDown={(evt) => {
        handleKeyPress(evt);
      }}
      className="searchbar py-1 px-2 placeholder:text-left align-middle w-[40%] h-[2rem] resize-none bg-secondary-tan rounded-lg border-black border-solid border-[1px] text-[.9em] "
      placeholder="What do we want to make today? ✨"
    ></textarea>
  );
}
