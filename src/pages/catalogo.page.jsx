import { useNavigate } from "react-router-dom";
import FormComponent from "../components/form";
import MenuContainer from "../containers/menu.container";

function CatalogoPage(props) {
  const { onSubmit } = props;
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    onSubmit(data);
    navigate("/catalogos");
  };
  return (
    <MenuContainer>
      <FormComponent
        {...props}
        onSubmit={handleSubmit}
        title="Formulário Catálogo"
      />
    </MenuContainer>
  );
}

export default CatalogoPage;
