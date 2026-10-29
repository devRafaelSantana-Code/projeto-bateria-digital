# 🥁 Bateria Digital & Sequenciador Rítmico

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Web_Audio_API-FF6F00?style=for-the-badge&logo=webaudio&logoColor=white" alt="Web Audio">
</p>

## 📌 Sobre o Projeto

A **Bateria Digital & Sequenciador Rítmico** é uma aplicação web interativa que simula uma bateria eletrônica, permitindo reproduzir sons percussivos por meio do teclado físico ou de cliques nos botões da interface.

Além da execução manual, o projeto conta com um sequenciador rítmico que permite criar e reproduzir combinações de sons a partir de sequências de caracteres, incluindo pausas entre as batidas.

Desenvolvido como parte dos estudos práticos de desenvolvimento web, o projeto utiliza HTML5, CSS3 e JavaScript puro (_Vanilla JavaScript_) para explorar a manipulação do DOM, o tratamento de eventos, a reprodução de áudio e o controle de tarefas assíncronas no navegador.

## 🚀 Funcionalidades

- 🥁 **Bateria interativa:** reprodução de sons percussivos por meio de cliques na interface.
- ⌨️ **Atalhos de teclado:** acionamento das teclas correspondentes aos instrumentos.
- 🎵 **Sequenciador rítmico:** execução automatizada de sequências personalizadas.
- ⏱️ **Controle de intervalos:** utilização de espaços para inserir pausas entre as batidas.
- ✨ **Feedback visual:** animações que indicam a ativação dos botões.
- 🎧 **Reprodução de áudio:** utilização de arquivos de som para simular diferentes instrumentos de uma bateria.
- 🖥️ **Execução no navegador:** aplicação sem necessidade de backend ou processo de compilação.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Aplicação no Projeto                                                  |
| :--------- | :-------------------------------------------------------------------- |
| HTML5      | Estrutura dos componentes e controles da interface.                   |
| CSS3       | Estilização dos botões, organização do layout e animações.            |
| JavaScript | Lógica de interação, manipulação do DOM e execução das sequências.    |
| HTML Audio | Reprodução e controle das amostras sonoras.                           |
| DOM API    | Identificação dos elementos e gerenciamento dos eventos da interface. |
| Event Loop | Agendamento das batidas e execução das sequências com intervalos.     |

## 🎹 Mapeamento das Teclas

A bateria utiliza nove teclas para acionar os respectivos sons:

| Tecla | Arquivo de Áudio |
| :---: | :--------------- |
|  `Q`  | `keyq.wav`       |
|  `W`  | `keyw.wav`       |
|  `E`  | `keye.wav`       |
|  `A`  | `keya.wav`       |
|  `S`  | `keys.wav`       |
|  `D`  | `keyd.wav`       |
|  `Z`  | `keyz.wav`       |
|  `X`  | `keyx.wav`       |
|  `C`  | `keyc.wav`       |

## 🎼 Como Utilizar o Sequenciador

O sequenciador permite criar combinações de batidas utilizando as letras correspondentes aos instrumentos. Cada caractere válido aciona o som associado à tecla, enquanto os espaços representam intervalos de silêncio.

**Exemplo 1 — Sequência contínua**

```text
qweasdzxc
```

Executa os nove sons em sequência, sem pausas adicionais entre os caracteres.

**Exemplo 2 — Sequência com pausas**

```text
q q q   w w w
```

Executa três batidas do primeiro instrumento, intercala pausas e, em seguida, reproduz três batidas do segundo instrumento.

## 🧠 Conceitos Aplicados

### Delegação de Eventos

Utilização de um único ouvinte de eventos no elemento contêiner da bateria para identificar os botões acionados. A técnica reduz a necessidade de registrar ouvintes individuais em cada botão.

### Manipulação de Áudio

Controle da reprodução dos arquivos sonoros por meio do elemento `HTMLAudioElement`. A redefinição de `currentTime` permite iniciar novamente uma amostra antes de sua reprodução anterior terminar, conforme o comportamento do navegador e do elemento de áudio.

### Programação Assíncrona

Uso de `setTimeout()` para agendar as batidas e organizar a reprodução das sequências ao longo do tempo, sem bloquear a execução principal da interface.

### Animações e Eventos do Navegador

Utilização de classes CSS e do evento `animationend` para sincronizar o feedback visual dos botões com o término das animações.

### Tratamento de Eventos de Teclado

Identificação das teclas pressionadas e verificação do elemento que possui o foco, evitando que os atalhos da bateria interfiram na digitação do campo de composição.

## 📂 Estrutura do Projeto

```text
projeto-bateria-digital/
├── index.html
├── assets/
│   └── sounds/
│       ├── keyq.wav
│       ├── keyw.wav
│       ├── keye.wav
│       ├── keya.wav
│       ├── keys.wav
│       ├── keyd.wav
│       ├── keyz.wav
│       ├── keyx.wav
│       └── keyc.wav
├── css/
│   └── style.css
└── js/
    └── script.js
```

## 💻 Como Executar o Projeto

**1. Clone o repositório**

```bash
git clone https://github.com/devRafaelSantana-Code/projeto-bateria-digital.git
```

**2. Acesse a pasta do projeto**

```bash
cd projeto-bateria-digital
```

**3. Execute a aplicação**

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code para executar o projeto em um servidor local.

Não é necessário instalar dependências, configurar um backend ou realizar uma etapa de build.

## 🎯 Objetivos de Aprendizado

- Consolidar os fundamentos de HTML5, CSS3 e JavaScript.
- Praticar a manipulação do DOM e a delegação de eventos.
- Explorar a reprodução de áudio no navegador.
- Compreender o agendamento de tarefas com `setTimeout()`.
- Desenvolver interfaces interativas com feedback visual.
- Aplicar conceitos de assincronismo e tratamento de eventos.

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e na construção de aplicações web interativas.

<p align="center">
  <a href="https://github.com/devRafaelSantana-Code">
    <img src="https://img.shields.io/badge/GitHub-devRafaelSantana--Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub de Rafael Santana">
  </a>
</p>

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript e desenvolvimento de interfaces interativas.
</p>
