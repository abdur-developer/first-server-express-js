# first-server-express-js

```jsx

    fetch("http://localhost:3000/data/Abdur")
    .then(res => res.text())
    .then(d => setGET(d));



    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({name: "Abdur Rahman", jela: "Panchagarh"})
    })
    .then(res => res.json())
    .then(d => setpost(d));



    fetch("http://localhost:3000/", {
      method: "PUT"
    })
    .then(res => res.text())
    .then(d => setPut(d));



    fetch("http://localhost:3000/", {
      method: "DELETE"
    })
    .then(res => res.text())
    .then(d => setDelet(d));
```
