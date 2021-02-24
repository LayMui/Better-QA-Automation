import BetterQA1 from './BetterQA1'
import BetterQA2 from './BetterQA2'
import BetterQA3 from './BetterQA3'
import BetterQA4 from './BetterQA4'
import BetterQA5 from './BetterQA5'
import BetterQA6 from './BetterQA6'
import BetterQA7 from './BetterQA7'
import BetterQA8 from './BetterQA8'


const pages = [
  {
    name: 'Page 1',
    meta: {
      title: 'Better QA Automation'
    },
    component: BetterQA1
  },
  {
    name: 'Page 2',
    meta: {
      title: 'Functional alternatives to the traditional for loop'
    },
    component: BetterQA2
  },
  {
    name: 'Page 3',
    meta: {
      title: 'Use ternary operator instead of if-else'
    },
    component: BetterQA3
  },
  {
    name: 'Page 4',
    meta: {
      title: 'Handling async request'
    },
    component: BetterQA4
  },
  {
    name: 'Page 5',
    meta: {
      title: 'Essence of agile test automation'
    },
    component: BetterQA5
  },
  {
    name: 'Page 6',
    meta: {
      title:'Streamline BDD test scenarios'
    },
    component: BetterQA6
  },
  {
    name: 'Page 7',
    meta: {
      title: 'Example: Before and After'
    },
    component: BetterQA7
  },
  {
    name: 'Page 8',
    meta: {
      title: 'The Art of Exploratory Testing'
    },
    component: BetterQA8
  },
  

]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages