import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import SortingItem from '../sort-item/sort-item';
import {SortOptions} from '../../const';
import {getSortValue} from '../../store/hotels-data/selectors';
import {sortingCityAction, sortValueAction} from '../../store/hotels-data/hotels-data';
import classNames from 'classnames';

function SortList(): JSX.Element {

  const [isFormOpened, setIsFormOpened] = useState(false);

  const dispatch = useAppDispatch();

  const currentSort = useAppSelector(getSortValue);

  const clickHandler = () => {
    setIsFormOpened(!isFormOpened);
  };

  const onSortingClick = (value: string) => {
    dispatch(sortValueAction(value));
    dispatch(sortingCityAction());
    setIsFormOpened(false);
  };

  const optionClass = classNames('places__options places__options--custom', {'places__options--opened': isFormOpened});

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={clickHandler} className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={optionClass}>
        {Object.values(SortOptions).map((value) => (
          <SortingItem key={value} onClick={onSortingClick} value={value} sortValue={''}/>
        ))}
      </ul>
    </form>
  );
}

export default SortList;
