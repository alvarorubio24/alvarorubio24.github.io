// Just a dummy example...
function AdminButton({ userInfo }) {
  return (
    <div>
      {userInfo.isAdministrator ? (
        <React.Fragment>
          <p>hello admin here&apos;s some links and blah blah blah</p>
          <button onClick={() => alert('yay!!')}>Hello, admin!</button>
        </React.Fragment>
      ) : null}
    </div>
  );
}

ReactDOM.render(<AdminButton userInfo={{ isAdministrator: true }} />, root);
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>

<h1>Welcome! If you see a button below, you are the admin</h1>
<div id="root"></div>