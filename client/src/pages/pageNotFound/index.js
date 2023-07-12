import './index.scss';
export default function PageNotFound(){
    return(<>
        <div className='404-page'>
            <h1>error 404</h1>
            <h3>Page is not found</h3>
            <p>the page doesn’t exist or was deleted</p>
            <button>Back to Home</button>
        </div>
        </>);
}