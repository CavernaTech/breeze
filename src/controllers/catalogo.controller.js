import { useRecoilValue } from "recoil";
import {
  catalogosProviderData,
  catalogoProviderByCodigo,
} from "../provider/catalogos.provider";

import DataRepository from "../repositories/data.repository";

const ref = "catalogos/";

const CatalogoController = {
  addCatalogo: (data) => DataRepository.add(ref, data),
  updateCatalogo: (codigo, data) => DataRepository.update(ref + codigo, data),
  useCatalogos: () => useRecoilValue(catalogosProviderData),
  useCatalogoByCodigo: (codigo) =>
    useRecoilValue(catalogoProviderByCodigo(codigo)),
};

export default CatalogoController;
