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
import MenuComponent from "../components/menu";
import EmojiTableCell from "../components/emojiTableCell.component";
import timeSince from "../utils/theme/timeSince";
import PageComponent from "../components/page.component";

function createData(categoria, concluido, valor, inicio, fim, fechamento) {
  return { categoria, concluido, valor, inicio, fim, fechamento };
}

const rows = [
  createData(
    "💰 Venda",
    "✔",
    600,
    timeSince(new Date(2022, 1, 25, 21, 30)),
    new Date(0, 0, 0, 0, 3).toLocaleTimeString(),
    "👳‍♂️ Vilson"
  ),
  createData(
    "🛒 Compra",
    "❌",
    200,
    timeSince(new Date(2022, 1, 25, 21, 43, 15)),
    "00:07:34",
    "👨 Geremias"
  ),
];

function PedidosPage() {
  return (
    <MenuComponent>
      <PageComponent title="Pedidos" icon="📋">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 300 }}
            size="small"
            children
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <EmojiTableCell emoji="🧾" title="Processo" />
                <EmojiTableCell emoji="📦" title="Etapa" />
                <EmojiTableCell emoji="💲" title="Valor" />
                <EmojiTableCell align="right" emoji="📅" title="Aberto" />
                <EmojiTableCell align="right" emoji="⏳" title="Tempo" />
                <EmojiTableCell
                  align="right"
                  emoji="👨‍💼"
                  title="Funcionário"
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {(new Array(20)).fill(0, 1, 20).map((i) => rows.map((row) => (
                <TableRow
                  key={`${i}${row.categoria}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.categoria}</TableCell>
                  <TableCell>{row.concluido}</TableCell>
                  <TableCell>{row.valor}</TableCell>
                  <TableCell align="right">{row.inicio}</TableCell>
                  <TableCell align="right">{row.fim}</TableCell>
                  <TableCell align="right">{row.fechamento}</TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageComponent>
    </MenuComponent>
  );
}

export default PedidosPage;
