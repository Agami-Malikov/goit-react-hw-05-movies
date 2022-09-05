import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReview } from 'shared/api/FetchMovieApi';

import s from './reviewsPage.module.css';

const ReviewPage = () => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const { results } = await getMovieReview(movieId);
        setReview(results);
      } catch (error) {
        setError(error);
      }
    };
    fetchReview();
  }, []);

  const items = review.map(({ content, author, id }) => (
    <li className={s.item} key={id}>
      <p className={s.author}>{author}</p>
      <p className={s.post}>{content}</p>
    </li>
  ));

  return <ul className={s.list}>{items}</ul>;
};

export default ReviewPage;
