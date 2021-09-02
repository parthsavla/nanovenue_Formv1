import awe from './images/awe.svg';
import React from 'react';


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
      DropDown(stateVar){
       return( <div>
            <select name={stateVar}  className="inputBox" onChange={this.myChangeHandler}> 
                                    <optgroup label="Cluster group 1">
                                        <option disabled selected value> -- select an option -- </option>
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
                                </select>
        </div>
        )    }
      CheckToDisplayOpt(sn,sg,sNum,subjectLable,dropDownMenu,subjectGrade){
        if(sn && sg){
            sNum = <div className="subjectOptions"><lable className="l1">{subjectLable}</lable>{dropDownMenu}<input type="text" onChange={this.myChangeHandler} name={subjectGrade} className="inputBoxSG"></input></div>;

            return sNum;
        }else{
            sNum = '';
            return sNum;
        }
      }
      CheckToDisplayResults(sn,sg,subjectDisName){
        if(sn && sg){
            return subjectDisName = <div>{sn} ------ {sg}</div>;
        }else{
            return subjectDisName = '';
        }
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
        let dropDownMenu1 = this.DropDown("subjectOne");
        let dropDownMenu2 = this.DropDown("subjectTwo");
        let dropDownMenu3 = this.DropDown("subjectThree");
        let dropDownMenu4 = this.DropDown("subjectFour");
        let dropDownMenu5 = this.DropDown("subjectFive");
        let dropDownMenu6 = this.DropDown("subjectSix");  
        let dropDownMenu7 = this.DropDown("subjectSeven");
        let dropDownMenu8 = this.DropDown("subjectEight"); 
        let dropDownMenu9 = this.DropDown("subjectNine");     
       let subBtn = '';
       
    
    
   
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
                        {this.CheckToDisplayOpt(this.state.subjectOne,this.state.subjectOneGrade,"subTwo","Enter subject 2",dropDownMenu2,"subjectTwoGrade")}
                        {this.CheckToDisplayOpt(this.state.subjectTwo,this.state.subjectTwoGrade,"subThree","Enter subject 3",dropDownMenu3,"subjectThreeGrade")}
                        {this.CheckToDisplayOpt(this.state.subjectThree,this.state.subjectThreeGrade,"subFour","Enter subject 4",dropDownMenu4,"subjectFourGrade")}
                        {this.CheckToDisplayOpt(this.state.subjectFour,this.state.subjectFourGrade,"subFive","Enter subject 5",dropDownMenu5,"subjectFiveGrade")}
                        {this.CheckToDisplayOpt(this.state.subjectFive,this.state.subjectFiveGrade,"subSix","Enter subject 6",dropDownMenu6,"subjectSixGrade")}
                        {this.CheckToDisplayOpt(this.state.subjectSix,this.state.subjectSixGrade,"subSeven","Enter subject 7",dropDownMenu7,"subjectSevenGrade")}
                        {this.CheckToDisplayOpt(this.state.subjectSeven,this.state.subjectSevenGrade,"subEight","Enter subject 8",dropDownMenu8,"subjectEightGrade")}
                        {this.CheckToDisplayOpt(this.state.subjectEight,this.state.subjectEightGrade,"subNine","Enter subject 9",dropDownMenu9,"subjectNineGrade")}
                    </div>
                    <div className="resultContainer">  
                    <p>Your selected options</p>  
                    <span>KCSE mean grade - {this.state.meanGrade}</span>
      
                    {this.CheckToDisplayResults(this.state.subjectOne,this.state.subjectOneGrade,subTwoDisplay)}
                    {this.CheckToDisplayResults(this.state.subjectTwo,this.state.subjectTwoGrade,subThreeDisplay)}
                    {this.CheckToDisplayResults(this.state.subjectThree,this.state.subjectThreeGrade,subFourDisplay)}
                    {this.CheckToDisplayResults(this.state.subjectFour,this.state.subjectFourGrade,subFiveDisplay)}
                    {this.CheckToDisplayResults(this.state.subjectFive,this.state.subjectFiveGrade,subSixDisplay)}
                    {this.CheckToDisplayResults(this.state.subjectSix,this.state.subjectSixGrade,subSevenDisplay)}
                    {this.CheckToDisplayResults(this.state.subjectSeven,this.state.subjectSevenGrade,subEightDisplay)}
                    {this.CheckToDisplayResults(this.state.subjectEight,this.state.subjectEightGrade,subNineDisplay)}
                    {this.CheckToDisplayResults(this.state.subjectNine,this.state.subjectNineGrade,null)}
                    </div>
                 </div>
                 {subBtn}
            </form>
            
        </div>
    )
    }
}


export default FormBody