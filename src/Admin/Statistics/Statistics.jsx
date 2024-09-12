import useProduct from "../../hooks/useProduct";
import useUsers from "../../hooks/useUsers";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle
} from "recharts";

const Statistics = () => {
    const [totalusers] = useUsers()
    const [product] = useProduct()
    const books1 = product.filter(item=> item.category === 'Books') 
    
    const electronics1 = product.filter(item=> item.category === 'Electronics') 
    const clothing1 = product.filter(item=> item.category === 'Clothing') 
    const kitchen1 = product.filter(item=> item.category === 'Kitchen') 
    const beauty1 = product.filter(item=> item.category === 'Beauty') 
    const Electronics = electronics1.length
    const Books = books1.length
    const Beauty = beauty1.length
    const Clothing = clothing1.length
    const Kitchen = kitchen1.length

    const data = [
      {
        name: 'Product',
        Electronics : `${Electronics}`,
        Book: `${Books}`,
        Beauty : `${Beauty}`,
        Clothing: `${Clothing}`,
        Kitchen : `${Kitchen}`,


      }
    ];
    
      
     
    
 

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center text-center shadow-xl mt-4">
  
  <div className="w-[90%] border p-14">
    <div className="stat-title">Total User</div>
    <div className="stat-value">{totalusers.length}</div>
   
  </div>
  
  <div className="w-[90%] border p-14">
    <div className="stat-title">Total Product</div>
    <div className="stat-value">{product.length}</div>
  </div>
  
  <div className="w-[90%] border p-14">
    <div className="stat-title">Total Oder</div>
    <div className="stat-value">1,200</div>
  </div>
  
            </div>
           
  </div>

    );
};

export default Statistics;