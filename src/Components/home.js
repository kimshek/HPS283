import bletchleyPark from '../Pictures/bletchleyPark.jpg';
console.log(bletchleyPark)
function Home(props) {
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