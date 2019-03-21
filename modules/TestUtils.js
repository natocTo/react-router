var React = require('react');
var CreateReactClass = require('create-react-class');
var RouteHandler = require('./components/RouteHandler');
var PropTypes = require('./PropTypes');

exports.Nested = CreateReactClass({
  render: function () {
    return (
      <div>
        <h1 className="Nested">Nested</h1>
        <RouteHandler />
      </div>
    );
  }
});

exports.Foo = CreateReactClass({
  render: function () {
    return <div className="Foo">Foo</div>;
  }
});

exports.Bar = CreateReactClass({
  render: function () {
    return <div className="Bar">Bar</div>;
  }
});

exports.Baz = CreateReactClass({
  render: function () {
    return <div className="Baz">Baz</div>;
  }
});

exports.Async = CreateReactClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(callback, exports.Async.delay);
    }
  },

  render: function () {
    return <div className="Async">Async</div>;
  }
});

exports.RedirectToFoo = CreateReactClass({
  statics: {
    willTransitionTo: function (transition) {
      transition.redirect('/foo');
    }
  },

  render: function () {
    return null;
  }
});

exports.RedirectToFooAsync = CreateReactClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(function () {
        transition.redirect('/foo');
        callback();
      }, exports.RedirectToFooAsync.delay);
    }
  },

  render: function () {
    return null;
  }
});


exports.Abort = CreateReactClass({
  statics: {
    willTransitionTo: function (transition) {
      transition.abort();
    }
  },

  render: function () {
    return null;
  }
});

exports.AbortAsync = CreateReactClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(function () {
        transition.abort();
        callback();
      }, exports.AbortAsync.delay);
    }
  },

  render: function () {
    return null;
  }
});

exports.EchoFooProp = CreateReactClass({
  render: function () {
    return <div>{this.props.foo}</div>;
  }
});

exports.EchoBarParam = CreateReactClass({
  contextTypes: {
    router: PropTypes.router.isRequired
  },
  render: function () {
    return <div className="EchoBarParam">{this.context.router.getCurrentParams().bar}</div>;
  }
});
