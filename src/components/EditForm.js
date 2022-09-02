import { Form, FormGroup, Button } from "react-bootstrap"
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext , useState, useEffect } from 'react';

const EditForm = ({theEmployee}) => {

    const { updateEmployee } = useContext(EmployeeContext);

    const employee = theEmployee;
    const id = employee.id;

    const [name, SetName] = useState(employee.name);
    const [email, SetEmail] = useState(employee.email);
    const [address, SetAddress] = useState(employee.address);
    const [phone, SetPhone] = useState(employee.phone);



    const updatedEmployee = {id, name, email, address, phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

   

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = {(e) => SetName(e.target.value)}
                    required />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = {(e) => SetEmail(e.target.value)}


                    required />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    value={address}
                    onChange = {(e) => SetAddress(e.target.value)}


                    rows={3} />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="Phone *"
                    name="phone"
                    value={phone}
                    onChange = {(e) => SetPhone(e.target.value)}


                />
            </FormGroup>

            <Button variant="success" type="submit">
                Update Employee
            </Button>
        </Form>
    )
}

export default EditForm