import React, { FC, useState, ChangeEvent } from "react";

export enum HairColor {
    Blond = "Your hair is blond",
    Brown = "Cool color, brown",
}

interface Props {
    name: string;
    age?: number;
    email: string;
    hairColor: HairColor;
    //getName: (name: string) => string;  // when you pass a function throw props
}

export const PersonFC: FC<Props> = ({ name, age, email, hairColor }) => {
    const [country, setCountry] = useState<string | null>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{age}</h1>
            <input
                placeholder="Country"
                //onChange={(event) => {setCountry(event.target.value)}}  // here the type of event is automatically  identified
                onChange={handleChange}
            />
            <p>{country}</p>
            <p>{hairColor}</p>
        </div>
    );
};
