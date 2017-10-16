import React from 'react';

import './App.css';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import SearchInput from './components/SearchInput';
import filterLocationList from './functions/FilterLocationList';
import Locations from './components/Locations';
// const API_LOCATIONS_URL = "http://uilennest.net/owlsnest/hiking/rest/"
const API_LOCATIONS_URL = "http://uilennest.net/homebase/datacenter/locations/"

const MAX_LOCATIONS = 1000


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredLocationResults: filterLocationList('',[],MAX_LOCATIONS),
            fetchedLocationList: [],
        };
    }

    // get the location list from the rest api
    fetchLocationList = () => {
        fetch(API_LOCATIONS_URL)
            .then(results => {
                return results.json();
            }).then(data => {
            let myData = data.results;
            this.setState({fetchedLocationList: myData})
            this.setState({
                filteredLocationResults: filterLocationList("", this.state.fetchedLocationList, MAX_LOCATIONS),
            });
        })
    }


    handleSearchChangeLocations = (event) => {
        console.log(event.target.value)
        this.setState({
            filteredLocationResults: filterLocationList(event.target.value.toUpperCase(), this.state.fetchedLocationList, MAX_LOCATIONS),
        });
    }


    // fetch the data from the hiking api
    componentWillMount() {
        console.log("componentWillMount()")
        this.fetchLocationList()
    }


    render() {
        console.log("App.render()")
        return (
            <div>
                <Navbar inverse fixedTop>
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">Where (16 oct 2017)</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                    </Grid>
                </Navbar>
                <Jumbotron>
                    <Grid>
                        <SearchInput changeSearchText={this.handleSearchChangeLocations}/>
                        <Locations data={this.state.filteredLocationResults}/>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default App;
