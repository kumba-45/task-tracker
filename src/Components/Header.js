
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, show }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={show ? 'red' : 'green'} title={show ? 'Close' : 'Add'} onClick={onAdd} />

        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker",
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
