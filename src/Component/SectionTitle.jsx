
const SectionTitle = ({heading,subHeading}) => {
    return (
         <div className="mt-6 mb-6"> 
            <div className="text-center mt-4 bg-slate-300 p-3">
            <h2 className=" font-mono">---{subHeading}---</h2>
            <h2 className="text-4xl font-serif">{heading}
</h2>

        </div>
        <div className="divider"></div>

         </div>
    );
};

export default SectionTitle;