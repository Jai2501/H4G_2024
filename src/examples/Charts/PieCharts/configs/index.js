function configs(labels, datasets) {
    return {
      data: {
        labels,
        datasets: [
          {
            label: datasets.label,
            backgroundColor: datasets.backgroundColor || "rgba(255, 255, 255, 0.8)",
            data: datasets.data,
            borderWidth: 2,
            borderColor: "#ffffff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Set to false to hide the legend
          },
        },
      },
    };
  }
  
  export default configs;
  