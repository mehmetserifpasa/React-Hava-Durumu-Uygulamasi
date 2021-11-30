const HavaDurumu = (props) => {

    const { weather } = props;

    if(!weather) {
        return(
            <h1 className="loading">YÜKLENİYOR...</h1>
        )
    }

    return (
        <div className="box">
            <h3 className="box__name">{weather.name}</h3>
            <h4 className="box__state">{weather.weather.map(data => data.description).join(", ")}</h4>
            <p className="box__temp">{weather.main.temp} °C</p>
            <p className="box__date">{new Date(weather.dt * 1000).toLocaleDateString()}</p>
        </div>
    )
}

export default HavaDurumu;