import React, {Component} from 'react';
import HighScore from './HighScore';

class Application extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      overTen: false,
    }
  }

  //UNSAFE_componentWillMount(props, state){}

  //componentDidMount(props, state){}

  //UNSAFE_componentWillReceiveProps(props){  //detects state change, before it mounts}

  //UNSAFE_componentWillUpdate(props, state){ //change in properties: this.props(current), props(old)
    //if (this.props.name !== props.name){
      // do something
    //}
  //}

  componentDidUpdate(props, state){ //when rerender happens: this.props(current), props(old)
    // console.log("Updated from", state, "to", this.state )
    if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
      // only when its bigger, when it is called for the first time (avoid infinite loop), when flag changed
      console.log("Updating over ten");
      this.setState({overTen: true});
    }
  }
  
  handleClick = () => {
    this.setState({count: this.state.count + 1});
  }

  resetCount = (e) => {
    console.log("Event is", e)
    this.setState({
      count: 0,
      overTen: false,
    })
  }

  render() {
      let {count} = this.state;
      let name = "Kit";
    return (
      <div>
        <h1>Hello, {name}</h1>
        <h2>You clicked the button {count} times</h2>
        <HighScore 
          overTen={this.state.overTen}
          onReset={this.resetCount}
        />
        
        <span>
          <button onClick={()=> this.handleClick()}>CLICK ME</button>  
        </span>
      </div>
    );
  }
}

export default Application;