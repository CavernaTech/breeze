import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import PageComponent from "../page.component";
import useStyles from "./style";

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
  const classes = useStyles();

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

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('Deseja realmente exluir?')) {
      onDelete();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <PageComponent title={`${title} ${data !== value ? "*" : ""}`}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          {fields.map((item) => (
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
          ))}
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
