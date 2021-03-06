import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EmojiTableCell from "../components/emojiTableCell.component";
import timeSince from "../utils/theme/timeSince";
import PageComponent from "../components/page.component";
import MenuContainer from "../containers/menu.container";

function createData(categoria, concluido, valor, inicio, fim, fechamento) {
  return { categoria, concluido, valor, inicio, fim, fechamento };
}

const rows = [
  createData(
    "π° - Venda",
    "β - Concluido",
    600,
    timeSince(new Date(2022, 1, 25, 21, 30)),
    "00:10:34",
    "Vilson"
  ),
  createData(
    "π - Compra",
    "β - Aberto",
    200,
    timeSince(new Date(2022, 1, 25, 21, 43, 15)),
    "00:07:34",
    "Geremias"
  ),
];

function PedidosPage() {
  return (
    <MenuContainer>
      <PageComponent title="Pedidos" icon="π">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 300 }}
            size="small"
            children
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <EmojiTableCell>{"π§Ύ - Processo"}</EmojiTableCell>
                <EmojiTableCell>{"π¦ - Etapa"}</EmojiTableCell>
                <EmojiTableCell>{"π² - Valor"}</EmojiTableCell>
                <EmojiTableCell align="right">{"π - Aberto"}</EmojiTableCell>
                <EmojiTableCell align="right">{"β³ - Tempo"}</EmojiTableCell>
                <EmojiTableCell align="right">{"π¨βπΌ - FuncionΓ‘rio"}</EmojiTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(new Array(20)).fill(0, 1, 20).map((i) => rows.map((row) => (
                <TableRow
                  key={`${i}${row.categoria}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <EmojiTableCell variant="p">{row.categoria}</EmojiTableCell>
                  <EmojiTableCell variant="p">{row.concluido}</EmojiTableCell>
                  <TableCell>{row.valor}</TableCell>
                  <TableCell align="right">{row.inicio}</TableCell>
                  <TableCell align="right">{row.fim}</TableCell>
                  <EmojiTableCell align="right" variant="p">{row.fechamento}</EmojiTableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageComponent>
    </MenuContainer>
  );
}

export default PedidosPage;
