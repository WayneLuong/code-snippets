
//-----------APP.JS-------------------
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

      <Router>
        <div className="App">
          <Navbar />
          <h1>Home</h1>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/users" component={Users} />
            {/* Passing params in links */}
            <Route exact path="/about/:id" component={AddUser} />
            <Route component={NotFound} /> {/* Default 404 redirect page */}
          </Switch>
        </div>
      </Router>
     
//-----------Navbar.JS-------------------

import { Link } from "react-router-dom";

     <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          {/* Passing params */}
          <Link to={`/about/${id}`}>Add</Link>
        </li>
      </ul>
      
//-----------Navbar.JS-------------------
    const {id} = this.props.match.params


