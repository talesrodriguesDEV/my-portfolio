import who from '../images/projects/who.png'
import api from '../images/projects/api.png'
import obs from '../images/projects/obs.png'
import bank from '../images/projects/bank.png'

const projetos = [
  {
    title: 'Who Said It?',
    code: 'https://github.com/talesrodriguesDEV/who-said-it-II',
    description: 'Aplicativo React. Escolha uma palavra e sorteie uma citação que a contenha. Advinhe "Quem Disse?" e salve suas citações favoritas.',
    category: 'Frontend',
    image: who,
    date: '24/03/2023',
  },
  {
    title: 'Quotes API',
    code: 'https://github.com/talesrodriguesDEV/quotes-api',
    description: 'API CRUD construída com Node. O objetivo foi isolar as regras de negócio das dependências, buscando aplicar "Clean Architecture".',
    category: 'Backend',
    image: api,
    date: '21/03/2023',
  },
  {
    title: 'Tales\' Observatory',
    code: 'https://github.com/talesrodriguesDEV/tales-observatory',
    description: 'Observatório astronômico contruído com Next.js. Descubra imagens incríveis do Universo (com detalhes) e salve suas favoritas.',
    category: 'Frontend',
    image: obs,
    date: '19/01/2023',
  },
  {
    title: 'TR Bank',
    code: 'https://github.com/talesrodriguesDEV/trbank',
    description: 'Aplicativo Full Stack similar a um banco. Construído com React, Tailwind CSS, TypeScript, Node, Express, Mongoose, Docker e autenticação JWT.',
    category: 'Full Stack',
    image: bank,
    date: '06/12/2022',
  }
]

const projects = [
  {
    title: 'Who Said It?',
    code: 'https://github.com/talesrodriguesDEV/who-said-it-II',
    description: 'React app. Choose a keyword and get a random quote about it. You\'ll also be able to guess "Who said it?" and save your favorite quotes.',
    category: 'Frontend',
    image: who,
    date: '03/24/2023',
  },
  {
    title: 'Quotes API',
    code: 'https://github.com/talesrodriguesDEV/quotes-api',
    description: 'It\'s a CRUD API about Quotes and Authors built with Node. The goal was to isolate the business rules from the dependencies (Express and MongoDB).',
    category: 'Backend',
    image: api,
    date: '03/21/2023',
  },
  {
    title: 'Tales\' Observatory',
    code: 'https://github.com/talesrodriguesDEV/tales-observatory',
    description: 'It\'s an astronomical observatory built with Next.js. You can find amazing Universe pictures, access full info about them and save your favorites.',
    category: 'Frontend',
    image: obs,
    date: '01/19/2023',
  },
  {
    title: 'TR Bank',
    code: 'https://github.com/talesrodriguesDEV/trbank',
    description: 'Full Stack app that resembles a Bank built with React, Tailwind CSS, TypeScript, Node, Express, Mongoose, Docker and JWT authentication.',
    category: 'Full Stack',
    image: bank,
    date: '12/06/2022',
  }
]

export { projetos, projects }
