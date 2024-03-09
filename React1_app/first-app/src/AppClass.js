import React, { Component } from "react";
import './AppClass.css';
import Input from "./Input";

export default class AppClass extends Component {
    constructor(props) {
        super(props);

        this.lastNameRef = React.createRef(null);
        this.nameRef = React.createRef()
        this.dobRef = React.createRef(null);

        this.state = {
            isTrue: false,
            crowd: [],
        };
    }

    setName(newName) {
        this.setState({name: newName})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.name !== "") {
            this.addPerson(this.state.name, this.state.lastName, this.state.dob)
        }
    }

    addPerson(newName, newLast, newDob) {
        let newPerson = {
            id: this.state.crowd.length +1,
            name: newName,
            lastName: newLast,
            dob: newDob,
        }

        const newList = this.state.crowd.concat(newPerson);
        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            } else {
                return 0
            }
        })

        this.setState({crowd: sorted})
        this.setState({name: ""})
        this.setState({lastName: ""})
        this.setState({dob: ""})

        this.nameRef.current.value = ""
        this.lastNameRef.current.value = ""
        this.dobRef.current.value = ""
    }
    componentDidMount() {
        this.setState({
            name: "",
            lastName: "",
            dob: "",
            crowd : [
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
        });
    }

    toggleTrue = () => {
        if (this.state.isTrue) {
            this.setState({isTrue : false});
            return
        }
        this.setState({isTrue: true})
    }


    render() {
        return (
            <>
                <hr />
                <h1 className="hi-green">{this.props.msg}</h1>
                <hr />
                {this.state.isTrue &&
                    <>
                        <p>The current value of IsTrue is true</p>
                        <hr />
                    </>
                }
                <hr />
                {this.state.isTrue
                    ? <p>is true</p>
                    : <p>is false</p>

                }
                <hr />
                <a href="#!" className="btn btn-outline-secondary" onClick={this.toggleTrue}>Toggle isTrue</a>

                <hr />

                <h3>People</h3>
                <ul className="list-group">
                    {this.state.crowd.map((m) => (
                        <li key={m.id} className="list-group-item">{m.name} {m.lastname}</li>
                    ))}
                </ul>

                <hr />
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="first-name">First Name</label>
                        <input type="text" name="first-name" id="first-name" autoComplete="forst-name-new" className="form-control"
                               ref={this.nameRef} onChange={(event) => this.setName(event.target.value)}></input>
                    </div>

                    <Input
                        title="last Name"
                        type="text"
                        name="last-name"
                        autoComplete="last-name-new"
                        className="form-control"
                        ref={this.lastNameRef}
                        onChange={(event) => this.setState({lastName: event.target.value})}
                    ></Input>

                    <Input
                        title="Date of birth"
                        type="date"
                        name="dob"
                        autoComplete="dob-new"
                        className="form-control"
                        ref={this.dobRef}
                        onChange={(event) => this.setState({dob: event.target.value})}
                    ></Input>

                    <input type="submit" value="Submit" className="btn btn-primary"/>

                </form>

                <div>
                    <p>name: {this.state.name}</p>
                    <p>LastName: {this.state.lastName}</p>
                    <p>dob: {this.state.dob}</p>
                </div>


            </>
        );
    }
}