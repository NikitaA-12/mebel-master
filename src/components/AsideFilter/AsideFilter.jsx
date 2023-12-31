import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import FilterSelect from '../FilterSelect/FilterSelect';
import RangeSlider from './range';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const AsideFilter = ({ sort, setSort, category, setCategory, slider, setSlider }) => {
  const colors = ['red', 'green', 'blue'];
  const resetFilter = () => {
    setSort('');
    setCategory('');
    setSlider([0, 30000]);
  };

  return (
    <aside className="catalog__aside">
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Раздел</h2>
        <FilterSelect
          title="Категория"
          state={category}
          setState={setCategory}
          array={[
            'Барные стулья',
            'Диваны',
            'Двухспальные кровати',
            'Буфеты',
            'Комоды',
            'Журнальные столы',
            'Письменные столы',
            'Шкафы',
            'Детский диван',
          ]}
        />
        <FilterSelect
          title="Сортировать"
          state={sort}
          setState={setSort}
          array={['asc', 'desc', 'rate']}
        />
      </div>
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Цена</h2>

        <RangeSlider />

        <div className="catalog__aside-content__sort">
          <div className="catalog__aside-price">{slider[0]} ₽</div>
          <span>
            <svg
              width="19"
              height="2"
              viewBox="0 0 19 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="19" height="2" fill="#414141" />
            </svg>
          </span>
          <div className="catalog__aside-price">{slider[1]} ₽</div>
        </div>
      </div>
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Цвет</h2>

        <div className="catalog__aside-content__colors">
          {colors.map((item, idx) => (
            <div key={idx} className="catalog__aside-colors" style={{ background: item }}>
              s
            </div>
          ))}
        </div>
      </div>
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Бренд</h2>
        <div className="catalog__aside-checks">
          <Checkbox {...label} />
          <Checkbox {...label} />
          <Checkbox {...label} />
        </div>
      </div>
      <Button variant="contained" onClick={resetFilter}>
        Сбросить
      </Button>
    </aside>
  );
};

export default AsideFilter;
