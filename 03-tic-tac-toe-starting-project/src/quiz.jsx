function Review({ feedback, student }) {
    return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}
function Quiz() {
  const [feedBack, setFeedBack] = useState('');
  const [name, setName] = useState('')
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedBack} onChange={(event) => setFeedBack(event.target.value)}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedBack} student={name}/>https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-09-08_08-51-31-9f73cfd685216d55ab58414730bdbdc0.jpg

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}
export default Quiz