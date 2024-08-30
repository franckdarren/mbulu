"use client"; // Indique que le composant doit être exécuté côté client

import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ fang, myene, punu }) => {
    // Données des contributions par langue
    const dataByLanguage = [
        { language: "Fang", contributions: fang },
        { language: "Myene", contributions: myene },
        { language: "Punu", contributions: punu }
    ];

    // Configuration du graphique avec les données par langue
    const options = {
        colors: ["#1A56DB", "#FDBA8C", "#22C55E"], // Couleurs personnalisées
        series: [
            {
                name: "Contributions",
                data: dataByLanguage.map(item => ({ x: item.language, y: item.contributions })), // Données pour chaque langue
            }
        ],
        chart: {
            type: "bar",
            height: "320px",
            fontFamily: "Inter, sans-serif",
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadiusApplication: "end",
                borderRadius: 8,
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            style: { fontFamily: "Inter, sans-serif" },
        },
        states: {
            hover: {
                filter: {
                    type: "darken",
                    value: 1,
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: { left: 2, right: 2, top: -14 },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        xaxis: {
            floating: false,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { show: false },
        fill: { opacity: 1 },
    };

    return (
        <div className='md:w-[50%]'>
            <Chart
                options={options}
                series={options.series}
                type="bar"
                height={320}
            />
        </div>
    );
};

export default ColumnChart;
