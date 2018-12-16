import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import NavBar from './NavBar';
import AboutMets from './AboutMets';
import PitchersOnly from './PitchersOnly';
import Catchers from './Catchers';
import OnePitcher from './OnePitcher';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pitchers: {
        'Tyler Bashlor': {
          'stats': [
            '24 games',
            '0-3 record',
            '4.22 era',
            '1.19 WHIP',
            '32 IP',
            '25 SO'
        ],
      },
        'Jacob Degrom': {
          'stats': [
            '32 games',
            '10-9 record',
            '1.70 era',
            '0.91 WHIP',
            '217 IP',
            '269 SO'
        ],
      },
        'Edwin Diaz': {
          'stats': [
            '73 games',
            '0-4',
            '1.96 era',
            '0.79 WHIP',
            '73.1 IP',
            '124 SO'
        ],
      },
        'Kyle Dowdy': {
          'stats': [
            'FRESH MEAT ROOKIE'
        ],
      },
        'Chris Flexen': {
          'stats': [
            '4 games',
            '0-2 record',
            '12.79 era',
            '3.16 WHIP',
            '6.1 IP',
            '3 SO'
        ],
      },
        'Drew Gagnon': {
          'stats': [
            '5 games',
            '2-1 record',
            '5.25 era',
            '1.67 WHIP',
            '12 IP',
            '8 SO'
        ],
      },
        'Robert Gsellman': {
          'stats': [
            '68 games',
            '6-3 record',
            '4.28 era',
            '1.30 WHIP',
            '80 IP',
            '70 SO'
        ],
      },
        'Eric Hanhold': {
          'stats': [
            '3 games',
            '0-0',
            '7.71 era',
            '2.14 WHIP',
            '2.1 IP',
            '2 SO'
        ],
      },
        'Franklyn Kilome': '',
          'stats': [
            'FRESH MEAT ROOKIE'
        ],
        'Seth Lugo': '',
          'stats': [
            '54 games',
            '3-4 record',
            '2.66 era',
            '1.08 WHIP',
            '101.1 IP',
            '103 SO'
        ],
        'Steven Matz': '',
          'stats': [
            '30 games',
            '5-11',
            '3.97 era',
            '1.25 WHIP',
            '154 IP',
            '152 SO'
        ],
        'Corey Oswalt': '',
          'stats': [
            '17 games',
            '3-3 record',
            '5.85 era',
            '1.38 WHIP',
            '64.2 IP',
            '45 SO'
        ],
        'Tim Peterson': '',
          'stats': [
            '22 games',
            '2-2 record',
            '6.18 era',
            '1.23 WHIP',
            '27.2 IP',
            '25 SO'
        ],
        'Jacob Rhame': '',
          'stats': [
            '30 games',
            '1-2 record',
            '5.85 era',
            '1.42 WHIP',
            '32.1 IP',
            '28 SO'
        ],
        'Paul Sewald': '',
          'stats': [
            '46 games',
            '0-7 record',
            '6.07 era',
            '1.51 WHIP',
            '56.1 IP',
            '58 SO'
        ],
        'Drew Smith': '',
          'stats': [
            '27 games',
            '1-1 record',
            '3.54 era',
            '1.43 WHIP',
            '28 IP',
            '18 SO'
        ],
        'Noah Syndergaard': '',
          'stats': [
            '25 games',
            '13-4',
            '3.03 era',
            '1.21 WHIP',
            '154.1 IP',
            '155 SO'
        ],
        'Jason Varga': '',
          'stats': [
            '20 games',
            '7-9 record',
            '5.77 era',
            '1.41 WHIP',
            '92 IP',
            '84 SO'
        ],
        'Bobby Wahl': {
          'stats': [
            '7 games',
            '0-1 record',
            '10.13 era',
            '2.44 WHIP',
            '5.1 IP',
            '7 SO'
        ],
      },
        'Zack Wheeler': {
          'stats': [
            '29 games',
            '12-7 record',
            '3.31 era',
            '1.12 WHIP',
            '182.1 IP',
            '179 SO'
        ],
      },
        'Daniel Zamora': {
          'stats': [
            '16 games',
            '1-0 record',
            '3.00 era',
            '1.00 WHIP',
            '9 IP',
            '16 SO'
        ]
      }
    }
  };   
    render() {
      return (
        <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutMets} />
          <Route path="/pitchers" render={(props) => {
            return <PitchersOnly pitcherList={Object.keys(this.state.pitchers)} {...props} />
          }} />

        </div>
      </Router>
    );
  }
}




export default App;