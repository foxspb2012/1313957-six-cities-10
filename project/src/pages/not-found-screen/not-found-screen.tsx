function NotFoundScreen(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <section className="container not-found">
        <img className="property__image" style = {{marginTop: 150}} src="img/error.png" width={796} height={548} alt="Error 404" />
        <div style = {{textAlign: 'center'}}>
          <h1>Страница не&nbsp;найдена</h1>
          <a href="/">Вернуться на главную</a>
        </div>
      </section>
    </main>
  );
}

export default NotFoundScreen;
