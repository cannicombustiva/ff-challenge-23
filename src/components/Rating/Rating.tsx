import ReactStars from 'react-rating-stars-component';

type IProps = {
  rating: number;
}

export const Rating = ({ rating }: IProps) => {
  const dataRating = {
    size: 30,
    value: rating,
  };

  return (
    <div className="App">
      <ReactStars {...dataRating} />
    </div>
  );
};
