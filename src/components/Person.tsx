import React from "react";

interface Props {
    name: string;
    age?: number;
    email: string;
    //getName: (name: string) => string;  // when you pass a function throw props
}

export const Person = ({ name, age, email }: Props) => {
    type NameType = "Luiza" | "Jack";

    const nameForType: NameType = "Jack";

    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{age}</h1>
            <p>{nameForType}</p>
        </div>
    );
};
