import CatalogoComponent from "../components/catalogo";

function CatalogoContainer(props) {
  const state = {};

  const functions = {};

  return <CatalogoComponent {...state} {...functions} {...props} />;
}

export default CatalogoContainer;
