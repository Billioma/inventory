import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const BarChart = () => {
  const series = [
    {
      name: "Purchase",
      data: [
        55000, 57000, 53000, 38000, 43000, 29000, 54000, 45000, 45000, 38000,
      ],
    },
    {
      name: "Series",
      data: [
        49000, 48000, 52000, 43000, 44000, 41000, 49000, 41000, 42000, 42000,
      ],
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "May",
        "Jun",
      ],
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
      colors: ["transaprent"],
      width: 5,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        columnWidth: "54px",
        barHeight: "100%",
      },
    },
    colors: ["#817AF3", "#46A46C"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        gradientToColors: ["#79D0F1", "#57DA65"],
        type: "vertical",
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 60],
      },
    },

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            height: "169%",
          },
          plotOptions: {
            bar: {
              columnWidth: "54px",
            },
          },
        },
      },
      {
        breakpoint: 468,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "90px",
            },
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
        type="bar"
        height="180%"
      />
    </Box>
  );
};
