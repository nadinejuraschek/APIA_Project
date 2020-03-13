import React, { useState } from 'react';
import axios from 'axios';

const useAddForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }
    }
    const handleChange = event => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    axios({
        url: '/notes',
        method: 'POST',
        data: inputs
    }).then(response => {
        console.log('axios called');
        console.log('inputs');
    });

    // return {
    //     handleSubmit,
    //     handleChange,
    //     inputs
    // };
}

export default useAddForm;