import React, {Component} from 'react';

//get api data
/*function loadAPI(api,callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', api, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
        var json = JSON.parse(xobj.responseText);
        callback(json);
    }
  };
  xobj.send(null);
}
*/
class App extends Component {
  /*constructor(props) {
      super(props);
      this.state = {
          city: '',
          country: '',
          region: '',
          main: '',
          description:'',
          temperature: '',
          type:'C',
          btn: 'Fahrenheit'
      };
      this.findLocation = this.findLocation.bind(this);
      this.changeType = this.changeType.bind(this);
      this.findLocation();
  }
  findLocation() {
      var that = this;
      loadAPI('http://ipinfo.io/json',function(response) {
        var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + response.city + '&units=metric&APPID=fb7177d1e3d6919142c86d37a969bf30';
        loadAPI(api,function(data) {
          that.setState(prevState => ({
            city: data.name,
            country: data.sys.country,
            main: data.weather[0].main,
            description: data.weather[0].description,
            temperature: data.main.temp
          }));
        });
      });
  }
  changeType(){
    if(this.state.type === 'F'){
      var celsius = (this.state.temperature - 32) * 5 / 9;
      this.setState(prevState => ({
        temperature: celsius,
        type: 'C',
        btn: 'Celsius'
      }));
    } else {
      var fahrenheit = this.state.temperature * 9 / 5 + 32;
      this.setState(prevState => ({
        temperature: fahrenheit,
        type: 'F',
        btn: 'Fahrenheit'
      }));
    }
  }*/
  render() {
    return (
      <div>Hello</div>
    );
  }
}

/*
<div className='main-container' style={{background: 'url("images/' + this.state.main + '.jpg") no-repeat center center fixed'}}>
  <div className='text-holder'>
    <div className='title'>React Weather App</div>
    <div className='text'>{this.state.city}, {this.state.country}</div>
    <div className='text'>{Math.round(this.state.temperature)}° {this.state.type}, {this.state.description}</div>
    <div className='btn' onClick={this.changeType}>Switch to {this.state.btn}</div>
  </div>
</div>
*/

export default App;
