import { useState } from 'react'



function App() {
  return (
    <>
      <Adote />
    </>
  )
}

export default App


const Adote = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(null)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const handleNextAnecdote = ()=>{
    let RandomIndex = Math.floor(Math.random()*anecdotes.length)
    setSelected(RandomIndex)
  }

  const handleVote = ()=>{
  const newVotes = [...votes];
  newVotes[selected] += 1;
  setVotes(newVotes)
  }


  return (
    <>
    <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>

      <h3>Votes {votes[selected]}</h3>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>

    <h1>Anecdotes with the most vote</h1>
    {anecdotes[votes.indexOf(Math.max(...votes))]} <p>has {Math.max(...votes)} votes</p>
    </>
  )
}