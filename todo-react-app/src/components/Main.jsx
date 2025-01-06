export function Main(props) {
  return (
    <main className="main">
      {props.children}
      <div className="image-container">
        <div className="add-section-line">
          <span className="red-line">_________________________</span>
          <button className="add-section-text">Add Section</button>
          <span className="red-line">_________________________</span>
        </div>
        <div className="image"></div>
        <div className="main-text-container">
        <h6>Your peace of mind is priceless</h6>
        <p className="well-done-text">Well done! All your tasks are organized in the right place</p>
          <p className="well-done-text red-text">
            <span className="question-mark">
              <i className="fa-solid fa-question"></i>
            </span>
            How to declutter your mind with the inbox
          </p>
          </div>
      </div>
    </main>
  )
}