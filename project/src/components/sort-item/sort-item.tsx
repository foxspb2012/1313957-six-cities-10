import classNames from 'classnames';

type SortingItemProps = {
  value: string;
  sortValue: string;
  onClick: (value: string) => void;
}

function SortingItem({onClick, sortValue, value}: SortingItemProps): JSX.Element {
  const sortingClass = classNames ('places__option',
    {
      'places__option--active': value === sortValue
    });

  return(
    <li
      className={sortingClass}
      tabIndex={0}
      onClick={() => onClick(value)}
    >
      {value}
    </li>
  );
}

export default SortingItem;
