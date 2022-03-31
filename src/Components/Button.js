import propTypes from 'prop-types'

const button = ({color, text}) => {
    const onClick = () => {
        console.log('click')
    }
    return <button className="btn" style={{backgroundColor: color}} >{text}</button>
}

button.propTypes = {
    text: propTypes.string.isRequired,
    color: propTypes.string
}

export default button