import { useContext, useEffect, useState } from 'react';
import Employee from './Employee'
import { EmployeeContext } from '../context/EmployeeContext';
import { Button, Modal, Alert } from 'react-bootstrap';
import AddForm from './AddForm';
import Pagination from './Pagination';

const EmployeeList = () => {

    const { sortedEmployee } = useContext(EmployeeContext)

    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2);




    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const handleShowAlert= () =>  {
        setShowAlert(true); 
        setTimeout(() => {
            setShowAlert(false);
        },2000);
    }

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();
        }
    }, [sortedEmployee])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirsEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployee.slice(indexOfFirsEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployee.length / employeesPerPage)

    return (

        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleOpen} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success" >
            Employee List successfully updated!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployees.map((employee => (
                        //employees.sort((a,b) => a.name < b.name ? -1 : 1).map((employee => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>
                        )))
                    }
                </tbody>
            </table>

            <Pagination
            pages = {totalPagesNum}
            setCurrentPage={setCurrentPage}
            currentEmployees = {currentEmployees}
            sortedEmployee = {sortedEmployee}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>



        </>
    )
}

export default EmployeeList;