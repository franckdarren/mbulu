"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Charger ApexCharts uniquement côté client
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = ({ fang, myene, punu }) => {

    let pfang = fang * 100 / (fang + myene + punu)
    let pmyene = myene * 100 / (fang + myene + punu)
    let ppunu = punu * 100 / (fang + myene + punu)

    // Options du graphique
    const chartOptions = {
        series: [pfang, pmyene, ppunu], // Données du graphique
        colors: ["#1A56DB", "#FDBA8C", "#22C55E"],
        chart: {
            height: 320,
            type: "pie",
        },
        stroke: {
            colors: ["#FFFFFF"], // Couleur de la bordure (white)
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -25,
                    formatter: function (val) {
                        return val !== undefined && val !== null ? val.toString() : ''; // Vérification pour éviter l'erreur
                    },
                },
            },
        },
        labels: ["Fang", "Myene", "Punu"],
        dataLabels: {
            enabled: true,
            style: {
                fontFamily: "Inter, sans-serif",
            },
        },
        legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
        },
    };

    return (
        <div className='md:w-[40%] pt-[20px]'>
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="pie"
                height={300}
            />
        </div>
    );
};

export default PieChart;
