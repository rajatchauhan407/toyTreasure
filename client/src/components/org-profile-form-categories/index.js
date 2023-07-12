import "./index.scss";
import {useState,useEffect} from "react";
import {BiDownArrowAlt} from "react-icons/bi";
export default function OrgProfileCategories({onGetCategories}){
    const [isOpen, setIsOpen] = useState(false);
    const [isBabyOpen, setIsBabyOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedKids, setSelectedKids] = useState([]);
    const toys_categories = [{id:1,value:"Plush and Stuffed Animals"},
    {id:2,value:"Educational Toys"},
    {id:3,value:"Board Games and Puzzles"},
    {id:4,value:"Arts and Crafts"},
    {id:5,value:"Sports Equipment"}];
    const kids_categories = [{id:6,value:"Plush and Stuffed Ani"},
    {id:7,value:"Educational"},
    {id:8,value:"Board Games"},
    {id:9,value:"Arts"},
    {id:10,value:"Sports"}];

    const handleCheckboxChange_toys = (e,option)=>{
        console.log(e.target.value);
        const { checked } = e.target;
        // console.log(selectedOptions);
        
    // Update selectedOptions array based on checkbox state
    if (checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((selectedOption) => selectedOption.id !== option.id)
      );
    }
    
    }
    const handleCheckboxChange_kids = (e,option)=>{
        console.log(e.target.value);
        const { checked } = e.target;
        // console.log(selectedOptions);
        
    // Update selectedOptions array based on checkbox state
    if (checked) {
      setSelectedKids((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedKids((prevOptions) =>
        prevOptions.filter((selectedOption) => selectedOption.id !== option.id)
      );
    }
    
    }
    useEffect(()=>{
        onGetCategories([
            ...selectedOptions,...selectedKids
        ]);
    },[selectedKids,selectedOptions]);
    function handleIsOpen(){
        setIsOpen(prev => !prev);
    }
    function handleBabyToy(){
        setIsBabyOpen(prev => !prev);
    }
    return(
    <div className="OrgProfileCategories">
        <form className="Categories">
                    <h2>Select the categories of toys you accept</h2>
                    <div className="Kids">
                    
                        <h3>Kids Toys <BiDownArrowAlt onClick={handleIsOpen}/></h3>
                        {isOpen && <form action="">
                            {toys_categories.map((option)=>{
                               return  <div key={option.id}><input 
                               type="checkbox" 
                               id={option.id} 
                               name="toys_category" 
                               value={option.value}
                               onChange={(e)=>{handleCheckboxChange_toys(e,option)}}
                               checked={selectedOptions.some((selectedOption) => selectedOption.id === option.id)}
                               />
                                <label for="plushAnimals">{option.value}</label></div>
                            })       
                            }
                            </form>}
                    </div>

                    <div className="Baby">
                        <h3>Baby Toys <BiDownArrowAlt onClick={handleBabyToy}/></h3>
                        {isBabyOpen && <form action="">
                            {kids_categories.map((option)=>{
                                return <div key={option.id}>
                                <input 
                                    type="checkbox" 
                                    id={option.id}
                                    name="lids_category" 
                                    value={option.value}
                                    onChange={(e)=>{handleCheckboxChange_kids(e,option)}}
                                    checked={selectedKids.some((selectedOption) => selectedOption.id === option.id)}
                                    />
                                <label for="softPlushToys">{option.value}</label>
                            </div>
                            })
                            }
                        </form>}
                    </div>
            </form>
        
    </div>
) 
}


            