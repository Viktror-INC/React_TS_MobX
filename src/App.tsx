import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "./index.scss";
import Exchange from './components/Exchange';
import axios from 'axios';
import { CoinType } from './types'
import { Table } from './components/Table';

function App() {
  const [cryptoData, setCryptoData] = React.useState<CoinType[]>([]);
  React.useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data }) => {
      const coinsData: CoinType[] = data.Data.map((coin: any) => {
        const obj: CoinType = {
          name: coin.CoinInfo.Name,
          fullname: coin.CoinInfo.FullName,
          imgurl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(3),
          volume24H: coin.RAW.USD.VOLUME24HOUR.toFixed(1)
        }
        return obj;
      });
      console.log(coinsData);
      setCryptoData(coinsData);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container maxWidth="xl" className="container">
        <Grid className="column_wrap" container spacing={3}>
          <Table cryptoData ={cryptoData}/>
          <Exchange />
        </Grid>
      </Container>
    </div >
  );
}

export default App;
