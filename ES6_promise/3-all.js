import { uploadPhoto, createUser } from "./utils.js";
export default function handleProfileSignup(){
    return Promise.all([createUser(),uploadPhoto()])
    .then(([UserValues,Photo]) => {
        console.log( `${Photo.body} ${UserValues.firstName} ${UserValues.lastName}`)
    }).catch((data) =>{
        console.log('Signup system offline')
    })
}
