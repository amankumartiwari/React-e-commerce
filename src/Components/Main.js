import React from "react";
//Temporarily store data here
const PostsData = [
  {
    name: "coding for beginners",
    price: "200",
    subject: "CPP",
    publications: "ABC",
    image:'https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg'
  },
  {
    name: "coding for students",
    price: "400",
    subject: "NODE",
    publications: "MNO",
    image:'https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg'
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    publications: "XYZ",
    image:'https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg'
  },
  {
    name: "JAVASRCIPT",
    price: "200",
    subject: "JavaScript",
    publications: "IJK",
    image:'https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg'
  },
  {
    name: "coding for beginners",
    price: "200",
    subject: "CPP",
    publications: "ABC",
  },
  {
    name: "Express with Node",
    price: "400",
    subject: "NODE",
    publications: "MNO",
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    publications: "ABC",
  },
  {
    name: "Advance JAVASRCIPT",
    price: "400",
    subject: "JavaScript",
    publications: "XYZ",
  }
  ]
  
  
  // Start App
  
  class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
     const {filters} = this.props
      let ans=[]
      this.state.posts.forEach( myFunction)
      function myFunction(item){
        let i=0;
              if( (filters.price==undefined || filters.price==null ) ){
                               i++;
              }else{
                  if(filters.price == item.price){
                                   i++;
                  }             
              }
              
              if( (filters.subject==undefined || filters.subject==null ) ){
                               i++;
              }else{
                  if(filters.subject == item.subject){
                                   i++;
                  }             
              }
              
              if( (filters.publications==undefined || filters.publications==null ) ){
                               i++;
              }else{
                  if(filters.publications == item.publications){
                                   i++;
                  }             
              }
              
              if(i==3){
                   ans.push(item);            
              }
              
}


      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            
          
           Object.keys(ans).map(key => <Card key={key} index={key} details={ans[key]}/>)
          
          }
      </div>
      </div>
    }
  }
  
  
  class Title extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
          <h1>Latest News</h1>
          <p>Covering March & April 2015</p>
          <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
        </div>
      </section>
    }
  }
  
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, name } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{name}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader name={this.props.details.name} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  
  
  export default Main