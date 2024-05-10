import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";
import { CryptoPrice, Cryptocurrency, Pair } from "./types";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  result: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {
      IMAGEURL: "",
      PRICE: "",
      HIGHDAY: "",
      LOWDAY: "",
      CHANGEPCT24HOUR: "",
      LASTUPDATE: "",
    },
    loading: false,
    fetchCryptos: async () => {
      // las funciones que tengamos en la store de zustand son acciones
      // llamado a las monedas mas cotizadas del mercado
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies: cryptocurrencies,
      }));
    },
    fetchData: async (pair) => {
      // llamado a la informacion a mostrar
      set(() => ({
        loading: true,
      }));
      const result = await fetchCurrentCryptoPrice(pair);
      set(() => ({
        result: result,
        loading: false,
      }));
    },
  }))
);
