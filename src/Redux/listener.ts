import { decrypt } from "@/Classes/SecureAsyncStorage";
import { store } from "./store";
import { counterSlice } from "./counter/slice";

const cleanData = (data: string) => {
    let cleanedData = data.replace(/\\/g, "");
    cleanedData = cleanedData.substring(1, cleanedData.length - 1);
    cleanedData = cleanedData.replace(/"{/g, "{").replace(/}"/g, "}");

    return cleanedData;
};

const listener = () => {
    window.addEventListener("storage", async (e) => {
        try {
            const newData = e.newValue;
            const oldData = e.oldValue;
            const key = e.key?.split(":")[1];
            const decryptedData = decrypt(newData as string);
            const decryptedOldData = decrypt(oldData as string);
            const cleanedDataNew = cleanData(decryptedData);
            const cleanedDataOld = cleanData(decryptedOldData);
            const parsedDataNew = JSON.parse(cleanedDataNew);
            const parsedDataOld = JSON.parse(cleanedDataOld);

            const keysNew = Object.keys(parsedDataNew).filter(
                (key) => key !== "_persist"
            );
            const differenceKeys = keysNew.filter(
                (key) => parsedDataNew[key] !== parsedDataOld[key]
            );
            switch (key) {
                case "counter":
                    differenceKeys.forEach((key) => {
                        switch (key) {
                            case "value":
                                const newValue = parseInt(parsedDataNew[key]);
                                store.dispatch(
                                    counterSlice.actions.update1(newValue)
                                );
                                break;
                            case "value1":
                                const newValue1 = parseInt(parsedDataNew[key]);
                                store.dispatch(
                                    counterSlice.actions.update2(newValue1)
                                );
                                break;
                            default:
                                break;
                        }
                    });
                    break;
                default:
                    break;
            }
        } catch (error) {}
    });
}

export default listener;