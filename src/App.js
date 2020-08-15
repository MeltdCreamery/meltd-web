import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Menu from "./views/Menu";
import ShoppingCart from "./views/ShoppingCart";
import Checkout from "./views/Checkout";
import Contact from "./views/Contact";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div>Hello!</div>

            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li>
                                <Link to="/cart">Cart</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/menu">
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
        </div>
    );
};

export default App;
