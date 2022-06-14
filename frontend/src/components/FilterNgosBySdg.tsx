import React from "react";
import "./components-css/FilterNgosBySdg.css";

type SdgOption = {
    name: string
    value: string
}

type FilterNgosBySdgProps = {
    setSdgFilter: React.Dispatch<React.SetStateAction<string>>
}

export function FilterNgosBySdg({setSdgFilter}: FilterNgosBySdgProps) {

    const sdgOptions: SdgOption[] = []
    sdgOptions.push({name: "all", value: ""})

    for (let i = 1; i < 18; i++) {
        sdgOptions.push({name: `${i}`, value: `${i}`})
    }

    return (
        <div className={"filter-container"}>
                    <div className="sdg-filter-images d-flex flex-wrap justify-content-center">
                    {sdgOptions.map((sdgButton) => (
                            <img src={`/sdg-images/${sdgButton.name}.png`} alt=""
                            onClick={() => setSdgFilter(sdgButton.value)}/>
                    ))}
                    </div>
        </div>
    );
}