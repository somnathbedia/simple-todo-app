if (!localStorage.getItem('todos') || JSON.parse(localStorage.getItem('todos')).length == 0) {
    localStorage.setItem('todos', JSON.stringify([
        {
            id:Math.floor(Math.random() * 1000),
            description: 'Please Add Your task Here',
            iscompleted: false
        }
    ]));
}

