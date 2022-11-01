import './drop-down.styles.css';

const DropDown = ({categories, onChangeHandler}) => {
    return(
        <div className='drop-down'>
        <span> Filter By: </span>
        <select className ='drop-down-menu'onChange={onChangeHandler}> 
          {categories.map((option) => (
            <option className='drop-down-content'> {option}</option>
          ))}
        </select>
      </div>
    )
};

export default DropDown; 