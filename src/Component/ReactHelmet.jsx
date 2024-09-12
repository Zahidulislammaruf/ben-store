import {Helmet} from "react-helmet";

const ReactHelmet = ({title}) => {
    return (
        <div>
           <Helmet>
                
                <title>BEN | {title}</title>
                
            </Helmet> 
        </div>
    );
};

export default ReactHelmet;