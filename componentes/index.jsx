import React from 'react';

function Index(props) {
    const { showCard, closeModal } = props;

    return (
        <div>
            {showCard && (
                <div className="card card-body">
                    Holam Mundo
                </div>
            )}
            <button onClick={closeModal}>Cerrar</button>
        </div>
    );
}

export default Index;
