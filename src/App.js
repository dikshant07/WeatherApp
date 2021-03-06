import React from 'react';
import './App.css';
import Header from './display/Header';
import Searchbar from './display/Searchbar';
import Displaydata from './display/Displaydata';
import Displaymessage from './display/Displaymessage';
import Comment from './display/Comment';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:'',
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
      status:'false'
    }
  }
   timeConverter=(UNIX_timestamp)=>{
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = n+ ' ' + date + ' ' + month + ' ' + year;
  return time;
}
 time=(UNIX_timestamp)=>{
     var a = new Date(UNIX_timestamp * 1000);
     var hour = a.getHours();
     var min = a.getMinutes();
     var sec = a.getSeconds();
     var time = hour + ':' + min + ':' + sec
     return time;
 }
 temperature = (tempt)=> {
   var a = tempt - 273.15
   return (Math.round(a*100)/100);
 }
  onSubmitHandler = async (city,name,sunrise,sunset,tmpmx,tmpmn,country,date,description,wind,humidity,pressure,icon,status)=>{

     await this.setState({city:city});
     await this.setState({name:name});
     await this.setState({sunrise:sunrise});
     let sr=this.state.sunrise
     sr=this.time(sr);
     this.setState({sunrise:sr})
     await this.setState({sunset:sunset});
     let st=this.state.sunset
     st=this.time(st);
     this.setState({sunset:st})
     await this.setState({tmpmx:tmpmx});
     let tmp=this.state.tmpmx
     tmp = this.temperature(tmp);
     this.setState({tmpmx:tmp})
     await this.setState({tmpmn:tmpmn});
     let tmp1=this.state.tmpmn
     tmp1 = this.temperature(tmp1);
     this.setState({tmpmn:tmp1})
     await this.setState({country:country});
     await this.setState({date:date});
     let time=this.state.date
     time=this.timeConverter(time);
     this.setState({date:time})
     await this.setState({description:description});
     await this.setState({wind:wind});
     await this.setState({humidity:humidity});
     await this.setState({status:status});
     await this.setState({pressure:pressure});
     await this.setState({icon:icon});
     if(this.state.status==='true'){
     document.getElementById('body-container1').style.display='block';
     document.getElementById('body-container3').style.display='block';
   }
     else {
       document.getElementById('body-container2').style.display='block';
     }

  }
  render(){
    return(
      <div className="main-container">
        <div className="heading-container">
        <Header heading="Weather App"/>
        </div>
        <Searchbar onSubmitHandler={this.onSubmitHandler}/>
        <div id="body-container1">
        <Displaydata cityinfo={this.state.name} sunrise={this.state.sunrise} sunset={this.state.sunset} tmpmx={this.state.tmpmx} tmpmn={this.state.tmpmn} country={this.state.country} date={this.state.date} wind={this.state.wind} description={this.state.description} humidity={this.state.humidity} icon={this.state.icon} pressure={this.state.pressure}/>
       </div>
       <div id="body-container2">
           <Displaymessage/>
       </div>
       <div id="body-container3">
         <Comment/>
       </div>
      </div>
    );
  }
}
export default App;
