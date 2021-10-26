import PropTypes from 'prop-types'

export default function Full({ takeAway }) {

    return (
        <div className="font-normal text-black-400 text-sm">{takeAway}</div>
    )
}

Full.propTypes = { 
    takeAway: PropTypes.string.isRequired
}