import who from '../images/projects/who.png'
import api from '../images/projects/api.png'
import obs from '../images/projects/obs.png'
import bank from '../images/projects/bank.png'

const projects = [
  {
    title: 'Who Said It?',
    // link: 'https://who-said-it-talesrodriguesdev.vercel.app/',
    code: 'https://github.com/talesrodriguesDEV/who-said-it-II',
    description: 'It\'s a React app built with TypeScript. You can choose a keyword and get a random quote about it. You\'ll also be able to guess "Who said it?" and save your favorite quotes. ',
    category: 'Frontend',
    image: who,
    // date: '',
  },
  {
    title: 'Quotes API',
    // link: 'https://tales-observatory.vercel.app/',
    code: 'https://github.com/talesrodriguesDEV/quotes-api',
    description: 'It\'s a CRUD API about Quotes and Authors built with Node. The goal was to isolate the business rules from the dependencies (Express and MongoDB).',
    category: 'Backend',
    image: api,
    // date: '',
  },
  {
    title: 'Tales\' Observatory',
    // link: 'https://tales-observatory.vercel.app/',
    code: 'https://github.com/talesrodriguesDEV/tales-observatory',
    description: 'It\'s an astronomical observatory built with Next.js based on NASA Image and Video Library API. You can find amazing Universe pictures, access full information about them and save your favorites!',
    category: 'Frontend',
    image: obs,
    // date: '19/01/2023',
  },
  {
    title: 'TR Bank',
    // link: 'https://github.com/talesrodriguesDEV/trbank',
    code: 'https://github.com/talesrodriguesDEV/trbank',
    description: 'It\s a Full Stack app that resembles a Bank built with React, Tailwind CSS, TypeScript, Node, Express, Mongoose, Docker and JWT authentication.',
    category: 'Full Stack',
    image: bank,
    // date: '06/12/2022',
  }
]

export default projects
