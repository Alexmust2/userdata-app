import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userData } from "./user-data.reducer";


export const selectUser = createFeatureSelector<userData>("MyUser")

export const getUser = createSelector(selectUser, state => {
    return state;
})