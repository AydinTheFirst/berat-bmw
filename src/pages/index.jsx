import { Card } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const { data: posts } = useFetch("/posts");

  if (!posts) return <p>Loading... bekle amk</p>;

  return (
    <div className="container my-5">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {posts.map((post, i) => (
          <Card key={i}>
            <Card.Header>
              <h5>{post.title}</h5>
            </Card.Header>
            <Card.Body>{post.body}</Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
