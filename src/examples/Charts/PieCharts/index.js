import { useMemo } from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import configs from "examples/Charts/PieCharts/configs"; // Assuming you have configurations for PieChart

function ReportsPieChart({ color, title, description, date, chart, xAxisTitle, yAxisTitle }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  // Clone the options object before modifying it
  const modifiedOptions = { ...options };

  // Add axis titles to the options object
  modifiedOptions.plugins.legend = {
    display: true, // Set to false to hide the legend
  };

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <Doughnut data={data} options={modifiedOptions} />
            </MDBox>
          ),
          [color, data, modifiedOptions]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {date}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ReportsPieChart.defaultProps = {
  color: "dark",
  description: "",
};

ReportsPieChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark","#FFFFFF"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
  xAxisTitle: PropTypes.string,
  yAxisTitle: PropTypes.string,
};

export default ReportsPieChart;
