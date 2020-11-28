
import React , { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Age extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 25
    }
  }
  render(){
    return(
      <View style={{ flexDirection: "row", width:"50%" , justifyContent:"space-between"}}>
        <Text style={ageStyle.text}>Age:</Text>
        <Button title="  -  " onPress={() => this.setState({age: this.state.age-1})}/>
        <Text style={ageStyle.text}>{this.state.age}</Text>
        <Button title="  +  "onPress={() => this.setState({age: this.state.age+1})}/>
      </View>
    );
  }
}
  const ageStyle = StyleSheet.create({
    text:{
      fontSize: 24,
    }
    
  })

  class Calculator extends React.Component {
    constructor(){
      super();
      this.state={
        display : '',
      }

      
    }
    

    render(){
      return(
        <View >
          <Text>Calculator</Text>
          <View style={{flexDirection:"row"}}>
            <Text style={calStyle.text}>Screen:</Text>
            <Text style={calStyle.text}>{this.state.display}</Text>
          </View>
          <View>
            <View style={{flexDirection:"row", padding:5}}>
            <Button title='  6  ' onPress={() => this.setState({display: this.state.display+"6"})}/>
            <Button title='  7  ' onPress={() => this.setState({display: this.state.display+"7"})}/>
            <Button title='  8  ' onPress={() => this.setState({display: this.state.display+"8"})}/>
            <Button title='  9  ' onPress={() => this.setState({display: this.state.display+"9"})}/>
            <Button title='  /  ' onPress={() => this.setState({display: this.state.display+"/"})}/>
            </View>
            <View style={{flexDirection:"row", padding:5}}>
            <Button title='  5  ' onPress={() => this.setState({display: this.state.display+"5"})}/>
            <Button title='  4  ' onPress={() => this.setState({display: this.state.display+"4"})}/>
            <Button title='  3  ' onPress={() => this.setState({display: this.state.display+"3"})}/>
            <Button title='  2  ' onPress={() => this.setState({display: this.state.display+"2"})}/>
            <Button title='  +  ' onPress={() => this.setState({display: this.state.display+"+"})}/>
            </View>
            <View style={{flexDirection:"row", padding:5}}>
            <Button title='  1  ' onPress={() => this.setState({display: this.state.display+1})}/>                        
            <Button title='  0  ' onPress={() => this.setState({display: this.state.display+0})}/>
            <Button title='  .  ' onPress={() => this.setState({display: this.state.display+"."})}/>
            <Button title='  +  ' onPress={() => this.setState({display: this.state.display+"+"})}/>
            <Button title='  *  ' onPress={() => this.setState({display: this.state.display+"*"})}/>
            </View>
          </View>
        </View>
      );
    }
  }
      const calStyle = StyleSheet.create({
        text:{
          fontSize:24
        }
      })
export default function App() {
  const [getName, setName]=useState({fName: 'First Name', lName:'Last Name'});



  const updateFirstName = (Firtname) =>{
    setName({fName:Firtname , lName: getName.lName});
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{getName.fName}</Text>
      <Text style={styles.text}>{getName.lName}</Text>
      
      <View style={styles.innerview}>
        <View style={{padding:10,}}>
          <Button title="Update First Name" onPress={updateFirstName.bind(this,"Muhammad")}></Button>
          <View style={{padding:10,}}>
          <Button title="Update Last Name" onPress={() => setName({fName:getName.fName,lName: 'Talha Jamal' })}></Button>
          </View>
          </View>
      </View>

      <Age />
      <Calculator />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    margin: 10,
  },
  innerview:{
    flexDirection:'row',
  },
  text: {
    fontSize:24,
    margin: 10,
  },
}
);
