import React, { useState, useEffect } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

const toTopStyles = {
    zIndex: 2,
    position: 'fixed',
    bottom: '12vh',
    right: '6.4%',
    backgroundColor: 'rgb(220,220,220,0.7)',
    color: 'black',
    '&:hover, &.Mui-focusVisible': {
        transition: '0.3s',
        color: '#00a2c8',
        backgroundColor: '#DCDCDC'
    },
    '@media (min-width: 1200px)': {
        right: '2.0%',
        bottom: '3.6em',
    },
};

const Scroll = ({
    showBelow,
}) => {
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} sx={toTopStyles} aria-label="to top" component="span">
                    <ExpandLessIcon />
                </IconButton>
            }
        </div>
    )
}
export default Scroll
