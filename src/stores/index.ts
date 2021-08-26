import CryptoStore from "./cryptoStore";
import ConverterStore from './converterStore';

const stores = {
    cryptoStore: new CryptoStore(),
    converterStore: new ConverterStore(),
}

export default stores;