import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirecotrySection = createSelector(
    [selectDirectory],
    directory => directory.sections
)