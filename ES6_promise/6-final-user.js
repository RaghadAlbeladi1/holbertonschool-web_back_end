import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName,lastName,fileName){
    return Promise.allSettled([signUpUser(firstName,lastName),uploadPhoto(fileName)])
    .then((data)=>{
        return data.map(res =>{
            return{
                'status':res.status,
                'value':res.status === 'fulfilled'? res.value:`Error: ${fileName} cannot be processed`
            }
        })

    })
}
