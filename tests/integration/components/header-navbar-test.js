import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('header-navbar', 'Integration | Component | header navbar', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{header-navbar}}`);

  assert.equal(this.$('.navbar-brand').text().trim(), 'Guilherme Tassinari', 'brand should have my name');
  assert.equal(this.$('a[href$="https://github.com/guitassinari"]').length, 1, 'should have a github link');
  assert.equal(this.$('.fa-github').length, 1, 'should have github logo');
  assert.equal(this.$('a[href$="https://www.linkedin.com/in/guilherme-tassinari-6982366b/"]').length, 1, 'should have a github link');
  assert.equal(this.$('.fa-linkedin').length, 1, 'should have linkedin logo');
});
