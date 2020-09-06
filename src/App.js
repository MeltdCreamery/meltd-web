import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Menu from "./views/Menu";
import ShoppingCart from "./views/ShoppingCart";
import Checkout from "./views/Checkout";
import About from "./views/About";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav className="main-navbar">
                        <div className="main-navbar-left">
                            <Link to="/shop">Shop</Link>
                            <Link to="/about">Our Story</Link>
                        </div>
                        <div className="main-navbar-center">
                            <Link to="/">MELTD</Link>
                        </div>
                        <div className="main-navbar-right">
                            <Link to="/cart">
                                <ShoppingCartOutlinedIcon />
                            </Link>
                        </div>
                    </nav>

                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/shop">
                            <Menu />
                        </Route>
                        <Route path="/cart">
                            <ShoppingCart />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <div className="app-footer">
                <div className="app-footer-detail">
                    <div>Meltd Creamery</div>
                    <div>meltdcreamery@gmail.com</div>
                </div>
                <div className="app-footer-social">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
        </div>
    );
};

export default App;
