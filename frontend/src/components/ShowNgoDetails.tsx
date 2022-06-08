import {Ngo} from "../model/Ngo";
import Card from "react-bootstrap/Card";
import "./components-css/ShowNgoDetails.css";
import location from "./components-css/location.png";
import {Button, Tab, Tabs} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


type ShowNgoDetailsProps = {
    ngo: Ngo
    toggleEditing: () => void
    deleteNgoById : (id: string) => void
}

export default function ShowNgoDetails({ngo, toggleEditing, deleteNgoById}: ShowNgoDetailsProps) {
    const navigate = useNavigate()

    return (
        <div className={"show-ngo-details"}>
            <div className={"NgoDetails"}>
                <Card>
                    <Card.Img variant="top" src={ngo.image} />
                        <Tabs defaultActiveKey="profile" id="ngo-detail-tabs" className="details-tabs">
                            <Tab eventKey="profile" title="Profile">
                                <Card.Title><h2>{ngo.name}</h2></Card.Title>
                                <Card.Text>
                                    <div className="ngo-location">
                                        <img src={location} alt=""/> {ngo.city}, {ngo.country}
                                    </div>
                                    <div className={"sdg-image"}>
                                        <img src={`/sdg-images/${ngo.sdg}.png`} alt={"ngo-sdg"}/>
                                    </div>
                                    <h4><i>"{ngo.tagline}"</i></h4>
                                    <p>{ngo.description}</p>
                                </Card.Text>
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                                <Card.Title><h2>{ngo.name}</h2></Card.Title>
                                <Card.Text>
                                    <div className="ngo-location">
                                        <img src={location} alt=""/> {ngo.city}, {ngo.country}
                                    </div>
                                    <div className="contact-details">
                                        <p><b>e-mail:</b> {ngo.email}</p>
                                        <p><a href={ngo.url}><b>Visit our website!</b></a></p>
                                    </div>
                                </Card.Text>
                            </Tab>
                        </Tabs>
                    <div className={"buttons"}>
                    <Button variant="outline-success" size="sm" onClick={toggleEditing}>Edit</Button>
                    <Button variant="outline-danger" size="sm" name={"delete"} onClick={() => {
                        deleteNgoById(ngo.id)
                        navigate(`/`)
                    }}>Delete</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}