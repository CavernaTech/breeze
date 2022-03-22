import { useParams } from "react-router";
import CatalogoController from "../controllers/catalogo.controller";
import ProdutoController from "../controllers/produto.controller";
import CatalogoPage from "../pages/catalogo.page";

function CatalogoContainer(props) {
  const { onSubmit } = props;
  const params = useParams();
  const produtos = ProdutoController.useProdutosTitle();
  const catalogo = null;
  const value = {
    nome: "Teste",
    subcategorias: [
      {
        nome: "Subteste",
        produtos: [
          "asdas"
        ]
      }
    ]
  };
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
                title: "Nome"
              },
            ],
            options: produtos
          }
        ]
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
  }

  const functions = {
    onDelete: () => {},
    onSubmit: handleSubmit,
  };

  return <CatalogoPage {...state} {...functions} {...props} />;
}

export default CatalogoContainer;
