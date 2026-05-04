

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    students: [
        {
            name: "John Doe",
            fName: "Richard Roe",
            class: "10th Grade",
            contact: "123-456-7890",
            city: "New York",
            id: 10010125524,
        },
        {
            name: "Jhon Smith",
            fName: "Michael Smith",
            class: "1st Grade",
            contact: "123-456-7890",
            city: "Los Angeles",
            id: 1001012555664,
        }
    ]
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            // state.students.push(action.payload)
            // state.students.push(...state.students, action.payload)
            state.students = [...state.students, action.payload]
            // console.log(state.students)
            console.log([...state.students])
            console.log(action.payload)

            // console.log([...state.students])

        },

        deleteStudent: (state, action) => {
            state.students = state.students.filter((student) => student.id !== action.payload)

        }
    }
})


export const { addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;