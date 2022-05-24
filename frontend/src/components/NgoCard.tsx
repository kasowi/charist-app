import {Ngo} from "../model/Ngo";

type ngoCardProps = {
    ngo: Ngo
}

export default function NgoCard({ngo}: ngoCardProps) {
    return <div>
        <div className={"NgoCard"}>
            <div className={"NgoName"}>{ngo.name}</div>
            <div className={"NgoSdg"}>{ngo.sdg}</div>
            <div className={"NgoLocation"}>{ngo.city}, {ngo.country}</div>
        </div>
    </div>
}