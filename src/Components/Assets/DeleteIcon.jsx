import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteIcon({ onClick }) {
    return (
        <FontAwesomeIcon icon={faTrash} onClick={onClick} style={{ cursor: 'pointer' }} />
    );
}

export default DeleteIcon;