import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MockedHeader from '../__mock__/Header';
import MockedFooter from '../__mock__/Footer';

describe('Components snapshot tests', () => {
  const mockStore = configureStore();

  it('Header renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <MockedHeader />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Footer renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <MockedFooter />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
