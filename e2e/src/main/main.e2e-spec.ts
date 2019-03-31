import { Helpers } from '../../utils/helpers';
import { MainPage } from './main.po';

describe('Main Page', () => {
  const page: MainPage = new MainPage();
  const helper: Helpers = new Helpers();

  beforeEach(() => {
    page.navigateTo();
  });

  it('Should open main page', () => {
      helper.checkUrl('/');
  });
});
