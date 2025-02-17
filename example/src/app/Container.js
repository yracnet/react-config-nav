import { ObjectInspector } from 'react-inspector';
import { useRelative, NavLink } from 'react-hsk-router';

export const MainContainer = ({ children }) => {
  const { current } = useRelative();
  const random = Math.random();
  return (
    <div className="container">
      <nav className="my-2 my-md-0 mr-md-3">
        {current.title}
        {current.views.map((it) => (
          <NavLink key={it.path} to={it.path} exact={it.exact} className="p-2 text-dark">
            {it.title || it.path}
          </NavLink>
        ))}
      </nav>
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">{children}</div>
      </div>
      <code className="small">
        <b>Main Container</b>
        <ObjectInspector name="current" data={current} />
        <i>{random}</i>
      </code>
    </div>
  );
};
export const PageContainer = ({ children }) => {
  const { current } = useRelative();
  const random = Math.random();
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">{current.title || current.path}</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          {current.views.map((it) => (
            <NavLink key={it.path} to={it.uri} exact={it.exact} className="p-2 text-dark">
              {it.title || it.path}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Page Container Example</h1>
        <p className="lead">This is a Container Component</p>
      </div>

      {children}

      <code className="small">
        <b>Page Container</b>
        <ObjectInspector name="current" data={current} />
        <i>{random}</i>
      </code>

      <div className="container">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img
                className="mb-2"
                src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                alt=""
                width="24"
                height="24"
              />
              <small className="d-block mb-3 text-muted">© 2017-2018</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#/">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#/">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#/">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#/">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#/">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#/">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#/">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#/">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#/">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#/">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export const TabContainer = (props) => {
  const { value = [], children } = props;
  return (
    <div>
      <nav className="nav nav-tabs">
        {value.map((it) => (
          <NavLink key={it.path} to={it.path} exact={it.exact} className="nav-item nav-link">
            {it.title}-{it.path}
          </NavLink>
        ))}
      </nav>
      <div className="tab-content">{children}</div>
    </div>
  );
};

export const WrapElement = (props) => {
  const { children, ...items } = props;
  const json = JSON.stringify(items, null, 2);
  return (
    <div>
      WRAPPER
      <hr className="m-0" />
      {children}
      <hr className="m-0" />
      <code style={{ textAlign: 'left' }}>
        <b>Wrap Element</b>
        <pre>{json}</pre>
      </code>
    </div>
  );
};
