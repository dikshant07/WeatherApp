import React from 'react';
import './Search.css';
class Searchbar extends React.Component{
  constructor(props)
  {
      super(props);
      this.state ={
          city : '',
            name:'',
            description:null,
            country:null,
            sunrise:null,
            sunset:null,
            date:null,
            tmpmx:null,
            tmpmn:null,
            wind:null,
            humidity:null,
            pressure:null,
            icon:null,
          status :'false'
      };
  }
  getDataHandler = (name)=>{ return new Promise((Resolve,Reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+name+"&APPID=ea39a7835acbf5d1f6ac6127690f5d98");
      xhr.send();
      xhr.onreadystatechange = () => {
          if(xhr.status===404)
          document.getElementById('loading-container').style.display='none';
          if((xhr.status!==200&&xhr.status!==404)&&xhr.readyState!==4)
          document.getElementById('loading-container').style.display='block'
          else if(xhr.status===200 && xhr.readyState===4){
          var joke = JSON.parse(xhr.responseText);
          {console.log(joke)}
           if(joke!=null){
             this.setState({name:joke.name})
             this.setState({sunrise:joke.sys.sunrise})
             this.setState({sunset:joke.sys.sunset})
             this.setState({tmpmx:joke.main.temp_max})
             this.setState({tmpmn:joke.main.temp_min})
             this.setState({country:joke.sys.country})
             this.setState({description:joke.weather[0].description})
             this.setState({date:joke.dt})
             this.setState({wind:joke.wind.speed})
             this.setState({humidity:joke.main.humidity})
             this.setState({pressure:joke.main.pressure})
             this.setState({icon:'http://openweathermap.org/img/w/' + joke.weather[0].icon + '.png'})
             {console.log(this.state.humidity)}
             {console.log(this.state.sunset)}
             //{console.log(this.data.coord.lon)}
             let status=this.state.status
             status='true'
             this.setState({status:status})
             document.getElementById('loading-container').style.display='none';
           }
             //{console.log(this.state.data)}
             // let status = this.state.status;
             // status='true';
             // this.setState({status:status})
              Resolve();
           }
      }
    }
    )}
  getcityHandler = async (e) =>{
        e.preventDefault();
        let city = this.state.city;
          city=(document.getElementById('inpcity').value);
          await this.setState({city:city});
          await this.getDataHandler(this.state.city);
         await this.props.onSubmitHandler(this.state.city,this.state.name,this.state.sunrise,this.state.sunset,this.state.tmpmx,this.state.tmpmn,this.state.country,this.state.date,this.state.description,this.state.wind,this.state.humidity,this.state.pressure,this.state.icon,this.state.status);
        }
  render(){
    return(
      <div>
      <div className="subHeading">
        <form onSubmit={this.getcityHandler.bind(this)}>
        <input type="text" placeholder="Enter the Name of the City" id="inpcity" required></input>
        <button type="submit" id="getBut">Find</button>
        </form>
        </div>
        <div id="loading-container">
          Loading Please Wait......
        </div>
      </div>
    )
  }
}
export default Searchbar;
