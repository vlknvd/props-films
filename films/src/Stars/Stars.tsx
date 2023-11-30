import Star from "./Star";

type PropTypes = {
    count: number
}

function Stars({count}: PropTypes) {
    const validCount = count > 5 || count < 1;
    const countStars = [...new Array(count)];
  
    return validCount ? null : (
      <ul className="card-body-stars">
        {countStars.map(() => (
          <li className="card-star" key={Math.random()}>
            <Star />
          </li>
        ))}
      </ul>
    );
  };

export default Stars