import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {padrao} from './styles/styles'
import Buttons from './components/Buttons'
import Display from './components/Display'


class App extends Component{
  state = {
    displayValue: '0',
  }

  //#region metodos
    
    addDigit = value => {this.setState({displayValue: this.state.displayValue + value})}
    clearDisplay = _ => {this.setState({displayValue: '0'})}
    setOperation = operetion => { }
  //#endregion

  render(){
    return(
      <View style={padrao.container}>
        <Display Text={this.state.displayValue} />
        <View style={padrao.buttons}>    
          <Buttons Text='AC' operetion= {true} triple={true} onClick={this.clearDisplay} />
          <Buttons Text='/' operetion= {true} onClick={  this.setOperation} />
          <Buttons Text='7' onClick={this.addDigit}/>
          <Buttons Text='8' onClick={this.addDigit}/>
          <Buttons Text='9' onClick={this.addDigit}/>
          <Buttons Text='*' onClick={this.setOperation}/>
          <Buttons Text='4' onClick={this.addDigit}/>
          <Buttons Text='5' onClick={this.addDigit}/>
          <Buttons Text='6' onClick={this.addDigit}/>
          <Buttons Text='-' operetion= {true} onClick={this.setOperation}/>
          <Buttons Text='1' onClick={this.addDigit}/>
          <Buttons Text='2' onClick={this.addDigit}/>
          <Buttons Text='3' onClick={this.addDigit}/>
          <Buttons Text='+' operetion={true} onClick={this.setOperation}/>
          <Buttons Text='0' double= {true} onClick={this.addDigit}/>
          <Buttons Text='.' operetion= {true} onClick={this.setOperation} />
          <Buttons Text='=' operetion= {true} onClick={ this.setOperation}/>
        </View>
      
      </View>  
      
    )
  }
}




export default App;
