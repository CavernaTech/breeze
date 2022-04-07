import { useRecoilValue } from "recoil";
import {
  clientesProviderData,
  clienteProviderByCodigo,
  clientesProviderTitle,
} from "../provider/config";

import DataRepository from "../repositories/config.repository";

const ref = "clientes/";

const ClienteController = {
  addCliente: (data) => DataRepository.add(ref, data),
  updateCliente: (codigo, data) => DataRepository.update(ref + codigo, data),
  useClientes: () => useRecoilValue(clientesProviderData),
  useClienteByCodigo: (codigo) =>
    useRecoilValue(clienteProviderByCodigo(codigo)),
  useClientesTitle: () => useRecoilValue(clientesProviderTitle),
};

export default ClienteController;
