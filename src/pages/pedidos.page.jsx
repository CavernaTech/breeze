import React from 'react';
import { 
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import MenuComponent from '../components/menu';

function createData(categoria, concluido, valor, inicio, fim, fechamento) {
  return { categoria, concluido, valor, inicio, fim, fechamento };
}

const rows = [
  createData('💰 Venda', false, 600, (new Date()).toLocaleString(), (new Date()).toLocaleString(), null),
];

function PedidosPage() {
  return (
    <MenuComponent>
      <Container>
        <Paper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Concluida</TableCell>
                  <TableCell>Valor</TableCell>
                  <TableCell align="right">Aberto</TableCell>
                  <TableCell align="right">Tempo</TableCell>
                  <TableCell align="right">Funcionário</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.categoria}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{row.categoria}</TableCell>
                    <TableCell>{row.concluido}</TableCell>
                    <TableCell>{row.valor}</TableCell>
                    <TableCell align="right">{row.inicio}</TableCell>
                    <TableCell align="right">{row.fim}</TableCell>
                    <TableCell align="right">{row.fechamento}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </MenuComponent>
  );
}

export default PedidosPage;
