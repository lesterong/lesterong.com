import { ProjectProps } from '../types/Project';

const projects: ProjectProps[] = [
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
      'Source Code': 'https://github.com/lesterong/taskority',
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
    note: '',
    isFeatured: false,
    imageSource: 'nusfaq',
    links: {
      'Live Site': 'https://nusfaq.netlify.app',
      'Source Code': 'https://github.com/lesterong/nus-faq',
    },
    date: '2022-05-03T00:00:00.000Z',
  },
  {
    title: 'John Chatbot',
    position: 'Developer',
    description:
      'A cross-platform desktop chatbot to help manage tasks, optimised for usage for fast typists. Built with Java and JavaFX.',
    note: '',
    isFeatured: false,
    imageSource: 'johnchatbot',
    links: {
      Download: 'https://github.com/lesterong/ip/releases/tag/A-Release',
      'Source Code': 'https://github.com/lesterong/ip',
    },
    date: '2022-08-14T00:00:00.000Z',
  },
  {
    title: 'NUScheduler',
    position: 'Developer',
    description:
      'NUScheduler is a desktop app for managing contacts, optimised for use via a Command Line Interface with the benefits of a Graphical User Interface',
    note: '',
    isFeatured: false,
    imageSource: 'nuscheduler',
    links: {
      Download: 'https://github.com/AY2223S1-CS2103T-T17-3/tp/releases/tag/v1.4',
      'Source Code': 'https://github.com/AY2223S1-CS2103T-T17-3/tp',
    },
    date: '2022-09-22T00:00:00.000Z',
  },
  {
    title: 'bayuhao.org',
    position: 'Developer and Designer',
    description:
      'A portfolio website designed for Assistant Professor Ba Yuhao of Lee Kuan Yew School of Public Policy at the National University of Singapore. Built on Astro and TailwindCSS.',
    imageSource: 'bayuhao',
    links: {
      'Live Site': 'https://bayuhao.org',
      'Source Code': 'https://github.com/alcba/alcba.github.io',
    },
    date: '2023-10-01T00:00:00.000Z',
  },
  {
    title: 'seaclimatenpos.org',
    position: 'Frontend Developer',
    description:
      'A collection of non-profit organisations in Southeast Asia dedicated to address climate change. Developed with JavaScript Web Components and Bootstrap.',
    imageSource: 'seaclimatenpos',
    links: {
      'Live Site': 'https://www.seaclimatenpos.org',
    },
    date: '2023-12-23T00:00:00.000Z',
  },
  {
    title: 'civictechlab.org',
    position: 'Developer',
    description:
      'A static website leveraging Astro, TypeScript and Bootstrap, integrated with TinaCMS for intuitive content\n' +
      'updates for non-technical users.',
    imageSource: 'civictechlab',
    links: {
      'Live Site': 'https://civictechlab.org',
      'Source Code': 'https://github.com/CivicTechLab/civictechlab.github.io',
    },
    date: '2024-03-23T00:00:00.000Z',
  },
  {
    title: 'NUS Digital Twin',
    position: 'Developer and Designer',
    description:
      'Developed a 3D interactive map of the National University of Singapore campus using CesiumJS, showcasing key\n' +
      'buildings with detailed models.',
    links: {
      'Live Site': 'https://www.nus-digital-twin.com',
    },
    imageSource: 'nusdigitaltwin',
    date: '2024-10-22T00:00:00.000Z',
    note: 'In collaboration with City Syntax Lab',
    isFeatured: true,
  },
  {
    title: 'GoodBI',
    position: 'Frontend Developer and Designer',
    description:
      'A generative AI application to convert text to visualisations on CSV data built on Nextjs and FastAPI.',
    links: {
      'Live Site': 'https://good-bi.vercel.app',
    },
    imageSource: 'goodbi',
    date: '2024-08-22T00:00:00.000Z',
  },
  {
    title: 'OmniCAT',
    position: 'Frontend Developer and Designer',
    description: 'A multi-stage 3D collaborative annotation tool made with Nextjs, threejs and Django.',
    imageSource: 'omnicat',
    date: '2024-09-22T00:00:00.000Z',
    isFeatured: true,
  },
  {
    title: 'Peggle',
    position: 'Developer',
    description: 'A iPad clone of the peggle game built in Swift and SwiftUI.',
    imageSource: 'peggle',
    date: '2025-02-01T00:00:00.000Z',
  },
  {
    title: "Ah Leong's Farm",
    position: 'Developer',
    description:
      "Ah Leong's Farm is a turn-based iOS farming simulation game where players manage their own farm made with Swift and UIKit.",
    imageSource: 'ahleongsfarm',
    date: '2025-04-01T00:00:00.000Z',
    links: {
      'Source Code': 'https://github.com/cs3217-2425/group-project-ah-leong-s-farm',
    },
  },
];

export default projects;
