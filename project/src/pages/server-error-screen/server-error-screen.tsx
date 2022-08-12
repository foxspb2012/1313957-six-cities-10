import {Link} from 'react-router-dom';

function ServerErrorScreen(): JSX.Element {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <main className="page__main page__main--index">
      <section className="not-found" style={
        {
          margin: '0 auto',
          padding: '0 58',
        }
      }
      >
        <img className="property__image" src="img/error-500.png" width={500} height={200} alt="Error 404"/>
        <div style={{textAlign: 'center'}}>
          <h1>Internal Server&nbsp;Error</h1>
          <p style={{maxWidth: 600, margin: '0 auto 40px', fontSize: 18, lineHeight: 1.4}}>
            Most likely the server&nbsp;is on vacation...
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 700,
          }}
          >
            <button
              onClick={refreshPage}
              style={
                {
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  border: 'none',
                  width: 320,
                  fontSize: 20,
                  fontWeight: 'bold',
                  padding: '15px 20px',
                  color: '#ffffff',
                  backgroundColor: '#4481c3',
                  borderRadius: 5,
                }
              }
            >
              Try again
            </button>
            <Link to="/" style={
              {
                display: 'inline-block',
                boxSizing: 'border-box',
                width: 320,
                fontSize: 20,
                fontWeight: 'bold',
                padding: '15px 20px',
                color: '#ffffff',
                backgroundColor: '#4481c3',
                borderRadius: 5,
              }
            }
            >
              Back to main page
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default ServerErrorScreen;
