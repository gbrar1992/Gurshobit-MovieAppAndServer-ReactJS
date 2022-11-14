import { Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              key: "upcomingMovie",
              label: `Upcoming Movies`,
              onClick: () => navigate("/"),
            },
            {
              key: "topRatedindia",
              label: `Top Rated India`,
              onClick: () => navigate("/movies/top-rated-india"),
            },
            {
              key: "topRatedMovie",
              label: `Top Rated Movies`,
              onClick: () => navigate("/movies/top-rated-movies"),
            },
            {
              key: "moviesInTheaters",
              label: ` Movies in theaters`,
              onClick: () => navigate("/movies/movies-in-theaters"),
            },
          ]}
        />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Gurshobit Brar</Footer>
    </Layout>
  );
};

export default LayoutContainer;
