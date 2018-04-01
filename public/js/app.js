const app = angular.module("MovieApp", []);

app.controller("MainController", ["$http", function($http) {
    this.appName = "MyMovies";

    this.baseURL = "http://www.omdbapi.com/?";
    this.apikey = "apikey=" + "dc292b86";
    this.query = "s=";
    // this.movies = "";
    this.searchURL = this.baseURL + this.apikey + "&" + this.query;

    // console.log(this.searchURL);

    this.movies = [];

    this.getMovies = () => {
        $http({
            method: "GET",
            url: this.searchURL + this.movieTitle
        }).then((response) => {
            this.movies = response.data.Search;
            console.log(this.movies);
        }, (error) => {
            console.error(error);
        }).catch((err) => console.error('Catch: ', err));
    };

    this.myMovies = [];

    this.getMyMovies = () => {
        $http({
            method: "GET",
            url: "/movies"
        }).then((response)=>{
            this.myMovies = response.data;
        }, (error)=>{
            console.log("error");
        });
    };

    this.addMovie = (movie) => {
        $http({
            method: "POST",
            url: "/movies",
            data: {
                name: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            }
        }).then((response) => {
            this.myMovies.push(response.data);
            this.getMyMovies();
            console.log(this.myMovies);
        }, (error) => {
            console.error(error);
        }).catch((err) => console.error('Catch: ', err));
    };

    this.deleteMovie = (movie) => {
        $http({
            method: "DELETE",
            url: "/movies/" + movie._id
        }).then((response) => {
            this.getMyMovies();
        });
    };

    this.getMyMovies();

}]); //closes app.controller
