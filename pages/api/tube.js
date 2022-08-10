
import YoutubeTranscript from 'youtube-transcript';



export default async function handler(req, res) {

  const data  = await YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=g7KI3TO_8-w')
const text = data.map(chunk => chunk.text).join(',')

console.log(data)



    res.send(text)
  }
  