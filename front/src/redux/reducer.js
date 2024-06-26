import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userAppointments: [],
}

export const userSlice = createSlice({
    name: "userData",
    initialState: initialState.user,
    reducers: {

        setUser: (state, action) => {
            state.user = action.payload;
        },

        setUserAppointments: (state,action) => {
            state.userAppointments = action.payload
        },

        cancelAppointments: (state, action) => {
            state.userAppointments = state.userAppointments.map((appointment) => {

                if(appointment.id === action.payload){
                    return {...appointment, status: "cancelled"} 
                }

                return appointment;

            })
        },

        removeUser: (state,action) => {
            state.user = {}        
        }
    }
})

export const {setUser, setUserAppointments, cancelAppointments, removeUser} = userSlice.actions;