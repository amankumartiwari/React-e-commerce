import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
//Temporarily dummy data here
const PostsData = [
  {
    name: "coding for beginners",
    price: "200",
    subject: "NODE",
    publications: "ABC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg",
    description:
      "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  },
  {
    name: "coding for students",
    price: "400",
    subject: "NODE",
    publications: "MNO",
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4889/9781488909924.jpg",
    description:
      "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    publications: "XYZ",
    image:
      "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    description:
      "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
  },
  {
    name: "JAVASRCIPT",
    price: "300",
    subject: "JavaScript",
    publications: "IJK",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "coding for beginners",
    price: "200",
    subject: "CPP",
    publications: "ABC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "Express with Node",
    price: "400",
    subject: "NODE",
    publications: "MNO",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4889/9781488909924.jpg",
    publications: "ABC",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "Advance JAVASRCIPT",
    price: "400",
    subject: "JavaScript",
    publications: "XYZ",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "coding for beginners",
    price: "300",
    subject: "CPP",
    publications: "ABC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg",
    description:
      "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  },
  {
    name: "coding for students",
    price: "400",
    subject: "NODE",
    publications: "MNO",
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4889/9781488909924.jpg",
    description:
      "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    publications: "XYZ",
    image:
      "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    description:
      "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
  },
  {
    name: "JAVASRCIPT",
    price: "200",
    subject: "JavaScript",
    publications: "IJK",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "coding for beginners",
    price: "200",
    subject: "REACT",
    publications: "ABC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "Express with Node",
    price: "300",
    subject: "NODE",
    publications: "MNO",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4889/9781488909924.jpg",
    publications: "IJK",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "Advance JAVASRCIPT",
    price: "400",
    subject: "JavaScript",
    publications: "XYZ",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "coding for beginners",
    price: "200",
    subject: "CPP",
    publications: "ABC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg",
    description:
      "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  },
  {
    name: "coding for students",
    price: "400",
    subject: "NODE",
    publications: "MNO",
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4889/9781488909924.jpg",
    description:
      "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    publications: "XYZ",
    image:
      "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    description:
      "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
  },
  {
    name: "JAVASRCIPT",
    price: "200",
    subject: "JavaScript",
    publications: "IJK",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "coding for beginners",
    price: "200",
    subject: "CPP",
    publications: "IJK",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "Express with Node",
    price: "200",
    subject: "NODE",
    publications: "MNO",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
  },
  {
    name: "React heros",
    price: "300",
    subject: "REACT",
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4889/9781488909924.jpg",
    publications: "ABC",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "Advance JAVASRCIPT",
    price: "400",
    subject: "CPP",
    publications: "XYZ",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51gFdWHOsoL._SX331_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
  {
    name: "JAVASRCIPT",
    price: "200",
    subject: "JavaScript",
    publications: "MNO",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51lxN5ltLBL._SX258_BO1,204,203,200_.jpg",
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
  },
];

// Start App

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {},
    };
  }
  componentWillMount() {
    this.setState({
      posts: PostsData,
    });
  }

  render() {
    const { filters } = this.props;
    let ans = [];
    this.state.posts.forEach(myFunction);
    function myFunction(item) {
      let i = 0;
      if (filters.price === undefined || filters.price === null) {
        i++;
      } else {
        if (filters.price === item.price) {
          i++;
        }
      }

      if (filters.subject === undefined || filters.subject === null) {
        i++;
      } else {
        if (filters.subject === item.subject) {
          i++;
        }
      }

      if (filters.publications === undefined || filters.publications === null) {
        i++;
      } else {
        if (filters.publications === item.publications) {
          i++;
        }
      }

      if (i === 3) {
        ans.push(item);
      }
    }

    return (
      <div>
        <header className="app-header"></header>
        {/* <Title /> */}
        <div className="row" id="app-card-list">
          {Object.keys(ans).map((key) => (
            <CardExample key={key} index={key} details={ans[key]} />
          ))}
        </div>
      </div>
    );
  }
}

const CardExample = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage
          className="img-fluid"
          height="400px"
          src={props.details.image}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{props.details.name}</MDBCardTitle>
          <MDBCardText>{props.details.description} </MDBCardText>
          <MDBBtn href="#"> RS {props.details.price}/-</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Main;
