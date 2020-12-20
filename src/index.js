import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number1: 0,
      number2: 0,
      result: 0
    }
    this.handleNumber1Change = this.handleNumber1Change.bind(this);
    this.handleNumber2Change = this.handleNumber2Change.bind(this);
  }

  handleNumber1Change(e) {
    this.setState({
      number1: Number(e.target.value)
    })
  }

  handleNumber2Change(e) {
    this.setState({
      number2: Number(e.target.value)
    })
  }

  add = (e) => {
    let n = this.state.number1 + this.state.number2
    this.setState({
      result: n
    })
  }

  sub = (e) => {
    let n = this.state.number1 - this.state.number2
    this.setState({
      result: n
    })
  }

  div = (e) => {
    let n = this.state.number1 / this.state.number2
    this.setState({
      result: n
    })
  }

  multi = (e) => {
    let n = this.state.number1 * this.state.number2
    this.setState({
      result: n
    })
  }


  render() {

    const { result } = this.state;

    return (
      <form>
        <label>
          <input type="number" onChange={this.handleNumber1Change}/>
          <input type="number" onChange={this.handleNumber2Change}/>
          <input type="button" onClick={this.add} value="+" />
          <input type="button" onClick={this.sub} value="-" />
          <input type="button" onClick={this.div} value="/" />
          <input type="button" onClick={this.multi} value="*" />
          <input type="text" value={result}/>
        </label>
      </form>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)