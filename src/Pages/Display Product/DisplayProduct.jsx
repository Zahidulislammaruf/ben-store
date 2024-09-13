import ItemCard from "../../Component/ItemCard";
import SectionTitle from "../../Component/SectionTitle";
import useProduct from "../../hooks/useProduct";


const DisplayProduct = () => {
    
    const [product] = useProduct()
    const populer = product.filter(item=> item.view === 'popular')
    const tranding = product.filter(item=> item.view === 'tranding')
    const newComming = product.filter(item=> item.view === 'new')
    

    return (
        <div >

          <SectionTitle heading={'New Arrivals' } subHeading={'Check it Out'}></SectionTitle> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2  md:gap-4">
            {
                newComming.map(item=> <ItemCard key={item._id} item={item} ></ItemCard>)
            }
          </div>

          <SectionTitle heading={'Trading Now' } subHeading={'Check it Out'}></SectionTitle>     
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
            {
                tranding.map(item=> <ItemCard key={item._id} item={item} ></ItemCard>)
            }
          </div>

          <SectionTitle heading={'Populer Now' } subHeading={'Check it Out'}></SectionTitle>     
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
            {
                populer.map(item=> <ItemCard key={item._id} item={item} ></ItemCard>)
            }
          </div>
          
        </div>
    );
};

export default DisplayProduct;