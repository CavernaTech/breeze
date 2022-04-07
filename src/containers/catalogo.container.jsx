import CatalogoController from "../controllers/catalogo.controller";
import CatalogoComponent from "../components/catalogo";

function CatalogoContainer(props) {
  const state = {
    categorias: CatalogoController.useCatalogosProdutos(),
  };

  const functions = {};

  return <CatalogoComponent {...state} {...functions} {...props} />;
}

export default CatalogoContainer;
