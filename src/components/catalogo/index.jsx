import { Paper, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

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
          {categorias.map((item, index) => (
            <Tab label={item.nome} id={`tab-${index}`} key={index} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        ccc
      </TabPanel>
      <TabPanel value={tab} index={1}>
        bbb
      </TabPanel>
      <TabPanel value={tab} index={2}>
        aaa
      </TabPanel>
    </Paper>
  );
}

CatalogoComponent.defaultProps = {
  categorias: [
    {
      nome: "🍝 Prato Feito",
    },
    {
      nome: "🍔 Lanche",
    },
    {
      nome: "🍹 Bebida",
    },
  ],
};

export default CatalogoComponent;
