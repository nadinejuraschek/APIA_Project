import React from 'react';

const Header = (props) => {
    return (
        <div className="pageheader">
            {props.header}
        </div>
    );
};

export default Header;