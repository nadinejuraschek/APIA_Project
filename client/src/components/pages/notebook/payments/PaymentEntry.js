// REACT
import React, { useState } from 'react';

const PaymentEntry = ({ payment, deletePayment }) => {
    const [ show, setShow ] = useState(false);

    const showEdit = () => {
        show == true ? setShow(false) : setShow(true);
    };

    return (
        <>
        <tr>
            <td>
                <button 
                    type="button"
                    className="no-style-button"
                    onClick={() => showEdit()}
                >
                    <i className="edit outline icon"></i>
                </button>
                <button 
                    type="button" 
                    className="no-style-button"
                    onClick={() => deletePayment(payment.id)} 
                >
                    <i className="close icon"></i>
                </button>
            </td>
            <td>{payment.week}</td>
            <td>
                { (payment.paid) ? <i className="icon light checkmark"></i> : <i className="icon dark close"></i> }
            </td>
            <td className={ (payment.late) ? 'light-bg' : '' }>{payment.date}</td>
        </tr>

        <tr className={show == true ? '' : 'hide'}>
            <td></td>
            <td>
                <div className="ui mini form">
                    <input 
                        type='number'
                        name='week'
                        placeholder={payment.week}
                    />
                </div>
            </td>
            <td>
                <div className="ui mini form">
                    <select 
                        name="paid" 
                        className="ui fluid dropdown" 
                        // onChange={handleChange}
                    >
                        <option value=""></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <select 
                        name="late" 
                        className="ui fluid dropdown" 
                        // onChange={handleChange}
                    >
                        <option value="" placeholder='Late?'></option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
            </td>
            <td>
                <div className="ui mini form">
                    <input 
                        type='text'
                        name='date'
                        placeholder={payment.date}
                    />
                </div>
            </td>
        </tr>
        </>
    );
};

export default PaymentEntry;