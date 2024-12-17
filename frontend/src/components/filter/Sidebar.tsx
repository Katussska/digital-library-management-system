import { H4 } from '../typography/H4.tsx';
import FilterComponent from './FilterComponent.tsx';
import FilterCheckbox from './FilterCheckbox.tsx';

export default function Sidebar() {
  return (
    <div className="bg-white p-5 flex mt-1 w-1/6 flex-col  justify-between ">
      <H4>Filter</H4>
      <FilterComponent title={'Availability'}>
        <FilterCheckbox label={'Available'} />
        <FilterCheckbox label={'Borrowed'} />
      </FilterComponent>
      <FilterComponent title={'Genre'}>
        <FilterCheckbox label={'Horror'} />
        <FilterCheckbox label={'Sci-Fi'} />
        <FilterCheckbox label={'Fantasy'} />
        <FilterCheckbox label={'Detective'} />
      </FilterComponent>
      <FilterComponent title={'Author'}>
        <FilterCheckbox label={'Stephen King'} />
        <FilterCheckbox label={'Isaac Asimov'} />
        <FilterCheckbox label={'J.R.R. Tolkien'} />
        <FilterCheckbox label={'Agatha Christie'} />
      </FilterComponent>
      <FilterComponent title={'Language'}>
        <FilterCheckbox label={'English'} />
        <FilterCheckbox label={'Spanish'} />
        <FilterCheckbox label={'French'} />
        <FilterCheckbox label={'German'} />
      </FilterComponent>
      <FilterComponent title={'Publisher'}>
        <FilterCheckbox label={'Penguin Random House'} />
        <FilterCheckbox label={'HarperCollins'} />
        <FilterCheckbox label={'Simon & Schuster'} />
        <FilterCheckbox label={'Macmillan'} />
      </FilterComponent>
      <FilterComponent title={'Rating'}>
        <FilterCheckbox label={'⭐️⭐️⭐️⭐️⭐️'} />
        <FilterCheckbox label={'⭐️⭐️⭐️⭐️'} />
        <FilterCheckbox label={'⭐️⭐️⭐️'} />
      </FilterComponent>
      <button type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit
      </button>
    </div>

  );
}