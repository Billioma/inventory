import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const AreaChart = () => {
  const series = [
    {
      name: "Ordered",
      data: [3900, 1800, 2700, 2100, 2500],
    },
    {
      name: "Delivered",
      data: [3100, 2100, 3700, 3600, 3500],
    },
  ];

  const options = {
    maintainAspectRatio: false,
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      labels: {
        show: true,
        style: {
          colors: "#858D9D",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
      theme: "dark",
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#667085",
          fontSize: "12px",
        },
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      borderColor: "#D0D3D9",
    },
    legend: {
      show: true,
      markers: {
        radius: 10,
      },
    },
    stroke: {
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        columnWidth: "54px",
        barHeight: "100%",
      },
    },
    colors: ["#DBA362", "#B6D3FA"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [],
      },
    },

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            height: "180%",
          },
        },
      },
    ],
  };

  return (
    <Box>
      <ReactApexChart
        options={options as any}
        series={series}
        type="area"
        height="190%"
      />
    </Box>
  );
};
