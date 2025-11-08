export default function getStudentsByLocation (ListStudents,city){
    const newArr = ListStudents.filter(elm => elm.location === city)
    return newArr
}
