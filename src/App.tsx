function App() {
  return (
    <main>
      <section>
        <img src="public/Icon.svg" alt="" />
        <h1>Preencha o Código</h1>
        <p>Enviamos um código para o seu email e por SMS</p>
        <form action="">
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button type="submit">Verificar OTP</button>
        </form>
      </section>
    </main>
  );
}

export default App;
