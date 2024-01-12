import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Barchart = () => {
    const data = {
        labels: ['20','','25','','30','','35','','40','','60','','65'],
        datasets: [
            { 
                label: 'Employer',
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13],
                backgroundColor: 'purple'
            },
            { 
                label: 'Employee',
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13],
                backgroundColor: 'blue'
            },
            { 
                label: 'Total Interest',
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13],
                backgroundColor: 'skyblue'
            }

        ]
    }

    const options = {
        scales : {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }

    return (
        <>
            <Bar
                data={data}
                options={options}
            />
        </>
    )

    }
export default Barchart