import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import { validarCPF, validarSenha, validarInputs } from './models/cadastro';
import ValidacoesCadastro from './context/ValidacoesCadastro';
import './App.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>

      <ValidacoesCadastro.Provider
        value={{
          cpf: validarCPF,
          senha: validarSenha,
          name: validarInputs,
          cep: validarInputs,
          email: validarInputs,
          cidade: validarInputs
        }}
      >
        <FormularioCadastro aoEnviar={aoEnviar} />
      </ValidacoesCadastro.Provider>

    </Container>
  );
}

function aoEnviar(dados) {
  console.log(dados);
}
export default App;
