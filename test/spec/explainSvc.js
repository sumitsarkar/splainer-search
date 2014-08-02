'use strict';

describe('Service: explainSvc', function () {

  // load the service's module
  beforeEach(module('o19s.splainer-search'));

  var explainSvc = null;
  beforeEach(inject(function (_explainSvc_) {
    explainSvc = _explainSvc_;
  }));

  /* global mockExplain */
  it('parses mockData1', function() {
    explainSvc.createExplain(mockExplain);
  });

  it('returns null/empty explain', function() {
    var exp = explainSvc.createExplain(null);
    expect(exp.influencers.length).toEqual(0);
    expect(exp.contribution()).toEqual(0);
    expect(exp.explanation()).toContain('no explain');
  });
});