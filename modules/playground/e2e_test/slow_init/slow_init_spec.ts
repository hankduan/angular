import {verifyNoBrowserErrors} from 'angular2/src/testing/e2e_util';

describe('slow-init', () => {
  var URL = 'playground/src/slow_init/index.html';

  beforeEach(() => browser.get(URL));

  it('should wait until the initialization is complete', () => {
    var loadStatus = $('#page-loaded');
    expect(loadStatus.getText()).toEqual('ready');
  });

  afterEach(verifyNoBrowserErrors);
});
