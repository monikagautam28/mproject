import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.mylist,
      mydata: [],
      delete: []
    }

  }
  onhandler() {
    console.log(this.state.data)
    this.state.data.push( { country: 'pakistan' });
    this.setState({ mydata: this.state.data });




    //this.setState({})
  }
  onDelete() {
    this.state.data.pop({ country: 'pakistan' });
    this.setState({ delete: this.state.data });
  
  }

  render() {
    return (
      <>
        <h1>thi is listing</h1>
        <h2>{this.state.data.map((it) => <p>{it.country}</p>)}</h2>
        <button onClick={() => this.onhandler()}> load more</button>
        <button onClick={() => this.onDelete()}>Delete</button>
      </>
    )
  }
}
export default List;