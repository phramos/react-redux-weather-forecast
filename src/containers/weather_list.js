import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(pressure => pressure.main.pressure);
        const humidities = cityData.list.map(humidity => humidity.main.humidities);

        return(
          <tr key={name}>
              <td>{name}</td>
              <td>
                  <Sparklines width={180} height={120} data={temps}>
                      <SparklinesLine color="red"/>
                  </Sparklines>
              </td>
              <td>
                  <Sparklines width={180} height={120} data={pressures}>
                      <SparklinesLine color="red"/>
                  </Sparklines>
              </td>
              <td>
                  <Sparklines width={180} height={120} data={humidities}>
                      <SparklinesLine color="red"/>
                  </Sparklines>
              </td>
          </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>

                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);