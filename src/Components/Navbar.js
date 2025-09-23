// import React, { Components } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";


// class Navbar extends Components {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicked: false, // Tracks the menu state
//     };
//   }

//   // Toggle menu state
//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };

//   render() {
//     return (
//       <nav>
      
//         <div>
//           <ul id="navbar" className={this.state.clicked ? "active" : ""}>
//             <li>
//               <a href="/" onClick={this.handleClick}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <Link to="/SignupPage" onClick={this.handleClick}>
//                 Assessment
//               </Link>
//             </li>
//             <li>
//               <Link to="/ContactUs" onClick={this.handleClick}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div id="mobile" onClick={this.handleClick}>
//           <i
//             className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//           ></i>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  // Toggle menu state
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav>
        <div>
          <ul id="navbar" className={this.state.clicked ? "active" : ""}>
            <li>
              <Link to="/" onClick={this.handleClick}>
                Home
              </Link>
            </li>
            {/* <li> */}
              {/* <Link to="/SignupPage" onClick={this.handleClick}> */}
                {/* Assessment */}
              {/* </Link> */}
            {/* </li> */}
            <li>
              <Link to="/ContactUs" onClick={this.handleClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div id="mobile" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
