import Movie from "./Movies";
import Search from "./Search";

const Home = () => {
  console.log("home rerender");
  return (
    <>
      <Search />
      <Movie />
    </>
  );
};

export default Home;
