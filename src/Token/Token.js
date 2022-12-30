export const getToken = (email) => {

    fetch(`https://furnicore-server.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {

            if (data.accessToken) {

                console.log(data)
                localStorage.setItem('token', data.accessToken)
            }

        })

}


