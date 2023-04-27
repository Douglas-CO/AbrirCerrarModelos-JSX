import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Index from './componentes/index';

function App() {
  //Creamos un Hook para los componentes
  const [showModal, setShowModal] = React.useState(false);
  const abrirModal = () => {
    setShowModal(true); //Aqui lo mestramos
  };
  const cerrarModal = () => {
    setShowModal(false); //Aqui lo ocultamos
  };

  return (
    <div>
      <Button onClick={abrirModal}/* Se activa Mostrar*/ >Abrir</ Button>
      <Modal show={showModal} onHide={cerrarModal}>
        <Modal.Body /*Modal.Body lo usamos para estructuras complicadas*/>
          <Index showCard={showModal} /* Mostarmos el ShowCard de Index.jsx*/ closeModal={cerrarModal} /* Cerramos el closeModal de Index.jsx*/ />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;