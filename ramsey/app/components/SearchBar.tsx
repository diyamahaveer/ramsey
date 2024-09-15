"use client"
import React, { useEffect } from "react"
import axios from "axios";

export default function SearchBar({ search }) {

    async function handleKeyPress(evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();

            const query = evt.target.value;
            evt.target.value = ""
            console.log(search["search"])
            search(true);

            // Send HTTP request for the content and set the queryContent prop to populate
            // on the recipe search screen.
            const response = await axios.get(`http://10.37.116.66:8080/api/search/?query=${query}`)
            console.log(response)
            // console.log(`http://10.37.116.66:8080/api/search/?query=${query}`);

            // axios.get(`http://10.37.116.66:8080/api/search/?query=${query}`)
        }
    }

    return (
        <textarea onKeyDown={(evt) => { handleKeyPress(evt) }} className="searchbar py-1 px-2 placeholder:text-left align-middle w-[30%] h-[2rem] resize-none bg-secondary-tan rounded-lg border-black border-solid border-[1px] " placeholder="What do we want to make today? ✨">
        </textarea>
    )
}
