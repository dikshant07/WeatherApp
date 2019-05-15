import React from 'react';
import './comment.css';
class Comment extends React.Component{
   fun1=()=>{
  var a=document.getElementById("userComments").value;
  document.getElementById("userComments").value='';
  var para=document.createElement("p");
  var q=document.createTextNode(a);
  para.appendChild(q);
  document.getElementById("addEventNames").appendChild(para);

}
  render(){
    return(
    <div className="container">
    <input type="text" placeholder="Add your comments" id="userComments"/>
    <button onClick={this.fun1} id="addList">Comment</button>
    <div id="addEventNames"></div>
    </div>
    )
  }
}
export default Comment;
