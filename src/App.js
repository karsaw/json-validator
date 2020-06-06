import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import MyNav from './NavBar'
import Home from './Home'

class App extends React.Component {
  componentDidMount() {
    document.title = 'JSON BOSS'
  }
  render() {
    return (
      <Grid >
        <Grid.Row columns={1}>
        <Grid.Column width={16}>
          <MyNav />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={16}>
        <Grid.Column width={16}>
        <div className='main-container' >
          <Home />
        </div>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )

  }
}

export default App;
