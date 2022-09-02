import { Form, FormGroup, Button } from "react-bootstrap"
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';

const AddForm = () => {
    const { addEmployee } = useContext(EmployeeContext);

    
    /* const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [address , setAddress] = useState("");
    const [phone , setPhone] = useState(""); */

    const[newEmployee, setNewEmployee] = useState({
        name: "", email:"", address:"", phone:""
    })

    const{name, email, address, phone} = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    required />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    value={address}
                    onChange={e => onInputChange(e)}
                    rows={3} />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="Phone *"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                />
            </FormGroup>

            <Button variant="success" type="submit">
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm