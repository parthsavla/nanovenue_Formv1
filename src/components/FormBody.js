import awe from './images/awe.svg'
import React, { useState } from 'react'

class FormBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            meanGrade: '',
            subjectOne:'',
            subjectOneGrade:'',
            subjectTwo:'',
            subjectTwoGrade:'',
            subjectThree:'',
            subjectThreeGrade:'',
            subjectFour:'',
            subjectFourGrade:'',
            subjectFive:'',
            subjectFiveGrade:'',
            subjectSix:'',
            subjectSixGrade:'',
            subjectSeven:'',
            subjectSevenGrade:'',
            subjectEight:'',
            subjectEightGrade:'',
            subjectNine:'',
            subjectNineGrade:''
                     
        };
      }

      
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam,val);
      }
    render(){
        
        let subTwo = '';
        let subOneDisplay='';
        let subThree = '';
        let subTwoDisplay = '';
        let subFour = '';
        let subThreeDisplay = '';
        let subFive = '';
        let subFourDisplay = '';
        let subSix = '';
        let subFiveDisplay = '';
        let subSeven = '';
        let subSixDisplay = '';
        let subEight = '';
        let subSevenDisplay = '';
        let subNine = '';
        let subEightDisplay = '';
        let subNineDisplay = '';
        let dropDownMenu1 = <select name="subjectOne" onChange={this.myChangeHandler} className="inputBox"> 
                                <optgroup label="Cluster group 1">
                                    <option value=""></option>
                                    <option value="English">English</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Kiswahili">Kiswahili</option>
                                </optgroup>
                                <optgroup label="Cluster group 2">
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Physics">Physics</option>
                                </optgroup>
                                <optgroup label="Cluster group 3">
                                    <option value="History and Government">History and Government</option>
                                    <option value="Geography">Geography</option>
                                    <option value="Christian Religious Education">Christian Religious Education</option>
                                    <option value="Islamic Religious Education">Islamic Religious Education</option>
                                    <option value="Hindu Religious Study">Hindu Religious Study</option>
                                </optgroup>
                                <optgroup label="Cluster group 4">
                                    <option value="Home Science">Home Science</option>
                                    <option value="Art and Design">Art and Design</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Woodwork">Woodwork</option>
                                    <option value="Metalwork">Metalwork</option>
                                    <option value="Building Construction">Building Construction</option>
                                    <option value="Power Mechanics">Power Mechanics</option>
                                    <option value="Electricity">Electricity</option>
                                    <option value="Drawing And Design">Drawing And Design</option>
                                    <option value="Aviation Technology">Aviation Technology</option>
                                    <option value="Computer Studies">Computer Studies</option>
                                </optgroup>
                                <optgroup label="Cluster group 5">
                                    <option value="French">French</option>
                                    <option value="German">German</option>
                                    <option value="Arabic">Arabic</option>
                                    <option value="Kenya Sign Language">Kenya Sign Language</option>
                                    <option value="Music">Music</option>
                                    <option value="Business Studies">Business Studies</option>
                                </optgroup>
                            </select>;
        let dropDownMenu2 = <select name="subjectTwo" onChange={this.myChangeHandler} className="inputBox"> 
       <optgroup label="Cluster group 1">
           <option value=""></option>
           <option value="English">English</option>
           <option value="Mathematics">Mathematics</option>
           <option value="Kiswahili">Kiswahili</option>
       </optgroup>
       <optgroup label="Cluster group 2">
           <option value="Chemistry">Chemistry</option>
           <option value="Biology">Biology</option>
           <option value="Physics">Physics</option>
       </optgroup>
       <optgroup label="Cluster group 3">
           <option value="History and Government">History and Government</option>
           <option value="Geography">Geography</option>
           <option value="Christian Religious Education">Christian Religious Education</option>
           <option value="Islamic Religious Education">Islamic Religious Education</option>
           <option value="Hindu Religious Study">Hindu Religious Study</option>
       </optgroup>
       <optgroup label="Cluster group 4">
           <option value="Home Science">Home Science</option>
           <option value="Art and Design">Art and Design</option>
           <option value="Agriculture">Agriculture</option>
           <option value="Woodwork">Woodwork</option>
           <option value="Metalwork">Metalwork</option>
           <option value="Building Construction">Building Construction</option>
           <option value="Power Mechanics">Power Mechanics</option>
           <option value="Electricity">Electricity</option>
           <option value="Drawing And Design">Drawing And Design</option>
           <option value="Aviation Technology">Aviation Technology</option>
           <option value="Computer Studies">Computer Studies</option>
       </optgroup>
       <optgroup label="Cluster group 5">
           <option value="French">French</option>
           <option value="German">German</option>
           <option value="Arabic">Arabic</option>
           <option value="Kenya Sign Language">Kenya Sign Language</option>
           <option value="Music">Music</option>
           <option value="Business Studies">Business Studies</option>
       </optgroup>
   </select>;
        let dropDownMenu3 = <select name="subjectThree" onChange={this.myChangeHandler} className="inputBox"> 
        <optgroup label="Cluster group 1">
        <option value=""></option>
            <option value="English">English</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Kiswahili">Kiswahili</option>
        </optgroup>
        <optgroup label="Cluster group 2">
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Physics">Physics</option>
        </optgroup>
        <optgroup label="Cluster group 3">
            <option value="History and Government">History and Government</option>
            <option value="Geography">Geography</option>
            <option value="Christian Religious Education">Christian Religious Education</option>
            <option value="Islamic Religious Education">Islamic Religious Education</option>
            <option value="Hindu Religious Study">Hindu Religious Study</option>
        </optgroup>
        <optgroup label="Cluster group 4">
            <option value="Home Science">Home Science</option>
            <option value="Art and Design">Art and Design</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Woodwork">Woodwork</option>
            <option value="Metalwork">Metalwork</option>
            <option value="Building Construction">Building Construction</option>
            <option value="Power Mechanics">Power Mechanics</option>
            <option value="Electricity">Electricity</option>
            <option value="Drawing And Design">Drawing And Design</option>
            <option value="Aviation Technology">Aviation Technology</option>
            <option value="Computer Studies">Computer Studies</option>
        </optgroup>
        <optgroup label="Cluster group 5">
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Arabic">Arabic</option>
            <option value="Kenya Sign Language">Kenya Sign Language</option>
            <option value="Music">Music</option>
            <option value="Business Studies">Business Studies</option>
        </optgroup>
    </select>;
        let dropDownMenu4 = <select name="subjectFour" onChange={this.myChangeHandler} className="inputBox"> 
         <optgroup label="Cluster group 1">
             <option value=""></option>
             <option value="English">English</option>
             <option value="Mathematics">Mathematics</option>
             <option value="Kiswahili">Kiswahili</option>
         </optgroup>
         <optgroup label="Cluster group 2">
             <option value="Chemistry">Chemistry</option>
             <option value="Biology">Biology</option>
             <option value="Physics">Physics</option>
         </optgroup>
         <optgroup label="Cluster group 3">
             <option value="History and Government">History and Government</option>
             <option value="Geography">Geography</option>
             <option value="Christian Religious Education">Christian Religious Education</option>
             <option value="Islamic Religious Education">Islamic Religious Education</option>
             <option value="Hindu Religious Study">Hindu Religious Study</option>
         </optgroup>
         <optgroup label="Cluster group 4">
             <option value="Home Science">Home Science</option>
             <option value="Art and Design">Art and Design</option>
             <option value="Agriculture">Agriculture</option>
             <option value="Woodwork">Woodwork</option>
             <option value="Metalwork">Metalwork</option>
             <option value="Building Construction">Building Construction</option>
             <option value="Power Mechanics">Power Mechanics</option>
             <option value="Electricity">Electricity</option>
             <option value="Drawing And Design">Drawing And Design</option>
             <option value="Aviation Technology">Aviation Technology</option>
             <option value="Computer Studies">Computer Studies</option>
         </optgroup>
         <optgroup label="Cluster group 5">
             <option value="French">French</option>
             <option value="German">German</option>
             <option value="Arabic">Arabic</option>
             <option value="Kenya Sign Language">Kenya Sign Language</option>
             <option value="Music">Music</option>
             <option value="Business Studies">Business Studies</option>
         </optgroup>
     </select>;
        let dropDownMenu5 = <select name="subjectFive" onChange={this.myChangeHandler} className="inputBox"> 
 <optgroup label="Cluster group 1">
     <option value=""></option>
     <option value="English">English</option>
     <option value="Mathematics">Mathematics</option>
     <option value="Kiswahili">Kiswahili</option>
 </optgroup>
 <optgroup label="Cluster group 2">
     <option value="Chemistry">Chemistry</option>
     <option value="Biology">Biology</option>
     <option value="Physics">Physics</option>
 </optgroup>
 <optgroup label="Cluster group 3">
     <option value="History and Government">History and Government</option>
     <option value="Geography">Geography</option>
     <option value="Christian Religious Education">Christian Religious Education</option>
     <option value="Islamic Religious Education">Islamic Religious Education</option>
     <option value="Hindu Religious Study">Hindu Religious Study</option>
 </optgroup>
 <optgroup label="Cluster group 4">
     <option value="Home Science">Home Science</option>
     <option value="Art and Design">Art and Design</option>
     <option value="Agriculture">Agriculture</option>
     <option value="Woodwork">Woodwork</option>
     <option value="Metalwork">Metalwork</option>
     <option value="Building Construction">Building Construction</option>
     <option value="Power Mechanics">Power Mechanics</option>
     <option value="Electricity">Electricity</option>
     <option value="Drawing And Design">Drawing And Design</option>
     <option value="Aviation Technology">Aviation Technology</option>
     <option value="Computer Studies">Computer Studies</option>
 </optgroup>
 <optgroup label="Cluster group 5">
     <option value="French">French</option>
     <option value="German">German</option>
     <option value="Arabic">Arabic</option>
     <option value="Kenya Sign Language">Kenya Sign Language</option>
     <option value="Music">Music</option>
     <option value="Business Studies">Business Studies</option>
 </optgroup>
</select>;       
        let dropDownMenu6 = <select name="subjectSix" onChange={this.myChangeHandler} className="inputBox"> 
 <optgroup label="Cluster group 1">
     <option value=""></option>
     <option value="English">English</option>
     <option value="Mathematics">Mathematics</option>
     <option value="Kiswahili">Kiswahili</option>
 </optgroup>
 <optgroup label="Cluster group 2">
     <option value="Chemistry">Chemistry</option>
     <option value="Biology">Biology</option>
     <option value="Physics">Physics</option>
 </optgroup>
 <optgroup label="Cluster group 3">
     <option value="History and Government">History and Government</option>
     <option value="Geography">Geography</option>
     <option value="Christian Religious Education">Christian Religious Education</option>
     <option value="Islamic Religious Education">Islamic Religious Education</option>
     <option value="Hindu Religious Study">Hindu Religious Study</option>
 </optgroup>
 <optgroup label="Cluster group 4">
     <option value="Home Science">Home Science</option>
     <option value="Art and Design">Art and Design</option>
     <option value="Agriculture">Agriculture</option>
     <option value="Woodwork">Woodwork</option>
     <option value="Metalwork">Metalwork</option>
     <option value="Building Construction">Building Construction</option>
     <option value="Power Mechanics">Power Mechanics</option>
     <option value="Electricity">Electricity</option>
     <option value="Drawing And Design">Drawing And Design</option>
     <option value="Aviation Technology">Aviation Technology</option>
     <option value="Computer Studies">Computer Studies</option>
 </optgroup>
 <optgroup label="Cluster group 5">
     <option value="French">French</option>
     <option value="German">German</option>
     <option value="Arabic">Arabic</option>
     <option value="Kenya Sign Language">Kenya Sign Language</option>
     <option value="Music">Music</option>
     <option value="Business Studies">Business Studies</option>
 </optgroup>
</select>;       
        let dropDownMenu7 = <select name="subjectSeven" onChange={this.myChangeHandler} className="inputBox"> 
 <optgroup label="Cluster group 1">
     <option value=""></option>
     <option value="English">English</option>
     <option value="Mathematics">Mathematics</option>
     <option value="Kiswahili">Kiswahili</option>
 </optgroup>
 <optgroup label="Cluster group 2">
     <option value="Chemistry">Chemistry</option>
     <option value="Biology">Biology</option>
     <option value="Physics">Physics</option>
 </optgroup>
 <optgroup label="Cluster group 3">
     <option value="History and Government">History and Government</option>
     <option value="Geography">Geography</option>
     <option value="Christian Religious Education">Christian Religious Education</option>
     <option value="Islamic Religious Education">Islamic Religious Education</option>
     <option value="Hindu Religious Study">Hindu Religious Study</option>
 </optgroup>
 <optgroup label="Cluster group 4">
     <option value="Home Science">Home Science</option>
     <option value="Art and Design">Art and Design</option>
     <option value="Agriculture">Agriculture</option>
     <option value="Woodwork">Woodwork</option>
     <option value="Metalwork">Metalwork</option>
     <option value="Building Construction">Building Construction</option>
     <option value="Power Mechanics">Power Mechanics</option>
     <option value="Electricity">Electricity</option>
     <option value="Drawing And Design">Drawing And Design</option>
     <option value="Aviation Technology">Aviation Technology</option>
     <option value="Computer Studies">Computer Studies</option>
 </optgroup>
 <optgroup label="Cluster group 5">
     <option value="French">French</option>
     <option value="German">German</option>
     <option value="Arabic">Arabic</option>
     <option value="Kenya Sign Language">Kenya Sign Language</option>
     <option value="Music">Music</option>
     <option value="Business Studies">Business Studies</option>
 </optgroup>
</select>;      
        let dropDownMenu8 = <select name="subjectEight" onChange={this.myChangeHandler} className="inputBox"> 
 <optgroup label="Cluster group 1">
     <option value=""></option>
     <option value="English">English</option>
     <option value="Mathematics">Mathematics</option>
     <option value="Kiswahili">Kiswahili</option>
 </optgroup>
 <optgroup label="Cluster group 2">
     <option value="Chemistry">Chemistry</option>
     <option value="Biology">Biology</option>
     <option value="Physics">Physics</option>
 </optgroup>
 <optgroup label="Cluster group 3">
     <option value="History and Government">History and Government</option>
     <option value="Geography">Geography</option>
     <option value="Christian Religious Education">Christian Religious Education</option>
     <option value="Islamic Religious Education">Islamic Religious Education</option>
     <option value="Hindu Religious Study">Hindu Religious Study</option>
 </optgroup>
 <optgroup label="Cluster group 4">
     <option value="Home Science">Home Science</option>
     <option value="Art and Design">Art and Design</option>
     <option value="Agriculture">Agriculture</option>
     <option value="Woodwork">Woodwork</option>
     <option value="Metalwork">Metalwork</option>
     <option value="Building Construction">Building Construction</option>
     <option value="Power Mechanics">Power Mechanics</option>
     <option value="Electricity">Electricity</option>
     <option value="Drawing And Design">Drawing And Design</option>
     <option value="Aviation Technology">Aviation Technology</option>
     <option value="Computer Studies">Computer Studies</option>
 </optgroup>
 <optgroup label="Cluster group 5">
     <option value="French">French</option>
     <option value="German">German</option>
     <option value="Arabic">Arabic</option>
     <option value="Kenya Sign Language">Kenya Sign Language</option>
     <option value="Music">Music</option>
     <option value="Business Studies">Business Studies</option>
 </optgroup>
</select>;      
        let dropDownMenu9 = <select name="subjectNine" onChange={this.myChangeHandler} className="inputBox"> 
 <optgroup label="Cluster group 1">
     <option value=""></option>
     <option value="English">English</option>
     <option value="Mathematics">Mathematics</option>
     <option value="Kiswahili">Kiswahili</option>
 </optgroup>
 <optgroup label="Cluster group 2">
     <option value="Chemistry">Chemistry</option>
     <option value="Biology">Biology</option>
     <option value="Physics">Physics</option>
 </optgroup>
 <optgroup label="Cluster group 3">
     <option value="History and Government">History and Government</option>
     <option value="Geography">Geography</option>
     <option value="Christian Religious Education">Christian Religious Education</option>
     <option value="Islamic Religious Education">Islamic Religious Education</option>
     <option value="Hindu Religious Study">Hindu Religious Study</option>
 </optgroup>
 <optgroup label="Cluster group 4">
     <option value="Home Science">Home Science</option>
     <option value="Art and Design">Art and Design</option>
     <option value="Agriculture">Agriculture</option>
     <option value="Woodwork">Woodwork</option>
     <option value="Metalwork">Metalwork</option>
     <option value="Building Construction">Building Construction</option>
     <option value="Power Mechanics">Power Mechanics</option>
     <option value="Electricity">Electricity</option>
     <option value="Drawing And Design">Drawing And Design</option>
     <option value="Aviation Technology">Aviation Technology</option>
     <option value="Computer Studies">Computer Studies</option>
 </optgroup>
 <optgroup label="Cluster group 5">
     <option value="French">French</option>
     <option value="German">German</option>
     <option value="Arabic">Arabic</option>
     <option value="Kenya Sign Language">Kenya Sign Language</option>
     <option value="Music">Music</option>
     <option value="Business Studies">Business Studies</option>
 </optgroup>
</select>;       
       let subBtn = '';
       if(this.state.subjectOne && this.state.subjectOneGrade){
            subTwo = <div className="subjectOptions"><lable className="l1">Enter subject 2</lable>{dropDownMenu2}<input type="text" onChange={this.myChangeHandler} name="subjectTwoGrade" className="inputBoxSG"></input></div>;
            subOneDisplay = <div>{this.state.subjectOne} ------ {this.state.subjectOneGrade}</div>;
        }else{
            subTwo = '';
            subOneDisplay = '';
        }
        if(this.state.subjectTwo && this.state.subjectTwoGrade){
            subThree =<div className="subjectOptions"><lable className="l1">Enter subject 3</lable>{dropDownMenu3}<input type="text" onChange={this.myChangeHandler} name="subjectThreeGrade" className="inputBoxSG"></input></div>;
            subTwoDisplay = <div>{this.state.subjectTwo} ------ {this.state.subjectTwoGrade}</div>;
        }else{
            subThree = '';
            subTwoDisplay = '';
        }
        if(this.state.subjectThree && this.state.subjectThreeGrade){
            subFour =<div className="subjectOptions"><lable className="l1">Enter subject 4</lable>{dropDownMenu4}<input type="text" className="inputBoxSG" onChange={this.myChangeHandler} name="subjectFourGrade"></input></div>;
            subThreeDisplay = <div>{this.state.subjectThree} ------ {this.state.subjectThreeGrade}</div>;
        }else{
            subFour = ""
            subThreeDisplay = '';
        }
        if(this.state.subjectFour && this.state.subjectFourGrade){
            subFive =<div className="subjectOptions"><lable className="l1">Enter subject 5</lable>{dropDownMenu5}<input type="text" className="inputBoxSG" onChange={this.myChangeHandler} name="subjectFiveGrade"></input></div>;
            subFourDisplay = <div>{this.state.subjectFour} ------ {this.state.subjectFourGrade}</div>;
            
        }else{
            subFive = ""
            subFourDisplay = '';
        }
        if(this.state.subjectFive && this.state.subjectFiveGrade){
            subSix =<div className="subjectOptions"><lable className="l1">Enter subject 6</lable>{dropDownMenu6}<input type="text" className="inputBoxSG" onChange={this.myChangeHandler} name="subjectSixGrade"></input></div>;
            subFiveDisplay = <div>{this.state.subjectFive} ------ {this.state.subjectFiveGrade}</div>;
        }else{
            subSix = ""
            subFiveDisplay = '';
        }
        if(this.state.subjectSix && this.state.subjectSixGrade){
            subSeven =<div className="subjectOptions"><lable className="l1">Enter subject 7</lable>{dropDownMenu7}<input type="text" className="inputBoxSG" onChange={this.myChangeHandler} name="subjectSevenGrade"></input></div>;
            subSixDisplay = <div>{this.state.subjectSix} ------ {this.state.subjectSixGrade}</div>;
        }else{
            subSeven = "";
            subSixDisplay = '';
        }
        if(this.state.subjectSeven && this.state.subjectSevenGrade){
            subEight =<div className="subjectOptions"><lable className="l1">Enter subject 8</lable>{dropDownMenu8}<input type="text" className="inputBoxSG" onChange={this.myChangeHandler} name="subjectEightGrade"></input></div>;
            subSevenDisplay = <div>{this.state.subjectSeven} ------ {this.state.subjectSevenGrade}</div>;
            subBtn = <button className="submitBtn" type="submit">submit</button>;    
        }else{
            subEight = "";
            subSevenDisplay = "";
        }
        if(this.state.subjectEight && this.state.subjectEightGrade){
            subNine = <div className="subjectOptions"><lable className="l1">Enter subject 9</lable>{dropDownMenu9}<input type="text" className="inputBoxSG" onChange={this.myChangeHandler} name="subjectNineGrade"></input></div>;
            subEightDisplay = <div>{this.state.subjectEight} ------ {this.state.subjectEightGrade}</div>;
        }else{
            subNine = ""
            subEightDisplay = '';
        }
        if(this.state.subjectNine && this.state.subjectNineGrade){
            subNineDisplay = <div>{this.state.subjectNine} ------ {this.state.subjectNineGrade}</div>;
        }else{
            subNineDisplay = '';
        }
       
    return(
        <div>
            <p className="txtPar">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <img src={awe} className="imageLine" alt="line"></img>
            <form className="f1" >
                 <lable className="l1">Please enter your MEAN KCSE GRADE</lable>
                 <input type="text" className="inputBox" onChange={this.myChangeHandler} name="meanGrade"></input>

                 <div className="l2">Below select the SUBJECTS relevant to you and their cooresponding GRADE</div>
                 <div className="secondFormContainer">
                    <div className="selectionContainer">
                        <div className="subjectOptions">
                            <lable className="l1">Enter subject 1</lable>
                            {dropDownMenu1}<input type="text" onChange={this.myChangeHandler} name="subjectOneGrade" className="inputBoxSG"></input>
                        </div>
                        {subTwo}
                        {subThree}
                        {subFour}
                        {subFive}
                        {subSix}
                        {subSeven}
                        {subEight}
                        {subNine}
                    </div>
                    <div className="resultContainer">  
                    <p>Your selected options</p>  
                    <span>KCSE mean grade - {this.state.meanGrade}</span>
                    {subOneDisplay}
                    {subTwoDisplay}
                    {subThreeDisplay}
                    {subFourDisplay}
                    {subFiveDisplay}
                    {subSixDisplay}
                    {subSevenDisplay}
                    {subEightDisplay}
                    {subNineDisplay}
                    </div>
                 </div>
                 {subBtn}
            </form>
            
        </div>
    )
    }
}


export default FormBody