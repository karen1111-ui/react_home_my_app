import React from "react";
import {Button, Modal} from "react-bootstrap";
import PropTypes from 'prop-types';

export default function Confirm(props) {
    return(
        <Modal show={true} onHide={props.onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure to remove {props.count} tasks</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onSubmit}>
                    Submit
                </Button>
                <Button variant="success" onClick={props.onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

Confirm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
};
