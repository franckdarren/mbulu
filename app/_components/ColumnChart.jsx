"use client";

import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ fang, myene, punu }) => {
    // Données des contributions par langue
    const dataByLanguage = [
        { language: "Fang", contributions: fang, color: "#1A56DB" },
        { language: "Myene", contributions: myene, color: "#FDBA8C" },
        { language: "Punu", contributions: punu, color: "#22C55E" }
    ];

    // Configuration du graphique avec les données par langue
    const options = {
        series: [
            {
                name: "Contributions",
                data: dataByLanguage.map(item => ({
                    x: item.language,
                    y: item.contributions,
                    fillColor: item.color // Couleur personnalisée pour chaque point
                })),
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
                distributed: true, // Active la distribution des couleurs pour chaque barre
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
        fill: {
            opacity: 1
        },
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
