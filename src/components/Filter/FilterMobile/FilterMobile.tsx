import { useCallback, useState } from 'react';

import Button from '@/components/Button';

import ArrowDown from './arrow-down.svg';
import ArrowUp from './arrow-up.svg';
import FilterIcon from './filter.svg';
import s from './FilterMobile.module.css';

interface IProps {
  categories?: string[];
  brands?: string[];
  onChange: (filter: { brand: string; category: string }) => void;
}

export const FilterMobile = ({
  categories = ['smartphones', 'laptops'],
  brands = ['Apple', 'Samsung', 'Xiaomi'],
  onChange,
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglefilter = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);
  return (
    <>
      <div className={s.container} tabIndex={0} onClick={togglefilter} onKeyDown={togglefilter} role="button">
        <div>
          <FilterIcon />
          <span>Filter</span>
        </div>
        <div>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
      {isOpen && (
        <div className={s.content}>
          <div className={s.filterSectionWrapper}>
            <Button
              label="Categoria"
              onClick={() => onChange({ brand: '', category: '' })}
              type="filter"
              highlighted
            />
            <div className={s.innerFilterSectionWrapper}>
              {categories.map(category => (
                <Button
                  label={category}
                  onClick={() => onChange({ brand: '', category })}
                  type="filter"
                  highlighted={false}
                />
              ))}
            </div>
          </div>
          <div className={s.filterSectionWrapper}>
            <Button
              label="Marca"
              onClick={() => onChange({ brand: '', category: '' })}
              type="filter"
              highlighted
            />
            <div className={s.innerFilterSectionWrapper}>
              {brands.map(brand => (
                <Button
                  label={brand}
                  onClick={() => onChange({ brand, category: '' })}
                  type="filter"
                  highlighted={false}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
