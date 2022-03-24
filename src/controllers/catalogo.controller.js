import { useRecoilValue } from "recoil";
import {
  catalogosProviderData,
  catalogoProviderByCodigo,
} from "../provider/config";

import DataRepository from "../repositories/config.repository";

const ref = "catalogos/";

const CatalogoController = {
  addCatalogo: (data) => DataRepository.add(ref, data),
  updateCatalogo: (codigo, data) => DataRepository.update(ref + codigo, data),
  useCatalogos: () => useRecoilValue(catalogosProviderData),
  useCatalogoByCodigo: (codigo) =>
    useRecoilValue(catalogoProviderByCodigo(codigo)),
};

export default CatalogoController;
