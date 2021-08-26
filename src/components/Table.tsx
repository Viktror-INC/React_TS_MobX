import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CoinType } from '../types';

interface TypeTable {
    cryptoData: CoinType[];
}

export const Table = ({cryptoData} : TypeTable) => {
    return (
        <Grid className= "table_order" item xs={7}>
            <Paper>
              <div className="left_table">
                <ul className="crypto_list">
                  <li className="crypto_title">
                    <span></span>
                    <span>Name</span>
                    <span>Short Name</span>
                    <span>Price</span>
                    <span>Volume 24 Hour</span>
                  </li>
                  {!cryptoData.length ? 
                  "Loading..." 
                  : 
                  cryptoData.map((coin) => {
                    return (
                      <li key={coin.name}>
                        <img src={coin.imgurl} alt={coin.name} />
                        <span>{coin.fullname}</span>
                        <span>{coin.name}</span>
                        <span>{coin.price}$</span>
                        <span>{coin.volume24H}</span>
                      </li>
                    )
                  }
                  )}
                </ul>
              </div>
            </Paper>
          </Grid>
    )
}
