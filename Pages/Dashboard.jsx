import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 50px;
`;

const DashboardCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const DashboardCardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const DashboardCardSubtitle = styled.p`
  font-size: 14px;
  color: #777;
`;

const Dashboard = () => {
  return (
    <Container>
      <h2>Admin Dashboard</h2>
      <h3>Insights and Statistics</h3>
      {/* Display insights and statistics here */}
      <h3>Most Interacted Blog Posts</h3>
      <DashboardCard>
        <div>
          <DashboardCardTitle>Blog Post Title 1</DashboardCardTitle>
          <DashboardCardSubtitle>Author: John Doe</DashboardCardSubtitle>
        </div>
        <Link to="/post/1">View Details</Link>
      </DashboardCard>
      <DashboardCard>
        <div>
          <DashboardCardTitle>Blog Post Title 2</DashboardCardTitle>
          <DashboardCardSubtitle>Author: Jane Smith</DashboardCardSubtitle>
        </div>
        <Link to="/post/2">View Details</Link>
      </DashboardCard>
    </Container>
  );
};

export default Dashboard;
