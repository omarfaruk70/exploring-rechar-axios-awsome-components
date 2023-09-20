import { LineChart as Lchart, Line , Tooltip, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const subjectsMarksData = [
            { "studentId": 1, "studentName": "Student 1", "physicsMarks": 15, "chemistryMarks": 78 },
            { "studentId": 2, "studentName": "Student 2", "physicsMarks": 76, "chemistryMarks": 92 },
            { "studentId": 3, "studentName": "Student 3", "physicsMarks": 90, "chemistryMarks": 45 },
            { "studentId": 4, "studentName": "Student 4", "physicsMarks": 68, "chemistryMarks": 83 },
            { "studentId": 5, "studentName": "Student 5", "physicsMarks": 92, "chemistryMarks": 78 },
            { "studentId": 6, "studentName": "Student 6", "physicsMarks": 58, "chemistryMarks": 65 },
            { "studentId": 7, "studentName": "Student 7", "physicsMarks": 88, "chemistryMarks": 91 },
            { "studentId": 8, "studentName": "Student 8", "physicsMarks": 72, "chemistryMarks": 97 },
            { "studentId": 9, "studentName": "Student 9", "physicsMarks": 94, "chemistryMarks": 83 },
            { "studentId": 10, "studentName": "Student 10", "physicsMarks": 80, "chemistryMarks": 100 }
]
    return (
        <div className='max-w-3xl'>
            <Lchart width={700} height={300} data={subjectsMarksData}>
                <XAxis dataKey= 'studentName'/>
                <YAxis  />
                <Tooltip></Tooltip>
              <Line type='monotone' dataKey='physicsMarks' stroke='red' />
              <Line type='monotone' dataKey='chemistryMarks' stroke='black' />
            </Lchart>
        </div>
    );
};

export default LineChart;