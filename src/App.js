import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [show, setShow] = useState(3);

  const showMore = () => {
    setShow(show => show += 3)
  }

  const getMeat = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
      .then((response) => response.json())
      .then((data) => {
        setDataApi(data.meals);
        console.log(dataApi.meals);
      });
  };



  useEffect(() => {
    getMeat()

  }, []);



  return (
    <>
      <div className="App">
        <h1 className='header'>British Meals <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png' /></h1>
        <div className='container'>
          {dataApi.slice(0, show).map(item => (
            <div className='card'>
              <div className='image'>
                <img src={item.strMealThumb} />
              </div>
              <p>{item.strMeal}</p>
            </div>
          ))}
          <button onClick={showMore}>Click for More Food</button>
        </div>
      </div>
    </>
  );
}

export default App;
