import findWithClass from '../src/find-with-class';
import Renderer from '../src/renderer';
import React from 'react';

describe('`findWithClass`', function() {
  beforeEach(function() {
    class TestWithClasses extends React.Component {
      render() {
        return (
          <div className='test-class'>
            <span />
            <div className='test-class test-class--modified' />
            <div className='test-class2 test-class2--modified' />
            <div className='test-class3 test-class3--modified' />
            <span>Some content</span>
          </div>
        );
      }
    }

    this.renderer = new Renderer();
    this.tree = this.renderer.render(TestWithClasses, {}, {});
  });

  it('should find `test-class2` component', function() {
    expect(() => findWithClass(this.tree, 'test-class2')).not.toThrow();
  });

  it('should not find exactly one `test-class` component', function() {
    expect(() => findWithClass(this.tree, 'test-class')).toThrow();
  });

  it('should not find `test-class10` component', function() {
    expect(() => findWithClass(this.tree, 'test-class10')).toThrow();
  });
});
