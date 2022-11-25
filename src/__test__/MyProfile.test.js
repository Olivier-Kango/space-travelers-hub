import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MyProfile from '../components/MyProfile/MyProfile';

describe('Testing the My Profile page:', () => {
  test('Should render', () => {
    render(
      <Router>
        <Routes>
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </Router>,
    );
  });
});
