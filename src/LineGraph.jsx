import React, { useState, useEffect } from "react";

import { ResponsiveLine } from "@nivo/line";

import CircleIcon from "@mui/icons-material/Circle";

const LineGraph = () => {
  const [graphData, setGraphData] = useState(null);
  const [datafetched, setDataFetched] = useState(false);

  const createMockData = () => {
    let data = [];
    let value = 50;
    for (let i = 0; i < 100; i++) {
      const date = new Date();
      date.setDate(i + 1);
      const formattedDate = date.toLocaleDateString("en-US");
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({ x: `${formattedDate}`, y: value });
    }
    setGraphData([{ id: "graph", color: "hsl(209, 70%, 50%)", data: data }]);
  };

  useEffect(() => {
    createMockData();
    setDataFetched(true);
  }, []);

  return (
    <div className="lineGraph h-[200px]">
      {datafetched && (
        <ResponsiveLine
          data={graphData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: [],
            orient: "bottom",
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickValues: [],
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          colors={"green"}
          lineWidth={1}
          enablePoints={false}
          pointSize={3}
          pointColor={{ theme: "grid.line.stroke" }}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          crosshairType="cross"
          useMesh={true}
          legends={[]}
          tooltipFormat="ll"
          tooltip={({ point }) => (
            <div
              style={{
                background: "black",
                padding: "10px",
                fontSize: "10px",
              }}
            >
              <p className="font-mono text-sm">
                {" "}
                <CircleIcon
                  style={{ fontSize: "14px", paddingBottom: "6px" }}
                />
                {point.data.xFormatted},{point.data.yFormatted}
              </p>
            </div>
          )}
        />
      )}
    </div>
  );
};

export default LineGraph;
