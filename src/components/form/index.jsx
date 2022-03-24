import { Add, Remove } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import PageComponent from "../page.component";

function getTypeSize(type) {
  switch (type) {
    case "number":
      return 3;
    default:
      return 6;
  }
}

function FormComponent({ fields, title, value, onDelete, onSubmit }) {
  const [data, setData] = useState(value || {});

  useEffect(() => {
    if (value) {
      setData(value);
    }
  }, [value]);

  const handleChange = (e) => {
    const raw = { ...data };
    const input = e.target.value;
    let parsed;
    if (e.target.type === "number") {
      parsed = parseFloat(input);
    } else {
      parsed = input;
    }
    // eslint-disable-next-line no-self-compare
    if (parsed === parsed) {
      // Conferindo por NaN
      raw[e.target.id] = parsed;
      setData(raw);
    }
  };

  const handleChangeItem = (e, key, index) => {
    const raw = { ...data };
    const input = e.target.value;
    raw[key][index][e.target.id] = input;
    setData(raw);
  };

  const handleChangeSelectItem = (e, key, index, ck) => {
    const raw = { ...data };
    const input = e.target.value;
    raw[key][index][ck] = input;
    setData(raw);
  };

  const handleAddItem = (e, key) => {
    e.preventDefault();
    const raw = { ...data };
    if (!Array.isArray(raw[key])) {
      raw[key] = [];
    }
    raw[key].push({});
    setData(raw);
  };

  const handleDeleteItem = (e, key, index) => {
    e.preventDefault();
    const raw = { ...data };
    raw[key].splice(index, 1);
    setData(raw);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Deseja realmente exluir?")) {
      onDelete();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <PageComponent title={`${title} ${data !== value ? "*" : ""}`}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          {fields.map((item) => {
            if (item.type === "list") {
              return (
                <Grid item key={item.name} xs={12} md={12}>
                  <Typography variant="body2">{item.title}</Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Tooltip title="Adicionar">
                            <IconButton
                              color="secondary"
                              onClick={(e) => handleAddItem(e, item.name)}
                            >
                              <Add />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        {item.childrens.map((child) => (
                          <TableCell>{child.title}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data[item.name] &&
                        data[item.name].map((d, index) => (
                          <TableRow>
                            <TableCell>
                              <Tooltip title="Exluir">
                                <IconButton
                                  color="error"
                                  onClick={(e) =>
                                    handleDeleteItem(e, item.name, index)
                                  }
                                >
                                  <Remove />
                                </IconButton>
                              </Tooltip>
                            </TableCell>
                            {item.childrens.map((child) => {
                              if (child.type === "multi-select") {
                                return (
                                  <TableCell>
                                    <Select
                                      fullWidth
                                      multiple
                                      onChange={(e) =>
                                        handleChangeSelectItem(
                                          e,
                                          item.name,
                                          index,
                                          child.name
                                        )
                                      }
                                      renderValue={(selected) =>
                                        child.options
                                          .map((o) =>
                                            selected.includes(o.codigo)
                                              ? o.title
                                              : undefined
                                          )
                                          .filter((item) => item !== undefined)
                                          .join(", ")
                                      }
                                      required={child.required}
                                      value={d[child.name] || []}
                                      variant="standard"
                                    >
                                      {child.options &&
                                        child.options.map((option) => (
                                          <MenuItem
                                            key={option.codigo}
                                            value={option.codigo}
                                          >
                                            {option.title}
                                          </MenuItem>
                                        ))}
                                    </Select>
                                  </TableCell>
                                );
                              }
                              return (
                                <TableCell>
                                  <TextField
                                    type={child.type}
                                    id={child.name}
                                    onChange={(e) =>
                                      handleChangeItem(e, item.name, index)
                                    }
                                    required={child.required}
                                    value={d[child.name] || ""}
                                    variant="standard"
                                  />
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </Grid>
              );
            }
            return (
              <Grid item key={item.name} xs={12} md={getTypeSize(item.type)}>
                <TextField
                  fullWidth
                  type={item.type}
                  id={item.name}
                  label={item.title}
                  required={item.required}
                  onChange={handleChange}
                  value={data[item.name] || ""}
                />
              </Grid>
            );
          })}
          <Grid item xs={12} md={6}>
            <Button
              color="error"
              disabled={!onDelete}
              fullWidth
              onClick={handleDelete}
              type="submit"
              variant="outlined"
            >
              Excluir
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              color="secondary"
              disabled={!onSubmit || data === value}
              fullWidth
              type="submit"
              variant="outlined"
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </PageComponent>
  );
}

FormComponent.defaultProps = {
  fields: [],
  onDelete: null,
  onSubmit: null,
  title: null,
  value: null,
};

export default FormComponent;
