// Card.tsx
import './Card.css';

interface CardProps<T> {
  items?: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const Card = <T,>({ items = [], renderItem }: CardProps<T>) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div>
          {items.map((item, index) => (
            <div key={index} className="card-item">{renderItem(item, index)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
