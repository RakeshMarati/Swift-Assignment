const express = require('express');
const app = express();
const port = 3000;

// Sample user data in the specified format
const userData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    },
    posts: [
        {
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            comments: [
                {
                    id: 1,
                    name: "id labore ex et quam laborum",
                    email: "Eliseo@gardner.biz",
                    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                {
                    id: 2,
                    name: "quo vero reiciendis velit similique earum",
                    email: "Jayne_Kuhic@sydney.com",
                    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                }
            ]
        },
        {
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            comments: [
                {
                    id: 3,
                    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
                    email: "Presley.Mueller@myrl.com",
                    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
                },
                {
                    id: 4,
                    name: "repellat consequatur praesentium vel minus molestias voluptatum",
                    email: "Dallas@ole.me",
                    body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
                }
            ]
        }
    ]
};

// Root route for homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the User Data API</h1>');
});

// Route to get the user data in JSON format
app.get('/api/user', (req, res) => {
    res.json(userData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
