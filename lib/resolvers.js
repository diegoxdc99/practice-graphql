const courses = [
  {
    _id: 'anyid',
    title: 'My title',
    teacher: 'My teacher',
    description: 'A great course of graphql',
    topic: 'grapql, programming',
  },
  {
    _id: 'anyid2',
    title: 'My title2',
    teacher: 'My teacher',
    description: 'A great course of graphql',
    topic: 'grapql, programming',
  },
  {
    _id: 'anyid3',
    title: 'My title3',
    teacher: 'My teacher',
    description: 'A great course of graphql',
    topic: 'grapql, programming',
  },
];

module.exports = {
  getCourses: () => courses,
};
