import { Box, Button } from "@mui/material";
import container from "./Dashboard.Container";

interface DashboardProps {
  auth: {
    currentUser: {
      firstName: string;
      lastName: string;
      email: string;
      address: string;
      isEmailVerified: boolean;
    };
  };
  onSignOutStart: (callback: () => void) => void;
}

const Dashboard = ({
  auth: { currentUser },
  onSignOutStart,
}: DashboardProps) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>
        Hi {currentUser?.firstName} {currentUser?.lastName}!
      </p>
      <p>You have been logged in!</p>
      <p>Email : {currentUser?.email}</p>
      <p>Address : {currentUser?.address}</p>
      {currentUser?.isEmailVerified ? (
        <p>You are an verified User!</p>
      ) : (
        <p>You are not verified! Please check email</p>
      )}
      <Button
        variant="contained"
        sx={{ mt: "13px" }}
        onClick={() => {
          onSignOutStart(() => {
            console.log("Sign out successful");
          });
        }}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default container(Dashboard);
