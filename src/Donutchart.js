import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
    );
const Donut = () => {
    const data = {
        labels: ['yes','no'],
        datasets: [{
            label: 'Poll',
            data:[78,12],
            backgroundColor: ['green','cyan'],
            borderColor:['black','black']
        }]
    }

    const options = {

    }
    return (
        <div>
            <Doughnut
                data = {data}
                options = {options}
            />
        </div>
    )
};

export default Donut;     