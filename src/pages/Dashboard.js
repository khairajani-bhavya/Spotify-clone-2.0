
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 800 },
  { name: "Apr", users: 1000 },
  { name: "May", users: 900 },
  { name: "Jun", users: 1200 },
];

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} marginBottom={4}>
        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">Users</Typography>
              <Typography variant="h4">1,200</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">Sales</Typography>
              <Typography variant="h4">$35,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">Visitors</Typography>
              <Typography variant="h4">8,000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Line Chart */}
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monthly Active Users
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="users" stroke="#00bcd4" strokeWidth={2} />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
