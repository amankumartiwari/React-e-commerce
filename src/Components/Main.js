import React from "react";
//Temporarily store data here
const PostsData = [
  {
    name: "coding for beginners",
    price: "200",
    subject: "CPP",
    publications: "ABC",
  },
  {
    name: "coding for students",
    price: "400",
    subject: "NODE",
    publications: "MNO",
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    publications: "XYZ",
  },
  {
    name: "JAVASRCIPT",
    price: "200",
    subject: "JavaScript",
    publications: "ijk",
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
    publications: "mno",
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
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            //  this.state.posts.filter( val=> val.price="200").
          
           Object.keys(this.state.posts.filter( val=> val==this.props.filters)).map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          
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
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
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
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  
  
  export default Main