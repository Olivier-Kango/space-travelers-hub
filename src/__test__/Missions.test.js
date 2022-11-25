import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Missions from '../components/Missions/Missions';

describe('Testing the Missions page:', () => {
  test('Should render', () => {
    render(
      <Router>
        <Routes>
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </Router>,
    );
  });
});
