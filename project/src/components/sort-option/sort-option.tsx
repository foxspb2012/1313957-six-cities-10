import {store} from '../../store';
import {useAppSelector} from '../../hooks';
import {changeSortTypeAction} from '../../store/action';
import classNames from 'classnames';

const tabIndexValue = 0;

type SortOptionProps = {
  sortOption: string;
};

function SortOption({sortOption}: SortOptionProps): JSX.Element {

  const isActive = useAppSelector((state) => state.activeSortOption === sortOption);

  const placesClass = classNames('places__option', {'places__option--active' : isActive} );

  const onSortOptionClick = () => store.dispatch(changeSortTypeAction(sortOption));

  return (
    <li className={placesClass} tabIndex={tabIndexValue} onClick={onSortOptionClick}>
      {sortOption}
    </li>
  );
}

export default SortOption;
