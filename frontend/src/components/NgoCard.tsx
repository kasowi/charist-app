import {Ngo} from "../model/Ngo";
import "./components-css/NgoCard.css";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import location from "./components-css/location.png";

type ngoCardProps = {
    ngo: Ngo
}

export default function NgoCard({ngo}: ngoCardProps) {

    return <div>
        <div className={"NgoCard"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ngo.image} />
                <Card.Body>
                    <Card.Title><h4>{ngo.name}</h4></Card.Title>
                    <Card.Text>
                        <div className="ngo-location">
                            <img src={location}/> {ngo.city}, {ngo.country}
                        </div>
                        {ngo.tagline}
                    </Card.Text>
                </Card.Body>
                <div className={"sdg-image"}>
                    <img src={`/sdg-images/${ngo.sdg}.png`} alt={"ngo-sdg"}/>
                </div>
                <Card.Body>
                    <Button variant="outline-dark">Learn more ...</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
}

