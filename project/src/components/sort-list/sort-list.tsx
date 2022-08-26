import {store} from '../../store';
import {useAppSelector} from '../../hooks';
import SortOption from '../sort-option/sort-option';
import {clickSortMenuAction} from '../../store/action';
import {SortOptions} from '../../const';
import classNames from 'classnames';

const tabIndexValue = 0;

function SortList(): JSX.Element {

  const isSortMenuOpened = useAppSelector((state) => state.isSortMenuOpened);

  const placesListClass = classNames('places__options places__options--custom', {'places__options--opened': isSortMenuOpened});

  const activeSortOption = useAppSelector((state) => state.activeSortOption);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={tabIndexValue} onClick={() => {
        store.dispatch(clickSortMenuAction());
      }}
      >
        {activeSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={placesListClass}>
        {
          SortOptions.map((sortOption) => <SortOption key={sortOption} sortOption={sortOption}/>)
        }
      </ul>
    </form>
  );
}

export default SortList;
