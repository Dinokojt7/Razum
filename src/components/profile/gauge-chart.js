import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import Fuckups from './fuckups';

export default function Gauge() {
    const [chartData, setChartData] = useState({});

    const gaugeNeedle = {
        afterDatasetDaraw(chart, data, args, options) {
            const {ctx, config, chartArea: {top, bottom, left, right, width, height} } = chart;
        
                ctx.save();
                const needleValue = data.datasets[0].needleValue;
                const dataTotal = data.datasets[0].data.reduce((a, b) => + b, 0);
                const angle = 3.14 + (1 / dataTotal * needleValue * 3.14)

                ctx.beginPath();
                ctx.arc(10, 10, 5, 5, 10)
                ctx.fill();
                ctx.restore();
                
        }
    }

    const chart = () => {
        setChartData({            
            datasets: [
                {
                    data: [13, 35,50],
                    backgroundColor: [
                        'rgba(81, 45, 168, 100)',
                        'rgba(81, 45, 168, 100)',
                        'rgba(81, 45, 168, 100)'
                    ],
                    needleValue: 30,
                    borderwidth: 1,
                    cutout: '85%',
                    circumference: 180,
                    rotation: 270,
                    borderRadius: 5,                                    
                }]
            }           

        )
    }

    useEffect(() => {
        chart()
        
    }, [])
    
    return (
        <div className="flex justify-end py-3">            
            <div>
                <p className="font-bold flex justify-center text-2xl">Confidence Fixer</p>
                <p className="font-medium flex justify-center text-base">0/50 Fuck Ups to become Ninja</p>
                <div className="h-40">
                    <Doughnut 
                        data={chartData}
                        plugins= {gaugeNeedle}
                        options={
                            {
                                maintainAspectRatio: false
                            }
                        }
                    /> 
                </div>               
                <p className="font-medium flex text-sm tracking-wide justify-center">Your current momentum is</p>
                <p className="font-medium flex text-sm tracking-wide justify-center">2 Fuckups a week</p>
            </div>
        </div>
    )
}