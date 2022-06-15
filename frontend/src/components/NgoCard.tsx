import {Ngo} from "../model/Ngo";
import "./components-css/NgoCard.css";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import location from "./components-css/location.png";
import {useNavigate} from "react-router-dom";

type ngoCardProps = {
    ngo: Ngo
}

export default function NgoCard({ngo}: ngoCardProps) {

    const navigate = useNavigate()

    return <div>
        <div className={"NgoCard"}>
            <Card style={{ width: '18rem' }}>
                <div className={"img-container"}>
                <Card.Img variant="top" src={ngo.image}/>
                </div>
                <Card.Body>
                    <Card.Title onClick={() => navigate(`/ngo/${ngo.id}`)}><h2>{ngo.name}</h2></Card.Title>
                    <Card.Text>
                        <div className="ngo-location">
                            <img src={location} alt=""/> {ngo.city}, {ngo.country}
                        </div>
                        <div className="ngo-tagline">
                            "{ngo.tagline}"
                        </div>
                    </Card.Text>
                </Card.Body>
                <div className={"sdg-image"}>
                    <img src={`/sdg-images/${ngo.sdg}.png`} alt=""/>
                </div>
                <Card.Body>
                    <Button variant="light" size="sm" onClick={() => navigate(`/ngo/${ngo.id}`)}>Learn more ...</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
}

