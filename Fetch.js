import Reach from 'react';

class Fetch extends Reach.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            //Data: [],
            index: 0,
        }


    }

    componentDidMount() {
        // fetch('https://animechan.vercel.app/api/random').then((response) => {
        //     console.log(response)
        //     return response.json()
        // }).then(data => {
        //     console.log(typeof data);
        //     this.setState({ data: data })
        // })
    }
    handleChange() {
        //  value = value + this.state.counter;
        //   this.setState({counter:value},()=>
        //   {  var  listing = this.state.data.slice(0,this.state.counter)
        //this.setState({data:listing})

        fetch('https://animechan.vercel.app/api/quotes?title=naruto&page=' + this.state.index).then((response) => {
            return response.json()
        }).then(item => {



            item = this.state.data.concat(item);
            console.log(item);
            this.setState({ data: item, index: this.state.index + 1 })
            //this.setState({ data: item })

            //this.setState({data:item,index:this.state.index+1})
        });
    }



    render() {
        let { data } = this.state;

        return (
            <div>
                {
                    data.map((it) => <p>{it.anime}</p>)
                }
                <button onClick={() => this.handleChange()} >Load More
                    {/* {
                 this.state.data.map((it)=>
                     <p>{it.anime}</p>
                 )
             } */}

                </button>

            </div>

        )
    }
}

export default Fetch;