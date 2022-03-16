import { Add, Edit } from "@mui/icons-material";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";

function ListingComponent({ onClickAdd, onClickEdit, items, fields }) {

  const handleEdit = (e, codigo) => {
    e.preventDefault();
    onClickEdit(codigo);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {onClickAdd ? (
            <TableCell>
              <Tooltip title="Adicionar">
                <IconButton color="secondary" onClick={onClickAdd}>
                  <Add />
                </IconButton>
              </Tooltip>
            </TableCell>
          ) : null}
          {fields.map((field) => (
            <TableCell key={field.name}>{field.title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.codigo}>
            {onClickEdit ? (
              <TableCell>
                <Tooltip title="Editar">
                  <IconButton color="secondary" onClick={(e) => handleEdit(e, item.codigo)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
              </TableCell>
            ) : null}
            {fields.map((field) => {
              const value = item[field.name];
              if (value) return <TableCell>{value}</TableCell>;
              return null;
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ListingComponent.defaultProps = {
  onClickAdd: null,
  onClickEdit: null,
  items: [
    {
      codigo: "a",
      nome: "Testa",
    },
  ],
  fields: [
    {
      name: "codigo",
      title: "Codigo",
    },
    {
      name: "nome",
      title: "Nome",
    },
  ],
};

export default ListingComponent;
