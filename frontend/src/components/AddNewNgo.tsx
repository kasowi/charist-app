import {Ngo} from "../model/Ngo";
import {FormEvent, useState} from "react";
import "./components-css/AddNewNgo.css";
import {Button} from "react-bootstrap";

type AddNewNgoProps = {
    addNgo: (newNgo: Omit<Ngo, "id">) => void
}

export default function AddNewNgo({addNgo}: AddNewNgoProps) {
    const [name, setName] = useState(``)
    const [email, setEmail] = useState(``)
    const [url, setUrl] = useState(``)
    const [tagline, setTagline] = useState(``)
    const [description, setDescription] = useState(``)
    const [sdg, setSdg] = useState(``)
    const [image, setImage] = useState(``)
    const [city, setCity] = useState(``)
    const [country, setCountry] = useState(``)
    const [region, setRegion] = useState(``)

    const addOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newNgo: Omit<Ngo, "id"> = {
            name: name,
            email: email,
            url: url,
            tagline: tagline,
            description: description,
            sdg: sdg,
            image: image,
            city: city,
            country: country,
            region: region,
        }
        addNgo(newNgo);
        setName('');
        setEmail('');
        setUrl('');
        setTagline('');
        setDescription('');
        setSdg('');
        setImage('');
        setCity('');
        setCountry('');
        setRegion('');
    }


    return (
        <div className={"form-container"}>
            <form className={"form"} onSubmit={addOnSubmit}>
                <fieldset>
                    <legend><h2>Start an Application</h2></legend>
                    <label>
                        Organisation Name</label>
                        <input
                            type={"text"}
                            name={"ngo-name"}
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder={"Your organisation"}/>
                    <label>
                        Organisation email</label>
                        <input
                            type={"email"}
                            name={"ngo-email"}
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            placeholder={"organisation@example.org"}/>
                    <label>
                        Organisation website</label>
                        <input
                            type={"url"}
                            name={"ngo-url"}
                            value={url}
                            onChange={event => setUrl(event.target.value)}
                            placeholder={"https://"}/>
                    <label>
                        Tagline / Short description</label>
                        <input
                            type={"text"}
                            name={"ngo-tagline"}
                            value={tagline}
                            onChange={event => setTagline(event.target.value)}
                            placeholder={"Describe your mission in one sentence"}/>
                    <label>Description</label>
                        <textarea
                            name={"ngo-description"}
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                            placeholder={"Something about your organisation ..."}/>
                    <label>Which Sustainable Development Goal (SDG) best describes your purpose?</label>
                        <select
                            name={"ngo-sdg"}
                            value={sdg}
                            onChange={event => setSdg(event.target.value)}>
                            <option value={""}>- Select -</option>
                            <option value={"1"}>1 - No Poverty</option>
                            <option value={"2"}>2 - Zero Hunger</option>
                            <option value={"3"}>3 - Good Health and Well-Being</option>
                            <option value={"4"}>4 - Quality Education</option>
                            <option value={"5"}>5 - Gender Equality</option>
                            <option value={"6"}>6 - Clean Water and Sanitation</option>
                            <option value={"7"}>7 - Affordable and Clean Energy</option>
                            <option value={"8"}>8 - Decent Work and Economic Growth</option>
                            <option value={"9"}>9 - Industry, Innovation and Infrastructure</option>
                            <option value={"10"}>10 - Reduced Inequalities</option>
                            <option value={"11"}>11 - Sustainable Cities and Communities</option>
                            <option value={"12"}>12 - Responsible Consumption and Production</option>
                            <option value={"13"}>13 - Climate Action</option>
                            <option value={"14"}>14 - Life Below Water</option>
                            <option value={"15"}>15 - Life on Land</option>
                            <option value={"16"}>16 - Peace, Justice and Strong Institutions</option>
                            <option value={"17"}>17 - Partnerships for the Goals</option>
                        </select>
                    <label>Profile image</label>
                        <input
                            type={"text"}
                            name={"ngo-image"}
                            accept={"image/png, image/jpeg"}
                            value={image}
                            onChange={event => setImage(event.target.value)}/>
                    <label>City</label>
                        <input
                            type={"text"}
                            name={"ngo-city"}
                            value={city}
                            onChange={event => setCity(event.target.value)}
                            placeholder={"Your city"}/>
                     <label>Country</label>
                        <input
                            type={"text"}
                            name={"ngo-country"}
                            value={country}
                            onChange={event => setCountry(event.target.value)}
                            placeholder={"Your country"}/>
                    <label>Region</label>
                        <select
                            name={"ngo-region"}
                            value={region}
                            onChange={event => setRegion(event.target.value)}>
                            <option value={""}>- Select -</option>
                            <option value={"africa"}>Africa</option>
                            <option value={"americas"}>Americas</option>
                            <option value={"asia"}>Asia</option>
                            <option value={"europe"}>Europe</option>
                            <option value={"oceania"}>Oceania</option>
                        </select>
                    <div>
                        <Button variant="outline-success" size={"lg"} name={"submit"} type="submit" value="Submit">Submit</Button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

