import ReactHelmet from "../../Component/ReactHelmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import DisplayProduct from "../Display Product/DisplayProduct";

const Home = () => {
    return (
        <div>
            <ReactHelmet title={"Home"} ></ReactHelmet>
            <Banner></Banner>
            <Category></Category>
            <DisplayProduct></DisplayProduct>
            
        </div>
    );
};

export default Home;