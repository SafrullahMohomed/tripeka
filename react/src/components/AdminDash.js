import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import React from "react";
import { useEffect, useState } from "react";
import Chart from "chart.js";
import { totalUser} from "../services/UserService";
import { getTotalNumberofGroups} from "../services/GroupsService";
import { totalCars } from "../services/CarService";

import blog1 from "../assets/coverpage1.jpg";

const AdminDash = () => {
// to get card details

const [totalUsers, setTotalUsers] = useState(0);
const [totalGroups, setTotalGroups] = useState(0);
const [totalCarss, setTotalCarss] = useState(0);
const [totalBlogs, setTotalBlogs] = useState(0);

// total users
useEffect(() => {
    totalUser().then((res) => {
        setTotalUsers(res.data);
    });
}, [totalUsers]);


useEffect(() => {
  getTotalNumberofGroups().then((res) => {
        setTotalGroups(res.data);
    });
}, [totalGroups]);

// total cars
useEffect(() => {
    totalCars().then((res) => {
        setTotalCarss(res.data);
    });
}, [totalCarss]);


  // line chart
  useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#0B8CA5",
            borderColor: "#0B8CA5",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            backgroundColor: "#DFE0EB",
            borderColor: "#DFE0EB",
            data: [40, 68, 86, 74, 56, 60, 87],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "black",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);

    // var ctx2 = document.getElementById("bar-chart").getContext("2d");
    // window.myLine2 = new Chart(ctx2, config);
  }, []);

  // bar chart
  // chartjs
  useEffect(() => {
    var config = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#0B8CA5",
            borderColor: "#0B8CA5",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            backgroundColor: "#DFE0EB",
            borderColor: "#DFE0EB",
            data: [40, 68, 86, 74, 56, 60, 87],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "black",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    // var ctx = document.getElementById("line-chart").getContext("2d");
    // window.myLine = new Chart(ctx, config);

    var ctx2 = document.getElementById("bar-chart").getContext("2d");
    window.myLine2 = new Chart(ctx2, config);
  }, []);

  return (
    <section class="w-full h-screen text-gray-600 body-font pt-20 bg-gray-100">
      <div class="container px-5 py-1 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Number of Users</Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                {totalUsers}
              </Box>
              {/* <Box
                sx={{
                  color: "success.dark",
                  display: "inline",
                  fontWeight: "bold",
                  mx: 0.5,
                  fontSize: 14,
                }}
              >
                +18.77%
              </Box>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "inline",
                  fontSize: 14,
                }}
              > */}
                {/* vs. last week */}
              {/* </Box> */}
            </Box>
          </div>
          <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Number of Groups</Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                {totalGroups}
              </Box>
              {/* <Box
                sx={{
                  color: "success.dark",
                  display: "inline",
                  fontWeight: "bold",
                  mx: 0.5,
                  fontSize: 14,
                }}
              >
                +18.77%
              </Box> */}
              {/* <Box
                sx={{
                  color: "text.secondary",
                  display: "inline",
                  fontSize: 14,
                }}
              >
                vs. last week
              </Box> */}
            </Box>
          </div>
          <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Number of Blogs</Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                12
              </Box>
              {/* <Box
                sx={{
                  color: "success.dark",
                  display: "inline",
                  fontWeight: "bold",
                  mx: 0.5,
                  fontSize: 14,
                }}
              >
                +18.77%
              </Box>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "inline",
                  fontSize: 14,
                }}
              >
                vs. last week
              </Box> */}
            </Box>
          </div>
          <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Number of Cars</Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                {totalCarss}
              </Box>
              {/* <Box
                sx={{
                  color: "success.dark",
                  display: "inline",
                  fontWeight: "bold",
                  mx: 0.5,
                  fontSize: 14,
                }}
              >
                +18.77%
              </Box>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "inline",
                  fontSize: 14,
                }}
              >
                vs. last week
              </Box> */}
            </Box>
          </div>
          {/* <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Total Users
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    583
                  </Typography>                  
                </CardContent>                
              </Card>
            </div> */}
        </div>
      </div>

      <div class="container p-6 mx-auto">
        <div class="flex justify-center flex-wrap -mx-4 -mb-10 text-center">
          <div class="sm:w-1/2 mb-10 p-3">
            <div className="w-full">
              <Card>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <div className="relative h-96">
                      <canvas id="line-chart"></canvas>
                    </div>
                  </Typography>
                </CardContent>
                <div className="p-3">{/* Insert Chart Here! */}</div>
              </Card>
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 p-3">
            <div className="w-full">
              <Card>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <div className="relative h-96">
                      <canvas id="bar-chart"></canvas>
                    </div>
                  </Typography>
                </CardContent>
                <div className="p-3">{/* Insert Chart Here! */}</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDash;
