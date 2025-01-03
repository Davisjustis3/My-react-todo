export function MyProjects() {
  const myProjects = [
    {
      todoName: 'Getting a job in Tech',
      todos: []
    }
  ]

  const projects = myProjects.map((project) => (
    <a className="my-projects-boxes" key={project.todoName}>
      <div className="my-projects-box" >
        <span>
        <i className="fa-solid fa-hashtag"></i>
          <span className="project-link">{project.todoName}</span>
          </span>
        <span>{project.todos.length}</span>
      </div>
    </a>
  ))
  return (
    <div className="my-projects-container">
      <h4 className="my-projects-title">My Projects</h4>
      {projects}
    </div>
  )
}