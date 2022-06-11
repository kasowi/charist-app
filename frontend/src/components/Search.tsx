import React, {ChangeEvent} from "react";
import { Form } from "react-bootstrap";
import "./components-css/Search.css";

type SearchProps = {
    searchName: string
    setSearchName: React.Dispatch<React.SetStateAction<string>>
}

export function Search({searchName, setSearchName}: SearchProps) {
    return (
        <div className={"Search"}>
            <Form.Control className="search-input" type={"text"}
                   value={searchName}
                   placeholder={"Type to search ..."}
                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
        </div>
    )
}