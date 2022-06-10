import React, {ChangeEvent} from "react";
import { Form } from "react-bootstrap";

type SearchProps = {
    searchName: string
    setSearchName: React.Dispatch<React.SetStateAction<string>>
}

export function Search({searchName, setSearchName}: SearchProps) {
    return (
        <div>
            <Form.Control className="me-auto" type={"text"}
                   value={searchName}
                   placeholder={"Type to search ..."}
                   onChange={(event:ChangeEvent<HTMLInputElement>) => setSearchName(event.target.value)}/>
        </div>
    )
}