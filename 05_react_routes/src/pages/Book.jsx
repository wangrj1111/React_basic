import React from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {
    const { bookId } = useParams()
  return (
    <div>
        <h2>Book Page</h2>
        <p>Book ID: {bookId}</p>
    </div>
  )
}

export default Book
