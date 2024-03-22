import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  let myObj = {
    productName: "MacBook",
    productDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
  }
let newArr=[1,2,3,5]

  return (
    <div className="App">
      <header className='content-center'>
        <h1 className='bg-blue-300 text-black
       p-4 rounded-xl mb-4'>Tailwind test hello
        </h1>
        <div className='flex flex-wrap mr-4 content-center'>
          <Card productName="MacBook" btnText="buy"></Card>
          <Card productName="Asus Tuf Gaming" btnText="buy now"></Card>
          <Card productName="Zen book" btnText="buy now sale"></Card>
          <Card productName="Zen book pro"></Card>
          <Card productName="lenvo "></Card>

        </div>
      </header>
    </div>
  );
}

export default App;
