const initialData = {
    tasks: {
        'task1': { id: 'task1', content: "this is task1" },
        'task2': { id: 'task2', content: "this is task2" },
        'task3': { id: 'task3', content: "this is task3" },
        'task4': { id: 'task4', content: "this is task4" },
        'task5': { id: 'task5', content: "this is task5" },
        'task6': { id: 'task6', content: "this is task6" },
        'task7': { id: 'task7', content: "this is task7" },
        'task8': { id: 'task8', content: "this is task8" },
        'task9': { id: 'task9', content: "this is task9" },
        'task10': { id: 'task10', content: "this is task9" },
        'task11': { id: 'task11', content: "this is task9" },
        'task12': { id: 'task12', content: "this is task9" },
        'task13': { id: 'task13', content: "this is task9" },
        'task14': { id: 'task14', content: "this is task9" },
        'task15': { id: 'task15', content: "this is task9" },
        'task16': { id: 'task16', content: "this is task9" },
        'task17': { id: 'task17', content: "this is task9" },
        'task18': { id: 'task18', content: "this is task9" },

    },
    columns: {
        'column1': {
            id: "column1",
            title: "todo",
            taskIds: ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7', 'task8', 'task9', 'task10', 'task11', 'task12', 'task13', 'task14', 'task15', "task16", "task17", "task18"]
        },
        'column2': {
            id: "column2",
            title: "in Progress",
            taskIds: []
        },
        'column3': {
            id: "column3",
            title: "done",
            taskIds: []
        }
    },
    //for record column order
    columnOrder: ["column1", "column2", "column3"]
}

export default initialData;