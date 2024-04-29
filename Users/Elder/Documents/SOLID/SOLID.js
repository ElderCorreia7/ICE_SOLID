
//-------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------------//

// Violando o SRP (Princípio da Responsabilidade Única): 
// Esta classe lida tanto com a lógica de negócios quanto com a interface do usuário.
class ServicoUsuario {
    constructor() {
      this.usuarios = [];
    }
  
    addUsuario(usuario) {
      this.usuarios.push(usuario);
      this.updateUI(); // Violando SRP, misturando lógica de negócios com interface do usuário
    }
  
    alterarUsuario(usuario) {
      // Atualiza o usuário
    }
  
    deletarUsuario(usuario) {
      // Deleta o usuário
    }
  
    updateUI() {
      // Atualiza a interface do usuário
    }
  }


// Respeitando o SRP (Princípio da Responsabilidade Única):
// Separação das responsabilidades de negócios e interface do usuário
class ServicoUsuario {
    constructor() {
      this.usuarios = [];
    }
  
    addUsuario(usuario) {
      this.usuarios.push(usuario);
    }
  
    alterarUsuario(usuario) {
      // Atualiza o usuário
    }
  
    deletarUsuario(usuario) {
      // Deleta o usuário
    }
  }
  
  class UserInterface {
    constructor(userService) {
      this.userService = userService;
    }
  
    atualizarInterface() {
      // Atualiza a interface do usuário
    }
  }

//-------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------------//
  
// Violando o OCP (Princípio Aberto-Fechado): Adicionando uma nova forma de cálculo diretamente na classe
// Modificando-a sempre que uma nova forma for adicionada.
class Calculadora {
    calcular(operacao, operando1, operando2) {
      switch (operacao) {
        case 'somar':
          return operando1 + operando2;
        case 'subtrair':
          return operando1 - operando2;
        // Violando o OCP: Se uma nova operação for adicionada, esta classe precisará ser modificada
        case 'multiplicar':
          return operando1 * operando2;
        case 'dividir':
          return operando1 / operando2;
        default:
          throw new Error('Operação inválida');
      }
    }
  }
  
// Respeitando o OCP (Princípio Aberto-Fechado): 
// Usando polimorfismo e abstração para permitir novas formas de cálculo sem modificar a classe original.
class Calculadora {
    calcular(operacao, operando1, operando2) {
      throw new Error('Método não implementado');
    }
  }
  
  class OperacaoSoma extends Calculadora {
    calcular(operando1, operando2) {
      return operando1 + operando2;
    }
  }
  
  class OperacaoSubtracao extends Calculadora {
    calcular(operando1, operando2) {
      return operando1 - operando2;
    }
  }
  
  // Novas formas de cálculo podem ser adicionadas sem modificar a classe original
  class OperacaoMultiplicacao extends Calculadora {
    calcular(operando1, operando2) {
      return operando1 * operando2;
    }
  }
  
  class OperacaoDivisao extends Calculadora {
    calcular(operando1, operando2) {
      return operando1 / operando2;
    }
  }
  
//-------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------------//

// Violando o LSP (Princípio da Substituição de Liskov): 
// A subclasse não pode substituir a superclasse sem afetar a funcionalidade do programa.
class Retângulo {
    constructor(largura, altura) {
      this.largura = largura;
      this.altura = altura;
    }
  
    setLargura(largura) {
      this.largura = largura;
    }
  
    setAltura(altura) {
      this.altura = altura;
    }
  
    área() {
      return this.largura * this.altura;
    }
  }
  
  class Quadrado extends Retângulo {
    setLargura(largura) {
      this.largura = largura;
      this.altura = largura; // Violando LSP: Mudança no comportamento do método setLargura
    }
  
    setAltura(altura) {
      this.largura = altura; // Violando LSP: Mudança no comportamento do método setAltura
      this.altura = altura;
    }
  }


// Respeitando o LSP (Princípio da Substituição de Liskov): 
// As classes são independentes e cada uma implementa sua própria lógica sem violar o comportamento esperado.
class Forma {
    área() {
      throw new Error('Método não implementado');
    }
  }
  
  class Retângulo extends Forma {
    constructor(largura, altura) {
      super();
      this.largura = largura;
      this.altura = altura;
    }
  
    área() {
      return this.largura * this.altura;
    }
  }
  
  class Quadrado extends Forma {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    área() {
      return this.lado * this.lado;
    }
  }

//-------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------------//

// Violando o DIP (Princípio da Inversão da Dependência): 
// A classe de alto nível depende diretamente de uma classe de baixo nível.

class ServicoUsuario {
    constructor() {
    this.repositorioUsuarios = new RepositorioUsuarios(); // Violando o DIP: Acoplamento direto com a implementação concreta
    }
    
    obterUsuarios() {
    return this.repositorioUsuarios.obterUsuarios();
    }
    
    adicionarUsuario(usuario) {
    this.repositorioUsuarios.adicionarUsuario(usuario);
    }
    }
    
    class RepositorioUsuarios {
    obterUsuarios() {
        // Retorna os usuários
    }
    
    adicionarUsuario(usuario) {
        // Adiciona um usuário
    }
    }


// Respeitando o DIP (Princípio da Inversão da Dependência): 
// A classe de alto nível depende de uma abstração e não de uma implementação concreta.

class ServicoDeUsuario {
    constructor(repositorioUsuarios) {
    this.repositorioUsuarios = repositorioUsuarios;
    }
    
    obterUsuarios() {
    return this.repositorioUsuarios.obterUsuarios();
    }
    
    adicionarUsuario(usuario) {
    this.repositorioUsuarios.adicionarUsuario(usuario);
    }
    }
    
    class RepositorioUsuarios {
    obterUsuarios() {
        // Retorna os usuários
    }
    
    adicionarUsuario(usuario) {
        // Adiciona um usuário
    }
    }

//-------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------------//