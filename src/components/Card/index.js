import React, { useState, useEffect, useRef } from 'react';

// Card Component displaying colors
export default Card = (props) => {
    // sets state for the modal
    const [showModal, setShowModal] = useState(false);

    // function that toggles modal state
    const toggleModal = () => showModal ? setShowModal(false) : setShowModal(true);

    // destructure the color object
    let { name, color, id, pantone_value } = props.data

    // sets title to the name of the color capitalizing the first letter
    let title = capWords(name);

    return (
        <>
            <button
                className="card"
                key={id}
                style={{ backgroundColor: color }}
                onClick={() => {
                    toggleModal();
                    console.log(`Show Modal ${name}`);
                    console.log(showModal);

                }}
            >
                <div style={{ fontWeight: 600, fontSize: "large" }}>{title}</div>
                <div>Pantone Color Value<br />{pantone_value}</div>
            </button>
            <Modal showModal={showModal} selectColor={props.data} />
        </>
    )
}

