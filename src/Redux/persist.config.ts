import storage from "@/Classes/SecureAsyncStorage";
// import storage from "redux-persist/lib/storage";
import { PersistConfig } from 'redux-persist';
import { CounterState } from "./counter/counter.types";

type PersistConfigsType = {
  counter: PersistConfig<CounterState>,
}

const PersistConfigs: PersistConfigsType = {
  counter: {
    key: "counter",
    storage: storage,
    whitelist: ["value", "value1"],
  },

}

export default PersistConfigs;
