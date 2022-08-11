import { useState, useRef, useEffect } from "react"
import { submitComment } from "../services"

const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if(!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }

    if(storeData){
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
        .then((res) => {
          setShowSuccessMessage(true)
          setTimeout(() => {
            setShowSuccessMessage(false)
          }, 3000)
        })

  }

  return (
    <div className="bg-white rounded-2xl p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4"> Laisser un Commentaire</h3>
      {showSuccessMessage && 
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
          <span className="font-medium">Votre commentaire a été publié avec succès.</span> 
        </div>}
      {error && 
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
          <span className="font-medium">Tous les champs sont obligatoires.</span>
        </div>}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea ref={commentEl} className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-100 text-gray-700" placeholder="Comment" name="comment"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-100 text-gray-700"
          placeholder="Nom"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-100 text-gray-700"
          placeholder="Adresse mail"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="p-2">
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value={true}
          />
          <label className="text-gray-500 cursor-pointer ml-2">Nous pouvons enregistrer votre nom et email sur ce navigateur pour que vous n’ayez pas besoin de les entrer à nouveau.</label>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="button" onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-blue-900 inline-block bg-blue-600 text-lg rounded-xl text-white px-8 py-3 cursor-pointer"
        >Envoyer</button> 
      </div>
    </div>
  )
}

export default CommentsForm