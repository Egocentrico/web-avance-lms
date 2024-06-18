const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Importar rutas
const userRouter = require('./routes/user');
const courseRouter = require('./routes/course');
const courseModuleRouter = require('./routes/courseModule');
const lessonRouter = require('./routes/lesson');
const enrollmentRouter = require('./routes/enrollment');
const assessmentRouter = require('./routes/assessment');
const gradeRouter = require('./routes/grade');
const courseMaterialRouter = require('./routes/courseMaterial');
const discussionForumRouter = require('./routes/discussionForum');
const messageRouter = require('./routes/message');

// Usar rutas
app.use('/users', userRouter);
app.use('/courses', courseRouter);
app.use('/courseModules', courseModuleRouter);
app.use('/lessons', lessonRouter);
app.use('/enrollments', enrollmentRouter);
app.use('/assessments', assessmentRouter);
app.use('/grades', gradeRouter);
app.use('/courseMaterials', courseMaterialRouter);
app.use('/discussionForums', discussionForumRouter);
app.use('/messages', messageRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
