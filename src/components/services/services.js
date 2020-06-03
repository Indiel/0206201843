import React from 'react';
import './services.css';

const ServicesItem = ({ name, amount, width }) => {
  const style = {
    width: `${width}%`,
    background: amount > 10 ? '#B1E19B' : '#ACE2F8'
  };

  return (
    <li className="services-item">
      <div className="services-item__name">
        <div className="services-item__color" style={style}></div>
        {name}
      </div>
      <div className="services-item__sum">{amount}</div>
    </li>
  );
};

const Services = ({ services }) => {
  let max = 0;
  let sum = 0;

  function addMax() {
    services.map((item) => {
      sum += item.amount
      if (item.amount > max) {
        return max = item.amount;
      }
    });

    return services.map((item, i) => {
      const width = Math.floor(Number(item.amount) * 100 / max);
      return (
        <ServicesItem key={i} name={item.name} amount={item.amount} width={width} />
      );
    })
  };
  
  const items = services 
    ? addMax()
    : undefined;

  return (
    <section className="services wrapper">
      <ul className="services__list">
        <li className="services-item services-item__top">
          <div className="services-item__name"></div>
          <div className="services-item__sum">Услуг</div>
        </li>
        {items}
        <li className="services-item services-item__bottom">
          <div className="services-item__name">Всего</div>
          <div className="services-item__sum">{sum}</div>
        </li>
        <li className="services-item__sum"></li>
      </ul>
    </section>
  );
};

export default Services;
