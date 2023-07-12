import "./index.scss";
import {useState,useEffect} from "react";
import {BiDownArrowAlt} from "react-icons/bi";
export default function OrgProfileCategories({onGetCategories}){
    const [isOpen, setIsOpen] = useState(false);
    const [isBabyOpen, setIsBabyOpen] = useState(false);
    const [isTeenOpen, setIsTeenOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedKids, setSelectedKids] = useState([]);
    const [selectedTeens, setSelectedTeens] = useState([]);
    const age0_categories = [{id:1,value:"Stuffed Animals"},
    {id:2,value:"Shape sorters"},
    {id:3,value:"Musical toys"},
    {id:4,value:"Bath toys"}];
    
    const age5_categories = [{id:5,value:"Board games"},
    {id:6,value:"Dollhouses"},
    {id:7,value:"Science kits"},
    {id:8,value:"Art supplies"}];

    const age12_categories = [{id:9,value:"Sports gear"},
    {id:10,value:"Outdoor equipment"},
    {id:11,value:"Robotics kits"},
    {id:12,value:"Books and novels"}];

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

    const handleCheckboxChange_teens = (e,option)=>{
        console.log(e.target.value);
        const { checked } = e.target;
        // console.log(selectedOptions);
        
    // Update selectedOptions array based on checkbox state
    if (checked) {
      setSelectedTeens((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedTeens((prevOptions) =>
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
    function handleTeenToy(){
        setIsTeenOpen(prev => !prev);
    }
    return(
    <div className="OrgProfileCategories">
        <form className="Categories">
                    <h2>Select the categories of toys you accept</h2>
                    <div className="0-4_age">
                    
                        <h3>Baby Toys <BiDownArrowAlt onClick={handleIsOpen}/></h3>
                        <p>Age 0 to 4 years</p>
                        {isOpen && <form action="">
                            {age0_categories.map((option)=>{
                               return  <div key={option.id}><input 
                               type="checkbox" 
                               id={option.id} 
                               name="age0_category" 
                               value={option.value}
                               onChange={(e)=>{handleCheckboxChange_toys(e,option)}}
                               checked={selectedOptions.some((selectedOption) => selectedOption.id === option.id)}
                               />
                                <label for="plushAnimals">{option.value}</label></div>
                            })       
                            }
                            </form>}
                    </div>

                    <div className="5-11_age">
                        <h3>Kids Toys <BiDownArrowAlt onClick={handleBabyToy}/></h3>
                        <p>Age 5 to 11 years</p>
                        {isBabyOpen && <form action="">
                            {age5_categories.map((option)=>{
                                return <div key={option.id}>
                                <input 
                                    type="checkbox" 
                                    id={option.id}
                                    name="age5_category" 
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

                    <div className="12-18_age">
                        <h3>Teens Toys <BiDownArrowAlt onClick={handleTeenToy}/></h3>
                        <p>Age 12 to 18 years</p>
                        {isTeenOpen && <form action="">
                            {age12_categories.map((option)=>{
                                return <div key={option.id}>
                                <input 
                                    type="checkbox" 
                                    id={option.id}
                                    name="age5_category" 
                                    value={option.value}
                                    onChange={(e)=>{handleCheckboxChange_teens(e,option)}}
                                    checked={selectedTeens.some((selectedOption) => selectedOption.id === option.id)}
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


            