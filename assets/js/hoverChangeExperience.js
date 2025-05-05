export function hoverChangeExperience(
  nameCard,
  changeDescription,
  titleExperience,
  companyExperience,
  dateExperience
) {
  const varChangeDescription = document.querySelector(".changeExperience");
  const varTitleExperience = document.querySelector(".titleExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");


    const elements = documents.querySelector(nameCard);
    if (Element){
      Element.addEventListener("click", () => {
        varChangeDescription.innerHTML = changeDescription;
        varCompanyExperience.innerHTML = companyExperience;
        varTitleExperience.innerHTML = titleExperience;
        varDateExperience.innerHTML = dateExperience;
      });
    } else {
      console.error(`Elemento '${nameCard}' não encontrado`);
    }
   
}

const header = document.getElementById("experience-company");
if (header) {
  const btns = header.getElementsByClassName("company");

} else {
  console.error("Elemento com ID 'experience-company' não encontrado.");
}


    const current = document.getElementsByClassName("activeExperience");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeExperience", "");
    } 
