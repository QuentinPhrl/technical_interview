import React, { useState, memo, useEffect } from 'react';
import { Button, Box } from '@mui/material';

type SubcounterProps = {
    text: string;
    getData: () => number;
}

const Subcounter = (props: SubcounterProps) => {
    const { text, getData } = props;
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Very time-consuming and resource-intensive processing 

        console.log('Subcounter mounted');
        return () => {
            console.log('Subcounter unmounted');
        };
    })

    return (
        <Box sx={{ width: '500px', height: '300px', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Sub count {count}</h1>
            <h2>Random {text}</h2>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
                Increment
            </Button>
        </Box>
    );
};

export default memo(Subcounter);