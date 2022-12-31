function attfix() {
  document.getElementById("prot").value =
    document.getElementById("attack").checked;
  console.log(document.getElementById("attack").checked);
}

function checkout() {
  fetch("/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          name: document.getElementById("name").value,
          price: document.getElementById("val").value,
          rating: document.getElementById("rate").value,
          image: document.getElementById("image").value,
          hash: SHA512(document.getElementById("val").value),
          protect: document.getElementById("prot").value,
        },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
      console.log(url);
    })
    .catch((e) => {
      console.error(e.error);
    });
}
