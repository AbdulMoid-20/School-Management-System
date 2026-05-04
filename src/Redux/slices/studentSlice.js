

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    students: []
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
            // console.log([...state.students])

        },

        deleteStudent: (state, action) => {
            state.students = state.students.filter((student) => student.id !== action.payload)

        }
    }
})


export const { addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;