import './card.styles.css';

const Card = ({data}) => {
    const {title, image, description} = data
    return (
        <div className='card'>
               <img
               alt={title}
                src ={image}
              />
              <p1>{description}</p1>
            </div>
    )
};

export default Card; 