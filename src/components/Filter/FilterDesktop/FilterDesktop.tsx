import Button from '@/components/Button';

import s from './FilterDesktop.module.css';

interface IProps {
  categories?: string[];
  brands?: string[];
  onChange: (filter: { brand: string; category: string }) => void;
}

export const FilterDesktop = ({
  categories = ['smartphones', 'laptops'],
  brands = ['Apple', 'Samsung', 'Xiaomi'],
  onChange,
}: IProps) => (
  <>
    <div className={s.filter}>
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
    <div className={s.spacer} />
  </>
);
