import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from '../Redux/Reducers/Country';
import pollutionReducer from '../Redux/Reducers/Pollution';
import Pollutions from '../components/Homepage/Pollutions';

const rootReducer = combineReducers({
  countryReducer,
  pollutionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

afterEach(cleanup);

describe('Pollutions List ', () => {
  test('Pollution lists render correctly', () => {
    const pollutions = render(
      <Provider store={store}>
        <Router>
          <Pollutions />
        </Router>
      </Provider>,
    );
    expect(pollutions).toMatchSnapshot();
  });
});
