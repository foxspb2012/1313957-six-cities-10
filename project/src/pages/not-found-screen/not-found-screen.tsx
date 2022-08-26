function NotFoundScreen(): JSX.Element {

  return (
    <main className="page__main page__main--index">
      <section className="container not-found">
        <img className="property__image" style = {{marginTop: 150}} src="img/error-400.png" width={796} height={548} alt="Error 404" />
        <div style = {{textAlign: 'center'}}>
          <h1>Page not&nbsp;found</h1>
          <p style ={{ maxWidth: 600, margin: '0 auto 40px', fontSize: 18, lineHeight: 1.4}}>
            Most likely there was a page, but&nbsp;now it has also gone on a journey.
          </p>
          <a style = {
            { display: 'inline-block',
              boxSizing: 'border-box',
              width: 320,
              fontSize: 20,
              fontWeight: 'bold',
              padding: '15px 20px',
              color: '#ffffff',
              backgroundColor: '#4481c3',
              borderRadius: 5}
          } href="/"
          >
            Back to main page
          </a>
        </div>
      </section>
    </main>
  );
}

export default NotFoundScreen;
