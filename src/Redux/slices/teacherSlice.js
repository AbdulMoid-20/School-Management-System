

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teachers: [
        {
            name: "John Doe",
            city: "New York",
            qualification: "BSc in Mathematics",
            subject: "Mathematics",
            id: 10010125524,
            contact: "123-456-7890",
        },
        {
            name: "Jane Smith",
            city: "Los Angeles",
            qualification: "BA in English Literature",
            subject: "English",
            id: 1001012555664,
            contact: "123-456-7890",
        }
    ]
}

const teacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        addTeacher: (state, action) => {
            state.teachers = [...state.teachers, action.payload]


        },

        deleteTeacher: (state, action) => {
            state.teachers = state.teachers.filter((teacher) => teacher.id !== action.payload)

        }
    }
})


export const { addTeacher, deleteTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;