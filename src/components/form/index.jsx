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

function FormComponent({ fields, title, value, onSubmit }) {
  const [data, setData] = useState(value || {});
  const classes = useStyles();

  useEffect(() => {
    if (value) {
      setData(value);
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  const handleChange = (e) => {
    const raw = { ...data };
    raw[e.target.id] = e.target.value;
    setData(raw);
  };

  return (
    <PageComponent title={title}>
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
          <Grid item xs={12} md={12}>
            <Button
              color="secondary"
              fullWidth
              type="submit"
              variant="outlined"
            >
              { value ? "Atualizar" : "Adicionar" }
            </Button>
          </Grid>
        </Grid>
      </Box>
    </PageComponent>
  );
}

FormComponent.defaultProps = {
  fields: [],
  title: null,
  value: null,
};

export default FormComponent;
