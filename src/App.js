import {useState, useEffect} from 'react';
import DropDown from './components/drop-down/drop-down.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  
  useEffect(() => {
    fetch('https://guileless-sopapillas-50e236.netlify.app/articles.json')
    .then((response) => response.json())
    .then((data) => setData(data))
  }, []);

  useEffect (() => {
    let categoriesSet = new Set()
    categoriesSet.add('')
    data.forEach((el)=> {
      categoriesSet.add(el.category)
    })
    const categoriesArray = [...categoriesSet]
    setCategories(categoriesArray )
  }, [data]);

  const handleSelect = (event) => {
    setCategory(event.target.value)
  };
 
  const filteredData = data.filter((el) => {
   return el.category.includes(category)
  });

  return(
    <div className='App'>
      <h1 className ='app-title'>EBSCO Interview Project</h1>
      <DropDown
        onChangeHandler = {handleSelect} 
        categories ={categories}
      />
     <CardList
        filteredData = {filteredData}
     />
    </div>
  );
};

export default App;
