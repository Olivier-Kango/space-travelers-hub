import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Rockets from '../components/Rockets/Rockets';

describe('Testing the Rockets page:', () => {
  test('Should render', () => {
    render(
      <Router>
        <Routes>
          <Route path="/missions" element={<Rockets />} />
        </Routes>
      </Router>,
    );
  });
});
