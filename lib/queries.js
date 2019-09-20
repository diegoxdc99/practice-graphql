const { ObjectID } = require('mongodb');
const connectDb = require('./db');

module.exports = {
  getCourses: async () => {
    let db;
    let courses = [];
    try {
      db = await connectDb();
      courses = await db.collection('courses').find({}).toArray();
    } catch (error) {
      console.log(error);
    }
    return courses;
  },
  getCourse: async (root, { id }) => {
    let db;
    let course;
    try {
      db = await connectDb();
      course = await db.collection('courses').findOne({ _id: ObjectID(id) });
    } catch (error) {
      console.log(error);
    }
    return course;
  },
  getStudents: async () => {
    let db;
    let students = [];
    try {
      db = await connectDb();
      students = await db.collection('students').find({}).toArray();
    } catch (error) {
      console.log(error);
    }
    return students;
  },
  getStudent: async (root, { id }) => {
    let db;
    let students;
    try {
      db = await connectDb();
      students = await db.collection('students').findOne({ _id: ObjectID(id) });
    } catch (error) {
      console.log(error);
    }
    return students;
  },
};
