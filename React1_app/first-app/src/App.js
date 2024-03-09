import React, {Fragment, useEffect, useRef, useState} from "react";
import './App.css'
import Input from "./Input";
function App(props) {
    const [isTrue, setIsTrue] = useState(true)
    const [crowd, setCrown] = useState([])
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")

    // refs
    const nameRef = useRef();
    const lastNameRef = useRef(null)
    const dobRef = useRef(null)

    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false);
            return;
        }
        setIsTrue(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name !== "") {
            addPerson(name, lastName, dob)
        }

    }

    const addPerson = (newName, newLastName, newDob) => {
        let newPerson = {
            id: crowd.length +1,
            name: newName,
            lastName: newLastName,
            dob: newDob,
        }

        const newList = crowd.concat(newPerson);
        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            } else {
                return 0
            }
        })

        setCrown(sorted)
        setName("")
        setLastName("")
        setDob("")

        nameRef.current.value = ""
        lastNameRef.current.value = ""
        dobRef.current.value = ""
    }

    useEffect(() => {
        console.log("useEffect fired");

        let people = [
            {
                id: 1,
                name: "marry",
                lastname: "Jones",
                dob: "1997-05-05",
            },
            {
                id: 2,
                name: "Jack",
                lastname: "Smith",
                dob: "1995-02-25",
            },
        ]
        setCrown(people);
    }, []);

    return (
        <>
            <hr />
            <h1 className="hi-green">{props.msg}</h1>
            <hr />
            {isTrue &&
                <>
                    <p>The current value of IsTrue is true</p>
                    <hr />
                </>
            }
            <hr />
            {isTrue
                ? <p>is true</p>
                : <p>is false</p>
            }
            <hr />
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>

            <hr />
            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-item">{m.name} {m.lastname}</li>
                ))}
            </ul>

            <hr />
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="first-name">First Name</label>
                    <input type="text" name="first-name" id="first-name" autoComplete="first-name-new" className="form-control"
                           ref={nameRef} onChange={(event) => setName(event.target.value)}></input>
                </div>

                <Input
                    title="last Name"
                    type="text"
                    name="last-name"
                    autoComplete="last-name-new"
                    className="form-control"
                    ref={lastNameRef}
                    onChange={(event) => setLastName(event.target.value)}
                ></Input>

                <Input
                    title="Date of birth"
                    type="date"
                    name="dob"
                    autoComplete="dob-new"
                    className="form-control"
                    ref={dobRef}
                    onChange={(event) => setDob(event.target.value)}
                ></Input>

                <input type="submit" value="Submit" className="btn btn-primary"/>

            </form>

            <div>
                <p>name: {name}</p>
                <p>LastName: {lastName}</p>
                <p>dob: {dob}</p>
            </div>
        </>
    )
}

export default App;