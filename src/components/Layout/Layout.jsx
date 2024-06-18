import { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Backtop from "../backtop/Backtop";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.props.children}
        <Footer />
        <Backtop />
      </Fragment>
    );
  }
}

export default Layout;
