import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch';
import List from './List'

function App() {

 let data=[{
    country:'taiwan'
  },
  {
    country:'canada'
  },
  {
    country:'india'
  },
  {
    country:'dubai'
  },
  {
    country:'australia'
  },
]
  return (
    <div className="App">
      
    <Fetch/>
  <List mylist ={data}/>
    </div>
  );
}

export default App;
