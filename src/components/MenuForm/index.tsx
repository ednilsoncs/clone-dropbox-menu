import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle(): void {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" type="button" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>
      <Form>
        <span className="title">Register-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="button">Prosseguir</button>

        <span className="terms">
          Esta página está sujeita a Política de privacidade e aos termos de
          serviço
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
