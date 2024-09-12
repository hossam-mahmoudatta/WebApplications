import React,{Component} from 'react';

export class Department extends Component{

  constructor(props){
    super(props);
    this.state = {deps:[], addModalShow:false, editModalShow:false}
  }

  refreshList(){
    fetch(process.env.REACT_APP_API + 'department')
    .then(response => response.json())
    .then(data => {
        this.setState({deps:data});
    });
  }

  componentDidMount(){
    this.refreshList();
  }

  componentDidUpdate(){
    this.refreshList();
  }


  render(){
    return(
      <div className="mt-5 d-flex justify-content-left">
        This is Department page.
      </div>
    )
  }
}