import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <a href='http://localhost:3000/'><img src={Logo} alt="Petlover" /></a>
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          <NavLink
            exact to="/"
            className="nav-link"
            activeClassName='nav-link-active'
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                <NavLink
                  exact to={`/${type._links.self.href.split('/').pop()}`}
                  key={type.name}
                  className="nav-link"
                  activeClassName='nav-link-active'
                >
                  {type.name}s
                </NavLink>{' '}
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;