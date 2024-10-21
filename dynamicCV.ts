const updateResume = (): void => {
    const name: string = (document.querySelector('#name') as HTMLInputElement).value;
    const email: string = (document.querySelector('#email') as HTMLInputElement).value;
    const phone: string = (document.querySelector('#phone') as HTMLInputElement).value;
    const address: string = (document.querySelector('#address') as HTMLInputElement).value;
    const education: string = (document.querySelector('#education') as HTMLInputElement).value;
    const workExperience: string = (document.querySelector('#workExperience') as HTMLInputElement).value;
    const skills: string[] = (document.querySelector('#skills') as HTMLInputElement).value.split(',');
    const languages: string[] = (document.querySelector('#languages') as HTMLInputElement).value.split(',');

    (document.querySelector('#resumeName') as HTMLElement).innerText = name;
    (document.querySelector('#resumeEmail') as HTMLElement).innerText = email;
    (document.querySelector('#resumePhone') as HTMLElement).innerText = phone;
    (document.querySelector('#resumeAddress') as HTMLElement).innerText = address;
    (document.querySelector('#resumeEducation') as HTMLElement).innerText = education;
    (document.querySelector('#resumeWorkExperience') as HTMLElement).innerText = workExperience;

    const resumeSkills = document.querySelector('#resumeSkills') as HTMLElement;
    resumeSkills.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill.trim();
        resumeSkills.appendChild(li);
    });

    const resumeLanguages = document.querySelector('#resumeLanguages') as HTMLElement;
    resumeLanguages.innerHTML = '';
    languages.forEach(language => {
        const li = document.createElement('li');
        li.innerText = language.trim();
        resumeLanguages.appendChild(li);
    });
};

const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('input', updateResume));
