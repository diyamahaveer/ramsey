"use client"
import React, { useEffect } from "react"

export default function SearchBar() {

    useEffect(() => {
        document.querySelector(".searchbar");
    }, [])

    return (
        <textarea className="py-1 px-2 placeholder:text-left align-middle w-[30%] h-[2rem] resize-none bg-secondary-tan rounded-lg border-black border-solid border-[1px]" placeholder="What do we want to make today? ✨">
        </textarea>
    )
}