import './App.css';
import NavBar from './components/nav';
import Card from './components/card';
import data from './data'
function App() {
  const cards = data.map(info => {
    return (
      <Card
      key={info.id}
      {...info}
      />
    )
  }) 
  return (
    <div className='main'>
      <NavBar />
      <section>
        {cards}
      </section>
      
    </div>
  );
}

export default App;
