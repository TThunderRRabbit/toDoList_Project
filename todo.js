const projectsContainer = document.querySelector(".projectsContainer")
const newProjectButton = document.querySelector(".newProject")
const projectList = document.querySelector(".projectLists")


newProjectButton.addEventListener("click", function(){

    if(!projectList.querySelector("input")) {
    const projectInput = document.createElement("input")
    projectInput.placeholder = "Enter project title"
    const addButton = document.createElement("button")
    addButton.textContent = "add"
    const cancelButton = document.createElement("button")
    cancelButton.textContent = "cancel"

    const projectContainer = document.createElement("div")
    projectContainer.append(projectInput, addButton, cancelButton)
    projectList.append(projectContainer)
    
    cancelButton.addEventListener("click", function(){
        projectContainer.remove()
    })

    addButton.addEventListener("click", function(){
        const newProjectDiv = document.createElement('div')
        const newProject = new Project(projectInput.value)
        const titleDiv = document.createElement('div')
        titleDiv.textContent = newProject.title
        const addTask = document.createElement('div')
        addTask.textContent = "+ Add Task"
        projectList.appendChild(newProjectDiv)
        const toDoCard = document.createElement('div') 

        const deleteButton = document.createElement('button')
        deleteButton.textContent = "delete"
        const renameButton = document.createElement('button')
        renameButton.textContent = "rename"

        newProjectDiv.append(titleDiv, toDoCard, addTask)
        titleDiv.append(deleteButton, renameButton)
        projectContainer.remove()
        
        deleteButton.addEventListener("click", function(){
        newProjectDiv.remove();
        })

        renameButton.addEventListener("click", function(){
            const renameInput = document.createElement("input")
            renameInput.textContent = newProject.title
            titleDiv.textContent = ""
            titleDiv.appendChild(renameInput)

            renameInput.addEventListener("blur", function(){
                newProject.title = renameInput.value
                titleDiv.textContent = newProject.title
            })
        })

        addTask.addEventListener("click", function(){

            if(!toDoCard.querySelector("input")) {
            const titleText = document.createElement("div")
            titleText.textContent = "Title:" 
            const titleForm = document.createElement("input")
            const detailsText = document.createElement('div')
            detailsText.textContent = "Details:"
            const detailsForm = document.createElement("input")
            const dateForm = document.createElement("input")
            dateForm.type = "date";
            const dateText = document.createElement("div")
            dateText.textContent = "Date:"
            const addToDo =document.createElement("button")
            addToDo.textContent = "add"
            const cancelToDo = document.createElement("button")
            cancelToDo.textContent = "cancel"
                
            
            toDoCard.append(titleText, titleForm, detailsText, detailsForm, dateText, dateForm, addToDo, cancelToDo)
            
            cancelToDo.addEventListener("click", function(){
                toDoCard.innerHTML = ""
            })
            addToDo.addEventListener("click", function(){
               
                const toDoCardOutput = document.createElement("div")
                toDoCard.appendChild(toDoCardOutput)
                const toDoTitle = document.createElement("div")
                toDoTitle.textContent = "Title: " + titleForm.value
                const toDoDetails = document.createElement("div")
                toDoDetails.textContent = "Details: " + detailsForm.value
                const toDoDate = document.createElement("div")
                toDoDate.textContent = dateForm.value  
                toDoCard.innerHTML = ""
                toDoCard.append(toDoTitle, toDoDetails, toDoDate)
            })
            }
            })


})

}})

class Project{
    constructor(title, priorityLevel){
        this.title = title
        this.priorityLevel = priorityLevel
    }}

class toDo{
    constructor(title, details, date){
        this.title = title
        this.details = details
        this.date = date
    }
}