import {createReducer} from "@reduxjs/toolkit";
import { addTaskFailure, addTaskRequest, addTaskSuccess, clearError, clearMessage, deleteTaskFailure, deleteTaskRequest, deleteTaskSuccess, loadUserFailure, loadUserRequest, loadUserSuccess, loginFailure, loginRequest, loginSuccess, logoutFailure, logoutRequest, logoutSuccess, registerFailure, registerRequest, registerSuccess, updateProfileFailure, updateProfileRequest, updateProfileSuccess, verifyFailure, verifyRequest, verifySuccess } from "./authAction";

export const authReducer = createReducer({},(builder)=>{
    builder
        .addCase(loginRequest,(state) => {
            state.loading = true
        })
        .addCase(loginSuccess, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase(loginFailure, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload.error;
        })
        .addCase(registerRequest, (state) => {
            state.loading = true;
        })
        .addCase(registerSuccess, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase(registerFailure, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload.error;
        })
        .addCase(loadUserRequest, (state) => {
            state.loading = true;
        })
        .addCase(loadUserSuccess, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase(loadUserFailure, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload.error;
        })
        .addCase(verifyRequest, (state)=> {
            state.loading = true;
        })
        .addCase(verifySuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(verifyFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(logoutRequest, (state) => {
            state.loading = true;
        })
        .addCase(logoutSuccess, (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
        .addCase(logoutFailure, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
});

export const messageReducer = createReducer({},(builder)=>{
    builder
        .addCase(addTaskRequest, (state) => {
            state.loading = true;
        })
        .addCase(addTaskSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(addTaskFailure, (state, action)=> {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteTaskRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteTaskSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(deleteTaskFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateProfileRequest, (state) => {
            state.loading = true;
        })
        .addCase(updateProfileSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(updateProfileFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
})