export default function updateStudentGradeByCity (sArr,city,gArr){
    const newSArr = sArr
    .filter(elm => elm.location === city)
    .map(sElm => {
      const grade = gArr.find((elm) => elm.studentId === sElm.id);
      return {
        ...sElm,
        grade: grade? grade.grade : 'N/A',
      };
    })

    return newSArr

}
