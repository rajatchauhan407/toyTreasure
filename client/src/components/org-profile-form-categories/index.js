import "./index.scss"

export default function OrgProfileCategories(){
    return(
    <div className="OrgProfileCategories">
        <form className="Categories">
                    <h2>Select the categories of toys you accept</h2>
                    <div className="Kids">
                        <h3>Kids Toys</h3>
                            <input type="checkbox" id="plushAnimals" name="category" value="Plush and Stuffed Animals"/>
                            <label for="plushAnimals">Plush and Stuffed Animals</label> <br />

                            <input type="checkbox" id="educationalToys" name="category" value="Educational Toys"/>
                            <label for="educationalToys">Educational Toys</label> <br />

                            <input type="checkbox" id="boardGames" name="category" value="Board Games and Puzzles"/>
                            <label for="boardGames">Board Games and Puzzles</label> <br />

                            <input type="checkbox" id="artsCrafts" name="category" value="Arts and Crafts"/>
                            <label for="artsCrafts">Arts and Crafts</label> <br />

                            <input type="checkbox" id="sportsEquipment" name="category" value="Sports Equipment"/>
                            <label for="sportsEquipment">Sports Equipment</label> <br />

                            <input type="checkbox" id="dollsActionFigures" name="category" value="Dolls and Action Figures"/>
                            <label for="dollsActionFigures">Dolls and Action Figures</label> <br />

                            <input type="checkbox" id="buildingBlocks" name="category" value="Building Blocks and Construction Sets"/>
                            <label for="buildingBlocks">Building Blocks and Construction Sets</label> <br />

                            <input type="checkbox" id="musicalInstruments" name="category" value="Musical Instruments"/>
                            <label for="musicalInstruments">Musical Instruments</label> <br />

                            <input type="checkbox" id="outdoorPlay" name="category" value="Outdoor Play Equipment"/>
                            <label for="outdoorPlay">Outdoor Play Equipment</label> <br />

                            <input type="checkbox" id="books" name="category" value="Books and Reading Materials"/>
                            <label for="books">Books and Reading Materials</label> <br />
                    </div>

                    <div className="Baby">
                        <h3>Baby Toys</h3>
                            <input type="checkbox" id="softPlushToys" name="category" value="Soft Plush Toys"/>
                            <label for="softPlushToys">Soft Plush Toys</label><br />

                            <input type="checkbox" id="rattlesTeethers" name="category" value="Rattles and Teethers"/>
                            <label for="rattlesTeethers">Rattles and Teethers</label> <br />

                            <input type="checkbox" id="activityGyms" name="category" value="Activity Gyms"/>
                            <label for="activityGyms">Activity Gyms</label><br />

                            <input type="checkbox" id="stackingNestingToys" name="category" value="Stacking and Nesting Toys"/>
                            <label for="stackingNestingToys">Stacking and Nesting Toys</label><br />

                            <input type="checkbox" id="bathToys" name="category" value="Bath Toys"/>
                            <label for="bathToys">Bath Toys</label><br />

                            <input type="checkbox" id="musicalMobiles" name="category" value="Musical Mobiles"/>
                            <label for="musicalMobiles">Musical Mobiles</label><br />

                            <input type="checkbox" id="sensoryToys" name="category" value="Sensory Balls and Textured Toys"/>
                            <label for="sensoryToys">Sensory Balls and Textured Toys</label><br />
                    </div>
            </form>
        
    </div>
) 
}


            