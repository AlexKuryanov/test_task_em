import { Movie } from '../models/movie.model';

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'Начало',
    original: 'Inception',
    genres: ['Боевик', 'Фантастика'],
    rating: 8.8,
    description:
      'Вор, похищающий секреты корпораций при помощи технологий совместного сна, получает обратное задание - имплантировать идею в подсознание.',
    link: './movie',
    image: 'assets/images/poster_1.png',
  },
  {
    id: 2,
    title: 'Интерстеллар',
    original: 'Interstellar',
    genres: ['Фантастика', 'Драма'],
    rating: 8.6,
    description:
      'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в путешествие, которое призвано превзойти прежние ограничения для космических путешествий человека.',
    link: './movie',
    image: 'assets/images/poster_2.png',
  },
  {
    id: 3,
    title: 'Тёмный рыцарь',
    original: 'The Dark Knight',
    genres: ['Боевик', 'Криминал'],
    rating: 9.0,
    description:
      'Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности.',
    link: './movie',
    image: 'assets/images/poster_3.png',
  },
  {
    id: 4,
    title: 'Помни',
    original: 'Memento',
    genres: ['Триллер', 'Детектив'],
    rating: 8.4,
    description:
      'Мужчина, страдающий потерей кратковременной памяти, использует записки и татуировки, чтобы охотиться за убийцей своей жены.',
    link: './movie',
    image: 'assets/images/poster_4.png',
  },
  {
    id: 5,
    title: 'Матрица',
    original: 'The Matrix',
    genres: ['Фантастика', 'Боевик'],
    rating: 8.7,
    description:
      'Программист Нео узнаёт, что реальность, в которой он живёт, на самом деле является компьютерной симуляцией, называемой Матрицей.',
    link: './movie',
    image: 'assets/images/poster_5.png',
  },
  {
    id: 6,
    title: 'Побег из Шоушенка',
    original: 'The Shawshank Redemption',
    genres: ['Драма'],
    rating: 9.3,
    description:
      'Банкир Энди Дюфрейн попадает в тюрьму за убийство жены и её любовника. Здесь он заводит дружбу с заключённым Эллисом Бойдом.',
    link: './movie',
    image: 'assets/images/poster_6.png',
  },
];
