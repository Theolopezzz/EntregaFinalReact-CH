import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import './App.css'

function App() {
  useEffect(() => {
    const db = getFirestore()
    const refDoc = doc(db, "items", "jVwzFhncNCsZxxQUxJnZ")
    getDoc(refDoc).then((snapshot)=>{
      console.log({...snapshot.data(),id: snapshot.id})
    })
  })
  return (1)
}

export default App
