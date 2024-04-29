# Exemplos de Princípios de Design de Software, utilizando a lingagem: JavaScript

Este repositório contém exemplos práticos dos princípios de design de software em JavaScript, sendo eles:

- **SRP (Single Responsibility Principle)**
- **OCP (Open-Closed Principle)**
- **LSP (Liskov Substitution Principle)**
- **DIP (Dependency Inversion Principle)**

## Single Responsibility Principle (SRP) - Princípio da Responsabilidade Única

### O que é?
O SRP estabelece que uma classe deve ter apenas uma razão para mudar, ou seja, deve ter apenas uma responsabilidade.

### Para que serve?
Serve para manter o código limpo, coeso e de fácil manutenção. Ao separar as responsabilidades em classes distintas, cada classe é mais focada e menos propensa a mudanças.

### Exemplo segundo o código SOLID.js:
Imagine um sistema de gerenciamento de usuários onde a classe ServicoUsuario é responsável tanto pela lógica de negócios relacionada aos usuários quanto pela atualização da interface do usuário. Respeitando o SRP, podemos separar a interface do usuário em uma classe separada InterfaceUsuario, mantendo assim a classe ServicoUsuario focada apenas na lógica de negócios.

No código violando o SRP, a classe ServicoUsuario mistura lógica de negócios com a interface do usuário, tornando-a menos coesa e mais propensa a mudanças relacionadas tanto à lógica de negócios quanto à interface do usuário.

### Utilizando o Princípio SRP de forma correta:
No exemplo, a violação do SRP é corrigida movendo a lógica de atualização da interface do usuário para uma classe separada InterfaceUsuario, garantindo que a classe ServicoUsuario tenha apenas uma responsabilidade: gerenciar usuários.

## Open-Closed Principle (OCP) - Princípio Aberto-Fechado

### O que é?
O OCP estabelece que as entidades de software devem estar abertas para extensão, mas fechadas para modificação.

### Para que serve?
Serve para garantir que o código seja extensível sem modificar o código existente. Isso promove a reutilização do código e reduz o risco de introduzir erros ao modificar código funcional.

### Exemplo segundo o código SOLID.js::
Considere uma calculadora com uma classe Calculadora que realiza várias operações matemáticas. Violando o OCP, as operações são adicionadas diretamente à classe Calculadora, exigindo modificações na classe sempre que uma nova operação é introduzida. Respeitando o OCP, as operações são implementadas em classes separadas estendendo a classe Calculadora, permitindo a adição de novas operações sem modificar a classe original.

No código violando o OCP, a classe Calculadora contém diretamente a lógica para todas as operações matemáticas. Isso significa que qualquer nova operação adicionada exigiria a modificação direta da classe Calculadora, violando o princípio.

### Utilizando o Princípio OCP de forma correta:
No exemplo, a violação do OCP é corrigida introduzindo classes separadas (por exemplo, OperacaoSoma, OperacaoSubtracao, etc.) que estendem a classe Calculadora, permitindo a adição de novas operações sem modificar a classe original.

## Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov

### O que é?
O LSP afirma que objetos de uma classe derivada devem poder substituir objetos de sua classe base sem interromper o funcionamento do programa.

### Para que serve?
Serve para garantir a consistência do sistema e a corretude do comportamento de objetos quando substituídos por seus subtipos. Isso promove o reuso e a interoperabilidade entre classes.

### Exemplo segundo o código SOLID.js:
Considere uma hierarquia de classes Retângulo e Quadrado, onde um Quadrado é um tipo especial de Retângulo onde os lados são iguais. Violando o LSP, tentamos representar um Quadrado como uma extensão de Retângulo, mas a lógica de definição de largura e altura no Quadrado não é consistente com a do Retângulo.

No código violando o LSP, a classe Quadrado estende a classe Retângulo, mas redefine os métodos setWidth e setHeight para garantir que os lados sejam sempre iguais. Isso viola a expectativa de que um Quadrado possa ser tratado da mesma maneira que um Retângulo.

### Utilizando o Princípio LSP de forma correta:
No exemplo, a violação do LSP é corrigida removendo a herança entre Quadrado e Retângulo e implementando ambas as classes de forma independente. Assim, um Quadrado pode ser tratado como um Retângulo sem introduzir inconsistências na lógica.

## Dependency Inversion Principle (DIP) - Princípio da Inversão da Dependência

### O que é?
O DIP estabelece que as classes de alto nível não devem depender de classes de baixo nível. Ambas devem depender de abstrações.

### Para que serve?
Serve para reduzir o acoplamento entre classes e tornar o código mais flexível e extensível. Permite que classes de alto nível sejam independentes das implementações específicas de classes de baixo nível.

### Exemplo segundo o código SOLID.js:
Considere um serviço de usuário que depende diretamente de um repositório de usuário concreto. Violando o DIP, a classe ServicoUsuario está fortemente acoplada ao RepositorioUsuarios específico, tornando difícil a substituição do repositório ou a introdução de testes unitários.

No código violando o DIP, a classe ServicoUsuario instancia diretamente um RepositorioUsuarios, resultando em um alto acoplamento entre as duas classes. Isso torna difícil substituir o RepositorioUsuarios por uma implementação diferente para testes.

### Utilizando o Princípio DIP de forma correta:
No exemplo, a violação do DIP é corrigida passando uma abstração (RepositorioUsuarios) para o construtor da classe ServicoUsuario. Isso permite que diferentes implementações de RepositorioUsuarios sejam injetadas na classe ServicoUsuario, reduzindo o acoplamento e tornando o código mais flexível.