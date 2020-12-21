import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    links: []
  };

  addLink() {
    this.setState({
      links: [...this.state.links, ""]
    });
  }

  handleChange(e, index) {
    this.state.links[index] = e.target.value;
    this.setState({
      links: this.state.links
    });
  }

  remove(index) {
    this.state.links.splice(index, 1);
    console.log(this.state.links, "Removed");
    this.setState({
      links: this.state.links
    });
  }

  render() {
    return (
      <div className="App">
        <div>The Link</div>
        <button onClick={(e) => this.addLink(e)}>Add New Link</button>
        <div>
          {this.state.links.map((link, i) => {
            return (
              <div key={i}>
                <input onChange={(e) => this.handleChange(e, i)} value={link} />
                <button onClick={() => this.remove(i)}>Remove new Link</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
