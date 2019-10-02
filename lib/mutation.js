const { ObjectID } = require('mongodb');
const connectDb = require('./db');
const errorHandler = require('./errorHandler');

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
      errorHandler(error);
    }
    return newCourse;
  },
  createPerson: async (root, { input }) => {
    let db;
    let student;
    const newStudent = input;

    try {
      db = await connectDb();
      student = await db.collection('students').insertOne(input);
      newStudent._id = student.insertedId;
    } catch (error) {
      errorHandler(error);
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
      errorHandler(error);
    }
    return course;
  },
  editPerson: async (root, { _id, input }) => {
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
      errorHandler(error);
    }
    return student;
  },
  addPeople: async (root, { courseID, personID }) => {
    let db;
    let person;
    let course;

    try {
      db = await connectDb();
      course = await db.collection('courses').findOne({ _id: ObjectID(courseID) });
      person = await db.collection('students').findOne({ _id: ObjectID(personID) });

      if (!course || !person) throw new Error('Persons or course not exists');
      await db.collection('courses').updateOne(
        { _id: ObjectID(courseID) },
        { $addToSet: { people: ObjectID(personID) } },
      );
    } catch (error) {
      errorHandler(error);
    }

    return course;
  },
};
