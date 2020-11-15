import './App.css';
import Row from './Row';
import request from './request'

function App() {
  return (
    <div className="App">
      <Row title ="NETFLIX ORIGINALS"  fetchUrl={request.netflixOrgin}/>
      <Row title = "Trending Now" fetchUrl={request.trending}/>
      <Row title = "Top Rated" fetchUrl={request.topRated}/>
      <Row title = "Action" fetchUrl={request.actionMovie}/>
      <Row title = "Comedy" fetchUrl={request.comedy}/>
      <Row title = "Horro" fetchUrl={request.horror}/>
      <Row title = "Romance" fetchUrl={request.romance}/>
      <Row title = "Documentry" fetchUrl={request.document}/>
     
    </div>
  );
}

export default App;
