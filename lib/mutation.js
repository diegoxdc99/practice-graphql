const { ObjectID } = require('mongodb');
const connectDb = require('./db');

module.exports = {
  createCourse: async (root, { input }) => {
    const defaultValues = {
      teacher: '',
      topic: '',
    };

    const newCourse = {
      ...defaultValues,
      ...input,
    };
    let db;
    let course;
    try {
      db = await connectDb();
      course = await db.collection('courses').insertOne(newCourse);
      newCourse._id = course.insertedId;
    } catch (error) {
      console.log(error);
    }
    return newCourse;
  },
  createStudent: async (root, { input }) => {
    let db;
    let student;
    const newStudent = input;

    try {
      db = await connectDb();
      student = await db.collection('students').insertOne(input);
      newStudent._id = student.insertedId;
    } catch (error) {
      console.log(error);
    }
    return newStudent;
  },
  editCourse: async (root, { _id, input }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      await db.collection('courses').updateOne(
        { _id: ObjectID(_id) },
        { $set: input },
      );
      course = await db.collection('courses').findOne({ _id: ObjectID(_id) });
    } catch (error) {
      console.log(error);
    }
    return course;
  },
  editStudent: async (root, { _id, input }) => {
    let db;
    let student;

    try {
      db = await connectDb();
      await db.collection('students').updateOne(
        { _id: ObjectID(_id) },
        { $set: input },
      );
      student = await db.collection('students').findOne({ _id: ObjectID(_id) });
    } catch (error) {
      console.log(error);
    }
    return student;
  },
};
