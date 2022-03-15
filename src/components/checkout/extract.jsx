import { Remove } from "@mui/icons-material";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
} from "@mui/material";

function ExtractTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Detalhes
            </TableCell>
            <TableCell align="right">Preço</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Rem.</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Qtd.</TableCell>
            <TableCell align="right">Uni.</TableCell>
            <TableCell align="right">Tot.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <IconButton color="error">
                <Remove />
              </IconButton>
            </TableCell>
            <TableCell>Coisa</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">Un</TableCell>
            <TableCell align="right">547</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Descontos</TableCell>
            <TableCell align="right">123</TableCell>
            <TableCell align="right">345</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography fontWeight="bold">Total</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="bold">54745</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExtractTable;
