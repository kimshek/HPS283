import bletchleyPark from '../Pictures/bletchleyPark.jpg';

function Home(props) {
    console.log(bletchleyPark)
    return (
        <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <h1>Bletchley Park</h1>
            </div>
            
            <img src={bletchleyPark}/>
        </div>
    )
}

export default Home;