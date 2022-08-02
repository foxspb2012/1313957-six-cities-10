function NotFoundScreen(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <section className="container not-found">
        <img className="property__image" style = {{marginTop: 150}} src="img/error.png" width={796} height={548} alt="Error 404" />
        <div style = {{textAlign: 'center'}}>
          <h1>Страница не&nbsp;найдена</h1>
          <p style ={{ maxWidth: 600, margin: '0 auto 40px', fontSize: 18, lineHeight: 1.4}}>
            Возможно она была, но&nbsp;сейчас также отправилась в путешествие.
          </p>
          <a style = {
            { display: 'inline-block',
              boxSizing: 'border-box',
              width: 320,
              fontSize: 20,
              fontWeight: 'bold',
              padding: '15px 20px',
              color: '#ffffff',
              backgroundColor: '#4481c3'}
          } href="/"
          >
            Вернуться на главную
          </a>
        </div>
      </section>
    </main>
  );
}

export default NotFoundScreen;
