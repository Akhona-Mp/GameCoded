import fetch from 'node-fetch';
const PORT = process.env.PORT || 3000;
async function getCourse(){
const response = await fetch(`http://localhost:${PORT}/getCourse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      course: 'python' // Replace with the course name you want
    })
  });
  
  const data = await response.json(); // This will now succeed
  return data}

  async function getlesson(id){
    const response = await fetch(`http://localhost:${PORT}/getLesson`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lessonId: id // Replace with the course name you want
        })
      });
      
      const data = await response.json(); // This will now succeed
      return data}

      async function mark(user,lesson,answers){
        console.log(answers)
        const response = await fetch(`http://localhost:${PORT}/mark`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId:user,
              lessonId: lesson ,
              answer: answers
            })
          });
          
          const data = await response.json(); // This will now succeed
          return data}
      async function signup(){
        const response =await fetch(`http://localhost:${PORT}/signup`{
          method: 
        })
      }
// console.log(await getCourse())
// console.log(await getlesson(3))
// console.log(await mark("ysk2Poa54jQRxPhzs1qxJEZwC3u2",2,["x = 5","int x = 5","x := 5","let x = 5"]))
      