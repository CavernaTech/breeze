import { useParams } from "react-router";
import FormComponent from "../components/form";
import CatalogoController from "../controllers/catalogo.controller";
import ProdutoController from "../controllers/produto.controller";

function CatalogoContainer(props) {
  const { codigo, onSubmit } = props;
  const params = useParams();
  const produtos = ProdutoController.useProdutosTitle();
  const catalogo = CatalogoController.useCatalogoByCodigo(codigo);
  const value = (catalogo && JSON.parse(JSON.stringify(catalogo))) || {};
  const state = {
    fields: [
      {
        name: "nome",
        type: "text",
        title: "Nome",
        required: true,
      },
      {
        name: "subcategorias",
        type: "list",
        title: "Subcategorias",
        required: true,
        childrens: [
          {
            name: "nome",
            type: "text",
            title: "Nome",
          },
          {
            name: "produtos",
            type: "multi-select",
            title: "Produtos",
            childrens: [
              {
                name: "nome",
                type: "text",
                title: "Nome",
              },
            ],
            options: produtos,
          },
        ],
      },
    ],
    value,
  };

  const handleSubmit = async (data) => {
    if (catalogo) {
      await CatalogoController.updateCatalogo(params.codigo, data);
    } else {
      await CatalogoController.addCatalogo(data);
    }
    onSubmit();
  };

  const functions = {
    onDelete: () => {},
    onSubmit: handleSubmit,
  };

  return (
    <FormComponent
      {...props}
      {...state}
      {...functions}
    />
  );
}

export default CatalogoContainer;
