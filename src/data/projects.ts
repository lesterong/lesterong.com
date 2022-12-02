const projects = [
  {
    title: 'Taskority',
    position: 'Developer and Designer',
    description:
      'Taskority is a web application to manage all your tasks across all your devices. Built with React and Ruby on Rails.',
    note: '',
    isFeatured: true,
    imageSource: 'taskority',
    links: {
      'Live Site': 'https://taskority.lesterong.com',
      'Source Code': 'https://www.github.com/lesterong/taskority',
    },
    date: '2021-12-15T00:00:00.000Z',
  },
  {
    title: 'Dine Inn Pte Ltd',
    position: 'UI/UX Design',
    description:
      'Dine Inn is a e-commerce platform that connects home chefs to their customers. I redesigned their user interface using Figma for improved user experience and conversion rates.',
    note: '',
    isFeatured: true,
    imageSource: 'dineinn',
    links: {
      'Desktop Demo':
        'https://www.figma.com/proto/5kDx51vJ4Z46283g8bP5iC/Dine-Inn-Demo?page-id=661%253A5518&node-id=661%3A8058&viewport=947%252C319%252C0.2&scaling=scale-down&starting-point-node-id=661%3A8058&disable-default-key=&disable-default-keyboard-nav=1&hide-ui=1',
      'Mobile Demo':
        'https://www.figma.com/proto/5kDx51vJ4Z46283g8bP5iC/Dine-Inn-Demo?page-id=615%3A100&node-id=755%3A5105&viewport=451%2C622%2C0.59&scaling=scale-down&starting-point-node-id=755%3A5105&disable-default-keyboard-nav=1&hide-ui=1',
    },
    date: '2021-03-01T00:00:00.000Z',
  },
  {
    title: 'NUS FAQ',
    position: 'Developer and Designer',
    description:
      'NUS FAQ was built to serve as a central location to answer the most asked questions about different majors in National University of Singapore (NUS). Built with React and Firebase.',
    note: 'This project is not affliated with NUS.',
    isFeatured: false,
    imageSource: 'nusfaq',
    links: {
      'Live Site': 'https://nusfaq.netlify.app',
      'Source Code': 'https://www.github.com/lesterong/nus-faq',
    },
    date: '2022-05-03T00:00:00.000Z',
  },
].sort((a, b) => {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  return 0;
});

export default projects;
