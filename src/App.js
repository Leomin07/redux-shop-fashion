import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import Footer from './components/Footer';
import SearchScreen from './screens/SearchScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />;
        <Route exact path="/product/:id" component={ProductScreen} />;
        <Route exact path="/cart" component={CartScreen} />;
        <Route exact path="/order" component={OrderScreen} />;
        <Route exact path="/order/history" component={OrderHistoryScreen} />;
        <Route exact path="/login" component={SignInScreen} />;
        <Route exact path="/register" component={SignUpScreen} />;
        <Route exact path="/search/:keyword" component={SearchScreen} />;
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
