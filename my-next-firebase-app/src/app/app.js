import Card from './card';

function App() {
  return (
    <div>
      <Card
        titulo="Tarjeta 1"
        descripcion="Descripción de la tarjeta 1"
        imagen="https://www.mastercard.es/content/dam/public/mastercardcom/eu/es/images/Consumidores/escoge-tu-tarjeta/credito/credito-estandar/1280x720-mc-sym-card-stndrd-ci-5BIN-mm.png"
      />
      <Card
        titulo="Tarjeta 2"
        descripcion="Descripción de la tarjeta 2"
        imagen="https://www.ibercaja.es/public/img/tarjetas/tarjeta-visa-dorada.png"
      />
      <Card
        titulo="Tarjeta 3"
        descripcion="Descripción de la tarjeta 3"
        imagen="https://www.unicajabanco.es/content/dam/unicaja/imagenes/particulares/tarjeta-debito-mastercard-unicaja.jpg"
      />
    </div>
  );
}

export default App;