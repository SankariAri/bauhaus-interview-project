import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({filteredData}) => {
    return (
        <div className='card-list'>
        {filteredData.map((el)=> {
          return (
            <Card data={el}/>
          )
        })}
      </div>
    )
};

export default CardList;