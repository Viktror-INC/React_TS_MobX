import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Exchange() {
    const [count1, setCount1] = React.useState<string>("");
    const [count2, setCount2] = React.useState<string>("");
    return (
        <Grid className= "table_order" item xs={5}>
            <Paper className="paper_wrap">
                <div className="currency">
                    <div className="input_wrap">
                        <input type="number" placeholder="Count" id="curren"  value={count1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount1(e.target.value)} />
                        <label htmlFor="curren" className={count1 ==="" ?"count":"count count_active "}>
                            Count
                        </label>
                    </div>
                    <select className="bgc_rotated">
                        <option value="" disabled selected>Currency</option>
                        <option>Пункт 2</option>
                    </select>
                </div>
                <div className="currency">
                    <div className="input_wrap">
                        <input type="number" placeholder="Count" id="curren" value={count2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount2(e.target.value)} />
                        <label htmlFor="curren" className={count2 ==="" ?"count":"count count_active "}>
                            Count
                        </label>
                    </div>
                    <select className="bgc_rotated">
                        <option value="" disabled selected>Currency</option>
                        <option>Пункт 2</option>
                    </select>
                </div>
            </Paper>
        </Grid>
    )
}
