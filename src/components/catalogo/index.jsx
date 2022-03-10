import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Add } from "@mui/icons-material";

import useStyle from "./style";
import TabPanel from "./tabPanel";

function CatalogoComponent({ categorias }) {
  const classes = useStyle();
  const [tab, setTab] = useState(0);

  const handleTabChange = (e, newValue) => setTab(newValue);

  return (
    <Paper className={classes.paper}>
      <Box className={classes.tabs}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label="tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {categorias.map((categoria, index) => (
            <Tab label={categoria.nome} id={`tab-${index}`} key={index} />
          ))}
        </Tabs>
      </Box>
      {categorias.map((categoria, index) => (
        <TabPanel value={tab} index={index}>
          {categoria.subCategorias.map((subCategoria) => (
            <Box className={classes.tab}>
              <Typography variant="body2">{subCategoria.nome}</Typography>
              <Grid
                container
                spacing={2}
                alignItems="flex-start"
                alignContent="space-around"
              >
                {subCategoria.produtos.map((produto) => (
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardContent>
                        <Grid container direction="row" alignContent="center">
                          <Grid item xs={10}>
                            <Typography variant="h5">{produto.nome}</Typography>
                            <Typography variant="body2">
                              {produto.descricao}
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Button
                              color="success"
                              variant="text"
                              startIcon={<Add />}
                            >
                              {produto.preco}
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </TabPanel>
      ))}
    </Paper>
  );
}

CatalogoComponent.defaultProps = {
  categorias: [
    {
      nome: "🍝 Prato Feito",
      subCategorias: [
        {
          nome: "🥩 Carne",
          produtos: [
            {
              descricao: "Arroz, Feijão, Bife Acebolado",
              nome: "Bife Acebolado",
              preco: 10000,
            },
            {
              descricao: "Arroz, Feijão, Costela",
              nome: "Costela",
              preco: 10000,
            },
          ],
        },
        {
          nome: "🍜 Massas",
          produtos: [
            {
              descricao: " Macarrão, Molho de Tomate",
              nome: "Espaguete",
              preco: 10000,
            },
          ],
        },
      ],
    },
    {
      nome: "🍔 Lanche",
      subCategorias: [
        {
          nome: "🍟 Frito",
          produtos: [],
        },
      ],
    },
    {
      nome: "🍹 Bebida",
      subCategorias: [
        {
          nome: "🥤 Suco",
          produtos: [],
        },
      ],
    },
  ],
};

export default CatalogoComponent;
