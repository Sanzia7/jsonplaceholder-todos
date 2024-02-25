export const sortingTodos = (todos) => [...todos].sort((a, b) => (a.title < b.title ? -1 : 1))



