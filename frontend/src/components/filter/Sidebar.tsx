import { useState } from 'react';
import { H4 } from '../typography/H4.tsx';
import FilterComponent from './FilterComponent.tsx';
import FilterCheckbox from './FilterCheckbox.tsx';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  const [availability, setAvailability] = useState([]);
  const [genre, setGenre] = useState([]);
  const [author, setAuthor] = useState([]);
  const [language, setLanguage] = useState([]);
  const [publisher, setPublisher] = useState([]);
  const [rating, setRating] = useState([]);

  const handleCheckboxChange = (setState, value) => {
    setState(prevState =>
      prevState.includes(value)
        ? prevState.filter(item => item !== value)
        : [...prevState, value],
    );
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (availability.length) params.append('availability', availability.join(','));
    if (genre.length) params.append('genre', genre.join(','));
    if (author.length) params.append('author', author.join(','));
    if (language.length) params.append('language', language.join(','));
    if (publisher.length) params.append('publisher', publisher.join(','));
    if (rating.length) params.append('rating', rating.join(','));

    navigate(`/filter?${params.toString()}`);
  };

  return (
    <div className="bg-white p-5 flex mt-1 w-1/6 flex-col justify-between">
      <H4>Filter</H4>
      <FilterComponent title={'Availability'}>
        <FilterCheckbox label={'Available'} onChange={() => handleCheckboxChange(setAvailability, 'Available')} />
        <FilterCheckbox label={'Borrowed'} onChange={() => handleCheckboxChange(setAvailability, 'Borrowed')} />
      </FilterComponent>
      <FilterComponent title={'Genre'}>
        <FilterCheckbox label={'Horror'} onChange={() => handleCheckboxChange(setGenre, 'Horror')} />
        <FilterCheckbox label={'Sci-Fi'} onChange={() => handleCheckboxChange(setGenre, 'Sci-Fi')} />
        <FilterCheckbox label={'Fantasy'} onChange={() => handleCheckboxChange(setGenre, 'Fantasy')} />
        <FilterCheckbox label={'Detective'} onChange={() => handleCheckboxChange(setGenre, 'Detective')} />
      </FilterComponent>
      <FilterComponent title={'Author'}>
        <FilterCheckbox label={'Stephen King'} onChange={() => handleCheckboxChange(setAuthor, 'Stephen King')} />
        <FilterCheckbox label={'Isaac Asimov'} onChange={() => handleCheckboxChange(setAuthor, 'Isaac Asimov')} />
        <FilterCheckbox label={'J.R.R. Tolkien'} onChange={() => handleCheckboxChange(setAuthor, 'J.R.R. Tolkien')} />
        <FilterCheckbox label={'Agatha Christie'} onChange={() => handleCheckboxChange(setAuthor, 'Agatha Christie')} />
      </FilterComponent>
      <FilterComponent title={'Language'}>
        <FilterCheckbox label={'English'} onChange={() => handleCheckboxChange(setLanguage, 'English')} />
        <FilterCheckbox label={'Spanish'} onChange={() => handleCheckboxChange(setLanguage, 'Spanish')} />
        <FilterCheckbox label={'French'} onChange={() => handleCheckboxChange(setLanguage, 'French')} />
        <FilterCheckbox label={'German'} onChange={() => handleCheckboxChange(setLanguage, 'German')} />
      </FilterComponent>
      <FilterComponent title={'Publisher'}>
        <FilterCheckbox label={'Penguin Random House'}
                        onChange={() => handleCheckboxChange(setPublisher, 'Penguin Random House')} />
        <FilterCheckbox label={'HarperCollins'} onChange={() => handleCheckboxChange(setPublisher, 'HarperCollins')} />
        <FilterCheckbox label={'Simon & Schuster'}
                        onChange={() => handleCheckboxChange(setPublisher, 'Simon & Schuster')} />
        <FilterCheckbox label={'Macmillan'} onChange={() => handleCheckboxChange(setPublisher, 'Macmillan')} />
      </FilterComponent>
      <FilterComponent title={'Rating'}>
        <FilterCheckbox label={'⭐️⭐️⭐️⭐️⭐️'} onChange={() => handleCheckboxChange(setRating, '5')} />
        <FilterCheckbox label={'⭐️⭐️⭐️⭐️'} onChange={() => handleCheckboxChange(setRating, '4')} />
        <FilterCheckbox label={'⭐️⭐️⭐️'} onChange={() => handleCheckboxChange(setRating, '3')} />
      </FilterComponent>
      <button type="button" onClick={handleSearch}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit
      </button>
    </div>
  );
}