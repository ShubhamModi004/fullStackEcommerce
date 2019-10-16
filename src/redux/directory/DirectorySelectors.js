import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const DirectorySelector = createSelector(
    [selectDirectory],
    directory => directory.sections
)
