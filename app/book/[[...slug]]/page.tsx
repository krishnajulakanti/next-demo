import React from "react"

export default function Book(
    {params} : Readonly<{params: {slug: string[]}}>
) {
    if(params.slug?.length === 3) {
        return (
            <div>
            <h1>Viewing Chapter {params.slug[0]} and Topic {params.slug[1]} and Question {params.slug[2]}</h1>
            <h1>Viewing Chapter {params.slug[0]} - Question {params.slug[2]}</h1>
            </div>
        )
    }
    else if(params.slug?.length === 2) {
        return (
            <h1>Viewing Chapter {params.slug[0]} and Topic {params.slug[1]}</h1>
        )
    }
    else if(params.slug?.length === 1) {
        return (
            <h1>Viewing Chapter {params.slug[0]}</h1>
        )
    }
    return (
        <div>
            <h1>Book list</h1>
        </div>
    )
}