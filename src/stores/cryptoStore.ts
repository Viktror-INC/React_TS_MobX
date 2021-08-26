import { observable, computed, action } from "mobx";
import { CoinType } from "../types";

class CryptoStore {
    @observable public coins: CoinType[] = [];

}

export default CryptoStore;