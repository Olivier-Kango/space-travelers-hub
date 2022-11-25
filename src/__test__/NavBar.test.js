import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

describe('<NavBar />', () => {
  test('Should render', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );
  });
});
