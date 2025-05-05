import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);


// SEGUNDA COLUNA
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);

hoverChangeDescription(
  ".bootstrap",
  "Bootstrap é um framework front-end que facilita o desenvolvimento de sites responsivos e modernos. Ele oferece uma coleção de estilos CSS, componentes pré-prontos e funcionalidades em JavaScript, permitindo criar layouts flexíveis e compatíveis com diferentes dispositivos de forma rápida e eficiente."
);

hoverChangeDescription(
  ".vuejs",
  "Vue.js é um framework JavaScript progressivo para a criação de interfaces de usuário. Ele facilita o desenvolvimento de aplicações web dinâmicas com uma abordagem reativa e componentizada, tornando o código mais organizado e reutilizável."
);

// TERCEIRA COLUNA

hoverChangeDescription(
  ".php",
  "PHP (Hypertext Preprocessor) é uma linguagem de programação voltada para o desenvolvimento web no lado do servidor (back-end). Foi criada em 1994 por Rasmus Lerdorf e é uma das linguagens mais populares para criar sites dinâmicos."
);

hoverChangeDescription(
  ".laravel",
  "Laravel é um framework PHP moderno e popular usado para construir aplicações web de forma mais rápida, organizada e segura. Ele foi criado por Taylor Otwell em 2011."
);
hoverChangeDescription(
  ".mysql",
  "MySQL é um sistema de gerenciamento de banco de dados relacional (SGBD), de código aberto, muito usado em aplicações web. Ele organiza os dados em tabelas (linhas e colunas) e usa a linguagem SQL (Structured Query Language) para criar, consultar e manipular esses dados."
);
hoverChangeDescription(
  ".aws",
  "AWS (Amazon Web Services) é a plataforma de computação em nuvem da Amazon, usada para hospedar sites, armazenar arquivos, rodar aplicações, bancos de dados e muito mais."
);






