import CatalogoController from "../controllers/catalogo.controller";
import CatalogosPage from "../pages/catalogos.page";

function CatalogosContainer(props) {
  const state = {
    items: CatalogoController.useCatalogos(),
    fields: [
      {
        name: "nome",
        title: "Nome"
      },
    ],
  };

  const functions = {};

  return <CatalogosPage {...state} {...functions} {...props} />;
}

export default CatalogosContainer;
