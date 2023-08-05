import './index.scss';


export default function LoaderToysTreasure(){

    return (
        <>
            <div id="backdrop"></div>
            <div className="load_container">
                <img src={require('./block-loop-ps.gif')} alt="Loading......" />
            </div>       
        </>
        
    );
}