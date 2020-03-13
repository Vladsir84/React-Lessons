// const baseUrl = 'https://5e6a4dcc0f70dd001643bc66.mockapi.io/tasks';
const baseUrl = 'https://crudcrud.com/api/141314b2e62c490ab873df97346b6d51/tasks';

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;utc-8',
        },
        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to create task');
        }
    });
};

export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(tasksList =>
            tasksList.map(({ _id, ...task }) => ({
                id: _id,
                ...task,
            })),
        );
};

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;utc-8',
        },
        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to create task');
        }
    });
};


export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
    });
};
