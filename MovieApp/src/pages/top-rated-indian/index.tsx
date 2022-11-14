import { Button, Col, Divider, Row, Typography } from "antd";
import axios from "axios";
import { truncate } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutContainer from "../../components/containers/LayoutContainer";

function TopRatedIndian() {
  const navigate = useNavigate();
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const topRatedIndiaMoviesHandler = () => {
    axios
      .get("http://localhost:3001/top-rated-india")
      .then((res) => setUpcomingMovies(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    topRatedIndiaMoviesHandler();
  }, []);
  return (
    <LayoutContainer>
      <div>
        <h1>Top Rated Indian Movies</h1>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {upcomingMovies.map((movie: any) => {
              return (
                <Col
                  key={movie.id}
                  className="gutter-row"
                  span={6}
                  style={{ marginBottom: "30px" }}
                >
                  <div
                    style={{ border: "1px solid #eee", textAlign: "center" }}
                  >
                    <div
                      style={{ position: "relative", width: 300, height: 400 }}
                    >
                      <img
                        width="100%"
                        height="100%"
                        alt={`${movie.title} Poster`}
                        src={movie?.posterurl}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src =
                            "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg";
                        }}
                      />

                      <span
                        style={{
                          position: "absolute",
                          right: 10,
                          top: 10,
                          borderRadius: "1000px",
                          backgroundColor: "#ffff",
                          width: "60px",
                        }}
                      >
                        <Typography.Text>{movie.contentRating}</Typography.Text>
                      </span>
                    </div>

                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "start",
                        }}
                      >
                        <Typography.Title
                          level={5}
                          style={{ textAlign: "start" }}
                        >
                          {movie.title}
                        </Typography.Title>

                        <span>
                          {movie?.duration === ""
                            ? "Not Available"
                            : movie.duration}
                        </span>
                      </div>

                      <span
                        style={{
                          borderRadius: "1000px",
                          backgroundColor: "#d6d6d6",
                          width: "60px",
                        }}
                      >
                        <Typography.Text>{movie.year}</Typography.Text>
                      </span>
                    </span>
                  </div>

                  <Divider style={{ margin: "0px 0px 10px 0px" }} />

                  <Typography.Text>
                    {truncate(movie.storyline, {
                      length: 80,
                    })}
                  </Typography.Text>

                  <Divider style={{ margin: "10px 0px 10px 0px" }} />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>{movie.releaseDate}</Typography.Text>
                    <Button
                      shape="round"
                      onClick={() =>
                        navigate("/movies/adf", {
                          state: {
                            movie,
                          },
                        })
                      }
                    >
                      View
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </LayoutContainer>
  );
}

export default TopRatedIndian;
