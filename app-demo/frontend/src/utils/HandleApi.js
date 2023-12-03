import axios from 'axios';

// const baseUrl = 'http://localhost:8080';

const getAllToDo = (setToDo) => {
    axios.get(`/api`).then(({ data }) => {
        console.log('data ---> ', data);
        setToDo(data);
    });
};

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`/api/save`, { text })
        .then((data) => {
            console.log(data);
            setText('');
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .post(`/api/update`, { _id: toDoId, text })
        .then((data) => {
            setText('');
            setIsUpdating(false);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
    axios
        .post(`/api/delete`, { _id })
        .then((data) => {
            console.log(data);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
